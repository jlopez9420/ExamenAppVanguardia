import React, {Component} from 'react';
import {string, number} from 'prop-types';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render() {
    const { name } = this.props;
    const { email } = this.props;
    const { phoneNo } = this.props;
    const { twitter } = this.props;

    return (
      <article className="Restaurant">
       <h3>{ name }- { email } - {phoneNo} - {twitter}</h3>
      </article>
    );
  }
}

Restaurant.propTypes = {
  name: string,
  email: string,
  phoneNo: number,
  twitter: string
};

export default Restaurant;
