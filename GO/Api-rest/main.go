package main

import (
	"api-rest/database"
	"api-rest/routes"
)

func main() {
	database.ConectarDB()

	routes.HandleRequest()
}
