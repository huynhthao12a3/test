import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList'
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
TodoFeature.propTypes = {

};

function TodoFeature(props) {
     // const initTodoList = [
     //      {
     //           id: 1,
     //           title: 'Eat',
     //           status: 'new'
     //      },
     //      {
     //           id: 2,
     //           title: 'Sleep',
     //           status: 'completed'
     //      },
     //      {
     //           id: 3,
     //           title: 'Work',
     //           status: 'new'
     //      },
     //      {
     //           id: 4,
     //           title: 'Run',
     //           status: 'new'
     //      },
     //      {
     //           id: 5,
     //           title: 'Play football',
     //           status: 'completed'
     //      },
     // ]

     // // State
     // const [todoList, setTodoList] = useState(initTodoList)
     // const [filterTodoList, setFilterTodoList] = useState('all')

     // function handleTodoClick(todo, index) {
     //      console.log(todo, index)
     //      // clone current array to the new one (Khi update thì phải clone Object, Array, nếu không sẽ ko bị thay đổi)
     //      const newTodoList = [...todoList]
     //      // Toggle state
     //      newTodoList[index] = {
     //           ...newTodoList[index],
     //           status: newTodoList[index].status === 'completed' ? 'new' : 'completed'
     //      }
     //      // Update todo list
     //      setTodoList(newTodoList)
     // }

     // const renderFilter = todoList.filter(todo => filterTodoList === 'all' || filterTodoList === todo.status)
     // console.log(renderFilter)
     // const handleShowAll = () => {
     //      setFilterTodoList('all')
     // }
     // const handleShowCompleted = () => {
     //      setFilterTodoList('completed')
     // }
     // const handleShowNew = () => {
     //      setFilterTodoList('new')
     // }
     return (
          // <div>
          //      <h1>To do list</h1>
          //      <TodoList todoList={renderFilter} onTodoClick={handleTodoClick} />
          //      <div>
          //           <button onClick={handleShowAll}>Show All</button>
          //           <button onClick={handleShowCompleted}>Show Completed</button>
          //           <button onClick={handleShowNew}>Show New</button>
          //      </div>
          // </div>
          <>
                    đây là todo feature
               <Routes>
                    <Route path='/listpage' element={<ListPage />} />
                    <Route path='/detailpage' element={<DetailPage />} />
               </Routes>
          </>
     );
}

export default TodoFeature;