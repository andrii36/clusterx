import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Vehicle.module.css';

const Vehicle = (props) => {
    let vehicleId = props.vehicleId;

    return (
        <div className={styles.vehicle}>
            <div className={styles.vehicle__element}>
                <div className={styles.element__image}>
                    <NavLink to={`/transport-profile/${vehicleId}`}>
                        <img src={props.image != null && props.image} />
                    </NavLink>
                </div>
                <div className={styles.element__title}>
                    <NavLink to={`/transport-profile/${vehicleId}`}>
                        {props.title}
                    </NavLink>
                </div>
                <div className={styles.element__price}>${props.price}</div>
            </div>
        </div>
    )
}
export default Vehicle;