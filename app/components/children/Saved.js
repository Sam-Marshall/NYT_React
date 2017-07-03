var React = require("react");
import { Segment } from 'semantic-ui-react';


class Saved extends React.Component{

	constructor(props){
      super(props);
  	}

	render(){
		return(
			<Segment.Group>
				<Segment><h3>Saved Articles</h3></Segment>
				<Segment>
					Articles
				</Segment>
			</Segment.Group>
		)
	}
}

module.exports = Saved;