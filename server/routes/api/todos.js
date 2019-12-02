const express = require("express"); 
const router = express.Router(); 
const User = require("../../models/User"); 
const Todo = require("../../models/Todo"); 



/// GET all todos for a user for a certain tab --> DONE
router.get("/:user/:haus", async (req, res) => {
    try{
        const todos = await User.findById(req.params.user, "todos"); 
        const todosArr = todos.todos.filter(todo => 
            todo.haus === req.params.haus);
        res.status(200).json(todosArr); 
    } catch(err){
        res.status(400).json({msg : err}); 
    }
}); 


/// POST a new todo for a user into a certain tab --> DONE
router.post("/:user/:haus", async (req, res) => {
    const todo = new Todo({
        haus: req.params.haus, 
        txt: req.body.txt
    }); 
    
    User.findByIdAndUpdate(req.params.user,
        {$push: {todos: todo}},
        {safe: true, upsert: true},
        function(err, doc) {
            if(err){
            res.status(400).json({msg : err});
            }else{
            res.status(200).json(todo); 
            }
        }
    );
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
    User.findByIdAndUpdate(req.params.user, {$set: 
        Todo.findByIdAndUpdate(req.params.todoid, {$set: {"status": req.body.status}})}, 
        function(err, doc) {
            res.status(200).json(doc);
    });
})


/// DELETE a certain todo for a user in a certain tab --> DONE
router.delete("/:user/:haus/:todoid", async (req, res) => {
    const todos = await User.findById(req.params.user, "todos"); 
    const todosArr = todos.todos.filter(todo => 
        todo.haus === req.params.haus);
    const toDelete = todosArr.filter(todo => 
        todo._id == req.params.todoid); 

    User.findByIdAndUpdate(req.params.user,
        {$pull: {todos: toDelete[0]}},
        {safe: true, upsert: true},
        function(err, doc) {
            if(err){
            res.status(400).json({msg : err});
            }else{
            res.status(200).json({msg : "Todo deleted"}); 
            }
        }
    );
})

module.exports = router; 