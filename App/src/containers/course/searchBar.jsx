import React from 'react';
import './searchBar.css'
import { SearchBar, WhiteSpace } from 'antd-mobile';

class Search extends React.Component {
    state = {
        value: '',
    };
    onChange= (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    render() {
        return (<div>
            <SearchBar placeholder="搜索课程" maxLength={8} />
            <WhiteSpace />
        </div>);
    }
}

export default Search