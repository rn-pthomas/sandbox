package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"log"
	"math"
	"net/http"
	"os"
	"strconv"
)

type Coordinate [2]float64
type Polygon []Coordinate
type StateData struct {
	State  string
	Border Polygon
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

func insideBoundaries(x float64, y float64, poly Polygon) bool {
	n := len(poly)
	inside := false
	var xints float64

	p1x := poly[0][1]
	p1y := poly[0][0]

	for i := 0; i <= n; i++ {
		p2x := poly[i%n][1]
		p2y := poly[i%n][0]
		if y > math.Min(p1y, p2y) {
			if y <= math.Max(p1y, p2y) {
				if x <= math.Max(p1x, p2x) {
					if p1y != p2y {
						xints = (y-p1y)*(p2x-p1x)/(p2y-p1y) + p1x
					}
					if p1x == p2x || x <= xints {
						inside = !inside
					}
				}
			}
		}
		p1x = p2x
		p1y = p2y
	}

	return inside
}

func findMatchingState(latitude float64, longitude float64, states []StateData) string {
	var match string
	for i := 0; i < len(states); i++ {
		state := states[i]
		if insideBoundaries(latitude, longitude, state.Border) {
			match = state.State
			break
		}
	}
	return match
}

func handleRequest(r *http.Request, states []StateData) []string {
	r.ParseForm()
	latitude, err := strconv.ParseFloat(r.FormValue("latitude"), 64)
	if err != nil {
		return []string{"Error, latitude must be provided"}
	}
	longitude, err := strconv.ParseFloat(r.FormValue("longitude"), 64)
	if err != nil {
		return []string{"Error, longitude must be provided"}
	}

	return []string{findMatchingState(latitude, longitude, states)}
}

func main() {
	states := readStates()

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "%q", handleRequest(r, states))
	})
	
	fmt.Println("server running on port 8080...\n")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
