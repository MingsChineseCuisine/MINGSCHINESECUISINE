// import React from "react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Priya Sharma",
//     rating: 5,
//     review:
//       "Absolutely incredible! The flavors are authentic and the service is outstanding. Ming's has become our go-to place for special occasions.",
//     image:
//       "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
//   },
//   {
//     id: 2,
//     name: "Arjun Patel",
//     rating: 5,
//     review:
//       "The dim sum here is exceptional! Reminds me of the authentic flavors from my childhood. Highly recommend the steamed dumplings.",
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
//   },
//   {
//     id: 3,
//     name: "Kavya Reddy",
//     rating: 5,
//     review:
//       "Amazing atmosphere and even better food! The Peking duck was cooked to perfection. Will definitely be coming back soon.",
//     image:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
//   },
//   {
//     id: 4,
//     name: "Rohan Gupta",
//     rating: 5,
//     review:
//       "Best Chinese restaurant in the area! The staff is friendly and knowledgeable. Every dish we tried was bursting with flavor.",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
//   },
//   {
//     id: 5,
//     name: "Ananya Singh",
//     rating: 5,
//     review:
//       "The hot pot experience here is unmatched! Fresh ingredients and rich broths. Perfect for a family dinner.",
//     image:
//       "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
//   },
//   {
//     id: 6,
//     name: "Vikram Joshi",
//     rating: 5,
//     review:
//       "Incredible value for money! Generous portions and authentic taste. The kung pao chicken is absolutely divine.",
//     image:
//       "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
//   },
//   {
//     id: 7,
//     name: "Meera Iyer",
//     rating: 5,
//     review:
//       "The ambiance is perfect for date nights. Romantic lighting and exceptional service. The sweet and sour pork was amazing!",
//     image:
//       "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
//   },
//   {
//     id: 8,
//     name: "Rahul Kapoor",
//     rating: 5,
//     review:
//       "Outstanding traditional Chinese cuisine! The chefs really know their craft. Every bite is a journey to authentic flavors.",
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
//   },
// ];

// export default function TestimonialSection() {
//   const renderStars = (rating: number) => {
//     return [...Array(5)].map((_, index) => (
//       <svg
//         key={index}
//         className={`w-5 h-5 ${
//           index < rating ? "text-orange-500" : "text-gray-300"
//         }`}
//         fill="currentColor"
//         viewBox="0 0 20 20"
//       >
//         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//       </svg>
//     ));
//   };

//   return (
//     <section id="testimonials" className="py-24 bg-white">
//       {/* Improved CSS for smooth infinite scroll */}
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//           .infinite-scroll {
//             display: flex;
//             animation: scroll 50s linear infinite;
//             width: fit-content;
//           }

//           @media (min-width: 640px) {
//             .infinite-scroll {
//               animation: scroll 50s linear infinite;
//             }
//           }

//           @media (min-width: 1024px) {
//             .infinite-scroll {
//               animation: scroll 50s linear infinite;
//             }
//           }

//           @keyframes scroll {
//             from {
//               transform: translateX(0);
//             }
//             to {
//               transform: translateX(-50%);
//             }
//           }

//           .infinite-scroll:hover {
//             animation-play-state: paused;
//           }

//           .testimonial-track {
//             display: flex;
//             gap: 1.5rem;
//           }
//         `,
//         }}
//       />

//       <div className="container mx-auto px-4">
//         {/* Title - Same styling as other sections */}
//         <div className="text-center mb-16 sm:mb-20">
//           <h2
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-6"
//             style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
//           >
//             <span className="bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent">
//               Customer
//             </span>
//             <span className="text-gray-800 ml-2 sm:ml-4">Reviews</span>
//           </h2>

//           <div className="mt-8 sm:mt-12">
//             <p
//               className="text-lg sm:text-xl lg:text-xl xl:text-2xl text-gray-600 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto leading-relaxed font-medium"
//               style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
//             >
//               Hear what our valued customers have to say about their dining
//               experience.
//             </p>
//           </div>
//         </div>

//         {/* Marquee Container */}
//         <div className="relative overflow-hidden">
//           {/* Gradient overlays for fade effect */}
//           <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
//           <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

//           {/* Infinite Scroll Container */}
//           <div className="infinite-scroll">
//             {/* First set of testimonials */}
//             <div className="testimonial-track">
//               {testimonials.map((testimonial) => (
//                 <div
//                   key={`first-${testimonial.id}`}
//                   className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
//                 >
//                   {/* Header with image and name */}
//                   <div className="flex items-center mb-4">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-12 h-12 rounded-full object-cover mr-4"
//                     />
//                     <div>
//                       <h4
//                         className="font-semibold text-gray-800 text-lg"
//                         style={{ fontFamily: "Poppins, sans-serif" }}
//                       >
//                         {testimonial.name}
//                       </h4>
//                       <div className="flex space-x-1 mt-1">
//                         {renderStars(testimonial.rating)}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Review text */}
//                   <p
//                     className="text-gray-600 leading-relaxed"
//                     style={{
//                       fontFamily: "Poppins, sans-serif",
//                       fontWeight: 400,
//                     }}
//                   >
//                     "{testimonial.review}"
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Duplicate set for continuous loop */}
//             <div className="testimonial-track">
//               {testimonials.map((testimonial) => (
//                 <div
//                   key={`second-${testimonial.id}`}
//                   className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
//                 >
//                   <div className="flex items-center mb-4">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-12 h-12 rounded-full object-cover mr-4"
//                     />
//                     <div>
//                       <h4
//                         className="font-semibold text-gray-800 text-lg"
//                         style={{ fontFamily: "Poppins, sans-serif" }}
//                       >
//                         {testimonial.name}
//                       </h4>
//                       <div className="flex space-x-1 mt-1">
//                         {renderStars(testimonial.rating)}
//                       </div>
//                     </div>
//                   </div>
//                   <p
//                     className="text-gray-600 leading-relaxed"
//                     style={{
//                       fontFamily: "Poppins, sans-serif",
//                       fontWeight: 400,
//                     }}
//                   >
//                     "{testimonial.review}"
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    review:
      "Absolutely incredible! The flavors are authentic and the service is outstanding. Ming's has become our go-to place for special occasions.",
    image:
      "https://plus.unsplash.com/premium_photo-1682098109069-0e49e3b42884?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 2,
    name: "Arjun Patel",
    rating: 5,
    review:
      "The dim sum here is exceptional! Reminds me of the authentic flavors from my childhood. Highly recommend the steamed dumplings.",
    image:
      "https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 3,
    name: "Kavya Reddy",
    rating: 5,
    review:
      "Amazing atmosphere and even better food! The Peking duck was cooked to perfection. Will definitely be coming back soon.",
    image:
      "https://images.unsplash.com/photo-1653379670414-68e7f2ed0ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 4,
    name: "Rohan Gupta",
    rating: 5,
    review:
      "Best Chinese restaurant in the area! The staff is friendly and knowledgeable. Every dish we tried was bursting with flavor.",
    image:
      "https://images.unsplash.com/photo-1534339480783-6816b68be29c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 5,
    name: "Ananya Singh",
    rating: 5,
    review:
      "The hot pot experience here is unmatched! Fresh ingredients and rich broths. Perfect for a family dinner.",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 6,
    name: "Vikram Joshi",
    rating: 5,
    review:
      "Incredible value for money! Generous portions and authentic taste. The kung pao chicken is absolutely divine.",
    image:
      "https://plus.unsplash.com/premium_photo-1682089892133-556bde898f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 7,
    name: "Meera Iyer",
    rating: 5,
    review:
      "The ambiance is perfect for date nights. Romantic lighting and exceptional service. The sweet and sour chicken soup was amazing!",
    image:
      "https://plus.unsplash.com/premium_photo-1682089897177-4dbc85aa672f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 8,
    name: "Rahul Kapoor",
    rating: 5,
    review:
      "Outstanding traditional Chinese cuisine! The chefs really know their craft. Every bite is a journey to authentic flavors.",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
  },
];

export default function TestimonialSection() {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-orange-500" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="pt-8 md:pt-12 pb-24 bg-white">
      {/* Improved CSS for smooth infinite scroll */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .infinite-scroll {
            display: flex;
            animation: scroll 20s linear infinite;
            width: fit-content;
          }

          @media (min-width: 640px) {
            .infinite-scroll {
              animation: scroll 30s linear infinite;
            }
          }

          @media (min-width: 1024px) {
            .infinite-scroll {
              animation: scroll 50s linear infinite;
            }
          }

          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .infinite-scroll:hover {
            animation-play-state: paused;
          }

          .testimonial-track {
            display: flex;
            gap: 1.5rem;
          }
        `,
        }}
      />

      <div className="container mx-auto px-4">
        {/* Title - Same styling as other sections */}
        <div className="text-center mb-16 sm:mb-20">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            <span className="bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent">
              Customer
            </span>
            <span className="text-gray-800 ml-2 sm:ml-4">Reviews</span>
          </h2>

          <div className="mt-8 sm:mt-12">
            <p
              className="text-lg sm:text-xl lg:text-xl xl:text-2xl text-gray-600 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto leading-relaxed font-medium"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
            >
              Hear what our valued customers have to say about their dining
              experience.
            </p>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Infinite Scroll Container */}
          <div className="infinite-scroll">
            {/* First set of testimonials */}
            <div className="testimonial-track">
              {testimonials.map((testimonial) => (
                <div
                  key={`first-${testimonial.id}`}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
                >
                  {/* Header with image and name */}
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4
                        className="font-semibold text-gray-800 text-lg"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {testimonial.name}
                      </h4>
                      <div className="flex space-x-1 mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>

                  {/* Review text */}
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    "{testimonial.review}"
                  </p>
                </div>
              ))}
            </div>

            {/* Duplicate set for continuous loop */}
            <div className="testimonial-track">
              {testimonials.map((testimonial) => (
                <div
                  key={`second-${testimonial.id}`}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4
                        className="font-semibold text-gray-800 text-lg"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {testimonial.name}
                      </h4>
                      <div className="flex space-x-1 mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    "{testimonial.review}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
