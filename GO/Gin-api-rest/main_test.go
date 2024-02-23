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

func SetupRoutersTest() *gin.Engine {
	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()
	return r
}

func AddAlunoTeste() {
	database.ConectarDB()
	var a = models.Aluno{CPF: "01234567890", Nome: "Teste", RG: "123456789"}
	database.DB.Create(&a)
	ID = int(a.ID)
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
