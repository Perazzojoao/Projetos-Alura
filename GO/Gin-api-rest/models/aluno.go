package models

import (
	"github.com/go-playground/validator/v10"
	"gorm.io/gorm"
)

type Aluno struct {
	gorm.Model
	Nome string `json:"nome" validate:"required"`
	CPF  string `json:"cpf" validate:"cpf"`
	RG   string `json:"rg" validate:"rg"`
}

var validate = validator.New(validator.WithRequiredStructEnabled())

func ValidaAluno(aluno *Aluno) error {
	validate.RegisterAlias("cpf", "len=11,number")
	validate.RegisterAlias("rg", "len=9,number")

	if err := validate.Struct(aluno); err != nil {
		return err
	}
	return nil
}
