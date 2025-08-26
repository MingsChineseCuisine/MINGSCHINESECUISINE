import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  ChefHat,
  Award,
  GlassWater,
  ArrowRight,
  PlayCircle,
} from "lucide-react";
import founderImage from "@/assets/founder.png";

// Milestones data for the carousel
const milestones = [
  {
    year: "1995",
    title: "Foundation",
    description:
      "Ming's Chinese Cuisine was founded with a vision to bring authentic Chinese flavors to our community.",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop",
  },
  {
    year: "2005",
    title: "Expansion",
    description:
      "Opened our second location and introduced traditional dim sum service to meet growing demand.",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=400&fit=crop",
  },
  {
    year: "2015",
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
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop",
  },
];

// Custom parallax scroll hook
const useParallax = (value: any, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

// Video modal component
interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl }: VideoModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/40 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={videoUrl}
                title="Chef video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Stats counter animation
interface CountUpProps {
  end: number;
  duration?: number;
}

const CountUp = ({ end, duration = 2000 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(countRef);

  useEffect(() => {
    let startTime: number | undefined;
    let animationFrame: number;

    if (inView) {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };

      animationFrame = requestAnimationFrame(step);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return <span ref={countRef}>{count}+</span>;
};

// Chef card component with hover effects
interface ChefCardProps {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

const ChefCard = ({ name, title, bio, imageUrl }: ChefCardProps) => {
  return (
    <motion.div
      className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all group"
      whileHover={{
        y: -8,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-64 overflow-hidden relative">
        <motion.img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover object-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <p className="font-medium">{bio.substring(0, 60)}...</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h4
          className="text-xl font-semibold text-black"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {name}
        </h4>
        <p className="text-orange-500 font-medium mt-1">{title}</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-gray-600 text-sm line-clamp-2">{bio}</p>
          <motion.button className="text-orange-500" whileHover={{ x: 3 }}>
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Testimonial carousel component
const TestimonialCarousel = () => {
  const [active, setActive] = useState(0);
  const testimonials = [
    {
      text: "The culinary experience at Ming's is simply unmatched. Master Chef Ming Wei's passion shines through in every authentic dish.",
      author: "David Chen",
      role: "Food Critic",
    },
    {
      text: "From the ambiance to the service to the food—everything at Ming's speaks of excellence and traditional Chinese culture.",
      author: "Sarah Johnson",
      role: "Regular Guest",
    },
    {
      text: "The authentic flavors at Ming's bring back memories of my grandmother's cooking. It's truly a taste of home.",
      author: "Li Wang",
      role: "Culinary Enthusiast",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative overflow-hidden bg-gray-50 rounded-lg p-8 shadow-md">
      <div className="absolute top-4 right-4 text-orange-500/30">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 7l-5 5.5 5 5.5v-11zM18 7l-5 5.5 5 5.5v-11z" />
        </svg>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="min-h-[160px] flex flex-col justify-between"
        >
          <p className="text-gray-600 italic text-lg mb-6">
            "{testimonials[active].text}"
          </p>
          <div>
            <p
              className="font-semibold text-black"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {testimonials[active].author}
            </p>
            <p className="text-orange-500 text-sm">
              {testimonials[active].role}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${index === active ? "bg-orange-500" : "bg-gray-300"}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default function NewAboutSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  // Auto-rotate slides for the carousel
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
      { threshold: 0.1 }, // Lower threshold for better mobile detection
    );

    // Use the ref directly if available
    if (counterRef.current) {
      observer.observe(counterRef.current);
    } else {
      // Fallback to multiple DOM query methods
      let section = document.querySelector('[data-testid="text-journey-title"]')?.closest("div")?.parentElement;
      
      if (!section) {
        section = document.querySelector('[data-testid="customer-counter"]')?.closest(".bg-gradient-to-br");
      }
      
      if (!section) {
        section = document.querySelector('[alt="Founder - Sumeet Birhade"]')?.closest(".rounded-3xl");
      }

      if (section) {
        observer.observe(section);
      }
    }

    // Mobile fallback: Start counter after a short delay if intersection observer fails
    const isMobile = window.innerWidth < 1024;
    if (isMobile && !isInView) {
      const mobileTimer = setTimeout(() => {
        setIsInView(true);
      }, 2000); // Start animation after 2 seconds on mobile
      
      return () => {
        observer.disconnect();
        clearTimeout(mobileTimer);
      };
    }

    return () => observer.disconnect();
  }, [isInView]);

  const { scrollYProgress } = useScroll();
  const storyRef = useRef(null);
  const inViewStory = useInView(storyRef, { once: false, amount: 0.3 });

  const imageRef = useRef(null);
  const inViewImage = useInView(imageRef, { once: false, amount: 0.3 });

  const contentRef = useRef(null);
  const inViewContent = useInView(contentRef, { once: false, amount: 0.3 });

  const teamRef = useRef(null);
  const inViewTeam = useInView(teamRef, { once: false, amount: 0.3 });

  const y1 = useParallax(scrollYProgress, 100);
  const y2 = useParallax(scrollYProgress, -100);

  return (
    <section
      id="about"
      className="relative pt-16 pb-24 bg-white overflow-hidden"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-40 -left-20 w-64 h-64 rounded-full bg-orange-500/5 z-0"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-40 -right-20 w-80 h-80 rounded-full bg-orange-500/5 z-0"
        style={{ y: y2 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          ref={storyRef}
          initial={{ opacity: 0, y: 100 }}
          animate={inViewStory ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            <span className="bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent">
              Welcome to
            </span>
            <span className="text-gray-800 ml-2 sm:ml-4">
              Ming's Chinese Cuisine
            </span>
          </h2>

          <div className="mt-8 sm:mt-12">
            <p
              className="text-lg sm:text-xl lg:text-xl xl:text-2xl text-gray-600 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto leading-relaxed font-medium"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
            >
              Since 1990, we've been crafting memorable dining experiences that
              combine tradition with authentic flavors.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left column with image and video trigger */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -100 }}
            animate={
              inViewImage ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div
              className="relative group cursor-pointer"
              onClick={() => setVideoModalOpen(true)}
            >
              <motion.div
                className="absolute -top-6 -left-6 w-32 h-32 bg-orange-500/20 rounded-lg rotate-3 z-0"
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />

              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-white/90 rounded-full p-4 backdrop-blur-sm"
                  >
                    <PlayCircle size={48} className="text-orange-500" />
                  </motion.div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=3540&auto=format&fit=crop"
                  alt="Chef plating a gourmet dish"
                  className="w-full h-auto rounded-lg shadow-lg z-10 relative"
                />
              </div>

              <motion.div
                className="absolute -bottom-6 -right-6 w-28 h-28 bg-orange-500 rounded-lg z-0"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Right column with content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: 100 }}
            animate={
              inViewContent ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                inViewContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5 }}
            >
              <h3
                className="text-3xl font-semibold mb-6 text-black"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
              >
                Exceptional Dining Since 1990
              </h3>
              <p
                className="text-gray-600 mb-6 leading-relaxed text-lg"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
              >
                Founded by Master Chef Ming Wei, our restaurant began as a small
                family establishment with a simple mission: to bring authentic
                Chinese flavors to our community. What started as a humble
                20-seat restaurant has grown into a beloved culinary
                destination.
              </p>
              <p
                className="text-gray-600 mb-8 leading-relaxed text-lg"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
              >
                Every dish at Ming's tells a story—one of carefully selected
                ingredients, time-honored techniques, and traditional Chinese
                culinary wisdom. Our team of passionate chefs works tirelessly
                to craft meals that not only satisfy hunger but create lasting
                memories.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <motion.div
                className="text-center p-6 rounded-lg hover:bg-orange-500/5 transition-colors"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  inViewContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 text-orange-500 mb-4">
                  <ChefHat size={28} />
                </div>
                <h4
                  className="font-semibold text-black"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
                >
                  Finest Ingredients
                </h4>
                <p
                  className="text-gray-600 text-sm mt-2"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                >
                  Locally sourced, authentic Chinese ingredients for maximum
                  flavor.
                </p>
              </motion.div>

              <motion.div
                className="text-center p-6 rounded-lg hover:bg-orange-500/5 transition-colors"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  inViewContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 text-orange-500 mb-4">
                  <Award size={28} />
                </div>
                <h4
                  className="font-semibold text-black"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
                >
                  Award Winning
                </h4>
                <p
                  className="text-gray-600 text-sm mt-2"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                >
                  Recognized for authentic Chinese cuisine excellence year after
                  year.
                </p>
              </motion.div>

              <motion.div
                className="text-center p-6 rounded-lg hover:bg-orange-500/5 transition-colors"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  inViewContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 text-orange-500 mb-4">
                  <GlassWater size={28} />
                </div>
                <h4
                  className="font-semibold text-black"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
                >
                  Traditional Ambiance
                </h4>
                <p
                  className="text-gray-600 text-sm mt-2"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                >
                  Thoughtfully designed space for authentic Chinese dining
                  experiences.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                inViewContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <TestimonialCarousel />
            </motion.div>
          </motion.div>
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
                <div ref={counterRef} className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
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
                          <CountUp end={35} duration={2000} />
                        </div>
                        <p className="text-gray-300 text-sm font-medium">
                          Years
                        </p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-orange-400/30" data-testid="customer-counter">
                        <div
                          className="text-2xl font-bold text-orange-400"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          <CountUp end={10000} duration={3000} />
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
                            <CountUp end={35} duration={2000} />
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
                            <CountUp end={10000} duration={3000} />
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

      {/* Video modal for chef showcase */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/dA0VGEbbw4g" // Example YouTube video of a chef cooking
      />
    </section>
  );
}
