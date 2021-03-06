import React, { Fragment } from 'react';
import {Icon, List, NavBar,ListView} from 'antd-mobile';
import { Link,Route,withRouter } from 'react-router-dom'
import { StickyContainer, Sticky } from 'react-sticky';
import axios from 'axios';

const Item = List.Item;

const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
    for (let i = 0; i < NUM_SECTIONS; i++) {
        const ii = (pIndex * NUM_SECTIONS) + i;
        const sectionName = `Section ${ii}`;
        sectionIDs.push(sectionName);
        dataBlobs[sectionName] = sectionName;
        rowIDs[ii] = [];

        for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
            const rowName = `S${ii}, R${jj}`;
            rowIDs[ii].push(rowName);
            dataBlobs[rowName] = rowName;
        }
    }
    sectionIDs = [...sectionIDs];
    rowIDs = [...rowIDs];
}

class DocumentIndex extends React.PureComponent {
    constructor(props) {
        super(props);
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

        const dataSource = new ListView.DataSource({
            getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        this.state = {
            data :[],
            dataSource,
            isLoading: true,
        };
    }

    componentDidMount() {
        this.fetchDocument()
        // you can scroll to the specified position
        // setTimeout(() => this.lv.scrollTo(0, 120), 800);

        // simulate initial Ajax
        setTimeout(() => {
            genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
                isLoading: false,
            });
        }, 600);
    }
    fetchDocument = () => {
        var url="/documents/queryAll"
        axios.get(url).then((res)=>{
            console.log('wwwww',res.data)
            this.setState({
                data:res.data
            })
        })
    }

    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
            genData(++pageIndex);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
                isLoading: false,
            });
        }, 1000);
    }

    goToDocumentDetail(){
        this.props.history.push("/documentDetail")
    }

    render() {

        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    borderTop: '1px solid #ECECED',
                    height: 8,
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        let index = this.state.data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = this.state.data.length - 1;
            }
            const obj = this.state.data[index--];
            return (
                <div key={rowID} style={{ padding: '0 15px' }}>
                    <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                        <div style={{ lineHeight: 1 }}>
                            <div style={{ marginBottom: '8px', fontWeight: 'bold' }} onClick={()=>this.goToDocumentDetail()}>{obj.title}</div>
                            <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{obj.des}</span></div>
                        </div>
                    </div>
                </div>
            );
        };

        return (
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                className="am-list sticky-list"
                useBodyScroll
                renderSectionWrapper={sectionID => (
                    <StickyContainer
                        key={`s_${sectionID}_c`}
                        className="sticky-container"
                        style={{ zIndex: 4 }}
                    />
                )}
                renderSectionHeader={sectionData => (
                    <Sticky>
                        {({
                              style,
                          }) => (
                            <div
                                className="sticky"
                                style={{
                                    ...style,
                                    zIndex: 3,
                                    backgroundColor: parseInt(sectionData.replace('Section ', ''), 10) % 2 ?
                                        '#5890ff' : '#F8591A',
                                    color: 'white',
                                }}
                            >{`章节 ${sectionData.split(' ')[1]}`}</div>
                        )}
                    </Sticky>
                )}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.state.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                renderRow={row}
                renderSeparator={separator}
                pageSize={4}
                onScroll={() => { console.log('scroll'); }}
                scrollEventThrottle={200}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
        );
    }
}

export default DocumentIndex=withRouter(DocumentIndex);