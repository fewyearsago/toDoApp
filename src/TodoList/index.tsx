import React from 'react';
import style from './index.module.scss';

interface item {
  id: number;
  text: string;
}
const TodoList: React.FC = () => {
  const [todos, setTodos] = React.useState<item[]>([
    {
      id: 1,
      text: 'Hello',
    },
  ]);
  const [input, setInput] = React.useState<string>('');
  const handleClick = () => {
    if (input === '') return;
    const newTodo: item = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  };
  const handleToogle = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className={style.root}>
      <h1>To-Do List</h1>
      {todos.length === 0 ? (
        <p>Список пуст</p>
      ) : (
        <ul>
          {todos.map((e, i) => (
            <li key={i}>
              {e.text}
              <button onClick={() => handleToogle(e.id)}>-</button>
            </li>
          ))}
        </ul>
      )}
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
          type="text"
          placeholder="Введите заметку"
        />
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
};

export default TodoList;
