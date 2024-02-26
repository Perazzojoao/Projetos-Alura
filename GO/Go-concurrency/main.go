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

	channel := make(chan string, 2)
	channel <- "Primeira mensagem"
	channel <- "Segunda mensagem"

	fmt.Println(<-channel)
	fmt.Println(<-channel)
}
