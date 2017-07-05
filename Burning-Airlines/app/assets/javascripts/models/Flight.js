var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: '/flights',

  // defaults: {
  //   content: "I hate water"
  // },

  initialize: function () {
    console.log('A new flight was made.');
  }



});
