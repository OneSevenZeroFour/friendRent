import React from "react"

import { connect } from "react-redux"

import { Route , Link } from "react-router-dom"

import styled from "styled-components"
{/*http://frent.heitem.com/*/}
class Cmore extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        var Cmore = styled.div`
         	.header{
         		  
			    top: 0;
			    padding: 0;
			    text-align: center;
			    font-size: 2.0em;
			    width:100%;
			    height:58px;
			    background-color: #474a4f;
    			color: #fff;
    			text-align:center;
    			line-height:58px
         	}
            
        `
        return (
    		<Cmore>
    			<div> 
    				<div className="header">更多</div>
    				<div className="section">
    					<ul>
    						<li>收到的评论</li>
    						<li>分类及标签</li>
    						<li>发现</li>
    						<li>数据排行榜</li>
    					</ul>

    				</div>
    			</div>
    		</Cmore>
            )
    }
}


export default connect((state)=>{
    return {state}
},(dispatch)=>{
    return {

    }
})(Cmore)