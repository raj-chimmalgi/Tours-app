import Tour from "./Tour.jsx";

const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      <h1>Tours</h1>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </div>
  );
};

export default Tours;
