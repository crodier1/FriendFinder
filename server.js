let express = require("express"),    
    app = express(),    
    PORT = process.env.PORT || 3000;


app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});


//route to html pages
let route = require("./app/routing/htmlRoutes")
app.use(route);

//route to api
let api = require("./app/routing/apiRoutes");
app.use(api);
