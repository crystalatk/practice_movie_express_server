'use strict';

const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: "Home Page",
        },
        partials: {
            body: 'partials/home',
            head: 'partials/head',
        },
    })
})

module.exports = router;