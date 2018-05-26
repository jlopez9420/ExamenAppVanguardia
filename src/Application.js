import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import './Application.css';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant';

class Application extends Component {
  state = {
    restaurants: null
  };

  restaurantsRef = database.ref('/restaurants');

  componentDidMount() {
    this.restaurantsRef.on('value', (snapshot) => {
      this.setState({ restaurants: snapshot.val() });
    });
  }

  render() {
    const { restaurants } = this.state;

    return (
      <div className="Application">
        <div>
        <NewRestaurant />
        <h1>Lista de Contactos</h1>
        <Restaurants restaurants={restaurants} />
        </div>
      </div>        
    );
  }
}

Application.propTypes = {
  restaurants: PropTypes.object
};

export default Application;
