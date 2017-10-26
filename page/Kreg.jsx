import React from "react";
import { connect } from "react-redux";

import "./Kreg.scss";
class Kreg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time:0,
            isGetTime:true,
        }
        this.getTime = ()=>{
        	var self = this;
        	if(self.state.isGetTime){
        		//开关关上,不准二次点击
        		self.setState({isGetTime:false})
        		var now = new Date();
                now.setSeconds(now.getSeconds() + 30); //在当前时间基础上增加30s
                var fistTime = now.getSeconds(); //取得30s后的时间
                var timer = setInterval(function (e) {
                	console.log(self.state.time)
                	var newTime = new Date();	
                	//如果已经到达时间,则退出定时器
                	if (now.getTime() <= newTime.getTime()) {
                		self.setState({isGetTime:true})//恢复开关
                		self.setState({time:0})
                        clearInterval(timer);
                        return;
                	}
                	//否则没到达时间的话,
                	var newSeconds = fistTime - newTime.getSeconds(); //用之前的时间来减去当前时间算出倒数的时间,
                    //因为只是获取秒数有可能出现负数,如果是负数就加60
                    newSeconds = newSeconds > 0 ? newSeconds : newSeconds + 60;
                	self.setState({time:newSeconds})

                },1000)
        	}
        }
        
    }
    render() {
        return (
               <div className="Kreg">
               		<div className="KregHead">
               			<span>返回</span>
               			<p>注册</p>
               			<span></span>
               		</div>
               		<div className="KregBody">
               			<div className="Klogo"><img src="./img/k1.png"/></div>
               			<p className="Kname">您还未注册,请进行下一步操作!</p>
               			<p className="Kaccout">您的登录账号是<span>11111111111</span></p>
               		</div>
               		<div className="Kinput-box">
               			<div className="Kinput-first">
	                        <input type="number" className="Kinput" placeholder="请输入您的验证码" />
    	                    <span className="Ktime" onClick={this.getTime}>{this.state.time?this.state.time+"秒后重试":"重新获取"}</span>	
               			</div>
                        <hr className="Kline" />
                        <hr className="Kline-focus" />
                        <input type="number" className="Kinput" placeholder="请输入您的密码" />
                        <hr className="Kline" />
                        <hr className="Kline-focus" />
                        <button className="Kbtn">登录</button>
                    </div>
               </div>
        )
    }
    componentDidMount(){
    	this.getTime();
    }
    
}
export default connect((state) => {
    return state
})(Kreg)

