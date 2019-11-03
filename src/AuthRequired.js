import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withCookies } from 'react-cookie';

export class AuthRequired extends React.Component {

    constructor(props) {
        super(props);

        if (typeof props.redirectTo !== 'undefined') {
            this.props.cookies.set('immigration4us_authRedirectTo', props.redirectTo, { path: '/', expires: new Date(Date.now() + 10000) });
        }
    }

    render() {

        // const token = this.props.cookies.get('immigration4us_token')
        const token = localStorage.getItem('immigration4us_token')
        const user = JSON.parse(localStorage.getItem('user'))

        if (!token) {
            return (<Redirect to='/auth' />);
        } else {
            return (this.props.orRender);
        }
    }
}
const mapDispatchToProps = dispatch => {
    return {
        reset: (type) => {
            dispatch({ type })
        },
    }
}

const mapStateToProps = state => ({
    token: state.admin.token,
})

export default compose(
    withCookies,
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )
)(AuthRequired)
