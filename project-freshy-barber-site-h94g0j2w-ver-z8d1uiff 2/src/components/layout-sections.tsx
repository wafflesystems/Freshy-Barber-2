import { Button } from "@/components/ui/button";
import { Scissors, Star, MapPin, Phone, Clock, ChevronRight, Menu, X, Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b py-3" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
            <Scissors className="w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold uppercase tracking-tight">Freshy Barber</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-accent transition-colors">
              {link.name}
            </a>
          ))}
          <Button variant="default" className="font-semibold px-6 shadow-elegant hover:scale-105 transition-transform" asChild>
            <a href="tel:+64274997786">Book Now</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full text-lg py-6" asChild>
              <a href="tel:+64274997786">Book Now</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1759134248487-e8baaf31e33e?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Barber Shop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent md:to-background/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-in slide-in-from-left duration-700">
          <Badge variant="outline" className="mb-4 py-1 px-4 border-accent text-accent font-semibold uppercase tracking-widest bg-accent/5">
            Hastings' Top-Rated Shop
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] uppercase italic">
            Quality Cuts <br />
            <span className="text-accent">Vibrant Vibe</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Experience the sharpest fades and professional grooming in a community-focused atmosphere. Family-friendly with local heart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg h-14 px-8 font-bold shadow-lg hover:scale-105 transition-transform" asChild>
              <a href="tel:+64274997786">Book Your Appointment</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8 font-bold border-2" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-xl">4.9</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-medium">from 791+ Google Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
