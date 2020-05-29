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
            {!isEmpty(props.restaurants) && 
            <div style={{color: "white"}}>
                Number of results: {display_list.length}
            </div>
            }
                
            {isEmpty(props.restaurants) && 
                <div style={{color: "white"}}>Loading...</div>
            }

            
            {display_list.map(restaurant => {
                let expense = restaurant.price_level;               
                // console.log(expense);
      
                
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