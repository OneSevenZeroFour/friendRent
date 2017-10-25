import React from "react"
import { connect } from "react-redux"
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import styled from "styled-components"
import $ from "jquery"

class morefl extends React.Component {
    constructor(props){
        super(props);
        
    }

    render(){
        var Cfl = styled.div`
            height:100%;
            font-size:14px;
            color:red;
            position:relative;
        `
        return (<Cfl>
              
               <div>
               		<p className="bg-primary">1</p>
                    <p className="bg-success">2</p>
                    <p className="bg-info">3</p>
                    <p className="bg-warning">4</p>
                    <p className="bg-danger">5</p>

               </div>
            </Cfl>)
    }
    componentDidMount(){
    console.log(this)
    $.ajax({
                url:'https://www.easy-mock.com/mock/5993f32f059b9c566dbf4430/frent/label',
                type:'get',
                success:function(res){
                    $('.section').html((res.data.list).map(function(data){
                            console.log(data)
                        return `<div>
                                  

                                </div>

                        `
                    }))
                }
            })
    
  }
}

export default connect((state)=>{
    return {state}
},(dispatch)=>{
    return {

    }
})(morefl)