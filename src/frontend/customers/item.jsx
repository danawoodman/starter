var React = require('react');
var Link = require('react-router').Link;

var CustomerItem = React.createClass({
  render: function () {
    return (
      <li>
        <strong><Link to="customer" params={{userID: this.props.id}}>{this.props.name}</Link></strong> <span className="text-muted">{this.props.email}</span>
      </li>
    );
  }
});

module.exports = CustomerItem;
