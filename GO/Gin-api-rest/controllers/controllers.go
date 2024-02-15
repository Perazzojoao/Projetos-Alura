package controllers

import (
	"github.com/gin-gonic/gin"

	"api-go-gin/controllers/models"
	"api-go-gin/database"

)

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
