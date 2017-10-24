import React from "react"

import styled from "styled-components"

import Head from "./head.jsx"
import Footer from "../footer.jsx"

class Send extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div>
            <Head />
                send
            <Footer />
            </div>)
    }
}

export default Send