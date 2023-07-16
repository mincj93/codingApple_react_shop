import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from './store/userSlice';

let lg = console.log;

let stock = createSlice({           // useState 같은 역할
    name : 'stock',
    initialState : [
        {id : 0, name : 'White and Black' , count : 2},
        {id : 1, name : 'Grey Yordan' , count : 1}
    ],
    reducers : {
        addCount(state, data){
            let idx = state.findIndex((a)=>{return a.id === data.payload })     // array함수 뒤에만 붙일 수 있는 findIndex 함수. 
            state[idx].count++
        },
        addItem(state, item){
            
            lg('dfg',item.payload);
            state.push(item.payload)
        }
    }
})
export let { addCount, addItem } = stock.actions; // stock 에 생성한 함수들 export 시키는 방법

export default configureStore({
    reducer: {
        // 2. 등록
        user : user.reducer,     // 변수명.reducer 라고 꼭 써야 등록이 된다.
        stock : stock.reducer
    }
});