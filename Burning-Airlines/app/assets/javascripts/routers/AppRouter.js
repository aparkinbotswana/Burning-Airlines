var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'app': 'index',
    'flights/:id': 'showFlight'
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
    console.log('routed show flight');
    var flight = app.flights.get( id );

    var av = new app.AirplaneView({
      model: airplane

    });

    av.render();


  }

});