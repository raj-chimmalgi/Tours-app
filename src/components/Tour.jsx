import { useState } from "react";

const Tour = (props) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const { id, name, info, image, price, removeTour } = props;

  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name} style={{ width: "50px", height: "50px" }} />
      <p>{isReadMore ? info : info.substring(0, 200) + "..."}</p>
      <a
        href=""
        aria-description="read more"
        onClick={(e) => {
          e.preventDefault();
          setIsReadMore(!isReadMore);
        }}
      >
        Read More
      </a>
      <h5>{price}</h5>
      <button
        type="button"
        onClick={() => removeTour(id)}
        className="btn-block"
      >
        Not interested
      </button>
    </div>
  );
};

export default Tour;
