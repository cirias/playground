package main

import (
  "fmt"
	"log"
	"net/http"
)

type String string

type Struct struct {
  greeting string
  punct    string
  who      string
}

func (s String) ServeHTTP(
  w http.ResponseWriter,
  r *http.Request) {
  fmt.Fprint(w, s)
}

func (s *Struct) ServeHTTP(
  w http.ResponseWriter,
  r *http.Request) {
  fmt.Fprint(w, s.greeting, s.punct, s.who)
}

func main() {
	// your http.Handle calls here
  http.Handle("/string", String("I'm a frayed knot."))
  http.Handle("/struct", &Struct{"Hello", ":", "Gophers!"})
	log.Fatal(http.ListenAndServe("localhost:4000", nil))
}
