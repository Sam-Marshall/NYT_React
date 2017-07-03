var React = require("react");
var Results = require("../children/Results");
import { Segment, Form, Button } from 'semantic-ui-react';

var helpers = require("../utils/helpers");

class Search extends React.Component{
	constructor(props){
	    super(props);
	    this.state={
	      searchTerm: '',
	      startDate: '',
	      endDate: '',
	      results: []
	    }
	    this.handleSearch = this.handleSearch.bind(this);
	    this.handleStartDate = this.handleStartDate.bind(this);
	    this.handleEndDate = this.handleEndDate.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}
  	handleSearch(e){
  		this.setState({searchTerm: e.target.value})
  	}
  	handleStartDate(e){
  		this.setState({startDate: e.target.value})
  	}
  	handleEndDate(e){
  		this.setState({endDate: e.target.value})
  	}
  	handleSubmit(){

  		console.log('Search Term: ' + this.state.searchTerm);
  		console.log('Start Date: ' + this.state.startDate);
  		console.log('End Date: ' + this.state.endDate);
  		
  		helpers.runQuery(this.state.searchTerm, this.state.startDate, this.state.endDate).then(function(data){
  			this.setState({results: data});
  			console.log(this.state.results);
  		}.bind(this));

  	}
	render(){
		return(
			<Segment.Group>
				<Segment><h3>Search</h3></Segment>
				<Segment>
					<Form>
						<label>Topic</label>
						<input 
							type='text'
							name='topic'
							placeholder='Search...'
							value={this.state.searchTerm}
							onChange={this.handleSearch}
						/>
						<label>Start Date</label>
						<input 
							type='text'
							name='start'
							placeholder='ex: 20170630'
							value={this.state.startDate}
							onChange={this.handleStartDate}
						/>
						<label>End Date</label>
						<input 
							type='text'
							name='end'
							placeholder='ex: 20170630'
							value={this.state.endDate}
							onChange={this.handleEndDate}
						/>
						<Button primary onClick={this.handleSubmit}>
					      <Button.Content visible>
					        Search NYT
					      </Button.Content>
					      <Button.Content hidden>
					        Find Articles!
					      </Button.Content>
					    </Button>
					</Form>
					<Results results={this.state.results}/>
					</Segment>
			</Segment.Group>
		)
	}
}

module.exports = Search;