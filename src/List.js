import React from 'react';
import './List.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { isEmpty } from "lodash";

function list (props){

    let display_list = props.restaurants;
    if (props.searchOn) {
        display_list = props.results;
    }

    return (
        //map function that gives style to each restaurant and bar
        <div className="list" style={{ display:"flex", justifyContent:"center", flexWrap: "wrap" }}>
            <Container className="list_container" style={{  
                display:"flex", 
                flexWrap: "wrap", 
                justifyContent:"center",
                }}>
            <div className="cards_list">
            {display_list.map(restaurant => {
                let expense = restaurant.price_level;               
                // console.log(expense);
                /*
                    
                    bool isRestaurant, isBar, sortedByPrice, sortedByDistance;
                    //PLACE in App.js
                    function sortByPrice (restaurants) {
                        sorted = []
                        start = 0
                        end = restaurants.length
                        
                        if (restaurants.length > 1){
                            mid = (start + end) / 2
                            L = restaurants[mid]
                            R = restaurants[(end-mid) + 1]

                            sortByPrice(L)
                            sortByPrice(R)
                        }

                        while i < len(L) and j < len(R): 
                if L[i] < R[j]: 
                    arr[k] = L[i] 
                    i+=1
                else: 
                    arr[k] = R[j] 
                    j+=1
                k+=1
            
            # Checking if any element was left 
            while i < len(L): 
                arr[k] = L[i] 
                i+=1
                k+=1
            
            while j < len(R): 
                arr[k] = R[j] 
                j+=1
                k+=1

                        for (restaurant: restaurants) {
                            
                        }
                    }
    
            i = j = k = 0
            
            # Copy data to temp arrays L[] and R[] 
            
                    
                        function sortByDistance(restaurants){

                        }
                        const filterByRestaurant = restaurants.filter(eatery => eatery.isRestaurant)
                        const filterByBar = restaurants.filter(eatery => eatery.isBar)
                        const filterByPrice = 


                */
                
                return (
                    <Card className="card" style={{ align: "center"}}>
                        <Card.Body>
                            {<Card.Title style={{fontWeight: 'bold'}}>{restaurant.name}</Card.Title>}
                            <Card.Text>
                            <div className="label">Expense:</div>{props.expenseTo$(expense)}<br/>
                            <div className="label">Rating:</div>{restaurant.rating}<br/>
                            <div className="label">Address:</div>{restaurant.formatted_address}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                );
            })}
            </div>
            
            </Container>
        </div>
    );
    

}

export default list;