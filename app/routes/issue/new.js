import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var model = this.store.createRecord('issue')
    this.store.find('series', params.seriesId).then(function (series) {
      model.set('series', series)
    })
    return model
  }
});
