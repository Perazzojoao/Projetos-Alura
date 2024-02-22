package main

import (
	"io"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"

	"api-go-gin/controllers"
)

func SetupRoutersTest() *gin.Engine {
	r := gin.Default()
	return r
}

func TestStatusCode(t *testing.T) {
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
