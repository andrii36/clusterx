import React from 'react';
import house_logo from '../../../Assets/house-logo.jpg';
import styles from './House.module.css';
import { NavLink } from 'react-router-dom';

const House = (props) => {

let houseId = props.houseId;

    return(
        <div className={styles.house}>
            <div className={styles.house__element}>
                <div className={styles.element__image}>
                    <NavLink to={`/real-estate-profile/${houseId}`}>
                        <img src={props.image != null ? props.image : house_logo} />
                    </NavLink>
                </div>
                <div className={styles.element__title}>
                    <NavLink to={`/real-estate-profile/${houseId}`}>
                        {props.title}
                    </NavLink>
                </div>
                <div className={styles.element__price}>${props.price}</div>
            </div>
        </div>
        // <div className={styles.house}>
        //     <div className={styles.element}>
        //         <NavLink to={`/real-estate-profile/${houseId}`}>
        //             <img src={props.image != null ? props.image : house_logo}/>
        //         </NavLink>
        //         <span>{props.title}</span>
        //     </div>
        // </div>
    )
}
export default House;