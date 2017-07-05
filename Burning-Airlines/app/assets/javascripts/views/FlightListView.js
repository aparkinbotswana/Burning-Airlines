var app = app || {};

app.FlightListView = Backbone.View.extend({

  tagName: "li",

  events: {
    "click": "showFlight"
  },

  showFlight: function () {
    var id = this.model.get('id');
    app.router.navigate("/flights/" + id, true)
  },

  render: function () {
    var name = this.model.get( 'name' );
    this.$el.html( name )
    this.$el.appendTo("#flights");

  }
});
