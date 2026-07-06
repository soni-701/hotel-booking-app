function HotelCard({ hotel }) {
  return (
    <div className="card">

      <div className="image-box">
        <img
          src={hotel.thumbnail}
          alt={hotel.name}
          className="hotel-img"
        />
      </div>

      <div className="content">
        <h2>{hotel.name}</h2>

        <p>{hotel.description}</p>

        <div className="row">
          <span>📍 {hotel.location}</span>
          <span>⭐ {hotel.rating}</span>
        </div>

        <div className="row">
          <h3>₹ {hotel.price} / Night</h3>

          <button className="wishlist">
            ❤️ Wishlist
          </button>
        </div>
      </div>

    </div>
  );
}

export default HotelCard;