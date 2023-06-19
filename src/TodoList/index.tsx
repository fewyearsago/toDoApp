import React from 'react';
import style from './index.module.scss';

interface item {
  id: number;
  text: string;
  completed: boolean;
}
const TodoList: React.FC = () => {
  const [todos, setTodos] = React.useState<item[]>([
    {
      id: 1,
      text: 'Hello',
      completed: false,
    },
  ]);
  const [input, setInput] = React.useState<string>('');
  const handleClick = () => {
    if (input === '') return;
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput('');
  };
  const handleToogle = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className={style.root}>
      <h1>To-Do List</h1>
      <ul>
        {todos.map((e, i) => (
          <li key={i}>
            {e.text}
            <button onClick={() => handleToogle(e.id)}>-</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
          type="text"
          placeholder="add item"
        />
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
};

export default TodoList;
