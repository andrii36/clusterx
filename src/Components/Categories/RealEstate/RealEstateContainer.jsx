import React from 'react';
import RealEstate from './RealEstate';
import {connect} from 'react-redux';
import { getRealEstateThunk } from '../../../Redux/realEstate-reducer';

class RealEstateContainer extends React.Component {
    componentDidMount(){
        this.props.getRealEstateThunk()
    }

    render(){
        return(
            <RealEstate {...this.props}/>
        )
    }
}
let mapStateToProps = (state) => {
    return({
        realEstate: state.realEstate.realEstate,
    })
}

export default connect(mapStateToProps, {getRealEstateThunk})(RealEstateContainer);;