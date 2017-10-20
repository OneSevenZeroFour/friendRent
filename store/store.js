import { createStore } from "redux"

var store = createStore((state={
    test:"abc"
},action)=>{
    switch (action.type){
        case "SETTEST":
            return Object.assign({},state,{test:action.test})
        break;

        default:
    }
})

export default store