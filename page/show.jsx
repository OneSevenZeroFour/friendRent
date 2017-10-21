import React from "react"
import { connect } from "react-redux"

import { Route , Link } from "react-router-dom"
import styled from "styled-components"

import Footer from "../components/footer.jsx"

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        var Title = styled.div`
            height:100%;
            font-size:14px;
            color:red;
            position:relative;
        `
        return (<Title>
                <Footer/>
            </Title>)
    }
}

export default connect((state)=>{
    return {state}
},(dispatch)=>{
    return {

    }
})(Home)