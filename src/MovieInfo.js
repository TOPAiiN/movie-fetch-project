import React from 'react';

function MovieInfo(props) {

    return (
        <div>
            <h2>{props.movie.Title}</h2>
            <img src={props.movie.Poster}/>
            <h3>IMDB Rating: {props.movie.imdbRating}</h3>
        </div>            
           );
}

export default MovieInfo;
