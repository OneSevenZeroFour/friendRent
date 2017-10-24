import React from "react"
import ReactDOM from "react-dom"

import store from "./store/store.js"
import { Provider } from "react-redux"
import { HashRouter as Router , Route , Link ,Redirect} from "react-router-dom"

import Home from "./page/home.jsx"
import Show from "./page/show.jsx"
import More from "./page/more.jsx"
import Klogin from "./page/Klogin.jsx"
import Kreg from "./page/Kreg.jsx"
import Kuser from "./page/Kuser.jsx"

import All from "./components/home-child/all.jsx"


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <div>
				<Redirect exact path="/" to="home"/>
                <Route  path="/home" component = {Home}></Route>
                <Route  path="/show" component = {Show}></Route>
                <Route  path="/more" component = {More}></Route>
                <Route  path="/login" component = {Klogin}></Route>
                <Route  path="/reg" component = {Kreg}></Route>
                <Route  path="/user" component = {Kuser}></Route>
            </div>               
        </Provider>
    </Router>,document.querySelector("#demo")
)