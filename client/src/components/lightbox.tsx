import { useEffect } from "react";
import { X } from "lucide-react";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      data-testid="lightbox-overlay"
    >
      <button
        onClick={onClose}
        data-testid="button-close-lightbox"
        className="absolute top-4 right-4 text-white hover:text-ming-orange transition-colors duration-300 z-10"
      >
        <X size={32} />
      </button>
      
      <img
        src={src}
        alt={alt}
        data-testid="img-lightbox"
        className="max-w-full max-h-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
