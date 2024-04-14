import styles from "./TodoList.module.css";

export const TodoList = ({ todos }) => {
    console.log("todos:", todos);
    return (
        <>
            <ul className={styles.list}>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.todo}
                        <button onClick={() => console.log(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};
