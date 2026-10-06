import { X } from "lucide-react";
import { useEffect } from "react";

const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    if (image) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-primary transition-colors bg-black/40 p-2 rounded-full"
        aria-label="Close modal"
      >
        <X size={32} />
      </button>
      
      <div 
        className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={image} 
          alt="Enlarged view" 
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
        />
      </div>
    </div>
  );
};

export default ImageModal;
