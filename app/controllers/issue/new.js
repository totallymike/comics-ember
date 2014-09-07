import Ember from 'ember';

export default Ember.ObjectController.extend({
  queryParams: ['seriesId'],
  seriesId: null,
  file: null,
  actions: {
    save: function () {
      var issue = this.get('model')
        , that = this
      issue.set('file', this.get('file'))
      issue.save().then(function (newIsh) {
        that.transitionTo('issue', newIsh)
      })
    }
  }
});
