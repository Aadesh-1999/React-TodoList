import './App.css';
//import netflix from './netflix_logo.jpg';
import Header from './MyComponents/Header.js';
import {Footer} from './MyComponents/Footer.js';
import {Todos} from './MyComponents/Todos.js';
import {AddTodo} from './MyComponents/AddTodo.js'
import React, { useState } from 'react';
function App() {

  const onDelete=(todo)=>{
    console.log("I am ondelete of todo ",todo);

    setTodos(todos.filter((e)=>{
      return e!=todo;
    }))
  }

  const addTodo=(title,desc)=>{
    console.log("Adding this todo : Title & desc: ",title,desc);
    let sno;
    if(todos.length==0)
    {
      sno=1;
    }
    else{
      sno= todos[todos.length-1].sno+1;
    }
    let myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos]= useState([]);
  return (
    <div className="App" >
        <Header name="TODO LIST" searchBar={true}/>
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} onDelete={onDelete}/>
        <Footer name="Aaditi" imageSrc="./logo.svg" />
    </div>
  );
}

export default App;