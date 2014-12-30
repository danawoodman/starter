var React = require('react');
var RevenueChart = require('../revenue-chart/components/RevenueChart');

var Dashboard = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="page-header">Welcome home!</h1>
        <RevenueChart />
      </div>
    );
  }
});

module.exports = Dashboard;
