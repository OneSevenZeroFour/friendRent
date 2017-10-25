import React from "react"
import { connect } from "react-redux"
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import styled from "styled-components"
import $ from "jquery"



class morepl extends React.Component {
    constructor(props){
        super(props);
       
    }

    render(){
        var Cpl = styled.div`
            .header{
         		  
			    top: 0;
			    padding: 0;
			    text-align: center;
			    font-size: 2.0em;
			    width:100%;
			    height:78px;
			    background-color: #474a4f;
    			color: #fff;
    			text-align:center;
    			line-height:78px
         	}
         	.section img{height:40px;width:40px;border-radius:40px;}
         	.section  li{list-style:none;color:black;border-bottom:2px solid gray;padding-top:5px}
         	
        `
        return (<Cpl>
              
               <div>
               		<div className="header">收到的评论</div>
               		<div className = "section" >

               		</div>
               </div>
            </Cpl>)
    }
    componentDidMount(){
   	console.log(this)
   	$.ajax({
        		url:'https://www.easy-mock.com/mock/5993f32f059b9c566dbf4430/frent/more/information',
        		type:'get',
        		success:function(res){
        			$('.section').html((res.data.list).map(function(data){
        				return `<div>
									<p><img url=${data.icon}${data.iconid} alt="X"/><span className="cname">${data.name} |# ${data.type}</span></p>
									<p>${data.title}</p>
									<p>${data.hename}-${data.source}</p>

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
})(morepl)