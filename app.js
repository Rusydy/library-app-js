const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/books/:genre', (req, res) => {
    const genre = req.params.genre;
    axios.get(`https://openlibrary.org/subjects/${genre}.json?limit=10`)
        .then(response => {
            if (response.data.works.length === 0) {
                res.status(404).send({ message: 'Genre not found' });
            } else {
                const books = response.data.works.map(work => {
                    return {
                        title: work.title,
                        author: work.authors[0].name,
                        genre: genre
                    };
                });
                res.send({books: books});
            }
        })
        .catch(error => {
            res.status(500).send({ message: 'Something went wrong while processing the request' + error });
        });
});

const bookPickUpRequests = [];

app.post('/book-pickup-schedule', (req, res) => {
    const request = req.body;

    bookPickUpRequests.push(request);

    res.send({
        message: 'Book pick up schedule added successfully',
        bookPickUpRequest: bookPickUpRequests
    });
});

app.get('/book-pickup-schedule', (req, res) => {
    res.send({
        bookPickUpRequests: bookPickUpRequests
    });
});



app.listen(3000, () => {
    console.log('Server listening on port 3000...');
});

