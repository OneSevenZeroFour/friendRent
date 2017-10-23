import React from "react"
import ReactDOM from "react-dom"
 
import store from "./store/store.js"
import { Provider } from "react-redux"
import { HashRouter as Router , Route , Link} from "react-router-dom"

import Home from "./page/home.jsx"
import Show from "./page/show.jsx"
import More from "./page/more.jsx"
import Me from "./page/me.jsx"






ReactDOM.render(
        <Router>
            <Provider store={store}>
                <div>
                  
                    <Route exact path="/home" component = {Home}></Route>
                    <Route  path="/show" component = {Show}></Route>
                    <Route  path="/more" component = {More}></Route>
                    <Route  path="/me" component = {Me}></Route>
                </div>               
            </Provider>
        </Router>,document.querySelector("#demo")
    )