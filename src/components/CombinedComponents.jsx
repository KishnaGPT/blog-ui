import { useRef } from "react";

// Hero Component
function Hero() {
  return (
    <div className="container-hero">
      <div className="image-box">
        <img src="/bannerImage2.png" alt="hero" />
      </div>

      <div className="content-right">
        <h1 className="hero-heading">
          Great<span style={{ color: "#2563eb" }}>Hire</span> Insights - The Future of Work
        </h1>

        <p className="hero-content">
          "Your all-in-one platform for job applications and recruitment—connecting
          talent with opportunity and empowering professionals to seize new possibilities
          in an evolving world of work."
        </p>

        <i style={{ color: "#828890", fontWeight: 600 }}>-GreatHire</i>
      </div>
    </div>
  );
}

// BlogSection Component
function BlogSection() {
  const blogCards = useRef(null);

  const scroll = (dir) => {
    const card = blogCards.current.querySelector(".blog-card");
    const gap = 25;
    blogCards.current.scrollLeft += dir * (card.offsetWidth + gap);
  };

  return (
    <section className="blog-section">
      <div className="blog-header">
        <div>
          <h2>Our Recent Articles</h2>
          <p>Stay Informed with Our Latest Insights</p>
        </div>

        <div className="nav-buttons">
          <button onClick={() => scroll(-1)}>&larr;</button>
          <button onClick={() => scroll(1)}>&rarr;</button>
        </div>
      </div>

      <div className="blog-cards" ref={blogCards}>
        {[
          {
            img: "https://images.unsplash.com/photo-1587614382346-ac9a5f3efb3f",
            title: "Beyond Transactions: POS System",
            author: "Sam Pitak",
          },
          {
            img: "https://images.unsplash.com/photo-1556741533-f6acd647d2fb",
            title: "From Store to Online",
            author: "Yuli Sumpil",
          },
          {
            img: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
            title: "Security First",
            author: "Ambon Fanda",
          },
          {
            img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
            title: "Smart Analytics",
            author: "John Doe",
          },
        ].map((b, i) => (
          <div className="blog-card" key={i}>
            <img src={b.img} />
            <div className="card-content">
              <div className="meta">
                <span className="author">{b.author}</span>
                <span className="date">20 Apr 2024</span>
              </div>
              <h3>{b.title}</h3>
              <p>POS systems now do much more than process payments.</p>
              <a href="#">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Trending Component
function Trending({ reverse = false }) {
  return (
    <section className="trending">
      <div className="container-tranding">
        {!reverse ? (
          <div className="tranding-left">
            <h1>
              <span style={{ color: "rgb(51,143,249)" }}>Featured</span> Articles You
              <br />Need To Read
            </h1>
            <p>
              Stay Ahead of the Curve and Dive Deep into the Must-Read
              Trending Articles that Keep You Informed and Inspired
            </p>
            <div className="icon-box">
              <img src="/vector1-removebg-preview.png" />
            </div>
          </div>
        ) : (
          <div className="tranding-right">
            {cards()}
          </div>
        )}

        {!reverse ? (
          <div className="tranding-right">
            {cards()}
          </div>
        ) : (
          <div className="tranding-left">
            <h1>
              Career <span style={{ color: "rgb(51,143,249)" }}>Advices</span> You
            </h1>
            <p>
              Stay Ahead of the Curve and Dive Deep into the Must-Read
              Trending Articles that Keep You Informed and Inspired
            </p>
            <div className="icon-box">
              <img src="/vector2-removebg-preview.png" />
            </div>
          </div>
        )}
      </div>

    </section>

    
  );
  
}

function cards() {
  return (
    <>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc" />
        <div className="card-content">
          <span className="category retail">Retail</span>
          <h3>Retail Revolution</h3>
          <p>Enhancing sales with cutting-edge POS systems.</p>
          <a href="#">Read More →</a>
        </div>
      </div>

      <div className="card">
        <img src="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83" />
        <div className="card-content">
          <span className="category restaurant">Restaurant</span>
          <h3>Culinary Control</h3>
          <p>Managing orders and inventory efficiently.</p>
          <a href="#">Read More →</a>
        </div>
      </div>

      <div className="card">
        <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4" />
        <div className="card-content">
          <span className="category hospitality">Hospitality</span>
          <h3>Guest Experience</h3>
          <p>Transforming service with smart POS solutions.</p>
          <a href="#">Read More →</a>
        </div>
      </div>
    </>
  );
}



// Insights Component
function Insights() {
  return (
    <section className="insights-section">
      <h2>Industry Insights</h2>
      <p className="section-desc">
        Quick guidance to help you grow, prepare, and succeed
      </p>
      
      <div className="custom-container">
        <div className="slider-mask">
          <div className="slider-wrapper">
            <div className="slider">
                {[
                  { title: "Career Advice" },
                  { title: "Hiring Advice" },
                  { title: "Resume Tips" },
                  { title: "HR Insights" },
                  { title: "Trending Topics" }
                ].map((item, i) => (
                  <div className="insight-card" key={i}>
                    <div className="insight-card-content">
                      <h5>{item.title}</h5>
                      <p>Professional guidance curated for you.</p>
                    </div>
                    <div className="insight-card-image">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                        alt={item.title}
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Combined Component
export default function CombinedComponents() {
  return (
    <>
      <Hero />
      <BlogSection />
      <Trending />
      <Insights />
    </>
  );
}