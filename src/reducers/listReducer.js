import uniqid from "uniqid";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uniqid(), name: action.newListName }];
    case "REMOVE":
      return state.filter((list) => list.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
