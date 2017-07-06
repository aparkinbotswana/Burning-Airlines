var app = app || {};


app.GridView = Backbone.View.extend({
  el: "#app",

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


      // $('<img class="seat">').appendTo($col).attr('colid', colid).attr('rowid', rowid);
      $col.addClass('seat').attr('colid', colid).attr('rowid', rowid);

      // $('<img class="seat" src="assets/seatempty.png">').appendTo($col).attr('colid', colid).attr('rowid', rowid);
      $col.appendTo($row);
    });
  });

  var $seats = $('<p>').html(seatsLeft);
  $seats.appendTo('#seat')
  console.log(seatsTaken);
  var $colselect;
  var $rowselect;

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
    var alphabet = ["a","b","c","d"];
<<<<<<< HEAD

=======
      var currentseat;
>>>>>>> 96b581d2f506207080ff810d6d5a6d8b4c39635d

    $('.seat').click(function(){

      if ($(this).hasClass('bought')){
        return;
      };




      // $('<img class="seat" src="assets/seatempty.png">').appendTo($col).attr('colid', colid).attr('rowid', rowid);

      // $(this).attr('src',"assets/seattaken.png");
      // $(this).addClass( "active");

      $(".seat").not(this).removeClass('active');
      $(this).toggleClass('active');

      console.log($(this));
      console.log($(this).attr('colid'));
      console.log($(this).attr('rowid'));
      seatsTaken += 1
      console.log('there are ' + seatsTaken + ' seats taken');
      $colselect = alphabet[($(this).attr('colid')) - 1] ;
      $rowselect = ($(this).attr('rowid'));
      console.log("col:" + $colselect + "row:" + $rowselect);
      var seatInfo = $('#seatInfo').html("Selected Seat:" + $colselect + $rowselect);
      currentseat = $(this);
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
      console.log(app.reservations);
      app.reservations.fetch();


    });









  }


  // buyticket: function(){
  //   console.log("buyticket", $colselect, $rowselect);
  //
  //
  //
  // }






});
