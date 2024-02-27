package tools

import (
	"unicode"

	"golang.org/x/text/encoding/charmap"
	"golang.org/x/text/runes"
	"golang.org/x/text/transform"
	"golang.org/x/text/unicode/norm"
)

func ConvertToUTF8(str *string) error {
	dec := charmap.ISO8859_1.NewDecoder()
	out, err := dec.String(*str)
	if err != nil {
		return err
	}
	*str = out
	return nil
}

func RemoveAcentuacao(s string) string {
	t := transform.Chain(norm.NFD, runes.Remove(runes.In(unicode.Mn)), norm.NFC)
	result, _, err := transform.String(t, s)
	if err != nil {
		panic(err.Error())
	}
	return result
}
