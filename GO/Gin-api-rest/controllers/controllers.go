package controllers

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"

	"api-go-gin/database"
	"api-go-gin/models"
)

func Exemplo(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"nome": "Fulano",
		"cpf":  "00000000000",
		"rg":   "000000000",
	})
}

func Saudacao(c *gin.Context) {
	nome := c.Params.ByName("nome")

	c.JSON(200, gin.H{
		"API diz:": "Eai " + nome + ", tudo beleza?",
	})
}

func GetTodosAlunos(c *gin.Context) {
	var a []models.Aluno

	database.DB.Find(&a)

	c.JSON(200, a)
}

func GetAluno(c *gin.Context) {
	var a models.Aluno
	id := c.Params.ByName("id")

	database.DB.First(&a, id)
	if a.ID == 0 {
		c.JSON(http.StatusNotFound, gin.H{
			"Not found": "Id não encontrado",
		})
		return
	}
	c.JSON(http.StatusOK, a)
}

func AddAluno(c *gin.Context) {
	var a models.Aluno
	err := c.ShouldBindJSON(&a)
	if err != nil {
		log.Println("Erro: JSON Aluno não recebido.")
		c.JSON(http.StatusBadRequest, gin.H{
			"Error": err.Error(),
		})
		return
	}

	err = models.ValidaAluno(&a)
	if err != nil {
		log.Println("Erro: JSON Aluno inválido.")
		c.JSON(http.StatusBadRequest, gin.H{
			"Error": err.Error(),
		})
		return
	}

	database.DB.Create(&a)
	c.JSON(http.StatusOK, a)
}

func DeleteAluno(c *gin.Context) {
	var a models.Aluno
	id := c.Params.ByName("id")

	database.DB.Delete(&a, id)
	if a.ID == 0 {
		c.JSON(http.StatusNotFound, gin.H{
			"Not found": "Id não encontrado",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"DELETE": "Alunoi deletado com sucesso",
	})
}

func EditAluno(c *gin.Context) {
	var a models.Aluno
	id := c.Params.ByName("id")

	database.DB.First(&a, id)
	if a.ID == 0 {
		c.JSON(http.StatusNotFound, gin.H{
			"Not found": "Id não encontrado",
		})
		return
	}
	err := c.ShouldBindJSON(&a)
	if err != nil {
		log.Println("Erro ao receber json.")
		c.JSON(http.StatusBadRequest, gin.H{
			"Erro": err.Error(),
		})
		return
	}

	err = models.ValidaAluno(&a)
	if err != nil {
		log.Println("Erro: JSON Aluno inválido.")
		c.JSON(http.StatusBadRequest, gin.H{
			"Error": err.Error(),
		})
		return
	}

	// database.DB.Save(&a) -> Não seguro, pois cria dados caso id não seja encontrado.
	database.DB.Model(&a).UpdateColumns(a)
	c.JSON(http.StatusOK, a)
}

func SeartchAlunoCpf(c *gin.Context) {
	var a models.Aluno
	cpf := c.Param("cpf")

	database.DB.Where(&models.Aluno{CPF: cpf}).First(&a)
	if a.ID == 0 {
		c.JSON(http.StatusNotFound, gin.H{
			"Not found": "Cpf não encontrado",
		})
		return
	}
	c.JSON(http.StatusOK, a)
}
