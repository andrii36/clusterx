import React from 'react';
import styles from '../../Content/Content.module.css';
import background from '../../../Assets/mainpage_back.png';

const WebsiteInfo = (props) => {

    return (
        <div className={styles.websiteinfo}>
            <img src={background} />
            <div className={styles.websiteinfo__description}>
                <div className={styles.description__title}>All you need is here</div>
                <div className={styles.description__text}>Clusterx is place where you can find
                almost anything you need. You can rent out things you don't need to buy like electronics,
                construction equipment, cars, real estates, office and business equipment, etc. You may also
                list your own stuff and earn real money
                </div>
                <a href="https://www.google.com/">Learn more...</a>
            </div>
        </div>
    );
}

export default WebsiteInfo;