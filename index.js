import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
window.axios = axios;
import store from "./store/store.js"
import { Provider } from "react-redux"
import { HashRouter as Router , Route , Link ,Redirect} from "react-router-dom"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import Home from "./page/home.jsx"
import Show from "./page/show.jsx"
import More from "./page/more.jsx"
import Klogin from "./page/Klogin.jsx"
import Kreg from "./page/Kreg.jsx"
import Kuser from "./page/Kuser.jsx"
import Kfollow from "./page/Kfollow.jsx"
import Kuserissue from "./page/Kuserissue.jsx"

import All from "./components/home-child/all.jsx"

import "./css/muse-ui.scss"

//console.log(window.location.hash)
//重定向
if(window.location.hash=="#/"||window.location.hash=="") window.location.hash = "#/home/all"
ReactDOM.render(
    <Provider store={store}>
        <Router>
       
            <div>
				{/*<Redirect exact path="/" to="home"/>*/}
                <Route  path="/home" component = {Home}></Route>
                <Route  path="/show" component = {Show}></Route>
                <Route  path="/more" component = {More}></Route>
                <Route  path="/login" component = {Klogin}></Route>
                <Route  path="/reg" component = {Kreg}></Route>
                <Route exact path="/user" component = {Kuser}></Route>
                <Route exact path="/user/follow" component = {Kfollow}></Route>
                <Route exact path="/user/userissue:id" component = {Kuserissue}></Route>
            </div>               
        
        </Router>
    </Provider>,document.querySelector("#demo")
)