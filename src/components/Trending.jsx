export default function Trending({ reverse = false }) {
  return (
    <section className="trending">
      <div className="container-tranding">


        {/* LEFT SIDE */}
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

        {/* RIGHT SIDE */}
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

/* CARDS (reused) */
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
