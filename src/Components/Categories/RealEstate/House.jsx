import React from 'react';
import house_logo from '../../../Assets/house-logo.jpg';
import styles from './House.module.css';
import { NavLink } from 'react-router-dom';

const House = (props) => {
let houseId = props.houseId;
    return(
        <div className={styles.house}>
            <div className={styles.element}>
                <NavLink to={`/real-estate-profile/${houseId}`}>
                    <img src={house_logo}/>
                </NavLink>
                <span>{props.description}</span>
            </div>
        </div>
    )
}
export default House;