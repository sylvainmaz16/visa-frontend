import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Table, Tag, Button, Modal, notification, Input,
} from 'antd'

import momentTz from 'moment-timezone'
import moment from 'moment'
import { ADMIN } from 'actions/types'
import * as constants from 'utils/constants'
import * as utils from 'utils/index'
import KdmidStatus from './NewKdmidStatus'

const openNotificationWithIcon = (type, message, description) => {
  notification[type]({
    message,
    description,
  })
}

class AdminPageNewKdmid extends Component {
  static defaultProps = {
    pagination: {
      current: 1,
      pageSize: 10,
    },
  }

  constructor(props) {
    super(props)
    this.state = {
      visibleSendEmailModal: false,
      loadingSendEmail: false,
      selectedRecord: null,
      visibleKdmidStatusModal: false,
      loadingKdmidStatus: false,
      kdmidStatus: {},
    }
  }

  componentDidMount() {
    const { pagination, user } = this.props
    this.loadList(pagination, user && user.role === constants.USER_ROLE.ADMIN)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if ((nextProps.pattern != this.props.pattern)) {
      this.loadList(nextProps.pagination, false)
    }
  }

  loadList = (pagination, isAdmin) => {
    const { getCustomersList } = this.props
    getCustomersList(ADMIN.GET_CUSTOMER_LIST_REQUEST, {
      limit: pagination.pageSize,
      skip: pagination.pageSize * (pagination.current - 1),
      search: pagination.search,
      filters: utils.getFilterString(pagination.filters),
    }, isAdmin, constants.sites.NewKdmid)
  }

  handleTableChange = (pagination, filters) => {
    const { history } = this.props
    const filterString = utils.getFilterString(filters)

    history.push({
      pathname: '/board/new-kdmid',
      search: `?current=${pagination.current}` + (pagination.search ? `&search=${pagination.search}` : '') + filterString
    })
  };

  onClickSendEmail = record => {
    this.setState({
      visibleSendEmailModal: true,
      selectedRecord: record,
    })
  }

  hideSendEmailModal = () => {
    this.setState({
      visibleSendEmailModal: false,
      selectedRecord: null,
    })
  }

  handleSendEmail = () => {
    /* const { selectedRecord } = this.state
    const { resendEmail, pagination } = this.props
    this.setState({ loadingSendEmail: true })

    resendEmail(ADMIN.RESEND_EMAIL_REQUEST, selectedRecord._id, result => {
      if (result.error) {
        openNotificationWithIcon('error', 'Failed to send an email!', "There isn't such email template based on the interview location.")
      } else if (result.data && result.data.status === 404) {
        openNotificationWithIcon('error', 'Failed to send an email!', "There isn't such email template based on the interview location.")
      } else if (result.data && result.data.status === 500) {
        openNotificationWithIcon('error', 'Failed to send an email!', "There isn't such email template based on the interview location.")
      } else {
        openNotificationWithIcon('success', 'Successfully sent!', 'The email has been sent')
        this.loadList(pagination)
      }
      this.setState({
        loadingSendEmail: false,
        visibleSendEmailModal: false,
      })
    }) */
  }

  handleSearchKeyDown = event => {
    if (event.keyCode === 13) {
      this.searchString()
    }
  }

  searchString = () => {
    const search = this.refs.search_input.state.value

    const { pagination, history } = this.props
    const filterString = utils.getFilterString(pagination.filters)

    if (pagination.search !== search) {
      history.push({
        pathname: '/board/new-kdmid',
        search: `?current=${pagination.current}` + (search && search.length ? `&search=${search}` : '') + filterString,
      })
    }
  }

  onSubmitWithoutPayment = record => {
    const { automate, pagination } = this.props
    automate(ADMIN.AUTOMATE_REQUEST, record._id, constants.sites.NewKdmid, result => {
      // openNotificationWithIcon
      if (result.error) {
        openNotificationWithIcon('error', 'Failed', 'Failed to submit without payment')
      } else {
        openNotificationWithIcon('success', 'Success', 'Successed to submit without payment. Please wait few mins to complete')
        this.loadList(pagination)
      }
      console.log('automated')
    })
  }

  onCheckKdmidStatus = record => {
    const { getKdmidStatus } = this.props
    this.setState({ visibleKdmidStatusModal: true, loadingKdmidStatus: true, kdmidStatus: {} })
    getKdmidStatus(ADMIN.GET_KDMID_STATUS_REQUEST, record._id, constants.sites.NewKdmid, result => {
      this.setState({ loadingKdmidStatus: false, kdmidStatus: result })
    })
  }

  hideModal = () => {
    this.setState({ visibleKdmidStatusModal: false, kdmidStatus: {} })
  }

  render() {
    const {
      data, pagination, loading, total, user, users,
    } = this.props
    const {
      visibleSendEmailModal, loadingSendEmail, selectedRecord, loadingKdmidStatus, visibleKdmidStatusModal, kdmidStatus,
    } = this.state

    const agencyFilter = []
    if (users) {
      users.forEach(user => {
        if (user.approved && user.role === constants.USER_ROLE.AGENCY) {
          agencyFilter.push({ text: user.username, value: user.username })
        }
      })
      agencyFilter.push({ text: 'none', value: 'none' })
    }

    const columns = [
      {
        title: 'ID',
        dataIndex: 'app_id',
        key: 'app_id',
        render: (text, record) => <a href={`https://kdmid-evisa.com/visa/application-form/token=${record._id}` + (record.agency ? `?agency=${record.agency}` : '')} target="blank">{text}</a>,
      },
      {
        title: 'Surname',
        dataIndex: 'surname',
        key: 'surname',
      },
      {
        title: 'First Names',
        dataIndex: 'firstnames',
        key: 'firstnames',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Nationality',
        key: 'citizenCode',
        render: (text, record) => {
          const citizenList = constants.export_list(constants.new_kdmid_citizenCode_list)
          const citizenCodeIndex = citizenList.findIndex(item => item.value === record.citizenCode)
          if (citizenCodeIndex >= 0) {
            return citizenList[citizenCodeIndex].label
          }

          return ''
        },
      },
      {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: text => {
          const utcTime = moment(text).utc().format()
          const gmt5Time = momentTz.tz(utcTime, 'YYYY-MM-DDTHH:mm:ssZ', 'America/New_York')

          return gmt5Time.format('YYYY-MM-DD HH:mm:ss')
        },
      },
      {
        title: 'Agency',
        dataIndex: 'agency',
        key: 'agency',
        filters: agencyFilter,
        filteredValue: pagination.filters.agency,
      },
      {
        title: 'Transaction ID',
        dataIndex: 'transaction.transaction_id',
        key: 'transaction.transaction_id',
      },
      {
        title: 'Checkout',
        key: 'checkout',
        render: (text, record) => {
          if (!record.completed) return <Tag color="red">Not completed</Tag>
          if (!record.paid) return <Tag color="volcano">Not paid</Tag>

          return <Tag color="geekblue">Paid</Tag>
        },
        filters: [{ text: 'Paid', value: 'paid' }, { text: 'Not paid', value: 'not_paid' }, { text: 'Not completed', value: 'not_completed' }],
        filteredValue: pagination.filters.checkout,
        onFilter: (value, record) => {
          if (value === 'paid') return record.completed && record.paid
          if (value === 'not_paid') return record.completed && !record.paid

          return !record.completed
        },
      },
      {
        title: 'Automation Status',
        key: 'automation_status',
        render: (text, record) => {
          if (!record.completed) return '-'
          if (!record.automation_status) return <Tag color="volcano">Pending</Tag>
          if (record.automation_status.result === 'processing') return <Tag color="green">In progress</Tag>
          if (record.automation_status.error || record.automation_status.result === 'fail') return <Tag color="red">Failed</Tag>
          if (record.automation_status.result === 'success' && record.automation_status.email_status === false) {
            return (
              <>
                <Tag color="geekblue">Success</Tag>
                <Tag color="magenta">Email not sent</Tag>
              </>
            )
          }

          return <Tag color="geekblue">Success</Tag>
        },
        filters: [{ text: '-', value: 'not_completed' }, { text: 'Pending', value: 'pending' }, { text: 'In progress', value: 'in_progress' }, { text: 'Failed', value: 'failed' }, { text: 'Success', value: 'success' }],
        filteredValue: pagination.filters.automation_status,
        onFilter: (value, record) => {
          if (value === 'not_completed') return !record.completed
          if (value === 'pending') return record.completed && !record.automation_status
          if (value === 'in_progress') return record.completed && record.automation_status && record.automation_status.result === 'processing'
          if (value === 'failed') return record.completed && record.automation_status && (record.automation_status.result === 'fail' || record.automation_status.error)
          if (value === 'not_sent') return record.completed && record.automation_status && (record.automation_status.result === 'success' && record.automation_status.email_status === false)

          return record.completed && record.automation_status && (record.automation_status.result === 'success' && record.automation_status.email_status !== false)
        },
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => {
          if (!record.completed) return '-'
          if (user.role !== constants.USER_ROLE.ADMIN) {
            if (!record.automation_status) {
              return (
                <Button type="primary" shape="round" size="small" icon="credit-card" onClick={() => this.onSubmitWithoutPayment(record)}>
                  Submit without payment
                </Button>
              )
            }

            return '-'
          }
          if (!record.automation_status) return '-'
          if (record.automation_status.error) {
            return (
              <>
                <Button type="danger" shape="round" icon="warning" size="small">
                  {user.role === constants.USER_ROLE.ADMIN
                    ? <a href={`https://s3.us-east-2.amazonaws.com/assets.new-kdmid/PDF/${record._id}_error.pdf`} style={{ textDecoration: 'none', color: 'white' }}> Check Errors</a>
                    : <a href style={{ textDecoration: 'none', color: 'white' }} disabled> Check Errors</a>
                  }
                </Button>
                {user.role === constants.USER_ROLE.ADMIN && (
                  <Button type="primary" shape="round" size="small" icon="credit-card" onClick={() => this.onSubmitWithoutPayment(record)}>
                    Submit without payment
                  </Button>
                )}
              </>)
          }
          if (record.automation_status.result === 'success') {
            return (
              <Button type="primary" shape="round" size="small" onClick={() => this.onCheckKdmidStatus(record)}>
                Check Kdmid Status
              </Button>
            )
          }

          return '-'
        },
      },
    ]

    return (
      <div className="admin-page-new-kdmid">
        {visibleKdmidStatusModal &&
          <Modal
            title="Check Kdmid Status"
            visible={visibleKdmidStatusModal}
            footer={null}
            onCancel={this.hideModal}
            width="80%"
          >
            <div className="admin-page-new-kdmid-check-status" style={{ minHeight: '300px' }}>
              <KdmidStatus loading={loadingKdmidStatus} data={kdmidStatus.data} />
            </div>
          </Modal>
        }
        <div className="admin-page-new-kdmid__top">
          <Input placeholder="Search (ID, Name, Email Address) here" defaultValue={pagination.search} name="search_input" ref="search_input" style={{ width: '300px', marginRight: '10px' }} onKeyDown={this.handleSearchKeyDown} />
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
          style={{ overflowX: 'auto' }}
          expandedRowRender={record => {
            if (!record.transaction) {
              return (
                <p style={{ margin: 0 }}>
                  {`_id: ${record._id}`}
                  <br />
                  {`kdmid_id: ${record.kdmid_id}`}
                  <br />
                  No transaction
                </p>
              )
            }

            return (
              <p style={{ margin: 0 }}>
                {`_id: ${record._id}`}
                <br />
                {`kdmid_id: ${record.kdmid_id}`}
                <br />
                {`total: ${record.transaction.total}`}
                <br />
                {`order_key: ${record.transaction.order_key}`}
                <br />
                {`customer_id: ${record.transaction.customer_id}`}
                <br />
                {`payment_method: ${record.transaction.payment_method}`}
                <br />
                {`cart_hash: ${record.transaction.cart_hash}`}
                <br />
              </p>
            )
          }}
        />
        {/*visibleSendEmailModal*/ false &&
          <Modal
            title={`Send Email to ${selectedRecord.email}`}
            visible={visibleSendEmailModal}
            confirmLoading={loadingSendEmail}
            onOk={this.handleSendEmail}
            onCancel={() => {
              if (!loadingSendEmail) this.hideSendEmailModal()
            }}
          >
            <div className="ds160-send-email-modal">
              {`Application ID: ${selectedRecord.app_id}`}
              <br />
              {`Surname: ${selectedRecord.surname}`}
              <br />
              {`Given Name: ${selectedRecord.given_name}`}
              <br />
              {`Interview Location: ${selectedRecord.location}`}
              <br />
              {`Created At: ${selectedRecord.createdAt}`}
              <br />
              <br />
              There was no such email template based on
              <Tag color="geekblue">{`${selectedRecord.location.split(',')[0]}`}</Tag>
            </div>
          </Modal>
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getCustomersList: (type, options, isAdmin, site) => {
    dispatch({ type, options, isAdmin, site })
  },
  setPagination: (type, pagination) => {
    dispatch({ type, pagination })
  },
  resendEmail: (type, _id, cb) => {
    dispatch({ type, _id, cb })
  },
  automate: (type, _id, site, cb) => {
    dispatch({ type, _id, site, cb })
  },
  getKdmidStatus: (type, _id, site, cb) => {
    dispatch({ type, _id, site, cb })
  },
})

const mapStateToProps = state => ({
  data: state.admin.data,
  total: state.admin.totalCount,
  loading: state.admin.loading,
  users: state.admin.users,
  totalUserCnt: state.admin.totalUserCnt,
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AdminPageNewKdmid),
)
