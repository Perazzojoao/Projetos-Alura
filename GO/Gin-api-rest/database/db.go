package database

import (
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"api-go-gin/models"
)

var (
	DB  *gorm.DB
	err error
)

func ConectarDB() {
	dsn := "host=localhost user=root password=root dbname=root port=5432 sslmode=disable"
	DB, err = gorm.Open(postgres.Open(dsn))
	if err != nil {
		log.Println("Erro ao conectar com DB")
		log.Panic(err.Error())
	}
	DB.AutoMigrate(&models.Aluno{})
}
