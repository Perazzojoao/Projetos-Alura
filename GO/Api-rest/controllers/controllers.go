package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"api-rest/models"

)

func Home(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Página inicial")
}

func GetTodasPersonalidades(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(models.Personalidades)
}