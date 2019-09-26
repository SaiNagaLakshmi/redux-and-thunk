const initialState = {
    count:0,
    data:[]
}

export const counterReducer = (state=initialState,action)=>{
      switch(action.type){
          case 'INCREMENT_COUNT':
        return {
            count:state.count+1
        }  
        case 'DECREMENT_COUNT':
         return {
             count:state.count-1
         }
         default:
         return state;
      }

}

export const asyncReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_ALL_USERS':
        return {
            ...state,
            data:action.payload
        }
        default:
        return state;
    }
}
