// import { useState } from "react";
// import Lightbox from "@/components/lightbox";

// export default function GallerySection() {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const galleryImages = [
//     {
//       src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
//       alt: "Dim Sum Variety",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
//       alt: "Chef preparing noodles",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1800",
//       alt: "Traditional tea service",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
//       alt: "Hot pot dining",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
//       alt: "Peking Duck presentation",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1600",
//       alt: "Family dining experience",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
//       alt: "Stir-fried vegetables",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
//       alt: "Chinese desserts",
//     },
//   ];

//   return (
//     <section id="gallery" className="py-24 bg-gray-50">
//       <div className="container mx-auto px-4">
//         {/* Title */}
//         <div className="text-center mb-16 sm:mb-20">
//           <h2
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-6"
//             style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
//           >
//             <span className="bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent">
//               Our
//             </span>
//             <span className="text-gray-800 ml-2 sm:ml-4">Gallery</span>
//           </h2>

//           <div className="mt-8 sm:mt-12">
//             <p
//               className="text-lg sm:text-xl lg:text-xl xl:text-2xl text-gray-600 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto leading-relaxed font-medium"
//               style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
//             >
//               Explore our dishes, ambience, and the artistry behind every meal.
//             </p>
//           </div>
//         </div>

//         {/* Masonry Grid */}
//         <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
//           {galleryImages.map((image, index) => (
//             <div
//               key={index}
//               className="relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition"
//               onClick={() => setSelectedImage(image.src)}
//             >
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="w-full mb-4 object-cover rounded-xl transform hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox */}
//       {selectedImage && (
//         <Lightbox
//           src={selectedImage}
//           alt="Gallery image"
//           onClose={() => setSelectedImage(null)}
//         />
//       )}
//     </section>
//   );
// }
import { useState } from "react";
import gallery1 from "@/assets/gallary1_1756277345984.png";
import gallery2 from "@/assets/gallary2_1756277345985.png";
import gallery3 from "@/assets/gallary3_1756277345985.png";
import gallery4 from "@/assets/gallary4_1756277345985.png";
import gallery5 from "@/assets/gallary5_1756277345985.png";
import gallery6 from "@/assets/gallary6_1756277345984.png";
import gallery7 from "@/assets/gallary7_1756277345984.png";
import gallery8 from "@/assets/gallary8_1756277345984.jpg";

// Mock Lightbox component for demonstration
const Lightbox = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
    onClick={onClose}
  >
    <div className="relative max-w-4xl max-h-full">
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain"
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
      >
        ×
      </button>
    </div>
  </div>
);

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: gallery1,
      alt: "Ming's Chinese Cuisine restaurant exterior with vibrant signage",
    },
    {
      src: gallery2,
      alt: "Ming's restaurant front entrance with illuminated logo",
    },
    {
      src: gallery3,
      alt: "Ming's Chinese Cuisine logo on glass door",
    },
    {
      src: gallery4,
      alt: "Delicious Chinese dishes plated beautifully with garnish",
    },
    {
      src: gallery5,
      alt: "Restaurant interior with festive decorations and elegant ambiance",
    },
    {
      src: gallery6,
      alt: "Ming's restaurant exterior with anniversary celebration decorations",
    },
    {
      src: gallery7,
      alt: "Modern dining area interior with contemporary lighting",
    },
    {
      src: gallery8,
      alt: "Ming's storefront with traditional decorative elements",
    },
  ];

  return (
    <section id="gallery" className="pt-8 md:pt-12 pb-16 md:pb-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 md:mb-6"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            <span className="bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent">
              Our
            </span>
            <span className="text-gray-800 ml-2 md:ml-4">Gallery</span>
          </h2>

          <div className="mt-6 md:mt-8 lg:mt-12">
            <p
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed font-medium px-4"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
            >
              Explore our dishes, ambience, and the artistry behind every meal.
            </p>
          </div>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-8 h-8 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM12 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM12 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox
          src={selectedImage}
          alt="Gallery image"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}
