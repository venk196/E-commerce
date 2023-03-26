package main

import (
	"E-commerce/app/controllers"
	"fmt"
	"log"
	"net/http"
)

func main() {
    // Register the VerifyUser method of the UserController to handle POST requests to "/api/verify"
    http.HandleFunc("/api/verify", controllers.VerifyUser)
    fmt.Println("TEST IS WORKING")

    // Start the server and listen for requests
    log.Fatal(http.ListenAndServe(":8000", nil))
}
