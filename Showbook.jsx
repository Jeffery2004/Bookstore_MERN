import React from 'react'
import { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import axios from 'axios'
import './Showbook.css'
const Showbook = () => {
  const {id}=useParams();
  const[users,setUsers]=useState({});
  useEffect(()=>{
    axios.get('http://localhost:3000/books/'+id)
    .then((result)=>{
      setUsers(result.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <>
    <h1 className='hdbk'>Book Info</h1>
    <form className='cont'>
      <h2>Title</h2>
      <h4>{users.title}</h4>
      <h2>Author</h2>
      <h4>{users.author}</h4>
      <h2>Published year</h2>
      <h4>{users.year}</h4>
    </form>
    </>
  )
}

export default Showbook
