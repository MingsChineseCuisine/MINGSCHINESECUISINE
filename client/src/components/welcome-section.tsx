// import React, { useState, useEffect } from 'react';

// // Mock hook for scroll animation
// const useScrollAnimation = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 500);
//     return () => clearTimeout(timer);
//   }, []);

//   return { ref: React.useRef(), isVisible };
// };

// export default function WelcomeSection() {
//   const { ref, isVisible } = useScrollAnimation();
//   const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
//   const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
//   const [hoveredDish, setHoveredDish] = useState(null);

//   const featuredDishes = [
//     {
//       name: "Signature Peking Duck",
//       description: "Crispy skin, tender meat, served with traditional pancakes",
//       image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//       price: "$28",
//       category: "SIGNATURE"
//     },
//     {
//       name: "Kung Pao Chicken",
//       description: "Spicy stir-fry with peanuts and Sichuan peppers",
//       image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//       price: "$18",
//       category: "PREMIUM"
//     },
//     {
//       name: "Hand-pulled Noodles",
//       description: "Fresh noodles made daily in rich, aromatic broth",
//       image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//       price: "$16",
//       category: "ARTISAN"
//     }
//   ];

//   return (
//     <>
//       {/* Custom Fonts */}
//       <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Crimson+Text:wght@400;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

//       <section id="welcome" className="relative min-h-screen bg-white overflow-hidden">
//         {/* Elegant Background Pattern */}
//         <div className="absolute inset-0">
//           {/* Subtle Geometric Pattern */}
//           <div className="absolute inset-0 opacity-5">
//             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                 <pattern id="royal-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
//                   <circle cx="50" cy="50" r="2" fill="#FF6B35" />
//                   <circle cx="0" cy="0" r="1" fill="#FF6B35" />
//                   <circle cx="100" cy="100" r="1" fill="#FF6B35" />
//                 </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#royal-pattern)" />
//             </svg>
//           </div>

//           {/* Elegant Corner Ornaments */}
//           <div className="absolute top-0 left-0 w-64 h-64">
//             <svg viewBox="0 0 200 200" className="w-full h-full text-orange-500 opacity-10">
//               <path d="M50,10 Q90,50 50,90 Q10,50 50,10 Z" fill="currentColor" />
//               <path d="M150,10 Q190,50 150,90 Q110,50 150,10 Z" fill="currentColor" />
//               <path d="M50,110 Q90,150 50,190 Q10,150 50,110 Z" fill="currentColor" />
//               <path d="M150,110 Q190,150 150,190 Q110,150 150,110 Z" fill="currentColor" />
//             </svg>
//           </div>

//           <div className="absolute bottom-0 right-0 w-64 h-64 rotate-180">
//             <svg viewBox="0 0 200 200" className="w-full h-full text-orange-500 opacity-10">
//               <path d="M50,10 Q90,50 50,90 Q10,50 50,10 Z" fill="currentColor" />
//               <path d="M150,10 Q190,50 150,90 Q110,50 150,10 Z" fill="currentColor" />
//               <path d="M50,110 Q90,150 50,190 Q10,150 50,110 Z" fill="currentColor" />
//               <path d="M150,110 Q190,150 150,190 Q110,150 150,110 Z" fill="currentColor" />
//             </svg>
//           </div>
//         </div>

//         <div className="container mx-auto px-8 py-20 relative z-10">
//           {/* Royal Header Section */}
//           <div
//             ref={titleRef}
//             className={`text-center mb-24 transition-all duration-2000 ease-out ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//               }`}
//           >
//             {/* Ornamental Line */}
//             <div className="flex items-center justify-center mb-8">
//               <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-32"></div>
//               <div className="mx-6 w-3 h-3 bg-orange-500 rotate-45"></div>
//               <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-32"></div>
//             </div>

//             <div className="relative">
//               <h2
//                 data-testid="text-welcome-title"
//                 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 tracking-tight leading-none"
//                 style={{ fontFamily: "'Playfair Display', serif" }}
//               >
//                 WELCOME TO
//               </h2>
//               <h1
//                 className="text-6xl md:text-7xl lg:text-8xl font-black text-orange-500 mb-8 tracking-wider"
//                 style={{ fontFamily: "'Playfair Display', serif" }}
//               >
//                 MING'S
//               </h1>

//               {/* Royal Flourish */}
//               <div className="flex justify-center mb-8">
//                 <svg width="200" height="30" viewBox="0 0 200 30" className="text-orange-500">
//                   <path d="M10,15 Q50,5 100,15 Q150,25 190,15" stroke="currentColor" strokeWidth="2" fill="none" />
//                   <circle cx="100" cy="15" r="3" fill="currentColor" />
//                   <circle cx="50" cy="12" r="1.5" fill="currentColor" />
//                   <circle cx="150" cy="18" r="1.5" fill="currentColor" />
//                 </svg>
//               </div>
//             </div>

//             <div className="max-w-4xl mx-auto">
//               <p
//                 data-testid="text-welcome-description"
//                 className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light tracking-wide"
//                 style={{ fontFamily: "'Crimson Text', serif" }}
//               >
//                 For over a decade, Ming's Chinese Cuisine has been the pinnacle of
//                 <span className="text-orange-500 font-semibold italic"> culinary artistry</span>,
//                 crafting authentic masterpieces with traditional techniques and the world's finest ingredients.
//                 Every dish is a testament to our unwavering commitment to
//                 <span className="text-orange-500 font-semibold italic"> excellence</span>.
//               </p>
//             </div>
//           </div>

//           {/* Premium Stats Section */}
//           <div
//             ref={statsRef}
//             className={`grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 transition-all duration-2000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//               }`}
//           >
//             {[
//               { number: "30", suffix: "YEARS", label: "OF CULINARY EXCELLENCE", icon: "👑" },
//               { number: "150", suffix: "DISHES", label: "SIGNATURE CREATIONS", icon: "🎭" },
//               { number: "10k", suffix: "GUESTS", label: "SATISFIED CONNOISSEURS", icon: "⭐" }
//             ].map((stat, index) => (
//               <div key={stat.label} className="text-center group" style={{ animationDelay: `${index * 300}ms` }}>
//                 <div className="relative bg-white p-12 border-2 border-gray-100 hover:border-orange-500 transition-all duration-500 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl">
//                   {/* Corner Decorations */}
//                   <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-orange-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-orange-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-orange-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

//                   <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
//                     {stat.icon}
//                   </div>

//                   <div className="mb-4">
//                     <span
//                       data-testid={`text-counter-${stat.label.toLowerCase().replace(' ', '-')}`}
//                       className="text-6xl font-black text-orange-500 group-hover:scale-110 transition-transform duration-300"
//                       style={{ fontFamily: "'Playfair Display', serif" }}
//                     >
//                       {stat.number}
//                     </span>
//                     <span
//                       className="text-2xl font-bold text-gray-600 ml-2"
//                       style={{ fontFamily: "'Playfair Display', serif" }}
//                     >
//                       {stat.suffix}
//                     </span>
//                   </div>

//                   <p className="text-gray-600 font-semibold text-sm tracking-widest uppercase" style={{ fontFamily: "'Crimson Text', serif" }}>
//                     {stat.label}
//                   </p>

//                   <div className="w-16 h-px bg-orange-500 mx-auto mt-6 group-hover:w-24 transition-all duration-500"></div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Premium Featured Dishes */}
//           {/* 
//           <div className="text-center mb-20">
//             <div className="flex items-center justify-center mb-12">
//               <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-48"></div>
//               <div className="mx-8">
//                 <svg width="40" height="40" viewBox="0 0 40 40" className="text-orange-500">
//                   <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
//                   <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
//                   <circle cx="20" cy="20" r="3" fill="currentColor" />
//                 </svg>
//               </div>
//               <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-48"></div>
//             </div>

//             <h3
//               className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight"
//               style={{ fontFamily: "'Playfair Display', serif" }}
//             >
//               SIGNATURE
//             </h3>
//             <h4
//               className="text-4xl md:text-5xl font-light text-orange-500 italic mb-8"
//               style={{ fontFamily: "'Playfair Display', serif" }}
//             >
//               Masterpieces
//             </h4>
//           </div>

//           <div
//             ref={ref}
//             className={`grid grid-cols-1 md:grid-cols-3 gap-16 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//               }`}
//           >
//             {featuredDishes.map((dish, index) => (
//               <div
//                 key={dish.name}
//                 data-testid={`card-featured-dish-${index}`}
//                 className="group cursor-pointer transition-all duration-700"
//                 onMouseEnter={() => setHoveredDish(index)}
//                 onMouseLeave={() => setHoveredDish(null)}
//               >
//                 <div className="relative bg-white border border-gray-200 hover:border-orange-500 transition-all duration-500 transform hover:-translate-y-4 shadow-xl hover:shadow-2xl">
//                   <div className="absolute -top-4 left-8 z-20 bg-black text-white px-6 py-2 text-sm font-bold tracking-widest" style={{ fontFamily: "'Crimson Text', serif" }}>
//                     {dish.category}
//                   </div>

//                   <div className="absolute top-6 right-6 z-20 bg-orange-500 text-white px-4 py-2 font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
//                     {dish.price}
//                   </div>

//                   <div className="relative overflow-hidden h-80">
//                     <img
//                       src={dish.image}
//                       alt={dish.name}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   </div>

//                   <div className="p-8">
//                     <h3
//                       data-testid={`text-dish-name-${index}`}
//                       className="text-2xl font-bold text-black mb-4 group-hover:text-orange-500 transition-colors duration-300"
//                       style={{ fontFamily: "'Playfair Display', serif" }}
//                     >
//                       {dish.name}
//                     </h3>
//                     <p
//                       data-testid={`text-dish-description-${index}`}
//                       className="text-gray-600 leading-relaxed font-light"
//                       style={{ fontFamily: "'Crimson Text', serif", fontSize: '16px' }}
//                     >
//                       {dish.description}
//                     </p>

//                     <div className="w-12 h-px bg-orange-500 mt-6 group-hover:w-20 transition-all duration-500"></div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           */}

//           {/* Royal Call to Action */}
//           {/*
//           <div className="text-center mt-24">
//             <div className="relative inline-block">
//               <button className="bg-black text-white px-16 py-6 text-xl font-bold tracking-widest hover:bg-orange-500 transition-all duration-500 transform hover:scale-105 border-2 border-black hover:border-orange-500" style={{ fontFamily: "'Crimson Text', serif" }}>
//                 EXPLORE FULL MENU
//               </button>

//               <div className="absolute -top-2 -left-2 w-6 h-6 border-2 border-orange-500 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-orange-500 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="absolute -bottom-2 -left-2 w-6 h-6 border-2 border-orange-500 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="absolute -bottom-2 -right-2 w-6 h-6 border-2 border-orange-500 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
//             </div>
//           </div>
//           */}
//         </div>
//       </section>
//     </>
//   );
// }




import React, { useState, useEffect } from 'react';

// Custom hook for number animation
const useCountAnimation = (targetValue, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * targetValue);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [targetValue, duration, isVisible]);

  return { count, isVisible };
};

// Mock hook for scroll animation
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return { ref: React.useRef(), isVisible };
};

export default function WelcomeSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const [hoveredDish, setHoveredDish] = useState(null);

  // Auto-calculated stats
  const currentYear = new Date().getFullYear();
  const foundingYear = 1994; // Example founding year
  const yearsInBusiness = currentYear - foundingYear;

  const statsData = [
    {
      target: yearsInBusiness,
      suffix: "+",
      label: "Years of Excellence"
    },
    {
      target: 180,
      suffix: "+",
      label: "Signature Dishes"
    },
    {
      target: 25000,
      suffix: "+",
      label: "Happy Customers"
    },
    {
      target: 98,
      suffix: "%",
      label: "Satisfaction Rate"
    }
  ];

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'k';
    }
    return num.toString();
  };

  const featuredDishes = [
    {
      name: "Signature Peking Duck",
      description: "Crispy skin, tender meat, served with traditional pancakes",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      price: "$28",
      category: "SIGNATURE"
    },
    {
      name: "Kung Pao Chicken",
      description: "Spicy stir-fry with peanuts and Sichuan peppers",
      image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      price: "$18",
      category: "PREMIUM"
    },
    {
      name: "Hand-pulled Noodles",
      description: "Fresh noodles made daily in rich, aromatic broth",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      price: "$16",
      category: "ARTISAN"
    }
  ];

  return (
    <>
      {/* Custom Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Crimson+Text:wght@400;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <section id="welcome" className="relative h-screen bg-white overflow-hidden flex items-center">
        {/* Enhanced Background with Circular Patterns */}
        <div className="absolute inset-0">
          {/* Subtle Geometric Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="royal-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="2" fill="#FF6B35" />
                  <circle cx="0" cy="0" r="1" fill="#FF6B35" />
                  <circle cx="100" cy="100" r="1" fill="#FF6B35" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#royal-pattern)" />
            </svg>
          </div>

          {/* Elegant Floating Circles - Top Left */}
          <div className="absolute top-12 left-12">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-full animate-pulse"></div>
              <div className="absolute top-4 left-4 w-24 h-24 bg-gradient-to-br from-orange-400/15 to-orange-500/8 rounded-full"></div>
              <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-12 left-12 w-8 h-8 bg-orange-500/30 rounded-full"></div>
            </div>
          </div>

          {/* Elegant Floating Circles - Top Right */}
          <div className="absolute top-16 right-16">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-bl from-orange-500/12 to-orange-600/6 rounded-full"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-bl from-orange-400/18 to-orange-500/9 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-2 right-2 w-12 h-12 bg-orange-500/25 rounded-full"></div>
            </div>
          </div>

          {/* Elegant Floating Circles - Bottom Left */}
          <div className="absolute bottom-20 left-20">
            <div className="relative">
              <div className="w-28 h-28 bg-gradient-to-tr from-orange-500/8 to-orange-600/4 rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-20 h-20 bg-gradient-to-tr from-orange-400/12 to-orange-500/6 rounded-full animate-pulse delay-700"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 bg-orange-500/20 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 bg-orange-600/40 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Elegant Floating Circles - Bottom Right */}
          <div className="absolute bottom-12 right-12">
            <div className="relative">
              <div className="w-36 h-36 bg-gradient-to-tl from-orange-500/7 to-orange-600/3 rounded-full animate-pulse delay-300"></div>
              <div className="absolute bottom-6 right-6 w-24 h-24 bg-gradient-to-tl from-orange-400/10 to-orange-500/5 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-orange-500/15 rounded-full animate-pulse delay-900"></div>
              <div className="absolute bottom-14 right-14 w-8 h-8 bg-orange-600/30 rounded-full"></div>
            </div>
          </div>

          {/* Additional Scattered Circles for Enhancement */}
          <div className="absolute top-1/3 left-1/4">
            <div className="w-6 h-6 bg-orange-500/20 rounded-full animate-pulse delay-1200"></div>
          </div>
          <div className="absolute top-1/4 right-1/3">
            <div className="w-4 h-4 bg-orange-600/25 rounded-full"></div>
          </div>
          <div className="absolute bottom-1/3 left-1/3">
            <div className="w-8 h-8 bg-orange-500/15 rounded-full animate-pulse delay-800"></div>
          </div>
          <div className="absolute bottom-1/4 right-1/4">
            <div className="w-5 h-5 bg-orange-600/20 rounded-full"></div>
          </div>

          {/* Floating Ring Elements */}
          <div className="absolute top-1/2 left-8">
            <div className="w-20 h-20 border-2 border-orange-500/10 rounded-full animate-pulse delay-400"></div>
          </div>
          <div className="absolute top-1/3 right-8">
            <div className="w-16 h-16 border border-orange-600/15 rounded-full"></div>
          </div>
          <div className="absolute bottom-1/2 right-20">
            <div className="w-24 h-24 border-2 border-orange-500/8 rounded-full animate-pulse delay-600"></div>
          </div>
        </div>

        <div className="container mx-auto px-8 py-12 relative z-10 w-full">
          {/* Royal Header Section */}
          <div
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-2000 ease-out ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* Ornamental Line */}
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-24"></div>
              <div className="mx-4 w-2 h-2 bg-orange-500 rotate-45"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-24"></div>
            </div>

            <div className="relative">
              <h2
                data-testid="text-welcome-title"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                WELCOME TO
              </h2>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-black text-orange-500 mb-6 tracking-wider"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                MING'S
              </h1>

              {/* Royal Flourish */}
              <div className="flex justify-center mb-6">
                <svg width="160" height="24" viewBox="0 0 200 30" className="text-orange-500">
                  <path d="M10,15 Q50,5 100,15 Q150,25 190,15" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="100" cy="15" r="3" fill="currentColor" />
                  <circle cx="50" cy="12" r="1.5" fill="currentColor" />
                  <circle cx="150" cy="18" r="1.5" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <p
                data-testid="text-welcome-description"
                className="text-lg md:text-xl text-gray-700 leading-relaxed font-light tracking-wide"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                For over a decade, Ming's Chinese Cuisine has been the pinnacle of
                <span className="text-orange-500 font-semibold italic"> culinary artistry</span>,
                crafting authentic masterpieces with traditional techniques and the world's finest ingredients.
                Every dish is a testament to our unwavering commitment to
                <span className="text-orange-500 font-semibold italic"> excellence</span>.
              </p>
            </div>
          </div>

          {/* Professional Stats Section */}
          <div
            ref={statsRef}
            className={`transition-all duration-1500 ease-out ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            {/* Elegant Divider */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-24"></div>
              <div className="mx-4 w-2 h-2 bg-orange-500 rotate-45"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-24"></div>
            </div>

            {/* Professional Stats Container */}
            <div className="relative max-w-5xl mx-auto">
              {/* Subtle background with luxury feel */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50 opacity-60"></div>

              {/* Main stats grid */}
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-xl">
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {statsData.map((stat, index) => {
                    const { count, isVisible } = useCountAnimation(stat.target, 2500, index * 150);

                    return (
                      <div
                        key={stat.label}
                        className="group relative py-8 px-4 text-center border-r border-gray-200/30 last:border-r-0 hover:bg-orange-50/30 transition-all duration-700"
                      >
                        {/* Subtle top accent */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Professional Number Display */}
                        <div className="mb-3">
                          <span
                            data-testid={`text-counter-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-500"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {stat.target > 1000 ? formatNumber(count) : count}
                          </span>
                          <span
                            className="text-xl md:text-2xl font-medium text-orange-500 ml-1"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {stat.suffix}
                          </span>
                        </div>

                        {/* Professional Label */}
                        <p
                          className="text-xs font-semibold text-gray-600 uppercase tracking-wider group-hover:text-gray-800 transition-colors duration-500"
                          style={{ fontFamily: "'Crimson Text', serif" }}
                        >
                          {stat.label}
                        </p>

                        {/* Sophisticated underline */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-orange-500 opacity-30 group-hover:opacity-100 group-hover:w-12 transition-all duration-500"></div>
                      </div>
                    );
                  })}
                </div>

                {/* Elegant bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gray-200 via-orange-500 to-gray-200"></div>
              </div>

              {/* Professional subtitle */}
              <div className="text-center mt-6">
                <p
                  className="text-gray-500 text-sm font-medium tracking-wide"
                  style={{ fontFamily: "'Crimson Text', serif" }}
                >
                  Established {foundingYear} • Authentic Chinese Cuisine Excellence
                </p>
              </div>
            </div>

            {/* Bottom elegant divider */}
            <div className="flex items-center justify-center mt-8">
              <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-24"></div>
              <div className="mx-4 w-2 h-2 bg-orange-500 rotate-45"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-24"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}