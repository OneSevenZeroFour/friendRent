import React from "react"

import styled from "styled-components"

import $ from "jquery"

class Mate extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data:[]
        }
    }

    componentWillMount(){
        var self = this;
        $.ajax({
            type:"get",
            url:"https://www.easy-mock.com/mock/5993f32f059b9c566dbf4430/frent/roommate",
            success:function(res){
                self.setState({
                    data:res.data.list
                })
                console.log(res.data.list)
            }
        })
    }

    render(){
        var Div = styled.div`
          ul,li{
            margin:0;
            padding:0;
            list-style:none;
          }
          li{
            padding:8px;
            border-bottom:7px solid #efefef;
            .li-head{
                overflow:hidden;
                height:60px;
                padding:5px;
                .li-head-f{
                    float:left;
                    margin-right:30px;
                    img{
                        width:50px;
                        height:50px;
                        border-radius:50%; 
                    }
                }
                .li-head-s{
                    float:left;
                    .li-head-st{
                        margin-bottom:6px;
                    }
                }
            }
            .li-title{
                hieght:30px;
                padding:5px;
                line-height:20px;
                span{
                    margin-left:8px;
                    background:#ffab00;
                    color:#fff;
                    padding:5px;
                }
            }
            .li-img{
                padding:5px;
                img{
                    margin:5px;
                }
                .img1{
                    width:80%;
                    height:130px;
                }
                .img2{
                    width:45%;
                    height:80px;
                }
                .img3{
                    width:30%;
                    height:70px;
                }
            }
            .li-msg{
                overflow:hidden;
                padding:5px;
                div{
                    float:left;
                    span{
                        margin-left:5px;
                    }
                }
                .li-msg-see{
                    margin-left:8%;
                    width:40%;
                }
                .li-msg-fab{
                    width:20%;
                }
                .li-msg-com{
                    margin-left:10%;
                    width:20%;
                }
            }
          }

        `
        return (
            <Div>
            <ul>{
                    this.state.data.map((item,index)=>{
                        return <li key={index}>
                            <div className="li-head">
                                <div className="li-head-f">
                                    <img src={item.icon+parseInt(Math.random()*1000)}/>
                                </div>
                                <div className="li-head-s">
                                    <div className="li-head-st">
                                        {item.name} | #{item.type}
                                    </div>
                                    <div>
                                        {item.date}
                                    </div>
                                </div>
                            </div>
                            <div className="li-title">
                                {item.source}<span>#{item.label}</span>
                            </div>
                            <div className="li-img">{
                                    item.url.map((a,b)=>{
                                    return <img className="allimg"  key={b} className={(function(a){
                                        if(a==1){
                                            return 'img1'
                                        }if(a==2){
                                            return 'img2'
                                        }if(a==3){
                                            return 'img3'
                                        }
                                    })(item.url.length)} src={a.name+parseInt(Math.random()*1000)}/>
                                })
                             }</div>
                            <div className="li-msg">
                                <div className="li-msg-see">
                                <i className="glyphicon glyphicon-eye-open" style={{fontSize:"16px"}}></i>
                                <span>{item.see}</span></div>
                                <div className="li-msg-fab">
                                <i className="glyphicon glyphicon-heart" style={{fontSize:"16px"}}></i>
                                <span>{item.fabulous}</span></div>
                                <div className="li-msg-com">
                                <i className="glyphicon glyphicon-align-justify" style={{fontSize:"16px"}}></i>
                                <span>{item.comment}</span></div>           
                            </div>
                        </li>                       
                    })
                }</ul>
            </Div>
                )
    }
}

export default Mate