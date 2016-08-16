import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      comments: this.store.findAll('comment'),
      articles: this.store.findAll('article')
    });
  },

  actions: {
    save(params) {
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('/article/' + newArticle.id);
    },
    update(article, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          article.set(key,params[key]);
        }
      });
      article.save();
      this.transitionTo('/article/' + article.id);
    },
    delete(article) {
      if (confirm('Are you sure you want to delete this rental?')) {
        article.destroyRecord();
        this.transitionTo('admin');
      }
    }
  }
});
