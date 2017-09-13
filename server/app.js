
// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter

var express = require('express');
var morgan = require ('morgan');
var axios = require ('axios');

const app = express();
app.use(morgan('dev'));

var cache = {};
var url = 'http://www.omdbapi.com/?apikey=8730e0e';

app.get('/', function(req, res) {
    var param = '';
    var key = '';

    if (req.query.hasOwnProperty("i")) {
        param = '&i=' + encodeURIComponent(req.query.i);//i=tt3896198 (A valid IMDb ID (e.g. tt1285016))
        key = req.query.i;
    } else if (req.query.hasOwnProperty("t")) {
        param = '&t=' + encodeURIComponent(req.query.t);//Movie title to search for.
        key = req.query.t;
    }
    
    if(cache.hasOwnProperty(key)){
        res.json(cache[key]);
    } else {
        console.log(url + param)
        axios.get(url + param)
            .then(function(response){
                cache[key] = response.data;
                res.json(cache[key]);

            })
            .catch(function (error) {
                res.status(500).send(error.message);
            });
    }
});

module.exports = app;

// if(cache_is_stale) {
    //     axios.get('')
    //          .then(function(data) {
    //             cache[imdbID] = data;
    //          });
    // } else {
    //     res.json(cache[imdbID]);
    // }