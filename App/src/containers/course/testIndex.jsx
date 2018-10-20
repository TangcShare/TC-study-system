import React from 'react';
import {Icon, List, NavBar,ListView,PickerView, WhiteSpace} from 'antd-mobile';
import { Link,Route } from 'react-router-dom'

const Item = List.Item;
const province = [
    {
        label: '投影基础',
        value: '01',
        children: [
            {
                label: '一',
                value: '01-1',
                children: [
                    {
                        label: '难度一',
                        value: '01-1-1',
                    },
                    {
                        label: '难度二',
                        value: '01-1-2',
                    },
                    {
                        label: '难度三',
                        value: '01-1-3',
                    }
                ],
            },
            {
                label: '二',
                value: '01-2',
                children: [
                    {
                        label: '难度一',
                        value: '01-2-1',
                    },
                    {
                        label: '难度一',
                        value: '01-2-2',
                    },
                    {
                        label: '难度三',
                        value: '01-2-3',
                    },
                ],
            }
        ],
    },
    {
        label: '三视图',
        value: '02',
        children: [
            {
                label: '一',
                value: '02-1',
                children: [
                    {
                        label: '难度一',
                        value: '02-1-1',
                    },
                    {
                        label: '难度二',
                        value: '02-1-2',
                    },
                    {
                        label: '难度三',
                        value: '02-1-3',
                    }
                ],
            },
            {
                label: '二',
                value: '02-2',
                children: [
                    {
                        label: '难度一',
                        value: '02-2-1',
                    },
                    {
                        label: '难度一',
                        value: '02-2-2',
                    },
                    {
                        label: '难度三',
                        value: '02-2-3',
                    },
                ],
            }
        ],
    },
    {
        label: '组合体',
        value: '03',
        children: [
            {
                label: '一',
                value: '03-1',
                children: [
                    {
                        label: '难度一',
                        value: '03-1-1',
                    },
                    {
                        label: '难度二',
                        value: '03-1-2',
                    },
                    {
                        label: '难度三',
                        value: '03-1-3',
                    }
                ],
            },
            {
                label: '二',
                value: '03-2',
                children: [
                    {
                        label: '难度一',
                        value: '03-2-1',
                    },
                    {
                        label: '难度一',
                        value: '03-2-2',
                    },
                    {
                        label: '难度三',
                        value: '03-2-3',
                    },
                ],
            }
        ],
    },
    {
        label: '立体表面交线',
        value: '04',
        children: [
            {
                label: '一',
                value: '04-1',
                children: [
                    {
                        label: '难度一',
                        value: '04-1-1',
                    },
                    {
                        label: '难度二',
                        value: '04-1-2',
                    },
                    {
                        label: '难度三',
                        value: '04-1-3',
                    }
                ],
            },
            {
                label: '二',
                value: '04-2',
                children: [
                    {
                        label: '难度一',
                        value: '04-2-1',
                    },
                    {
                        label: '难度一',
                        value: '04-2-2',
                    },
                    {
                        label: '难度三',
                        value: '04-2-3',
                    },
                ],
            }
        ],
    },
];

class TestIndex extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }
    onChange = (value) => {
        // console.log(value);
        this.setState({
            value,
        });
    }
    onScrollChange = (value) => {
        // console.log(value);
        this.setState({
            value,
        });
    }
    render() {
        return (
          <div>
              <PickerView
                  onChange={this.onChange}
                  onScrollChange={this.onScrollChange}
                  data={province}
                  // value={['01', '01-1', '01-1-1']}
                  value={this.state.value}
              />
          </div>
        );
    }
}

export default TestIndex ;