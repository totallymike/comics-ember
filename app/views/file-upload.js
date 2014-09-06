import Ember from 'ember';

export default Ember.View.extend({
  content: null,
  tagName: 'input',
  attributeBindings: ['type'],
  type: 'file',

  change: function (event) {
    if (event.target.files.length > 0) {
      this.set('content', event.target.files[0])
    } else {
      this.set('content', null)
    }
  }
});
