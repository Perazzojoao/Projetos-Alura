package main

import (
	"fmt"
	"testing"

	"go-concurrency/file"
)

func TestPrintData(t *testing.T) {
	for _, campo := range file.ReadData(2022) {
		fmt.Println(campo)
	}
}
