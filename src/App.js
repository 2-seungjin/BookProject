import React, {useCallback, useRef, useState} from 'react';
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
function App() {
  const createBulkTodos = () => {
    const array = [];
    for(let a = 1; a <= 2500; a++){
      array.push({
        id:a,
        text:`할일 ${a}`,
        checked: false,
      });
    }
    return array;
  }
  const [todos, setTodos] = useState(createBulkTodos);
  // 고유값으로 사용될 id
  // ref를 사용하여 변수에 담기
  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked:false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
        setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );


  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}

export default App;
