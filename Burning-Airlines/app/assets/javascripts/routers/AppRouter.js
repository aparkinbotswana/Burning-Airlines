var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'app': 'index',
    'grid': 'showGrid',
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
console.log('sup you');
    var fv = new app.FlightView({
      model: flight

    });

    fv.render();


  },

  showGrid: function (  ){
    console.log("this is the grid view, you handsome devil.");
    // var flight = app.flights.get( id );

    var gv = new app.GridView({
      // model: airplane

    });

    gv.render();


  }


});
