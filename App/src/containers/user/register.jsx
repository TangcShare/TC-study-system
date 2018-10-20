import React, { Fragment } from 'react';
import { Icon, NavBar, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import './register.css'

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
class Register extends React.PureComponent {
    goBack(){
        this.props.history.goBack()
    }

    render() {
        // const { getFieldProps } = this.props.form;
        return (
            <Fragment>
                <NavBar
                    mode="light"
                    leftContent="返回"
                    icon={<Icon type="left" />}
                    onLeftClick={()=>this.goBack()}
                >注册</NavBar>
                {/*<List>*/}
                    {/*<InputItem*/}
                        {/*{...getFieldProps('number')}*/}
                        {/*type="number"*/}
                        {/*placeholder=""*/}
                    {/*>输入用户名</InputItem>*/}
                    {/*<InputItem*/}
                        {/*{...getFieldProps('password')}*/}
                        {/*type="password"*/}
                        {/*placeholder=""*/}
                    {/*>输入密码</InputItem>*/}
                    {/*<InputItem*/}
                        {/*{...getFieldProps('password')}*/}
                        {/*type="password"*/}
                        {/*placeholder=""*/}
                    {/*>确认密码</InputItem>*/}
                {/*</List>*/}
            </Fragment>
        );
    }
}
// const RegisterW = createForm()(Register);
export default Register;