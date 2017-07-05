
$( document ).ready(function(){

  var cols;
  var rows;

  var renderGrid = function(rowsize,rowcol){
    for (var rows = 0; rows < rowsize; rows++) {

      // set each row to be a new empty array (i.e. of column values)

      for (var cols = 0; cols < rowcol; cols++) {
        var $cell = $('<div class="cell">');
        $('<img class="seat" src="assets/seatempty.png">').appendTo($cell);
        $cell.attr('rows', rows).attr('cols', cols);
        $('#table').append($cell);
      }



    };

    $('.seat').click(function(){
    $(this).attr('src',"assets/seattaken.png");
     });

     var tableWidth = 800 + (rowsize * 8);
     var tableHeight = 200;
     $('#table').css('width', tableWidth + 'px');
     $('#table').css('height', tableHeight + 'px');

  }


});








 // var rowsize = 4;
 // var rowcol = 16;



// var tableWidth = 500 + (squares * 4);
// $('#table').css('width', tableWidth + 'px');

// $('#table').html('hello');

// $('#buttonyo').click(function(){
//   alert('clicked');
// });
