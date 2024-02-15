package routes

import (
	"log"

	"github.com/gin-gonic/gin"

	"api-go-gin/controllers"

)

func HandleRequests() {
	r := gin.Default()

	r.GET("/alunos", controllers.GetTodosAlunos)
	r.GET("/:nome", controllers.Saudacao)

	err := r.Run()
	if err != nil {
		log.Panic(err.Error())
	}
}
