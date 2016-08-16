import Ember from 'ember';

export default Ember.Route.extend({
  model() {
   return this.store.findAll('comment');
  },

  actions: {
    commentSubmit(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      this.transitionTo('contact');
    }
  }
});
