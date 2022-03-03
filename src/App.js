import TodoApp from "./TodoApp";
import { TodosProvider } from "./contexts/TodosContext";

function App() {
  return (
    <TodosProvider>
      <TodoApp />
    </TodosProvider>
  );
}

export default App;
