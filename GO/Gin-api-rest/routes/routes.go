package routes

import (
	"log"

	"github.com/gin-gonic/gin"

	"api-go-gin/controllers"
)

func HandleRequests() {
	r := gin.Default()

	r.GET("/alunos/exemplo", controllers.Exemplo)
	r.GET("/:nome", controllers.Saudacao)
	r.GET("/alunos", controllers.GetTodosAlunos)
	r.GET("/alunos/:id", controllers.GetAluno)
	r.POST("/alunos", controllers.AddAluno)
	r.DELETE("/alunos/:id", controllers.DeleteAluno)
	r.PUT("/alunos/:id", controllers.EditAluno)
	r.GET("/alunos/cpf/:cpf", controllers.SeartchAlunoCpf)

	err := r.Run(":8080")
	if err != nil {
		log.Panic(err.Error())
	}
}
