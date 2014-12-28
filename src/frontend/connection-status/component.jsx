var React = require('react');
var Reflux = require('reflux');
var capitalize = require('capitalize');
var ConnectionStatusStore = require('./store');
//var ConnectionStatusActions = require('./actions');

var Component = React.createClass({
  mixins: [Reflux.connect(ConnectionStatusStore, 'status')],

  // TODO: Add reconneciton action.
  //onUpdateConnectionStatus: function () {
    //ConnectionStatusActions.refresh();
  //},

  render: function () {
    var className = this.props.className;
    className += this.state.status === 'connected' ? ' connected' : ' disconnected';

    return (
      <p className={className}>{capitalize(this.state.status)}</p>
    );
  }
});

module.exports = Component;
