var app = app || {};

app.FlightView = Backbone.View.extend({

  el: "#flightname",


  render: function () {
    var rawTemplate = $('#FlightViewTemplate').html();
    var template = _.template( rawTemplate);

    var markup = template( this.model.attributes );

    this.$el.html( markup );

  }


});
