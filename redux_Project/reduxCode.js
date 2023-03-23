import { createStore } from "redux";


const counterPlus =(state={counter:0},action)=>{

    if(action.type ==='increment'){
        return{
            counter:state.counter+action.payload
        }
    }
    if(action.type ==='decrement'){
        return{
            counter:state.counter-action.payload
        }
    }

return state;
}
const store = createStore(counterPlus);

export default store