import Image from "next/image";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import AboutUs from "./company/aboutus/page";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Chatbot from "./_components/Chatbot";

export default function Home() {
  return (
   <>
   <Navbar />
   <Hero />
   <Services />
   <Gallery />
   <Contact />
   <Footer />
   <Chatbot />
   </>
  );
}
