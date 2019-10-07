import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

export class AuthRequired extends React.Component {

    constructor(props) {
        super(props);

        const { cookies } = props;
        if (typeof props.redirectTo !== 'undefined') {
            cookies.set('authRedirectTo', props.redirectTo, { path: '/', expires: new Date(Date.now() + 10000) });
        }
    }

    render() {

        const token = localStorage.getItem("token")

        console.log('authrequired token', token)

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


export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(AuthRequired),
)