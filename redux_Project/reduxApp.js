
import {useSelector, useDispatch} from 'react-redux'
const ReduxApp =()=>{
    const dispatch =useDispatch();
const counter =useSelector(state=> state.counter)
const max =useSelector(state=> state.max)
const increment =()=>{

    dispatch({type:'increment',payload:2})
    console.log("",counter)
}

const decrement =()=>{

    dispatch({type:'decrement',payload:2})

}


return(
    <>

	<div class="container">
		<h2>Center align buttons in container class</h2>  
		<div class="container">
		  <div class="text-center">
		   <button class="btn btn-primary" onClick={increment}>increment</button>
           <div>{counter}</div>
		   <button class="btn btn-success" onClick={decrement}>decrement</button>
		  </div>
		</div>  
</div>
    <h1>hi this is working</h1>
    </>
)
}
export default ReduxApp;