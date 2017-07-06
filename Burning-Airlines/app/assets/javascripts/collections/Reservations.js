var app = app || {};

app.Reservations = Backbone.Collection.extend({
  url: "/reservations",
  model: app.Reservation,

  initialize: function(){
    this.on("add", function( reservation  ){
      var name = reservation.get('name');
      console.log('A new reservations collection ' + name + ' was created');

    });
  }



});
