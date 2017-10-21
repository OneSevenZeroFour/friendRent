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
            body,ul,li,div{margin:0;padding:0}
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
            
            .section ul li{
                padding-left:30px;
                list-style:none;
                border-bottom:2px solid gray;
                height:100px;
                line-height:100px;
                font-size:1.3em;
                color:gray;
                position:relative
            }
            .glyphicon-chevron-right{
                position:absolute;
                right:60px;
                top:40px;
            }
            
        `
        return (
    		<Cmore>
    			<div> 
    				<div className="header">更多</div>
    				<div className="section">
    					<ul>
    						<li><span className="glyphicon glyphicon-info-sign"></span> &nbsp;收到的评论 <span className="glyphicon glyphicon-chevron-right"></span> </li>
    						<li><span className="glyphicon glyphicon-th-list"></span> &nbsp; 分类及标签 <span className="glyphicon glyphicon-chevron-right"></span> </li>
    						<li><span className="glyphicon glyphicon-search"></span>  &nbsp;发现 <span className="glyphicon glyphicon-chevron-right"></span> </li>
    						<li><span className="glyphicon glyphicon-barcode"></span>  &nbsp;数据排行榜 <span className="glyphicon glyphicon-chevron-right"></span> </li>

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