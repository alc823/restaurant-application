import React, { Component } from 'react';
import './App.css';
import List from './List.js';
import Header from './Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-sticky-header/styles.css';
import Map from './Map.js';
import SearchBar from './SearchBar'
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

const priceAmt = [
  '$', '$$', '$$$', '$$$$', '$$$$$'
] 

class App extends Component {
  
  constructor(){
    super()
    this.state = {
    //list of restaurant and bar objects
      restaurants: [],
      restaurant: [],
      results: [],
      searchOn: false,
    }
  
  }

  searchQuery = (query) => {
  //   axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + query + '&location=38.0293,-78.4767&radius=2000&type=restaurant&key=' + process.env.REACT_APP_API_KEY)
  //   .then((response) => {
  //     this.setState({
  //       restaurants: response.data.results
  //     })
  //     console.log(response);
  //   })
  //   .catch((e) => {
  //     console.log("ERROR")
  //     console.log(e.response.data);
  //   })
  //   .then(() => {
  // });
    if (query === '') {
      this.setState({
        searchOn: false,
      })
    } else {
      // console.log("query: " + query)
      const search_results = this.state.restaurants.filter(restaurant => restaurant.name === query);
      console.log("search_results length: " + search_results.length);
      this.setState({
        searchOn: true,
        results: search_results,
      });
    }
    
  }

  componentDidMount = () =>{
    axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurant&location=38.0293,-78.4767&radius=2000&type=restaurant&key=' + process.env.REACT_APP_API_KEY)
    .then((response) => {
      this.setState({
        restaurants: response.data.results
      })
      // console.log("Data: ");
      // console.log(response);
    })
    .catch((e) => {
      console.log("ERROR")
      console.log(e.response.data);
    })
    .then(() => {
  });
}

  handleRestaurantData(key)  {
    const restaurants = [...this.state.restaurants, key];
    this.setState({
      
    });
  }

  expenseTo$ = (price_level) =>{
      if (price_level === undefined) {
        return 'No data';
      }
      return priceAmt[price_level];
  }

  

/*
                    
                    bool isRestaurant, isBar, sortedByPrice, sortedByDistance;
                    
                    function sortByPrice (restaurants) {
                        sorted = []
                        start = 0
                        end = restaurants.length
                        
                        if (restaurants.length > 1){
                            mid = (start + end) / 2
                            L = restaurants[mid]
                            R = restaurants.slice(mid, R) //

                            sortByPrice(L)
                            sortByPrice(R)
                        }

                        let i,j,k = 0
                        
                        while (i < L.length and j < R.length{
                            if (L[i] < R[j]) {
                              sorted[k] = L[i] 
                              i++
                            } 
                            else {
                              sorted[k] = R[j] 
                              j++ 
                            }
                              k++
                          } 
                            
                        } 
            
                        while (i < L.length) {
                            sorted[k] = L[i]; 
                            i++;
                            k++;
                        } 
                            
                        
                        while (j < R,length) {
                            sorted[k] = R[j]; 
                            j++;
                            k++;
                        }
                            

                        for (restaurant: restaurants) {
                            
                        }
                    }
    
            
            
            # Copy data to temp arrays L[] and R[] 
            
                    
                        function sortByDistance(restaurants){

                        }
                        const filterByRestaurant = restaurants.filter(eatery => eatery.isRestaurant)
                        const filterByBar = restaurants.filter(eatery => eatery.isBar)
                        const filterByPrice = 


                */
                
  render() {
    return(
      <div className="bg-info">
        <Header /><br/>
        <Map 
          restaurants={this.state.restaurants}
          results={this.state.results}
          searchOn={this.state.searchOn}
        /><br/>
        <SearchBar 
          searchQuery={this.searchQuery}
          results={this.state.results}
        />
        <List 
          restaurants={this.state.restaurants} 
          expenseTo$={this.expenseTo$}
          results={this.state.results}
          searchOn={this.state.searchOn}
        />
      </div>
    );
  }
}

export default App;
