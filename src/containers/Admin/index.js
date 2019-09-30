import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { ADMIN } from '../../actions/types'
import { Layout, Menu, Breadcrumb, Table, Divider, Tag, Button } from 'antd';
const { Header, Content, Footer } = Layout;

import AdminPageDS160 from './Pages/ds160'
import AdminPageMailTemplates from './Pages/mail_templates'

import './index.scss'

const menus = [
  { key: "ds160", label: 'DS-160' },
  { key: "mail", label: 'Mail Templates'}
]

class AdminBoard extends Component {
  static defaultProps = {
    menu: 'ds160',
    pagination: {
      pageSize: 10,
      current: 1
    }
  }

  componentDidMount() {
    // console.log('ADMIN Reducer RESET')
    // this.props.reset(ADMIN.RESET)
  }

  render() {

    const { pagination, menu } = this.props

    let renderPage = ""

    switch (menu) {
      case 'ds160':
        renderPage = <AdminPageDS160 pagination={pagination}/>
        break;
      case 'mail':
        renderPage = <AdminPageMailTemplates pagination={pagination}/>
        break;
      default:
        break;
    }

    const menuIndex = menus.findIndex(item => item.key == menu)

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


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AdminBoard),
)
