package main

import (
	"io"
	"os"
	"strings"
)

type rot13Reader struct {
	r io.Reader
}

func (rR rot13Reader) Read(b []byte) (n int, err error) {
	for {
		n, err := rR.r.Read(b)
		for i := range b {
			if ('A' <= b[i] && b[i] < 'N') || ('a' <= b[i] && b[i] < 'n') {
				b[i] += 13
			} else if ('M' < b[i] && b[i] <= 'Z') || ('m' < b[i] && b[i] <= 'z') {
				b[i] -= 13
			}
		}
		return n, err
	}
}

func main() {
	s := strings.NewReader("Lbh penpxrq gur pbqr!")
	r := rot13Reader{s}
	io.Copy(os.Stdout, &r)
}
