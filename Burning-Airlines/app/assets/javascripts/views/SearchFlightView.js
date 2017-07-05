var app = app || {};

app.SearchFlightView = Backbone.View.extend({

  tagName: "tr",

  render: function () {
    var rawTemplate = $('#FlightInfoTemplate').html();
    // this.$el.html( template );
    var template = _.template( rawTemplate);

    var markup = template( this.model.attributes );
    console.log(markup);
    $('#flights').empty();
    this.$el.html( markup );
    this.$el.appendTo( "#flights" );

  }
});
