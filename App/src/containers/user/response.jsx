import React, { Fragment } from 'react';
import { Icon, NavBar, InputItem } from 'antd-mobile';



class Response extends React.PureComponent {
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
                >反馈</NavBar>

            </Fragment>
        );
    }
}

export default Response;