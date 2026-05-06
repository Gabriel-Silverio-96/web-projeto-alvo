import "./page.css";
import {
  About,
  CTA,
  Footer,
  Header,
  Hero,
  Partners,
  Services,
  Testimonials,
} from "@/components";

export default function Page() {
  return (
    <main className="page">
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Partners />
      <CTA />
      <Footer />
    </main>
  );
}
