

export const increment = ()=>{
    return {
        type:'INCREMENT_COUNT'
    }
}

export const decrement = ()=>{
    return {
        type:'DECREMENT_COUNT'
    }
}

export const fetchUser = ()=>{
    return dispatch=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(users=>{
            dispatch({
                type:"FETCH_ALL_USERS",
                payload:users
            })
        })
    }
}