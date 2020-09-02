import React from 'react';
import RealEstate from './RealEstate';
import {connect} from 'react-redux';

const RealEstateContainer = (props) => {
    return(
        <RealEstate {...props}/>
    )
}
let mapStateToProps = (state) => {
    return({
        houses: state.realEstate.houses,
        appartments: state.realEstate.appartments
    })
}
export default connect(mapStateToProps)(RealEstateContainer);;