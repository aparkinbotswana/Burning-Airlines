var app = app || {};


app.GridView = Backbone.View.extend({
  el: "#app",




  render: function () {
    // var rawTemplate = $('#GridViewTemplate').html();
    var template = _.template($("#GridViewTemplate").html(), {} );
    this.$el.html( template );

    // renderGrid(4,6);



    // var markup = template( this.model.attributes );
    // console.log(markup);
    // this.$el.html( markup );
//     this.$el.appendTo( "#grid" );
// console.log(this.$el);


  var rowsize = this.model.attributes.airplane.row;
  var colsize = this.model.attributes.airplane.column;
  console.log(rowsize, colsize);

  var row = _.range(1, rowsize+1);
  var col = _.range(1, colsize+1);

  _.each(row, function(rowid) {
    var $row = $('<tr>');
    $row.appendTo("#table");
    _.each(col, function(colid) {
      var $col = $('<td>');
      $('<img class="seat" src="assets/seatempty.png">').appendTo($col).attr('colid', colid).attr('rowid', rowid);
      $col.appendTo($row);
    });
  });

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

    $('.seat').click(function(){
      $(this).attr('src',"assets/seattaken.png");
      console.log($(this).attr('colid'));
      console.log($(this).attr('rowid'));
    });





  },






});
