import Rating from "./rating";
import "../styles/partials/banner.css";

export default function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-img-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Transformers_One_Official_Poster.jpg/250px-Transformers_One_Official_Poster.jpg"
          alt=""
        />
      </div>

      <div className="banner-description-container">
        <div>
          <h1 className="title">Stranformers</h1> <p className="date">01/02/2017</p>
        </div>
        <div>
          <p className="description">
            Jack Reacher must uncover the truth behind a major government conspiracy in order to
            clear his name. On the run as a fugitive from the law, Reacher uncovers a potential
            secret from his past that could change his life forever.
          </p>

          <Rating rate={25.6} size={1.5} />
        </div>
      </div>
    </div>
  );
}
