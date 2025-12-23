import { useEffect } from "react";

function BlogPage() {


    useEffect(() => {
        /* ================= BLOG SLIDER ================= */

        const blogCards = document.getElementById("blogCards");
        const nextBtn = document.getElementById("nextBtn");
        const prevBtn = document.getElementById("prevBtn");

        // 🔒 strict safety (React renders async)
        if (!blogCards || !nextBtn || !prevBtn) return;

        const card = document.querySelector(".blog-card");
        if (!card) return;

        const gap = 25;
        const scrollAmount = card.offsetWidth + gap;

        // Hide arrows if 3 or fewer cards
        if (blogCards.children.length <= 3) {
            nextBtn.style.display = "none";
            prevBtn.style.display = "none";
        }

        nextBtn.addEventListener("click", () => {
            blogCards.scrollLeft += scrollAmount;
        });

        prevBtn.addEventListener("click", () => {
            blogCards.scrollLeft -= scrollAmount;
        });

        /* ================= INSIGHT SLIDER ================= */

        const slider = document.getElementById("cardSlider");
        const cards = document.querySelectorAll(".insight-card");

        if (!slider || cards.length === 0) return;

        let index = 0;
        const cardWidth = 300;

        function autoSlide() {
            index++;
            if (index > cards.length - 3) index = 0;
            slider.style.transform = `translateX(-${index * cardWidth}px)`;
        }

        let slideInterval = setInterval(autoSlide, 4000);

        slider.addEventListener("mouseenter", () => clearInterval(slideInterval));

        slider.addEventListener("mouseleave", () => {
            slideInterval = setInterval(autoSlide, 4000);
        });

        /* ================= CLEANUP (REQUIRED) ================= */
        return () => {
            clearInterval(slideInterval);
        };

    }, []);


    return (
        <>
            <div className="container-hero">
                <div className="image-box">
                    <img src="/bannerImage2.png" />
                </div>

                <div className="content-right">
                    <h1 className="hero-heading">
                        Great<span style={{ color: "#2563eb" }}>Hire</span> Insights - The Future of Work
                    </h1>

                    <p className="hero-content">
                        “Your all-in-one platform for job applications and recruitment—connecting talent with opportunity and
                        empowering professionals to seize new possibilities in an evolving world of work.”
                    </p>

                    <i style={{ color: "#828890", fontWeight: 600 }}>-GreatHire</i>
                </div>
            </div>

            <section className="blog-section">
                <div className="blog-header">
                    <div>
                        <h2>Our Recent Articles</h2>
                        <p>Stay Informed with Our Latest Insights</p>
                    </div>

                    <div className="nav-buttons">
                        <button id="prevBtn">&larr;</button>
                        <button id="nextBtn">&rarr;</button>
                    </div>
                </div>

                <div className="blog-cards" id="blogCards">
                    <div className="blog-card">
                        <img src="https://images.unsplash.com/photo-1587614382346-ac9a5f3efb3f" />
                        <div className="card-content">
                            <div className="meta">
                                <span className="author">Sam Pitak</span>
                                <span className="date">20 Apr 2024</span>
                            </div>
                            <h3>Mastering
                                remote work</h3>
                            <p>POS systems now do much more than process payments.</p>
                            <a href="#">Read More →</a>
                        </div>
                    </div>

                    <div className="blog-card">
                        <img src="https://images.unsplash.com/photo-1556741533-f6acd647d2fb" />
                        <div className="card-content">
                            <div className="meta">
                                <span className="author">Yuli Sumpil</span>
                                <span className="date">20 Apr 2024</span>
                            </div>
                            <h3>From Store to Online</h3>
                            <p>Learn how POS systems integrate online and offline.</p>
                            <a href="#">Read More →</a>
                        </div>
                    </div>

                    <div className="blog-card">
                        <img src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9" />
                        <div className="card-content">
                            <div className="meta">
                                <span className="author">Ambon Fanda</span>
                                <span className="date">20 Apr 2024</span>
                            </div>
                            <h3>Security First</h3>
                            <p>Protect your business with modern POS security.</p>
                            <a href="#">Read More →</a>
                        </div>
                    </div>

                    <div className="blog-card">
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" />
                        <div className="card-content">
                            <div className="meta">
                                <span className="author">John Doe</span>
                                <span className="date">21 Apr 2024</span>
                            </div>
                            <h3>Smart Analytics</h3>
                            <p>Use data analytics to grow your business faster.</p>
                            <a href="#">Read More →</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="trending">
                <div className="container-tranding">
                    <div className="tranding-left">
                        <h1>
                            <span style={{ color: "rgb(51, 143, 249)" }}>Featured</span> Articles You<br />Need To Read
                        </h1>
                        <p>
                            Stay Ahead of the Curve and Dive Deep into the Must-Read
                            Trending Articles that Keep You Informed and Inspired
                        </p>

                        <div className="icon-box">
                            <img src="/vector1-removebg-preview.png" alt="vector" />
                        </div>
                    </div>

                    <div className="tranding-right">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc" />
                            <div className="card-content">
                                <span className="category retail">Retail</span>
                                <h3>Retail Revolution: Enhancing Sales with Cutting-Edge POS Systems</h3>
                                <p>
                                    One of the key benefits of cutting-edge POS systems is their ability to streamline sales
                                    processes...
                                </p>
                                <a href="#">Read More →</a>
                            </div>
                        </div>

                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83" />
                            <div className="card-content">
                                <span className="category restaurant">Restaurant</span>
                                <h3>Culinary Control: Managing Orders and Inventory with Restaurant POS Systems</h3>
                                <p>
                                    In the fast-paced world of restaurant management, efficiency and accuracy are paramount...
                                </p>
                                <a href="#">Read More →</a>
                            </div>
                        </div>

                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4" />
                            <div className="card-content">
                                <span className="category hospitality">Hospitality</span>
                                <h3>Hospitality Harmony: Transforming Guest Experience with Hotel POS Systems</h3>
                                <p>
                                    Hotel POS systems also play a crucial role in enhancing room service and dining
                                    experiences...
                                </p>
                                <a href="#">Read More →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="trending reverse">
                <div className="container-tranding">
                    <div className="tranding-right">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc" />
                            <div className="card-content">
                                <span className="category retail">Retail</span>
                                <h3>Retail Revolution: Enhancing Sales with Cutting-Edge POS Systems</h3>
                                <p>
                                    One of the key benefits of cutting-edge POS systems is their ability to streamline sales
                                    processes...
                                </p>
                                <a href="#">Read More →</a>
                            </div>
                        </div>

                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83" />
                            <div className="card-content">
                                <span className="category restaurant">Restaurant</span>
                                <h3>Culinary Control: Managing Orders and Inventory with Restaurant POS Systems</h3>
                                <p>
                                    In the fast-paced world of restaurant management, efficiency and accuracy are paramount...
                                </p>
                                <a href="#">Read More →</a>
                            </div>
                        </div>

                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4" />
                            <div className="card-content">
                                <span className="category hospitality">Hospitality</span>
                                <h3>Hospitality Harmony: Transforming Guest Experience with Hotel POS Systems</h3>
                                <p>
                                    Hotel POS systems also play a crucial role in enhancing room service and dining
                                    experiences...
                                </p>
                                <a href="#">Read More →</a>
                            </div>
                        </div>
                    </div>

                    <div className="tranding-left">
                        <h1>
                            Career <span style={{ color: "rgb(51, 143, 249)" }}>Advices</span> You
                        </h1>
                        <p>
                            Stay Ahead of the Curve and Dive Deep into the Must-Read
                            Trending Articles that Keep You Informed and Inspired
                        </p>

                        <div className="icon-box">
                            <img src="/vector2-removebg-preview.png" alt="vector" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="insights-section">
                <h2>Industry Insights</h2>
                <p className="section-desc">Quick guidance to help you grow, prepare, and succeed</p>

                <div className="custom-container">
                    <div className="slider-mask">
                        <div className="slider-wrapper">
                            <div className="slider" id="cardSlider">
                                <div className="insight-card">
                                    <div className="insight-card-content">
                                        <h5>Career Advice</h5>
                                        <p>Guidance to shape your professional journey.</p>
                                    </div>
                                    <div className="insight-card-image">
                                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                    </div>
                                </div>

                                <div className="insight-card">
                                    <div className="insight-card-content">
                                        <h5>Hiring Advice</h5>
                                        <p>What recruiters really look for.</p>
                                    </div>
                                    <div className="insight-card-image">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" />
                                    </div>
                                </div>

                                <div className="insight-card">
                                    <div className="insight-card-content">
                                        <h5>Resume Tips</h5>
                                        <p>Create resumes that get shortlisted.</p>
                                    </div>
                                    <div className="insight-card-image">
                                        <img src="https://cdn-icons-png.flaticon.com/512/942/942748.png" />
                                    </div>
                                </div>

                                <div className="insight-card">
                                    <div className="insight-card-content">
                                        <h5>HR Insights</h5>
                                        <p>Understand workplace expectations.</p>
                                    </div>
                                    <div className="insight-card-image">
                                        <img src="https://cdn-icons-png.flaticon.com/512/921/921347.png" />
                                    </div>
                                </div>

                                <div className="insight-card">
                                    <div className="insight-card-content">
                                        <h5>Trending Topics</h5>
                                        <p>Stay updated with job market trends.</p>
                                    </div>
                                    <div className="insight-card-image">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogPage;