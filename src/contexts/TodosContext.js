import React, { createContext, useState } from "react";
import todoReducer from "../reducers/todoReducer";
import useLocalStorageReducer from "../reducers/useLocalStorageReducer";
import listReducer from "../reducers/listReducer";

const defaultTodos = [
  { id: 0, task: "Water plants", list: "chores", completed: false },
  { id: 1, task: "Feed cat", list: "chores", completed: false },
  { id: 2, task: "Buy bread", list: "shopping", completed: false },
  { id: 2, task: "Buy brake light fluid", list: "shopping", completed: false },
  { id: 3, task: "Mop floor", list: "chores", completed: false },
  { id: 4, task: "Send invoices", list: "work", completed: false },
  { id: 5, task: "clean work fridge", list: "work", completed: false },
];
const defaultLists = [
  { id: 0, name: "chores" },
  { id: 1, name: "work" },
  { id: 2, name: "shopping" },
];

export const TodosContext = createContext();
export const TodosDispatchContext = createContext();
export const ListsContext = createContext();
export const ListsDispatchContext = createContext();
export const ActiveListContext = createContext();
export const ActiveListDispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, todosDispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );
  const [lists, listsDispatch] = useLocalStorageReducer(
    "lists",
    defaultLists,
    listReducer
  );
  const [activeList, setActiveList] = useState("all todos");

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={todosDispatch}>
        <ListsContext.Provider value={lists}>
          <ListsDispatchContext.Provider value={listsDispatch}>
            <ActiveListContext.Provider value={activeList}>
              <ActiveListDispatchContext.Provider value={setActiveList}>
                {props.children}
              </ActiveListDispatchContext.Provider>
            </ActiveListContext.Provider>
          </ListsDispatchContext.Provider>
        </ListsContext.Provider>
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}
