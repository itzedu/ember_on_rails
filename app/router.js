import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('classrooms', function() {
    this.route('edit', {path: ":classroom_id/edit"});
    this.route('classroom', {path: ":classroom_id"}, function() {
      this.route('students');
    });
  });
});

export default Router;
