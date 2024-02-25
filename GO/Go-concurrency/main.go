package main

import (
	"fmt"
	"time"
)

func main() {
	start := time.Now()
	defer func() {
		println()
		fmt.Println("Time taken: ", time.Since(start))
	}()

	count := [5]int{1, 2, 3, 4, 5}

	for _, v := range count {
		go printCount(v)
	}
	time.Sleep(time.Second * 2)
}

func printCount(v int) {
	fmt.Print(v)
	time.Sleep(time.Second)
}
