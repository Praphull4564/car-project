import React from 'react';

const CarCard = ({ car, onClick }) => {
  return (
    <div 
      className="car-card" 
      onClick={() => onClick(car)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(car)}
    >
      <div className="car-image-container">
        <img src={car.image} alt={`${car.make} ${car.model}`} className="car-image" />
        <div className="car-type-badge">{car.type}</div>
      </div>
      <div className="car-content">
        <div className="car-header">
          <h3 className="car-title">{car.make} {car.model}</h3>
          <span className="car-year">{car.year}</span>
        </div>
        <p className="car-price">{car.price}</p>
        <div className="car-specs">
          <div className="spec-item">
            <span className="spec-label">Power:</span>
            <span className="spec-value">{car.horsepower}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">0-60:</span>
            <span className="spec-value">{car.acceleration}</span>
          </div>
        </div>
        <p className="car-description">{car.description}</p>
      </div>
    </div>
  );
};

export default CarCard;