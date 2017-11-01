import React from "react"

import { connect } from "react-redux"

import { Route , Link } from "react-router-dom"

import Kpopup from "./me-child/Kpopup.jsx"

//引入样式组件，直接在本页样式
import styled from "styled-components"
// //引入bootstrap样式库
// import {Button , Modal} from "react-bootstrap"
class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        	isLogin:false,
        	Url : "#/",
        }
        this.showKside = this.showKside.bind(this);//绑定方法的this
		
    }
    showKside(){
		if(!this.state.isLogin){
			this.props.dispatch({type:"SETSHOWKSIDE",isShowKside:true})
		}else{
			window.location.hash = "#/user"
		}
    }

	componentDidMount(){
		var self = this;
		var cookies = document.cookie.split(";");
		cookies.forEach(function(item){
			if(item.split('=')[0]=="tel"){
				self.setState({isLogin:true})
			}
		})
	}
	
    render(){
        var Div = styled.div`
                position:fixed;
                z-index:1;
                width:100%;
                bottom:0; 
            .foot{
                display:flex;
                justify-content:space-around;
                background:#474a4f;
                color:#fff;
                font-size:16px;
                height:52px;
                // line-height:60px;
                .btn{
                    position:relative;
                }
                .midbtn{
                    width:52px;
                    background:red;
                    border-radius:50%;
                    line-height:65px;
                    text-align:center;
                }
                svg{
                    color:#fff;
                    margin-top:-2px;
                    width:26px;
                    height:24px;
                }
                .plus{
                    margin-top:10px;
                }
                .navbtn{
                    position:absolute;
                    bottom:-10px;
                    left:12px;
                    height:18px;
                    line-height:18px;
                    font-size:14px;
                    color:#fff;
                }
            }
        `
        return (
            <Div>
                <div className="foot">
                <Link to="/home/all">
                    <div className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 1024 1024" version="1.1"><path fill="#fff" d="M511 147.3L834.3 511H735v392H623V679H399v224H287V511h-99.3L511 147.3m0-84.3L63 567h168v392h224V735h112v224h224V567h168L511 63z"/></svg>
                        <span className="navbtn">首页</span>
                    </div>
                </Link>
                <Link to="/show">
                    <div className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 1024 1024" version="1.1"><path fill="#fff" d="M513.311367 501.773078l-57.771775-61.816904L305.52495 615.757109l-61.497633-56.212256-89.451288 114.302279 623.679545 0L778.255575 559.544853 631.645472 348.3365 513.311367 501.773078zM286.918173 406.77547c41.522696 0 75.182306-33.660634 75.182306-75.196633 0-41.521672-33.659611-75.18333-75.182306-75.18333s-75.18333 33.661657-75.18333 75.18333C211.735867 373.114836 245.396501 406.77547 286.918173 406.77547zM869.423971 703.647855c-0.167822-45.472658 0-436.505585 0-474.579739s-21.321608-59.481719-59.633169-59.633169-644.234697 0-685.030845 0-59.82862 26.75741-59.633169 59.633169 0 440.573227 0 474.579739 18.906605 59.797921 59.633169 59.634192 645.913942 0.864694 685.030845 0.930185S869.591793 749.120512 869.423971 703.647855zM124.758933 706.458877 124.758933 229.069139l685.788092 0 0 477.390761L124.758933 706.4599zM958.873212 318.519404c0.010233-47.542806-43.152822-59.633169-59.633169-59.633169l0.757247 454.401164c0 0 13.365402 81.690534-48.131207 81.690534l-697.290053-0.014326c0 16.46602 12.003382 59.557444 59.634192 59.633169s636.620275 0.005117 685.029822 0 59.719126-24.636097 59.633169-61.497633S958.865026 366.06221 958.873212 318.519404z"/></svg>
                        <span className="navbtn">展集</span>
                    </div>
                </Link>                   
                <Link to="/more">
                    <div className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1024 1024" version="1.1"><path fill="#fff" d="M779.52 213.76c-105.6 71.04-307.2 206.72-313.6 210.56-4.48 2.56-8.32 5.76-12.16 8.32 0 0 0 0 0 0-14.08 11.52-24.32 26.24-30.08 42.88l-198.4 288c-4.48 6.4-3.84 14.72 1.92 19.84 3.2 3.2 7.04 5.12 11.52 5.12 3.2 0 5.76-0.64 8.32-2.56l302.08-187.52c19.2-7.04 36.48-20.48 48-38.4 4.48-6.4 196.48-312.32 204.8-325.12 3.84-6.4 3.2-14.72-2.56-19.84C794.24 210.56 785.92 209.92 779.52 213.76zM295.04 720l126.72-184.32c8.96 31.36 33.28 56.32 64 65.92L295.04 720zM514.56 566.4c-31.36 0-57.6-25.6-57.6-57.6 0-31.36 25.6-57.6 57.6-57.6s57.6 25.6 57.6 57.6C572.16 540.8 545.92 566.4 514.56 566.4zM510.72 16c-273.28 0-496 222.72-496 496s222.72 496 496 496c273.28 0 496-222.72 496-496S784 16 510.72 16zM510.72 976c-256 0-464-208-464-464 0-256 208-464 464-464 256 0 464 208 464 464C974.08 768 766.08 976 510.72 976z"/></svg>
                        <span className="navbtn">更多</span>
                	</div>
                </Link>
                <a onClick={this.showKside}>
                    <div className="btn" >
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1024 1024" version="1.1"><path fill="#fff" d="M514.255507 1019.488987c-272.9163 0-496.211454-223.295154-496.211454-496.211454s223.295154-496.211454 496.211454-496.211454 496.211454 223.295154 496.211453 496.211454-223.295154 496.211454-496.211453 496.211454z m0-947.312776c-248.105727 0-451.101322 202.995595-451.101322 451.101322s202.995595 451.101322 451.101322 451.101322 451.101322-202.995595 451.101321-451.101322-202.995595-451.101322-451.101321-451.101322zM685.674009 408.246696c0 96.986784-78.942731 243.594714-175.929516 243.594714s-175.929515-146.60793-175.929515-243.594714 78.942731-175.929515 175.929515-175.929515 175.929515 78.942731 175.929516 175.929515zM442.079295 572.898678h133.07489v232.317181h-133.07489zM514.255507 674.396476c-146.60793 0-270.660793 76.687225-324.792952 191.718061 85.709251 81.198238 200.740088 130.819383 327.048458 130.819384 124.052863 0 239.0837-49.621145 322.537445-128.563877-51.876652-115.030837-178.185022-193.973568-324.792951-193.973568z"/></svg>
                        <span className="navbtn">我的</span>
                    </div>
                </a>
                </div>
                <Kpopup/>
            </Div>
            )
    }



}


export default connect((state)=>{
    return state
})(Footer)