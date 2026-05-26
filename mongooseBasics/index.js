const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(() => {
    console.log("Connection Open")
})
.catch(err => {
    console.log("Oh no errot]r");
    console.log(err);
})// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


const movieSchema = new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String

})


const Movie = mongoose.model('Movie',movieSchema);//model class (model is a collection of movies here)
// const amadeus = new Movie({title:'amadeus', year : 1986 , score : 9.2 , rating : 'R'});

//it returns a promise
Movie.insertMany([
    { title: 'Amadeus', year: 1984, score: 9.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.5, rating: 'R' },
    { title: 'The Big Lebowski', year: 1998, score: 8.1, rating: 'R' },
    { title: 'Stand By Me', year: 1986, score: 8.0, rating: 'R' },
    { title: 'Parasite', year: 2019, score: 8.6, rating: 'R' }
])
.then(data => {
    console.log('it worked');
    console.log(data);
})