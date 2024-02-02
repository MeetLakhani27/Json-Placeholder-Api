import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export default function Comments() {
  
  const[Comments,setComments] = useState([]);
  

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(function (response) {

        setComments(response.data);
      })
      .catch(function (error) {
        setComments(error);
      })
  })


  return (
    <>
    <Table striped bordered hover>
      <thead>
      <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
      </tr>
      {
        Comments.map((ele)=>{
          return(
              <tr>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.body}</td>
              </tr>
            )
          })
        }
        </thead>
      </Table>
    </>
  )
}
