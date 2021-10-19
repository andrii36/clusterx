import React from 'react';
import House from './House';
import styles from './House.module.css';

const RealEstate = (props) => {
    let realEstate = props.realEstate.map(i => <House image={i.image} title={i.title} houseId={i._id} realEstate={props.realEstate} price={i.price}/>);

    return(
        <div className={styles.realEstate}>
            {realEstate}
        </div>
    )
}
export default RealEstate;