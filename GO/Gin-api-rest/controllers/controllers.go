package controllers

import "github.com/gin-gonic/gin"

func Saudacao(c *gin.Context) {
	nome := c.Params.ByName("nome")

	c.JSON(200, gin.H{
		"API diz:": "Eai " + nome + ", tudo beleza?",
	})
}

func GetTodosAlunos(c *gin.Context) {
	c.JSON(200, gin.H{
		"id":   "1",
		"nome": "João Victor Perazzo",
	})
}
