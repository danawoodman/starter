var React = require('react');
var CustomerActions = require('./actions');
var Input = require('react-bootstrap').Input;
var Panel = require('react-bootstrap').Panel;

var Component = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();

    CustomerActions.customerCreate({
      id: 32,
      name: this.refs.name.getValue().trim(),
      email: this.refs.email.getValue().trim()
    });

    console.log(this.refs);
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
