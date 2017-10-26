import React from "react";
import { connect } from "react-redux";

import "./Kfollow.scss";
class Kfollow extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            userList:[{
                name:"老谢",text:"这个人很懒:什么也没有写",id:1
            },{
                name:"老蓝",text:"这个人很懒",id:2
            },{
                name:"老叶",text:"这......",id:3
            }]
        }
        this.remove= this.remove.bind(this);
       
        
        
    }
    remove(e){
        var arr = this.state.userList;
        arr.forEach(function(item,idx){
            if(item.id==e.target.dataset.id){
                arr.splice(idx,1)
            }
        })
        this.setState({userList:arr})
    }
    render() {
        return (
               <div className="Kfollow">
                    <div className="KfollowHead">
                        <span><a href="#/user">返回</a></span>
                        <p>我关注的人</p>
                        <span></span>
                    </div>
                    <div className="KfollowBody">
                        <h4>去看看他们的帖子</h4>
                        <ul className="Kuser-list">{
                            this.state.userList.map((item)=>{
                                return <li key={item.id}>
                                    <div className="Kuser-logo"></div>
                                    <h5>{item.name}</h5>
                                    <h6>{item.text}</h6>
                                    <span className="Kuser-del" data-id={item.id} onClick={this.remove}>删除</span>
                                </li>
                            })
                        }</ul>
                    </div>
               </div>
        )
    }
    
}
export default connect((state) => {
    return state
})(Kfollow)

