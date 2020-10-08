import React from 'react';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { setinputText, selectInputText } from '../features/inputSlice';
import { settodos } from '../features/todoSlice';
import { selectTodo } from '../features/todoSlice';
import { setStatus } from '../features/statusSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

export const Form = () => {
  const todos = useSelector(selectTodo);
  const inputText = useSelector(selectInputText);
  const dispatch = useDispatch();
  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setinputText(e.target.value));
  };
  const submitTodoHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inputText !== '') {
      dispatch(
        settodos([
          ...todos,
          { text: inputText, isCompleted: false, id: uuid() },
        ])
      );
    }

    dispatch(setinputText(''));
  };
  const statusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setStatus(e.target.value));
  };
  return (
    <form>
      <input
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        value={inputText}
      />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <FontAwesomeIcon icon={faPlusSquare} />
      </button>

      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
