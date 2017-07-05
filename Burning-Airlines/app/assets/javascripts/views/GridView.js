var app = app || {};


app.GridView = Backbone.View.extend({
  el: "#app",


  render: function () {
    // var rawTemplate = $('#GridViewTemplate').html();
    var template = _.template($("#GridViewTemplate").html(), {} );
    this.$el.html( template );
    // var markup = template( this.model.attributes );
    // console.log(markup);
    // this.$el.html( markup );
//     this.$el.appendTo( "#grid" );
// console.log(this.$el);
  }




});
