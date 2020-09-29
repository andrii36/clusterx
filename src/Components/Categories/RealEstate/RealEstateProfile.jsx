import React from 'react';
import house_logo from '../../../Assets/house-logo.jpg';
import styles from './RealEstateProfile.module.css';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import * as axios from 'axios';

const RealEstateProfile = (props) => {
    let description = props.realEstate.map(i => {
        return i.id == props.match.params.houseId
               ? i.description
               : ""
    })
    let contact = props.realEstate.map(i => {
        return i.id == props.match.params.houseId
               ? i.contact
               : ""
    })
    let onSubmit = (data) => {
        alert(data.text)
    }
    return(
        <div className={styles.profile}>
            <div className={styles.block1}>
                <img src={house_logo}/>
                <div>
                    Prev Next
                </div>
            </div>
            <div className={styles.block2}>
                <h3>Contact Information</h3>
                <h4>Name</h4>
                <div>{contact}</div>
            </div>
            <div className={styles.block3}>
                <h3>Address</h3>
            </div>
            <div className={styles.block4}>
                <h3>Description</h3>
                <h3>11000$</h3>
                {description}
            </div>
            <div className={styles.block5}>
                <SendToOwnerReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
const SendToOwnerForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component="input" type="text" name="text"/>
            <div>
                <button>Send</button>
            </div>
            
        </form>
    )
}
const SendToOwnerReduxForm = reduxForm({form: "sendToOwnerForm"})(SendToOwnerForm);

export default withRouter(RealEstateProfile);