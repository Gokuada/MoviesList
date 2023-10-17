import React, { useState, useEffect } from 'react';

function MovieList({ movies }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  const openModal = async (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);

    const url = `http://www.omdbapi.com/?apikey=f7a8a0a8&t=${movie.Title}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovieDetails(data);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setMovieDetails(null);
    setModalOpen(false);
  };

  return (
    <div className="row">
      {movies && movies.length > 0 ? (
        movies.map((movie, index) => (
          <div key={index} className="col-md-2 mb-4">
            <div className="card">
              <img
                src={movie.Poster}
                className="card-img-top"
                alt={movie.Title}
               /> 
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Year}</p>
                <button
                  className="btn btn-dark"
                  onClick={() => openModal(movie)}
                >
                  Voir les détails
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No movies found.</p>
      )}

      {selectedMovie && modalOpen && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedMovie.Title}</h5>
              </div>
              <div className="modal-body">
                <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
                {movieDetails && (
                  <div style={{color: "black"}}>
                    <p >Réalisateur: {movieDetails.Director}</p>
                    <p>Intrigue: {movieDetails.Plot}</p>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-dark" onClick={closeModal}>
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieList;
