import React from "react"
import ReactDOM from "react-dom"
 
import store from "./store/store.js"
import { Provider } from "react-redux"
import { HashRouter as Router , Route , Link , Redirect} from "react-router-dom"

import Home from "./page/home.jsx"
import Show from "./page/show.jsx"
import More from "./page/more.jsx"
import Me from "./page/me.jsx"

import All from "./components/home-child/all.jsx"


ReactDOM.render(
        <Router>
            <Provider store={store}>
                <div>
                    <Redirect to="/home/all"/>
                    <Route  path="/home" component = {Home}></Route>
                    <Route  path="/show" component = {Show}></Route>
                    <Route  path="/more" component = {More}></Route>
                    <Route  path="/me" component = {Me}></Route>
                </div>               
            </Provider>
        </Router>,document.querySelector("#demo")
    )