import React from "react"

import styled from "styled-components"

import Head from "./head.jsx"
import Footer from "../footer.jsx"

class Mark extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div>
            <Head />
                mark
            <Footer />
            </div>)
    }
}

export default Mark