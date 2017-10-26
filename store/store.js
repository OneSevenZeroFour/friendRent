import { createStore } from "redux"

var store = createStore((state={
<<<<<<< HEAD
    
},action)=>{
    switch (action.type){
        case "CHANGLABEL":
            return Object.assign({},state,{label:action.select})
=======
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
>>>>>>> 11ec5f50eb925671fef53d26b5bbf9137878b5e7
        default:
            return state;
    }
})

export default store