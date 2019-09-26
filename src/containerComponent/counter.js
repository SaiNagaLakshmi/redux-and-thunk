import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment,decrement} from './../Actions/homeAction'

 class Counter extends Component {
     
     handleClick = ()=>{
         this.props.increment()
     }
     handleChange = ()=>{
         this.props.decrement()
     }
    
    render() {
       const {data} = this.props
       return (
            <React.Fragment>
               <p>{data}</p>
                <button type="button" onClick={this.handleClick}>increment</button>
                <button type="button" onClick={this.handleChange}>decrement</button>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state)=>({
    data:state.count
})

const mapDispatchToProps = (dispatch)=>({
  increment:()=>dispatch(increment()),
  decrement:()=>dispatch(decrement()) 
})

export default connect(mapStateToProps,mapDispatchToProps) (Counter)
