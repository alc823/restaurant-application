import React from 'react';
import './List.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { isEmpty } from "lodash";
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
//Component to manipulate and display restaurants and bars
function list (props){
    //console.log("restaurants: " + props.restaurants)
    // console.log("restaurant empty? " + isEmpty(props.restaurants));
    return (
        //map function that gives style to each restaurant and bar
        <div className="list" style={{ display:"flex", justifyContent:"center", marginTop: 50 }}>
            
            {/* Restaurants: {props.restaurants.data.results[0].geometry.name} */}
            <Container style={{ width: '70vw', height: '80vh', backgroundColor: "#292b2c", marginTop: 50, borderRadius: '10px', verticalAlign:"center", display:"flex", flexWrap: "wrap", justifyContent:"center" }}>
            {props.restaurants.map(restaurant => {
                var stem;
                    axios.get('https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyBQRbOl8Z5HnrY12zURP84C6Tdwsoy-HUI&place_id=' + restaurant.place_id)
                    .then((response) => {
                     stem = response
                    })
                    .catch((e) => {
                      console.log(e.response.data);
                    })
                // console.log("restaurant")
                return (
                    <Card style={{ width: '60vw', height: '50vh', marginTop: "5vh", align: "center"}}>
                    <Card.Body>
                        <Card.Title>{stem.name}</Card.Title>
                        <Card.Text>
                        {/* Price: $$$ */}
                        title: {restaurant.name}<br/>
                        expense: {restaurant.price}<br/>
                        rating: {restaurant.rating}
                        
                        </Card.Text>
                        {/* <Card.Text>
                        Rating: ***
                        </Card.Text> */}
                        {/*<Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                    </Card.Body>
                    </Card>
                );
            })}
            
            </Container>
            {/* {props.restaurants} */}
        </div>
    );
    

}

export default list;