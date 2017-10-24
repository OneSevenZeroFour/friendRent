import React from "react";
import { connect } from "react-redux";

import "./Klogin.scss";
class Klogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        
    }
    render() {
        return (
               <div className="Klogin">
               		<div className="KloginHead">
               			<span>返回</span>
               			<p>登录</p>
               			<span></span>
               		</div>
               		<div className="KloginBody">
               			<div className="Klogo"><img src="./img/k1.png"/></div>
               			<p className="Kname">亲爱的<span>XX</span>欢迎回来!</p>
               			<p className="Kaccout">您的登录账号是<span>11111111111</span></p>
               		</div>
               		<div className="Kinput-box">
                        <input type="number" className="Kinput" placeholder="请输入您的密码" />
                        <hr className="Kline" />
                        <hr className="Kline-focus" />
                        <button className="Kbtn">登录</button>
                    </div>
               </div>
        )
    }
    
}
export default connect((state) => {
    return state
})(Klogin)

