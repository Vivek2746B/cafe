
import { Link } from 'react-router-dom';
import './Hero.css';
import heroBg from '../../assets/images/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 style={{ color: '#FFF8F0' }}>Welcome to Caffeine Cove</h1>
        <p style={{ color: '#F3E5D8' }}>
          Where every sip is a mini vacation for your taste buds!
        </p>
        <div className="hero-buttons">
          <Link to="/menu" className="btn-primary">
            Brew-tiful Menu
          </Link>
          <Link to="/contact" className="btn-secondary">
            Book Your Buzz
          </Link>
        </div>
      </div>
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${heroBg})`,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          zIndex: 1,
        }}
      ></div>
    </section>
  );
};

export default Hero;

