import React from 'react';
import './styles.css';

import { connect } from "react-redux";
import { addItem, removeItem } from './actions/carActions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {   

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeItem(item);
  };

  const addItem = item => {
    // dipsatch an action here to add an item
    props.addItem(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car}  removeItem={props.removeItem} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addItem={props.addItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} addFeature={props.addFeature}/>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { addItem, removeItem })(App);
