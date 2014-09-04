import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FrontendENV.locationType
});

Router.map(function() {
  this.resource('series', function () {
    this.route('new')
  })
  this.resource('series.show', { path: '/series/:series_id' })
  this.resource('series.edit', { path: '/series/:series_id/edit' })
  this.resource('issue', { path: '/issue/:issue_id' }, function () {
    this.resource('page', { path: 'page/:page_id' })
  })
  this.resource('issue.new', { path: '/issue/new' })
});

export default Router;
