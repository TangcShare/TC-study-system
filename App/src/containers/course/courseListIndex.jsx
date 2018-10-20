import React, { Fragment } from 'react';
import { NavBar,Icon,Tabs, WhiteSpace} from 'antd-mobile';
import DocumentIndex from "./documentIndex";
import VideoIndex from "./videoIndex";
import TestIndex from "./testIndex";

const tabs2 = [
    { title: '文档', sub: '1' },
    { title: '视频', sub: '2' },
    { title: '题库', sub: '3' },
];

class CourseListIndex extends React.PureComponent {
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
                    >课程资源</NavBar>
                <WhiteSpace />
                <Tabs tabs={tabs2}
                          // initialPage={1}
                          tabBarPosition="top"
                          renderTab={tab => <span>{tab.title}</span>}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                           <DocumentIndex/>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                            <VideoIndex/>
                        </div>
                        <div style={{ alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
                            <TestIndex/>
                        </div>
                    </Tabs>
                    <WhiteSpace />
            </Fragment>
        );
    }
}

export default CourseListIndex;