import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function () {
      var series = this.get('model')
      return series.save()
    }
  }
});
