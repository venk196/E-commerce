package services

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

type Users struct {
    id int `json:"id"`
}

func VerifyUser(username string,password string) bool{
	db, err := sql.Open("mysql", "root:Mnbvcxz_00@tcp(127.0.0.1:3306)/E-commerce")
    if err != nil {
        panic(err.Error())
    }
    defer db.Close()
	results, err := db.Query("SELECT id FROM Users where Email = ?", username)
	
	
	if err !=nil {
        panic(err.Error())
    }
    for results.Next() {
        var users Users
        err = results.Scan(&users.id)
        if err !=nil {
            panic(err.Error())
        }
        fmt.Println(users.id)
		
    }
	return false
	
}
