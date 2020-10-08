import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { settodos, selectTodo } from '../features/todoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
interface Props {
  text: Text;
  todo: any;
}

export const Todo = (props: Props) => {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(settodos(todos.filter((el: any) => el.id !== props.todo.id)));
  };
  const completeHandler = () => {
    dispatch(
      settodos(
        todos.map((el: any) => {
          if (el.id === props.todo.id) {
            return { ...el, isCompleted: !el.isCompleted };
          }
          return el;
        })
      )
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${props.todo.isCompleted ? 'completed' : ''}`}>
        {props.text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};
