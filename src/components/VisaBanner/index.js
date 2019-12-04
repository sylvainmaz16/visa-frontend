import React, { Component } from 'react'
import styled from "styled-components";
import './index.scss'

/* 
export const ControlTopRight = styled.div`
  position: absolute;
  top: ${props => (props.top ? `${props.top}px` : `20px`)};
  right: ${props => (props.right ? `${props.right}px` : `40px`)};

  h6 {
    color: ${props => `${constants.getColor(props.theme)}`};
  }
`;
*/

class VisaBanner extends Component {
  static defaultProps = {
    backgroundColor: 'rgba(81, 156, 255, 1)',
    className: ''
  }
  constructor(props) {
    super(props)
  }

  render() {
    const { backgroundColor, className } = this.props
    return (
      <div className={"visa-com-banner " + className}>
        <h2>{this.props.children}</h2>
      </div>
    )
  }
}

export default VisaBanner;