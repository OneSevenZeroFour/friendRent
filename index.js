import React from "react"
import ReactDOM from "react-dom"
 
import store from "./store/store.js"
import { Provider } from "react-redux"
import { HashRouter as Router , Route , Link} from "react-router-dom"

import Home from "./page/home.jsx"

ReactDOM.render(
        <Router>
            <Provider store={store}>
                <div>
                    <Home />
                </div>
            </Provider>
        </Router>,document.querySelector("#demo")
    )