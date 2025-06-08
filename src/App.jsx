import React, { useState, useMemo } from 'react';
import CarCard from './components/CarCard';
import CarModal from './components/CarModal';
import SearchFilter from './components/SearchFilter';
import { carData } from './data/carData';
import './App.css';

function App() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const carTypes = useMemo(() => {
    const types = [...new Set(carData.map(car => car.type))];
    return types.sort();
  }, []);

  const filteredCars = useMemo(() => {
    return carData.filter(car => {
      const matchesSearch = car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           car.model.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === '' || car.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedType]);

  const handleCarClick = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  const featuredCar = carData.find(car => car.id === 4); // Porsche 911 Turbo S

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <h1 className="logo">PREMIUM MOTORS</h1>
            <nav className="nav">
              <a href="#gallery" className="nav-link">Gallery</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">Experience Excellence</h2>
            <p className="hero-subtitle">Discover the world's most prestigious automotive masterpieces</p>
            <a href="#gallery" className="hero-cta">Explore Collection</a>
          </div>
          <div className="hero-image">
            <img src={featuredCar.image} alt={`${featuredCar.make} ${featuredCar.model}`} />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Premium Collection</h2>
            <p className="section-subtitle">Each vehicle represents the pinnacle of automotive engineering and design</p>
          </div>

          <SearchFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            carTypes={carTypes}
          />

          <div className="cars-grid">
            {filteredCars.map(car => (
              <CarCard
                key={car.id}
                car={car}
                onClick={handleCarClick}
              />
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="no-results">
              <p>No cars match your search criteria. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">About Premium Motors</h2>
            <p className="about-text">
              We specialize in curating the world's finest automobiles, from legendary sports cars to cutting-edge supercars. 
              Our collection represents decades of automotive innovation, featuring vehicles from the most prestigious manufacturers 
              that have shaped the industry.
            </p>
            <div className="stats">
              <div className="stat">
                <h3 className="stat-number">50+</h3>
                <p className="stat-label">Premium Vehicles</p>
              </div>
              <div className="stat">
                <h3 className="stat-number">15+</h3>
                <p className="stat-label">Luxury Brands</p>
              </div>
              <div className="stat">
                <h3 className="stat-number">25+</h3>
                <p className="stat-label">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">PREMIUM MOTORS</h3>
              <p className="footer-text">Your gateway to automotive excellence</p>
            </div>
            <div className="footer-section">
              <h4 className="footer-subtitle">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-subtitle">Contact Info</h4>
              <p className="footer-text">info@premiummotors.com</p>
              <p className="footer-text">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Premium Motors. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <CarModal
        car={selectedCar}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
}

export default App;