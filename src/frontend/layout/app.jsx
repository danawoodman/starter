var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div className="container">
        <header>
          <ul className="nav nav-pills">
            <li><Link to="dashboard">Dashboard</Link></li>
            <li><Link to="customers">Customers</Link></li>
          </ul>
        </header>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = App;
