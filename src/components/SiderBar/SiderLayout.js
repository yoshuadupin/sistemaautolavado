import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import {
  AuditOutlined,
  IdcardFilled,
  ShopFilled,
  CarFilled,
  ReadFilled,
  ReconciliationFilled,
  UserOutlined,
  BellOutlined,
} from '@ant-design/icons';
import "./layout.css"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import ContentSupervisor from '../../container/Supervisores';
import ContentLavadores from '../../container/Lavadores';
import ContentCerramiento from '../../container/Cerramientos';
import ContentTalonarios from '../../container/Talonarios';
import ContentInventario from '../../container/Inventario';
import ContentCarritos from '../../container/Carritos';
import { connect } from "react-redux";
import { logoutUser } from "../../context/actions/auth";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class SiderLayout extends React.Component {
  state = {
    collapsed: false,
  };

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>

            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<AuditOutlined />}>
                <Link to="/supervisores">
                  Supervisores
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<IdcardFilled />}>
                <Link to="/lavadores">
                  Lavadores
                </Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<ShopFilled />}>
                <Link to="/cerramientos">
                  Cerramiento
                </Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<ReadFilled />}>
                <Link to="/talonarios">
                  Talonarios
                </Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<ReconciliationFilled />}>
                <Link to="/inventario">
                  Inventario
                </Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<CarFilled />}>
                <Link to="/carritos">
                  Carritos
                </Link>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="7" icon={<UserOutlined />} >
                Cuenta
            </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ paddingRight: 20 }} >
              <div className="logo" />
              <Menu mode="horizontal" defaultSelectedKeys={[null]}>
                <Menu.Item key="1" icon={<BellOutlined style={{ fontSize: '24px' }} />}>
                </Menu.Item>
                <Menu.Item key="2">Diego Josué Mendoza</Menu.Item>
                <Menu.Item key="3">
                  <Avatar size={32} icon={<UserOutlined onClick={this.handleLogout} />} />
                </Menu.Item>
              </Menu>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <Switch>
                <Route path="/supervisores">
                  <ContentSupervisor />
                </Route>
                <Route path="/lavadores">
                  <ContentLavadores />
                </Route>
                <Route path="/cerramientos">
                  <ContentCerramiento />
                </Route>
                <Route path="/talonarios">
                  <ContentTalonarios />
                </Route>
                <Route path="/inventario">
                  <ContentInventario />
                </Route>
                <Route path="/carritos">
                <ContentCarritos />
                </Route>
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Created by Diego Mendoza</Footer>
          </Layout>
        </Layout >
      </Router>
    );
  }
};

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}

export default connect(mapStateToProps)(SiderLayout);