import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SearchPanel.module.css';
import search_logo from '../../../Assets/search_logo.png';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getListThunk } from '../../../Redux/search-reducer';

const SearchPanelForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <span className={styles.search}>
                <Field component="input" type="text" name="mainSearch" placeholder="what are you looking for?" />
            </span>
            <span className={styles.location}>
                <Field component="input" type="text" name="location" placeholder="location" />
            </span>
            <span className={styles.search_btn}>
                <NavLink to={`/search`} >
                    <img src={search_logo} />
                </NavLink>
            </span>
        </form>
    )
}
const SearchPanelReduxForm = reduxForm({form: 'searchPanel'})(SearchPanelForm)
const SearchPanel = (props) => {
    let onSubmit = (formData) => {
        
        props.getListThunk(formData)
    }
    return(
        <div>
            <SearchPanelReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default connect(null, {getListThunk})(SearchPanel);