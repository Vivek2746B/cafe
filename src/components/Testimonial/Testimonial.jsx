
import './Testimonial.css';

const Testimonial = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <p>"{testimonial.text}"</p>
      </div>
      <div className="testimonial-author">
        <img src={testimonial.avatar} alt={testimonial.name} />
        <div>
          <h4>{testimonial.name}</h4>
          <span>{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;