import React from 'react';
import styles from './Content.module.css';
import { NavLink } from 'react-router-dom';

const Content = (props) => {
  return (
    <div className={styles.content}>
        <form>
          <span>
            <input type="text" name="mainSearch" placeholder="what are you looking for?"/>
          </span>
          <span>
            <input type="text" name="location" placeholder="location"/>
          </span>
          <button>Search</button>
        </form>
        <div>
          <h1>Categories</h1>
            <div className={styles.categories}>
              <span><NavLink to="/real-estate">Real Estate</NavLink></span>
              <span><NavLink to="/transport">Transport</NavLink></span>
              <span><NavLink to="/construction">Construction</NavLink></span>
              <span><NavLink to="/clothing">Clothing</NavLink></span>
              <span><NavLink to="/house">House</NavLink></span>
            </div>
        </div>
    </div>
  );
}

export default Content;