var app = app || {};

app.GridView = Backbone.View.extend({
  el: "#app",

  render: function () {
    var rawTemplate = $('#GridViewTemplate').html();
    var template = _.template( rawTemplate);

    var markup = template( this.model.attributes );

    this.$el.html( markup );

  }




});
