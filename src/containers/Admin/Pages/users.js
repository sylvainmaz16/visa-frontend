import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { ADMIN } from 'actions/types'
import { Layout, Menu, Breadcrumb, Table, Divider, Tag, Button, Modal, notification, Input } from 'antd'

import * as utils from 'utils/index'
import * as constants from 'utils/constants'

const { Header, Content, Footer } = Layout

const { confirm } = Modal
const openNotificationWithIcon = type => {
  notification[type]({
    message: type == 'success' ? 'Successfully sent!' : 'Failed to send an email!',
    description: type == 'success' ? 'The email has been sent' : "There isn't such email template based on the interview location.",
  })
}

class AdminPageUsers extends Component {
  static defaultProps = {
    pagination: {
      current: 1,
      pageSize: 10,
    },
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  loadList = pagination => {
    this.props.getUsersList(ADMIN.GET_USERS_LIST_REQUEST, {
      limit: pagination.pageSize,
      skip: pagination.pageSize * (pagination.current - 1),
      search: pagination.search,
      filters: utils.getFilterString(pagination.filters),
    })
  }

  componentDidMount() {
    this.loadList(this.props.pagination)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.pattern != this.props.pattern) {
      this.loadList(nextProps.pagination)
    }
  }

  handleTableChange = (pagination, filters, sorter) => {
    console.log(filters)

    const filterString = utils.getFilterString(filters)

    this.props.history.push({
      pathname: '/board/users',
      search: `?current=${pagination.current}${pagination.search ? `&search=${pagination.search}` : ''}${filterString}`,
    })
  }

  handleSearchKeyDown = event => {
    if (event.keyCode == 13) {
      this.searchString()
    }
  }

  searchString = () => {
    const search = this.refs.search_input.state.value

    const { pagination } = this.props
    const filterString = utils.getFilterString(pagination.filters)

    if (pagination.search != search) {
      this.props.history.push({
        pathname: '/board/users',
        search: `?current=${pagination.current}${search && search.length ? `&search=${search}` : ''}${filterString}`,
      })
    }
  }

  approveUser = record => {
    const { pagination, approveUserFunc } = this.props
    const options = {
      limit: pagination.pageSize,
      skip: pagination.pageSize * (pagination.current - 1),
      search: pagination.search,
      filters: utils.getFilterString(pagination.filters),
    }
    confirm({
      title: `Do you Want to ${record.approved ? 'suspend' : 'approve'} this agency?`,
      content: `Agency: ${record.username}`,
      onOk() {
        console.log('OK')
        approveUserFunc(ADMIN.APPROVE_USER_REQUEST, record._id, !record.approved, options)
      },
      onCancel() {},
    })
  }

  deleteUser = record => {
    const { pagination, deleteUserFunc } = this.props
    const options = {
      limit: pagination.pageSize,
      skip: pagination.pageSize * (pagination.current - 1),
      search: pagination.search,
      filters: utils.getFilterString(pagination.filters),
    }
    confirm({
      title: 'Are you sure delete this agency?',
      content: `Agency: ${record.username}`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK')
        deleteUserFunc(ADMIN.DELETE_USER_REQUEST, record._id, options)
      },
      onCancel() {},
    })
  }

  render() {
    const { data, pagination, loading, total } = this.props
    const { visible_send_email_modal, loading_send_email, selected_record } = this.state

    const columns = [
      {
        title: 'Agency Name',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
        ellipsis: true,
      },
      {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
        render: (value, record) => {
          if (value == constants.USER_ROLE.AGENCY) {
            return <Tag color="green">Agency</Tag>
          }

          if (value == constants.USER_ROLE.PARTNER) {
            return <Tag color="purple">Partner</Tag>
          }

          return <Tag color="geekblue">Administrator</Tag>
        },
      },
      {
        title: 'Approved',
        dataIndex: 'approved',
        key: 'approved',
        render: (value, record) => {
          if (!value) {
            return <Tag color="volcano">Not Approved</Tag>
          }

          return <Tag color="geekblue">Approved</Tag>
        },
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Button.Group size="small">
            {!record.approved ? (
              <Button type="primary" icon="check-circle" size="small" onClick={() => this.approveUser(record, true)}>
                Approve
              </Button>
            ) : (
              <Button type="danger" icon="stop" size="small" onClick={() => this.approveUser(record, false)}>
                Suspend
              </Button>
            )}
            {!record.approved && (
              <Button type="dashed" icon="delete" size="small" style={{ marginLeft: 'auto' }} onClick={() => this.deleteUser(record)}>
                Delete
              </Button>
            )}
          </Button.Group>
        ),
      },
    ]

    return (
      <div className="admin-page-users">
        <div className="admin-page-users__top">
          <Input
            placeholder="Search Agency here"
            defaultValue={pagination.search}
            name="search_input"
            ref="search_input"
            style={{ width: '300px', marginRight: '10px' }}
            onKeyDown={this.handleSearchKeyDown}
          />
          <Button type="primary" icon="search" onClick={this.searchString}>
            Search
          </Button>
        </div>
        <Table
          columns={columns}
          rowKey={record => record._id}
          dataSource={data}
          pagination={{ pageSize: pagination.pageSize, current: pagination.current, total }}
          loading={loading}
          onChange={this.handleTableChange}
          expandedRowRender={record => <p style={{ margin: 0 }}>{`_id: ${record._id}`}</p>}
        />
        {/* {visible_send_email_modal && <Modal
          title={`Send Email to ${selected_record.email}`}
          visible={visible_send_email_modal}
          confirmLoading={loading_send_email}
          onOk={this.handleSendEmail}
          onCancel={() => {
            if(!loading_send_email)
              this.hideSendEmailModal()
          }}
        >
          <div className="ds160-send-email-modal">
            {`Application ID: ${selected_record.app_id}`}<br />
            {`Surname: ${selected_record.surname}`}<br />
            {`Given Name: ${selected_record.given_name}`}<br />
            {`Interview Location: ${selected_record.location}`}<br />
            {`Created At: ${selected_record.createdAt}`}<br />
            <br />
            There was no such email template based on <Tag color="geekblue">{`${selected_record.location.split(',')[0]}`}</Tag>
          </div>
        </Modal>} */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getUsersList: (type, options) => {
    dispatch({ type, options })
  },
  deleteUserFunc: (type, _id, options) => {
    dispatch({ type, _id, options })
  },
  approveUserFunc: (type, _id, approved, options) => {
    dispatch({
      type,
      _id,
      approved,
      options,
    })
  },
  setPagination: (type, pagination) => {
    dispatch({ type, pagination })
  },
  resendEmail: (type, _id, cb) => {
    dispatch({ type, _id, cb })
  },
})

const mapStateToProps = state => ({
  data: state.admin.users,
  total: state.admin.totalUserCnt,
  loading: state.admin.loading,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminPageUsers))
