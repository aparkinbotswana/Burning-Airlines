var app = app || {};


app.UserView = Backbone.View.extend({
  el: "#app",




  render: function () {
    // var rawTemplate = $('#GridViewTemplate').html();
    var template = _.template($("#UserViewTemplate").html(), {} );
    this.$el.html( template );

  },
});
