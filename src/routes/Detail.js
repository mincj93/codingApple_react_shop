import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Nav, Tab } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "./../store";

let lg = console.log;

let YellowBtn = styled.button`
    background : yellow;
    color : black;
    padding : 10px;
`

let Box = styled.div`
    background : black;
`


function Detail(props){

    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(true);
    let [tab, setTab] = useState(0);
    
    let {id} = useParams(); // url 에 넣은 숫자
    let product = props.shoes.find(function(x){
        return x.id == id
    });
    

// 1. find()는 array 뒤에 붙일 수 있으며 return 조건식 적으면 됩니다. 그럼 조건식에 맞는 자료 남겨줌 

// 2. find() 콜백함수에 파라미터 넣으면 array자료에 있던 자료를 뜻합니다. 전 x라고 작명해봤음 

// 3. x.id == id 라는 조건식을 써봤습니다. 그럼 array자료.id == url에입력한번호 일 경우 결과를 변수에 담아줍니다. 

// 그럼 {상품1개} 이런거 남을듯요 출력해봅시다. 

    // useEffect(()=>{
    //     lg('zz');
    //     setTimeout(() => {
    //         setAlert(false);}, 2000);
    // }, [count]);

    let dispatch = useDispatch();

    useEffect(()=>{
        lg('이건 페이지 불려올때 딱 1번만 출력된다');
    }, []);

    return(
    <div className="container">
        {
            alert == true ? <div className="alert alert-warning">2초이내 구매시 할인ㅇㅇ</div> : null
        }
        
        {count}
        <YellowBtn onClick={() =>{ setCount(count+1) }}>버튼임</YellowBtn>
        <Box>박스</Box>
        <div className="row">
            <div className="col-md-6">
            <img src={product.imgURL} width="100%" />
            </div>
            <div className="col-md-6">
            <h4 className="pt-5">{product.title}</h4>
            <p>{product.content}</p>
            <p>{product.price}</p>
            <button className="btn btn-danger" onClick={()=>{
                dispatch(addItem(product))
            }}>주문하기</button> 
            </div>
        </div>
        <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link onClick={()=>setTab(0)} eventKey="/link0">버튼0</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={()=>setTab(1)} eventKey="/link1">버튼1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={()=>setTab(2)} eventKey="/link2">버튼2</Nav.Link>
              </Nav.Item>
        </Nav>
        
        <TabContent tab={tab}/>

    </div> 
    );
};


function TabContent({tab}) {
    if(tab == 0){
        return <div>탭0 내용0</div>
    }
    
    if(tab == 1){
        return <div>탭1 내용1</div>
    }
    
    if(tab == 2){
        return <div>탭2 내용2</div>
    }    
}

export default Detail;