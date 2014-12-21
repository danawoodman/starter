var React = require('react');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;

var Component = React.createClass({
  onHide: function (e) {
    e.preventDefault();
    alert('hide!');
    return;
  },

  // TODO: On submit, trigger updating of customer...

  render: function () {
    var title = "Edit " + this.props.name;

    return (
      <Modal title={title}
        backdrop={false}
        animation={false}
        onRequestHide={this.props.onClose}>
        <div className="modal-body">
          <Input
            type="text"
            value={this.props.name}
            placeholder="Full name..."
            label="Full Name"
            ref="name" />
          <Input
            type="email"
            value={this.props.email}
            placeholder="Email address..."
            label="Email"
            ref="email" />
        </div>
        <div className="modal-footer">
          <Button onClick={this.props.onClose}>Close</Button>
          <Button bsStyle="primary" onClick={this.props.onSubmit}>Save changes</Button>
        </div>
      </Modal>
    );
  }
});

module.exports = Component;
