import NewTodo from "./Organs/NewTodo";
import TodoList from "./Organs/TodoList";
import TodoStatus from "./Organs/TodoStatus";
import { StoresContext } from "./Logic/Providers/StoresProviders";
import RTodo from "./Logic/Repository/RTodo";
import { TodoStore } from "./Logic/State/TodoStore";

function App() {
  const todoRepo = new RTodo();
  const todoStore = new TodoStore(todoRepo);
  return (
    <StoresContext.Provider value={{ todoStore }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <NewTodo />
        <TodoStatus />
        <TodoList />
      </div>
    </StoresContext.Provider>
  );
}

export default App;
