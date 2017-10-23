import React from "react"
import { connect } from "react-redux"
import ReactDOM from "react-dom"
import { HashRouter as Router , Route , Link  } from "react-router-dom"
import styled from "styled-components"

import { Provider } from "react-redux"
import Cmorefl from "../components/Cmore_fl.jsx"
import Cmorefx from "../components/Cmore_fx.jsx"
import Cmorepl from "../components/Cmore_pl.jsx"
import Cmoresj from "../components/Cmore_sj.jsx"



import Cmore from "../components/Cmore.jsx"
class Home1 extends React.Component {
    constructor(props){
        super(props);
        
    }

    render(){
        var Title = styled.div`
            height:100%;
            font-size:14px;
            color:red;
            position:relative;
            z-index:1
        `
        return (<Title>
                    <Route exact path="/more" component = {Cmore}></Route>  
                    <Route  path="/more/fl" component = {Cmorefl}></Route>
                    <Route  path="/more/fx" component = {Cmorefx}></Route>
                    <Route  path="/more/pl" component = {Cmorepl}></Route>
                    <Route  path="/more/sj" component = {Cmoresj}></Route>
            </Title>)

    }
}

export default connect((state)=>{
    
    return {state}
},(dispatch)=>{
    return {

    }
})(Home1)