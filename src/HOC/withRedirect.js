import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const withRedirect = (Component) => {
    class WithAuthRedirect extends React.Component {
        render() {
            return(
            this.props.isAuth ? <Component {...this.props}/> : <Redirect to='/login'/>
            )
        }
    }
    return connect(mapStateToProps)(WithAuthRedirect)
}
export default withRedirect;