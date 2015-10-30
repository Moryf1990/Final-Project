var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return(
			<div className = "homePageComponent">
				<h1 className = "homePageHeader">Welcome to Ticket Selling Heaven</h1>
				<h3 className = "homePageContent">Here you will find all of the tools you need to
				effectively sell all of your unwanted sporting tickets.</h3>
				<h3 className = "homePageContent"> Click on the REGISTER link at the top of the page to get started,</h3>
				<h3 className = "homePageContent"> or if you are a returning user, click the LOGIN link to post tickets or see</h3>
				<h3 className = "homePageContent">which of your tickets have been sold</h3>
			</div>
		)
	}
});