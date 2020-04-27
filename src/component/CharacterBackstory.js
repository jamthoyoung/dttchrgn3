import React from 'react';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';

class CharacterBackstory extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  render(){
    return (
        <FormGroup controlId="CharacterBackstoryInput">
          <FormLabel>Backstory</FormLabel>
          <FormControl 
            as="select" 
            onChange={this.onChange}
            placeholder="Please select"
            value={this.props.value}>
          {this.props.backstory.map(function(bs,key){
            return <option key={key} value={bs.id}>{bs.name}</option>
          })}
          </FormControl>
        </FormGroup>
    );
  }
}

export default CharacterBackstory;
