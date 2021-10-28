import React from 'react';
import { useHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import styles from './SearchPanel.module.css';
import search_logo from '../../../Assets/search_logo.png';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getListThunk } from '../../../Redux/search-reducer';

const SearchPanelForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="input" name="main" type="text" className="form-control" placeholder="What are you looking for" aria-describedby="basic-addon1"/>
            <button type="submit" className="btn btn-outline-primary">Search</button>
        </form>
    )
}
const SearchPanelReduxForm = reduxForm({form: 'searchPanel'})(SearchPanelForm)
const SearchPanel = (props) => {
    let history = useHistory()
    let onSubmit = ({main}) => {
        !main ? history.push(`/search`) : history.push(`/search/${main}`)
    }
    
    return(
        <div>
            <SearchPanelReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default connect(null, {getListThunk})(SearchPanel);