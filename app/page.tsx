import Contact from "@/components/Contact";
import Crops from "@/components/Crops";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Products from "@/components/Producst";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
      <main className="font-sans">
        <Hero />
        <Products />
        <Crops /> 
        <CTA />
        <Testimonials />
        <Stats />
        <Contact />
        <Footer />
      </main>
  );
}
