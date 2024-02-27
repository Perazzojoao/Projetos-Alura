package main

import (
	"fmt"
	"time"

	"go-concurrency/gui"
)

var tempo = time.Now()

func duration() {
	println()
	fmt.Println(time.Since(tempo))
}

func main() {
	defer duration()

	var opcao int
	for opcao != 2 {
		gui.ExibeMenu()

		fmt.Print("Escolha uma opção: ")
		_, err := fmt.Scan(&opcao)
		if err != nil {
			fmt.Println("Opção inválida")
		}
	}
}
