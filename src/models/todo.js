"use strict"

const {respons} = require("express");
const TodoStorage = require("./todoStorage");
class Todo {
    constructor() {}

     async createTodo(body) {
        try {
            const response = await TodoStorage.createTodo(body.description)
            return response
        }
        catch(err) {
            return {success: false, msg:err};
        }
    }

     async deleteTodo({id}) {
        try {
            const response = await TodoStorage.deleteTodo(id)
            return response
        }
        catch(err) {
            return {success: false, msg:err};
        }
    }

    async updateTodo({id}, {description}) {
        try {
            const response = await TodoStorage.updateTodo(id,description)
            return response
        }
        catch(err) {
            return {success: false, msg:err};
        }
    }

    async readTodo() {
        try {
            const response = await TodoStorage.readTodo()
            return response
        }
        catch(err) {
            return {success: false, msg:err};
        }
    }
}

module.exports = Todo;