import React from 'react';
import house_logo from '../../../Assets/house-logo.jpg';
import styles from './RealEstateProfile.module.css';
import { withRouter } from 'react-router-dom';

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
    
    return(
        <div className={styles.profile}>
            <img src={house_logo}/>
            <span>
                {contact}
            </span>
            <div>
            <h1>{description}</h1>
            </div>
        </div>
    )
}

export default withRouter(RealEstateProfile);