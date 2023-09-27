import { useEffect, useState } from "react";
import Tours from "./components/Tours.jsx";
import Loading from "./components/Loading.jsx";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const removeTour = (id) => {
    setTours((tours) => tours.filter((tour) => tour.id !== id));
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setTours(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      {isLoading && <Loading />}
      {!isLoading && !isError && (
        <div>
          {tours.length === 0 && (
            <button
              type="button"
              onClick={fetchData}
              className="btn"
              style={{ marginTop: "2rem" }}
            >
              Refresh
            </button>
          )}

          <Tours tours={tours} removeTour={removeTour} />
        </div>
      )}
    </main>
  );
};
export default App;
