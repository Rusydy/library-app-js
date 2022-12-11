# Simple Library API

This is a sample project that demonstrates how to use ExpressJS to create a simple API.

## Installation

To install the project dependencies, run the following command:

```bash
yarn
```

## Running the project

To start the API, run the following command:

```bash
yarn start
```

his will start the API on the default port (3000). You can access the API at <http://localhost:3000>.

## API Endpoints

The following API endpoints are available:

### GET /books/:genre

This endpoint returns a list of books in the specified genre.

Parameters

- `genre`: The genre of books to return.

Response

```json
{
    "books": [
        {
            "title": "The Lord of the Rings",
            "author": "J.R.R. Tolkien",
            "genre": "fantasy"
        },
        {
            "title": "The Hobbit",
            "author": "J.R.R. Tolkien",
            "genre": "fantasy"
        }
    ]
}
```

### POST /book-pickup-schedule

This endpoint allows the user to submit a book pick up schedule.

Parameters

```json
{
 "name": "John Doe",
 "email": "jhon@email.com",
 "bookTitle": "The Book",
 "bookAuthor": "John Doe",
 "bookGenre": "fiction",
 "bookPickUpDate": "2020-01-01"
}
```

Response

```json
{
 "message": "Book pick up schedule added successfully",
 "bookPickUpRequest": [
  {
   "name": "John Doe",
   "email": "jhon@email.com",
   "bookTitle": "The Book",
   "bookAuthor": "John Doe",
   "bookGenre": "fiction",
   "bookPickUpDate": "2020-01-01"
  }
 ]
}
```

### GET /book-pickup-schedule

This endpoint returns a list of book pick up schedules.

```json
{
 "bookPickUpRequests": [
  {
   "name": "John Doe",
   "email": "jhon@email.com",
   "bookTitle": "The Book",
   "bookAuthor": "John Doe",
   "bookGenre": "fiction",
   "bookPickUpDate": "2020-01-01"
  }
 ]
}
```
