import './App.css';
import React, { useEffect, useState } from 'react';
import MovieInfo from './MovieInfo';


function App() {
  const [query, updateQuery] = useState({
    url: 'http://www.omdbapi.com/?i=tt3896198&apikey=bd8caecb',
    option: '&t=',
    title: '',
    searchURL: ''
  });

const [movie, updateMovie] = useState({});


useEffect(() => {
query.searchURL.length > 0 && 
  (async () => {
    try {
      const response = await fetch(query.searchURL);
      const data     = await response.json();
      await updateMovie({...movie, ...data});
      await updateQuery({...query, title:'', searchURL: ''})
    }
    catch (errors) {
      console.log(errors);
    }
  })();

}, [query]);
  

const handleChange = (event) => {
  updateQuery({...query, ...{ [event.target.id]: event.target.value }});
  console.log(query);
}

const handleSubmit = (event) => {
    event.preventDefault();
    updateQuery({...query, searchURL: query.url + query.option + query.title })
};
console.log('-----');
console.log(query.searchURL);

  return (
    <div className="App">
      <h2>Movie Information Finder</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Movie Title: </label>
        <input
          id="title"
          type="title"
          value={query.title}
          onChange={handleChange}
          >
        </input>
        <input type="submit" value="Search for your favorite movie" />
      </form>
      {Object.keys(movie).length > 0 && <MovieInfo movie={movie} />}
    </div>
  );
}

export default App;
