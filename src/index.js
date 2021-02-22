import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppHeader from './components/Header/index';
import Login from './components/Login/index';
import ContentList from "./comtainers/List/";
import Detail from "./comtainers/Detail";
import Vip from "./comtainers/Vip";

import './style.css'

const { Header, Footer, Content } = Layout;

class App extends Component {
  
  render() {
    return (
/**路由 BrowserRouter */
      <BrowserRouter>
        <Layout style={{minWidth: 1300, height: '100%'}}>
          <Header className="header">
            <AppHeader/>
          </Header>

          <Content className="content">
  {/**Switch  路由匹配到一个就返回，跟路径写在下面，层级查找 */}
              <Login/>
              <Switch>
              <Route path='/Vip' component={Vip} />
                <Route path='/detail/:id' component={Detail} />
                <Route path='/:id?' component={ContentList} />
              </Switch>
          </Content>

          <Footer className="footer">
            Copyright © 2021 imooc.com All Rights Reserved | 京ICP备 12003892号-11
          </Footer>
        </Layout>
      </BrowserRouter>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));
