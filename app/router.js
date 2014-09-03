import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FrontendENV.locationType
});

Router.map(function() {
  this.resource('series')
  this.resource('series.show', { path: '/series/:series_id' })
  this.resource('issue', { path: '/issue/:issue_id' }, function () {
    this.resource('page', { path: 'page/:page_id' })
  })
});

export default Router;
