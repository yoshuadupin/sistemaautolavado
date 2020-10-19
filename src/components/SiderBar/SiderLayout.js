import React, { useState } from 'react';
import { Layout, Menu, Avatar, Button, Alert } from 'antd';
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
  Link, useHistory
} from "react-router-dom";
import ContentSupervisor from '../../container/Supervisores';
import ContentLavadores from '../../container/Lavadores';
import ContentCerramiento from '../../container/Cerramientos';
import ContentTalonarios from '../../container/Talonarios';
import ContentInventario from '../../container/Inventario';
import ContentCarritos from '../../container/Carritos';
import { useAuth } from '../../context/AuthContext'


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const SiderLayout = () => {

  const [error, setError] = useState('');
  const [collapsed, setCollapsed] = useState();
  const { currentUser, logout } = useAuth()
  const history = useHistory();



  
  const onCollapse = collapsed => {
    setCollapsed(collapsed);

  };

  async function handleLogout() {
    setError('')
    console.log("Logout")
    try {
      await logout()
      history.push('/login')
    } catch {
      setError('Failed to log out')
    }
  }

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>

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
              <Menu.Item key="3" >
                <Avatar size={32} icon={<UserOutlined />} />
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
            <h2>Profile</h2>
            {error && <Alert message={error} type="warning" />}
            <strong> Email:</strong>{currentUser.email}

            <Button onClick={handleLogout} type="link">
              Log Out
            </Button>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Created by Diego Mendoza</Footer>
        </Layout>
      </Layout >
    </Router>
  );
}



export default SiderLayout;