package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"../services"
)


type User struct {
    Username string `json:"username"`
    Password string `json:"password"`
}


func VerifyUser(w http.ResponseWriter, r *http.Request) {
    // Parse the request body to get the username and password
    var user User
    err := json.NewDecoder(r.Body).Decode(&user)
    if err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }
	
	if services.VerifyUser(user.Username , user.Password){
		w.WriteHeader(http.StatusOK)
        fmt.Fprintf(w, "User %s is verified", user.Username)
    } else {
        // If the user is not verified, return an error response
        w.WriteHeader(http.StatusUnauthorized)
        fmt.Fprintf(w, "User %s is not verified", user.Username)
    
	}
    
}



