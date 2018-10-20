import React, { Fragment } from 'react';
import {Icon, List, NavBar} from 'antd-mobile';
import { Link,Route } from 'react-router-dom'
const Item = List.Item;

class TuijianDetail extends React.PureComponent {
    componentDidMount(){
        console.log(this.props.match.params.id)
    }

    goBack(){
        this.props.history.goBack()
    }

    render() {
        return (
            <Fragment>
                <NavBar
                    mode="light"
                    leftContent="返回"
                    icon={<Icon type="left" />}
                    onLeftClick={()=>this.goBack()}
                >推荐详情页</NavBar>
            </Fragment>
        );
    }
}

export default TuijianDetail;