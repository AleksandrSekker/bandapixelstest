import React, { useEffect } from 'react';
import './App.css';
import { Form } from './components/Form';
import { TodoList } from './components/TodoList';
import { useSelector, useDispatch } from 'react-redux';

import { selectTodo } from './features/todoSlice';
import { setfilteredTodos } from './features/filteredTodosSlice';
import { selectStatus } from './features/statusSlice';

function App() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const todos = useSelector(selectTodo);
  useEffect(() => {
    filterHandler();
  }, [todos, status]); // eslint-disable-line react-hooks/exhaustive-deps

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        dispatch(
          setfilteredTodos(
            todos.filter((todo: any) => todo.isCompleted === true)
          )
        );
        break;
      case 'uncompleted':
        dispatch(
          setfilteredTodos(
            todos.filter((todo: any) => todo.isCompleted === false)
          )
        );
        break;
      default:
        dispatch(setfilteredTodos(todos));
        break;
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
