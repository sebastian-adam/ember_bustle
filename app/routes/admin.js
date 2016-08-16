import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('comment');
  },

  actions: {
    save(params) {
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('index');
    }
  }
});
