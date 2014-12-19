var React = require('react');
var Link = require('react-router').Link;
var FontAwesome = require('../font-awesome/index');
var CustomerActions = require('./actions');

var CustomerItem = React.createClass({
  onRemoveCustomer: function (e) {
    e.preventDefault();
    CustomerActions.customerDelete(this.props.id);
  },

  render: function () {
    return (
      <tr>
        <td>
          <strong><Link to="customer" params={{userID: this.props.id}}>{this.props.name}</Link></strong> <span className="text-muted">{this.props.saving ? 'Saving...' : ''}</span>
        </td>
        <td>
          <a href={'mailto:' + this.props.email}>{this.props.email}</a>
        </td>
        <td>
          <a href="#" onClick={this.onRemoveCustomer}><FontAwesome icon="remove"  /></a>
        </td>
      </tr>
    );
  }
});

module.exports = CustomerItem;
