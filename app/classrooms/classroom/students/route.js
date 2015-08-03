import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var classroom_model = this.controllerFor("classroom").get('model');
    var classroom = { classroom_id: classroom_model.id }
    return Ember.$.ajax({
      url: "http://localhost:3000/students",
      dataType: "json",
      data: classroom,
      type: "GET"
    })
  },
  setupController: function(controller, model) {
    controller.set("model", model)
    controller.set("classroom", this.controllerFor("classroom").get('model'))
  }
});
