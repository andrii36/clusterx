import React from 'react';
import { connect } from 'react-redux';
import { getTansportThunk } from '../../../Redux/transport-reducer';
import { getTransportSelector } from '../../../Redux/transport-selector';
import TransportPage from './TransportPage';

class TransportPageContainer extends React.Component {
    componentDidMount() {
        this.props.getTansportThunk();
    }

    render() {
        return (
            <div>
                <TransportPage {...this.props}/>
            </div>
        )
    }
}

let mapState = (state) => ({
    transport: getTransportSelector(state),
    postSuccess: state.transport.postSuccess
})
export default connect(mapState, { getTansportThunk })(TransportPageContainer);