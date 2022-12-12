import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import TodoForm from '../../components/TodoForm';
ListPage.propTypes = {

};

function ListPage(props) {
     const initTodoList = [
          {
               id: 1,
               title: 'Eat',
               status: 'new'
          },
          {
               id: 2,
               title: 'Sleep',
               status: 'completed'
          },
          {
               id: 3,
               title: 'Work',
               status: 'new'
          },
          {
               id: 4,
               title: 'Run',
               status: 'new'
          },
          {
               id: 5,
               title: 'Play football',
               status: 'completed'
          },
     ]

     // State
     const location = useLocation()
     const [todoList, setTodoList] = useState(initTodoList)
     const [filterTodoList, setFilterTodoList] = useState(() => {
          const params = queryString.parse(location.search)
          return params.status || 'all'
     })

     function handleTodoClick(todo, index) {
          console.log(todo, index)
          // clone current array to the new one (Khi update thì phải clone Object, Array, nếu không sẽ ko bị thay đổi)
          const newTodoList = [...todoList]
          // Toggle state
          newTodoList[index] = {
               ...newTodoList[index],
               status: newTodoList[index].status === 'completed' ? 'new' : 'completed'
          }
          // Update todo list
          setTodoList(newTodoList)
     }

     // @ts-ignore
     const renderFilter = useMemo(() => {
          return todoList.filter(todo => filterTodoList === 'all' || filterTodoList === todo.status)
     }, [todoList, filterTodoList])
     console.log(renderFilter)

     useEffect(() => {
          const para = queryString.parse(location.search)
          setFilterTodoList(para.status)
     }, [location.search])
     const navigate = useNavigate()
     const match = useLocation()
     const handleShowAll = () => {
          // setFilterTodoList('all')
          const queryParams = { status: 'all' }
          navigate({
               pathname: match.pathname,
               search: queryString.stringify(queryParams)
          })
          console.log(match.pathname)

     }
     const handleShowCompleted = () => {
          // setFilterTodoList('completed')
          const queryParams = { status: 'completed' }
          navigate({
               pathname: match.pathname,
               search: queryString.stringify(queryParams)
          })
          console.log(match.pathname)

     }
     const handleShowNew = () => {
          // setFilterTodoList('new')
          const queryParams = { status: 'new' }
          navigate({
               pathname: match.pathname,
               search: queryString.stringify(queryParams)
          })
          console.log(match.pathname)
     }

     const handleTodoFormSubmit = (values) => {
          console.log('Form submit: ',values)
     }
     return (
          <div>
               <h2>What to do ?</h2>
               <TodoForm onSubmit={handleTodoFormSubmit}/>
               <h2>To do list</h2>
               <TodoList todoList={renderFilter} onTodoClick={handleTodoClick} />
               <div>
                    <button onClick={handleShowAll}>Show All</button>
                    <button onClick={handleShowCompleted}>Show Completed</button>
                    <button onClick={handleShowNew}>Show New</button>
               </div>
          </div>
     );
}

export default ListPage;