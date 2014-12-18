var console = require('console');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var App = require('./layout/app');
var Customers = require('./customers/customers');
var Customer = require('./customers/customer');
var CustomerSection = require('./customers/section.component');
var Dashboard = require('./dashboard');
var NotFound = require('./404');


var routes = (
  <Route name="app" handler={App} path="/">
    <DefaultRoute handler={Dashboard} />
    <Route path="/" name="dashboard" handler={Dashboard} />
    <Route name="customers" handler={CustomerSection}>
      <Route path=":userID" name="customer" handler={Customer} />
      <DefaultRoute handler={Customers} />
    </Route>
    <NotFoundRoute handler={NotFound} />
  </Route>
);
//<Redirect from="company" to="about" />

Router.run(routes, /*Router.HistoryLocation,*/ function (Handler) {
  React.render(<Handler />, document.body);
});
