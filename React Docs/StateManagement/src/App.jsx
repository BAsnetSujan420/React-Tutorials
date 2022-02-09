import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TasksProvider } from "./TasksContext";
import "./App.css";

export default function TaskApp() {
  return (
    <TasksProvider>
      <div className="App">
        <h1>Holiday in Marki</h1>
        <AddTask />
        <TaskList />
      </div>
    </TasksProvider>
  );
}
