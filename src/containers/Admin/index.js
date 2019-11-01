import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { ADMIN } from '../../actions/types'
import { Layout, Menu, Breadcrumb, Table, Divider, Tag, Button, Icon, Dropdown, Avatar, Badge } from 'antd';
const { Header, Content, Footer } = Layout;

import AdminPageDS160 from './Pages/ds160'
import AdminPageMailTemplates from './Pages/mail_templates'
import AdminPageUsers from './Pages/users'
import { withCookies } from 'react-cookie';

import './index.scss'

const menus = [
  { key: "ds160", label: 'DS-160' },
  { key: "mail", label: 'Mail Templates'},
  { key: "users", label: 'Agencies'},
]

class AdminBoard extends Component {
  static defaultProps = {
    menu: 'ds160',
    pagination: {
      pageSize: 10,
      current: 1
    }
  }

  constructor(props){
    super(props)
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
  }

  logout() {
    
    this.props.cookies.remove('immigration4us_authRedirectTo')
    this.props.cookies.remove('immigration4us_token')
    this.props.history.push('/auth')
  }

  render() {

    const { pagination, menu, pattern } = this.props

    let renderPage = ""


    switch (menu) {
      case 'ds160':
        renderPage = <AdminPageDS160 pagination={pagination} pattern={pattern}/>
        break;
      case 'mail':
        renderPage = <AdminPageMailTemplates pagination={pagination} pattern={pattern}/>
        break;
      case 'users':
        renderPage = <AdminPageUsers pagination={pagination} pattern={pattern}/>
        break;
      default:
        break;
    }

    const menuIndex = menus.findIndex(item => item.key == menu)

    const accountMenu = (
      <Menu>
        <Menu.Item key="1">
          <Icon type="setting" />
          Account Setting
        </Menu.Item>
        <Menu.Item key="2" onClick={this.logout}>
          <Icon type="logout" />
          Log Out
        </Menu.Item>
      </Menu>
    );

    return (
      <Layout className="visa-admin-layout">
        <Header>
          <div className="logo" />
          <Menu 
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[menu]}
            style={{ lineHeight: '64px' }}
          >
            {menus.map(item => <Menu.Item key={item.key}><Link to={{ pathname: '/board/' + item.key }}>{item.label}</Link></Menu.Item>)}
            <div style={{ float: 'right', cursor: 'pointer' }}>
              <span style={{ marginRight: '10px' }}>Admin</span>
              <Dropdown
                overlay={accountMenu} 
                trigger={['click']}
              >
                <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
              </Dropdown>
            </div>
          </Menu>
          
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            {menuIndex >= 0 && <Breadcrumb.Item>{menus[menuIndex].label}</Breadcrumb.Item>}
          </Breadcrumb>
          <div className="admin-page-wrapper">
            {renderPage}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Copyright here</Footer>
      </Layout>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    reset: (type) => {
      dispatch({ type })
    },
  }
}

const mapStateToProps = state => ({
  data: state.admin.data,
  loading: state.admin.loading,
})


export default withCookies(withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AdminBoard),
))