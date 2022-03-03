import uniqid from "uniqid";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: uniqid(),
          task: action.task,
          list: action.list,
          completed: false,
        },
      ];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.newTask, list: action.newList } : todo
      );
    default:
      return state;
  }
};

export default reducer;
