import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import './Restaurants.css';
import {database} from './firebase';


class Restaurants extends Component {



  render() {
    const { restaurants } = this.props;
    return (
      <section className="Restaurants">
        {map(this.props.restaurants, (restaurant, key) => <Restaurant key={key}{...restaurants}handleSelect={() => this.handleSelect(key)}
          handleDeselect={() => this.handleDeselect(key)}/>)}
      </section>
    );
  }
}

Restaurants.propTypes = {
  user: PropTypes.object,
  restaurantsRef: PropTypes.object,
  restaurants: PropTypes.object
};

export default Restaurants;
