package app

import (
	"log"
	"net/http"

	"github.com/venk196/E-commerce/tree/main/controllers/usercontroller"
)

func main() {
    // Register the VerifyUser method of the UserController to handle POST requests to "/api/verify"
    http.HandleFunc("/api/verify", usercontroller.VerifyUser)

    // Start the server and listen for requests
    log.Fatal(http.ListenAndServe(":8080", nil))
}
