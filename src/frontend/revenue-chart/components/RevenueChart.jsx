var React = require('react');
var Rickshaw = require('rickshaw');
var Reflux = require('reflux');
var Store = require('../store');
var Actions = require('../actions');

var Component = React.createClass({
  mixins: [
    Reflux.connect(Store, 'series'),
  ],

  renderChart: function () {
    var container = this.refs.chart.getDOMNode();

    // Clear out any existing chart.
    container.innerHTML = '';

    var chart = new Rickshaw.Graph({
      element: container,
      series: this.state.series
    });

    chart.render();
  },

  componentDidMount: function () {
    this.renderChart();
  },

  componentDidUpdate: function () {
    this.renderChart();
  },

  updateChart: function () {
    Actions.update();
  },

  render: function () {
    return (
      <div>
        <div ref="chart"></div>
        <button className="btn btn-primary" onClick={this.updateChart}>Update</button>
      </div>
    );
  }
});

module.exports = Component;
