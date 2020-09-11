import React from 'react';
import House from './House';
import styles from './House.module.css';

const RealEstate = (props) => {
    
    let realEstate = props.realEstate.map(i => <House description={i.description} houseId={i.id}/>);

    return(
        <div className={styles.realEstate}>
            <h1>RealEstate</h1>
            <div>
                {realEstate}
            </div>
        </div>
    )
}
export default RealEstate;