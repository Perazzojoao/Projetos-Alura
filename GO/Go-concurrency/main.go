package main

import (
	"fmt"
	"time"
)

var start = time.Now()

func tempoDecorrido() {
	println()
	fmt.Println("Time taken: ", time.Since(start))
}

func main() {
	defer tempoDecorrido()

	candidato1, candidato2 := make(chan string), make(chan string)

	go elegerGanhador(candidato1, "Candidato 1")
	go elegerGanhador(candidato2, "Candidato 2")

	select {
	case vencedor := <-candidato1:
		fmt.Println(vencedor, "venceu!")
	case vencedor := <-candidato2:
		fmt.Println(vencedor, "venceu!")
	}
}

func elegerGanhador(candidato chan string, mensagem string) {
	candidato <- mensagem
}
