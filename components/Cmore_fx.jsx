import React from "react"
import { connect } from "react-redux"
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import styled from "styled-components"




class morefx extends React.Component {
    constructor(props){
        super(props);
        
    }

    render(){
        var Csj1 = styled.div`
            height:100%;
            font-size:14px;
            color:red;
            position:relative;
        `
        return (<Csj1>
                <div>456456456</div>
               
            </Csj1>)
    }
}

export default connect((state)=>{
    return {state}
},(dispatch)=>{
    return {

    }
})(morefx)