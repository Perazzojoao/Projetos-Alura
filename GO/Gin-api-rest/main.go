package main

import (
	"api-go-gin/database"
	"api-go-gin/routes"
)

func main() {
	database.ConectarDB()
	routes.HandleRequests()
}
