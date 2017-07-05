var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: '/reservations',

  initialize: function () {
    console.log('A new airplane was made.');
  }

});
