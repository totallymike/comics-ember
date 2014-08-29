import DS from 'ember-data';

var Issue = DS.Model.extend({
  number: DS.attr('number'),
  series: DS.belongsTo('series')
})

Issue.reopenClass({
  FIXTURES: [
    { id: 1, number: 1, series: 1 },
    { id: 2, number: 2, series: 1 },
    { id: 3, number: 3, series: 1 }
  ]
})

export default Issue