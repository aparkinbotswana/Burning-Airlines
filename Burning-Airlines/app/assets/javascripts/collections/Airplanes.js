var app = app || {};

app.Airplanes = Backbone.Collection.extend({
  url: "/airplanes",
  model: app.Airplane,

  initialize: function(){
    this.on("Add", function( book  ){
      var name = airplane.get('name');
      console.log('A new airplane collection ' + name + ' was created');
    });
  }

});
