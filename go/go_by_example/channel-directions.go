package main

import "fmt"

func ping(pings chan<-string, msg string) {
  pings <- msg
}
