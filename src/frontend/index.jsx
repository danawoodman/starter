var console = require('console-browserify');
var io = require('socket.io-client');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var App = require('./layout/app');
var Customers = require('./customers/component').Customers;
var CustomerDetail = require('./customers/component').Detail;
var CustomerSection = require('./customers/component').Section;
var Dashboard = require('./dashboard/component').Dashboard;
var NotFound = require('./404');

//<Redirect from="company" to="about" />
var routes = (
  <Route name="app" handler={App} path="/">
    <DefaultRoute handler={Dashboard} />
    <Route path="/" name="dashboard" handler={Dashboard} />
    <Route name="customers" handler={CustomerSection}>
      <Route path=":userID" name="customer" handler={CustomerDetail} />
      <DefaultRoute handler={Customers} />
    </Route>
    <NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(routes, /*Router.HistoryLocation,*/ function (Handler) {
  React.render(<Handler />, document.body);
});
