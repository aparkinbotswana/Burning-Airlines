var app = app || {};

app.ReservationView = Backbone.View.extend({

  el: "#app",


  render: function () {
    var rawTemplate = $('#ReservationViewTemplate').html();
    var template = _.template( rawTemplate);

    var markup = template( this.model.attributes );

    this.$el.html( markup );

  }




});
