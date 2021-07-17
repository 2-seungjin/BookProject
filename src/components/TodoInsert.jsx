import React, {useCallback, useState} from 'react';
import { MdAdd } from 'react-icons/md'
import '../styles/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] =useState('');
  const onChange = useCallback(e => {
    setValue(e.target.value);
    console.log(value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');// value값 초기화

      // Submit는 브라우저를 새로고침을 발생 시킵니다
      // 새로고침을 방지하는 함수를 호출
      e.preventDefault();
    },
    [onInsert, value],

  );




  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder='할 일을 입력하세요'
        value={value}
        onChange={onChange}
      />
      <button type='submit' >
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
