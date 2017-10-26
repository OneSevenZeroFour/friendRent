import React from "react";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import "./Kpopup.scss";
class Kpopup extends React.Component {
    constructor(props) {
        super(props);
        this.state={

            tips:""
        }
        this.Kclose = (e) => {
            if (e.target.className == "Kclose" || e.target.className == "Kcover") {
                this.props.dispatch({ type: "SETSHOWKSIDE", isShowKside: false })
            }
        }
        this.submitTel=this.submitTel.bind(this)
    }
    render() {
        return (
            <div>
                <ReactCSSTransitionGroup
                  transitionName="fade"
                  transitionEnterTimeout={2000}
                  transitionLeaveTimeout={2000}>
                {<div key="1" className="Kcover" onClick={this.Kclose} style = {{display:this.props.isShowKside?"block":"none"}}>
                    <div className="Kbox">
                        <div className="Kclose" onClick={this.Kclose}>关闭</div>
                        <div className="Klogo">
                            <img src="./img/k1.png" />
                        </div>
                        <div className="Ktips">系统检测您暂未登录，请输入手机号进行下一步操作！</div>
                        <div className="Kinput-box">
                            <input ref="inputTel" type="number" className="Kinput" placeholder="请输入手机号码" />
                            <hr className="Kline" />
                            <hr className="Kline-focus" />
                            <button className="Kbtn" onClick={this.submitTel}>下一步</button>
                        </div>
                    </div>
                    {this.state.tips!=""?<div className="Klogin-tips">{this.state.tips}</div>:""}	
                </div>}
                 </ReactCSSTransitionGroup>
            </div>

        )
    }
    submitTel(){
    	var self = this;
    	var telnum = this.refs.inputTel.value
    	if(telnum.length!=11){
    		this.setState({tips:"请输入正确的手机号码"},function(){
    			setTimeout(()=>{
    				this.setState({tips:""})
    			},2000)
    		})
    	}else{
    		var self = this;
    		this.setState({tips:"正在登录中,请稍后..."},function(){
				this.setState({tips:""},function(){console.log(1111)})
					axios.get("http://localhost:12345/select",{params:{tel:telnum}}).then(function (response) {
						if(response.data==="fail"){
							self.props.dispatch({type:"SETTEL",tel:telnum})
							self.props.dispatch({ type: "SETSHOWKSIDE", isShowKside: false })
							window.location.hash = "#/reg"
						}else if (response.data==="ok"){
							self.props.dispatch({type:"SETTEL",tel:telnum})
							self.props.dispatch({ type: "SETSHOWKSIDE", isShowKside: false })
							window.location.hash = "#/login"
						}
					})
    		})
    		
    	}
    	
    }
    componentDidMount(){

    }
}
export default connect((state)=>{
    return  state 
})(Kpopup)

