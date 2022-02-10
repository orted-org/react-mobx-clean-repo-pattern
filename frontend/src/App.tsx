import NewTodo from "./Organs/NewTodo";
import TodoList from "./Organs/TodoList";
import TodoStatus from "./Organs/TodoStatus";
import { StoresContext } from "./Logic/Providers/StoresProviders";
import { RTodoLocal, RTodoRemote } from "./Logic/Repository/RTodo";
import { TodoStore } from "./Logic/State/TodoStore";

function App() {
  // now we can use any repo, either local or remote
  const todoRepoLocal = new RTodoLocal();
  const todoRepoRemote = new RTodoRemote("http://localhost:4000");
  const todoStore = new TodoStore(todoRepoRemote);
  
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
