import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    save() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        image: this.get('image'),
        body: this.get('body'),
        category: this.get('category'),
        date: this.get('date')
      };
      this.set('addNewArticle', false);
      this.sendAction('save', params);
    }
  }
});
