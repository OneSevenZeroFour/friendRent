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
             .header{
                  
                top: 0;
                padding: 0;
                font-size: 2.0em;
                width:100%;
                height:78px;
                background-color: #474a4f;
                color: #fff;
                line-height:78px
            }
          .header span:nth-of-type(1){
            margin-left:50px;
          }
          .header span:nth-of-type(2){
                text-align: center;
                width: 88%;
                height: 50px;
                display: inline-block;
          }
          .glyphicon{color:#fff}
            .section{margin-top:30px;}
            .flshow{
                width:40%;
                height:100px;
                line-height:50px;
                text-align:center;
                float:left;
                margin:10px 5%;
                color:black;
                font-size:1.3em;
                border-radius:20px;
                font-weigiht:700

            }

        `
        return (<Cfl>
              <div className="header"><Link to="/more"><span  className="glyphicon glyphicon-chevron-left"></span></Link><span>分类及标签</span></div>
               <div className="section">
               		

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
                        return `<div id=${data.id} style="background-color:${data.color}" class="flshow">
                                         #${data.name}
                                  <p >
                                       (${data.number}话题) 
                                  </p>

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