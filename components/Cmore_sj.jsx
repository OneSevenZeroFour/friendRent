import React from "react"
import { connect } from "react-redux"

import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import styled from "styled-components"
import $ from "jquery"




class moresj extends React.Component {
    constructor(props){
        super(props);
        this.show = function(e){
            var target = e.target
                $(target).addClass('active1').siblings().removeClass('active1')
               goAjax($(target).attr('id'))
                
        }
        function compare(property){
                            return function(a,b){
                                var value1 = a[property];
                                var value2 = b[property];
                                return value2 - value1;
                            }
                        }
        function goAjax(aa){
            $.ajax({
                    url:'https://www.easy-mock.com/mock/5993f32f059b9c566dbf4430/frent/more/ranking/'+ aa,
                    type:'get',
                    success:function(res){
                       
                        
                       var arr = (res.data.list.sort(compare('number')))
                           
                        $('.sec').html(arr.map(function(data){
                            return`
                            <div class="sec1">
                                    <div class="csjH">
                                        <p><img src="${data.icon}${data.urlid}" alt="x"></p>
                                    </div>
                                    <div class="scjC">
                                        <p><span>${data.name}</span></p>
                                       <p>截止${data.time}发布了${data.number}条数据</p>
                                    </div>
                            </div>
                               

                            `
                        }))

                    }
                })}
    }

    render(){
        var Csj1 = styled.div`
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
          .glyphicon{color:#fff}}
            .section .ctag{
                background-color: #474a4f;
                height:30px;
                width:100%;
                color:#fff;
            }
            .ctag p{float:left;width:25%;height:30px;line-height:30px;text-align:center;}
            .active1{border-bottom:2px solid #FF5252}
           
            .csjH {
                float:left;
                width:60px;
                height:60px;
                border-radius:50px;
                margin:10px 0 0 24px;
            }
            .csjH img{width:60px;height:60px;}
            .c_gg{background-color:gray;color:#fff;font-weight:700;padding-left:30px;line-height:17px;height:30px;}
            .scjC{
                float:left;
                color:black;
                padding-left:25px;
                margin-top:15px;
            }
            .sec1{height:80px;width:100%;border-bottom:1px solid #eee}
          
        `
        return (<Csj1>
                 <div className="header"><Link to="/more"><span  className="glyphicon glyphicon-chevron-left"></span></Link><span>社区活跃榜</span></div>
                 <div className = "section">
                    <div className="ctag" onClick={this.show}>
                        <p id="active">活跃</p>
                        <p id="active">关注</p>
                        <p id="active">评论</p>
                        <p id="active">点赞</p>
                    </div>
                    <div className="c_gg">排行榜每日更新,每日0点可看到最新数据</div>
                    <div className="sec"></div>

                 </div>
               
            </Csj1>)
    }
componentDidMount(){
    function compare(property){
                            return function(a,b){
                                var value1 = a[property];
                                var value2 = b[property];
                                return value2 - value1;
                            }
                        }
  $.ajax({
                    url:'https://www.easy-mock.com/mock/5993f32f059b9c566dbf4430/frent/more/ranking/active',
                    type:'get',
                    success:function(res){
                       
                        
                       var arr = (res.data.list.sort(compare('number')))
                           
                        $('.sec').html(arr.map(function(data){
                            return`
                            <div class="sec1">
                                    <div class="csjH">
                                        <p><img src="${data.icon}${data.urlid}" alt="x"></p>
                                    </div>
                                    <div class="scjC">
                                        <p><span>${data.name}</span></p>
                                       <p>截止${data.time}发布了${data.number}条数据</p>
                                    </div>
                            </div>
                               

                            `
                        }))

                    }
                })
        console.log( $('#active'))
        $('#active').addClass('active1')
    
  }
}
}
export default connect((state)=>{
    return {state}
},(dispatch)=>{
    return {

    }
})(moresj)