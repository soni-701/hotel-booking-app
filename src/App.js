import { useEffect, useState } from "react";
import HotelList from "./components/HotelList";
import "./App.css";

export function App() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const pageSize =5;

const startIndex = (page - 1) * pageSize;
const endIndex = startIndex + pageSize;

const currentHotels = hotels.slice(startIndex, endIndex);

const totalPages = Math.ceil(hotels.length / pageSize);

  useEffect(() => {
    setLoading(true);

    fetch(`https://demohotelsapi.pythonanywhere.com/hotels/?page=${page}&page_size=${pageSize}`)
      .then((res) => res.json())
      .then((data) => {
        setHotels(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [page]);

  return (
    <div>
      <h1 className="title">Hotel Booking</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <HotelList hotels={currentHotels} />

          <div className="pagination">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              ⬅ Previous
            </button>

            <span className="page-number">
              Page {page} of {totalPages}
            </span>

            <button onClick={() => setPage(page + 1)}  disabled={page===totalPages}>
              Next ➡
            </button>
          </div>
        </>
      )}
    </div>
  );
}