import { createStore } from "redux"

var store = createStore((state={
<<<<<<< HEAD
    isShowKside:false,
    tel:null
=======

>>>>>>> 33d26194e940efd187a48f8d056b984c7995081a
},action)=>{
    switch (action.type){
        case "SETSHOWKSIDE":
            return Object.assign({}, state, { isShowKside: action.isShowKside})
        break;
<<<<<<< HEAD
        case "SETTEL":
            return Object.assign({}, state, { tel: action.tel})
        break;
=======
        case "SETAJName":
		      return {ajName: action.ajName}
		      break;
>>>>>>> 33d26194e940efd187a48f8d056b984c7995081a
        default:
            return state;
    }
})

export default store