import React from 'react';
import styles from './NewListing.module.css';
import houseLogo from '../../Assets/house-logo.jpg'
import transportLogo from '../../Assets/carLogoCategories.jpg'
import { NavLink, useRouteMatch } from 'react-router-dom';

const NewListingCategories = (props) => {
  const {url} = useRouteMatch()

  return (
    <div className={styles.form_background}>
      <h2>Choose Category</h2>
      <div className={styles.newListingCategories}>
        <NavLink to={`${url}/real-estate`} className={styles.category__block}>
          <img src={houseLogo} alt="Real Estate" />
          <div>Real Estate</div>
        </NavLink>
        <NavLink to={`${url}/transport`} className={styles.category__block}>
          <img src={transportLogo} alt="Transport" />
          <div>Transport</div>
        </NavLink>
      </div>
    </div>
  );
}

export default NewListingCategories;