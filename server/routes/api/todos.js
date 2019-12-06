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


/// PATCH a certain todo TXT for a user in a certain tab --> DONE
router.patch("/edit/:user/:haus/:todoid", async (req, res) => {
    const todos = await User.findById(req.params.user, "todos"); 
    const updatedTodo = todos.todos.filter(todo => 
        todo._id == req.params.todoid); 
    updatedTodo[0].txt = req.body.txt; 

    User.findByIdAndUpdate(req.params.user,
        {$set: {
            todos: todos.todos
        }},
        {new: true}, 
        function(err, user) {
            if (err) {
                res.status(400).json(err);
            }else {
                res.status(200).json(user);
            }
        }
    ); 
})


/// PATCH a certain todo STATUS for a user in a certain tab ---> DONE
router.patch("/dstatus/:user/:haus/:todoid", async (req, res) => {
    const todos = await User.findById(req.params.user, "todos"); 
    const updatedTodo = todos.todos.filter(todo => 
        todo._id == req.params.todoid); 
    updatedTodo[0].status = req.body.status; 

    User.findByIdAndUpdate(req.params.user,
        {$set: {
            todos: todos.todos
        }},
        {new: true}, 
        function(err, user) {
            if (err) {
                res.status(400).json(err);
            }else {
                res.status(200).json(user);
            }
        }
    );       
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
    );

    const updatedTodos = await User.findById(req.params.user, "todos"); 
    const updatedArr = todos.todos.filter(todo => 
        todo.haus === req.params.haus);
    res.status(201).json(updatedArr); 

})

module.exports = router; 