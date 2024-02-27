package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"

)

var start = time.Now()

func tempoDecorrido() {
	println()
	fmt.Println("Time taken: ", time.Since(start))
}

var (
	acertou = false
)

func main() {
	defer tempoDecorrido()

	var wait sync.WaitGroup
	wait.Add(100)

	var once sync.Once
	
	for i := 0; i < 100; i++ {
		go func() {
			if adivinharNumero() {
				once.Do(marcarAcerto)
			}
			wait.Done()
		}()
	}

	wait.Wait()
	if acertou {
		fmt.Println("Acertou!")
	} else {
		fmt.Println("Errou!")
	}
}

func adivinharNumero() bool {
	return rand.Intn(10) == 0
}

func marcarAcerto() {
	acertou = true
}
