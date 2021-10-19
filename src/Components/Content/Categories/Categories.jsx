import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Categories.module.css';

const Categories = (props) => {
    return (
        <div className={styles.categories}>
            <div className={styles.categories__title}>Browse by category</div>
            <div className={styles.categories__row}>
                <div className={styles.categories__column}>
                    <NavLink to="/real-estate">
                        <div className={styles.category_name}>Real Estate</div>
                    </NavLink>
                </div>
                <div className={styles.categories__column}>
                    <NavLink to="/transport">
                        <div className={styles.category_name}>Transport</div>
                    </NavLink>
                </div>
                <div className={styles.categories__column}>
                    <NavLink to="/parts">
                        <div className={styles.categ_text}>Parts</div>
                    </NavLink>
                </div>
                <div className={styles.categories__column}>
                    <NavLink to="/clothing">
                        <div className={styles.categ_text}>Clothing</div>
                    </NavLink>
                </div>
                <div className={styles.categories__column}>
                    <NavLink to="/house">
                        <div className={styles.categ_text}>House</div>
                    </NavLink>
                </div>
                <div className={styles.categories__column}>
                    <NavLink to="/electronics">
                        <div className={styles.categ_text}>Electronics</div>
                    </NavLink>
                </div>
                <div className={styles.categories__column}>
                    <NavLink to="/business">
                        <div className={styles.categ_text}>Business</div>
                    </NavLink>
                </div>
                <div className={styles.categories__column}>
                    <NavLink to="/sports">
                        <div className={styles.categ_text}>Sports</div>
                    </NavLink>
                </div>
                <div className={styles.categories__column}>
                    <NavLink to="/construction">
                        <div className={styles.categ_text}>Construction</div>
                    </NavLink>
                </div>
                <div className={styles.categories__column}>
                    <NavLink to="/free">
                        <div className={styles.categ_text}>Free</div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Categories;