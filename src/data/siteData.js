import pic1 from "../assets/images/pic1.jpeg";
import pic2 from "../assets/images/pic2.jpeg";
import pic3 from "../assets/images/pic3.jpeg";
import pic4 from "../assets/images/pic4.jpeg";
import pic5 from "../assets/images/pic5.jpeg";
import pic6 from "../assets/images/pic6.jpeg";
import pic7 from "../assets/images/pic7.jpeg";
import pic8 from "../assets/images/pic8.jpeg";
import pic9 from "../assets/images/pic9.jpeg";
import pic10 from "../assets/images/pic10.jpeg";
import pic11 from "../assets/images/pic11.jpeg";
import pic12 from "../assets/images/pic12.jpeg";
import pic13 from "../assets/images/pic13.jpeg";
import pic14 from "../assets/images/pic14.jpeg";
import pic15 from "../assets/images/pic15.jpeg";

import headerAbout from "../assets/images/header_about.jpg";
import headerServices from "../assets/images/header_services.jpg";
import headerGallery from "../assets/images/header_gallery.jpg";
import headerContact from "../assets/images/header_contact.jpg";

export const siteData = {
  company: {
    name: "Newtown Optical",
    tagline: "Your Vision, Our Priority",
    owner: "Billalur Rahaman",
    description: "Premium optical store providing high-quality eyeglasses, sunglasses, and professional eye care services in Kolkata.",
  },

  navigation: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ],

  contact: {
    phone: "9830952505",
    email: "mrbillalur2017@gmail.com",
    whatsapp: "9830952505",
  },

  location: {
    address: "CE/1/C/127, Street No 240, Newtown, AA-1C, Kolkata (Landmark - Opposite Axis Mall, Indian Oil Petrol Pump), North 24 Parganas, West Bengal, 700156",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4039.033340354623!2d88.45967087530062!3d22.576899779488684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDM0JzM2LjgiTiA4OMKwMjcnNDQuMSJF!5e1!3m2!1sen!2sin!4v1791268771196!5m2!1sen!2sin",
  },

  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },

  images: {
    hero: pic1,
    about: headerAbout,
    servicesHeader: headerServices,
    galleryHeader: headerGallery,
    contactHeader: headerContact,
  },

  services: [
    {
      id: 1,
      title: "Comprehensive Eye Testing",
      description: "Accurate computerized eye testing by experienced optometrists to determine your exact prescription.",
      icon: "eye",
    },
    {
      id: 2,
      title: "Premium Eyeglasses",
      description: "A wide collection of frames suited for all face shapes, ensuring both comfort and style.",
      icon: "glasses",
    },
    {
      id: 3,
      title: "Contact Lenses",
      description: "High-quality contact lenses for daily wear, cosmetic use, and special prescriptions.",
      icon: "lens",
    },
    {
      id: 4,
      title: "Frame Repair & Adjustment",
      description: "Professional frame alignment, screw replacement, and ultra-sonic cleaning services.",
      icon: "tool",
    },
    {
      id: 5,
      title: "Sunglasses & UV Protection",
      description: "Protect your eyes from harmful UV rays with our branded, polarized, and stylish sunglasses.",
      icon: "sun",
    },
    {
      id: 6,
      title: "Computer Vision Care",
      description: "Specialized blue-light blocking lenses to reduce digital eye strain and enhance screen comfort.",
      icon: "activity",
    },
    {
      id: 7,
      title: "Children's Eye Care",
      description: "Pediatric eye exams and durable, kid-friendly frames designed for active children.",
      icon: "heart",
    },
    {
      id: 8,
      title: "Vision Therapy",
      description: "Customized therapy programs to improve visual skills and treat conditions like lazy eye.",
      icon: "shield",
    },
    {
      id: 9,
      title: "Prescription Sunglasses",
      description: "Custom-made tinted and polarized lenses tailored perfectly to your individual vision prescription.",
      icon: "sun",
    },
    {
      id: 10,
      title: "Sports Vision Solutions",
      description: "Specialized impact-resistant eyewear that enhances contrast and visual reaction time for athletes.",
      icon: "activity",
    },
    {
      id: 11,
      title: "Contact Lens Fitting",
      description: "Comprehensive fitting sessions and hygiene training for first-time contact lens users.",
      icon: "lens",
    },
    {
      id: 12,
      title: "Glaucoma & Cataract Screening",
      description: "Early detection screenings utilizing advanced optical technology for proactive eye health management.",
      icon: "eye",
    }
  ],

  gallery: [
    pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15
  ]
};
