import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.ajax({url: "http://localhost:3000/classrooms", dataType: "json", type: "GET"})
  },
  setupController: function(controller, model) {
    controller.set('model', model)
  },
  actions: {
    addClassroom: function() {
      var self = this;
      var classroom = {
            classroom: {
                name: self.controller.get('name'),
                description: self.controller.get('description')
            }
          };
      Ember.$.ajax({
        url: "http://localhost:3000/classrooms", 
        data: classroom,
        dataType: "json",
        type: "POST",
        success: function(data) {
          self.controller.get('model').pushObject(data);
          self.controller.set('name', null);
          self.controller.set('description', null);
        }
      })
    },
    deleteClassroom: function(classroom) {
      var self = this;
      Ember.$.ajax({
        url: "http://localhost:3000/classrooms/" + classroom.id,
        type: "DELETE",
        success: function(data) {
          self.controller.get('model').removeObject(classroom);
        }
      })
    }
  }
});
