import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import axios from 'axios';
import { Icon } from '@ant-design/compatible';
import logo from './logo.png'
import './style.css'

//antd使用 iconfont.cn 的用户
//import { createFromIconfontCN } from '@ant-design/icons';
// const IconFont = createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/font_2334570_xec0pjm3as.js',
// });
class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }

  }

//列表循环方法
  getMenuItems() {
    return  this.state.list.map(item => {
      return ( 
        <Menu.Item key={item.id} >
          <Link to={`/${item.id}`}>
            <Icon type={item.icon} />
            {item.title}
          </Link>
        </Menu.Item> 
      )
    })
  }

//发送ajax数据接口，并接受数据  
  componentDidMount() {
    axios.get('http://www.dell-lee.com/react/api/header.json')
      .then((res) => {
        this.setState({
          list: res.data.data
        })
      })
  }

  render() {
    return (
        <Fragment>
          <Link to='/'>
            <img src={logo} className="app-header-logo" alt='log'/>
          </Link>
          <Menu mode="horizontal" className="app-header-menu">
          { this.getMenuItems()}
          </Menu>
        </Fragment>
    );
  }
}

export default AppHeader;
