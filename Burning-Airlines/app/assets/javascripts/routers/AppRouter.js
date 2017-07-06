var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'app': 'index',
    'grid': 'showGrid',
    'flights/:id': 'showFlight',
    'reservation': 'showReservation'


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

    //
    // var av = new app.AirplaneView({
    //   model: airplane
    //
    // });
    //
    // av.render();




    var gv = new app.GridView({
      model: flight
    });

    var fv = new app.FlightView({
      model: flight
    });

    gv.render();
    fv.render();


  },

  showReservation: function(){

    _.each(app.reservations.models, function(reservation) {
      var rv = new app.ReservationView({
        model: reservation
      });
      rv.render();
    });


  }




  // showGrid: function (  ){
  //   console.log("this is the grid view, you handsome devil.");
  //
  //   var gv = new app.GridView({

  //   });
  //
  //   gv.render();
  //
  //
  // }



});
