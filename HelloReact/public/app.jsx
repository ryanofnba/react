var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

const firstName = 'Ryan';
const message = 'This is my message';

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);
