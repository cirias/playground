package main

import (
	"code.google.com/p/go-tour/pic"
	"image"
	"image/color"
)

type Image struct {
	W int
	H int
}

func (img Image) Bounds() image.Rectangle {
	return image.Rect(0, 0, img.W, img.H)
}

func (img Image) ColorModel() color.Model {
	return color.RGBAModel
}

func (img Image) At(x, y int) color.Color {
	return color.RGBA{uint8(x), uint8(y), uint8(y - x), 255}
}

func main() {
	m := Image{200, 200}
	pic.ShowImage(m)
}
