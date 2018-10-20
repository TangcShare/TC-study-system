import React, { Fragment } from 'react';
import ReactDOM from 'react-dom'
import { Tabs, Flex, WhiteSpace ,PullToRefresh, ListView, Button } from 'antd-mobile';
import Search from "./searchBar";
import CourseCarousel from './carousel'
import './courseList.css'
import { Link,Route } from 'react-router-dom'
import CourseListIndex from "./courseListIndex";

const tabs = [
    { title: '推荐', sub: '1' },
    { title: '课程', sub: '2' },
];

const data = [
    //此处应该接口来拉取服务器数据
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: '1',
        des: '1',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: '2',
        des: '2',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: '3',
        des: '3',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: '4',
        des: '4',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: '5',
        des: '5',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: '6',
        des: '6',
    },
];
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
    const dataArr = [];
    for (let i = 0; i < NUM_ROWS; i++) {
        dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
    }
    return dataArr;
}

class CourseIndex extends React.PureComponent {
    constructor(props){
        super(props)
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state={
            visible: true,
            selected: '',

            dataSource,
            refreshing: true,
            isLoading: true,
            height: document.documentElement.clientHeight,
            useBodyScroll: false,
        }
    }

    componentDidUpdate() {
        if (this.state.useBodyScroll) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;

        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(genData()),
                height: hei,
                refreshing: false,
                isLoading: false,
            });
        }, 1500);
    }

    onRefresh = () => {
        this.setState({ refreshing: true, isLoading: true });
        // simulate initial Ajax
        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                refreshing: false,
                isLoading: false,
            });
        }, 600);
    };

    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.rData = [...this.rData, ...genData(++pageIndex)];
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 1000);
    };


    goToCourse=(name)=>{
        console.log(name)//为什么取不了name值
        this.props.history.push("/courseList/"+name)
    }
    goTotjDetail(){
        this.props.history.push("/tjDetail")
    }
    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };

    render() {
        // 课程名List start
        const machineList=[
            {key:1,name:'图形学'},{key:2,name:'机械制造'},{key:3,name:'机械原理'},{key:4,name:'机械设计'},{key:5,name:'液压传动'},{key:6,name:'机械制图'}
        ]
        const Machine = ({ className = '', ...restProps }) => (
            machineList.map((content)=>{
                return(
                    <div key={content.key} className={`${className} placeholder`} {...restProps} onClick={(machine)=>{this.goToCourse(machine)}}>{content.name}</div>
                )
            })
        );
        const computerList=[
            {key:1,name:'数据结构'},{key:2,name:'算法导论'},{key:3,name:'编译原理'},{key:4,name:'计算机网络'},{key:5,name:'软件工程'}
        ]
        const Computer = ({ className = '', ...restProps }) => (
            computerList.map((content)=>{
                return(
                    <div key={content.key} className={`${className} placeholder`} {...restProps} onClick={(computer)=>{this.goToCourse(computer)}}>{content.name}</div>
                )
            })
        );
        const economyList=[
            {key:1,name:'西方经济学'},{key:2,name:'计量经济学'},{key:3,name:'国际金融学'},{key:4,name:'财政学'},{key:5,name:'会计学'}
        ]
        const Economy = ({ className = '', ...restProps }) => (
            economyList.map((content)=>{
                return(
                    <div key={content.key} className={`${className} placeholder`} {...restProps} onClick={(economy)=>{this.goToCourse(economy)}}>{content.name}</div>
                )
            })
        );
// 课程名List end

        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID}
                     style={{
                         padding: '0 15px',
                         backgroundColor: 'white',
                     }}
                >
                    <div style={{display: '-webkit-box', display: 'flex', padding: '15px'}} >
                        <img style={{height: '63px', width: '63px', marginRight: '15px'}} src={obj.img} alt="" onClick={()=>this.goTotjDetail()}/>
                        <div style={{display: 'inline-block'}} onClick={()=>this.goTotjDetail()}>
                            <div style={{
                                height: '30px',
                                lineHeight: '30px',
                                color: '#888',
                                fontSize: '18px',
                                borderBottom: '1px solid #ddd'
                            }}>
                                {obj.title}
                            </div>
                            <div style={{
                                marginBottom: '10px',
                                color: '#000',
                                fontSize: '16px',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                maxWidth: '250px'
                            }}>{obj.des}</div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <Fragment>

                <div className="course-index-header">
                    {/*搜索框*/}
                    <Search/>
                    {/*轮播图*/}
                    <CourseCarousel/>
                </div>
                {/*内容区域*/}
                <div>
                    <Tabs tabs={tabs}
                          // initialPage={1}
                          renderTab={tab => <span>{tab.title}</span>}
                    >

                        {/*推荐内容区域*/}
                        <div>
                            <ListView
                                key={this.state.useBodyScroll ? '0' : '1'}
                                ref={el => this.lv = el}
                                dataSource={this.state.dataSource}
                                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                                    {this.state.isLoading ? 'Loading...' : 'Loaded'}
                                </div>)}
                                renderRow={row}
                                renderSeparator={separator}
                                useBodyScroll={this.state.useBodyScroll}
                                style={this.state.useBodyScroll ? {} : {
                                    height: this.state.height,
                                    border: '1px solid #ddd',
                                    margin: '5px 0',
                                }}
                                pullToRefresh={<PullToRefresh
                                    refreshing={this.state.refreshing}
                                    onRefresh={this.onRefresh}
                                />}
                                onEndReached={this.onEndReached}
                                pageSize={5}
                            />
                        </div>

                        {/*课程内容区域*/}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                                <div className="flex-container">
                                    <div className="sub-title">机械</div>
                                    <Flex wrap="wrap">
                                        <Machine className="inline" />
                                    </Flex>
                                    <WhiteSpace size="lg" />
                                    <div className="sub-title">计算机</div>
                                    <Flex wrap="wrap">
                                        <Computer className="inline" />
                                    </Flex>
                                    <WhiteSpace size="lg" />
                                    <div className="sub-title">经济</div>
                                    <Flex wrap="wrap">
                                        <Economy className="inline" />
                                    </Flex>
                                    <WhiteSpace size="lg" />
                                </div>
                            </div>
                        </div>
                    </Tabs>
                    <WhiteSpace />
                </div>
            </Fragment>
        );
    }
}

export default CourseIndex;