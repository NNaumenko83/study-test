import styles from "./TodoList.module.css";

export const TodoList = ({ todos, deleteTask, changeStatus }) => {
    return (
        <>
            <ul className={styles.list}>
                {todos.map((todo) => (
                    <li key={todo.id} className={styles.item}>
                        <input
                            type="checkbox"
                            checked={todo.done}
                            onChange={() => changeStatus(todo.id)}
                        />
                        <p>{todo.todo}</p>
                        <button onClick={() => deleteTask(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};
