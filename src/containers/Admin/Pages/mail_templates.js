import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { ADMIN } from '../../../actions/types'
import MailTemplatesAdd from './MailTemplates/Add'
import { Layout, Menu, Breadcrumb, Table, Divider, Tag, Button, Modal, Spin } from 'antd';
import MailTemplatesEdit from './MailTemplates/Edit';
const { Header, Content, Footer } = Layout;

const { confirm } = Modal;
class AdminPageMailTemplates extends Component {
  static defaultProps = {
    pagination: {
      current: 1,
      pageSize: 10
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      selected_mail: null
    }
    this.columns = [
      {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
        render: (text, record) => <a onClick={() => {
          this.previewMail(record)
        }}>{text}</a>,
      },
      {
        title: 'Content',
        dataIndex: 'content',
        key: 'content',
        render: (text, record) => <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', cursor: 'pointer' }}
          onClick={() => {
            this.previewMail(record)
          }}>{text}</div>,
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => {
          return (<Button.Group size="small">
            <Button type="dashed" icon="edit" size="small"
              onClick={() => {
                this.showEditModal()
                this.setState({ selected_mail: record })
              }}
            >Edit</Button>
            <Button type="danger" icon="delete" size="small" style={{ marginLeft: 'auto' }}
              onClick={() => {
                this.showDelModal()
                this.setState({ selected_mail: record })
              }}
            >Delete</Button>
          </Button.Group>)
        },
      },
    ];
  }

  loadList = (pagination) => {
    this.props.getMailTemplatesList(ADMIN.GET_MAIL_TEMPATES_LIST_REQUEST, {
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
        pathname: 'mail',
        search: `?current=${pagination.current}`
      })
    }
  };

  previewMail = (selected_mail) => {
    confirm({
      title: `Preview Mail Template (Customer's country: ${selected_mail.country})`,
      content: <div style={{ whiteSpace: "normal" }} dangerouslySetInnerHTML={{ __html: selected_mail.content }} />,
      width: '80%',
      cancelButtonProps: {
        style: { display: 'none' }
      },
      onOk() {},
      onCancel() {},
    });
  }

  showAddModal = () => { this.props.toggleModal(ADMIN.SHOW_MODAL, 'visibleAdd') }
  hideAddModal = () => { this.props.toggleModal(ADMIN.HIDE_MODAL, 'visibleAdd') }

  showDelModal = () => { this.props.toggleModal(ADMIN.SHOW_MODAL, 'visibleDel') }
  hideDelModal = () => { this.props.toggleModal(ADMIN.HIDE_MODAL, 'visibleDel') }

  showEditModal = () => { this.props.toggleModal(ADMIN.SHOW_MODAL, 'visibleEdit') }
  hideEditModal = () => { this.props.toggleModal(ADMIN.HIDE_MODAL, 'visibleEdit') }

  handleAdd = (form) => {
    form.validateFieldsAndScroll((err, values) => {
      console.log(err, values)
      if (!err) {
        const { pagination } = this.props
        const options = {
          limit: pagination.pageSize,
          skip: pagination.pageSize * (pagination.current - 1),
        }
        this.props.createNewMailTemplate(ADMIN.CREATE_MAIL_TEMPLATE_REQUEST, values.data, options)
      }
    });
  }

  handleEdit = (form) => {
    form.validateFieldsAndScroll((err, values) => {
      console.log(err, values)
      if (!err) {
        const { pagination } = this.props
        const options = {
          limit: pagination.pageSize,
          skip: pagination.pageSize * (pagination.current - 1),
        }
        this.props.updateNewMailTemplate(ADMIN.UPDATE_MAIL_TEMPLATE_REQUEST, values.data, options)
      }
    });
  }

  handleDel = () => {
    const { pagination } = this.props
    const options = {
      limit: pagination.pageSize,
      skip: pagination.pageSize * (pagination.current - 1),
    }
    this.props.deleteMailTemplate(ADMIN.DELETE_MAIL_TEMPLATE_REQUEST, this.state.selected_mail.country, options)
  }

  render() {

    const { pagination, total } = this.props
    const { data, loading } = this.props

    if (loading) {
      return (
        <Spin tip="Loading..." className="admin-page-loading"></Spin>
      )
    }

    return (
      <div className="admin-page-mail">
        <div className="admin-page-mail__top">
          <Button type="primary" icon="mail" size="large" onClick={this.showAddModal}>
            New Mail Template
          </Button>
        </div>
        <Table
          columns={this.columns}
          rowKey={record => record.country}
          dataSource={data}
          pagination={{ pageSize: pagination.pageSize, current: pagination.current, total: total }}
          loading={loading}
          onChange={this.handleTableChange}
          className="table-mail-templates"
        />
        {this.props.visibleAdd && <Modal
          title="Add a new Mail Template"
          visible={this.props.visibleAdd}
          footer={null}
          onCancel={this.hideAddModal}
          width="80%"
        >
          <div className="mail-templates-add">
            <MailTemplatesAdd 
              onCancel={this.hideAddModal} 
              onOk={this.handleAdd} 
              loading={this.props.loading} 
            />
          </div>
        </Modal>}
        {this.props.visibleDel && <Modal
          title="Are you sure delete this mail template?"
          visible={this.props.visibleDel}
          confirmLoading={this.props.loading}
          onCancel={this.hideDelModal}
          onOk={this.handleDel}
          okType="danger"
        >
          <div className="mail-templates-del">
            Mail location: {this.state.selected_mail.country}
          </div>
        </Modal>}
        {this.props.visibleEdit && <Modal
          title="Edit"
          visible={this.props.visibleEdit}
          footer={null}
          onCancel={this.hideEditModal}
          width="80%"
        >
          <div className="mail-templates-edit">
            <MailTemplatesEdit 
              onCancel={this.hideEditModal} 
              onOk={this.handleEdit} 
              loading={this.props.loading} 
              data={this.state.selected_mail}
            />
          </div>
        </Modal>}
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getMailTemplatesList: (type, options) => {
      dispatch({ type, options })
    },
    createNewMailTemplate: (type, data, options) => {
      dispatch({ type, data, options })
    },
    toggleModal: (type, modal) => {
      dispatch({ type, modal })
    },
    deleteMailTemplate: (type, country, options) => {
      dispatch({ type, country, options })
    },
    updateNewMailTemplate: (type, mail, options) => {
      dispatch({ type, mail, options })
    },
  }
}

const mapStateToProps = state => ({
  data: state.admin.mailTemplates,
  total: state.admin.mailTotalCount,
  loading: state.admin.loading,
  visibleAdd: state.admin.visibleAdd,
  visibleDel: state.admin.visibleDel,
  visibleEdit: state.admin.visibleEdit
})


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AdminPageMailTemplates),
)
