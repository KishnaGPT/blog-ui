import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import career from "../assets/Career Animation.json";
import hiring from "../assets/Human Resources Approval Animation.json";
import resume from "../assets/Recolored job proposal review animation.json";
import remoteWork from "../assets/Work from Home.json";
import { Link } from "react-router-dom"; //npm install react-router-dom

// Slides data outside component to prevent recreation
const slides = [
  {
    title: "The future technology",
    description: "The future of technology begins with bold ideas. At Capgemini, we bring those ideas to life – as intended.",
    image: "./3320008.jpg",

  },
  {
    title: "Innovation drives growth",
    description: "We transform businesses through cutting-edge technology solutions and innovative approaches.",
    image: "./innovation-bg.png",

  },
  {
    title: "Digital transformation",
    description: "Empowering organizations to thrive in the digital age with our expertise and solutions.",
    image: "./digital_bg.jpg"
  },
  {
    title: "Technology solutions",
    description: "Building the future with scalable, secure, and sustainable technology platforms.",
    image: "./technology-solutions_bg.jpg"
  }
];

function Moin_blog_page() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality for blog slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Insight slider functionality
  useEffect(() => {
    const slider = document.getElementById("cardSlider");
    const cards = document.querySelectorAll(".insight-card");
    if (!slider || cards.length === 0) return;

    let index = 0;
    const cardWidth = 320;

    const autoSlide = () => {
      index++;
      if (index > cards.length - 3) index = 0;
      slider.style.transform = `translateX(-${index * cardWidth}px)`;
    };

    let interval = setInterval(autoSlide, 4000);
    slider.onmouseenter = () => clearInterval(interval);
    slider.onmouseleave = () => (interval = setInterval(autoSlide, 4000));

    return () => clearInterval(interval);
  }, []);


  const [CardCurrentSlide, setCardCurrentSlide] = useState(0);

  // Static product data
  const staticProduct = {
    title: "Featured ",
    subtitle: "Articles",
    description: "This is our flagship product with outstanding features and benefits for your business.",
    image: "./feature_article.png",
    date: "December 24, 2024",
    category: "Trending"
  };

  // Carousel products data
  const carouselProducts = [
    {
      title: "Mastering",
      subtitle: "remote work",
      description: "Successful remote hiring needs clear communication, strong collaboration tools, and structured onboarding. GreatHire.in helps you find top remote talent and build strong, engaged teams effortlessly.",
      image: "./vector.png",
      date: "December 20, 2024",
      category: "Featured"
    },
    {
      title: "AI",
      subtitle: "Recruitment",
      description: "AI is revolutionizing recruitment by enabling faster, smarter hiring with resume screening, Job seekers gain personalized job recommendations and quicker interview processes with GreatHire.in",
      image: "./19276.jpg",
      date: "December 18, 2024",
      category: "Featured"
    },
    {
      title: "Build ",
      subtitle: "Winning Resumes",
      description: "Make a strong first impression with a standout resume with key skills and clean formatting, optimized for ATS. GreatHire.in helps you land your ideal job by connecting you with the best opportunities.",
      image: "/product-3.jpg",
      date: "December 15, 2024",
      category: "Trending"
    },
    {
      title: "Interview",
      subtitle: "Preparations",
      description: "Research the company, practice questions, and present yourself professionally. GreatHire.in provides expert tips and top job opportunities to help you succeed and make a lasting impression.",
      image: "/product-4.jpg",
      date: "December 12, 2024",
      category: "Featured"
    },
    {
      title: "The Future",
      subtitle: "Of Work",
      description: "AI-driven hiring, remote work, and flexible roles are reshaping the workplace, making upskilling crucial. GreatHire.in keeps you informed on trends and connects you to top career opportunities.",
      image: "/product-5.jpg",
      date: "December 10, 2024",
      category: "Trending"
    },
    {
      title: "Upskilling for ",
      subtitle: "Career Growth",
      description: "Continuous learning is essential for career advancement, with in-demand skills shifting toward AI, cloud computing, and data analytics. Investing in online courses, certifications.",
      image: "/product-5.jpg",
      date: "December 10, 2024",
      category: "Trending"
    }
  ];

  const nextCardSlide = () => {
    setCardCurrentSlide((prev) => (prev + 1) % carouselProducts.length);
  };

  const prevCardSlide = () => {
    setCardCurrentSlide((prev) => (prev - 1 + carouselProducts.length) % carouselProducts.length);
  };

  const goToCardSlide = (index) => {
    setCardCurrentSlide(index);
  };


  const articles = [
    {
      id: 1,
      title: "Advance Your Career in Tech",
      description: "Explore top opportunities with GreatHire.in, gain expert insights, and access resources to accelerate your growth. Stay ahead by upskilling, following industry trends, and landing your dream job.",
      image: "./971.jpg",
      category: "Business",
      author: "Moin Shaikh",
      date: "December 20, 2024",

    },
    {
      id: 2,
      title: "Work-Life Balance Tips",
      description: "Balancing work and personal life is essential for success. Set realistic boundaries, take breaks, and manage time to reduce stress. GreatHire.in offers flexible job opportunities for a healthy work-life balance.",
      image: "./feature_article.png",
      category: "Technology",
      author: "Moin Shaikh",
      date: "December 18, 2024",

    },
    {
      id: 3,
      title: "Networking For Career Growth",
      description: "Networking opens doors to career growth engage on LinkedIn, attend events, and build meaningful connections. GreatHire.in helps you find the right opportunities and insights to advance your career.",
      image: "./networking_bg.png",
      category: "Network",
      author: "Moin Shaikh",
      date: "December 15, 2024",

    }

  ];


  const HiringAdvices = [
    {
      id: 1,
      title: "Mastering Remote Work",
      description: "Successful remote hiring needs clear communication, strong collaboration tools, and structured onboarding. GreatHire.in helps you find top remote talent and build strong, engaged teams effortlessly.",
      image: "./Mastering_remote_work.png",
      link: "",
      overlayText: "",
      overlaySubtext: ""
    },
    {
      id: 2,
      title: "AI For Recruitment",
      description: "AI is revolutionizing recruitment by enabling faster, smarter hiring with resume screening, Job seekers gain personalized job recommendations and quicker interview processes with GreatHire.in.",
      image: "./AI_recruitment.jpg",
      link: "",
      overlayText: "",
      overlaySubtext: ""
    },
    {
      id: 3,
      title: "Industry-Specific Hiring",
      description: "Tech hiring emphasizes AI, cloud computing, and cybersecurity skills, while non-tech sectors focus on adaptability, customer experience. Remote work and gig economy roles are growing across both industries.",
      image: "./Industry_work.png",
      link: "",
      overlayText: "",
      overlaySubtext: ""
    }
  ];

  const TrendingTopics = [
    {
      id: 1,
      title: "The Future of Work",
      description: "Successful remote hiring needs clear communication, strong collaboration tools, and structured onboarding. GreatHire.in helps you find top remote talent and build strong, engaged teams effortlessly.",
      image: "./future_of_work.png",
      link: "",
      overlayText: "",
      overlaySubtext: ""
    },
    {
      id: 2,
      title: "AI For Recruitment",
      description: "AI is revolutionizing recruitment by enabling faster, smarter hiring with resume screening, Job seekers gain personalized job recommendations and quicker interview processes with GreatHire.in.",
      image: "./AI_recruitment.jpg",
      link: "",
      overlayText: "",
      overlaySubtext: ""
    },
    {
      id: 3,
      title: "Industry-Specific Hiring",
      description: "Tech hiring emphasizes AI, cloud computing, and cybersecurity skills, while non-tech sectors focus on adaptability, customer experience. Remote work and gig economy roles are growing across both industries.",
      image: ".png",
      link: "",
      overlayText: "",
      overlaySubtext: ""
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const insightsData = [
    {
      id: 1,
      category: "Resume Tips",
      title: "Building a Winning Resume",
      date: "19 Dec, 2025",
      image: "./Resume_bg.png",
      link: "#",
      descriptions: "A strong resume showcases skills, achievements, and experience with clear formatting and relevant keywords. GreatHire.in helps you find top talent with ATS-friendly resumes for faster, smarter hiring."
    },
    {
      id: 2,
      category: "Resume Tips",
      title: "ATS Optimization",
      date: "18 Dec, 2025",
      image: "./ATS_bg.png",
      link: "#",
      descriptions: "In today's job market, an ATS-friendly resume is crucial to get noticed. Applicant Tracking Systems scan resumes for key criteria before they reach recruiters."
    },
    {
      id: 3,
      category: "Resume Tips",
      title: "Using Keywords",
      date: "17 Dec, 2025",
      image: "./Keyword_bg.png",
      link: "#",
      descriptions: "Using industry-specific keywords boosts your resume's visibility to ATS. Review job descriptions to spot and include common terms and phrases."
    },
    {
      id: 4,
      category: "HR Insights",
      title: "Interview Preparation",
      date: "16 Dec, 2025",
      image: "./Interview_bg.png",
      link: "#",
      descriptions: "A structured interview process helps assess candidates through behavioral questions, cultural fit, and problem-solving skills. GreatHire.in offers expert insights and AI-driven tools to streamline hiring and find the best talent."
    }
  ];

  // Auto-play carousel with 5 second timing
  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % insightsData.length);
    }, 5000); // Change slide every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(carouselTimer);
  }, [insightsData.length]);

  const jumpToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <style>
        {`
          /* ================= VIDEO BANNER SECTION ================= */
          .video-banner-section {
            position: relative;
            width: 100%;
            min-height: 100vh;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 4rem 4rem;
          }

          .video-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
          }

          .video-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.3);
            z-index: 1;
          }

          .content-wrapper {
            position: relative;
            z-index: 10;
            max-width: 640px;
            width: 100%;
            text-align: center;
            color: #000;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.85);
            border-radius: 1rem;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
          }

          .main-title {
            font-size: 2.5rem;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 1.5rem;
          }

          .brand-name {
            font-size: 3rem;
            font-weight: 700;
          }

          .highlight-text {
            color: #2563eb;
          }

          .description-text {
            font-size: 1rem;
            line-height: 1.7;
            margin-top: 1.5rem;
            padding: 0 2rem;
            color: #374151;
          }

          .author-text {
            font-size: 1rem;
            font-weight: 600;
            font-style: italic;
            margin-top: 1rem;
            color: #1f2937;
          }

          /* ================= BLOG SLIDER SECTION ================= */
          .slider-section {
            position: relative;
            width: 100%;
            height: 70vh;
            min-height: 500px;
            overflow: hidden;
            background: linear-gradient(135deg, #1e3a5f 0%, #2c5f7e 100%);
          }

          .slider-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            transition: opacity 0.6s ease-in-out;
          }

          .slider-background::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%);
          }

          .slider-content {
            position: relative;
            z-index: 10;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0 4rem;
            max-width: 1400px;
            margin: 0 auto;
          }

          .content-box {
            background: rgba(31, 41, 55, 0.85);
            backdrop-filter: blur(10px);
            padding: 3rem;
            border-radius: 12px;
            max-width: 600px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          }

          .slide-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 1.5rem;
            line-height: 1.2;
          }

          .slide-description {
            font-size: 1.125rem;
            color: #d1d5db;
            line-height: 1.7;
            margin-bottom: 2rem;
          }

          .slider-controls {
            position: absolute;
            bottom: 3rem;
            left: 4rem;
            display: flex;
            align-items: center;
            gap: 2rem;
            z-index: 20;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(10px);
            padding: 1rem 1.5rem;
            border-radius: 50px;
          }

          .nav-arrow {
            width: 40px;
            height: 40px;
            background: transparent;
            border: 2px solid rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            color: #ffffff;
            font-size: 1.25rem;
          }

          .nav-arrow:hover {
            background: rgba(255, 255, 255, 0.2);
            border-color: #ffffff;
            transform: scale(1.1);
          }

          .pagination-dots {
            display: flex;
            gap: 0.75rem;
            align-items: center;
          }

          .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.4);
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
          }

          .dot.active {
            background: #3b82f6;
            width: 14px;
            height: 14px;
            border-color: rgba(59, 130, 246, 0.3);
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
          }

          .dot:hover {
            background: rgba(255, 255, 255, 0.7);
            transform: scale(1.2);
          }

          .read-more-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            background: transparent;
            color: #ffffff;
            border: 2px solid rgba(255, 255, 255, 0.5);
            padding: 0.75rem 2rem;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .read-more-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: #ffffff;
            transform: translateX(5px);
          }

          .read-more-btn .arrow {
            font-size: 1.25rem;
            transition: transform 0.3s ease;
          }

          .read-more-btn:hover .arrow {
            transform: translateX(5px);
          }

          /* ================= TABLET RESPONSIVE (768px - 1023px) ================= */
          @media (max-width: 1023px) {
            /* Video Banner */
            .video-banner-section {
              min-height: 80vh;
              padding: 3rem 1.5rem;
            }

            .content-wrapper {
              padding: 1.5rem;
            }

            .main-title {
              font-size: 2rem;
            }

            .brand-name {
              font-size: 2.5rem;
            }

            .description-text {
              font-size: 0.95rem;
              padding: 0 1rem;
            }

            .author-text {
              font-size: 0.95rem;
            }

            /* Blog Slider */
            .slider-section {
              height: 60vh;
              min-height: 450px;
            }

            .slider-content {
              padding: 0 2rem;
            }

            .content-box {
              padding: 2.5rem;
              max-width: 550px;
            }

            .slide-title {
              font-size: 2rem;
            }

            .slide-description {
              font-size: 1rem;
            }

            .slider-controls {
              bottom: 2rem;
              left: 2rem;
              padding: 0.875rem 1.25rem;
            }
          }

          /* ================= MOBILE RESPONSIVE (below 768px) ================= */
          @media (max-width: 767px) {
            /* Video Banner */
            .video-banner-section {
              min-height: 100vh;
              padding: 2rem 1rem;
              align-items: flex-end;
              justify-content: center;
              padding-bottom: 3rem;
            }

            .content-wrapper {
              padding: 1.5rem 1rem;
              max-width: 100%;
            }

            .main-title {
              font-size: 1.5rem;
              margin-bottom: 1rem;
            }

            .brand-name {
              font-size: 2rem;
              display: block;
              margin-bottom: 0.5rem;
            }

            .description-text {
              font-size: 0.875rem;
              line-height: 1.6;
              padding: 0;
              margin-top: 1rem;
            }

            .author-text {
              font-size: 0.875rem;
              margin-top: 0.75rem;
            }

            /* Blog Slider */
            .slider-section {
              height: 100vh;
              min-height: 600px;
            }

            .slider-content {
              padding: 1rem;
              align-items: flex-end;
              padding-bottom: 6rem;
            }

            .content-box {
              padding: 2rem 1.5rem;
              max-width: 100%;
              width: 100%;
            }

            .slide-title {
              font-size: 1.75rem;
              margin-bottom: 1rem;
            }

            .slide-description {
              font-size: 0.938rem;
              line-height: 1.6;
              margin-bottom: 1.5rem;
            }

            .slider-controls {
              bottom: 1.5rem;
              left: 50%;
              transform: translateX(-50%);
              padding: 0.75rem 1rem;
              gap: 1.5rem;
            }

            .nav-arrow {
              width: 36px;
              height: 36px;
              font-size: 1rem;
            }

            .dot {
              width: 10px;
              height: 10px;
            }

            .dot.active {
              width: 12px;
              height: 12px;
            }

            .read-more-btn {
              padding: 0.625rem 1.5rem;
              font-size: 0.938rem;
            }
          }

          /* ================= EXTRA SMALL MOBILE (below 480px) ================= */
          @media (max-width: 479px) {
            /* Video Banner */
            .video-banner-section {
              padding: 1.5rem 0.75rem;
            }

            .content-wrapper {
              padding: 1.25rem 0.875rem;
              border-radius: 0.75rem;
            }

            .main-title {
              font-size: 1.25rem;
            }

            .brand-name {
              font-size: 1.75rem;
            }

            .description-text {
              font-size: 0.813rem;
            }

            .author-text {
              font-size: 0.813rem;
            }

            /* Blog Slider */
            .slider-section {
              min-height: 550px;
            }

            .content-box {
              padding: 1.5rem 1.25rem;
            }

            .slide-title {
              font-size: 1.5rem;
            }

            .slide-description {
              font-size: 0.875rem;
            }

            .slider-controls {
              gap: 1rem;
              padding: 0.625rem 0.875rem;
            }

            .nav-arrow {
              width: 32px;
              height: 32px;
            }

            .pagination-dots {
              gap: 0.5rem;
            }

            .dot {
              width: 8px;
              height: 8px;
            }

            .dot.active {
              width: 10px;
              height: 10px;
            }

            .read-more-btn {
              padding: 0.5rem 1.25rem;
              font-size: 0.875rem;
            }
          }

            /* ================= FEATURED ARTICLES SECTION ================= */
           /* Main Section Container */
          .conversations-section {
            position: relative;
            width: 100%;
            min-height: 350px;
            overflow: hidden;
            display: flex;
            align-items: center;
            background: #1a1d29;
            padding: 4rem 2rem;
          }

          /* Background Image */
          .conversations-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            opacity: 0.4;
            z-index: 0;
          }

          /* Dark Overlay */
          .conversations-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, rgba(26, 29, 41, 0.95) 0%, rgba(26, 29, 41, 0.7) 50%, rgba(26, 29, 41, 0.3) 100%);
            z-index: 1;
          }

          /* Content Container */
          .conversations-content {
            position: relative;
            z-index: 10;
            max-width: 1400px;
            margin: 0 auto;
            width: 100%;
          }

          /* Text Content Box */
          .text-content {
            max-width: 650px;
            padding: 3rem;
            background: rgba(26, 29, 41, 0.6);
            backdrop-filter: blur(10px);
            border-radius: 0;
          }

          .section-title {
            font-size: 2.75rem;
            font-weight: 400;
            color: #ffffff;
            margin-bottom: 2rem;
            line-height: 1.3;
            letter-spacing: -0.5px;
          }

          .section-description {
            font-size: 1.125rem;
            color: #e5e7eb;
            line-height: 1.8;
            margin-bottom: 3rem;
            font-weight: 300;
          }

          /* Explore Button */
          .explore-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            background: transparent;
            color: #ffffff;
            border: 2px solid rgba(255, 255, 255, 0.6);
            padding: 1rem 2.5rem;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            letter-spacing: 0.3px;
          }

          .explore-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: #ffffff;
            transform: translateX(5px);
          }

          .explore-btn .arrow {
            font-size: 1.5rem;
            transition: transform 0.3s ease;
            font-weight: 700;
          }

          .explore-btn:hover .arrow {
            transform: translateX(5px);
          }

          /* Tablet Responsive (768px - 1023px) */
          @media (max-width: 1023px) {
            .conversations-section {
              min-height: 500px;
              padding: 3rem 1.5rem;
            }

            .text-content {
              max-width: 600px;
              padding: 2.5rem;
            }

            .section-title {
              font-size: 2.25rem;
            }

            .section-description {
              font-size: 1rem;
              margin-bottom: 2.5rem;
            }

            .explore-btn {
              padding: 0.875rem 2rem;
              font-size: 0.938rem;
            }
          }

          /* Mobile Responsive (below 768px) */
          @media (max-width: 767px) {
            .conversations-section {
              min-height: 550px;
              padding: 2rem 1rem;
              align-items: center;
            }

            .conversations-overlay {
              background: linear-gradient(to bottom, rgba(26, 29, 41, 0.85) 0%, rgba(26, 29, 41, 0.95) 100%);
            }

            .conversations-background {
              opacity: 0.3;
            }

            .text-content {
              max-width: 100%;
              padding: 2rem 1.5rem;
              background: rgba(26, 29, 41, 0.7);
              text-align: center;
            }

            .section-title {
              font-size: 1.875rem;
              margin-bottom: 1.5rem;
            }

            .section-description {
              font-size: 0.938rem;
              line-height: 1.7;
              margin-bottom: 2rem;
            }

            .explore-btn {
              padding: 0.75rem 2rem;
              font-size: 0.875rem;
              width: 100%;
              justify-content: center;
              max-width: 280px;
            }
          }

          /* Extra Small Mobile (below 480px) */
          @media (max-width: 479px) {
            .conversations-section {
              min-height: 500px;
              padding: 1.5rem 0.75rem;
            }

            .text-content {
              padding: 1.5rem 1.25rem;
            }

            .section-title {
              font-size: 1.625rem;
            }

            .section-description {
              font-size: 0.875rem;
              line-height: 1.6;
            }

            .explore-btn {
              padding: 0.625rem 1.5rem;
              font-size: 0.813rem;
            }

            .explore-btn .arrow {
              font-size: 1.25rem;
            }
          }

          ================= CARDSLIDER =================
            /* Carousel Slide Animations */
          .carousel-slide {
            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
          }

          .carousel-slide.active {
            opacity: 1;
            transform: translateX(0);
          }

          .carousel-slide.inactive {
            opacity: 0;
            transform: translateX(20px);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
          }

          /* Image Hover Effect */
          .product-image-hover {
            transition: transform 0.3s ease;
          }

          .product-card:hover .product-image-hover {
            transform: scale(1.05);
          }

          /* Pagination Dot Animation */
          @keyframes dotPulse {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
            }
            50% {
              box-shadow: 0 0 0 6px rgba(59, 130, 246, 0);
            }
          }

          .pagination-dot.active {
            animation: dotPulse 2s infinite;
          }

          /* Arrow Button Hover */
          .carousel-arrow {
            transition: all 0.3s ease;
          }

          .carousel-arrow:hover {
            transform: scale(1.1);
          }

           /* Article Image Hover Effect */
          .article-image-container {
            overflow: hidden;
          }

          .article-image {
            transition: transform 0.4s ease;
          }

          .article-card:hover .article-image {
            transform: scale(1.1);
          }

          /* Category Badge Animation */
          .category-badge {
            transition: all 0.3s ease;
          }

          .article-card:hover .category-badge {
            transform: translateY(-3px);
          }

          /* Read More Link Animation */
          .read-more-link {
            position: relative;
            display: inline-block;
          }

          .read-more-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: #10b981;
            transition: width 0.3s ease;
          }

          .read-more-link:hover::after {
            width: 100%;
          }

          /* Author Avatar Placeholder */
          .author-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            font-size: 0.875rem;
          }

          /* ================== Job Signup Community ======================== */

             /* Talent Signup Button Hover Animation */
          .talent-signup-button {
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .talent-signup-button::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
          }

          .talent-signup-button:hover::before {
            width: 300px;
            height: 300px;
          }

          .talent-signup-button:hover {
            transform: translateX(5px);
            box-shadow: 0 10px 30px rgba(6, 182, 212, 0.4);
          }

          /* Button Arrow Animation */
          .button-arrow-icon {
            transition: transform 0.3s ease;
          }

          .talent-signup-button:hover .button-arrow-icon {
            transform: translateX(5px);
          }

          /* Community Content Card Animation */
          .community-content-card {
            animation: fadeInUpContent 1s ease-out;
          }

          @keyframes fadeInUpContent {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Background Gradient Animation */
          @keyframes backgroundGradientShift {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          .talent-community-gradient-bg {
            background-size: 200% 200%;
            animation: backgroundGradientShift 15s ease infinite;
          }

          // =============== Hiring Advice Section ================
           /* Article Card Hover Effects */
          .conversations-article-card {
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
          }

          .conversations-article-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }

          /* Image Zoom Effect */
          .article-featured-image {
            transition: transform 0.5s ease;
            filter: brightness(0.8);
          }

          .conversations-article-card:hover .article-featured-image {
            transform: scale(1.1);
            filter: brightness(0.6);
          }

          /* Overlay Text Animation */
          .article-image-overlay {
            transition: opacity 0.3s ease;
          }

          .conversations-article-card:hover .article-image-overlay {
            opacity: 1;
          }

          /* Bottom Content Slide Up */
          .article-content-wrapper {
            transition: all 0.3s ease;
          }

          .conversations-article-card:hover .article-content-wrapper {
            background: rgba(26, 32, 44, 0.98);
          }

          /* Link Underline Animation */
          .article-read-more-link {
            position: relative;
            display: inline-block;
          }

          .article-read-more-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: #06b6d4;
            transition: width 0.3s ease;
          }

          .article-read-more-link:hover::after {
            width: 100%;
          }

          /* Title Color Shift */
          .article-card-title {
            transition: color 0.3s ease;
          }

          .conversations-article-card:hover .article-card-title {
            color: #06b6d4;
          }

          /* Fade In Animation on Load */
          .conversations-articles-container {
            animation: fadeInContainer 0.8s ease-out;
          }

          @keyframes fadeInContainer {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          ============= Resume Tips and HR Insights Section =============
          /* Main Container Border Gradient */
          .insights-carousel-box {
            position: relative;
            background: linear-gradient(90deg, 
              rgba(59, 130, 246, 0.04), 
              rgba(168, 85, 247, 0.04), 
              rgba(236, 72, 153, 0.04)
            );
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .insights-carousel-box::after {
            content: '';
            position: absolute;
            inset: -3px;
            background: linear-gradient(90deg, #3b82f6, #a855f7, #ec4899);
            border-radius: inherit;
            opacity: 0;
            z-index: -1;
            transition: opacity 0.6s ease;
          }

          .insights-carousel-box:hover::after {
            opacity: 0.75;
          }

          .insights-carousel-box:hover {
            background: linear-gradient(90deg, 
              rgba(59, 130, 246, 0.07), 
              rgba(168, 85, 247, 0.07), 
              rgba(236, 72, 153, 0.07)
            );
          }

          /* Slide Visibility Control */
          .insight-slide-panel {
            width: 100%;
            transition: all 0.7s ease-in-out;
          }

          .insight-slide-panel.show {
            opacity: 1;
            visibility: visible;
            display: block;
          }

          .insight-slide-panel.hide {
            opacity: 0;
            visibility: hidden;
            display: none;
          }

          /* Image Transform Effect */
          .insight-visual-media {
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            filter: grayscale(0) brightness(1);
          }

          .insights-carousel-box:hover .insight-visual-media {
            transform: scale(1.06) rotate(0.5deg);
            filter: grayscale(0) brightness(1.1);
          }

          /* Title Gradient Animation */
          .insight-heading-text {
            transition: all 0.4s ease;
          }

          .insights-carousel-box:hover .insight-heading-text {
            background: linear-gradient(90deg, #3b82f6, #a855f7, #ec4899);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          /* Category Label Hover */
          .insight-category-label {
            transition: all 0.3s ease;
          }

          .insights-carousel-box:hover .insight-category-label {
            color: #a855f7;
          }

          .insight-category-divider {
            transition: all 0.3s ease;
          }

          .insights-carousel-box:hover .insight-category-divider {
            background: linear-gradient(90deg, #3b82f6, #a855f7);
          }

          /* Timestamp Hover */
          .insight-timestamp {
            transition: color 0.3s ease;
          }

          .insights-carousel-box:hover .insight-timestamp {
            color: #8b5cf6;
          }

          /* Call-to-Action Button */
          .insight-cta-button {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .insight-cta-button::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%);
            transform: translate(-50%, -50%);
            transition: all 0.5s ease;
            border-radius: 50%;
          }

          .insight-cta-button:hover::before {
            width: 250px;
            height: 250px;
          }

          .insight-cta-button:hover {
            transform: translateX(8px);
          }

          .insights-carousel-box:hover .insight-cta-button {
            border-color: #a855f7;
            color: #a855f7;
          }

          /* Arrow Icon Slide */
          .cta-arrow-symbol {
            transition: transform 0.4s ease;
          }

          .insight-cta-button:hover .cta-arrow-symbol {
            transform: translateX(6px);
          }

          /* Navigation Indicator */
          .indicator-bullet {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .indicator-bullet.current {
            transform: scaleX(3);
            background: linear-gradient(90deg, #3b82f6, #a855f7);
          }

          /* Gradient Text Utility */
          .text-gradient-colorful {
            background: linear-gradient(90deg, #3b82f6, #a855f7, #ec4899);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          /* Fade In Animation */
          @keyframes slideInFromRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .insight-slide-panel.show {
            animation: slideInFromRight 0.6s ease-out;
          }
        `}
      </style>

      {/* ================= VIDEO BANNER SECTION ================= */}
      <section className="video-banner-section">
        <video
          className="video-background"
          src="/video2.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        <div className="video-overlay"></div>

        <div className="content-wrapper">
          <h1 className="main-title">
            <span className="brand-name">
              Great<span className="highlight-text">Hire</span>
            </span>
            <br />
            Insights – The Future of Work
          </h1>

          <p className="description-text">
            "Your all-in-one platform for job applications and recruitment—connecting
            talent with opportunity and empowering professionals to seize new
            possibilities in an evolving world of work."
          </p>

          <p className="author-text">– GreatHire</p>
        </div>
      </section>

      {/* ================= BLOG SLIDER SECTION ================= */}
      <section className="slider-section">
        <div
          className="slider-background"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        ></div>

        <div className="slider-content">
          <div className="content-box">
            <h1 className="slide-title">{slides[currentSlide].title}</h1>
            <p className="slide-description">{slides[currentSlide].description}</p>

            <Link className="read-more-btn" to="/TheFutureTechnology">
              Read more
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>

        <div className="slider-controls">
          <button
            className="nav-arrow"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>

          <div className="pagination-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <button className="nav-arrow" onClick={nextSlide} aria-label="Next slide">
            ›
          </button>
        </div>
      </section>



      {/* ================= CAREER ADVICE SECTION ================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-3">
              Our Blogs
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Discover our latest and featured products
            </p>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* Column 1 - Static Product Card */}
            <div className="product-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-500 flex flex-col">
              {/* Image Container */}
              <div className="relative w-full h-72 sm:h-80 md:h-96 overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600">
                <img
                  src={staticProduct.image}
                  alt={staticProduct.title}
                  className="product-image-hover w-full h-full object-cover"
                />
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-white/95 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  {staticProduct.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                  <span className="text-base">📅</span>
                  <span>{staticProduct.date}</span>
                </div>

                {/* Title */}


                <h3 className="text-2xl lg:text-3xl md:text-xl sm:text-lg font-bold mb-3">
                  <span className="text-gray-900">{staticProduct.title}</span>
                  <span className="text-green-600">{staticProduct.subtitle}</span>
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 flex-grow">
                  {staticProduct.description}
                </p>

              </div>
            </div>

            {/* Column 2 - Carousel Product Card */}
            <div className="product-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
              {/* Carousel Container */}
              <div className="relative">
                {/* Navigation Arrows */}
                <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 z-20">
                  <button
                    className="carousel-arrow w-10 h-10 sm:w-12 sm:h-12 bg-white/95 border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-800 text-xl sm:text-2xl font-bold shadow-lg hover:bg-blue-500 hover:text-white hover:border-blue-500"
                    onClick={prevSlide}
                    aria-label="Previous product"
                  >
                    ‹
                  </button>
                  <button
                    className="carousel-arrow w-10 h-10 sm:w-12 sm:h-12 bg-white/95 border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-800 text-xl sm:text-2xl font-bold shadow-lg hover:bg-blue-500 hover:text-white hover:border-blue-500"
                    onClick={nextSlide}
                    aria-label="Next product"
                  >
                    ›
                  </button>
                </div>

                {/* Carousel Slides */}
                <div className="relative overflow-hidden">
                  {carouselProducts.map((product, index) => (
                    <div
                      key={index}
                      className={`carousel-slide ${currentSlide === index ? 'active' : 'inactive'
                        }`}
                    >
                      {/* Image Container */}
                      <div className="relative w-full h-72 sm:h-80 md:h-96 overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="product-image-hover w-full h-full object-cover"
                        />
                        {/* Category Badge */}
                        <span className="absolute top-4 left-4 bg-white/95 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                          {product.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Date */}
                        <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                          <span className="text-base">📅</span>
                          <span>{product.date}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                          {product.title}
                          <span className="highlight-text"> {product.subtitle}</span>
                        </h3>

                        {/* Description */}
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                          {product.description}
                        </p>

                        {/* Button */}
                        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 py-6 px-4">
                {carouselProducts.map((_, index) => (
                  <button
                    key={index}
                    className={`pagination-dot w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 border-2 ${currentSlide === index
                      ? 'bg-blue-500 border-blue-300 w-3 h-3 sm:w-3.5 sm:h-3.5 active'
                      : 'bg-gray-300 border-transparent hover:bg-gray-400'
                      }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to product ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ================= INSIGHTS SLIDER SECTION ================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal text-black mb-2">
              Career <span className="highlight-text ">Advise</span>
            </h2>
            <p className="text-lg md:text-base sm:text-sm text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest insights, trends, and expert opinions on various topics
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {articles.map((article) => (
              <div
                key={article.id}
                className="article-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Article Image */}
                <div className="article-image-container relative h-64 md:h-56 sm:h-52 bg-gradient-to-br from-gray-800 to-gray-600">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="article-image w-full h-full object-cover"
                  />
                  {/* Category Badge */}
                  <span className="category-badge absolute top-4 left-4 bg-white bg-opacity-95 text-green-600 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                    {article.category}
                  </span>
                </div>

                {/* Article Content */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Author & Date Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="author-avatar">
                        {article.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {article.author}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <span className="text-base">📅</span>
                    <span>{article.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl md:text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base md:text-sm text-gray-600 leading-relaxed mb-6 flex-grow line-clamp-3">
                    {article.description}
                  </p>

                  {/* Read More Link */}
                  <a
                    href="#"
                    className="read-more-link text-green-600 font-semibold text-base flex items-center gap-2 hover:text-green-700 transition-colors duration-300"
                  >
                    Read More
                    <span className="text-xl">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          {/* <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-8 py-4 rounded-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-base">
              View All Articles
            </button>
          </div> */}
        </div>
      </section>

      {/* =================== Hiring Advice Section ================== */}
      <section className="conversations-articles-section bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="conversations-articles-container max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="articles-section-header mb-12 text-center">
            <h2 className="conversations-main-title text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal text-white mb-2">
              Hiring <span className="highlight-text">Advices</span>
            </h2>
          </div>

          {/* Articles Grid */}
          <div className="articles-grid-layout grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {HiringAdvices.map((article) => (
              <div
                key={article.id}
                className="conversations-article-card bg-gray-800 rounded-none overflow-hidden shadow-xl"
              >
                {/* Image Section with Overlay */}
                <div className="article-image-container relative h-80 md:h-72 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="article-featured-image w-full h-full object-cover"
                  />

                  {/* Text Overlay on Image */}
                  {/* <div className="article-image-overlay absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h3 className="overlay-main-text text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontWeight: 300 }}>
                      Crafting
                    </h3>
                    <h3 className="overlay-highlight-text text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
                      Tomorrow
                    </h3>
                    <p className="overlay-subtext text-sm text-gray-300">
                      Leaders' perspective on technology
                    </p>
                  </div> */}
                </div>

                {/* Content Section */}
                <div className="article-content-wrapper bg-gray-900 p-6">
                  {/* Article Title */}
                  <h3 className="article-card-title text-xl md:text-2xl font-semibold text-white mb-4">
                    {article.title}
                  </h3>

                  {/* Article Description */}
                  <p className="article-description-text text-sm md:text-base text-gray-400 leading-relaxed mb-6 line-clamp-4">
                    {article.description}
                  </p>

                  {/* Read More Link */}
                  <a
                    href={article.link}
                    className="article-read-more-link text-cyan-400 text-sm font-normal hover:text-cyan-300 transition-colors"
                  >
                    {article.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Trending Topic ================== */}

      <section className="conversations-articles-section bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="conversations-articles-container max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="articles-section-header mb-12 text-center">
            <h2 className="conversations-main-title text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal text-white mb-2">
              Trending <span className="highlight-text">Topics</span>
            </h2>
          </div>

          {/* Articles Grid */}
          <div className="articles-grid-layout grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {TrendingTopics.map((article) => (
              <div
                key={article.id}
                className="conversations-article-card bg-gray-800 rounded-none overflow-hidden shadow-xl"
              >
                {/* Image Section with Overlay */}
                <div className="article-image-container relative h-80 md:h-72 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="article-featured-image w-full h-full object-cover"
                  />

                  {/* Text Overlay on Image */}
                  {/* <div className="article-image-overlay absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h3 className="overlay-main-text text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontWeight: 300 }}>
                      Crafting
                    </h3>
                    <h3 className="overlay-highlight-text text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
                      Tomorrow
                    </h3>
                    <p className="overlay-subtext text-sm text-gray-300">
                      Leaders' perspective on technology
                    </p>
                  </div> */}
                </div>

                {/* Content Section */}
                <div className="article-content-wrapper bg-gray-900 p-6">
                  {/* Article Title */}
                  <h3 className="article-card-title text-xl md:text-2xl font-semibold text-white mb-4">
                    {article.title}
                  </h3>

                  {/* Article Description */}
                  <p className="article-description-text text-sm md:text-base text-gray-400 leading-relaxed mb-6 line-clamp-4">
                    {article.description}
                  </p>

                  {/* Read More Link */}
                  <a
                    href={article.link}
                    className="article-read-more-link text-cyan-400 text-sm font-normal hover:text-cyan-300 transition-colors"
                  >
                    {article.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== Resume Tips and HR Insight ================== */}
      <section className="w-full py-6 sm:py-10 md:py-14 lg:py-20 px-3 sm:px-5 md:px-6 lg:px-8 bg-transparent">
        <div className="container mx-auto max-w-screen-2xl">

          {/* Header Section */}
          <header className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal text-black mb-2">
              Resume HR & <span className="highlight-text">HR Insights</span>
            </h1>
          </header>

          {/* Carousel Box */}
          <article className="insights-carousel-box rounded-2xl sm:rounded-3xl lg:rounded-[2.75rem] px-3 py-4 sm:px-5 sm:py-6 md:px-8 md:py-8 lg:px-14 lg:py-12 xl:px-20 xl:py-16 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

            {/* Slides Container */}
            <div className="relative w-full">
              {insightsData.map((item, idx) => (
                <div
                  key={item.id}
                  className={`insight-slide-panel ${activeIndex === idx ? 'show' : 'hide'
                    }`}
                >
                  {/* Grid Layout */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-5 sm:gap-6 md:gap-7 lg:gap-10 xl:gap-12">

                    {/* Visual Section */}
                    <figure className="flex-shrink-0 lg:w-1/3 xl:w-2/5">
                      <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[3/4] overflow-hidden rounded-xl sm:rounded-2xl">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="insight-visual-media w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-transparent"></div>
                      </div>
                    </figure>

                    {/* Content Section */}
                    <div className="flex-1 lg:w-2/3 xl:w-3/5 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">

                      {/* Category Badge */}
                      <div className="insight-category-label inline-flex items-center gap-2 text-slate-900 text-xs sm:text-sm md:text-base font-semibold">
                        <span className="insight-category-divider block w-7 sm:w-9 md:w-11 lg:w-12 h-px bg-slate-900"></span>
                        <span>{item.category}</span>
                      </div>

                      {/* Main Title */}
                      <h2 className="insight-heading-text text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-slate-900 leading-snug sm:leading-tight tracking-tight">
                        {item.title}
                      </h2>

                      {/* Date Stamp */}
                      <time className="insight-timestamp block text-xs sm:text-sm md:text-base text-slate-600 font-normal">
                        {item.date}
                      </time>
                      
                      {/* Description */}
                      <p className="insight-description-text text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed">
                        {item.descriptions}
                      </p>

                      {/* CTA Button */}
                      <div className="pt-2 sm:pt-3 md:pt-4">
                        <button
                          className="insight-cta-button border-2 border-slate-900 text-slate-900 font-semibold text-xs sm:text-sm md:text-base lg:text-lg px-5 py-2.5 sm:px-7 sm:py-3 md:px-9 md:py-4 lg:px-10 lg:py-4 rounded-full inline-flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto relative z-10"
                          aria-label={`Read more about ${item.title}`}
                        >
                          <span>Read More</span>
                          <span className="cta-arrow-symbol text-base sm:text-lg md:text-xl lg:text-2xl">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Indicators */}
            <nav className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 mt-6 sm:mt-8 md:mt-10 lg:mt-14" aria-label="Carousel navigation">
              {insightsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => jumpToSlide(idx)}
                  className={`indicator-bullet h-0.5 sm:h-1 rounded-full transition-all duration-400 ${activeIndex === idx
                    ? 'w-8 sm:w-10 md:w-12 lg:w-14 bg-slate-900 current'
                    : 'w-2.5 sm:w-3 md:w-4 bg-slate-400 hover:bg-slate-600'
                    }`}
                  aria-label={`Go to insight ${idx + 1}`}
                  aria-current={activeIndex === idx ? 'true' : 'false'}
                ></button>
              ))}
            </nav>
          </article>
        </div>
      </section>
      {/* ================= FEATURED ARTICLES SECTION ================= */}
      <section className="conversations-section">
        {/* Background Image */}
        <div
          className="conversations-background"
          style={{
            backgroundImage: 'url(./971.jpg)' // Replace with your image
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="conversations-overlay"></div>

        {/* Content */}
        <div className="conversations-content">
          <div className="text-content">
            <h2 className="section-title">
              <span className="brand-name" style={{ color: 'white' }}>
                Unlock Your Pontential with Great<span className="highlight-text">Hire</span>
              </span>
            </h2>

            <p className="section-description">
              Your all-in-one platform for job applications, recruitment, and much more.
              Connecting talent with opportunity!
            </p>

            <a href="#" className="explore-btn">
              Explore all Job Posting
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= Job Sign Up ================= */}
      <section className="talent-community-banner-section relative bg-gradient-to-br from-indigo-950 via-blue-950 to-indigo-900 talent-community-gradient-bg py-12 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[50vh] flex items-center justify-center">
        {/* Decorative Background Blur Elements */}
        <div className="decorative-blur-left absolute top-0 left-0 w-96 h-96 bg-cyan-500 opacity-5 blur-3xl rounded-full"></div>
        <div className="decorative-blur-right absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-5 blur-3xl rounded-full"></div>

        {/* Optional Background Pattern Overlay */}
        <div
          className="background-pattern-overlay absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: 'url(/talent-community-bg.jpg)', // Replace with your image
          }}
        ></div>

        {/* Main Content Wrapper */}
        <div className="talent-community-wrapper max-w-7xl mx-auto w-full relative z-10">
          <div className="community-content-card bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-5xl mx-auto">
            {/* Main Heading */}
            <h1 className="community-main-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-950 mb-4 sm:mb-6 leading-tight">
              Join our talent community
            </h1>

            {/* Description Text */}
            <p className="community-description-text text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque aliquid voluptates voluptatum facere delectus deserunt alias, animi sapiente! Aperiam nemo aliquid aut. Tempora, odit veritatis? Atque quia vel autem?
            </p>

            {/* Call to Action Button */}
            <Link to="/HowWeHire" className="talent-signup-button bg-cyan-500 hover:bg-cyan-600 text-indigo-950 font-semibold text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-full inline-flex items-center gap-3 shadow-lg relative z-10">
              <span className="button-text">Explore</span>
              <span className="button-arrow-icon text-xl">▷</span>
            </Link>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="bottom-gradient-fade absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-indigo-950 to-transparent pointer-events-none"></div>
      </section>


    </>
  );
}

export default Moin_blog_page;