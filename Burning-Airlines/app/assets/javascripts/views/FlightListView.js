var app = app || {};

app.FlightListView = Backbone.View.extend({

  tagName: "tr",


  events: {
    "click": "showFlight",
  },

  showFlight: function () {
    var id = this.model.get('id');
    app.router.navigate("/flights/" + id, true)
  },

  render: function () {
    $('#reserved').empty();

    var rawTemplate = $('#FlightInfoTemplate').html();
    var template = _.template( rawTemplate);

    var markup = template( this.model.attributes );
    console.log(markup);
    this.$el.html( markup );
    this.$el.appendTo( "#flights" );
  }
});
