import React from 'react';
import './List.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/Inputgroup'
import FormControl from 'react-bootstrap/FormControl'
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
                    placeholder="Search for a restaurant by name!"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={this.state.query}
                    onChange={this.handleChange}
                    />
                    <InputGroup.Append>
                        <Button onClick={this.handleSubmit}>Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        );
    }

}

export default SearchBar;