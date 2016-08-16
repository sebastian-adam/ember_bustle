import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  image: DS.attr(),
  body: DS.attr(),
  category: DS.attr(),
  date: DS.attr()
});
