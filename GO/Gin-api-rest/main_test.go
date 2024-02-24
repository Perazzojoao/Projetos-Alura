package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"

	"api-go-gin/controllers"
	"api-go-gin/database"
	"api-go-gin/models"

)

var ID int
var alunoMock = models.Aluno{CPF: "01234567890", Nome: "Teste", RG: "123456789"}

func SetupRoutersTest() *gin.Engine {
	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()
	return r
}

func AddAlunoTeste() {
	database.ConectarDB()
	database.DB.Create(&alunoMock)
	ID = int(alunoMock.ID)
}

func DeleteAluno(t *testing.T) {
	if ID == 0 {
		t.Fatal("ID = 0, não é possível deletar aluno.")
	}

	database.ConectarDB()
	var a models.Aluno
	database.DB.Delete(&a, fmt.Sprint(ID))
}

func TestExemplo(t *testing.T) {
	r := SetupRoutersTest()
	r.GET("/alunos/exemplo", controllers.Exemplo)

	req, _ := http.NewRequest("GET", "/alunos/exemplo", nil)
	resp := httptest.NewRecorder()
	r.ServeHTTP(resp, req)

	assert := assert.New(t)
	assert.Equal(http.StatusOK, resp.Code)

	mockResp := `{"cpf":"00000000000","nome":"Fulano","rg":"000000000"}`
	respBody, _ := io.ReadAll(resp.Body)
	assert.Equal(mockResp, string(respBody))
}

func TestGetAllAlunos(t *testing.T) {
	database.ConectarDB()
	r := SetupRoutersTest()
	r.GET("/alunos", controllers.GetTodosAlunos)

	req, _ := http.NewRequest("GET", "/alunos", nil)
	resp := httptest.NewRecorder()
	r.ServeHTTP(resp, req)

	assert := assert.New(t)
	assert.Equal(http.StatusOK, resp.Code)

	respBody, _ := io.ReadAll(resp.Body)
	assert.NotEmpty(string(respBody))
}

func TestGetAluno(t *testing.T) {
	database.ConectarDB()
	r := SetupRoutersTest()
	AddAlunoTeste()
	defer DeleteAluno(t)
	r.GET("/alunos/:id", controllers.GetAluno)

	req, _ := http.NewRequest("GET", fmt.Sprintf("/alunos/%d", ID), nil)
	resp := httptest.NewRecorder()
	r.ServeHTTP(resp, req)

	assert := assert.New(t)
	assert.Equal(http.StatusOK, resp.Code)
	respBody, _ := io.ReadAll(resp.Body)
	assert.NotEmpty(string(respBody))

	var a models.Aluno
	err := json.Unmarshal(respBody, &a)
	assert.Nil(err)

	assert.Equal(alunoMock.Nome, a.Nome)
	assert.Equal(alunoMock.CPF, a.CPF)
	assert.Equal(alunoMock.RG, a.RG)
}

func TestAddAluno(t *testing.T) {
	database.ConectarDB()
	r := SetupRoutersTest()
	r.POST("/alunos", controllers.AddAluno)

	mockResp := `{"cpf":"01234567890","nome":"Teste","rg":"123456789"}`
	req, _ := http.NewRequest("POST", "/alunos", bytes.NewReader([]byte(mockResp)))
	resp := httptest.NewRecorder()
	r.ServeHTTP(resp, req)

	assert := assert.New(t)
	assert.Equal(http.StatusOK, resp.Code)

	respBody, _ := io.ReadAll(resp.Body)
	assert.NotEmpty(string(respBody))

	var a models.Aluno
	json.Unmarshal(respBody, &a)
	ID = int(a.ID)

	DeleteAluno(t)
}

func TestDelete(t *testing.T) {
	database.ConectarDB()
	r := SetupRoutersTest()
	r.DELETE("/alunos/:id", controllers.DeleteAluno)
	AddAlunoTeste()

	req, _ := http.NewRequest("DELETE", fmt.Sprintf("/alunos/%d", ID), nil)
	resp := httptest.NewRecorder()
	r.ServeHTTP(resp, req)

	assert := assert.New(t)
	if !assert.Equal(http.StatusOK, resp.Code, "Erro ao deletar aluno.") {
		DeleteAluno(t)
	}
}

func TestUpdateAluno(t *testing.T) {
	database.ConectarDB()
	r := SetupRoutersTest()
	r.PUT("/alunos/:id", controllers.EditAluno)
	AddAlunoTeste()
	defer DeleteAluno(t)

	alunoEditado := models.Aluno{CPF: "01234567891", Nome: "Teste Editado", RG: "123456781"}
	alunoEditadoBytes, _ := json.Marshal(alunoEditado) // Convert alunoEditado to byte slice
	req, _ := http.NewRequest("PUT", fmt.Sprintf("/alunos/%d", ID), bytes.NewReader(alunoEditadoBytes))
	resp := httptest.NewRecorder()
	r.ServeHTTP(resp, req)

	assert := assert.New(t)
	assert.Equal(http.StatusOK, resp.Code)

	respBody, _ := io.ReadAll(resp.Body)
	assert.NotEmpty(respBody, "Erro ao receber resposta.")

	var a models.Aluno
	err := json.Unmarshal(respBody, &a)
	assert.Nil(err, "Erro ao converter resposta para struct.")
	assert.Equal(alunoEditado, a, "Erro ao editar aluno.")
}
