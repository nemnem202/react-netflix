import Rating from "./rating";
import "../styles/partials/movie_card.css";

export default function MovieCard() {
  return (
    <div className="card-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Transformers_One_Official_Poster.jpg/250px-Transformers_One_Official_Poster.jpg"
        alt=""
        className="card-img"
      />
      <div className="card-content">
        <p className="title">Stranformers</p>
        <div>
          <p className="description">
            Jack Reacher must uncover the truth behind a major government conspiracy in order to
            clear his name. On the run as a fugitive from the law, Reacher uncovers a potential
            secret from his past that could change his life forever.
          </p>
          <p className="date">01/02/2017</p>
        </div>

        <Rating rate={25.6} size={1} />
      </div>
    </div>
  );
}
