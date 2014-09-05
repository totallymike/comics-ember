import Ember from 'ember';

export default Ember.ObjectController.extend({
  queryParams: ['seriesId'],
  seriesId: null,
  actions: {
    publish: function () {
      var issue = this.get('model')
      this.store.push(issue)
    }
  }
});
