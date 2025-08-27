import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import founderImage from "@/assets/founder.png";

const milestones = [
  {
    year: "2014",
    title: "Foundation",
    description:
      "Ming's Chinese Cuisine was founded with a vision to bring authentic Chinese flavors to our community.",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop",
  },
  {
    year: "2018",
    title: "Expansion",
    description:
      "Introduced traditional Chinese cuisine to meet growing customer demand.",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=400&fit=crop",
  },
  {
    year: "2020",
    title: "Modern Renovation",
    description:
      "Completely redesigned with modern Chinese aesthetics while preserving traditional cooking methods.",
    image:
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=600&h=400&fit=crop",
  },
  {
    year: "2023",
    title: "Award Recognition",
    description:
      "Received the prestigious 'Best Authentic Chinese Restaurant' award from the local culinary association.",
    image:
      "https://images.unsplash.com/photo-1562158079-136a62b80db6?w=600&h=400&fit=crop",
  },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % milestones.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Auto-calculating customer counter
  useEffect(() => {
    if (isInView && customerCount < 10000) {
      const timer = setTimeout(() => {
        setCustomerCount((prev) => Math.min(prev + 50, 10000));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [customerCount, isInView]);

  // Intersection observer to trigger counter when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 },
    );

    const section = document
      .querySelector('[data-testid="text-journey-title"]')
      ?.closest("div")?.parentElement;
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const chefs = [
    {
      name: "Mr.Sumeet Birhade",
      title: "Head Chef & Founder",
      description:
        "30+ years of experience in authentic Cantonese and Sichuan cuisine",
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Chef Li Zhang",
      title: "Dim Sum Specialist",
      description: "Expert in traditional dim sum and handmade noodles",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Chef Susan Chen",
      title: "Pastry Chef",
      description: "Creates innovative Chinese desserts and traditional sweets",
      image:
        "https://pixabay.com/get/gfaecb1c4a69ccabebda0dbf5cb4b374a9d39d69fac298a1fe5d3c1b7327d090baa65b40fe770a403e5af988034db80310d99cd1f8d1f58c8ba18ff3ef65c512b_1280.jpg",
    },
  ];

  const restaurantImages = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2
              data-testid="text-about-title"
              className="text-4xl md:text-5xl font-display font-bold text-ming-dark-gray mb-6"
            >
              Our Storys
            </h2>
            <p
              data-testid="text-about-description-1"
              className="text-lg text-gray-600 mb-6"
            >
              Founded in 2014 by Mr.Sumeet Birhade, our restaurant began as a
              small family establishment with a simple mission: to bring
              authentic Chinese flavors to our community. What started as a
              humble 20-seat restaurant has grown into a culinary destination.
            </p>
            <p
              data-testid="text-about-description-2"
              className="text-lg text-gray-600 mb-8"
            >
              Our commitment to traditional cooking methods, combined with the
              finest ingredients and warm hospitality, has made Ming's a beloved
              gathering place for families and food enthusiasts alike.
            </p>
            <div className="flex items-center space-x-6">
              <div>
                <div
                  data-testid="text-stat-experience"
                  className="text-3xl font-display font-bold text-ming-orange"
                >
                  30+
                </div>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div>
                <div
                  data-testid="text-stat-chefs"
                  className="text-3xl font-display font-bold text-ming-orange"
                >
                  5
                </div>
                <p className="text-sm text-gray-600">Master Chefs</p>
              </div>
              <div>
                <div
                  data-testid="text-stat-recipes"
                  className="text-3xl font-display font-bold text-ming-orange"
                >
                  200+
                </div>
                <p className="text-sm text-gray-600">Authentic Recipes</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {restaurantImages.map((image, index) => (
              <img
                key={index}
                data-testid={`img-restaurant-${index}`}
                src={image}
                alt={`Restaurant interior ${index + 1}`}
                className={`rounded-xl shadow-lg w-full object-cover ${
                  index === 0 || index === 3
                    ? "h-64"
                    : index === 1
                      ? "h-32 mt-8"
                      : "h-32 -mt-4"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Section Title - Like Other Sections */}
        <div className="text-center mb-8 sm:mb-12">
          <h3
            data-testid="text-journey-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            <span className="bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent">
              Ming's Cuisine
            </span>
            <span className="text-gray-800 ml-2 sm:ml-4">Journey</span>
          </h3>
        </div>

        {/* Premium Ming's Journey Section - Mobile Optimized with Stacked Layout */}
        <div className="relative bg-gradient-to-br from-black via-gray-900 to-black rounded-[3rem] overflow-hidden shadow-2xl -mb-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20"></div>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255, 165, 0, 0.3) 0%, transparent 50%), 
                               radial-gradient(circle at 80% 20%, rgba(255, 165, 0, 0.3) 0%, transparent 50%)`,
              }}
            ></div>
          </div>

          {/* Main Content - Mobile Stacked, Desktop Side by Side */}
          <div className="relative px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8">
            <div className="max-w-7xl mx-auto">
              {/* Mobile Layout: Stacked Sections */}
              <div className="lg:hidden space-y-8">
                {/* Founder Profile Section - Mobile */}
                <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-200/20 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-200/15 to-transparent rounded-full translate-y-8 -translate-x-8"></div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Profile Image */}
                    <div className="mb-6">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-xl scale-125 opacity-20"></div>
                        <img
                          src={founderImage}
                          alt="Founder - Sumeet Birhade"
                          className="relative w-48 h-48 rounded-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500 border-4 border-orange-500/30"
                        />
                      </div>
                    </div>

                    {/* Name and Title */}
                    <div className="mb-4">
                      <h4
                        className="text-2xl sm:text-3xl font-bold text-white mb-2"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 700,
                        }}
                      >
                        SUMEET BIRHADE
                      </h4>
                      <p
                        className="text-orange-400 font-semibold text-lg tracking-wide"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Founder & Managing Director
                      </p>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto mt-2"></div>
                    </div>

                    {/* Quote */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-6 shadow-lg">
                      <p
                        className="text-gray-200 leading-relaxed italic text-center text-sm sm:text-base"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        "Our restaurant is more than a place to dine – it's a
                        journey of flavors, culture, and passion."
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-orange-400/30">
                        <div
                          className="text-2xl font-bold text-orange-400"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          10+
                        </div>
                        <p className="text-gray-300 text-sm font-medium">
                          Years
                        </p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-orange-400/30">
                        <div
                          className="text-2xl font-bold text-orange-400"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {customerCount}
                        </div>
                        <p className="text-gray-300 text-sm font-medium">
                          Customers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Section - Mobile */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 165, 0, 0.4) 0%, transparent 50%)`,
                      }}
                    ></div>
                  </div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h4
                        className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Our{" "}
                        <span className="text-orange-600">Decade Legacy</span>
                      </h4>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto"></div>
                    </div>

                    {/* Sliding Milestones */}
                    <div className="relative h-96 overflow-hidden">
                      {milestones.map((milestone, index) => {
                        const isActive = index === activeSlide;
                        return (
                          <div
                            key={milestone.year}
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                              isActive
                                ? "opacity-100 scale-100 z-20 translate-x-0"
                                : "opacity-0 scale-95 z-0 translate-x-full"
                            }`}
                          >
                            <div className="space-y-4 h-full flex flex-col">
                              {/* Image */}
                              <div className="relative overflow-hidden rounded-2xl shadow-2xl h-48">
                                <img
                                  src={milestone.image}
                                  alt={milestone.title}
                                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                  <div
                                    className="text-2xl font-bold text-white drop-shadow-lg"
                                    style={{
                                      fontFamily: "Poppins, sans-serif",
                                    }}
                                  >
                                    {milestone.year}
                                  </div>
                                </div>
                              </div>

                              {/* Content */}
                              <div className="flex-1 space-y-3">
                                <div>
                                  <div
                                    className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2"
                                    style={{
                                      fontFamily: "Poppins, sans-serif",
                                    }}
                                  >
                                    {milestone.year}
                                  </div>
                                  <h5
                                    className="text-xl font-bold text-gray-800 mb-2"
                                    style={{
                                      fontFamily: "Poppins, sans-serif",
                                    }}
                                  >
                                    {milestone.title}
                                  </h5>
                                  <p
                                    className="text-gray-600 text-sm leading-relaxed"
                                    style={{
                                      fontFamily: "Poppins, sans-serif",
                                    }}
                                  >
                                    {milestone.description}
                                  </p>
                                </div>

                                {/* Progress Indicator */}
                                <div className="space-y-2 mt-auto">
                                  <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium text-gray-500">
                                      {index + 1} of {milestones.length}
                                    </span>
                                    <div className="flex space-x-1">
                                      {milestones.map((_, i) => (
                                        <div
                                          key={i}
                                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                            i === activeSlide
                                              ? "bg-orange-500 w-6"
                                              : "bg-gray-300"
                                          }`}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-1">
                                    <div
                                      className="bg-gradient-to-r from-orange-500 to-orange-600 h-1 rounded-full transition-all duration-4000 ease-linear"
                                      style={{
                                        width: isActive ? "100%" : "0%",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout: Side by Side - Keep Original Layout */}
              <div className="hidden lg:grid lg:grid-cols-5 gap-6">
                {/* Enhanced Founder Profile - Desktop */}
                <div className="lg:col-span-2">
                  <div
                    className="rounded-3xl shadow-2xl h-full relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,165,0,0.1) 0%, rgba(255,165,0,0.05) 50%, transparent 100%)",
                    }}
                  >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-200/20 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-200/15 to-transparent rounded-full translate-y-8 -translate-x-8"></div>

                    <div className="relative z-10 flex flex-col h-full justify-center items-center p-6">
                      {/* Profile Image */}
                      <div className="text-center mb-6">
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-xl scale-125 opacity-20"></div>
                          <img
                            src={founderImage}
                            alt="Founder - Sumeet Birhade"
                            className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500 border-4 border-orange-500/30"
                          />
                        </div>
                      </div>

                      {/* Name and Title */}
                      <div className="text-center mb-4">
                        <h4
                          className="text-2xl lg:text-3xl font-bold text-white mb-2"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          SUMEET BIRHADE
                        </h4>
                        <p
                          className="text-orange-400 font-semibold text-base lg:text-lg tracking-wide"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          Founder & Managing Director
                        </p>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto mt-2"></div>
                      </div>

                      {/* Quote */}
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-4 shadow-lg relative">
                        <p
                          className="text-gray-200 leading-relaxed italic text-center text-sm lg:text-base"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          "Our restaurant is more than a place to dine – it's a
                          journey of flavors, culture, and passion."
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-center border border-orange-400/30">
                          <div
                            className="text-lg font-bold text-orange-400"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            10+
                          </div>
                          <p className="text-gray-300 text-xs font-medium">
                            Years
                          </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-center border border-orange-400/30">
                          <div
                            className="text-lg font-bold text-orange-400"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            {customerCount}
                          </div>
                          <p className="text-gray-300 text-xs font-medium">
                            Customers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Journey Timeline - Desktop */}
                <div className="lg:col-span-3">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-2xl h-full relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 165, 0, 0.4) 0%, transparent 50%)`,
                        }}
                      ></div>
                    </div>

                    <div className="relative z-10 h-full flex flex-col">
                      {/* Header */}
                      <div className="text-center mb-6">
                        <h4
                          className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          Our{" "}
                          <span className="text-orange-600">Decade Legacy</span>
                        </h4>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto"></div>
                      </div>

                      {/* Sliding Milestones */}
                      <div className="relative flex-1 overflow-hidden">
                        {milestones.map((milestone, index) => {
                          const isActive = index === activeSlide;
                          return (
                            <div
                              key={milestone.year}
                              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                                isActive
                                  ? "opacity-100 scale-100 z-20 translate-x-0"
                                  : "opacity-0 scale-95 z-0 translate-x-full"
                              }`}
                            >
                              <div className="grid grid-cols-1 gap-4 h-full">
                                {/* Image */}
                                <div className="relative overflow-hidden rounded-2xl shadow-2xl h-48 lg:h-56 xl:h-64">
                                  <img
                                    src={milestone.image}
                                    alt={milestone.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                  <div className="absolute bottom-4 left-4">
                                    <div
                                      className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg"
                                      style={{
                                        fontFamily: "Poppins, sans-serif",
                                      }}
                                    >
                                      {milestone.year}
                                    </div>
                                  </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-3 flex-1 flex flex-col justify-center">
                                  <div>
                                    <div
                                      className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2"
                                      style={{
                                        fontFamily: "Poppins, sans-serif",
                                      }}
                                    >
                                      {milestone.year}
                                    </div>
                                    <h5
                                      className="text-lg lg:text-xl font-bold text-gray-800 mb-2"
                                      style={{
                                        fontFamily: "Poppins, sans-serif",
                                      }}
                                    >
                                      {milestone.title}
                                    </h5>
                                    <p
                                      className="text-gray-600 text-sm lg:text-base leading-relaxed"
                                      style={{
                                        fontFamily: "Poppins, sans-serif",
                                      }}
                                    >
                                      {milestone.description}
                                    </p>
                                  </div>

                                  {/* Progress Indicator */}
                                  <div className="space-y-2 mt-auto">
                                    <div className="flex justify-between items-center">
                                      <span className="text-xs font-medium text-gray-500">
                                        {index + 1} of {milestones.length}
                                      </span>
                                      <div className="flex space-x-1">
                                        {milestones.map((_, i) => (
                                          <div
                                            key={i}
                                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                              i === activeSlide
                                                ? "bg-orange-500 w-6"
                                                : "bg-gray-300"
                                            }`}
                                          />
                                        ))}
                                      </div>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1">
                                      <div
                                        className="bg-gradient-to-r from-orange-500 to-orange-600 h-1 rounded-full transition-all duration-4000 ease-linear"
                                        style={{
                                          width: isActive ? "100%" : "0%",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
