import React from "react";
import { connect } from "react-redux";

import "./Klogin.scss";
class Klogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowErr:false
        }
        this.loginIn = this.loginIn.bind(this)
        
    }
    render() {
        return (
               <div className="Klogin">
               		<div className="KloginHead">
               			<span><a href="#/home">返回</a></span>
               			<p>登录</p>
               			<span></span>
               		</div>
               		<div className="KloginBody">
               			<div className="Klogo"><img src="./img/k1.png"/></div>
               			<p className="Kname">亲爱的<span>老姚</span>欢迎回来!</p>
               			<p className="Kaccout">您的登录账号是<span>{this.props.tel?this.props.tel:'XXX'}</span></p>
               		</div>
               		<div className="Kinput-box">
                        <input ref="loginPf"type="password" className="Kinput" placeholder="请输入您的密码" />
                        <hr className="Kline" />
                        <hr className="Kline-focus" />
                        <button className="Kbtn" onClick={this.loginIn}>登录</button>
                    </div>
                    {this.state.isShowErr?<div className="Kerror">密码错误,请重新输入</div>:""}
               </div>
        )
    }
    loginIn(){
    	if(this.props.tel==undefined){
    		clearInterval(this.timer)
    		this.props.dispatch({ type: "SETSHOWKSIDE", isShowKside: true })
			window.location.hash = "#/home"
    	}else{
    		var self = this;
    		var tel = this.props.tel; 
    		var password = this.refs.loginPf.value;
    		axios.get("http://localhost:12345/login",{params:{tel:tel,password:password}})
    		.then(function (response) {
    			
    			if(response.data=="ok"){
    				self.props.dispatch({ type: "SETSHOWKSIDE", isShowKside: false })
    				window.location.hash="#/user"
    				var date = new Date();  
					date.setDate(date.getDate() +100); 
					document.cookie = "tel="+tel+";expires=" + date;
    			}
    			else if(response.data=="fail"){
    				self.setState({isShowErr:true},()=>{
    					setTimeout(function(){
    						self.setState({isShowErr:false})
    					},2000)
    				})
    			}
    			
    		})
    	}
    }
}
export default connect((state) => {
    return state
})(Klogin)

