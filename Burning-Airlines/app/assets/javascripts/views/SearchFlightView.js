var app = app || {};

app.SearchFlightView = Backbone.View.extend({

  tagName: "li",

  events: {
    "click button": "searchFlights"
  },

  searchFlights: function () {
    var $from = $('#from').val();
    var $to = $('#to').val();
    console.log($from, $to);

    var id = this.model.get('id');
    app.router.navigate("/flights/" + id, true)
  },

  render: function () {
    var name = this.model.get( 'name' );
    this.$el.html( name )
    this.$el.appendTo("#flights");

  }
});
