import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Zap, Baby, Wind, Sparkles, UserCheck } from "lucide-react";

const services = [
  {
    title: "Men's Haircuts",
    description: "Precision cuts tailored to your style, from classic to contemporary.",
    icon: Scissors,
    price: "from $35"
  },
  {
    title: "Skin Fades",
    description: "Sharp, seamless transitions that stay looking fresh longer.",
    icon: Zap,
    price: "from $40"
  },
  {
    title: "Beard Grooming",
    description: "Full shaping, trimming, and line-ups for the perfect finish.",
    icon: UserCheck,
    price: "from $20"
  },
  {
    title: "Kids' Cuts",
    description: "Family-friendly with our fun car seat to keep the little ones happy.",
    icon: Baby,
    price: "from $25"
  },
  {
    title: "Hot Towel Shave",
    description: "The ultimate traditional relaxation and smooth close shave.",
    icon: Wind,
    price: "from $35"
  },
  {
    title: "Deluxe Styling",
    description: "Complete transformation including wash, cut, and product styling.",
    icon: Sparkles,
    price: "from $50"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-4">Core Services</h2>
          <p className="text-lg text-muted-foreground">Professional grooming standards with a community spirit. Whether you need a quick trim or a full transformation, we've got you covered.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group border-none shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-background">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-dashed">
                  <span className="font-mono text-sm uppercase tracking-wider text-muted-foreground">Price</span>
                  <span className="font-bold text-lg">{service.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const reviews = [
    {
      name: "Tane Williams",
      text: "Best fade in Hastings hands down. The vibe is always on point and the team really knows their stuff.",
      rating: 5
    },
    {
      name: "Mark Henderson",
      text: "Love bringing my son here. That car seat is a game changer, he actually enjoys getting his haircut now!",
      rating: 5
    },
    {
      name: "Liam O'Connor",
      text: "Top tier service. 4.9 stars is well deserved. Consistent quality every single visit.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-4">Trusted by Local Legends</h2>
            <p className="text-lg text-muted-foreground">Join the hundreds of Hawke's Bay locals who make Freshy Barber their regular spot.</p>
          </div>
          <div className="flex items-center gap-2 bg-accent/5 px-6 py-3 rounded-full border border-accent/10">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Sparkles key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-bold">4.9 Star Average</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="p-8 rounded-3xl bg-secondary relative">
              <div className="absolute top-8 right-8 text-primary/10">
                <Wind className="w-12 h-12 rotate-180" />
              </div>
              <p className="text-lg font-medium mb-8 leading-relaxed">"{review.text}"</p>
              <div>
                <h4 className="font-bold text-xl">{review.name}</h4>
                <p className="text-sm text-muted-foreground">Local Local Reviewer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
