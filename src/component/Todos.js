import React from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

export default function Todos() {

  const [Todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(function (response) {

        setTodos(response.data);
      })
      .catch(function (error) {
        setTodos(error);
      })
  })
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
          {
            Todos.map((ele) => {
              return (
                <tr>
                  <td>{ele.id}</td>
                  <td>{ele.title}</td>
                  <td>{String(ele.completed)}</td>
                </tr>
              )
            })
          }
        </thead>
      </Table>
    </>
  )
}
