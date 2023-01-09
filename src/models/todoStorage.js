"use strict"

const db = require("../config/db");

class TodoStorage {
    static async createTodo(description) {
        
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO todo (description) VALUES(?);";
            db.query(query, [description], (err) => {
              if (err) reject(err);
              resolve({ success: true });
            });
          });
        }
        
    static async deleteTodo(id) {
        return new Promise((resolve, reject) => {
            console.log(id);
            const query = "DELETE FROM todo WHERE id = ?;";
            db.query(query, [id], (err) => {
              if (err) reject(err);
              resolve({ success: true });
            });
          });
        }

    static async updateTodo(id,description) {
        return new Promise((resolve, reject) => {
            const query = "UPDATE todo SET description = ? WHERE id = ?;";
            db.query(query, [description,id], (err) => {
                if (err) reject(err);
                resolve({ success: true });
            });
            });
        }

}

module.exports = TodoStorage;