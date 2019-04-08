// Dom7
var $ = Dom7;

// Init App
var app = new Framework7({
  
  id: 'io.framework7.testapp',
  root: '#app', 
  routes: [
    // index/home page
    {
      path: '/',
      url: './index.html',
      name: 'home',
    },
    {
      path: '/products/',
      componentUrl: './products.html',
      name: 'products',
    },
    {
      path: '/surfboards',
      componentUrl: './surfboards.html',
      name: 'surfboards',
    },
    {
      path: '/snowboards',
      componentUrl: './snowboards.html',
      name: 'snowboards',
    },
    {
      path: '/detail/:id',
      componentUrl: './detail.html',
      name: 'detail',
    },
    {
      path: '/about/',
      componentUrl: './about.html',
      name: 'about',
    },
  ],
});

app.panel.enableSwipe('left'); 

var mainView = app.views.create('.view-main');
//load up data from the JSON file at runtime.
app.request.json('http://localhost:3000/products', function (mydata) {
  app.data.products = mydata;
});
//JSON for reviews
var mainView = app.views.create('.view-main');
app.request.json('http://localhost:3000/reviews', function (mydata) {
  app.data.reviews = mydata;
});
//Json for surfboards
var mainView = app.views.create('.view-main');
app.request.json('http://localhost:3000/surfboards', function (mydata) {
  app.data.surfboards = mydata;
});
//Json for snowboards
var mainView = app.views.create('.view-main');
app.request.json('http://localhost:3000/snowboards', function (mydata) {
  app.data.snowboards = mydata;
});
//Showing objects in console
console.log(app.data);
