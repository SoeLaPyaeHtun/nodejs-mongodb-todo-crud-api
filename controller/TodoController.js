const todoService = require('../service/TodoService')


async function getAllTodos(req, res, next){
    let todos = await todoService.getAllTodos();

    return res.json(todos)
}


async function getTodoById(req, res, next){
    let todoId = req.params["id"];
    console.log(todoId);

    try{
        let todo = await todoService.getTodobyId(todoId);

        if(!todo){
             res.status(404).json({
                error : "not found"
            })
        }else{
             res.json(todo)
        }
    }catch(e){
         res.status(404).json({
            error : e.message
        })
    }
}

async function createTodo(req, res, next) { 
    try{
        console.log(req.body)
        const todo = await todoService.createTodo(req.body);
        if(!todo) throw Error("Cannot save todo")
        await res.status(201).json(todo)
    }catch(e){
        await res.status(404).json({
            error: e.message
        })
    }
 }

 async function updateTodo(req, res, next) {
    try{
        let _id = req.params['id'];
        let todo = req.body
        
        let updatedTodo = await todoService.updateTodo(_id, todo)
        if(!updatedTodo) throw Error("error happening")
        await res.status(201).json(updatedTodo)
    }catch(e){
        await res.status(404).json({
            error : e.message
        })
    }
 }

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo
}