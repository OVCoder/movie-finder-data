const server = require('./app');

server.listen(3000, function() {
  console.log('Server is listening on http://localhost:3000');
});


// ## Exit Criteria
// * Server should log each request using `morgan`'s dev format
// * Server should indicate when it is listening and on which port
// * Server should respond to GET requests to `/?i=tt3896198` with movie data
// * Server should respond to GET requests to `/?i=tt3896198` with movie data without fetching from the OMDb apiquests to `/?i=tt3896198` with movie data without fetching from the OMDb api
