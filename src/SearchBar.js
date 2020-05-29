import React from 'react';
import './List.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/Inputgroup';
import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import { isEmpty } from "lodash";
import './SearchBar.css';
import './.env';

class SearchBar extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            query: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        });
    }

    handleSubmit = () => {
        this.props.searchQuery(this.state.query);
    }

         
    
    
    render() {
        return (
            <div className="searchbar" style={{ width: '66vw', marginLeft: '16vw', marginRight: '18vw' }}>
                <InputGroup  className="mb-3">
                    <FormControl
                    placeholder="Search for eatery by name or type!"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={this.state.query}
                    onChange={this.handleChange}
                    />
                    <InputGroup.Append>
                        <Button onClick={this.handleSubmit}>Search</Button>
                    </InputGroup.Append>
                </InputGroup>
                
                <DropdownButton  
                    title="Filter"
                    
                >

                 <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Price
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Button className="filterbutton" value='1' onClick={(e)=>{this.props.filterByPrice(e)}}>$</Button>
                            <Button className="filterbutton" value='2' onClick={(e)=>{this.props.filterByPrice(e)}}>$$</Button>
                            <Button className="filterbutton" value='3' onClick={(e)=>{this.props.filterByPrice(e)}}>$$$</Button>
                            <Button className="filterbutton" value='4' onClick={(e)=>{this.props.filterByPrice(e)}}>$$$$</Button>
                            <Button className="filterbutton" value='5' onClick={(e)=>{this.props.filterByPrice(e)}}>$$$$$</Button>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Type
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                        <Button className="filterbutton" value='restaurant' onClick={(e)=>{this.props.filterByType(e)}}>Restaurant</Button>
                        <Button className="filterbutton" value='bar' onClick={(e)=>{this.props.filterByType(e)}} >Bar</Button>
                        </Card.Body>     
                        </Accordion.Collapse>
                        {/* <Accordion.Collapse eventKey="1">
                        <Card.Body>Bar</Card.Body>     
                        </Accordion.Collapse> */}
                    </Card>
                 </Accordion>
                        
                </DropdownButton>
                
            
                {/*
                    <DropdownButton> 
                        <Dropdown.Item href="#/action-1">Price
                        <Dropdown.Item href="#/action-1"></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"></Dropdown.Item>
                        </Dropdown.Item>
                    </DropdownButton>
                    
                    
                    <DropdownButton>
                        <Dropdown.Item href="#/action-1">Price
                        <Dropdown.Item href="#/action-1"></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"></Dropdown.Item>
                        </Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton> 
                        <Dropdown.Item href="#/action-1">Price
                        <Dropdown.Item href="#/action-1"></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"></Dropdown.Item>
                        </Dropdown.Item>
                    </DropdownButton> 
                */}


            </div>
        );
    }

}

export default SearchBar;