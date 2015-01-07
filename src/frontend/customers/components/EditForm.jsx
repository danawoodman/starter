var React = require('react');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;
var CustomerActions = require('../actions').Customers;

var Component = React.createClass({

  getPropTypes: {
    id: React.PropTypes.number,
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired
  },

  getInitialState: function () {
    return {
      name: '',
      email: ''
    };
  },

  componentDidMount: function () {
    this.setState({
      id: this.props.id,
      name: this.props.name,
      email: this.props.email
    });
  },

  onSubmit: function (e) {
    if (e) { e.preventDefault(); }
    console.log('Update customer:', this.state);
    CustomerActions.update(this.state);
  },

  handleChangeName: function (e) {
    this.setState({ name: e.target.value });
  },

  handleChangeEmail: function (e) {
    this.setState({ email: e.target.value });
  },

  render: function () {
    var title = "Edit " + this.props.name;

    return (
      <Modal
        title={title}
        animation={false}
        onRequestHide={this.props.onRequestHide}>
        <form onSubmit={this.onSubmit}>
          <div className="modal-body">
            <Input
              type="text"
              value={this.state.name}
              placeholder="Full name..."
              label="Full Name"
              autofocus
              onChange={this.handleChangeName} />
            <Input
              type="email"
              value={this.state.email}
              placeholder="Email address..."
              label="Email"
              onChange={this.handleChangeEmail} />
          </div>
          <div className="modal-footer">
            <Button
              onClick={this.props.onRequestHide}>
              Close</Button>
            <Button
              type="submit"
              bsStyle="success"
              onClick={this.onSubmit}>
              Save Changes</Button>
          </div>
        </form>
      </Modal>
    );
  }
});

module.exports = Component;
