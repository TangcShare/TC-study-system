import React from 'react';
import { TabBar } from 'antd-mobile';
import './tabBar.css'
import CourseIndex from "../../containers/course";
import CommunityIndex from "../../containers/community";
import {Route } from 'react-router-dom'
import MyIndex from "../../containers/user";



class TabBarExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
            fullScreen: true,
            // fullScreen: false, 为什么就一半
            disabled: false,
        };
    }

    render() {
        return (
                    <div>
                {/*TabBar导航栏*/}
                <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                    <TabBar
                            unselectedTintColor="#949494"
                            tintColor="#33A3F4"
                            barTintColor="white"
                            hidden={this.state.hidden}
                        >
                                <TabBar.Item
                                title="课程"
                                key="course"
                                icon={{ uri: './././asset/icon/zhuye.svg' }}
                                selectedIcon={{ uri: './././asset/icon/zhuyeSelected.svg' }}
                                selected={this.state.selectedTab === 'blueTab'}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: 'blueTab',
                                    });
                                }}
                                data-seed="logId1"
                            >
                                    <Route to='/course' component={CourseIndex}/>

                            </TabBar.Item>

                                <TabBar.Item
                                icon={{ uri: './././asset/icon/earth.svg' }}
                                selectedIcon={{ uri: './././asset/icon/earthSelected.svg' }}
                                title="社区"
                                key="community"
                                selected={this.state.selectedTab === 'redTab'}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: 'redTab',
                                    });
                                }}
                                data-seed="logId"
                            >
                                    <Route to='/community' component={CommunityIndex}/>
                            </TabBar.Item>
                                <TabBar.Item
                                icon={{ uri: './././asset/icon/my.svg' }}
                                selectedIcon={{ uri: './././asset/icon/mySelected.svg' }}
                                title="我的"
                                key="my"
                                selected={this.state.selectedTab === 'yellowTab'}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: 'yellowTab',
                                    });
                                }}
                            >
                                    <Route to='/my' component={MyIndex}/>
                            </TabBar.Item>
                    </TabBar>
                </div>
                    </div>
        );
    }
}

export default TabBarExample