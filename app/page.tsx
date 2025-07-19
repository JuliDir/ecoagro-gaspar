import Crops from "@/components/Crops";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Products from "@/components/Producst";

export default function Home() {
  return (
      <main className="font-sans">
        <Hero />
        <Crops /> 
        <CTA />
        <Products />
      </main>
  );
}
