import React, {Component} from "react";
import {Layout, Menu, Breadcrumb, Icon} from "antd";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import "./App.css";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Button"
        };
        // this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = () => {
        this.setState({
            text: "Hi"
        });
    };

    render() {
        return (
            <div className="App">
                <Layout className="layout">
                    <Header>
                        <div className="logo"/>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={["1"]}
                            style={{lineHeight: "64px"}}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{padding: "0 64px"}}>
                        <Breadcrumb style={{margin: "16px 0"}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Layout style={{padding: "24px 0", background: "#fff"}}>
                            <Sider width={200} style={{background: "#fff"}}>
                                <Router>
                                    <Menu
                                        mode="inline"
                                        defaultSelectedKeys={["1"]}
                                        defaultOpenKeys={["sub1"]}
                                        style={{height: "100%"}}
                                    >
                                        <SubMenu
                                            key="sub1"
                                            title={
                                                <span>
                        <Icon type="dashboard"/>
                        dashboard
                      </span>
                                            }
                                        >
                                            <Menu.Item key="1"> <Link to="/">Home</Link></Menu.Item>
                                            <Menu.Item key="2"> <Link to="/about">about</Link></Menu.Item>
                                            <Menu.Item key="3">工作台</Menu.Item>
                                        </SubMenu>
                                        <SubMenu
                                            key="sub2"
                                            title={
                                                <span>
                        <Icon type="laptop"/>
                        数据录入
                      </span>
                                            }
                                        >
                                            <Menu.Item key="5">option5</Menu.Item>
                                            <Menu.Item key="6">option6</Menu.Item>
                                        </SubMenu>
                                        <SubMenu
                                            key="sub3"
                                            title={
                                                <span>
                        <Icon type="notification"/>
                        消息中心
                      </span>
                                            }
                                        >
                                            <Menu.Item key="9">系统消息</Menu.Item>
                                            <Menu.Item key="10">评论消息</Menu.Item>
                                        </SubMenu>
                                    </Menu>
                                    <Route exact path="/" component={Home}/>
                                    <Route path="/about" component={About}/>
                                    <Route path="/topics" component={Topics}/>
                                </Router>
                            </Sider>
                            <Content style={{padding: "0 24px", minHeight: 440}}>
                                {/* <Router>
                  <Route path="/" component={Name} />
                </Router> */}
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{textAlign: "center"}}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default App;
