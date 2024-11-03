import React from 'react'
import {useParams ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import{useState,useEffect} from 'react'
import './Editbook.css';
const Editbook = () => {
  const nav=useNavigate()
  const {id} =useParams();
  const[title,setTitle]=useState('');
  const[author,setAuthor]=useState('');
  const[year,setYear]=useState('');
  useEffect(()=>{
    axios.get('http://localhost:3000/books/'+id)
    .then((result)=>{
      setTitle(result.data.title);
      setAuthor(result.data.author);
      setYear(result.data.year);
    })
    .catch((err)=>{
      console.log(err);
    })

  },[])
  const handleupd=async(e)=>{
    e.preventDefault();
    const data={title,author,year};
    await axios.put('http://localhost:3000/books/'+id,data)
    .then((result)=>{
      nav('/');
    })
    .catch((err)=>{
      console.log(err);
    })

  }
  return(
    <form className='con'>
      <h1>Edit Book</h1>
      <label htmlFor='tit' className='edtit'>Title</label>
      <br></br>
      <input type='text' id='tit' value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
      <br></br>
      <label htmlFor='aut' className='edaut'>Author</label>
      <br></br>
      <input type='text' id='aut' value={author} onChange={(e)=>{setAuthor(e.target.value)}}></input>
      <br></br>
      <label htmlFor='yr' className='edyr'>Published Year</label>
      <br></br>
      <input type='text' id='yr' value={year} onChange={(e)=>{setYear(e.target.value)}}></input>
      <br></br>
      <button className='bt' onClick={handleupd}>Edit</button>
    </form>
  )
}

export default Editbook
