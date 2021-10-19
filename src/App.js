import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import { Route } from 'react-router-dom';
//import RealEstateContainer from './Components/Content/RealEstatePage/RealEstatePageContainer';
import { connect } from 'react-redux';
import LoginPage from './Components/Content/LoginPage/LoginPage';
import MyProfile from './Components/Content/MyProfile/MyProfile';
import RealEstateProfileContainer from './Components/Content/RealEstatePage/RealEstateProfileContainer';
import CreateAccountPage from './Components/Content/CreateAccountPage/CreateAccountPage';
import { initializeThunk } from './Redux/app-reducer';
import Preloader from './Components/Preloader/Preloader';
import TransportPageConatainer from './Components/Content/TransportPage/TransportPageConatainer';
import TransportProfile from './Components/Content/TransportPage/TransportProfile';
import ListPage from './Components/Content/List/ListPage';
import NewListingCategories from './Components/AddNewListing/NewListingCategories';
import PostForRent from './Components/AddNewListing/PostForRent';

const RealEstateContainer = React.lazy(() => import('./Components/Content/RealEstatePage/RealEstatePageContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeThunk();
  }

  render() {
    if(!this.props.initialized){return <Preloader/>}
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={() => <Content />} />
        <Route path="/real-estate" render={() => <React.Suspense fallback={<div>Loading...</div>}>
          <RealEstateContainer/>
        </React.Suspense>}/>
        <Route path="/real-estate-profile/:houseId" render={() => <RealEstateProfileContainer />}/>
        <Route path="/transport-profile/:vehicleId" render={() => <TransportProfile />}/>
        <Route exact path="/add-new-listing" render={() => <NewListingCategories />} />
        <Route exact path="/add-new-listing/transport" render={() => <PostForRent category='Transport' />} />
        <Route exact path="/add-new-listing/real-estate" render={() => <PostForRent category='RealEstate'/>} />
        <Route path="/login" render={() => <LoginPage />} />
        <Route path='/my-profile' render={() => <MyProfile />} />
        <Route path="/create-account" render={() => <CreateAccountPage/>} />
        <Route path="/transport" render={() => <TransportPageConatainer/>} />
        <Route path="/search" render={() => <ListPage/>} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  realEstate: state.realEstate.realEstate,
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeThunk})(App);
