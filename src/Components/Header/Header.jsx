import React from 'react';
import logo from '../../Assets/logo-clusterx.png';
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={logo}/>
        </div>
    )
}

export default Header;