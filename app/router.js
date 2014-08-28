import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FrontendENV.locationType
});

Router.map(function() {
  this.resource('series', function () {
    this.route('show', { path: '/:series_id' })
  })
});

export default Router;
