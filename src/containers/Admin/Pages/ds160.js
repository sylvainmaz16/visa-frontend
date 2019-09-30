import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { ADMIN } from '../../../actions/types'
import { Layout, Menu, Breadcrumb, Table, Divider, Tag, Button } from 'antd';
const { Header, Content, Footer } = Layout;

const columns = [
  {
    title: 'ID',
    dataIndex: 'app_id',
    key: 'app_id',
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
  {
    title: 'Transaction ID',
    dataIndex: 'checkout_result.transactionid',
    key: 'checkout_result.transactionid',
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
      if (!record.completed || !record.paid)
        return <Tag color="volcano">Not paid</Tag>
      return (<Button type="primary" shape="round" icon="download" size="small">
        <a href={`https://s3.us-east-2.amazonaws.com/assets.immigration4us/PDF/${record._id}_customer.pdf`} style={{ textDecoration: 'none', color: 'white' }}> Download PDF</a>
      </Button>)
    },
  },
];

class AdminPageDS160 extends Component {
  static defaultProps = {
    pagination: {
      current: 1,
      pageSize: 10
    }
  }
  loadList = (pagination) => {
    this.props.getCustomersList(ADMIN.GET_CUSTOMER_LIST_REQUEST, {
      limit: pagination.pageSize,
      skip: pagination.pageSize * (pagination.current - 1),
    })
  }
  componentDidMount() {
    this.loadList(this.props.pagination)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if ((nextProps.pagination.current != this.props.pagination.current)) {
      this.loadList(nextProps.pagination)
    }
  }

  handleTableChange = (pagination, filters, sorter) => {
    console.log(pagination, filters, sorter)
    if (pagination.current != this.props.pagination.current) {
      this.props.history.push({
        pathname: 'ds160',
        search: `?current=${pagination.current}`
      })
    }
  };

  render() {

    const { data, pagination, loading } = this.props

    return (
      <Table
        columns={columns}
        rowKey={record => record._id}
        dataSource={data}
        pagination={{ pageSize: pagination.pageSize, current: pagination.current }}
        loading={loading}
        onChange={this.handleTableChange}
        expandedRowRender={record => {
          return <p style={{ margin: 0 }}>
            {/* {`transactionid: ${record.checkout_result.transactionid}`}<br/> */}
            {`orderid: ${record.checkout_result.orderid}`}<br />
            {`authcode: ${record.checkout_result.authcode}`}<br />
            {`cvvresponse: ${record.checkout_result.cvvresponse}`}<br />
            {`avsresponse: ${record.checkout_result.avsresponse}`}<br />
            {`responsetext: ${record.checkout_result.responsetext}`}<br />
          </p>
        }}
      />
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
  data: state.admin.data,
  pagination: state.admin.pagination,
  loading: state.admin.loading,
})


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AdminPageDS160),
)
