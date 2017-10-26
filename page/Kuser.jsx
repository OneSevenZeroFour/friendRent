import React from "react";
import { connect } from "react-redux";
import Footer from "../components/footer.jsx"

import "./Kuser.scss";
class Kuser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	tel:"未登录"
        }
        this.loginOut = this.loginOut.bind(this)
        
        
    }
    render() {
        return (
               <div>
                    <div className="Kuser">
                    	<img src="./img/kb2.jpg"/>	
                    	<div className="Kuser-box">
                    		<div className="Kuser-box-one-top">
	                    		<div className="Kuser-portrait">
	                    			<div></div>
	                    		</div>
	                    		<div className="Kuser-name">
	                    			<p>laoyao(老姚)</p>
	                    			<p>手机号:{this.state.tel}</p>
	                    		</div>
							</div>
                    		<div className="Kuser-box-one-bottom">
                    			<div>关注</div>
                    			<div>收藏</div>
                    			<div>点赞</div>
                    		</div>
                    	</div>
                    	<div className="Kuser-box">
                    		<div className="Kuser-issue">我发布的帖子 </div>
                    		<div className="Kuser-discuss">我发布的评论</div>
                    	</div>
                    	<div className="Kuser-box">
                    		<div className="Kuser-cellphone">手机绑定</div>
                    		<div className="Kuser-modifydata">修改资料</div>
                    	</div>
                    	<div className="Kuser-box Kuser-btn">
                    		<div className="Kuser-blacklist">黑名单</div>
                    		<div className="Kuser-keyword">关键词过滤</div>
                    		<div className="Kuser-authority">发布权限</div>
                    	</div>
                    	<div className="Kuser-box Kuser-exit" onClick={this.loginOut}>退出当前账号</div>
                    </div>
                    <Footer/>
               </div>
        )
    }
    componentDidMount(){
        var self = this;
		var cookies = document.cookie.split(";");
		cookies.forEach(function(item){
			if(item.split('=')[0]=="tel"){
				self.setState({tel:item.split('=')[1]})
			}else{
				self.setState({tel:"未登录"})
			}
		})
    }
    loginOut(){
		var date = new Date();  
		date.setDate(date.getDate() -1000); 
		document.cookie = "tel=xx"+";expires=" + date;
		window.location.hash="#/home"
    }
}
export default connect((state) => {
    return state
})(Kuser)

