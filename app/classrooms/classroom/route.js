import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: "classroom",
  
  model: function(params) {
    return Ember.$.ajax({
      url: "http://localhost:3000/classrooms/" + params.classroom_id,
      dataType: "json",
      type: "GET"
    })
  }
});
