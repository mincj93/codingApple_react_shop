import logo from './logo.svg';
import {Button , Navbar, Container, Nav, Row, Col}  from 'react-bootstrap';

import './App.css';
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data';
import Card from './Card';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/Detail';

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  // console.log(shoes[0]);

  return (
    <div className="App">

      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('detail')}}>Features</Nav.Link>
            
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
        <Route path='/detail' element={<Detail />}/>
        
        <Route path='/about' element={<About />}>
          <Route path='member' element={<Member />}/>
          <Route path='location' element={<Location />}/>
        </Route>
        
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<One />}/>
          <Route path='two' element={<Two />}/>
        </Route>

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

function Event() {
  return (
    <div>
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
    </div>
  )
}

function One() {
  return (
    <div>
      <h3>첫 주문시 양배추즙 서비스</h3>
    </div>
  )
}

function Two() {
  return (
    <div>
      <h3>생일기념 쿠폰받기</h3>
    </div>
  )
}

export default App;
