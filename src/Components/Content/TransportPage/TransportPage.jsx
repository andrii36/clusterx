import React from 'react';
import Address from '../CommonProfileComponents/Address';
import ContactInformation from '../CommonProfileComponents/ContactInformation';
import ImageWithTitle from '../CommonProfileComponents/ImageWithTitle';
import styles from './Vehicle.module.css';
import Vehicle from './Vehicle';

const TransportPage = (props) => {
    let transportList = props.transport.map(e => <Vehicle image={e.image} title={e.title} vehicleId={e._id} price={e.price}/>);

    return(
        <div className={styles.transport__page}>
            {transportList}
        </div>
    )
}
export default TransportPage;