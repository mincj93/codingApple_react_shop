import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addCount } from './../store';

let lg = console.log;

function MyCart() {
    // let a = useSelector((state)=>{ return state })  useState에 저장된 모든 정보 가져옴
    let stockArr = useSelector((state)=>{ return state.stock })   // useState에 저장된 stock 만 가져옴
    let dispatch = useDispatch();

    let ui = stockArr.map(function(data , i){
        return (
          <tr key={i}>
            <td>{data.id + 1}</td>
            <td>{data.name}</td>
            <td>{data.count}</td>
            <td>
              <button onClick={()=>{
                dispatch(addCount(data.id));
              }}>수량더하기</button>
            </td>
          </tr>
        );
    });
  return (
    <div>
        <Table>
        <thead>
            <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            </tr>
        </thead>
        <tbody>
            {ui}
        </tbody>
        </Table>
    </div>
  );
}

export default MyCart;