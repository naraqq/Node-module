const express = require("express");
const mysql = require("mysql2");

const app = express();

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "c<UVp/^WK]cp82:a",
    database: "employees",
    multipleStatements: true,
})

connection.connect((err) => {
    if(!err) {
        console.log("Database connected successfully");
    } else {
        console.log("error");
    }
})

app.get('/company', (req, res) => {
    const request = req.query;

    connection.query(`select count(*) as testing from employees where emp_no in (select emp_no from titles where title = ?)`,[request.title], 
    (err, rows, fields) => {
        if(!err) {
            res.send(rows)
        } else {
            console.log(err);
            res.send(err)
        }
    })
})

app.get('/salary', (req, res) => {
    const salary = res

    connection.query(`select sum(salary) from employees.salaries;`, 
    (err, rows, fields) => {
        if(!err) {
            const toJson = JSON.stringify(rows)
            res.send(toJson)
            console.log(typeof toJson);
        } else {
            console.log(err);
            res.send(err)
        }
    })
})
app.listen(3000, ()=> {
    console.log("App is running in 3000");
})
