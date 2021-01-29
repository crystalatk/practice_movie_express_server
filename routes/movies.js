'use strict';

const express = require('express'),
    router = express.Router();

const movieObject = require('../db');

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: "Movie List",
            data: movieObject,
        },
        partials: {
            body: 'partials/movie-list',
            head: 'partials/head',
        },
    })
})

router.get('/:imdbID', (req, res) => {
    const { imdbID } = req.params;
    const movie = movieObject.find(movie => movie.imdbID === imdbID);
    if (movie) {
        res.render('template', {
            locals: {
                title: `${movie.Title}`,
                movie,
            },
            partials: {
                body: 'partials/movie-details',
                head: 'partials/head',
            }
        })
    } else {
        res.status(404).send(`There is not movie with the imdbID of ${imdbID}`);
    };
});


module.exports = router;