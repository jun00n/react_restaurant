
//3 lib for redux implimentation(redux,react redux,redux thunk)
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

//create a constant named reducer so that we can add all the reducers present togtr..its an array so add one by one after a coma
const reducer=combineReducers({})

const middleware=[thunk]

//create store for redux//has 2 parameter ie,reducers and middleware
//since redux is synchronous, to convert into asyn we use middleware
const store=createStore(reducer,applyMiddleware(...middleware))
//apply middleware is a function ... is a spread operator.ie,it can accept any numbers or n num of parameter
//to apply store imprt into root component's selector..ie,app.js =>selector index.js



export default store