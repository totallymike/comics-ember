import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function () {
      var series = this.get('model')
      series = this.store.createRecord('series', {
        title: series.title,
        volume: series.volume
      })

      var transitionToSeries = function (series) {
        console.log(series)
        this.transitionToRoute('series.show', series)
      }.bind(this)

      var failure = function (err) {
        console.log(err)
      }

      series.save().then(transitionToSeries).catch(failure)
    }
  }
});
