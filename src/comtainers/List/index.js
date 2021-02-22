import React, { Component } from 'react';
import { List,  } from 'antd';
import axios from 'axios';
import { Link } from "react-router-dom";
class PageList extends Component {
    //你也可以在 componentDidUpdate() 中直接调用 setState()，但请注意它必须被包裹在一个条件语句里，否则会导致死循环。它还会导致额外的重新渲染，虽然用户不可见，但会影响组件性能
    // componentDidUpdate(prevProps) {
    //     const id = prevProps.match.params.id;
    //     axios.get('http://www.dell-lee.com/react/api/list.json?id=' + id)
    //         .then(res => {
    //             if (id){
    //             this.setState({
    //                 data: res.data.data
    //             })
    //         }
    //         })
    //   }

    componentWillReceiveProps(nextProps) {
        const id = nextProps.match.params.id;
        axios.get('http://www.dell-lee.com/react/api/list.json?id=' + id)
            .then(res => {
                this.setState({
                    data: res.data.data
                })
            })
    }
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <List
                style={{background: '#fff'}}
                size="large"
                bordered
                dataSource={this.state.data}
                renderItem={item => (
                    <List.Item>
                        <Link to={`/detail/${item.id}`}>{item.title}</Link>
                    </List.Item>
                )}
            />
        )
    }
    
//生命周期componentDidMount，只会在页面第一次刷新才会挂载
    componentDidMount() {
        const id = this.props.match.params.id;
        let url = 'http://www.dell-lee.com/react/api/list.json';
        if (id){
            url = url + '?id=' + id;
        }
        axios.get(url)
            .then(res => {
                this.setState({
                    data: res.data.data
                })
            })
    }
}

export default PageList;