const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const TodoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
  
})

const RegisterModel = mongoose.model('register', RegisterSchema);
const TodoModel = mongoose.model('todos', TodoSchema);

module.exports = RegisterModel;
module.exports = TodoModel;
