import React from "react"
import { connect } from "react-redux"
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import styled from "styled-components"
import $ from "jquery"



class Cperson extends React.Component {
    constructor(props){
        super(props);
        
       
    }

    render(){
    	 var Cper = styled.div``
    	 return (<Cper>
    	 		<div>
    	 				cperson

    	 		</div>

    	 		</Cper>)



    }
    componentDidMount(){
    	console.log(this.props.state.ajName)
    }
}
export default connect((state)=>{
    return {state}
},(dispatch)=>{
    return {

    }
})(Cperson)