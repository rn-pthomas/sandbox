package main

import (
  //"encoding/json"
  "os"
  "fmt"
  "log"
)

// Utility functions -->
func handleError(err error) {
  if err != nil {
    log.Fatal(err)
  }
}
// <-- Utility functions

func decodeFile() {

}

func readFile() {
  if len(os.Args) < 1 {
    log.Fatal("Error: need to provide a file to read")
  }
  fmt.Println(len(os.Args))
  fmt.Println("foof")
}

func main() {
  readFile()
  //filename := readFile()os.Args[1]
  //file, err := os.Open(filename)
  //handleError(err)
  //fmt.Println(file)
}
