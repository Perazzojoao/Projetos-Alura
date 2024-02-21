package models

import (
	"github.com/go-playground/validator/v10"
	"gorm.io/gorm"
)

type Aluno struct {
	gorm.Model
	Nome string `json:"nome" validate:"required"`
	CPF  string `json:"cpf" validate:"unique,len=11"`
	RG   string `json:"rg" validate:"unique,len=9"`
}

var validate = validator.New(validator.WithRequiredStructEnabled())

func ValidaAluno(aluno *Aluno) error {
	if err := validate.Struct(aluno); err != nil {
		return err
	}
	return nil
}
