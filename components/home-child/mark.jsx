import React from "react"

import styled from "styled-components"

import { connect } from "react-redux"
import $ from "jquery"
import Head from "./head.jsx"
import Footer from "../footer.jsx"

class Mark extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data:[],
            show:true
        }

        this.setPopupHide = ()=>{
            this.setState({
                show:false
            })
        }

        this.askData = (typ,select)=>{
            console.log(typ)
            console.log(select)
            var self = this
            $.ajax({
                type:"get",
                url:"https://www.easy-mock.com/mock/5993f32f059b9c566dbf4430/frent/"+typ,
                success:function(res){
                    self.setState({
                        show:false,
                        data:res.data.list                      
                    })
                }
            })
            self.props.send()
        }
    }

    componentWillReceiveProps(){

    }

    componentDidUpdate(){
        console.log(this.state)
    }
    componentDidMount(){

    }

    componentWillMount(){
        var self = this;
        $.ajax({
            type:"get",
            url:"https://www.easy-mock.com/mock/5993f32f059b9c566dbf4430/frent/singwei",
            success:function(res){
                self.setState({
                    data:res.data.list
                })
            }
        })
    }

    render(){
        var Div = styled.div`
            height:100%;
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
            .mask{
                height:100%;
                width:100%;
                background:#000;
            }
            .popup{
                position:fixed;
                bottom:52px;;
                left:0;
                z-index:20001;
                width:100%;
                height:210px;
                background:#fff;
                .del{
                    text-align:right;
                    span{
                        font-size:20px;
                        padding:3px;
                        margin:0 5px;
                        color:#666;
                    }
                }
               .selbtn{
                float:left;
                width:33.3%;
                text-align:center;
                height:60px;
                line-height:60px;
                    &:last-child{
                        float:right;
                    }
                    button{
                        display:inline-block;
                        height:30px;
                        width:60px;
                        background:pink;
                        color:#fff;
                        line-height:30px;
                        text-align:center;
                        border:0 none;
                        border-radius:4px;
                    }
                } 
            }
        `
        return (<Div>
            <Head />
                <ul className="datalist">{
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
            <Footer />
            <div className="mask" style={{opacity: 0.4, backgroundColor: "#000", position: "fixed",bottom:0,left:0, zIndex: 20000 ,display:this.state.show?"block":"none"}}></div>
                        <div className="popup" style={{display:this.state.show?"block":"none"}}>
                            <div className="del" onClick={this.setPopupHide}><span>&times;</span><span>关闭</span></div>
                            <div>
                                <div className="selbtn">
                                    <button onClick={this.askData.bind(this,"singwei","独卫")}>独卫</button>
                                </div>
                                <div className="selbtn">
                                    <button onClick={this.askData.bind(this,"manchum","男室友")}>男室友</button>
                                </div>
                                <div className="selbtn">
                                    <button onClick={this.askData.bind(this,"girlchum","女室友")}>女室友</button>
                                </div>
                                <div className="selbtn">
                                    <button onClick={this.askData.bind(this,"sumroom","晒房")}>晒房</button>
                                </div>
                                <div className="selbtn">
                                    <button onClick={this.askData.bind(this,"feedback","反馈")}>反馈</button>
                                </div>
                                <div className="selbtn">
                                    <button onClick={this.askData.bind(this,"gossip","闲聊")}>闲聊</button>
                                </div>
                                <div className="selbtn">
                                    <button onClick={this.askData.bind(this,"lieidle","闲置")}>闲置</button>
                                </div>
                                <div className="selbtn">
                                    <button onClick={this.askData.bind(this,"makefriends","交友")}>交友</button>
                                </div>
                            </div>
                        </div>
            </Div>)
    }
}

export default connect((state)=>{
    console.log(state)
    return state;
},(dispatch)=>{
    return {
        send(){
            console.log(222)
            dispatch({type:"CHANGLABEL",slect:true})
        }
    }
})(Mark)