
$( document ).ready(function(){

  var cols;
  var rows;

  var renderGrid = function(rowsize,rowcol){
    for (var rows = 0; rows < rowsize; rows++) {

      // set each row to be a new empty array (i.e. of column values)
      boxes[rows] = [];
      for (var cols = 0; cols < rowcol; cols++) {
        var $cell = $('<div class="cell">');
        $('<img class="seat" src="images/seatempty.png">').appendTo($cell);
        $cell.attr('rows', rows).attr('cols', cols);
        $('#table').append($cell);
        boxes[rows][cols] = 0;
      }

      var tableWidth = 800 + (rowsize * 8);
      var tableHeight = 200;
      $('#table').css('width', tableWidth + 'px');
      $('#table').css('height', tableHeight + 'px');

    };
  }




  $('.seat').click(function(){
  $(this).attr('src',"assets/seattaken.png");
   });



});








 // var rowsize = 4;
 // var rowcol = 16;



// var tableWidth = 500 + (squares * 4);
// $('#table').css('width', tableWidth + 'px');

// $('#table').html('hello');

// $('#buttonyo').click(function(){
//   alert('clicked');
// });
