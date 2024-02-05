package main

import (
	"fmt"
	"net/http"

	"api-rest/models"
	"api-rest/routes"

)

func main() {
	models.Personalidades = []models.Personalidade{
		{Nome: "Nome 1", Historia: "História 1"},
		{Nome: "Nome 2", Historia: "História 2"},
	}

	routes.HandleRequest()

	fmt.Println("Iniciando servidor na porta 8080...")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		panic(err.Error())
	}
}
