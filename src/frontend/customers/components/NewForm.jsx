var React = require('react');
var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;
var Modal = require('react-bootstrap').Modal;
var CustomerActions = require('../actions').Customers;
var CreateStateActions = require('../actions').CreateState;

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
  },

  render: function () {
    var title = 'New Customer';

    return (
      <Modal
        title={title}
        animation={false}
        onRequestHide={this.props.onRequestHide}>
        <form onSubmit={this.onSubmit}>
          <div className="modal-body">
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
          </div>
          <div className="modal-footer">
            <Button
              onClick={this.props.onRequestHide}>
              Close</Button>
            <Button
              type="submit"
              bsStyle="success"
              onClick={this.onSubmit}>
              Save changes</Button>
          </div>
        </form>
      </Modal>
    );
  }
});

module.exports = Component;
