import React from "react"
import { connect } from "react-redux"

import { Route , Link } from "react-router-dom"
import styled from "styled-components"

import Head from "../components/home-child/head.jsx"
import Footer from "../components/footer.jsx"

import All from "../components/home-child/all.jsx"
import Ask from "../components/home-child/ask.jsx"
import Send from "../components/home-child/send.jsx"
import Mate from "../components/home-child/mate.jsx"
import Mark from "../components/home-child/mark.jsx"

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){

    }

    render(){
        var Div= styled.div`
            height:100%;
            padding-top:58px;
        `
        return (
                <Div>
                    <Head/>
                        <All />
                    <Footer/>
                    <Route exact path="/home/all" component={All}></Route>
                    <Route path="/home/ask" component={Ask}></Route>
                    <Route path="/home/send" component={Send}></Route>
                    <Route path="/home/mate" component={Mate}></Route>
                    <Route path="/home/mark" component={Mark}></Route>                   
                </Div>
            )
    }
}

export default connect((state)=>{
    return {state}
},(dispatch)=>{
    return {

    }
})(Home)