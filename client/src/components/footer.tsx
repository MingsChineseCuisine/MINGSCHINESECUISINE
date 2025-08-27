import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-ming-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3
              data-testid="text-footer-logo"
              className="text-2xl font-display font-bold text-ming-orange mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              MING'S CHINESE CUISINE
            </h3>
            <p
              data-testid="text-footer-description"
              className="text-gray-300 mb-4"
            >
              Authentic Chinese cuisine served with passion and tradition since
              2014.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                data-testid="link-footer-facebook"
                className="text-gray-300 hover:text-ming-orange transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/mings_chinese_cuisine_kalyan_?igsh=MXVqcGk4ZHhvcjM5Yw=="
                target="_blank"
                data-testid="link-footer-instagram"
                className="text-gray-300 hover:text-ming-orange transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                data-testid="link-footer-youtube"
                className="text-gray-300 hover:text-ming-orange transition-colors duration-300"
              >
                <Youtube size={23} />
              </a>
            </div>
          </div>

          <div>
            <h4
              data-testid="text-footer-quick-links"
              className="text-lg font-semibold mb-4"
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  data-testid="link-footer-home"
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-ming-orange transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  data-testid="link-footer-about"
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-ming-orange transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  data-testid="link-footer-menu"
                  onClick={() => scrollToSection("menu")}
                  className="text-gray-300 hover:text-ming-orange transition-colors duration-300"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  data-testid="link-footer-gallery"
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-300 hover:text-ming-orange transition-colors duration-300"
                >
                  Gallery
                </button>
              </li>
              <li>
                <a
                  href="/blog"
                  data-testid="link-footer-blog"
                  className="text-gray-300 hover:text-ming-orange transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <button
                  data-testid="link-footer-contact"
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-ming-orange transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4
              data-testid="text-footer-services"
              className="text-lg font-semibold mb-4"
            >
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-ming-orange transition-colors duration-300"
                >
                  Dine In
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-ming-orange transition-colors duration-300"
                >
                  Takeout
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-ming-orange transition-colors duration-300"
                >
                  Catering
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-ming-orange transition-colors duration-300"
                >
                  Private Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-ming-orange transition-colors duration-300"
                >
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4
              data-testid="text-footer-contact-info"
              className="text-lg font-semibold mb-4"
            >
              Contact Info
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                Shop no 2&3, Ganga Godavari Apartment, Katemanivali Naka,
                Prabhuram Nagar, Kalyan East, Thane, Kalyan, Maharashtra 421306
              </li>
              <li>info@mingscuisine.com</li>
              <li>075069 69333</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p data-testid="text-footer-copyright" className="text-gray-400">
            &copy; 2025 Ming's Chinese Cuisine. All rights reserved. |
            <a
              href="#"
              className="hover:text-ming-orange transition-colors duration-300 ml-1"
            >
              Privacy Policy
            </a>{" "}
            |
            <a
              href="#"
              className="hover:text-ming-orange transition-colors duration-300 ml-1"
            >
              Terms of Service
            </a>{" "}
            | <br />
            Made with <span className="text-yellow-400">💛</span>
            <a
              href="https://www.airavatatechnologies.com"
              target="_blank"
              className="font-bold text-white hover:text-ming-orange transition-colors duration-300 ml-1"
            >
              AIRAVATA TECHNOLOGIES
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
