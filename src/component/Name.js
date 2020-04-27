import React from 'react';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  render(){
    return (
        <FormGroup controlId="CharacterNameInput">
          <FormLabel>Name</FormLabel>
          <FormControl
            type="text" 
            onChange={this.onChange}
            value={this.props.name}
            placeholder="Enter name"/>
        </FormGroup>
    );
  }
}

export default Name;
