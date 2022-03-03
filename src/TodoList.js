import React, { useContext } from "react";
import { List, Divider, Collapse } from "@mui/material";
import { TransitionGroup } from "react-transition-group";

import { TodosContext, ActiveListContext } from "./contexts/TodosContext";
import Todo from "./Todo";

export default function TodoList() {
  const todos = useContext(TodosContext);
  const activeList = useContext(ActiveListContext);
  const activeTodos = todos.filter((todo) => todo.list === activeList);
  const activeTodoList =
    activeList === "all todos"
      ? todos.map((todo, index) => (
          <Collapse key={todo.id}>
            <Todo
              id={todo.id}
              task={todo.task}
              list={todo.list}
              completed={todo.completed}
            />
            {index < todos.length - 1 && <Divider />}
          </Collapse>
        ))
      : activeTodos.map((todo, index) => (
          <Collapse key={todo.id}>
            <Todo
              id={todo.id}
              task={todo.task}
              list={todo.list}
              completed={todo.completed}
            />
            {index < todos.length - 1 && <Divider />}
          </Collapse>
        ));
  if (todos.length)
    return (
      <List>
        <TransitionGroup>{activeTodoList}</TransitionGroup>
      </List>
    );
  return null;
}
