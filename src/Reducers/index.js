import {combineReducers} from 'redux'
import {counterReducer,asyncReducer} from './homeReducers'


const rootReducer = combineReducers({
       counter: counterReducer,
       user  : asyncReducer
})
export default rootReducer