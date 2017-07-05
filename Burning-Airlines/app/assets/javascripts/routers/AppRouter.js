var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'app': 'index',
    'app/:id': 'showFlight'
  },

  index: function () {
    // render the index view
    console.log('Index action started');
    var af = new app.AppView({
      collection: app.flights
    });
    af.render();

  },

  showFlight: function ( id ){
    var flight = app.flights.get( id );

    var fv = new app.FlightView({
      model: flight

    });

    fv.render();


  }

});
