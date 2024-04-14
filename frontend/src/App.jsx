import "./App.css";
import { TodoList } from "./components/todoList/TodoList";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
    const [todos, setTodos] = useState([]);
    console.log("todos:", todos);
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, { todo, id: nanoid() }]);
        setTodo("");
    };

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    value={todo}
                    onChange={handleChange}
                />
                <button type="submit" disabled={!todo.trim()}>
                    Add task
                </button>
            </form>
            <div>Todolist</div>
            {todos.length > 0 && <TodoList todos={todos} />}
        </>
    );
}

export default App;
