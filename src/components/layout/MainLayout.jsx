import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingCallButton from "./FloatingCallButton";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full overflow-hidden">
        <Outlet />
      </main>
      <FloatingCallButton />
      <Footer />
    </div>
  );
};

export default MainLayout;
