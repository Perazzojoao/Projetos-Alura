package file

import (
	"bufio"
	"fmt"
	"os"
	"strings"

	"go-concurrency/tools"
)

func ReadData(date int) []string {
	pathFile := fmt.Sprintf("data/CASANFE_20240227145539_%d.txt", date)

	// Read data from file
	file, err := os.Open(pathFile)
	if err != nil {
		panic(err.Error())
	}
	defer file.Close()

	scanner := bufio.NewReader(file)
	linha, err := scanner.ReadString('\n')
	if err != nil {
		panic(err.Error())
	}

	err = tools.ConvertToUTF8(&linha)
	if err != nil {
		panic(err.Error())
	}

	linha = tools.RemoveAcentuacao(linha)
	return strings.Split(linha, "|")
}
