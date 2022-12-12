import logo from './logo.svg';
import './App.css';
import ColorBox1 from "./ColorBox1";
import React, { useEffect } from 'react';
import TodoFeature from './features/Todo'
import AlbumFeature from './features/Album';
import ColorBox from './components/ColorBox';
import Counter from './components/Counter';
import Clock from './Clock';
import TestTodoList from './TestTodoList';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import productApi from './api/productApi';
import Header from './components/Header';


function Hello(props) {
  const {test} = props;
  return <div>Hello {test}</div>;
}

function HelloWorld(props) {
  return <Hello test={props.name} />;
}
function App() {
  const name = 'Huỳnh Thảo'
  const age = 20;
  const isMale = true;
  const student = {
    name: 'Huynh Thao'
  };
  const colorList = ['blue', 'green', 'yellow']

  useEffect(() => {
    const fetchProducts = async () => {
      const param = {
        _limit: 10,
      }
      const productList = await productApi.getAll(param)
      console.log(productList)
    }
    fetchProducts()
  },[])
  return (
    <div>
      <Header/>
    {/* <TestTodoList/> */}
    <Routes>
      <Route path='/todos/*' element={<TodoFeature/>} />
      {/* <Route path='/todofeature' element={<Navigate replace to="/" />} /> */}
      <Route path='/album' element={<AlbumFeature/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
      
    </div>
    // <TodoFeature/>
    // <AlbumFeature/>
    // <div>

    //   <ColorBox/>
    //   <Counter/>
    //   <Clock/>
    // </div>
    // <div>
    //   <p>{name} - {age}</p>
    //   <p>Giới tính : {isMale ? 'Nam' : 'Nữ'}</p>
      
    //   {/* chia câu điều kiện cho dễ nhìn */}
    //   <p>Giới tính : {isMale && 'Nam'}</p>
    //   <p>Giới tính : {!isMale && 'Nữ'}</p>

    //   {isMale && (
    //     <div>
    //       <p>Nam</p>
    //       <p>Nam</p>
    //       <p>Nam</p>
    //     </div>
    //   )}

    //   {isMale && (
    //     //  Chỉ render phần bên trong, không tính thẻ cha
    //     <React.Fragment> 
    //       <p>Nam 1</p>
    //       <p>Nam 2</p>
    //       <p>Nam 3</p>
    //     </React.Fragment>
    //   )}

    //   {isMale && (
    //     //  Chỉ render phần bên trong, không tính thẻ cha
    //     <> 
    //       <p>Nam 11</p>
    //       <p>Nam 22</p>
    //       <p>Nam 33</p>
    //     </>
    //   )}

    //   {/* Không thể render 1 object lên view, chỉ render các field của object*/}
    //   <p>Object name : {student.name}</p>


    //   <ul>
    //     {colorList.map(color => 
    //         <li key={color} style={{color}}>{color}</li>
    //     )}
    //   </ul>
    // </div>

    // <div>
    //   <HelloWorld name="Huynh Thao"/>
    //   <HelloWorld name="Huynh Thao"/>
    //   <HelloWorld name="Huynh Thao"/>
    //   <section>
    //     <ColorBox  />
    //     <ColorBox color="green" width="110px" height="110px"/>
    //     <ColorBox color="blue" width="150px" height="150px"/>
    //     <ColorBox1 color="purple" width="100px" height="100px"/>
    //     <ColorBox1 color="orange" width="120px" height="120px"/>
    //     <ColorBox1 color="blue" width="150px" height="150px"/>
    //   </section>
    // </div>

    
  );
}

export default App;
