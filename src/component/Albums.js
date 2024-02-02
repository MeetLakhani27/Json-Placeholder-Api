import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
    
    export default function Albums() {

      const[Albums,setAlbums] = useState([]);

      useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(function (response) {

        setAlbums(response.data);
      })
      .catch(function (error) {
        setAlbums(error);
      })
      })
      return (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
              </tr>
              {
                Albums.map((ele)=>{
                  return(
                  <tr>
                    <td>{ele.id}</td>
                    <td>{ele.title}</td>
                  </tr>
                  )
                })
              }
            </thead>
          </Table>
        </>
      )
    }
    