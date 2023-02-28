// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
//A controller.  It is responsible for manipulating data in our database and rendering specific views at specific routes
const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
//THis is a get route for getting all dishes on our menu and route of forward slash.
router.get('/', async (req, res) => {
//TODO: Add a comment describing the purpose of the render method
//handler used to send whatever is in the views folder as an html doc to user interface
//renders the file name all for handlebars
  res.render('all');
});

module.exports = router;
