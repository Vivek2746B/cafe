
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-container">
          <div className="contact-info">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Reach out for reservations, questions, or feedback.</p>
            
            <div className="contact-details">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#8b5a2b"/>
                </svg>
                Address
              </h3>
              <p>No. 221, Ground Floor, TBR Tower</p>
              <p>2nd Avenue, Y Block, Anna Nagar</p>
              <p>Chennai – 600040</p>
              <p className="landmark">Landmark: Near Aiyappan Temple</p>
              
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.25 13.27 6.97 10.1L8.94 8.53C9.21 8.26 9.3 7.87 9.18 7.52C8.82 6.41 8.62 5.22 8.62 3.99C8.62 3.45 8.17 3 7.63 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.81V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="#8b5a2b"/>
                </svg>
                Phone
              </h3>
              <p>1860 266 0010</p>
              
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#8b5a2b"/>
                </svg>
                Email
              </h3>
              <p>info@cafename.com</p>
              
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="#8b5a2b"/>
                </svg>
                Hours
              </h3>
              <p>Monday - Friday: 8am - 10pm</p>
              <p>Saturday - Sunday: 9am - 11pm</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
      
      <div className="contact-map">
        <iframe
          title="Cafe Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.008620564059!2d80.2197223153467!3d13.08289099078728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265f5e1e7e3c1%3A0x1a3b5e5e5e5e5e5e!2sTBR%20Tower%2C%202nd%20Avenue%2C%20Y%20Block%2C%20Anna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600040!5e0!3m2!1sen!2sin!4v1623861234567!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
export default Contact;