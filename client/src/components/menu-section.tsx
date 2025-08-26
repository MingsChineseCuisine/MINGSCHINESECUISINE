import { useEffect, useRef, useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { type MenuItem } from "@shared/schema";

// Import all the Chinese dish images
import dessertImg from "@assets/dessert_1755545047913.png";
import graviesImg from "@assets/gravies_1755545047913.png";
import momosImg from "@assets/momos_1755545047913.png";
import noodleWithGravyImg from "@assets/Noodle with gravy_1755545047913.png";
import noodlesImg from "@assets/noodles_1755545047914.png";
import potRiceImg from "@assets/pot rice_1755545047914.png";
import prawnStartersImg from "@assets/Prawn Starters_1755545047914.png";
import riceWithGravyImg from "@assets/Rice with gravy_1755545047915.png";
import riceImg from "@assets/rice_1755545047915.png";
import soupsImg from "@assets/Soups_1755545047915.png";
import springRollsImg from "@assets/Spring rolls_1755545047915.png";
import vegStartersImg from "@assets/Veg Starters_1755545047915.png";

export default function MenuSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);
  const animationRef = useRef<number>();

  // Get menu items for the bottom section
  const { data: menuItems = [], isLoading } = useQuery<MenuItem[]>({
    queryKey: ["/api/menu"],
  });

  // Select only 9 signature dishes for the bottom grid
  const featuredDishes = menuItems.slice(0, 9);

  // Chinese dishes with your provided images - duplicated for seamless loop
  const chineseDishes = [
    {
      image: dessertImg,
      name: "Premium Dessert",
      description: "Rich chocolate delight with traditional Chinese elements",
    },
    {
      image: graviesImg,
      name: "Signature Gravy",
      description: "Aromatic spiced tofu in traditional Chinese gravy",
    },
    {
      image: momosImg,
      name: "Authentic Momos",
      description: "Hand-crafted steamed dumplings with spicy dipping sauce",
    },
    {
      image: noodleWithGravyImg,
      name: "Noodles with Rich Gravy",
      description: "Fresh ramen noodles in savory aromatic broth",
    },
    {
      image: noodlesImg,
      name: "Stir-Fried Noodles",
      description: "Wok-tossed noodles with fresh vegetables and herbs",
    },
    {
      image: potRiceImg,
      name: "Clay Pot Rice",
      description: "Traditional rice cooked with aromatic spices and herbs",
    },
    {
      image: prawnStartersImg,
      name: "Prawn Delicacy",
      description: "Fresh prawns seasoned with Chinese spices and herbs",
    },
    {
      image: riceWithGravyImg,
      name: "Rice with Curry",
      description: "Fluffy basmati rice served with rich golden curry",
    },
    {
      image: riceImg,
      name: "Special Fried Rice",
      description:
        "Wok-fried rice with fresh vegetables and aromatic seasonings",
    },
    {
      image: soupsImg,
      name: "Traditional Soup",
      description: "Clear broth with fresh vegetables and traditional herbs",
    },
    {
      image: springRollsImg,
      name: "Crispy Spring Rolls",
      description: "Golden crispy rolls filled with fresh vegetables",
    },
    {
      image: vegStartersImg,
      name: "Vegetable Starters",
      description: "Crispy vegetable fritters with tangy dipping sauce",
    },
  ];

  // Optimized smooth infinite scroll effect with mobile support
  const startAutoScroll = useCallback(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isAutoScrolling) return;

    const isMobile = window.innerWidth < 768;
    const speed = isMobile ? 0.3 : 0.5; // Slower speed on mobile
    
    const smoothScroll = () => {
      if (!isAutoScrolling || !scrollContainer) return;
      
      // Use shorter scroll distance calculation for better performance
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const currentScroll = scrollContainer.scrollLeft;
      
      if (currentScroll >= maxScroll * 0.66) { // Reset earlier for smoother transition
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += speed;
      }
      
      animationRef.current = requestAnimationFrame(smoothScroll);
    };

    animationRef.current = requestAnimationFrame(smoothScroll);
  }, [isAutoScrolling]);

  // Handle touch interactions for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsAutoScrolling(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    const scrollContainer = scrollRef.current;
    
    if (Math.abs(diff) > 50 && scrollContainer) { // Minimum swipe distance
      if (diff > 0) {
        // Swipe left - scroll right
        scrollContainer.scrollLeft += 300;
      } else {
        // Swipe right - scroll left
        scrollContainer.scrollLeft -= 300;
      }
    }
    
    // Resume auto-scroll after 3 seconds of inactivity
    setTimeout(() => setIsAutoScrolling(true), 3000);
  }, [touchStartX]);

  // Mouse hover handlers for desktop
  const handleMouseEnter = useCallback(() => {
    setIsAutoScrolling(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoScrolling(true);
  }, []);

  // Start/stop auto-scroll based on state
  useEffect(() => {
    if (isAutoScrolling) {
      startAutoScroll();
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAutoScrolling, startAutoScroll]);

  // Pause animation when tab is not visible (performance optimization)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsAutoScrolling(false);
      } else {
        setIsAutoScrolling(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <section
      id="menu"
      className="pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 bg-gradient-to-b from-white to-orange-50/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <h2
            data-testid="text-menu-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            <span className="bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent">
              Ming's
            </span>
            <span className="text-gray-800 ml-2 sm:ml-4">Special</span>
            <span className="sm:inline bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent sm:ml-2">
              {" "}
              Cuisine
            </span>
          </h2>

          <div className="mt-8 sm:mt-12">
            <p
              data-testid="text-menu-description"
              className="text-lg sm:text-xl lg:text-xl xl:text-2xl text-gray-600 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto leading-relaxed font-medium"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
            >
              Indulge in Chinese culinary artistry, where tradition meets premium perfection.
            </p>
          </div>
        </div>

        {/* Optimized Infinite Scrolling Carousel Section */}
        <div className="relative mb-16 sm:mb-20 -mx-4 sm:-mx-6 lg:-mx-8">
          <div
            ref={scrollRef}
            className="flex overflow-hidden overflow-x-auto space-x-3 sm:space-x-4 lg:space-x-6 px-4 sm:px-6 lg:px-8 scroll-smooth"
            style={{
              scrollBehavior: "smooth",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              width: "100vw",
              marginLeft: "calc(-50vw + 50%)",
              WebkitOverflowScrolling: "touch", // iOS smooth scrolling
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Optimized: Only double dishes for better performance */}
            {[...chineseDishes, ...chineseDishes].map((dish, index) => {
              const isVisible = index < 16; // Only load first 16 images immediately
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96"
                >
                  <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-200">
                    <div className="aspect-square relative">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        loading={isVisible ? "eager" : "lazy"}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        style={{ 
                          willChange: "transform", // Optimize for transforms
                          transform: "translate3d(0, 0, 0)" // Force hardware acceleration
                        }}
                      />
                      {/* Mobile-friendly overlay with dish info */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 md:opacity-0 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="text-white font-semibold text-sm sm:text-base mb-1">{dish.name}</h4>
                          <p className="text-white/80 text-xs sm:text-sm line-clamp-2">{dish.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Mobile scroll indicators */}
          <div className="flex justify-center mt-4 md:hidden">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-orange-300 opacity-50"
                />
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">Swipe to explore dishes</p>
          </div>
        </div>

        {/* Our Menu Section - Original 9 Dishes Grid */}
        <div className="mb-16 sm:mb-20">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading menu...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredDishes.map((item, index) => (
                <div
                  key={item.id}
                  data-testid={`card-menu-item-${index}`}
                  className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ 
                        willChange: "transform",
                        transform: "translate3d(0, 0, 0)"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Signature
                    </div>
                  </div>
                  <div className="p-6">
                    <h3
                      data-testid={`text-menu-name-${index}`}
                      className="text-2xl font-display font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors duration-300"
                    >
                      {item.name}
                    </h3>
                    <p
                      data-testid={`text-menu-description-${index}`}
                      className="text-gray-600 leading-relaxed text-base"
                    >
                      {item.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-orange-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-orange-600 font-semibold uppercase tracking-wider">
                          Chef's Recommendation
                        </span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="w-2 h-2 bg-orange-400 rounded-full"
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
