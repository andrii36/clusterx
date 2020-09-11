import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import {Route} from 'react-router-dom';
import RealEstateContainer from './Components/Categories/RealEstate/RealEstateContainer';
import { connect } from 'react-redux';
import { setAuthData } from './Redux/auth-reducer';
import RealEstateProfile from './Components/Categories/RealEstate/RealEstateProfile';
import PostForRent from './Components/Content/PostForRent';

class App extends React.Component {
  componentDidMount(){
    this.props.setAuthData()
  }

  render(){
    return (
    <div className="App">
        <Header/>
        <Route path="/" render={() => <Content/>}/>
        <Route path="/real-estate" render={() => <RealEstateContainer/>}/>
        <Route path="/real-estate-profile/:houseId" render={() => <RealEstateProfile realEstate={this.props.realEstate}/>}/>
        <Route path="/post-for-rent" render={() => <PostForRent/>}/>
    </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  realEstate: state.realEstate.realEstate
})

export default connect(mapStateToProps, {setAuthData})(App);
