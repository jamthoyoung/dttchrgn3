import React from 'react';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';

class Class extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  render(){
    return (
        <FormGroup controlId="CharacterClassInput">
          <FormLabel>Class</FormLabel>
          <FormControl 
            as="select" 
            onChange={this.onChange}
            placeholder="Please select"
            value={this.props.class}>
            <option value="Warrior">Warrior</option>
            <option value="Wizard">Wizard</option>
            <option value="Rogue">Rogue</option>
          </FormControl>
        </FormGroup>
    );
  }
}

export default Class;
