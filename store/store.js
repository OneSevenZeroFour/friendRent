import { createStore } from "redux"

var store = createStore((state={
    isShowKside:false
},action)=>{
    switch (action.type){
        case "SETSHOWKSIDE":
            return Object.assign({}, state, { isShowKside: action.isShowKside})
        break;
        default:
            return state;
    }
})

export default store