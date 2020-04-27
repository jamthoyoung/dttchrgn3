import React from 'react';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';

class KindredInput extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  render(){
    return (
     <div>
        <FormGroup controlId="CharacterKindredInput">
          <FormLabel>Kindred</FormLabel>
          <FormControl 
            as="select" 
            onChange={this.onChange}
            placeholder="Please select"
            value={this.props.value}>
          {this.props.kindredlist.allIds.map(function(x){
            return <option key={x} value={x}>
                    {this.props.kindredlist.byId[x].name}
                   </option>
          }, this)}
          </FormControl>
        </FormGroup>
     </div>
    );
  }
}

export default KindredInput;
