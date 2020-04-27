import React from 'react';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';

class Gender extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  render(){
    return (
        <FormGroup controlId="CharacterGenderInput">
          <FormLabel>Gender</FormLabel>
          <FormControl 
            as="select" 
            onChange={this.onChange}
            placeholder="Please select"
            value={this.props.gender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </FormControl>
        </FormGroup>
    );
  }
}

export default Gender;
