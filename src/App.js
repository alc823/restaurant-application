import React, { Component } from 'react';
import './App.css';
import List from './List.js';
import Header from './Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-sticky-header/styles.css';
import './.env';
require('dotenv').config();

const dotenv = require('dotenv');
dotenv.config();

const axios = require('axios');
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;
var cors_proxy = require('cors-anywhere');

(function() {
  var cors_api_host = 'cors-anywhere.herokuapp.com';
  var cors_api_url = 'https://' + cors_api_host + '/';
  var slice = [].slice;
  var origin = window.location.protocol + '//' + window.location.host;
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function() {
      var args = slice.call(arguments);
      var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
      if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
          targetOrigin[1] !== cors_api_host) {
          args[1] = cors_api_url + args[1];
      }
      return open.apply(this, args);
  };
})();

class App extends Component {
  
  constructor(){
    super()
    this.state = {
    //list of restaurant and bar objects
      restaurants: []
    }
  
  }


  componentDidMount = () =>{
    axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=' + process.env.REACT_APP_API_KEY + '&location=38.0293,-78.4767&radius=100&type=restaurant')
    .then((response) => {
      console.log(response);
      this.setState({
        restaurants: response.data.results
      })
    })
    .catch((e) => {
      console.log(e.response.data);
    })
    .then(() => {
      // always execute
      
    })
    
  }

  

  handleRestaurantData(key)  {
    // restaurant
    const restaurants = [...this.state.restaurants, key];
    this.setState({
      
    });
  }


  render() {
    console.log("API: " + process.env.REACT_APP_API_KEY)
    // console.log("API: " + process.env.NODE_ENV)
    return(
      <div className="bg-info">
        <Header />
        <List restaurants={this.state.restaurants}/>
      </div>
    );
  }
}

export default App;
