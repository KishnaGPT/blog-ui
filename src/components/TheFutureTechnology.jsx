import React from 'react';
import career from "../assets/Career Animation.json";
import hiring from "../assets/Human Resources Approval Animation.json";
import resume from "../assets/Recolored job proposal review animation.json";
import remoteWork from "../assets/Work from Home.json";

export const TheFutureTechnology = () => {
  return (
    <>
      <style>
        {`
          /* Animated Background Particles */
          .particle {
            position: absolute;
            border-radius: 50%;
            background: rgba(59, 130, 246, 0.6);
            animation: float 6s ease-in-out infinite;
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0);
              opacity: 0.6;
            }
            50% {
              transform: translateY(-20px) translateX(10px);
              opacity: 1;
            }
          }

          .particle:nth-child(1) { top: 10%; left: 15%; width: 12px; height: 12px; animation-delay: 0s; }
          .particle:nth-child(2) { top: 25%; left: 8%; width: 8px; height: 8px; animation-delay: 1s; }
          .particle:nth-child(3) { top: 40%; left: 20%; width: 10px; height: 10px; animation-delay: 2s; }
          .particle:nth-child(4) { top: 60%; left: 12%; width: 14px; height: 14px; animation-delay: 1.5s; }
          .particle:nth-child(5) { top: 75%; left: 18%; width: 9px; height: 9px; animation-delay: 0.5s; }
          .particle:nth-child(6) { bottom: 15%; left: 10%; width: 11px; height: 11px; animation-delay: 2.5s; }

          /* Circular Wave Animation */
          .wave-circle {
            position: absolute;
            border: 2px solid rgba(59, 130, 246, 0.3);
            border-radius: 50%;
            animation: ripple 4s ease-out infinite;
          }

          @keyframes ripple {
            0% {
              transform: scale(0.8);
              opacity: 1;
            }
            100% {
              transform: scale(1.5);
              opacity: 0;
            }
          }

          .wave-circle:nth-child(1) { top: 30%; left: 30%; width: 200px; height: 200px; animation-delay: 0s; }
          .wave-circle:nth-child(2) { top: 40%; left: 20%; width: 300px; height: 300px; animation-delay: 1s; }
          .wave-circle:nth-child(3) { top: 20%; left: 40%; width: 250px; height: 250px; animation-delay: 2s; }

          /* Content Fade In Animation */
          .fade-in-content {
            animation: fadeInUp 1s ease-out;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Image Container Glow */
          .image-container-glow {
            position: relative;
          }

          .image-container-glow::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, #0ea5e9, #3b82f6, #06b6d4, #0ea5e9);
            border-radius: 16px;
            z-index: -1;
            animation: borderGlow 3s linear infinite;
            background-size: 300% 300%;
          }

          @keyframes borderGlow {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
        `}
      </style>

      <section className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen">
        {/* Top Header */}
        <div className="max-w-7xl mx-auto mb-8">
          <h1 className="text-3xl lg:text-4xl md:text-2xl sm:text-xl font-bold text-white">
            Agentic AI
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Side - Animated Image/Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="image-container-glow relative h-96 lg:h-full md:h-80 sm:h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 shadow-2xl">
                {/* Background Image */}
                <img
                  src="/agentic-bg.png"
                  alt="Agentic AI Visualization"
                  className="w-full h-full object-cover opacity-60"
                />

                {/* Animated Particles */}
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>

                {/* Wave Circles */}
                <div className="wave-circle"></div>
                <div className="wave-circle"></div>
                <div className="wave-circle"></div>

                {/* Central Glow Effect */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="fade-in-content flex flex-col justify-center order-1 lg:order-2 space-y-6">
              {/* Report Label */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-0.5 bg-white"></div>
                <span className="text-white text-sm font-semibold tracking-wider uppercase">
                  Report
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl lg:text-5xl md:text-3xl sm:text-2xl font-bold text-white leading-tight">
                Multi-agent AI – the 21st century automation revolution
              </h2>

              {/* Description Paragraphs */}
              <div className="space-y-4 text-gray-300">
                <p className="text-base lg:text-lg md:text-base sm:text-sm leading-relaxed">
                  Agentic AI is transforming the way businesses operate by leveraging 
                  multi-agent AI systems to enhance productivity, efficiency, and customer 
                  engagement.
                </p>

                <p className="text-base lg:text-lg md:text-base sm:text-sm leading-relaxed">
                  By adopting agentic AI, businesses can elevate their operational efficiency 
                  with AI agents collaborating with humans and boost growth with AI agents 
                  acting as knowledge and capability multipliers for teams to deliver more value.
                </p>

                <p className="text-base lg:text-lg md:text-base sm:text-sm leading-relaxed">
                  Discover in this piece, how agentic ecosystem works, how to best implement 
                  agentic AI architecture, whatever the industries or domains, and how to 
                  ensure the right governance, guardrails and responsibility are in place.
                </p>
              </div>

              {/* CTA Button */}
              {/* <div className="pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg text-base">
                  Read Full Report
                </button>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Decorative Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
      </section>
    </>
  );
};

export default TheFutureTechnology;