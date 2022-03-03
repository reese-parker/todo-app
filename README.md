# React Todo App

[Use the app here](https://reese-parker.github.io/todo-app/)


## Description

This project is designed to be a todo app for easy task management. Users can create todos, mark them as completed or remove the todo entirely, and move todo to custom lists.

## Design

* The App utilizes MUI V5 components. Custom styles are applied using CSS modules. The default theme is dark mode with is a hidden toggle feature using the lightbulb icon.
* Todo and List state are managed with useContext and useReducer. Component specific state is managed with useState and custom hooks.
* The app features 2 custom hooks. useInputState returns a value along with a change handler and reset function. useToggleState returns a boolean value and toggle function.

## How it works

* Users create todos using controlled form. Submitting the form calls a reducer and adds the todo to an array containing all tasks.
* Selecting a list updates the active list variable in state (default is all todos). Users can also delete lists - a dialog box will appear to confirm the action. The todos will still appear in the all todos list where users can move them to a new list.
* The TodoList component filters through the todo array and checks for a matching list variable, mapping the selected todos to Todo component.
* Selecting the checkbox will toggle a completed variable and show a strikethrough. Selecting the edit icon toggles an edit mode, displaying a controlled form that uses a reducer to update the todo. Deleting the todo removes the task from the task array.
* The app utilizes localStorage. On page load the app uses a reducer to check for saved data and loads a default list of todo if none exist. useEffect provides updates to the localStorage when the todo array is updated.

## Installation

* Clone the repo by opening terminal and typing

```bash
$ git clone https://github.com/reese-parker/todo-app.git
```

* Navigate to the new folder by typing into terminal:
```bash
$ cd todo-app
```

* Install the required dependencies by typing into terminal:
```bash
$ npm install
```
* Run the project by typing into terminal:
```bash
$ npm start
```