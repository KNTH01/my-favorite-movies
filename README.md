# My favorite movies

## Description

Application that allows to search for a movie and save it as a favorite movie in a Mongo database

* deploys a movies rest api endpoint and tests
* has request functions to omdb api in order to search a movie
* add a nice user interface built with `vue` and `vuex`

### Double package.json

I do not know what is the best pratices for that, but after thoughts, I decided that it's not bad to have 2 `package.json`. The one at the root of the project describes the `server end`, while the one in the `front` repository describes the `vue` build. Therefore, there is a neat separation of concerns. That allows to run `npm scripts` distinctly for each end of the project.

### Build the app

Clone the repository: `git clone https://github.com/KevinNTH/my-favorite-movies.git`
Install the dependencies:
* `cd my-favorite-movies`
* `npm install`
* `cd front`
* `npm install`

Run the server: `npm run dev` or `npm run start`

Run the front: `npm run dev`

Build the front: `npm run build`

## TODO

- [x] add a user interface allowing user to search a movie and display that search
- [ ] allow user to save a favorite movie into the database
- [ ] allow user to delete a favorite movie from the database
