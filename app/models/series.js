import DS from 'ember-data';

var Series = DS.Model.extend({
  title: DS.attr('string'),
  volume: DS.attr('number'),

  issues: DS.hasMany('issue', { async: true })
})

Series.reopenClass({
  FIXTURES: [
    { id: 1, title: 'Action Comics', volume: 1, issues: [1, 2, 3] }
  ]
})

export default Series