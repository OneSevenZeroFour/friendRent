import { createStore } from "redux"

var store = createStore((state={
    isShowKside:false,
    ajName:'',
},action)=>{
    switch (action.type){
        case "SETSHOWKSIDE":
            return Object.assign({}, state, { isShowKside: action.isShowKside})
        break;
        case "SETAJName":
		      return {ajName: action.ajName}
		      break;
        default:
            return state;
    }
})

export default store