package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
	"os"
)

func main() {
	clientId := "Lt5Z0Pe6dFuw9eCg8onxP"
	apiKey := "2ZprmP6OCXz8F2eMNv6J48KSqCvKaBByWOL80GQmm"
	response, err := http.Get("https://api.digitalocean.com/droplets/?client_id=" + clientId + "&api_key=" + apiKey)
	if err != nil {
		fmt.Printf("Encountered error =>\n%s", err)
		os.Exit(1)
	} else {
		defer response.Body.Close()
		contents, err := ioutil.ReadAll(response.Body)
		if err != nil {
			fmt.Printf("Encountered error =>\n%s", err)
			os.Exit(1)
		}
		fmt.Printf("Response was =>\n%s\n", string(contents))
	}
}
