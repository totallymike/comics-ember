import DS from 'ember-data';

var Page = DS.Model.extend({
  issue: DS.belongsTo('issue')
});

Page.reopenClass({
  FIXTURES: [
    { id: 1, issue: 1 },
    { id: 2, issue: 1 },
    { id: 3, issue: 1 },
    { id: 4, issue: 2 },
    { id: 5, issue: 2 },
    { id: 6, issue: 2 },
    { id: 7, issue: 3 },
    { id: 8, issue: 3 },
    { id: 9, issue: 3 }
  ]
})

export default Page