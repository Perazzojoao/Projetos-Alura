package routes

import (
	"net/http"

	"api-rest/controllers"

)

func HandleRequest() {
	http.HandleFunc("/", controllers.Home)
	http.HandleFunc("/api/personalidades", controllers.GetTodasPersonalidades)
}
