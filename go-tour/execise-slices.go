package main

import "code.google.com/p/go-tour/pic"
import "math"

func Pic(dx, dy int) [][]uint8 {
	var matrix [][]uint8
	for y := 0; y < dy; y++ {
		var row []uint8
		for x := 0; x < dx; x++ {
			//row = append(row, uint8((x + y) / 2))
			row = append(row, uint8(math.Pow(float64(x), float64(y))))
		}
		matrix = append(matrix, row)
	}
	return matrix
}

func main() {
	pic.Show(Pic)
}
