import { useEffect } from "react";
import Lottie from "lottie-react";
import animPOS from "../assets/Chagee.json";
import animOnline from "../assets/Analytics Character Animation.json";
import animSecurity from "../assets/Sushi.json";


function BlogPage() {
    useEffect(() => {
        /* ================= BLOG SLIDER ================= */
        const blogCards = document.getElementById("blogCards");
        const nextBtn = document.getElementById("nextBtn");
        const prevBtn = document.getElementById("prevBtn");

        if (!blogCards || !nextBtn || !prevBtn) return;

        const card = document.querySelector(".blog-card");
        if (!card) return;

        const scrollAmount = card.offsetWidth + 24;

        nextBtn.onclick = () => (blogCards.scrollLeft += scrollAmount);
        prevBtn.onclick = () => (blogCards.scrollLeft -= scrollAmount);

        /* ================= INSIGHT SLIDER ================= */
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

    const insightData = [
        {
            title: "Career Advice",
            animation: animPOS,
        },
        {
            title: "Hiring Advice",
            animation: animOnline,
        },
        {
            title: "Resume Tips",
            animation: animSecurity,
        },
        {
            title: "Trending Topics",
            animation: animPOS,
        },
    ];

    return (
        <>
            {/* ================= HERO ================= */}
            <section className="grid gap-12 items-center py-16 px-8">
                {/* <div style={{
                    backgroundImage: `url(/ban2.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "500px",
                    width: "100%"
                }}> */}

                <div className="relative min-h-[600px]">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/video2.mp4"
                        autoPlay
                        muted
                        loop
                    ></video>

                    <div className="relative z-10 flex items-center justify-end min-h-screen p-8">
                        <div className="text-right text-black max-w-xl">
                            <h1 className="text-4xl font-bold leading-tight">
                                <span className="text-5xl">Great<span className="text-blue-600">Hire</span></span> Insights – <br />
                                The Future of Work
                            </h1>

                            <p className="mt-4 ps-20">
                                “Your all-in-one platform for job applications and recruitment—connecting
                                talent with opportunity and empowering professionals to seize new
                                possibilities in an evolving world of work.”
                            </p>

                            <p className="mt-3 italic font-semibold">– GreatHire</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= BLOG SLIDER ================= */}
            <section className="py-16 px-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-bold">Our Recent Articles</h2>
                        <p className="text-gray-500">
                            Stay informed with our latest insights
                        </p>
                    </div>

                    <div className="space-x-2">
                        <button
                            id="prevBtn"
                            className="px-4 py-2 border rounded-full hover:bg-gray-100"
                        >
                            ←
                        </button>
                        <button
                            id="nextBtn"
                            className="px-4 py-2 border rounded-full hover:bg-gray-100"
                        >
                            →
                        </button>
                    </div>
                </div>

                <div
                    id="blogCards"
                    className="flex gap-6 overflow-x-auto scroll-smooth"
                >
                    {[
                        "Mastering Remote Work",
                        "From Store to Online",
                        "Security First",
                        "Smart Analytics",
                    ].map((title, i) => (
                        <div
                            key={i}
                            className="blog-card min-w-[320px] bg-white rounded-xl shadow hover:shadow-lg"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                                className="h-48 w-full object-cover rounded-t-xl"
                            />
                            <div className="p-6">
                                <h3 className="font-semibold text-lg">{title}</h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    POS systems now do much more than process payments.
                                </p>
                                <a
                                    href="#"
                                    className="inline-block mt-4 text-blue-600 font-semibold"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= FEATURED ARTICLES ================= */}
            <section className="py-20 bg-gray-50 px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold">
                            <span className="text-blue-600">Featured</span> Articles
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Must-read articles to stay ahead in your industry.
                        </p>
                        <img src="/vector1-removebg-preview.png" className="mt-6 w-56" />
                    </div>

                    <div className="space-y-6">
                        {["Retail", "Restaurant", "Hospitality"].map((cat, i) => (
                            <div key={i} className="bg-white rounded-xl shadow p-6">
                                <span className="text-sm text-blue-600 font-semibold">
                                    {cat}
                                </span>
                                <h3 className="font-bold text-lg mt-2">
                                    Enhancing Business with Smart POS
                                </h3>
                                <p className="text-gray-600 mt-2 text-sm">
                                    Learn how modern POS systems transform operations.
                                </p>
                                <a
                                    href="#"
                                    className="text-blue-600 font-semibold mt-3 inline-block"
                                >
                                    Read More →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CAREER ADVICE ================= */}
            <section className="py-20 px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        {["Resume Tips", "Hiring Trends", "Interview Prep"].map(
                            (item, i) => (
                                <div key={i} className="bg-white rounded-xl shadow p-6">
                                    <h3 className="font-bold text-lg">{item}</h3>
                                    <p className="text-gray-600 mt-2 text-sm">
                                        Practical advice to grow your career.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-blue-600 font-semibold mt-3 inline-block"
                                    >
                                        Read More →
                                    </a>
                                </div>
                            )
                        )}
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold">
                            Career <span className="text-blue-600">Advice</span>
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Expert guidance to help you succeed professionally.
                        </p>
                        <img src="/vector2-removebg-preview.png" className="mt-6 w-56" />
                    </div>
                </div>
            </section>

            {/* ================= INSIGHTS SLIDER ================= */}
            <section className="bg-gray-50 py-16 px-8 rounded-xl">
                <h2 className="text-center text-3xl font-bold">Industry Insights</h2>
                <p className="text-center text-gray-500 mt-2">
                    Quick guidance for professionals
                </p>

                <div className="overflow-hidden mt-10">
                    <div
                        id="cardSlider"
                        className="flex gap-6 transition-transform duration-500"
                    >
                        {insightData.map((item, i) => (
                            <div
                                key={i}
                                className="insight-card min-w-[300px] bg-white p-8 rounded-xl shadow flex flex-col items-center text-center"
                            >
                                <Lottie
                                    animationData={item.animation}
                                    loop
                                    className="w-40 h-40"
                                />

                                <h5 className="font-semibold text-lg mt-4">{item.title}</h5>

                                <p className="text-gray-600 mt-2">
                                    Guidance to boost your professional journey.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogPage;