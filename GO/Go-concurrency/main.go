package main

import (
	"fmt"
	"sync"
	"time"

)

var start = time.Now()

func tempoDecorrido() {
	println()
	fmt.Println("Time taken: ", time.Since(start))
}

func main() {
	defer tempoDecorrido()

	var beeper sync.WaitGroup
	nomes := [3]string{"João", "Maria", "José"}
	beeper.Add(len(nomes))
	for _, nome := range nomes {
		go func(nome string, beeper *sync.WaitGroup) {
			fmt.Println("Hello, ", nome)
			beeper.Done()
		}(nome, &beeper)
	}

	beeper.Wait()
	fmt.Println("Fim do programa!")
}
