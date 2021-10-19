import React from 'react';
import styles from './RealEstateProfile.module.css';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import RealEstateProfile from './RealEstateProfile';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getRealEstateThunk } from '../../../Redux/realEstate-reducer';

let houseLogo = "https://image.shutterstock.com/image-vector/house-logo-template-design-vector-260nw-741515455.jpg";

class RealEstateProfileContainer extends React.Component {

    componentDidMount(){
        this.props.getRealEstateThunk();
    }

    render() {

        let description = this.props.realEstate.map(i => i._id == this.props.match.params.houseId ? i.description : "");
        let contact = this.props.realEstate.map(i => i._id == this.props.match.params.houseId ? i.contact : "");
        let price = this.props.realEstate.map(i => i._id == this.props.match.params.houseId ? i.price : "");
        let owner = this.props.realEstate.map(i => i._id == this.props.match.params.houseId ? i.owner : "");
        let floor = this.props.realEstate.map(i => i._id == this.props.match.params.houseId ? i.floor : "");
        let title = this.props.realEstate.map(i => i._id == this.props.match.params.houseId ? i.title : "");
        let rooms = this.props.realEstate.map(i => i._id == this.props.match.params.houseId ? i.rooms : "");
        let year = this.props.realEstate.map(i => i._id == this.props.match.params.houseId ? i.year : "");
        let image = this.props.realEstate.map(i => i._id == this.props.match.params.houseId ? i.image : "");
        let city = this.props.realEstate.map(i => i._id == this.props.match.params.houseId ? i.city : "");
        let region = this.props.realEstate.map(i => i._id == this.props.match.params.houseId ? i.region : "");
        
        let onSubmit = (data) => {
            alert(data.text)
            //realEstateApi.postMessageToOwner(data);
        }
        
        return (
            <div>
                <div>
                    <RealEstateProfile description={description} contact={contact} title={title} price={price} owner={owner}
                        image={image} floor={floor} rooms={rooms} year={year} city={city} region={region} />
                </div>
                <div className={styles.block5}>
                    <SendToOwnerReduxForm onSubmit={onSubmit} />
                </div>
            </div>
        )
    }
}
const SendToOwnerForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="input" type="text" name="text" />
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const SendToOwnerReduxForm = reduxForm({ form: "sendToOwnerForm" })(SendToOwnerForm);

const mapStateToProps = (state) => ({
    realEstate: state.realEstate.realEstate
})
export default compose(connect(mapStateToProps, {getRealEstateThunk}),
    withRouter)(RealEstateProfileContainer);