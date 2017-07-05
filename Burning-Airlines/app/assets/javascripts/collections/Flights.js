var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: "/flights",
  model: app.Flight,

  initialize: function(){
    this.on("Add", function( flight  ){
      var name = flight.get('name');
      console.log('A new flight collection ' + name + ' was created');

    });

  }


});
