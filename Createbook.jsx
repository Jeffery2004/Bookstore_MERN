import React from "react";
import { useState } from "react";
import axios from 'axios';
import{useNavigate} from 'react-router-dom'
import "./Create.css";
const Createbook = () => {
  const nav=useNavigate();
  const[title,setTitle]=useState('');
  const[author,setAuthor]=useState('');
  const[year,setYear]=useState('');
  const handle=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/books',{title,author,year})
    .then((result)=>{
      if(result.data==='done'){
        nav('/')
      }else{
        alert('Enter all details')
      }
    })
    .catch((err)=>{
      alert('Error Occured')
    })
  }
  return (
    <div className="div">
      <h1 className="hd">Add Book</h1>
      <form className="form">
        <label htmlFor="tit">Title</label>
        <br></br>
        <input type="text" id="tit" onChange={(e)=>setTitle(e.target.value)}></input>
        <br></br>
        <label htmlFor="auth">Author</label>
        <br></br>
        <input type="text" id="auth" onChange={(e)=>setAuthor(e.target.value)}></input>
        <br></br>
        <label htmlFor="yr">Publish Year</label>
        <br></br>
        <input type="text" id="yr" onChange={(e)=>setYear(e.target.value)}></input>
        <br></br>
        <button className="add" onClick={handle}>Add Book</button>
      </form>
    </div>
  );
};

export default Createbook;
