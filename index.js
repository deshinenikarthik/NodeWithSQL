const { faker, tr, th } = require('@faker-js/faker');
const mysql = require("mysql2");

const express = require("express");
const app = express();
const port = 3000;
const { v4: uuidv4 } = require("uuid");

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const methodOverride = require('method-override')
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "22311A0511karthik"
});

app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
            // res.send("hi this is home page");
        });
    } catch (err) {
        console.log(err);
    }
})

app.get("/user", (req, res) => {
    let q = "select id,username,email,password from user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            // console.log(result);
            res.render("show.ejs", { result });
        })
    } catch (err) {
        console.log(err);
    }
})

app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `select * from user where id='${id}'`
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        })
    } catch (err) {
        console.log(err);
    }
})

app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { username, password } = req.body;
    let q = `select * from user where id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result);
            let user = result[0];
            if (user.password === password) {
                user.username = username;
                console.log(result);
                let que = `update user set username='${username}' where id='${id}'`;
                try {
                    connection.query(que, (err, result) => {
                        if (err) throw err;
                        console.log(result);
                    })
                } catch (err) {
                    console.log(err);
                }
                res.redirect("/user");
            } else {
                res.send("Wrong password");
                res.redirect("/user/:id");
            }
        })
    } catch (err) {
        console.log(err);
    }
})

app.get("/user/add", (req, res) => {
    res.render("add.ejs");
})
app.post("/user", (req, res) => {
    let { username, email, password } = req.body;
    let id = uuidv4();
    let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.redirect("/user");
        })
    } catch (err) {
        console.log(err);
    }
})

app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = `select * from user where id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("delete.ejs", { user });
        })
    } catch (err) {
        console.log(err);
    }
})

app.delete("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password } = req.body;
    let q1 = `select * from user where id='${id}'`;
    try {
        connection.query(q1, (err, result) => {
            if (err) throw err;
            let user = result[0];
            console.log(result);
            if (user.password === password) {
                let q = `delete from user where id='${id}'`;
                try {
                    connection.query(q, (err, result) => {
                        if (err) throw err;
                        console.log(result);
                        res.redirect("/user");
                    })
                } catch (err) {
                    console.log(err);
                }
            } else {
                console.log(password);
                console.log(user.password);
                res.send("wrong password");
            }
        })
    } catch (err) {
        console.log(err);
    }

})

app.listen(port, () => {
    console.log("App is listening");
})





// let getRandomUser = () => {
//     return [
//         faker.string.uuid(),
//         faker.internet.username(), // before version 9.1.0, use userName()
//         faker.internet.email(),
//         faker.internet.password(),
//     ];
// }
// let q = "insert into user values ?"
// let data = [];
// for (let i = 0; i < 100; i++) {
//     data.push(getRandomUser());
// }
// try {
//     connnection.query(q, [data], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     })
// } catch (err) {
//     console.log(err);
// }
// let q = "SHOW TABLES";
// let user = ["c511", "carthik", "ckarthik@123.com", "ckillbill123"];
// let q = "insert into user values(?,?,?,?)";

// try {
//     connnection.query(q, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     })
// } catch (err) {
//     console.log(err);
// }
// connnection.end();

// console.log(getRandomUser());