var app = app || {};

_.templateSettings = {
     evaluate : /\{\[([\s\S]+?)\]\}/g,
     interpolate : /\{\{([\s\S]+?)\}\}/g
};

app.flights = new app.Flights();
app.reservations = new app.Reservations();

app.router = new app.AppRouter();

$(document).ready(function (){
  // Once the DOM is loaded, fetch the posts from the Rails AJAX endpoint ("/posts")

  app.flights.fetch().done(function () {
    // ... when the fetch() ajax request is finished, we're ready to start the app
    Backbone.history.start();
  });

  setInterval(function() {
    app.flights.fetch();
  }, 9000);


});
