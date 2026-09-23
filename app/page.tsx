import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import FeaturedProduct from "@/components/FeaturedProduct";
import Customization from "@/components/Customization";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <FeaturedProduct />
        <Customization />
        <Process />
        <WhyChooseUs />
        <Gallery />
        <Statistics />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
