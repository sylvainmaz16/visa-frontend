import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { ADMIN } from '../../actions/types'
import { Layout, Menu, Breadcrumb, Table, Divider, Tag, Button } from 'antd';
const { Header, Content, Footer } = Layout;

import './index.scss'

const columns = [
  {
    title: 'ID',
    dataIndex: '_id',
    key: '_id',
    render: text => <a>{text}</a>,
  },
  {
    title: 'First Name',
    dataIndex: 'surname',
    key: 'surname',
  },
  {
    title: 'Last Name',
    dataIndex: 'given_name',
    key: 'given_name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: tags => (
  //     <span>
  //       {tags.map(tag => {
  //         let color = tag.length > 8 ? 'geekblue' : 'green';
  //         if (tag === 'fail') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </span>
  //   ),
  // },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => {
      if(!record.completed || !record.paid)
        return <Tag color="volcano">Not paid</Tag>
      return (<Button type="primary" shape="round" icon="download" size="small">
        Download PDF
      </Button>)
    },
  },
];

class AdminBoard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getCustomersList(ADMIN.GET_CUSTOMER_LIST_REQUEST, {
      limit: this.props.pagination.limit,
      skip: this.props.pagination.skip,
    })
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.props.setPagination(ADMIN.SET_PAGINATION, {skip: this.props.pagination.limit * pagination.current})
    this.props.getCustomersList(ADMIN.GET_CUSTOMER_LIST_REQUEST, {
      limit: this.props.pagination.limit,
      skip: this.props.pagination.skip,
    })
  };

  render() {

    const { data, pagination, loading } = this.props

    return (
      <Layout className="visa-admin-layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">DS-160</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>DS160</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Table 
              columns={columns} 
              rowKey={record => record._id}
              dataSource={data}
              pagination={pagination}
              loading={loading}
              onChange={this.handleTableChange}
              expandedRowRender={record => {
                return <p style={{ margin: 0 }}>
                  {`transactionid: ${record.checkout_result.transactionid}`}<br/>
                  {`orderid: ${record.checkout_result.orderid}`}<br/>
                  {`authcode: ${record.checkout_result.authcode}`}<br/>
                  {`cvvresponse: ${record.checkout_result.cvvresponse}`}<br/>
                  {`avsresponse: ${record.checkout_result.avsresponse}`}<br/>
                  {`responsetext: ${record.checkout_result.responsetext}`}<br/>
                </p>
              }}
            />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Copyright here</Footer>
      </Layout>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getCustomersList: (type, options) => {
      dispatch({ type, options })
    },
    setPagination: (type, pagination) => {
      dispatch({ type, pagination })
    }
  }
}

const mapStateToProps = state => ({
  data: state.adminData.data,
  pagination: state.adminData.pagination,
  loading: state.adminData.loading,
})


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AdminBoard),
)
