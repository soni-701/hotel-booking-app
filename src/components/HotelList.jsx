import HotelCard from "./HotelCard";

function HotelList({ hotels }) {
  return (
    <div className="container">
      {hotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          hotel={hotel}
        />
      ))}
    </div>
  );
}

export default HotelList;