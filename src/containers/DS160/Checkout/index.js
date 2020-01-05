import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import VisaBanner from 'components/VisaBanner'
import VisaHeader from 'components/VisaHeader'
import { DS160 } from 'actions/types'
import { Spin } from 'antd'
import Form_DS160_Checkout_Info from './Info'
import Form_AuthorizeNet from './Authorize.net'
import './index.less'

class DS160_Checkout extends Component {
  constructor(props) {
    super(props)
  }

  placeOrder = (e, form) => {
    e.preventDefault()
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const payload = {
          data: values.data,
          applicationId: this.props.applicationId,
        }
        this.props.onPlaceOrder(DS160.DS160_CHECKOUT_REQUEST, payload)
      }
    })
  }

  render() {
    const {
 email, step_index, loading, applicationId, completed, loading_pay, paid, checkout_result,
} = this.props

    if (loading) {
      return <Spin tip="Please wait..." id="visa-ds160-checkout-spin" />
    }

    if (!applicationId || !completed) {
      return (
        <div className="visa-ds160-checkout">
          <VisaHeader />
          <VisaBanner backgroundColor="#428bca">
            Checkout
          </VisaBanner>
          <div className="container visa-ds160-checkout__content">
            <Form_DS160_Checkout_Info />
          </div>
        </div>
      )
    }

    return (
      <div className="visa-ds160-checkout">
        <VisaHeader />
        <VisaBanner backgroundColor="#428bca">
          Checkout
        </VisaBanner>
        <div className="container visa-ds160-checkout__content">
          {/* <Form_Checkout placeOrder={this.placeOrder} loading_pay={loading_pay} checkout_result={checkout_result}/> */}
          <Form_AuthorizeNet placeOrder={this.placeOrder} loading_pay={loading_pay} checkout_result={checkout_result} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    onPlaceOrder: (type, payload) => {
      dispatch({ type, payload })
    },
  })

const mapStateToProps = state => ({
  email: state.main.email,
  step_index: state.main.step_index,
  loading: state.main.loading,
  completed: state.main.completed,
  applicationId: state.main.applicationId,
  loading_pay: state.main.loading_pay,
  paid: state.main.paid,
  checkout_result: state.main.checkout_result,
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(DS160_Checkout),
)
