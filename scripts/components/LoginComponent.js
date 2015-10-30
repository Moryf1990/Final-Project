var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return(
			<div className = "loginComponent">
				<h1>Login</h1>
				<input className = "loginInput" placeholder = "Username"></input>
				<input className = "loginInput" placeholder = "Password"></input>
				<button className = "loginButton">Submit</button>
			</div>
		)
	}
})