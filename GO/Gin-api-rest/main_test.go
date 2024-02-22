package main

import (
	"io"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"

	"api-go-gin/controllers"
	"api-go-gin/database"
)

func SetupRoutersTest() *gin.Engine {
	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()
	return r
}

func TestRouteExemplo(t *testing.T) {
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
