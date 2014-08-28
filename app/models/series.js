import DS from 'ember-data';

var Series = DS.Model.extend({
  title: DS.attr('string'),
  volume: DS.attr('number')
})

Series.reopenClass({
  FIXTURES: [
    { id: 1, title: 'Action Comics', volume: 1 }
  ]
})

export default Series