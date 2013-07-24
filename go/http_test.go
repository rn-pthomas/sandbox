package main

import (
  "fmt"
  "net/http"
  "log"
  //"encoding/json"
)

func main() {
  server_port := ":1111"
  api_routes := []string{"api", "api/status", "api/status/foo"}

  for i := 0; i < api_routes.len - 1; i++ {
    fmt.Println(api_routes[i])
  }
}
