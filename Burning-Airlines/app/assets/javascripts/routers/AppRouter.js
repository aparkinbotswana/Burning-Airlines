var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'app': 'index',
    'grid': 'showGrid',
    // 'users': 'showUser',
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

    //
    // var av = new app.AirplaneView({
    //   model: airplane
    //
    // });
    //
    // av.render();

    var gv = new app.GridView({
      // model: airplane

    });

    gv.render();


  },

  // showGrid: function (  ){
  //   console.log("this is the grid view, you handsome devil.");
  //
  //   var gv = new app.GridView({
  //
  //   });
  //
  //   gv.render();
  //
  //
  // },

  showUser: function(  ){
    console.log("this is the user view, you beautiful man.");

    var uv = new app.UserView({
    });

    uv.render();


  }



});
