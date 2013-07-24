// A simple implementation of a JSON pump for handling HTTP requests.
// Starts up an http listener for a given API endpoint, receives
// some JSON, transforms it in some way, and returns a new JSON object.
package main

import (
	"fmt"
	"net/http"
	"json"
)

func listen(endpoint string, port string) {
	// Kicks off http listener
	http.HandleFunc(endpoint, serve)
	http.ListenAndServe(string(":" + endpoint), nil)
}

func serve() {

}

func pump() {
	// This is where the magic happens
	request := listen()
}
