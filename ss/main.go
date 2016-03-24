package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	//"io"
	//"io/ioutil"
	"log"
	"os"
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

func main() {
	states := readStates()
}
