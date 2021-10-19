import React from 'react';
import styles from '../RealEstatePage/RealEstateProfile.module.css';

const Address = (props) => {
    return (
        <div className={styles.block3}>
            <h3>Address</h3>
            <span>{props.region}</span>
            <div>{props.city}</div>
        </div>
    )
}
export default Address;