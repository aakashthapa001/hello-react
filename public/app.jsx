var React = require('react'),
    ReactDOM = require('react-dom'),
    Greeter = require('Greeter');

var firstName = 'Don';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
