var express = require('express');
var router = express.Router();
const apiKey = process.env.API_KEY;

router.get ('/movies', (req, res) => {
    const myURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
    fetch(encodeURI(myURL))
    .then(response => response.json())
    .then(data => res.status(200).send({movies: data.results}))

})
module.exports = router;
