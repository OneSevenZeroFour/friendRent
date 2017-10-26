import React from "react";
import { connect } from "react-redux";

import "./Kuserissue.scss";
class Kuserissue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	
        }
       
        
        
    }
    render() {
        return (
               <div className="Kuserissue">
                    <div className="KuserissueHead">
                        <span><a href="#/home">返回</a></span>
                        <p>我关注的人</p>
                        <span></span>
                    </div>
               </div>
        )
    }
    
}
export default connect((state) => {
    return state
})(Kuserissue)

