import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css'
import axios from "axios";
const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((result) => {
        setUsers(result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handledelete=async(id)=>{
    await axios.delete('http://localhost:3000/books/'+id)
    .then((result)=>{
      if(result.data==='deleted'){
        window.location.reload();
      }
    })
    .catch((err)=>{
      alert('Error occured')
    })
  }
  return (
    loading?<p>Loading...</p>:
    <>
    <h1 className="head">Books List</h1>
    <Link to='./Createbook' className="cre">Add Book</Link>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Author</th>
          <th>Publish Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user,index) => {
          return (
            <tr key={user._id}>
              <td>{index+1}</td>
              <td>{user.title}</td>
              <td>{user.author}</td>
              <td>{user.year}</td>
              <td><Link to={`./Showbook/${user._id}`} className='inf'>Info</Link><Link to={`./Editbook/${user._id}`} className="ed">Edit</Link><Link onClick={(e)=>{handledelete(user._id)}} className="del">Delete</Link></td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
};

export default Home;
