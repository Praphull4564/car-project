import React from 'react';

const CarModal = ({ car, isOpen, onClose }) => {
  if (!isOpen || !car) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-body">
          <div className="modal-image-container">
            <img src={car.image} alt={`${car.make} ${car.model}`} className="modal-image" />
          </div>
          <div className="modal-info">
            <h2 className="modal-title">{car.make} {car.model} {car.year}</h2>
            <p className="modal-price">{car.price}</p>
            <p className="modal-description">{car.description}</p>
            
            <div className="modal-specs">
              <h3>Specifications</h3>
              <div className="specs-grid">
                <div className="spec-row">
                  <span className="spec-label">Engine:</span>
                  <span className="spec-value">{car.engine}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Horsepower:</span>
                  <span className="spec-value">{car.horsepower}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Transmission:</span>
                  <span className="spec-value">{car.transmission}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">0-60 mph:</span>
                  <span className="spec-value">{car.acceleration}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Top Speed:</span>
                  <span className="spec-value">{car.topSpeed}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Fuel Economy:</span>
                  <span className="spec-value">{car.fuelEconomy}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarModal;