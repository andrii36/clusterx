import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import {Route} from 'react-router-dom';
import RealEstateContainer from './Components/Categories/RealEstateContainer';

const App = (props) => {
  return (
    <div className="App">
        <Header/>
        <Content/>
        <Route path="/real-estate" render={() => <RealEstateContainer/>}/>
    </div>
  );
}

export default App;
