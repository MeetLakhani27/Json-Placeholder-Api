import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Posts from './component/Posts';
import Comments from './component/Comments';
import Albums from './component/Albums';
import Todos from './component/Todos';
import Users from './component/Users';
import Photos from './component/Photos';

export default function App() {


  return (
    <>

      <Navbar expand="lg" className="bg-body-tertiar">
        <Container>
          <Navbar.Brand href="#home" className='color'>ApiCalling</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home"><Link to={"/"}>Post</Link></Nav.Link>
              <Nav.Link href="#link"><Link to={"/Comments"}>Comments</Link></Nav.Link>
              <Nav.Link href="#link"><Link to={"/Albums"}>Albums</Link></Nav.Link>
              <Nav.Link href="#link"><Link to={"/Todos"}>Todos</Link></Nav.Link>
              <Nav.Link href="#link"><Link to={"/Photos"}>Photos</Link></Nav.Link>
              <Nav.Link href="#link"><Link to={"/Users"}>Users</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/Comments" element={<Comments />} />
        <Route path="/Albums" element={<Albums />} />
        <Route path="/Todos" element={<Todos />} />
        <Route path="/Photos" element={<Photos />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
     
    </>
  )
}

