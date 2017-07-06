var app = app || {};


app.GridView = Backbone.View.extend({
  el: "#app",

  events: {
    "click #reservations": "showReservation",
  },

  showReservation: function(){
    console.log(app.reservations);

    // this.collection.each(function ( reservation ){
   //
  //     var rlv = new app.ReservationView({
  //       model: reservation
   //
  //     });
   //
  //     rlv.render();
  //  };

  //  app.router.navigate("/reservation", true)

   _.each(app.reservations.models, function(reservation) {
     var rv = new app.ReservationView({
       model: reservation
     });
     rv.render();
   });


  },

 render: function () {


   // var rawTemplate = $('#GridViewTemplate').html();
    var template = _.template($("#GridViewTemplate").html(), {} );
    var markup = template( this.model.attributes );

   this.$el.html( markup );


  var flight = this.model.attributes.id;
  var rowsize = this.model.attributes.airplane.row;
  var colsize = this.model.attributes.airplane.column;
  var totalSeats = rowsize * colsize;
  var seatsTaken = 0;
  var seatsLeft = totalSeats - seatsTaken;

 console.log(rowsize, colsize);

 var row = _.range(1, rowsize+1);
  var col = _.range(1, colsize+1);

 _.each(row, function(rowid) {
    var $row = $('<tr>');
    $row.appendTo("#table");
    _.each(col, function(colid) {
      var $col = $('<td>');


      $col.addClass('seat').attr('colid', colid).attr('rowid', rowid);

      $col.appendTo($row);
    });
  });

  var $colselect;
  var $rowselect;


    var alphabet = ["A","B","C","D","E","F","G"];
      var currentseat;

   $('.seat').click(function(){

     if ($(this).hasClass('bought')){
        return;
      };

     $(".seat").not(this).removeClass('active');
      $(this).toggleClass('active');

     console.log($(this));
      console.log($(this).attr('colid'));
      console.log($(this).attr('rowid'));
      seatsTaken += 1
      console.log('there are ' + seatsTaken + ' seats taken');
      $colselect = alphabet[($(this).attr('colid')) - 1] ;
      $rowselect = $(this).attr('rowid');
      console.log("col:" + $colselect + "row:" + $rowselect);
      var seatInfo = $('#seatInfo').html("Selected Seat:" + $colselect + $rowselect);
      currentseat = $(this);

     if (!currentseat.hasClass('active')){
        $('#buy').attr("disabled", true);
      } else {
        $('#buy').removeAttr("disabled");
      };


     return currentseat;
      // var currentimage = $(this);

   });



   $('#buy').click(function() {

     if ($(currentseat).hasClass('bought')){
        return;
      };


     $(currentseat).addClass('bought');

     // debugger;

     console.log('buy', $colselect, $rowselect);
      var seatInfo = $('#seatInfo').html("Purchased Seat is " + $colselect + $rowselect);

     var reservation = new app.Reservation({
        row: $rowselect,
        column: $colselect,
        flight_id: flight
      });
      reservation.save();
      app.reservations.add(reservation);
      // debugger;
      // console.log(app.reservations);
      // app.reservations.fetch();

   });
 }
});
