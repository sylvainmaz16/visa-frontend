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
import * as constants from '../../utils/constants'

import './index.scss'



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
    // this.props.cookies.remove('immigration4us_token')
    localStorage.removeItem('immigration4us_token')
    localStorage.removeItem('user')
    this.props.history.push('/auth')
  }

  render() {

    const { pagination, menu, pattern } = this.props
    const user = JSON.parse(localStorage.getItem('user'))

    let renderPage = ""

    let menus = []

    if(user.role == constants.USER_ROLE.ADMIN) {
      menus = [
        { key: "ds160", label: 'DS-160' },
        { key: "mail", label: 'Mail Templates'},
        { key: "users", label: 'Agencies'},
      ]
    } else if (user.role == constants.USER_ROLE.AGENCY) {
      menus = [
        { key: "ds160", label: 'DS-160' },
      ]
    } else if (user.role == constants.USER_ROLE.NOT) {
      menus = [
        { key: "ds160", label: 'DS-160' },
      ]
    }

    switch (menu) {
      case 'ds160':
        if(user.role == constants.USER_ROLE.ADMIN || user.role == constants.USER_ROLE.AGENCY)
          renderPage = <AdminPageDS160 pagination={pagination} pattern={pattern} user={user}/>
        break;
      case 'mail':
        if(user.role == constants.USER_ROLE.ADMIN)
          renderPage = <AdminPageMailTemplates pagination={pagination} pattern={pattern} user={user}/>
        break;
      case 'users':
        if(user.role == constants.USER_ROLE.ADMIN)
          renderPage = <AdminPageUsers pagination={pagination} pattern={pattern} user={user}/>
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
              <span style={{ marginRight: '10px' }}>{user ? user.username : 'Your username'}</span>
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
  // user: state.admin.user,
  data: state.admin.data,
  loading: state.admin.loading,
})


export default withCookies(withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AdminBoard),
))