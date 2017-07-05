var app = app || {};

app.SearchFlightView = Backbone.View.extend({

  el: "#app",

  events: {
    "click button": "searchFlights"
  },

  searchFlights: function () {
    var $from = $('#from').val();
    var $to = $('#to').val();
    console.log($from, $to);

    var results = _.filter(app.flights.models, function() {
      return flight.get('from') === $from && flight.get('to') === $to;
    });

    console.log(results);

  },

  render: function () {
    var name = this.model.get( 'name' );
    this.$el.html( name )
    this.$el.appendTo("#flights");

  }
});
