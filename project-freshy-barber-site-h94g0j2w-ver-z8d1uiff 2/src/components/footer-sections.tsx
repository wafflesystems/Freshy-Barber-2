import { MapPin, Phone, Clock, Mail, ExternalLink, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-6">Come Visit Us</h2>
              <p className="text-xl text-primary-foreground/70 leading-relaxed">Located in the heart of Hastings, Hawke's Bay. Walk-ins are always welcome, but bookings are recommended to avoid wait times.</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-primary-foreground/70">354 Heretaunga Street West, Hastings 4122, New Zealand</p>
                  <a 
                    href="https://maps.google.com/?q=Freshy+Barber+354+Heretaunga+Street+West+Hastings" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-accent hover:underline font-bold"
                  >
                    Open in Maps <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-primary-foreground/70">For bookings and inquiries</p>
                  <a href="tel:+64274997786" className="text-2xl font-black mt-2 block hover:text-accent transition-colors">
                    +64 274 997 786
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Hours</h3>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-primary-foreground/70">
                    <span>Mon - Fri:</span> <span>9:00 AM - 5:30 PM</span>
                    <span>Saturday:</span> <span>9:00 AM - 4:00 PM</span>
                    <span>Sunday:</span> <span className="text-accent">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border-8 border-white/5 min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.484214156942!2d176.840003!3d-39.638546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d690a768652684b%3A0xc6657c91c9f4d6d!2sFreshy%20Barber!5e0!3m2!1sen!2snz!4v1700000000000!5m2!1sen!2snz" 
              className="absolute inset-0 w-full h-full grayscale contrast-125 invert opacity-80"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 bg-primary border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-accent text-accent-foreground p-1 rounded-lg">
              <Scissors className="w-5 h-5" />
            </div>
            <span className="text-xl font-display font-bold uppercase tracking-tight text-white">Freshy Barber</span>
          </div>
          
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Freshy Barber Hastings. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
              <span className="sr-only">Instagram</span>
              <Mail className="w-6 h-6" />
            </a>
            <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-primary" asChild>
              <a href="#services">Book Now</a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
