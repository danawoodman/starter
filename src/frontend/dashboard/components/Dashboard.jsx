var React = require('react');
var Reflux = require('reflux');
var Griddle = require('griddle-react');
var Store = require('../../revenue-chart/store');
var RevenueChart = require('../../revenue-chart/component').RevenueChart;

var Component = React.createClass({
  mixins: [Reflux.connect(Store, 'series')],

  render: function () {
    return (
      <div>
        <h1 className="page-header">Welcome home!</h1>
        <RevenueChart />
        <h2>Dashboard Data</h2>
        <Griddle
          showFilter={true}
          results={this.state.series}
          tableClassName="table table-striped" />
      </div>
    );
  }
});

module.exports = Component;
