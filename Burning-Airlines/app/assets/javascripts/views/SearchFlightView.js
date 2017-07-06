var app = app || {};

app.SearchFlightView = Backbone.View.extend({

  tagName: "tr",

  events: {
    "click": "showFlight",

  },

  showFlight: function () {
    var id = this.model.get('id');
    app.router.navigate("/flights/" + id, true)
  },

  render: function () {
    var rawTemplate = $('#FlightInfoTemplate').html();
    // this.$el.html( template );
    var template = _.template( rawTemplate);

    var markup = template( this.model.attributes );
    console.log(markup);
    $('#flights').empty();
    this.$el.html( markup );
    this.$el.appendTo( "#flights" );

  }
});
