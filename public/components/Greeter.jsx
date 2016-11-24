var React = require('react'),
    GreeterMessage = require('GreeterMessage'),
    GreeterForm = require('GreeterForm');

// Create Greeter component for most of all work in this app
var Greeter = React.createClass({
  // Set Default property/props if input or textarea is empty
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },
  // Set Iniital State of the name and message
  getInitialState: function () {
    return {
        name: this.props.name,
        message: this.props.message
    };
  },
  // update state of the props in GreeterMessage by using 'updates' object
  handleNewData: function (updates) {
    this.setState(updates);
  },
  // render all updates and default data here
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

module.exports = Greeter;
