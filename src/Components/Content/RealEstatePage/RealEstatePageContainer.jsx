import React from 'react';
import RealEstatePage from './RealEstatePage';
import {connect} from 'react-redux';
import { getRealEstateThunk } from '../../../Redux/realEstate-reducer';
import { Redirect } from 'react-router-dom';

class RealEstatePageContainer extends React.Component {
    componentDidMount(){
        this.props.getRealEstateThunk()
    }

    render(){
        if(!this.props.isAuth){return <Redirect to='/login'/>}
        return(
            <RealEstatePage {...this.props}/>
        )
    }
}
let mapStateToProps = (state) => {
    return({
        initialized: state.app.initialized,
        isAuth: state.auth.isAuth,
        realEstate: state.realEstate.realEstate
    })
}

export default connect(mapStateToProps, {getRealEstateThunk})(RealEstatePageContainer);;