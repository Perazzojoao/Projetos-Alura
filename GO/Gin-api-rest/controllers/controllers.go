package controllers

import (
	"github.com/gin-gonic/gin"

	"api-go-gin/controllers/models"
)

func Saudacao(c *gin.Context) {
	nome := c.Params.ByName("nome")

	c.JSON(200, gin.H{
		"API diz:": "Eai " + nome + ", tudo beleza?",
	})
}

func GetTodosAlunos(c *gin.Context) {
	c.JSON(200, models.Alunos)
}
