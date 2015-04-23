var Reflux = require('reflux');

SampleActions = Reflux.createActions({
  fetch: {asyncResult: true},
  reset: {}
});

SampleActions.fetch.listen(function() {
  setTimeout(function() {
    SampleActions.fetch.completed();
  }, 2000);
});

module.exports = SampleActions;
