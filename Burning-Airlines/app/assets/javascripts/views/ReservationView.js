var app = app || {};

app.RervationView = Backbone.View.extend({

  el: "#app",


  render: function () {
    var rawTemplate = $('#ReservationViewTemplate').html();
    var template = _.template( rawTemplate);

    var markup = template( this.model.attributes );

    this.$el.html( markup );

  }


});
