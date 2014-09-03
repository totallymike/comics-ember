import DS from 'ember-data';

var Issue = DS.Model.extend({
  number: DS.attr('number'),
  series: DS.belongsTo('series'),
  pages: DS.hasMany('page', { async: true })
})

Issue.reopenClass({
  FIXTURES: [
    { id: 1, number: 1, series: 1, pages: [1, 2, 3] },
    { id: 2, number: 2, series: 1, pages: [4, 5, 6] },
    { id: 3, number: 3, series: 1, pages: [7, 8, 9] }
  ]
})

export default Issue