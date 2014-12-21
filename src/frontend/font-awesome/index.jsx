var React = require('react');

var Component = React.createClass({
  getDefaultProps: function () {
    return {
      icon: '',
      size: '',
      spin: false,
      border: false,
      flipVertical: false,
      flipHorizontal: false,
      rotate90: false,
      rotate180: false,
      rotate270: false,
      invert: false,
    };
  },

  render: function () {
    var classes = 'fa fa-' + this.props.icon;

    // TODO: Add stacking a ULs

    if (this.props.size) {
      classes += ' ' + this.props.size;
    }

    if (this.props.spin) {
      classes += ' fa-spin';
    }

    if (this.props.border) {
      classes += ' fa-border';
    }

    if (this.props.flipHorizontal) {
      classes += ' fa-flip-horizontal';
    }

    if (this.props.flipVertical) {
      classes += ' fa-flip-horizontal';
    }

    if (this.props.rotate90) {
      classes += ' fa-rotate-90';
    }

    if (this.props.rotate180) {
      classes += ' fa-rotate-180';
    }

    if (this.props.rotate270) {
      classes += ' fa-rotate-270';
    }

    if (this.props.inverse) {
      classes += ' fa-inverse';
    }

    return (
      <i className={classes}></i>
    );
  }
});

module.exports = Component;
