import React from 'react';

class Ad extends React.Component {
    state = {
    }

    componentDidMount() {
    }

    goBack(){
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <p onClick={()=>this.goBack()}>返回</p>
                <h1>我是广告</h1>
                <h1>我是广告</h1>
            </div>
        );
    }
}

export default Ad