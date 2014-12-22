var React = require('react');
var Link = require('react-router').Link;
var Button = require('react-bootstrap').Button;
var ButtonGroup = require('react-bootstrap').ButtonGroup;
var FontAwesome = require('../../font-awesome/index');
var CustomerActions = require('../actions');
var EditModal = require('./EditForm');

var Component = React.createClass({
  getInitialState: function () {
    return {
      editing: false
    };
  },

  onDeleteCustomer: function (e) {
    e.preventDefault();
    CustomerActions.customerDelete(this.props.id);
  },

  onEditCustomer: function () {
    console.log('Edit customer');
    this.setState({ editing: true });
  },

  onCancelEditing: function (e) {
    console.log('Cancel editing customer');
    this.setState({ editing: false });
  },

  onUpdateCustomer: function (e) {
    e.preventDefault();
    alert('update customer: ' + this.props.name);
    this.setState({ editing: false });
    return;
  },

  render: function () {
    // If the user is editing the customer, then we
    // show the edit modal.
    var editModal;
    if (this.state.editing) {
      editModal = (
        <EditModal {...this.props} onSubmit={this.onUpdateCustomer} onClose={this.onCancelEditing} />
      );
    }

    // Show just the customer name if they're not persisted,
    // otherwise link to the customer detail page.
    var customerLink;
    if (this.props.id) {
      customerLink = <Link to="customer" params={{userID: this.props.id}}>{this.props.name}</Link>;
    } else {
      customerLink = this.props.name;
    }

    return (
      <tr>
        <td>
          <strong>{customerLink}</strong> <span className="text-muted">{this.props.saving ? 'Saving...' : ''}</span>
        </td>
        <td>
          <a href={'mailto:' + this.props.email}>{this.props.email}</a>
        </td>
        <td>
          {editModal}
          <ButtonGroup bsSize="small">
            <Button onClick={this.onEditCustomer}>
              <FontAwesome icon="pencil" />
            </Button>
            <Button bsStyle="danger" onClick={this.onDeleteCustomer}>
              <FontAwesome icon="remove" />
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  }
});

module.exports = Component;