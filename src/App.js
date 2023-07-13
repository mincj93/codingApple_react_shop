import logo from './logo.svg';
import {Button , Navbar, Container, Nav, Row, Col}  from 'react-bootstrap';

import './App.css';
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data';

function App() {

  let [shoes, setShoes] = useState(data);
  console.log(shoes.title);

  return (
    <div className="App">
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            {/* <img src={process.env.PUBLIC_URL + '/img/logo512.png'} width="80%"/> */}
            <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="80%"/>
            <h4>상품명</h4>
            <p>{shoes[0].content}</p>
          </div>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes2.jpg' width="80%"/>
            <h4>상품명</h4>
            <p>상품명</p>
          </div>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' width="80%"/>
            <h4>상품명</h4>
            <p>상품명</p>
          </div>                                                                                                                                    
          
        </div>
      </div>

    </div>
  );
}

export default App;
