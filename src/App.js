import logo from './logo.svg';
import {Button , Navbar, Container, Nav, Row, Col}  from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet, useParams} from 'react-router-dom';
import axios from 'axios';

import './App.css';
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data';
import Card from './Card';
import MyCart from './routes/MyCart';
import Detail from './routes/Detail';

let lg = console.log;

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
            <Nav.Link onClick={() => { navigate('/MyCart')}}>MyCart</Nav.Link>
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
          <button onClick={()=>{
            // 로딩중에 이미지 같은거 보여주고싶으면 여기에 쓰면 된다.
            axios.get('https://codingapple1.github.io/shop/data2.json')
              .then(( result )=>{ 
                // 로딩이 완료되어서 로딩중 보여주는 이미지를 없애려면 여기서 없애줘야함
                      console.log( result.data );
                      // let newShoes = [...shoes];

                      // result.data.map(function(result, idx){
                      //   newShoes.push(result);
                      // });
                      // 한줄로 끝내는 방법
                      // spread문법 쓰면 된다.
                      let newShoes = [...shoes, ...result.data];
                      setShoes(newShoes);
              })
              .catch(()=>{
                // 로딩이 실패되어서 로딩중 보여주는 이미지를 없애려면 여기서 없애줘야함
                      console.log('실패했을 때 출력');
              });
          }}>데이터요청AJAx</button>


            
          </>
        }/>
        <Route path='/Detail/:id' element={<Detail shoes={shoes}/>} />
        
        <Route path='/myCart' element={<MyCart />} />



        <Route path = "*" element={<div>장바구니</div>}/>
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
