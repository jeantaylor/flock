const express = require("express"); 
const router = express.Router(); 
const Todo = require("../../models/Todo"); 



/// GET all todos for a user for a certain tab
router.get("/:user/:haus", async (req, res) => {
    try{
        const todos = await Todo.find({haus: req.params.haus});
        res.status(200).json(todos); 
    } catch(err){
        resstatus(400).json({msg : err}); 
    }
}); 


/// POST a new todo for a user into a certain tab
router.post("/:user/:haus", async (req, res) => {
    const todo = new Todo({
        haus: req.body.haus, 
        txt: req.body.txt
    }); 
    
    try{
        const savedTodo = await todo.save(); 
        res.status(201).json(savedTodo); 
    } catch(err){
        resstatus(400).json({msg: err}); 
    }
})


/// PATCH a certain todo TXT for a user in a certain tab
router.patch("/edit/:user/:haus/:todoid", async (req, res) => {
    try{
        const updatedTodo = await Todo.updateOne(
            { _id: req.params.todoid}, 
            {$set: {txt: req.body.txt}}
        ); 
        res.status(200).json(updatedTodo); 
    } catch(err){
        res.status(400).json({msg : err}); 
    }
})


/// PATCH a certain todo STATUS for a user in a certain tab
router.patch("/dstatus/:user/:haus/:todoid", async (req, res) => {
    try{
        const updatedTodo = await Todo.updateOne(
            { _id: req.params.todoid}, 
            {$set: {status: req.body.status}}
        ); 
        res.status(200).json(updatedTodo); 
    } catch(err){
        res.status(400).json({msg : err}); 
    }
})


/// DELETE a certain todo for a user in a certain tab 
router.delete("/:user/:haus/:todoid", (req, res) => {
    res.send("deleteTodos call"); 
})

module.exports = router; 