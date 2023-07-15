import logo from './logo.svg';
import {Button , Navbar, Container, Nav, Row, Col}  from 'react-bootstrap';

import './App.css';
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data';
import Card from './Card';
import {Routes, Route, Link, useNavigate, Outlet, useParams} from 'react-router-dom';
import Detail from './routes/Detail';

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  // console.log(shoes[0]);

  return (
    <div className="App">

      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand onClick={() => { navigate('/')}}>ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/Detail/0')}}>Detail</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>


      <Routes> 
        <Route path='/' element={
          <>
          <div className='main-bg'></div>

          <div className='container'>
            <div className='row'>
              {
                shoes.map((data, idx) => {
                  return (
                    <Card shoes={shoes[idx]} key = {idx} />
                  );
                })
              }
              
            </div>
          </div>
          </>
        }/>
        <Route path='/Detail/:id' element={<Detail shoes={shoes}/>}/>
        

        <Route path = "*" element={<div>존재하지 않는 페이지</div>}/>
      </Routes>

    </div>
  );
}


function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Member() {
  return (
    <div>
      <h4>Member정보</h4>
    </div>
  )
}

function Location() {
  return (
    <div>
      <h4>Location 정보</h4>
    </div>
  )
}


export default App;
