import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, Row, Col, Icon, notification } from 'antd';
import * as constants from 'utils/constants'
import * as utils from 'utils'
import VisaSelect from "components/VisaSelect";
import VisaRadio from "components/VisaRadio";
import VisaInput from "components/VisaInput";
import axios from 'axios'

const { Option } = Select;

const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Checkout Result',
    description:
      type == 'success' ? 'Successfully placed order' : 'Failed to place order',
  });
};

class MyForm extends Component {

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(this.props.checkout_result != nextProps.checkout_result) {
      if(nextProps.checkout_result == true)
        openNotificationWithIcon('success')
      else
        openNotificationWithIcon('error')
    }
  }

  render() {
    const { getFieldDecorator, isFieldTouched } = this.props.form;
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
        md: { span: 24 }
      },
    };

    const { data, loading_pay } = this.props

    return (
      <Form {...formItemLayout} method="POST">
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">
            Billing details
          </h2>
          <div className="visa-global-section-description">"Non-Refundable US Visa Application DS160 Service Fee" has been added to your cart.</div>
        </div>
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="First Name"
              field="data.surname"
              initialValue="Test"
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="Last Name"
              field="data.given_name"
              initialValue="User"
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="Address"
              field="data.address"
              initialValue="123 Main Street"
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="City"
              field="data.city"
              initialValue="Beverley Hills"
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="State"
              field="data.state"
              initialValue="CA"
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="Zip"
              field="data.zip"
              initialValue="90210"
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="Country"
              field="data.country"
              initialValue="US"
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="Phone"
              field="data.phone"
              initialValue="5555555555"
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
        </Row>
        <h3 id="order_review_heading">Your order</h3>
        <div id="order_review" className="checkout-review-order">
          <table>
            <thead>
              <tr><th className="product-name">Product</th><th className="product-total">Total</th></tr>
            </thead>
            <tbody>
              <tr className="cart_item"><td className="product-name">Non-Refundable US Visa Application DS160 Service Fee    <strong className="product-quantity">× 1</strong></td><td className="product-total">$165.00</td></tr>
            </tbody>
            <tfoot>
              <tr className="cart_item"><td className="product-name"><strong>Subtotal</strong></td><td className="product-total">$165.00</td></tr>
              <tr className="cart_item"><td className="product-name"><strong>Total</strong></td><td className="product-total"><strong>$165.00</strong></td></tr>
            </tfoot>
          </table>
        </div>
        <label style={{fontWeight: 'bold', marginBottom: '20px'}}>Payment with Credit or Debit Cards <img src="https://visasforms.com/wp-content/plugins/woonmipay/includes/images/card-visa.png" alt="visa" /><img src="https://visasforms.com/wp-content/plugins/woonmipay/includes/images/card-mc.png" alt="mc" />	</label>
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label="Card Number"
              field="data.ccNum"
              placeholder="•••• •••• •••• ••••"
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
          <Col xs={{ span: 16 }} md={{ span: 8 }}>
            <VisaInput
              label="Expiry (MM/YY)"
              field="data.ccExp"
              placeholder="MM / YY"
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
          <Col xs={{ span: 8 }} md={{ span: 4 }}>
            <VisaInput
              label="Card Code"
              field="data.cvv"
              placeholder="0000"
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
        </Row>
        <div className="payButtonRow">
          <Button type="primary" icon="dollar" loading={loading_pay} style={{marginLeft: 'auto'}} onClick={(e) => this.props.placeOrder(e, this.props.form)}>PLACE ORDER</Button>
        </div>
      </Form>

    );
  }
}

const Form_Checkout = Form.create()(MyForm)
export default Form_Checkout