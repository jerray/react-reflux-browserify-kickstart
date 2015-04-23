var Reflux = require('reflux');
var SampleActions = require('../actions/sample');

SampleStore = Reflux.createStore({
  listenables: [SampleActions],

  init: function() {
    this.data = {};
  },
  getInitialState: function() {
    return this.data;
  },

  onFetch: function() {
    this.data.loading = true;
    this.trigger(this.data);
  },
  onFetchCompleted: function() {
    this.data.loading = false;
    this.trigger(this.data);
  },
  onFetchFailed: function() {
    this.data.loading = false;
    this.trigger(this.data);
  },

  onReset: function() {
    this.data = {};
    this.trigger(this.data);
  }
});

module.exports = SampleStore;
