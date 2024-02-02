import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';

export default function Photos() {

  const [Photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(function (response) {
        setPhotos(response.data);
      })
      .catch(function (error) {
        setPhotos(error);
      })
  })

  return (
    <>
    <div className="d-flex m">
      {
        Photos.map((ele) => {
          return (
            <div className="box">
            <Card className='ubox'>
              <Card.Img variant="top" src={ele.url} />
              <Card.Body>
                <Card.Title>{ele.title}</Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary" src={ele.thumbnailUrl}>Click me</Button>
              </Card.Body>
            </Card>
            </div>
          )
        })
      }
      </div>
    </>
  )
}
