var express = require('express');
var router = express.Router();
const apiKey = process.env.API_KEY;

router.get ('/movies', (req, res) => {
    const myURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
    fetch(encodeURI(myURL))
    .then(response => response.json())
    .then(data => res.status(200).send({movies: {
        title: data.results.title,
        poster_path: data.results.poster_path,
        vote_average: data.results.vote_average,
        vote_count: data.results.vote_count,
        overview: data.results.overview
    }}))

})
module.exports = router;
