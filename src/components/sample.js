var React = require('react');
var Reflux = require('reflux');
var SampleActions = require('../actions/sample');
var SampleStore = require('../stores/sample');

var SampleComponent = React.createClass({
  mixins: [Reflux.connect(SampleStore)],

  onClick: function(e) {
    e.preventDefault();
    SampleActions.fetch();
  },

  loading: function() {
    if (this.state.loading) {
      return 'loading';
    } else {
      return 'ready';
    }
  },

  render: function() {
    return (
      <div>
        <h1>React Sample</h1>
        <p>{this.loading()}</p>
        <button onClick={this.onClick}>fetch</button>
      </div>
    );
  }
});

module.exports = SampleComponent;
