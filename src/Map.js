import React, { Component } from 'react';
import './Map.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Header from './Header.js';

function map_component(props) {
    let display_points = props.restaurants;
    if (props.searchOn) {
        display_points = props.results;
    }
    return (
        <div className="map_component" style={{backgroundColor:"white", marginTop:10}}>
            <Map 
            center={[38.0293,-78.4767]} 
            zoom={14}
            >
                <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[38.0293,-78.4767]}>
                    <Popup >
                     Cville!
                    </Popup>
                </Marker>
                {display_points.map(restaurant => {
                    let lat = restaurant.geometry.location.lat;
                    let lng = restaurant.geometry.location.lng;
                    return (
                        <div>
                            <Marker position={[lat,lng]}>
                                <Popup>
                                    {restaurant.name}<br/>
                                    {restaurant.formatted_address}<br/>
                                </Popup>
                            </Marker>
                        </div>
                    );
                })}
            </Map>
        </div>
    );
}

export default map_component;