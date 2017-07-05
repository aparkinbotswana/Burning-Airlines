app.AppView = Backbone.View.extend({
  el: "#app",

  events: {
    'click button': 'searchFlights'
  },

  searchFlights: function() {
    console.log('worked');
    var $from = $('#from').val();
    var $to = $('#to').val();
    console.log($from, $to);

    var results = _.filter(app.flights.models, function(flight) {
      return flight.get('from') === $from && flight.get('to') === $to;
    });

    console.log(results.attributes);

    _.each(results, function(flight) {
      var sv = new app.SearchFlightView({
        model: flight
      });
      sv.render();
    });


  },

  render: function() {

    var template = $('#AppViewTemplate').html();
    this.$el.html( template );
    this.collection.each(function ( flight ){

      var flv = new app.FlightListView({
        model: flight

      });

      flv.render();

    });

  }


});
