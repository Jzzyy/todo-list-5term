"use strict"

const express = require("express");
const router = express.Router();

const ctrl = require("./todo.ctrl");

router.get("/list",ctrl.output.getTodo);

router.delete("/list/:id",ctrl.process.deleteTodo);
router.post("/list",ctrl.process.createTodo);
router.patch("/list/:id",ctrl.process.updateTodo);

module.exports = router;