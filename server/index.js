const express = require("express"); 
const mongoose = require("mongoose")
require("dotenv").config(); 
const cors = require("cors"); 
const app = express(); 


/// Connect to MongoDB Atlas 
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Opened Flock <--> Flock DB")
})


/// Import Routes 
const usersRoute = require("./routes/api/users"); 
const todosRoute = require("./routes/api/todos"); 
const settingsRoute = require("./routes/api/settings"); 


/// Middleware
app.use(cors()); 
app.use(express.json()); 
app.use("/user", usersRoute); 
app.use("/todos", todosRoute); 
app.use("/settings", settingsRoute); 


/// Base API Route --> Short Documentation 
app.get("/", (req, res) => {
    res.json({
        endpoints: "Methods used in this API:", 
        postUser: "/user/new --> returns msg of success or failure of post + new user", 
        getUser: "/user/:user --> returns all user data including preferences and todos", 
        getTodos: "/todos/:user/:haus --> returns user's to-do list for a certain tab", 
        postTodos: "/todos/:user/:haus --> returns msg of success or failure of post + updated list of to-dos for a certain tab", 
        patchTodosTxt: "/todos/edit/:user/:haus/:todoId --> returns updated to-do + updated list of to-dos for a certain tab", 
        patchTodosStatus: "/todos/dstatus/:user/:haus/:todoId --> returns new status of to-do", 
        deleteTodos: "/todos/:user/:haus/:todoId --> returns msg of success or failure of delete + updated list of to-dos for a certain tab", 
        getSettings: "/settings/:user --> returns user's saved settings", 
        patchSettings: "/settings/:user/:setting --> returns msg of success or failure of patch + updated user settings"
    })
})


/// Request Listener 
const PORT = process.env.PORT || 8080; 
app.listen(PORT, () => 
    console.log(`Now listening on port ${PORT}`)
); 