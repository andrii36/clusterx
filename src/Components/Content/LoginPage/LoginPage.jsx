import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { loginThunk } from '../../../Redux/auth-reducer';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name='email' placeholder='email' component='input' type='email' /></div>
            <div><Field name='password' placeholder='password' component='input' type='password' /></div>
            <div><Field name='rememberMe' component='input' type='checkbox' /> remember me</div>
            <div>forgot password</div>
            <div><button>Sign In</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

class LoginPage extends React.Component {
    
    render() {
        if(this.props.isAuth) return <Redirect to='/'/>

        let onSubmit = (formData) => {
            this.props.loginThunk(formData)
        }
        return (
            <div>
                <h1>Sign in</h1>
                <LoginReduxForm onSubmit={onSubmit} />
                <div><NavLink to='/create-account'>Create Account</NavLink></div>
            </div>
        )
    }

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { loginThunk })(LoginPage);