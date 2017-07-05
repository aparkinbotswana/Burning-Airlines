var app = app || {};

app.FlightListView = Backbone.View.extend({

  tagName: "div",


  events: {
    "click": "showFlight",

  },

  showFlight: function () {
    var id = this.model.get('id');
    app.router.navigate("/flights/" + id, true)
  },

  render: function () {

    var rawTemplate = $('#FlightInfoTemplate').html();
    // this.$el.html( template );
    var template = _.template( rawTemplate);

    var markup = template( this.model.attributes );
    console.log(markup);
    this.$el.html( markup );
    this.$el.appendTo( "#flights" );


    // this.$el.appendTo("#flights");


    // var markup = template( this.model.attributes );
    // this.$el.html( markup )
    // this.$el.appendTo("#flights");

    // old code

    // var name = this.model.get('name');
    // name += this.model.get('from');
    // name += this.model.get('to');
    //
    // this.$el.html( name )
    // this.$el.appendTo("#flights");

  //

  }



});
