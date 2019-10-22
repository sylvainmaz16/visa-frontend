import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { ADMIN } from '../../../actions/types'
import { Layout, Menu, Breadcrumb, Table, Divider, Tag, Button, Modal, notification } from 'antd';
const { Header, Content, Footer } = Layout;

const openNotificationWithIcon = type => {
  notification[type]({
    message: type == 'success' ? 'Successfully sent!' : 'Failed to send an email!',
    description:
      type == 'success' ? 'The email has been sent' : `There isn't such email template based on the interview location.`,
  });
};

class AdminPageDS160 extends Component {
  static defaultProps = {
    pagination: {
      current: 1,
      pageSize: 10
    }
  }
  constructor(props){
    super(props)
    this.state = {
      visible_send_email_modal: false,
      loading_send_email: false,
      selected_record: null
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
    if (pagination.current != this.props.pagination.current) {
      this.props.history.push({
        pathname: '/board/ds160',
        search: `?current=${pagination.current}`
      })
    }
  };

  onClickSendEmail = (record) => {
    console.log(record)
    this.setState({
      visible_send_email_modal: true,
      selected_record: record
    })
  }

  hideSendEmailModal = () => {
    this.setState({
      visible_send_email_modal: false,
      selected_record: null
    })
  }

  handleSendEmail = () => {
    const { selected_record } = this.state 
    this.setState({
      loading_send_email: true
    })
    this.props.resendEmail(ADMIN.RESEND_EMAIL_REQUEST, selected_record._id, (result) => {
      console.log(result)
      if(result.error) {
        openNotificationWithIcon('error')
      } else if( result.data && result.data.status == 404 ) {
        openNotificationWithIcon('error')
      } else if( result.data && result.data.status == 500 ) {
        openNotificationWithIcon('error')
      } else {
        openNotificationWithIcon('success')
        this.loadList(this.props.pagination)
      }
      this.setState({
        loading_send_email: false,
        visible_send_email_modal: false
      })
    })
  }

  render() {

    const { data, pagination, loading, total } = this.props
    const { visible_send_email_modal, loading_send_email, selected_record } = this.state

    const columns = [
      {
        title: 'ID',
        dataIndex: 'app_id',
        key: 'app_id',
        render: (text, record) => <a href={`http://ds-160.us/ds-160/application-form/token=${record._id}`} target="blank">{text}</a>,
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
        title: 'Interview Location',
        dataIndex: 'location',
        key: 'location',
      },
      {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
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
          if (!record.completed)
            return <Tag color="red">Not completed</Tag>
          if (!record.paid)
            return <Tag color="volcano">Not paid</Tag>
          return <Tag color="geekblue">Paid</Tag>
        },
      },
      {
        title: 'Automation Status',
        key: 'automation_status',
        render: (text, record) => {
          if (!record.completed)
            return "-"
          if (!record.automation_status)
            return <Tag color="volcano">Pending</Tag>
          if (record.automation_status.result == 'processing')
            return <Tag color="green">In progress</Tag>
          if(record.automation_status.error || record.automation_status.result == 'fail')
            return <Tag color="red">Failed</Tag>
          if(record.automation_status.result == 'success' && record.automation_status.email_status == false)
            return <><Tag color="geekblue">Success</Tag><Tag color="magenta">Email not sent</Tag></>
          return <Tag color="geekblue">Success</Tag>
        },
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => {
          if (!record.completed || !record.automation_status)
            return '-'
          if (record.automation_status.error) {
            return (<Button type="danger" shape="round" icon="warning" size="small">
              <a href={`https://s3.us-east-2.amazonaws.com/assets.immigration4us/PDF/${record._id}_error.pdf`} style={{ textDecoration: 'none', color: 'white' }}> Check Errors</a>
            </Button>)  
          }
          if (record.automation_status.result == 'success' && record.automation_status.email_status == false) {
            return (<Button type="default" shape="round" icon="mail" size="small" style={{ background: 'blueviolet', color: 'white' }} onClick={() => this.onClickSendEmail(record)}>
              Send Email
            </Button>)  
          }
          return (<Button type="primary" shape="round" icon="download" size="small">
            <a href={`https://s3.us-east-2.amazonaws.com/assets.immigration4us/PDF/${record._id}_customer.pdf`} style={{ textDecoration: 'none', color: 'white' }}> Download PDF</a>
          </Button>)
        },
      },
    ];
    return (
      <>
        <Table
          columns={columns}
          rowKey={record => record._id}
          dataSource={data}
          pagination={{ pageSize: pagination.pageSize, current: pagination.current, total: total }}
          loading={loading}
          onChange={this.handleTableChange}
          expandedRowRender={record => {
            if(!record.transaction) {
              return <p style={{ margin: 0 }}>
                {`_id: ${record._id}`}<br />
                No transaction</p>
            }
            return <p style={{ margin: 0 }}>
              {`_id: ${record._id}`}<br />
              {`total: ${record.transaction.total}`}<br />
              {`order_key: ${record.transaction.order_key}`}<br />
              {`customer_id: ${record.transaction.customer_id}`}<br />
              {`payment_method: ${record.transaction.payment_method}`}<br />
              {`cart_hash: ${record.transaction.cart_hash}`}<br />
            </p>
          }}
        />
        {visible_send_email_modal && <Modal
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
        </Modal>}
      </>
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
    },
    resendEmail: (type, _id, cb) => {
      dispatch({ type, _id, cb })
    }
  }
}

const mapStateToProps = state => ({
  data: state.admin.data,
  total: state.admin.totalCount,
  loading: state.admin.loading,
})


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AdminPageDS160),
)
