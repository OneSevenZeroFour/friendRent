import { createStore } from "redux"

var store = createStore((state={
    isShowKside:false,
    tel:null
},action)=>{
    switch (action.type){
        case "SETSHOWKSIDE":
            return Object.assign({}, state, { isShowKside: action.isShowKside})
        break;
        case "SETTEL":
            return Object.assign({}, state, { tel: action.tel})
        break;
        default:
            return state;
    }
})

export default store