import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import mingsLogo from "@/assets/mings-logo.png";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToNext = () => {
    const welcomeSection = document.getElementById("welcome");
    if (welcomeSection) {
      welcomeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Video URL with quality parameters for mobile
  const getVideoUrl = () => {
    const baseUrl = "https://www.youtube.com/embed/dsm4b__I1Nc";
    const commonParams = "autoplay=1&mute=1&loop=1&playlist=dsm4b__I1Nc&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&autohide=1";
    
    if (isMobile) {
      // Force higher quality for mobile devices
      return `${baseUrl}?${commonParams}&vq=hd720&hd=1&quality=hd720`;
    } else {
      // Keep original for desktop
      return `${baseUrl}?${commonParams}`;
    }
  };

  return (
    <>
      {/* Custom Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Crimson+Text:wght@400;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 hero-video"
            style={{
              transform: "translate(-50%, -50%)",
              width: "177.77777778vh",
              height: "56.25vw",
              minWidth: "100%",
              minHeight: "100%",
              pointerEvents: "none",
            }}
            src={getVideoUrl()}
            title="Restaurant Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 text-center px-4 animate-fade-in">
          {/* Ming's Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src={mingsLogo}
              alt="Ming's Chinese Cuisine Logo"
              className="h-32 md:h-48 lg:h-56 w-auto animate-slide-up object-contain drop-shadow-2xl"
              data-testid="img-mings-logo"
            />
          </div>

          {/* Description with Poppins */}
          <p
            data-testid="text-hero-subtitle"
            className="text-xl md:text-2xl text-white/95 mb-12 max-w-4xl mx-auto animate-slide-up leading-relaxed font-light tracking-wide"
            style={{
              animationDelay: "0.2s",
              fontFamily: "'Poppins', sans-serif",
              textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
            }}
          >
            Where heritage meets elegance. Discover exquisite Chinese flavors,
            <span className="text-orange-400 font-semibold italic">
              {" "}
              artfully presented
            </span>{" "}
            in a luxurious, contemporary setting crafted for the most discerning
            palates.
          </p>

          {/* Elegant Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              data-testid="button-reserve-hero"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-orange-500 text-white px-8 py-3 md:px-12 md:py-4 text-base md:text-lg font-bold tracking-widest hover:bg-orange-600 transition-all duration-500 transform hover:scale-105 border-2 border-orange-500 hover:shadow-2xl rounded-full"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              RESERVE YOUR TABLE
            </button>
            <button
              data-testid="button-view-menu-hero"
              onClick={() => window.open("https://menu.mingschinesecuisine.in", "_blank")}
              className="border-2 border-white text-white px-8 py-3 md:px-12 md:py-4 text-base md:text-lg font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-105 hover:shadow-2xl rounded-full"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              VIEW FULL MENU
            </button>
          </div>
        </div>

        {/* Scroll Down Button */}
        <button
          data-testid="button-scroll-down"
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-orange-500 transition-colors duration-300"
          style={{
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <ChevronDown size={40} />
        </button>
      </section>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, 0px); }
          50% { transform: translate(-50%, -10px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1.5s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}
