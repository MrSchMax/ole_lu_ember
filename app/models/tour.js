import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string')
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "title1"
    },
    {
      id: 2,
      title: "title2"
    },
    {
      id: 3,
      title: "title3"
    }
  ]
});
