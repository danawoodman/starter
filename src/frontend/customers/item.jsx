var React = require('react');
var Link = require('react-router').Link;

var CustomerItem = React.createClass({
  render: function () {
    return (
      <tr>
        <td>
          <strong><Link to="customer" params={{userID: this.props.id}}>{this.props.name}</Link></strong>
        </td>
        <td>
          <span className="text-muted">{this.props.email}</span>
        </td>
      </tr>
    );
  }
});

module.exports = CustomerItem;
