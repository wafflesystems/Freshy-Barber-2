import { Navbar, Hero } from "./components/layout-sections";
import { Services, Testimonials } from "./components/content-sections";
import { Contact, Footer } from "./components/footer-sections";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;