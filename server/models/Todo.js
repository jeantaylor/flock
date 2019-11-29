const mongoose = require("mongoose"); 

const TodoSchema = mongoose.Schema({
    haus: { 
        type: String, 
        required: true
    }, 
    status: { 
        type: String, 
        required: true, 
        default: "to-do"
    }, 
    txt: { 
        type: String, 
        required: true
    } 
})

module.exports = mongoose.model("Todos", TodoSchema); 