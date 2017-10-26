import React from "react"
import { connect } from "react-redux"
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import styled from "styled-components"
import $ from "jquery"

import Footer from './footer.jsx'

class Cperson extends React.Component {
    constructor(props){
        super(props);
        
       
    }

    render(){
    	 var Cper = styled.div`
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
        margin-left:46px;
      	}
      	.header span:nth-of-type(2){
            text-align: center;
            width: 88%;
            height: 50px;
            display: inline-block;
      	}
      	.glyphicon{color:#fff}
        .section .ctag{
            background-color: #474a4f;
            height:30px;
            width:100%;
            color:#fff;
        }
        .cTop{border-bottom:1px solid gray;margin:15px auto;box-shadow:1px 1px 1px 1px gray;width:80%}
        .ctImg{width:50px;height:50px;border-radius:50px;float:left}
        .ctSap{color:black;margin-left:20px;}
        .ctSap span:nth-of-type(1){display:block;font-size:1.3em;} 
        .ctSap span:nth-of-type(2){display:block;font-size:1em;} 
		.cbtm{flex:1;color:black}
		.cbtm span{width:30%;text-align:center;font-size:1em;line-height:30px;height:30px;display:inline-block;margin:5px 10px;border:1px solid gray}

		.cMid{border-bottom:1px solid gray;margin:25px auto;box-shadow:1px 1px 1px 1px gray;width:80%}
		.cMid p{flex:1;height:30px;padding:5px;}
		.cMid p span{width:33%;text-align:center;display:inline-block;height:30px;line-height:30px;color:black}
		.cBtm{border-bottom:1px solid gray;margin:25px auto;box-shadow:1px 1px 1px 1px gray;width:80%}
		.ht{color:black; border-bottom:1px solid gray;height:40px;line-height:40px;text-align:center;width:100%;font-size:1.1em}
		.cjmsec{border-bottom:1px solid #999;width:100%;padding-top:20px;color:black}
		.cjmsec p {margin-left:25px;}
    	 `
    	 return (<Cper>
    	 		<div>
    	 			<div className="header"><Link to="/more/fx"><span  className="glyphicon glyphicon-chevron-left"></span></Link><span>详细资料</span>
    	 			</div>
    	 			<div className="section">


    	 			</div>
    	 			<Footer />

    	 		</div>

    	 		</Cper>)



    }
    componentDidMount(){

    	var targetHeight = ($(window).height()+72)
    	$('.section').css('height',targetHeight)
    	$.ajax({
    		url:'https://www.easy-mock.com/mock/5993f32f059b9c566dbf4430/frent/others/index?name='+this.props.state.ajName,
    		type:'get',
    		success:function(res){

    		var reg = (res.data.recently).map((data)=>{
							    				return`
													<div>
														<div class="cjmsec">
															<p>${data.title}</p>
															<p>#${data.label} &nbsp;&nbsp;${data.time}</p>
														</div>	
														
													</div>

							    				`
							    			}).join('')





    			var arr = [];

    				arr.push(res.data)
    				console.log(arr)
    				$('.section').html(arr.map(function(attr){
    						return`
								<div class="cTop">
									<div>
										<p class="ctImg"><img src=${attr.icon}${attr.id} alx="xx"/></p>
										<p class="ctSap"><span>${attr.name}</span><span>${attr.profile}</span></p>
									</div>
									<div class="cbtm">
										<span><buttom>取消关注</buttom></span><span><buttom>话题</buttom></span>
									</div>
								</div>
								<div  class="cMid">
									<p><span>性别</span><span>${attr.gender}</span><span>&nbsp;</span></p>
									<p><span>正在找</span><span>${attr.label}</span><span>&nbsp;</span></p>
								</div>
								<div  class="cBtm">
									<p class="ht">最近发布的话题</p>
									<div>
										${reg}
									</div>
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
})(Cperson)