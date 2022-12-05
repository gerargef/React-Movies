import React from "react";

function MovieItem(props) {
  const { Poster, Title, Type, Year } = props;
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        {Poster === "N/A" ? (
          <img
            className="activator"
            src={`https://imgholder.ru/300x300/00c853/ffffff&text=NO+POSTER&font=kelson`}
          />
        ) : (
          <img className="activator" src={Poster} alt={Title} />
        )}
      </div>
      <div className="card-content">
        <h5 className="grey-text text-darken-4">{Title}</h5>
        <span className="card-title activator grey-text text-darken-4">
          year: {Year}
        </span>
        <span className="card-title activator grey-text text-darken-4">
          type: {Type}
        </span>
      </div>
    </div>
  );
}

export default MovieItem;
