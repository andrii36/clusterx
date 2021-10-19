import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getMbiListThunk, getVehicleByIdThunk, setImageOnArrowClick } from '../../../Redux/transport-reducer';
import { getMbiList } from '../../../Redux/transport-selector';
import Address from '../CommonProfileComponents/Address';
import AlsoLikeBlock from '../CommonProfileComponents/AlsoLikeBlock';
import ContactInformation from '../CommonProfileComponents/ContactInformation';
import ImageWithTitle from '../CommonProfileComponents/ImageWithTitle';
import styles from "./TransportProfile.module.css";


const TransportProfile = (props) => {
    useEffect(() => {
        props.getVehicleByIdThunk(props.match.params.vehicleId)
        props.getMbiListThunk()
    }, [])

    useEffect(() => {
        props.getVehicleByIdThunk(props.match.params.vehicleId)
        props.getMbiListThunk()
    }, [props.match.params.vehicleId])

    return (
        <div className={styles.profile}>
            <ImageWithTitle title={props.vehicleInfo.title} image={props.vehicleInfo.image} price={props.price} description={props.vehicleInfo.description} setImageOnArrowClick={props.setImageOnArrowClick}/>
            <ContactInformation contact={props.vehicleInfo.contact} owner={props.vehicleInfo.owner} />
            <Address region={props.vehicleInfo.region} city={props.vehicleInfo.city} />
            <AlsoLikeBlock mbiList={props.mbiList} />
        </div>
    )
}
let mapState = (state) => ({
    mbiList: getMbiList(state),
    vehicleInfo: state.transport.vehicleInfo
})

export default compose(
    connect(mapState, {getVehicleByIdThunk, getMbiListThunk, setImageOnArrowClick}),
    withRouter
)(TransportProfile)

