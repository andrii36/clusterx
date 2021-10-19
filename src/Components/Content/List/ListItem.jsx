import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ListItem.module.css';

const ListItem = (props) => {
    let itemId = props.itemId;
    
    return(
        <div className={styles.container}>
            <div className={styles.element}>
                <NavLink to={`/transport-profile/${itemId}`}>
                    <img src={props.image != null && props.image}/>
                </NavLink>
                <span>{props.title}</span>
            </div>
        </div>
    )
}
export default ListItem;