import React from 'react';
import preloader from '../../Assets/Preloader.gif';
import styles from './Preloader.module.css';

const Preloader = (props) => {
    return(
        <div className={styles.preloader}>
            <img src={preloader}></img>
        </div>
    )
}
export default Preloader;