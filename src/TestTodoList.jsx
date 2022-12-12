import React, { useState } from 'react';
import PropTypes from 'prop-types';

TestTodoList.propTypes = {

};

function TestTodoList(props) {
     const [todoList, setTodoList] = useState(['Eat', 'Run', 'Walk', 'Play', 'Study'])
     function removeTodo(index) {
          const newTodoList = [...todoList];
          newTodoList.splice(index, 1)
          setTodoList(newTodoList)
     }
     return (
          <ul>
               {todoList.map((todo, index) =>
                    <li key={index} onClick={() => removeTodo(index)}>{todo}</li>
               )}
          </ul>
     );
}

export default TestTodoList;