package models

type Personalidade struct {
	Nome     string `jason:"nome"`
	Historia string `jason:"historia"`
}

var Personalidades []Personalidade
