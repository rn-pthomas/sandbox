package main

import (
  "fmt"
)

func print_one() {
  fmt.Println("hello!")
}

func print_two() {
  fmt.Println("Hello again!")
}

func main() {
  go print_one()
  go print_two()
  fmt.Println("Hello yet again!")
}

