import Ember from 'ember';

export default Ember.Component.extend({
  updateArticle: false,
  actions: {
    updateArticleFormShow() {
      this.set('updateArticle', true);
    },

    update(article) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        image: this.get('image'),
        body: this.get('body'),
        category: this.get('category'),
        date: this.get('date')
      };
      this.set('updateArticle', false);
      this.sendAction('update', article, params);
    }
  }
});
