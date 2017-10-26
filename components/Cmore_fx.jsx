import React from "react"
import { connect } from "react-redux"
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import styled from "styled-components"
import $ from "jquery"

    

class morefx extends React.Component {
    constructor(props){
        super(props);
        this.show = function(e){
            var target = e.target
                $(target).addClass('active').siblings().removeClass('active')
                
                goAjax($(target).attr('id'))
        }
        function goAjax(aa){
            $.ajax({
                    url:'https://www.easy-mock.com/mock/5993f32f059b9c566dbf4430/frent/more/discover/'+ aa,
                    type:'get',
                    success:function(res){
                       
                        var arr=[]
                            arr.push(res.data)
                        $('.sec').html(arr.map(function(data){
                                console.log(data)

                            return`
                            <div>   


                                <div class="ctoubu">
                                    <p><img src="${data.icon}${data.urlid}" alt="x"></p>
                                    <p><span>${data.name}</span>
                                        <p></p>
                                        <span>性别：${data.gender}&nbsp; 爱好：${data.hobby}</span></p>
                                </div>
                                <div class="csec">
                                    ${data.signature}
                                </div>
                            </div>
                            `
                        }))

                    }
                })}
        this.gonext = function(e){
            var target= e.target
            var tarAjax = ($(target).parent().prev().prev().children('.active').attr('id'))
                 goAjax(tarAjax)
        }
        this.goshow = function(e){
            
        }
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
          
            .ctag p{float:left;width:25%;height:30px;line-height:30px;text-align:center;}
            .active{border-bottom:2px solid #FF5252}
            .sec{padding:30px;width:85%;background-color:#FAFAFA;color:black;margin:10px auto;border:1px solid black}
            .ctoubu{border-bottom:1px solid;height:50px }
            .ctoubu p:nth-of-type(1){
                float:left;
                width:50px;
                height:50px;
                margin:-6px;
            }
            .ctoubu p:nth-of-type(2){float:left;margin-left:10px}
            .ctoubu #cname{display:block;font-size:1.3em;width:300px;height:196px;position:absolute;top:117px;left:27px;text-align:center;line-height:78px;}
            .ctoubu p:nth-of-type(2) span:nth-of-type(2){display:block;font-size:1em;line-height:4}
            .csec{display:block;width:100%;margin:21px}
            .ctoubu img{width:50px;height:50px;;border-radius:50px;}
            #cBtn{
                margin:10px 57px;
                width:70%;
                height:40px;
                background-color:#FF5252;
                color:#fff;
                outline:0;
                border:0;
                border-radius:40px
            }
        `
        return (<Csj1>
               <div className="header"><Link to="/more"><span  className="glyphicon glyphicon-chevron-left"></span></Link><span>发现</span></div>
               <div className="section">
                    <div className="ctag" onClick={this.show}>
                        <p id="house">找房子</p>
                        <p id="roomie">找室友</p>
                        <p id="friend">找朋友</p>
                        <p id="unused">找闲置</p>
                    </div>
                    <Link to ="fx/per"><div className = "sec" onClick={this.props.setAjaxName}></div></Link>
                    <div >
                         <button id="cBtn" onClick={this.gonext}>下一个</button>
                    </div>

               </div>
               
            </Csj1>)
    }
    componentDidMount(){
  
        $.ajax({
                    url:'https://www.easy-mock.com/mock/5993f32f059b9c566dbf4430/frent/more/discover/house',
                    type:'get',
                    success:function(res){
                        var arr=[]
                            arr.push(res.data)
                        $('.sec').html(arr.map(function(data){
                                return`
                                    <div class="ctoubu" >
                                        <p><img src="${data.icon}${data.urlid}" alt="x"></p>
                                        <p><span id="cname">${data.name}</span><span>性别：${data.gender}&nbsp; 爱好：${data.hobby}</span></p>
                                    </div>
                                    <div class="csec">
                                        ${data.signature}
                                    </div>
                                
                                `
                            }))
                    }
                })
        $('#house').addClass('active')
    
  }
}

export default connect((state)=>{
    return {state}
},(dispatch)=>{
    return {
        setAjaxName(e) {
           if(e.target.id.toLowerCase()=="cname"){
                console.log($(e.target).html())
                dispatch({type: "SETAJName", ajName: $(e.target).html()})
              
            }
          
        }
    }
})(morefx)