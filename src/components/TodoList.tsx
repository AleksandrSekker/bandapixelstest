import React from 'react';
import { useSelector } from 'react-redux';
import { Todo } from './Todo';
import { selectFilteredTodos } from '../features/filteredTodosSlice';

export const TodoList = () => {
  const filteredtodo = useSelector(selectFilteredTodos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredtodo.map((todo: any) => {
          return <Todo key={todo.id} text={todo.text} todo={todo} />;
        })}
      </ul>
    </div>
  );
};
