import { useState } from "react";

const Tour = (props) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const { id, name, info, image, price, removeTour } = props;

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {isReadMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="info-btn"
            onClick={(e) => {
              e.preventDefault();
              setIsReadMore(!isReadMore);
            }}
          >
            {isReadMore ? "Show Less" : "Read More"}
          </button>
        </p>
      </div>
      <button
        type="button"
        onClick={() => removeTour(id)}
        className="btn btn-block delete-btn"
      >
        Not interested
      </button>
    </article>
  );
};

export default Tour;
