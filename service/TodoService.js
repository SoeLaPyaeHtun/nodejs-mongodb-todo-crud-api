const Todos = require('../model/Todo');

async function getAllTodos(){
    return Todos.find();
}

async function getTodobyId(_id) {
    const todo = await Todos.findById(_id);
    return todo;
  }

async function createTodo(todo){
    let newTodo = new Todos(todo);
    return newTodo.save()
}

async function updateTodo(todoId , todo){
    let updatedTodo = await Todos.findByIdAndUpdate(todoId, todo, {new : true});
    return updateTodo;
}

module.exports = {
    getAllTodos,
    getTodobyId,
    createTodo,
    updateTodo
}