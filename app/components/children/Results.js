var React = require("react");
import { Segment } from 'semantic-ui-react';

class Results extends React.Component{

	constructor(props){
      super(props);
  	}

	render(){
		return(
			<Segment.Group>
				<Segment><h3>Results</h3></Segment>
				<Segment>
				</Segment>
			</Segment.Group>
		)
	}
	
}

module.exports = Results;