import Hero from "../components/home/Hero";
import BannerCarousel from "../components/home/BannerCarousel";
import HomeAbout from "../components/home/HomeAbout";
import FrameShapes from "../components/home/FrameShapes";
import FeaturedServices from "../components/home/FeaturedServices";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HomeGallery from "../components/home/HomeGallery";
import HomeContact from "../components/home/HomeContact";

const Home = () => {
  return (
    <>
      <Hero />
      <BannerCarousel />
      <HomeAbout />
      <FrameShapes />
      <FeaturedServices />
      <WhyChooseUs />
      <HomeGallery />
      <HomeContact />
    </>
  );
};

export default Home;
