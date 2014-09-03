import Ember from 'ember';

export default Ember.Component.extend({
  pageUrl: function () {
    return "/img/" + this.get('model.id')
  }.property('model.id')
});
