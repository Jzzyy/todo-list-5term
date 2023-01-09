"use strict"

const Todo = require("../../models/todo");

const output = {
    getTodo: async(req, res) => {
        const todo = new Todo()
        const response = await todo.readTodo();
        res.send(response)
    },
}

const process = {
    createTodo: async(req, res) => {
        const todo = new Todo()
        const response = await todo.createTodo(req.body);
        return res.json(response);
    },

    deleteTodo: async(req, res) => {
        const todo = new Todo()
        const response = await todo.deleteTodo(req.params);
        return res.json(response);
    },
    updateTodo: async(req, res) => {
        const todo = new Todo()
        const response = await todo.updateTodo(req.params,req.body);
        return res.json(response);
    }
}

module.exports = {output,process};