import React from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

export default function Users() {

  const [Users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        setUsers(error);
      })
  })




  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
          {
            Users.map((ele) => {
              return (
                <tr>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.username}</td>
                  <td>{ele.email}</td>
                  <td>
                    <Table>
                      <tr>
                        <td>{ele.address.street}</td>
                        <td>{ele.address.suite}</td>
                        <td>{ele.address.city}</td>
                        <td>{ele.address.zipcode}</td>
                        <Table>
                          <tr>
                            <td>{ele.address.geo.lat}</td>
                            <td>{ele.address.geo.lng}</td>
                          </tr>
                        </Table>
                      </tr>
                    </Table>
                  </td>
                </tr>
              )
            })
          }
        </thead>
      </Table>
    </>
  )
}
