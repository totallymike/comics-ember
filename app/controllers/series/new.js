import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function () {
      var series = this.get('model')
      this.store.createRecord('series', {
        title: series.title,
        volume: series.volume
      })
    }
  }
});
