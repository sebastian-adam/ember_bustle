import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    commentSubmit() {
      var params = {
        name: this.get('name'),
        email: this.get('email'),
        comment: this.get('comment')
      };
      this.set('name', '');
      this.set('email', '');
      this.set('comment', '');
      this.sendAction("commentSubmit", params);
    }
  }
});
