import React from "react"

import styled from "styled-components"

import Head from "./head.jsx"
import Footer from "../footer.jsx"

class Mate extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div>
            <Head />
               mate
            <Footer />
            </div>)
    }
}

export default Mate