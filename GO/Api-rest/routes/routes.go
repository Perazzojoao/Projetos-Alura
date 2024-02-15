package routes

import (
	"fmt"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"

	"api-rest/controllers"
	"api-rest/middleware"

)

func HandleRequest() {
	r := mux.NewRouter()
	r.Use(middleware.ContentType)
	r.HandleFunc("/", controllers.Home)
	r.HandleFunc("/api/personalidades", controllers.GetTodasPersonalidades).Methods("Get")
	r.HandleFunc("/api/personalidades/{id}", controllers.GetPersonalidade).Methods("Get")
	r.HandleFunc("/api/personalidades", controllers.AddPersonalidade).Methods("Post")
	r.HandleFunc("/api/personalidades/{id}", controllers.DeletePersonalidade).Methods("Delete")
	r.HandleFunc("/api/personalidades/{id}", controllers.EditPersonalidade).Methods("Put")

	fmt.Println("Iniciando servidor na porta 8080...")
	err := http.ListenAndServe(":8080", handlers.CORS(handlers.AllowedOrigins([]string{"localhost:8000"}))(r))
	if err != nil {
		panic(err.Error())
	}
}
