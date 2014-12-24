var React = require('react');
var Input = require('react-bootstrap').Input;
var Panel = require('react-bootstrap').Panel;
var CustomerActions = require('../actions');

var Component = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();

    // Trigger the creat customer action.
    CustomerActions.create({
      name: this.refs.name.getValue().trim(),
      email: this.refs.email.getValue().trim()
    });

    // Clear out the form.
    this.refs.name.getInputDOMNode().value = '';
    this.refs.email.getInputDOMNode().value = '';

    return;
  },

  render: function () {
    var title = <h3>New Customer</h3>;

    return (
      <Panel header={title}>
        <form onSubmit={this.onSubmit}>
          <Input
            ref="name"
            type="text"
            label="Full Name"
            autoFocus
            placeholder="Full name..." />
          <Input
            ref="email"
            type="email"
            label="Email"
            placeholder="Email address..." />
          <Input
            value="New Customer"
            type="submit"
            bsStyle="success" />
        </form>
      </Panel>
    );
  }
});

module.exports = Component;
