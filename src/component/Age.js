import React from 'react';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';

class Age extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  render(){
    return (
        <FormGroup controlId="CharacterAgeInput">
          <FormLabel>Age</FormLabel>
          <FormControl
            type="text"
            onChange={this.onChange}
            value={this.props.age}
            placeholder="Enter age"/>
        </FormGroup>
    );
  }
}

export default Age;
