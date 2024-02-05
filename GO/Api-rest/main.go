package main

import (
	"api-rest/models"
	"api-rest/routes"

)

func main() {
	models.Personalidades = []models.Personalidade{
		{Id: 1, Nome: "Nome 1", Historia: "História 1"},
		{Id: 2, Nome: "Nome 2", Historia: "História 2"},
	}

	routes.HandleRequest()
}
