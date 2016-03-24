package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	//"io"
	//"io/ioutil"
	"log"
	"os"
	"net/http"
	"strconv"
	//"strings"
)

type StateData struct {
	State string
	Border [][2]float32
}

func readStates() []StateData {
	states := []StateData{}

	file, err := os.Open("./states.json")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	scanner.Split(bufio.ScanLines)

	for scanner.Scan() {
		var stateData StateData
		if err := json.Unmarshal(scanner.Bytes(), &stateData); err != nil {
			log.Fatal(err)
		}
		states = append(states, stateData)
	}

	return states
}

func handleRequest(r *http.Request) string {
	r.ParseForm()
	latitude, _ := strconv.ParseFloat(r.FormValue("latitude"), 64)
	longitude, _ := strconv.ParseFloat(r.FormValue("longitude"), 64)
	fmt.Printf("latitude => %q\n", latitude)
	fmt.Printf("longitude => %q\n", longitude)
	return "pong!"
}

func main() {
	//states := readStates()

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "%q", handleRequest(r))
	})

	log.Fatal(http.ListenAndServe(":8080", nil))
}
