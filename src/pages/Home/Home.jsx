

import Hero from '../../components/Hero/Hero';
import Testimonial from '../../components/Testimonial/Testimonial';
import './Home.css';

// Coffee story sections with corresponding images (removed 2nd and 4th)
const coffeeStory = [
  {
    title: "Our Humble Beginnings",
    content: "Born in 2024 from a passion for authentic South Indian coffee, we started as a small kiosk in Anna Nagar. Today, we're proud to be one of Chennai's favorite specialty coffee destinations.",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Our first small coffee shop"
  },
  {
    title: "Our Signature Blends",
    content: "Try our Madras Kaapi - a unique blend of single-origin beans with traditional South Indian flavors. Perfectly balanced for the Chennai palate.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Specialty coffee cup"
  }
];

const testimonials = {
  leftColumn: [
    {
      text: "The filter coffee here takes me back to my childhood in Coimbatore. Perfect balance!",
      name: "Rajesh",
      role: "Local Business Owner",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      text: "I bring all my clients here. The ambiance makes business meetings more productive.",
      name: "Priya",
      role: "Financial Consultant",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      text: "Their iced latte is my go-to drink during Chennai summers. Refreshing and flavorful!",
      name: "Aarav",
      role: "College Student",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ],
  rightColumn: [
    {
      text: "As a food blogger, I can confidently say this is Chennai's best specialty coffee shop.",
      name: "Meena",
      role: "Food Influencer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "The staff remembers my usual order. That personal touch keeps me coming back.",
      name: "Vikram",
      role: "Regular Customer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "Their coffee beans make the perfect gift for my overseas friends who miss South Indian coffee.",
      name: "Ananya",
      role: "Frequent Visitor",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    }
  ]
};

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      
      <section className="story-section">
        <div className="container">
          <h2 className="section-title">Our Coffee Journey</h2>
          <p className="section-subtitle">
            Where tradition meets innovation in every cup
          </p>
          
          <div className="story-grid">
            {coffeeStory.map((item, index) => (
              <div key={index} className="story-item">
                <div className="story-content">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
                <div className="story-image">
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What People Say</h2>
          
          <div className="testimonials-columns">
            <div className="testimonial-column">
              {testimonials.leftColumn.map((testimonial, index) => (
                <Testimonial key={`left-${index}`} testimonial={testimonial} />
              ))}
            </div>
            
            <div className="testimonial-column">
              {testimonials.rightColumn.map((testimonial, index) => (
                <Testimonial key={`right-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;