import React, { useState } from 'react';
import './App.css';

function App() {
  const [showMovies, setShowMovies] = useState(false);

  const movies = [
    {
      id: 1,
      title: 'Batman',
      producer: 'Matt Reeves, Dylan Clark',
      director: 'Matt Reeves',
      summary: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale of the perpetrator's plans become clear, he must forge new relationships, unmask the culprit and bring justice to the abuse of power and corruption that has long plagued the metropolis."
    },
    {
      id: 2,
      title: 'Godzilla vs. Kong',
      producer: 'Legendary Entertainment, Warner Bros.',
      director: 'Adam Wingard',
      summary: "Kong and his protectors undertake a perilous journey to find his true home. Along for the ride is Jia, an orphaned girl who has a unique and powerful bond with the mighty beast. However, they soon find themselves in the path of an enraged Godzilla as he cuts a swath of destruction across the globe. The initial confrontation between the two titans -- instigated by unseen forces -- is only the beginning of the mystery that lies deep within the core of the planet."
    },
    {
      id: 3,
      title: 'Finding Nemo',
      producer: 'Walt Disney Pictures',
      director: 'Andrew Stanton',
      summary: "Marlin (Albert Brooks), a clown fish, is overly cautious with his son, Nemo (Alexander Gould), who has a foreshortened fin. When Nemo swims too close to the surface to prove himself, he is caught by a diver, and horrified Marlin must set out to find him. A blue reef fish named Dory (Ellen DeGeneres) -- who has a really short memory -- joins Marlin and complicates the encounters with sharks, jellyfish, and a host of ocean dangers. Meanwhile, Nemo plots his escape from a dentist's fish tank."
    },
    {
      id: 4,
      title: 'Titanic',
      producer: 'James Cameron, Rae Sanchini, Jon Landau',
      director: 'James Cameron',
      summary: "James Cameron's Titanic is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the ship of dreams -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912."
    },
    {
      id: 5,
      title: 'Across the Spider-verse',
      producer: 'Columbia Pictures and Sony Pictures Animation in association with Marvel Entertainment',
      director: 'Joaquim Dos Santos, Kemp Powers and Justin K. Thompson',
      summary: "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. However, when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders. He must soon redefine what it means to be a hero so he can save the people he loves most."
    },
    {
      id: 6,
      title: 'Zootopia',
      producer: 'Walt Disney Animation Studios',
      director: 'Byron Howard, Rich Moore',
      summary: "From the largest elephant to the smallest shrew, the city of Zootopia is a mammal metropolis where various animals live and thrive. When Judy Hopps (Ginnifer Goodwin) becomes the first rabbit to join the police force, she quickly learns how tough it is to enforce the law. Determined to prove herself, Judy jumps at the opportunity to solve a mysterious case. Unfortunately, that means working with Nick Wilde (Jason Bateman), a wily fox who makes her job even harder."
     
    }
  ];

  return (
    <div className={`App ${showMovies ? 'show-movies' : ''}`}>
      <h1>Movie Website</h1>
      {!showMovies && (
        <button className="show-movies-button" onClick={() => setShowMovies(true)}>
          Show Movies
        </button>
      )}
      {showMovies && (
        <>
          <button className="back-button" onClick={() => setShowMovies(false)}>
            Back
          </button>
          <div className="movies-container">
            {movies.map(movie => (
              <div key={movie.id} className="movie-box">
                <h2>{movie.title}</h2>
                <p><strong>Producer:</strong> {movie.producer}</p>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Summary:</strong> {movie.summary}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;


