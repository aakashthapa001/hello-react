var React = require('react');

// Create GreeterForm component to validate and update on submit form
var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    // Create empty object to store update i.e. name and message values from user
    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      // update or pass name property into 'updates' object from taking value from input field
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      // update or pass message property into 'updates' object from taking value from textarea field
      updates.message = message;
    }

    // after updates to 'updates' object it becomes like
    // updates = {
    //   name: value from input,
    //   message: value from textrea
    // }

    // 'updates' object is passed to onNewData property of GreeterForm
    this.props.onNewData(updates);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter name"/>
        </div>
        <div>
          <textarea ref="message" placeholder="Enter message"></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

module.exports = GreeterForm;
