import React from 'react';
import styles from './RealEstateProfile.module.css';
import ContactInformation from '../CommonProfileComponents/ContactInformation';
import Address from '../CommonProfileComponents/Address';
import ImageWithTitle from '../CommonProfileComponents/ImageWithTitle';
let houseLogo = "https://image.shutterstock.com/image-vector/house-logo-template-design-vector-260nw-741515455.jpg";

const RealEstateProfile = (props) => {
    return (
        <div className={styles.profile}>
            <ImageWithTitle title={props.title} image={props.image} price={props.price} description={props.description}/>
            <ContactInformation contact={props.contact} owner={props.owner}/>
            <Address region={props.region} city={props.city}/>
        </div>
    )
}

export default RealEstateProfile;