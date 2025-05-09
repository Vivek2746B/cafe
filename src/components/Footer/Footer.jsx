

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Caffeine Cove</h3>
          <p>Brewing up a storm of unstoppable energy, where passion meets productivity and greatness begins to rise.</p>
        </div>
        
        <div className="footer-section">
          <h4>Hours</h4>
          <p>Monday - Friday: 11am - 11pm</p>
          <p>Saturday - Sunday: 10am - 6pm</p>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Address: No. 221, Ground Floor, TBR Tower, 2nd Avenue, Y Block, Anna Nagar, Chennai – 600040</p>
          <p>Landmark: Near Aiyappan Temple</p>
          <p>Phone: 1860 266 0010</p>


        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Caffeine Cove </p>
      </div>
    </footer>
  );
};

export default Footer;