import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodo } from '../features/todoSlice';
import { Todo } from './Todo';
import { selectFilteredTodos } from '../features/filteredTodosSlice';

interface Props {}

export const TodoList = (props: Props) => {
  const filteredtodo = useSelector(selectFilteredTodos);
  const todos = useSelector(selectTodo);

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
