var app = app || {};


app.GridView = Backbone.View.extend({
  el: "#app",

  events: {
    "click #reservations": "showReservation",
  },

  showReservation: function(){
    console.log(app.reservations);

  //   this.collection.each(function ( reservation ){
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




  // events: {
  //   'click .seat': 'selectSeat'
  //
  //   "click #buy": "buyticket",
  // },



 render: function () {


   // var rawTemplate = $('#GridViewTemplate').html();
    var template = _.template($("#GridViewTemplate").html(), {} );
    var markup = template( this.model.attributes );

   this.$el.html( markup );

   // renderGrid(4,6);




  var flight = this.model.attributes.id;

  var reservations = this.model.attributes.reservations;
  var seatsReserved = _.pluck(reservations, 'seatid');
  console.log(seatsReserved);

  var rowsize = this.model.attributes.airplane.row;
  var colsize = this.model.attributes.airplane.column;
  var alphabet = ["A","B","C","D","E","F","G"];

 console.log(rowsize, colsize);

 var row = _.range(1, rowsize+1);
  var col = _.range(1, colsize+1);

 _.each(row, function(rowid) {
    var $row = $('<tr>');
    $row.appendTo("#table");
    _.each(col, function(colid) {
      var $col = $('<td>');



     // $('<img class="seat">').appendTo($col).attr('colid', colid).attr('rowid', rowid);
      $col.addClass('seat').attr('seatid', alphabet[colid - 1] + rowid);

      if ( _.includes(seatsReserved, $col.attr('seatid')) ) {
        $col.addClass('bought');
      }



     // $('<img class="seat" src="assets/seatempty.png">').appendTo($col).attr('colid', colid).attr('rowid', rowid);
      $col.appendTo($row);
    });
  });


  var $seatSelect;


 // for (var rows = 0; rows < rowsize; rows++) {
  //
  //   // set each row to be a new empty array (i.e. of column values)
  //
  //   for (var cols = 0; cols < colsize; cols++) {
  //     var $cell = $('<div class="cell">');
  //     $('<img class="seat" src="assets/seatempty.png">').appendTo($cell);
  //     $cell.attr('rows', rows).attr('cols', cols);
  //     $('#table').append($cell);
  //   }

   // var tableWidth = 400 + (rowsize * 10);
    // var tableHeight = 400;
    // $('#table').css('width', tableWidth + 'px');
    // $('#table').css('height', tableHeight + 'px');
  //
  //   };


    var currentseat;

   $('.seat').click(function(){

     if ($(this).hasClass('bought')){
        return;
      };




     // $('<img class="seat" src="assets/seatempty.png">').appendTo($col).attr('colid', colid).attr('rowid', rowid);

     // $(this).attr('src',"assets/seattaken.png");
      // $(this).addClass( "active");

     $(".seat").not(this).removeClass('active');
      $(this).toggleClass('active');
      console.log($(this).attr('seatid'));

      $seatSelect = $(this).attr('seatid');

      var seatInfo = $('#seatInfo').html("Selected Seat:" + $seatSelect);
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

     console.log('buy', $seatSelect);
     var seatInfo = $('#seatInfo').html("Purchased Seat is " + $seatSelect);

     var reservation = new app.Reservation({
        seatid: $seatSelect,
        flight_id: flight
      });
      reservation.save();

      app.reservations.add(reservation);
      // debugger;
      // console.log(app.reservations);
      // app.reservations.fetch();

   });









 }


 // buyticket: function(){
  //   console.log("buyticket", $colselect, $rowselect);
  //
  //
  //
  // }






});
