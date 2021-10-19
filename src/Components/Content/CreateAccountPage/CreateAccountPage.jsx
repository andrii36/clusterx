import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { registerThunk } from '../../../Redux/auth-reducer';

const CreateAccountForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div><Field component='input' name='name' type='input' placeholder='name'/></div>
            <div><Field component='input' name='email' type='input' placeholder='email'/></div>
            <div><Field component='input' name='password' type='password' placeholder='password'/></div>
            <button>Create Account</button>
        </form>
    )
}

const CreateAccountReduxForm = reduxForm({form: 'createAccForm'})(CreateAccountForm);

const CreateAccountPage = (props) => {
    if(props.isAuth) return <Redirect to='/'/>
    let onSubmit = (formData) => {
        props.registerThunk(formData)
    }
    return(
        <div>
            <h1>Create Account</h1>
            <CreateAccountReduxForm onSubmit={onSubmit} {...props}/>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {registerThunk})(CreateAccountPage);