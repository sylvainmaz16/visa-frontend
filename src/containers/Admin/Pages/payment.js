import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { ADMIN } from 'actions/types'
import {
 Layout, Menu, Breadcrumb, Table, Divider, Tag, Button, Modal, Spin,
} from 'antd'
import PaymentTemplatesAdd from './PaymentTemplates/Add'
import PaymentTemplatesEdit from './PaymentTemplates/Edit'

const { Header, Content, Footer } = Layout

const { confirm } = Modal
class AdminPagePayment extends Component {
  static defaultProps = {
    pagination: {
      current: 1,
      pageSize: 10,
    },
  }

  constructor(props) {
    super(props)
    this.state = {
      selected_payment: null,
    }
    this.columns = [
      {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
        // render: (text, record) => 
        //   <a onClick={() => {this.previewPayment(record)}}>{text}</a>
      },
      {
        title: 'Payment Gateway',
        dataIndex: 'gateway',
        key: 'gateway',
        // render: (text, record) => 
        //   <div style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', cursor: 'pointer'}}
        //     onClick={() => {this.previewPayment(record)}}>{text}</div>
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Button.Group size="small">
            <Button
              type="dashed"
              icon="edit"
              size="small"
              onClick={() => {
                this.showEditModal()
                this.setState({ selected_payment: record })
              }}
              style={{marginRight: 5}}
            >
              Edit
            </Button>
            <Button
              type="danger"
              icon="delete"
              size="small"
              style={{ marginLeft: 'auto' }}
              onClick={() => {
                this.showDelModal()
                this.setState({ selected_payment: record })
              }}
            >
              Delete
            </Button>
          </Button.Group>)
      },
    ]
  }

  loadList = pagination => {
    this.props.getPaymentTemplatesList(ADMIN.GET_PAYMENT_TEMPATES_LIST_REQUEST, {
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
        pathname: '/board/payment',
        search: `?current=${pagination.current}`,
      })
    }
  };

  previewPayment = selected_payment => {
    confirm({
      title: `Preview Payment Template (Customer's country: ${selected_payment.country})`,
      content: <div style={{ whiteSpace: 'normal' }} dangerouslySetInnerHTML={{ __html: selected_payment.gateway }} />,
      cancelButtonProps: {
        style: { display: 'none' },
      },
      onOk() {},
      onCancel() {},
    })
  }

  showAddModal = () => { this.props.toggleModal(ADMIN.SHOW_MODAL, 'visibleAdd') }

  hideAddModal = () => { this.props.toggleModal(ADMIN.HIDE_MODAL, 'visibleAdd') }

  showDelModal = () => { this.props.toggleModal(ADMIN.SHOW_MODAL, 'visibleDel') }

  hideDelModal = () => { this.props.toggleModal(ADMIN.HIDE_MODAL, 'visibleDel') }

  showEditModal = () => { this.props.toggleModal(ADMIN.SHOW_MODAL, 'visibleEdit') }

  hideEditModal = () => { this.props.toggleModal(ADMIN.HIDE_MODAL, 'visibleEdit') }

  handleAdd = form => {
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { pagination } = this.props
        const options = {
          limit: pagination.pageSize,
          skip: pagination.pageSize * (pagination.current - 1),
        }        
        this.props.createNewPaymentTemplate(ADMIN.CREATE_PAYMENT_TEMPLATE_REQUEST, values.data, options)
      }
    })
  }

  handleEdit = form => {
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { pagination } = this.props
        const options = {
          limit: pagination.pageSize,
          skip: pagination.pageSize * (pagination.current - 1),
        }
        this.props.updateNewPaymentTemplate(ADMIN.UPDATE_PAYMENT_TEMPLATE_REQUEST, values.data, options)
      }
    })
  }

  handleDel = () => {
    const { pagination } = this.props
    const options = {
      limit: pagination.pageSize,
      skip: pagination.pageSize * (pagination.current - 1),
    }
    this.props.deletePaymentTemplate(ADMIN.DELETE_PAYMENT_TEMPLATE_REQUEST, this.state.selected_payment.country, options)
  }

  render() {
    const { pagination, total } = this.props
    const { data, loading } = this.props

    if (loading) {
      return (
        <Spin tip="Loading..." className="admin-page-loading" />
      )
    }

    return (
      <div className="admin-page-mail">
        <div className="admin-page-mail__top">
          <Button type="primary" icon="bank" onClick={this.showAddModal}>
            New Payment Gateway
          </Button>
        </div>
        <Table
          columns={this.columns}
          rowKey={record => record.country}
          dataSource={data}
          pagination={{ pageSize: pagination.pageSize, current: pagination.current, total }}
          loading={loading}
          onChange={this.handleTableChange}
          className="table-payment-templates"
        />
        {this.props.visibleAdd && 
          <Modal
            title="Add a new Payment Gateway"
            visible={this.props.visibleAdd}
            footer={null}
            onCancel={this.hideAddModal}
          >
            <div className="mail-templates-add">
              <PaymentTemplatesAdd
                onCancel={this.hideAddModal}
                onOk={this.handleAdd}
                loading={this.props.loading}
              />
            </div>
          </Modal>
        }
        {this.props.visibleDel && 
          <Modal
            title="Are you sure delete this payment gateway template?"
            visible={this.props.visibleDel}
            confirmLoading={this.props.loading}
            onCancel={this.hideDelModal}
            onOk={this.handleDel}
            okType="danger"
          >
            <div className="mail-templates-del">
              Payment location:
              {' '}
              {this.state.selected_payment.country}
            </div>
          </Modal>
        }
        {this.props.visibleEdit && 
          <Modal
            title="Edit"
            visible={this.props.visibleEdit}
            footer={null}
            onCancel={this.hideEditModal}
          >
            <div className="mail-templates-edit">
              <PaymentTemplatesEdit
                onCancel={this.hideEditModal}
                onOk={this.handleEdit}
                loading={this.props.loading}
                data={this.state.selected_payment}
              />
            </div>
          </Modal>
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    getPaymentTemplatesList: (type, options) => {
      dispatch({ type, options })
    },
    createNewPaymentTemplate: (type, data, options) => {
      dispatch({ type, data, options })
    },
    toggleModal: (type, modal) => {
      dispatch({ type, modal })
    },
    deletePaymentTemplate: (type, country, options) => {
      dispatch({ type, country, options })
    },
    updateNewPaymentTemplate: (type, payment, options) => {
      dispatch({ type, payment, options })
    },
  })

const mapStateToProps = state => ({
  data: state.admin.paymentTemplates,
  total: state.admin.paymentTotalCount,
  loading: state.admin.loading,
  visibleAdd: state.admin.visibleAdd,
  visibleDel: state.admin.visibleDel,
  visibleEdit: state.admin.visibleEdit,
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AdminPagePayment),
)
