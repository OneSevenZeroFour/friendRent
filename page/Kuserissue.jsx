import React from "react";
import { connect } from "react-redux";
import $ from "jquery"
import "./Kuserissue.scss";
class Kuserissue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	tab:[{
                text:"我发布的",
                title:"我的",
                id:1
            },{
                text:"点赞的话题",
                title:"点赞",
                id:2
            },{
                text:"收藏的话题",
                title:"收藏",
                url:"https://www.easy-mock.com/mock/5993f32f059b9c566dbf4430/frent/label",
                id:3
            },{
                text:"关注人话题",
                title:"关注",
                id:4
            }],
            tabId : 1,
            data:[]
        }
        this.tab = this.tab.bind(this);
    }
    tab(e){
        this.setState({tabId:e.target.dataset.id},function(){
            
        });
    }
    componentDidMount(){
        this.setState({tabId:this.props.match.params.id})
        var self = this;
        axios.get("https://www.easy-mock.com/mock/5993f32f059b9c566dbf4430/frent/label").then(function (response) {
            self.setState({data:response.data},function(){
                // console.log(this.state.data)
            })
        })



    }
    render() {
        return (
               <div className="Kuserissue">
                    <div className="KuserissueHead">
                        <span><a href="#/user">返回</a></span>
                        <p>{
                            this.state.tab.map((item)=>{
                                if(item.id==this.state.tabId){
                                    return item.text;
                                }
                            })
                        }</p>
                        <span></span>
                    </div>
                    <div className="Kuserissue-tab">
                    {
                        this.state.tab.map((item)=>{
                            return  <div onClick={this.tab} data-id={item.id} key={item.id} className={this.state.tabId == item.id?"Kuserissue-tab-active":""}>{item.title}</div>
                        })
                    }
                    </div>
                    <div className="KuserissueBody">
                        <div className="mu-card-header">
                            <div className="mu-avatar">
                                <div className="mu-avatar-inner">
                                    <img src="http://placeimg.com/80/80/any?id=6" /> 
                                </div>
                            </div> 
                            <div className="mu-card-header-title">
                                <div className="mu-card-title">
                                    蒋娟 | #室友
                                </div>
                                <div className="mu-card-sub-title">
                                    1988-11-21 21:27:30
                                </div>
                            </div>
                        </div>
                        <div className="mu-card-text">
                            件来争形单高便律义布划革口以一社。
                            <div className="mu-badge-container demo-badge-content">#女室友 <em className="mu-badge mu-badge-float"></em>
                            </div>
                        </div>  
                        <div className="mu-flexbox mu-flex-row">
                            <div className="mu-flexbox-item flex-demo" style={{marginLeft:" 8px", flex: "1 1 auto", order: "0"}}>
                                <img  zdepth="1" className="mu-col-img" src="http://placeimg.com/244/132/any?id=8" lazy="loaded"/>
                            </div>
                            <div  className="mu-flexbox-item flex-demo" style={{marginLeft: "8px",flex: "1 1 auto", order: "0"}}>
                                <img zdepth="1" className="mu-col-img" src="http://placeimg.com/244/132/any?type=8" lazy="loaded"/>
                            </div>
                        </div>
                    </div>
               </div>
        )
    }
    
}
export default connect((state) => {
    return state
})(Kuserissue)

