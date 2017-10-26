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
        this.getTime = this.getTime.bind(this)
        this.toHome = this.toHome.bind(this)
        this.reg = this.reg.bind(this)
    }
    
    render() {
        return (
               <div className="Kreg">
               		<div className="KregHead">
               			<span onClick={this.toHome}>返回</span>
               			<p>注册</p>
               			<span></span>
               		</div>
               		<div className="KregBody">
               			<div className="Klogo"><img src="./img/k1.png"/></div>
               			<p className="Kname">您还未注册,请进行下一步操作!</p>
               			<p className="Kaccout">您的登录账号是<span>{this.props.tel?this.props.tel:'XXX'}</span></p>
               		</div>
               		<div className="Kinput-box">
               			<div className="Kinput-first">
	                        <input type="number" className="Kinput" placeholder="请输入您的验证码" />
    	                    <span className="Ktime" onClick={this.getTime}>{this.state.time?this.state.time+"秒后重试":"重新获取"}</span>	
               			</div>
                        <hr className="Kline" />
                        <hr className="Kline-focus" />
                        	<input ref="pf" type="password" className="Kinput" placeholder="请输入您的密码" />
                        <hr className="Kline" />
                        <hr className="Kline-focus" />
                        <button className="Kbtn" onClick={this.reg}>登录</button>
                    </div>
               </div>
        )
    }
    componentDidMount(){
    	this.getTime();
    }
    toHome(){
    	clearInterval(this.timer)
    	window.location.hash="#/home"
    }
    reg(){
    	if(this.props.tel==undefined){
    		clearInterval(this.timer)
    		this.props.dispatch({ type: "SETSHOWKSIDE", isShowKside: true })
			window.location.hash = "#/home"
    	}else{
    		var tel = this.props.tel; 
    		var password = this.refs.pf.value;
    		axios.get("http://localhost:12345/insert",{params:{tel:tel,password:password}})
    		.then(function (response) {
    			if(response.data=="ok"){
    				clearInterval(self.timer)
    				//写入cookie
    				var date = new Date();  
					date.setDate(date.getDate() +100); 
					document.cookie = "tel="+tel+";expires=" + date;
					window.location.hash = "#/user"
    			}
    		})
    		
    	}
    	
    	
    }
    getTime(){
    	var self = this;
    	if(self.state.isGetTime){
    		//开关关上,不准二次点击
    		self.setState({isGetTime:false})
    		var now = new Date();
            now.setSeconds(now.getSeconds() + 30); //在当前时间基础上增加30s
            var fistTime = now.getSeconds(); //取得30s后的时间
            self.timer = setInterval(function (e) {
            	var newTime = new Date();	
            	//如果已经到达时间,则退出定时器
            	if (now.getTime() <= newTime.getTime()) {
            		self.setState({isGetTime:true})//恢复开关
            		self.setState({time:0})
                    clearInterval(self.timer);
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
export default connect((state) => {
    return state
})(Kreg)

