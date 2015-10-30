var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function() {
		return(
			<div className = "registerComponent">
				<h1>Register Here</h1>
				<input className = "registerInput" placeholder = "First Name"></input>
				<input className = "registerInput" placeholder = "Last Name"></input>
				<input className = "registerInput" placeholder = "Email"></input>
				<input className = "registerInput" placeholder = "Username"></input>
				<input className = "registerInput" placeholder = "Password"></input>
				<button className = "registerButton">Register</button>
			</div>
		)
	}
})