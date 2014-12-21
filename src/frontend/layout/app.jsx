var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var ConnectionStatus = require('../connection-status/component');
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
//var NavItem = require('react-bootstrap').NavItem;

var App = React.createClass({
  render: function () {
    var brand = <Link to="dashboard">Brand</Link>;

    return (
      <div className="container">
        <Navbar brand={brand} fixedTop="true">
          <Nav>
            <li><Link to="dashboard">Dashboard</Link></li>
            <li><Link to="customers">Customers</Link></li>
          </Nav>
          <ConnectionStatus className="connection-status navbar-text navbar-right" />
        </Navbar>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = App;
