var React = require('react');
var Link = require('react-router').Link;
var FontAwesome = require('../font-awesome/index');
var CustomerActions = require('./actions');

var CustomerItem = React.createClass({
  onDeleteCustomer: function (e) {
    e.preventDefault();
    CustomerActions.customerDelete(this.props.id);
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
          <a href="#" className="text-danger" onClick={this.onDeleteCustomer}>
            <FontAwesome icon="remove"  />
          </a>
        </td>
      </tr>
    );
  }
});

module.exports = CustomerItem;
