var app = app || {};

app.SearchFlightView = Backbone.View.extend({

  tagName: "div",

  // events: {
  //   "click button": "searchFlights"
  // },

  // searchFlights: function () {
  //   var $from = $('#from').val();
  //   var $to = $('#to').val();
  //   console.log($from, $to);
  //
  //   var results = _.filter(app.flights.models, function() {
  //     return flight.get('from') === $from && flight.get('to') === $to;
  //   });
  //
  //   console.log(results);
  //
  //   _.each(results, function() {
  //     var sv = new app.
  //   });
  //
  // },

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
