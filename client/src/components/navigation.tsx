// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navigation() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const offsetTop = element.offsetTop - 90;
//       window.scrollTo({
//         top: offsetTop,
//         behavior: 'smooth'
//       });
//     }
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav 
//       data-testid="navigation-main"
//       className={`fixed top-0 w-full z-50 shadow-sm transition-all duration-300 ${
//         isScrolled ? 'bg-ming-white' : 'bg-ming-white/95 backdrop-blur-sm'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-20">
//           <div className="flex items-center">
//             <div className="flex flex-col">
//               <h1 className="text-3xl md:text-4xl font-display font-bold text-ming-orange leading-none">Ming's</h1>
//               <span className={`text-sm md:text-base font-body ${isScrolled ? 'text-ming-dark-gray' : 'text-white'} transition-colors duration-300`}>Chinese Cuisine</span>
//             </div>
//           </div>

//           <div className="hidden md:flex space-x-12 lg:space-x-16">
//             <button 
//               data-testid="link-home"
//               onClick={() => scrollToSection('home')} 
//               className="text-lg lg:text-xl text-ming-orange hover:text-white transition-colors duration-300 font-medium"
//             >
//               Home
//             </button>
//             <button 
//               data-testid="link-about"
//               onClick={() => scrollToSection('about')} 
//               className="text-lg lg:text-xl text-ming-orange hover:text-white transition-colors duration-300 font-medium"
//             >
//               About
//             </button>
//             <button 
//               data-testid="link-menu"
//               onClick={() => scrollToSection('menu')} 
//               className="text-lg lg:text-xl text-ming-orange hover:text-white transition-colors duration-300 font-medium"
//             >
//               Menu
//             </button>
//             <button 
//               data-testid="link-gallery"
//               onClick={() => scrollToSection('gallery')} 
//               className="text-lg lg:text-xl text-ming-orange hover:text-white transition-colors duration-300 font-medium"
//             >
//               Gallery
//             </button>
//             <button 
//               data-testid="link-contact"
//               onClick={() => scrollToSection('contact')} 
//               className="text-lg lg:text-xl text-ming-orange hover:text-white transition-colors duration-300 font-medium"
//             >
//               Contact
//             </button>
//           </div>

//           <button 
//             data-testid="button-reserve-table"
//             onClick={() => scrollToSection('contact')}
//             className="bg-ming-orange text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors duration-300 hidden md:block text-lg font-medium"
//           >
//             Reserve Table
//           </button>

//           <button 
//             data-testid="button-mobile-menu"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden text-ming-orange"
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden py-4 space-y-4">
//             <button 
//               data-testid="link-mobile-home"
//               onClick={() => scrollToSection('home')} 
//               className="block text-ming-orange hover:text-white transition-colors duration-300"
//             >
//               Home
//             </button>
//             <button 
//               data-testid="link-mobile-about"
//               onClick={() => scrollToSection('about')} 
//               className="block text-ming-orange hover:text-white transition-colors duration-300"
//             >
//               About
//             </button>
//             <button 
//               data-testid="link-mobile-menu"
//               onClick={() => scrollToSection('menu')} 
//               className="block text-ming-orange hover:text-white transition-colors duration-300"
//             >
//               Menu
//             </button>
//             <button 
//               data-testid="link-mobile-gallery"
//               onClick={() => scrollToSection('gallery')} 
//               className="block text-ming-orange hover:text-white transition-colors duration-300"
//             >
//               Gallery
//             </button>
//             <button 
//               data-testid="link-mobile-contact"
//               onClick={() => scrollToSection('contact')} 
//               className="block text-ming-orange hover:text-white transition-colors duration-300"
//             >
//               Contact
//             </button>
//             <button 
//               data-testid="button-mobile-reserve"
//               onClick={() => scrollToSection('contact')}
//               className="w-full bg-ming-orange text-white py-2 rounded-full hover:bg-orange-600 transition-colors duration-300"
//             >
//               Reserve Table
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import mingsLogo from "@/assets/mings-logo.png";
import mingsLogoDown from "@/assets/Mings-logo-down.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Custom Fonts - Same as other sections */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Crimson+Text:wght@400;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <nav
        data-testid="navigation-main"
        className={`fixed top-0 w-full z-50 shadow-sm transition-all duration-300 ${isScrolled ? 'bg-ming-white' : 'bg-ming-white/95 backdrop-blur-sm'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img 
                src={isScrolled ? mingsLogoDown : mingsLogo}
                alt="Ming's Chinese Cuisine"
                className="h-16 w-auto object-contain drop-shadow-md cursor-pointer transition-all duration-300"
                data-testid="img-nav-logo"
                onClick={() => scrollToSection('home')}
              />
            </div>

            <div className="hidden md:flex space-x-12 lg:space-x-16">
              <button
                data-testid="link-home"
                onClick={() => scrollToSection('home')}
                className={`text-lg lg:text-xl text-ming-orange transition-colors duration-300 font-medium ${
                  isScrolled ? 'hover:text-black' : 'hover:text-white'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Home
              </button>
              <button
                data-testid="link-about"
                onClick={() => scrollToSection('about')}
                className={`text-lg lg:text-xl text-ming-orange transition-colors duration-300 font-medium ${
                  isScrolled ? 'hover:text-black' : 'hover:text-white'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                About
              </button>
              <button
                data-testid="link-menu"
                onClick={() => scrollToSection('menu')}
                className={`text-lg lg:text-xl text-ming-orange transition-colors duration-300 font-medium ${
                  isScrolled ? 'hover:text-black' : 'hover:text-white'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Menu
              </button>
              <button
                data-testid="link-gallery"
                onClick={() => scrollToSection('gallery')}
                className={`text-lg lg:text-xl text-ming-orange transition-colors duration-300 font-medium ${
                  isScrolled ? 'hover:text-black' : 'hover:text-white'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Gallery
              </button>
              <button
                data-testid="link-testimonials"
                onClick={() => scrollToSection('testimonials')}
                className={`text-lg lg:text-xl text-ming-orange transition-colors duration-300 font-medium ${
                  isScrolled ? 'hover:text-black' : 'hover:text-white'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Testimonials
              </button>
              <button
                data-testid="link-contact"
                onClick={() => scrollToSection('contact')}
                className={`text-lg lg:text-xl text-ming-orange transition-colors duration-300 font-medium ${
                  isScrolled ? 'hover:text-black' : 'hover:text-white'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Contact
              </button>
            </div>

            <button
              data-testid="button-reserve-table"
              onClick={() => scrollToSection('contact')}
              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all duration-500 transform hover:scale-105 hidden md:block text-sm font-bold tracking-widest border-2 border-orange-500 hover:shadow-lg"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              RESERVE TABLE
            </button>

            <button
              data-testid="button-mobile-menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-orange-500 hover:text-orange-600 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <button
                data-testid="link-mobile-home"
                onClick={() => scrollToSection('home')}
                className={`block text-ming-orange transition-colors duration-300 ${
                  isScrolled ? 'hover:text-black' : 'hover:text-white'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Home
              </button>
              <button
                data-testid="link-mobile-about"
                onClick={() => scrollToSection('about')}
                className={`block text-ming-orange transition-colors duration-300 ${
                  isScrolled ? 'hover:text-black' : 'hover:text-white'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                About
              </button>
              <button
                data-testid="link-mobile-menu"
                onClick={() => scrollToSection('menu')}
                className={`block text-ming-orange transition-colors duration-300 ${
                  isScrolled ? 'hover:text-black' : 'hover:text-white'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Menu
              </button>
              <button
                data-testid="link-mobile-gallery"
                onClick={() => scrollToSection('gallery')}
                className={`block text-ming-orange transition-colors duration-300 ${
                  isScrolled ? 'hover:text-black' : 'hover:text-white'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Gallery
              </button>
              <button
                data-testid="link-mobile-testimonials"
                onClick={() => scrollToSection('testimonials')}
                className={`block text-ming-orange transition-colors duration-300 ${
                  isScrolled ? 'hover:text-black' : 'hover:text-white'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Testimonials
              </button>
              <button
                data-testid="link-mobile-contact"
                onClick={() => scrollToSection('contact')}
                className={`block text-ming-orange transition-colors duration-300 ${
                  isScrolled ? 'hover:text-black' : 'hover:text-white'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Contact
              </button>
              <button
                data-testid="button-mobile-reserve"
                onClick={() => scrollToSection('contact')}
                className="w-full bg-ming-orange text-white py-2 rounded-full hover:bg-orange-600 transition-colors duration-300"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Reserve Table
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}