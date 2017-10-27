import React from "react"

import { connect } from "react-redux"

import {Route, Link} from 'react-router-dom'

import styled from "styled-components"


import Footer from "../components/footer.jsx"




{/*http://frent.heitem.com/*/}
class Cmore extends React.Component {
    constructor(props){
        super(props);
        this.goTwo = function(e){ 
        	
        	if(e.target.getAttribute('id') == 'pl'){

        		
        	}else if(e.target.getAttribute('id') == 'fl'){

        	}else if(e.target.getAttribute('id') == 'fx'){

        	}else if(e.target.getAttribute('id') == 'sj'){

        	}
        }
    }

    render(){
        var Cmore = styled.div`
            body,ul,li{margin:0;padding:0}
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
                position:relative;

            }
            .section ul li a{color:gray}
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
    				<div className="section" onClick = {this.goTwo}>
    					<ul >
    						<li id="pl"><Link to="/more/pl" ><span className="glyphicon glyphicon-info-sign"></span> &nbsp;收到的评论 <span className="glyphicon glyphicon-chevron-right"></span></Link></li>
    						<li id="fl"><Link to="/more/fl"><span className="glyphicon glyphicon-th-list"></span> &nbsp; 分类及标签 <span className="glyphicon glyphicon-chevron-right"></span></Link></li>
    						<li id="fx"><Link to="/more/fx"><span className="glyphicon glyphicon-search"></span>  &nbsp;发现 <span className="glyphicon glyphicon-chevron-right"></span></Link> </li>
    						<li id="sj"><Link to="/more/sj"> <span className="glyphicon glyphicon-barcode"></span>  &nbsp;数据排行榜 <span className="glyphicon glyphicon-chevron-right"></span> </Link> </li>

    					</ul>

    				</div>
    				
    				<Footer />
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