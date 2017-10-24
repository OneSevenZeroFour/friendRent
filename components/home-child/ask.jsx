import React from "react"

import styled from "styled-components"

import Head from "./head.jsx"
import Footer from "../footer.jsx"

class Ask extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div>
                <Head />
                    ask
                <Footer />
            </div>)
    }
}

export default Ask