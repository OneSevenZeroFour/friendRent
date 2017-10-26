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
        
        case "SETAJName":
		      return {ajName: action.ajName}
		      break;
        default:
            return state;
    }
})

export default store