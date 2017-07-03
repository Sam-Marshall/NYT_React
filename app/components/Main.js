// Include React
var React = require("react");
import { Container, Segment, Header } from 'semantic-ui-react';

// Here we include all of the sub-components

var Search = require("./children/Search");
var Saved = require("./children/Saved");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
class Main extends React.Component{

  constructor(props){
      super(props);
  }

  render() {
    return (
     <Container>
     
          <div className="jumbotron">
            <h2 className="text-center">NYT</h2>
            <p className="text-center">
              <em>Let's Find Some Articles</em>
            </p>
          </div>

        <Segment>
          <Search />            
        </Segment>


        <Segment>
          <Saved />
        </Segment>

      </Container>
    );
  }
}

// Export the component back for use in other files
module.exports = Main;
