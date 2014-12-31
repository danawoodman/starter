var React = require('react');
var Link = require('react-router').Link;
var Button = require('react-bootstrap').Button;
var ButtonGroup = require('react-bootstrap').ButtonGroup;
var OverlayMixin = require('react-bootstrap').OverlayMixin;
var FontAwesome = require('../../font-awesome/component').FontAwesome;
var CustomerActions = require('../actions').Customers;
var EditModal = require('./EditForm');

var Component = React.createClass({
  mixins: [OverlayMixin],

  onDeleteCustomer: function (e) {
    e.preventDefault();
    CustomerActions.destroy(this.props.id, function (err, message) {
      console.log('delete customer', err, message);
    });
  },

  onEditCustomer: function () {
    CustomerActions.edit(this.props.id);
  },

  onRequestHide: function (e) {
    CustomerActions.stopEditing(this.props.id);
  },

  renderOverlay: function () {
    if (!this.props.editing) {
      return <span />;
    }

    return (
      <EditModal
        {...this.props}
        onRequestHide={this.onRequestHide} />
    );
  },

  render: function () {
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
