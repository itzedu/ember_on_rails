import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return Ember.$.ajax({
      url: "http://localhost:3000/classrooms/" + params.classroom_id,
      dataType: "json",
      type: "GET"
    })
  },
  actions: {
    updateClassroom: function(model) {
      var self = this;
      var classroom = {
            classroom: {
                name: model.name,
                description: model.description
            }
          };
      Ember.$.ajax({
        url: "http://localhost:3000/classrooms/" + model.id,
        type: "PUT",
        data: classroom,
        success: function(data) {
          console.log("Update successful", data);
          self.transitionTo('classrooms');
        }
      })
    },
    close: function() {
      this.transitionTo('classrooms');
    }
  }
});
