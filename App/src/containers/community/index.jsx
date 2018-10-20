import React, { Fragment } from 'react';
import { Tabs , Modal, WhiteSpace } from 'antd-mobile';
import './index.css'

const tabs = [
    { title: '交流圈' },
    { title: '跳蚤市场' },
];

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}

class CommunityIndex extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
        };
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }
    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }
    render() {
        return (
            <Fragment>
                <Tabs tabs={tabs}
                      // initialPage={1}
                      renderTab={tab => <span>{tab.title}</span>}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                        <div>
                            <div className='addIcon' onClick={this.showModal('modal1')}>+</div>
                            <WhiteSpace />
                            <Modal
                                visible={this.state.modal1}
                                transparent
                                maskClosable={false}
                                onClose={this.onClose('modal1')}
                                title=""
                                footer={[{ text: '发表', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
                                wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                            >
                                <div style={{ height: 100, overflow: 'scroll' }}>
                                   我是发表页
                                </div>
                            </Modal>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                            <div>
                                <h1>test</h1>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </Fragment>
        );
    }
}

export default CommunityIndex;