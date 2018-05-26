import React, {Component} from 'react';
import {object} from 'prop-types';
import './NewRestaurant.css';
import { database } from './firebase';

class NewRestaurant extends Component {
    state = {
      name: '',
      email: '',
      phoneNo: '',
      twitter: ''
    };

    restaurantsRef = database.ref('/restaurants');

    handleSubmit = event => {
      event.preventDefault();
      this.restaurantsRef.push({name: this.state.name, email: this.state.email, phoneNo: this.state.phoneNo, twitter: this.state.twitter });
    };

  render() {
    const {name} = this.state;
    const {email} = this.state;
    const {phoneNo} = this.state;
    const {twitter} = this.state;

    return (
      <form className="NewRestaurant">
          <div>
            <label>
                Nombre:
                <input 
                type="text" 
                value={name}
                onChange={(event) => this.setState({name: event.target.value})}/>
            </label>
            <label>
                Email:
                <input 
                type="email" 
                value={email}
                onChange={(event) => this.setState({email: event.target.value})}/>
            </label>
          </div>  
          
          <div>
            <label>
                Telefono:
                <input 
                type="tel" 
                value={phoneNo}
                onChange={(event) => this.setState({phoneNo: event.target.value})}/>
            </label>
            <label>
                Twitter:
                <input 
                type="text" 
                value={twitter} 
                onChange={(event) => this.setState({twitter: event.target.value})}/>
            </label>
          </div>
          <button onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
    );
  }
}

NewRestaurant.propTypes = {
  restaurantsRef: object
};

export default NewRestaurant;
