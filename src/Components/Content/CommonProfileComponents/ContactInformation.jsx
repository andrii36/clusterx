import React from 'react';
import styles from '../RealEstatePage/RealEstateProfile.module.css';
import userLogo from '../../../Assets/userLogo.jpg';
import { NavLink } from 'react-router-dom';

const ContactInformation = (props) => {
    return (
        <div className={styles.block2}>
            <h3>Contact Information</h3>
            <h4>{props.owner}</h4>
            <NavLink to="/my-profile">
                <span><img className={styles.userLogo} src={userLogo} /></span>
            </NavLink>
            <div>{props.contact}</div>
        </div>
    )
}
export default ContactInformation;