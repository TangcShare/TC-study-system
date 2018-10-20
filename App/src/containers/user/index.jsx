import React, { Fragment } from 'react';
import { List} from 'antd-mobile';
import { Link,Route,withRouter } from 'react-router-dom'
import CourseListIndex from "../course/courseListIndex";
const Item = List.Item;

class MyIndex extends React.PureComponent {
    goToRegister(){
        this.props.history.push("/register")
    }
    goToNotice(){
        this.props.history.push("/notice")
    }
    goToStar(){
        this.props.history.push("/star")
    }
    goToAnswer(){
        this.props.history.push("/answer")
    }
    goToResponse(){
        this.props.history.push("/response")
    }
    render() {
        return (
            <Fragment>
                <List className="my-list">
                    <Item
                        align="top"
                        // thumb="././././public/asset/icon/my.svg"
                        arrow="horizontal"
                        onClick={()=>this.goToRegister()}
                        multipleLine>
                        游客快捷登录
                    </Item>
                </List>
                <br/>
                <List>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        arrow="horizontal"
                        onClick={()=>this.goToNotice()}
                    >我的通知</Item>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        arrow="horizontal"
                        onClick={()=>this.goToStar()}
                    >我的收藏</Item>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        arrow="horizontal"
                        onClick={()=>this.goToAnswer()}
                    >我的答题</Item>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        arrow="horizontal"
                        onClick={()=>this.goToResponse()}
                    >我的反馈</Item>
                </List>
            </Fragment>
        );
    }
}

export default MyIndex=withRouter(MyIndex);