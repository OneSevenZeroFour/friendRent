import { createStore } from "redux"

var store = createStore((state={
    
},action)=>{
    switch (action.type){
        case "CHANGLABEL":
            return Object.assign({},state,{label:action.select})
        default:
    }
})

export default store