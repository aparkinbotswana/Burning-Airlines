var app = app || {};

app.FlightListView = Backbone.View.extend({

  tagName: "li",

  events: {
    "click button": "showFlight"
  },

  showFlight: function () {
    var id = this.model.get('id');
    app.router.navigate("/flights/" + id, true)
  },

  render: function () {

    var template = $('#flights').html();
    this.$el.html( template );

    // var markup = template( this.model.attributes );
    // this.$el.html( markup )
    // this.$el.appendTo("#flights");

    // old code

    // var name = this.model.get( 'name' );
    var name = this.model.get('name');
    name += this.model.get('from');
    name += this.model.get('to');

    this.$el.html( name )
    this.$el.appendTo("#flights");

  //

  }
});
