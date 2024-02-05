package routes

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"

	"api-rest/controllers"
)

func HandleRequest() {
	r := mux.NewRouter()
	r.HandleFunc("/", controllers.Home)
	r.HandleFunc("/api/personalidades", controllers.GetTodasPersonalidades).Methods("Get")
	r.HandleFunc("/api/personalidades/{id}", controllers.GetPersonalidade).Methods("Get")

	fmt.Println("Iniciando servidor na porta 8080...")
	err := http.ListenAndServe(":8080", r)
	if err != nil {
		panic(err.Error())
	}
}
