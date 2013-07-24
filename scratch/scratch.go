package main

import (
  "fmt"
  "time"
)

func main() {
  c := make(chan string)
  go func() {
    time.Sleep(time.Duration(1000) * time.Millisecond)
    c <- "Leo"
  }()
  fmt.Printf("Hello: %s\n", <-c) // this will block until the channel has something to give us
}
