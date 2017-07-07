var app = app || {};


app.GridView = Backbone.View.extend({
  el: "#app",

  events: {
    "click #reservations": "showReservation",
  },

  showReservation: function(){

  this.$el.empty();
  this.$el.html("<h1>Reservations</h1>");
  app.router.navigate("/reservation", true)


  //   console.log(app.reservations);
   //
  //  _.each(app.reservations.models, function(reservation) {
  //    var rv = new app.ReservationView({
  //      model: reservation
  //    });
  //    rv.render();
  //  });
  },

    render: function() {

    app.reservations.fetch();

    var template = _.template($("#GridViewTemplate").html(), {});
    var markup = template(this.model.attributes);

    this.$el.html(markup);

    var flight = this.model.attributes.id;

    var reservations = this.model.attributes.reservations;
    var seatsReserved = _.pluck(reservations, 'seatid');
    console.log(seatsReserved);

    var rowsize = this.model.attributes.airplane.row;
    var colsize = this.model.attributes.airplane.column;
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    var row = _.range(1, rowsize + 1);
    var col = _.range(1, colsize + 1);

    _.each(row, function(rowid) {
      var $row = $('<tr>');
      $row.appendTo("#table");
      _.each(col, function(colid) {
        var $col = $('<td>');

        $col.addClass('seat').attr('seatid', alphabet[colid - 1] + rowid);

        if (_.includes(seatsReserved, $col.attr('seatid'))) {
          $col.addClass('bought');
        }
        $col.appendTo($row);
      });
    });


    var $seatSelect;

    var currentseat;

    $('.seat').click(function() {

      if ($(this).hasClass('bought')) {
        return;
      };

      $(".seat").not(this).removeClass('active');
      $(this).toggleClass('active');
      console.log($(this).attr('seatid'));

      $seatSelect = $(this).attr('seatid');

      var seatInfo = $('#seatInfo').html("Selected Seat:" + $seatSelect);
      currentseat = $(this);

      if (!currentseat.hasClass('active')) {
        $('#buy').attr("disabled", true);
      } else {
        $('#buy').removeAttr("disabled");
      };

      return currentseat;

    });

    $('#buy').click(function() {

      if ($(currentseat).hasClass('bought')) {
        return;
      };


      $(currentseat).addClass('bought');

      console.log('buy', $seatSelect);
      var seatInfo = $('#seatInfo').html("Purchased Seat is " + $seatSelect);

      var reservation = new app.Reservation({
        seatid: $seatSelect,
        flight_id: flight
      });
      reservation.save();

      app.reservations.add(reservation);

      app.reservations.fetch();

   });









 },

 searchpage: function(){

 app.router.navigate("app", true)


 }




});
