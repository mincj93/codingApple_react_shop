import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({           // useState 같은 역할
    name : 'user',
    initialState : 'kim',
    reducers : {                    // user state를 수정하는 함수 쓰는곳임. reducers 철자 틀리면 안된다.
        changeName(state){          // 매개변수 state 는 기존의 state를 가지고있음.
            return 'john kim'
        },
        additionalFunction(){
            console.log('changeName 함수뿐만 아니라 다른 함수도 추가하는 방법이다.');
            return '';
        }
    }
})  // 1. 1개의 state 정보 생성


export let {changeName, additionalFunction} = user.actions; // user 에 생성한 함수들 export 시키는 방법


export default user;