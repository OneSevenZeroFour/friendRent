import React from "react";
import { connect } from "react-redux";


import "./Kpopup.scss";
class Kpopup extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            bool:false,
        }
        this.Kclose = (e) => {
            if (e.target.className == "Kclose" || e.target.className == "Kcover") {
                this.props.dispatch({ type: "SETSHOWKSIDE", isShowKside: false })
            }
        }
    }
    render() {
        return (
            <div>
                <div className="Kcover" onClick={this.Kclose} style = {{display:this.state.bool?"block":"none"}}>
                    <div className="Kbox">
                        <div className="Kclose" onClick={this.Kclose}>关闭</div>
                        <div className="Klogo">
                            <img src="./img/k1.png" />
                        </div>
                        <div className="Ktips">系统检测您暂未登录，请输入手机号进行下一步操作！</div>
                        <div className="Kinput-box">
                            <input type="number" className="Kinput" placeholder="请输入手机号码" />
                            <hr className="Kline" />
                            <hr className="Kline-focus" />
                            <button className="Kbtn">下一步</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.setState({bool:this.props.isShowKside})
    }
}
export default connect((state)=>{
    return  state 
})(Kpopup)

