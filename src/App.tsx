import { motion } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Smartphone, 
  Wifi, 
  CreditCard, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X, 
  Star, 
  HelpCircle,
  ArrowRight,
  Zap,
  ShieldCheck,
  Users
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from './lib/utils';

// --- Components ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-vi-red rounded-lg flex items-center justify-center text-white font-bold text-2xl italic">
            Vi
          </div>
          <span className={cn("font-bold text-xl tracking-tight", isScrolled ? "text-vi-black" : "text-vi-black")}>
            Chembur Store
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-vi-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="tel:+919820302949" className="btn-primary py-2 px-5 text-sm">
            <Phone size={16} /> Call Now
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-vi-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white absolute top-full left-0 right-0 border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium py-2 border-b border-gray-50"
            >
              {link.name}
            </a>
          ))}
          <a href="tel:+919820302949" className="btn-primary w-full mt-2">
            <Phone size={18} /> Call Now
          </a>
        </motion.div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-vi-gray/50 rounded-l-[100px] hidden lg:block" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-red-50 text-vi-red px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Zap size={14} /> Your Trusted Vi Partner in Chembur
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Everything <span className="text-vi-red italic">Vi</span> <br />
            Right in Your Neighborhood.
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-xl">
            Get the best SIM plans, high-speed internet, and expert customer support at our Chembur retail store. Experience the power of Vi today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+919820302949" className="btn-primary text-lg px-8">
              <Phone size={20} /> Call Now
            </a>
            <a href="https://www.google.com/maps/dir/?api=1&destination=19.0522,72.9005" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-8">
              <MapPin size={20} /> Get Directions
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" /> Instant Activation
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" /> 5G Ready
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" /> MNP Support
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://picsum.photos/seed/telecom/800/600" 
              alt="Vi Store Interior" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-vi-red rounded-2xl -z-10 animate-pulse" />
          <div className="absolute -top-6 -right-6 w-48 h-48 bg-vi-black rounded-full -z-10 opacity-10" />
          
          <div className="absolute bottom-10 right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 border border-gray-100">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <Users size={24} />
            </div>
            <div>
              <div className="font-bold text-lg">5000+</div>
              <div className="text-xs text-gray-500">Happy Customers</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Prepaid & Postpaid Plans',
      desc: 'Choose from a wide range of voice and data plans tailored to your needs.',
      icon: <Smartphone className="text-vi-red" size={32} />,
    },
    {
      title: 'SIM Activation & MNP',
      desc: 'Instant SIM activation and hassle-free Mobile Number Portability (MNP) services.',
      icon: <Zap className="text-vi-red" size={32} />,
    },
    {
      title: 'Data & Internet Plans',
      desc: 'High-speed 4G/5G data plans for seamless browsing and streaming.',
      icon: <Wifi className="text-vi-red" size={32} />,
    },
    {
      title: 'VIP Number Selection',
      desc: 'Get your preferred unique mobile numbers with our VIP selection service.',
      icon: <Star className="text-vi-red" size={32} />,
    },
    {
      title: 'Recharge Assistance',
      desc: 'Quick and easy recharge solutions for all Vi prepaid connections.',
      icon: <CreditCard className="text-vi-red" size={32} />,
    },
    {
      title: 'Customer Support',
      desc: 'Expert troubleshooting and support for all your Vi-related queries.',
      icon: <HelpCircle className="text-vi-red" size={32} />,
    },
  ];

  return (
    <section id="services" className="bg-vi-gray/30">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-gray-600">We provide end-to-end telecommunication solutions to keep you connected with what matters most.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="card group"
            >
              <div className="mb-6 p-4 bg-red-50 rounded-2xl w-fit group-hover:bg-vi-red group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <a href="#contact" className="text-vi-red font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl font-bold mb-6">Your Local Vi Hub in Chembur</h2>
          <p className="text-lg text-gray-600 mb-6">
            Vi - Vodafone Idea Store is a neighborhood telecommunication service provider located in Chembur, Mumbai. We pride ourselves on offering personalized mobile network solutions and exceptional customer support.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            As part of Vodafone Idea Limited, one of India’s largest telecom operators, we bring you the latest in voice, data, and digital services under the iconic "Vi" brand. Whether you're looking for a new connection or need help with your existing one, our team is here to help.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-red-50 text-vi-red rounded-lg">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold">Authorized Store</h4>
                <p className="text-sm text-gray-500">Official Vi retail partner</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-red-50 text-vi-red rounded-lg">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-bold">Expert Staff</h4>
                <p className="text-sm text-gray-500">Trained support professionals</p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
          <img 
            src="https://picsum.photos/seed/chembur1/400/500" 
            className="rounded-2xl shadow-lg w-full h-full object-cover mt-8" 
            alt="Store 1"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://picsum.photos/seed/chembur2/400/500" 
            className="rounded-2xl shadow-lg w-full h-full object-cover" 
            alt="Store 2"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="bg-vi-black text-white">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">Visit Us Today</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-vi-red rounded-2xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Our Address</h4>
                  <p className="text-gray-400 leading-relaxed">
                    B3, 608, Sion‑Trombay Rd, above Vodafone Store, <br />
                    opposite Sai Hospital, Chembur, Mumbai, <br />
                    Maharashtra 400071
                  </p>
                  <p className="text-vi-red mt-2 font-medium">Plus code: 3V3R+HQ Mumbai</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-vi-red rounded-2xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Call Us</h4>
                  <a href="tel:+919820302949" className="text-2xl font-bold hover:text-vi-red transition-colors">
                    +91 98203 02949
                  </a>
                  <p className="text-gray-400 mt-1">Local store contact for quick support</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-vi-red rounded-2xl">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Operational Hours</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-gray-400">
                    <span>Mon – Sat:</span>
                    <span>10:00 AM – 8:30 PM</span>
                    <span>Sunday:</span>
                    <span>10:00 AM – 7:00 PM</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 italic">* Hours may vary on special holidays.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-vi-red/20">
            {/* Placeholder for Google Map Embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.212534571221!2d72.9005!3d19.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8ac60000001%3A0x7d00000000000000!2sVi%20Store%20Chembur!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Vi Store Chembur Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "How can I activate a new Vi SIM card?",
      a: "Visit our store with a valid ID proof (Aadhar card preferred) and a passport-size photo. Our team will assist you with the digital KYC process for instant activation."
    },
    {
      q: "What is the process for Mobile Number Portability (MNP)?",
      a: "To port to Vi, simply generate a Unique Porting Code (UPC) by sending 'PORT <MobileNumber>' to 1900. Visit us with the code and your ID proof to complete the process."
    },
    {
      q: "Do you offer 5G connectivity plans?",
      a: "Yes, we offer 5G-ready plans. Our staff can help you check if your device and area are 5G compatible and recommend the best data plans."
    },
    {
      q: "Can I choose a VIP or fancy mobile number?",
      a: "Absolutely! We have a wide selection of premium and VIP numbers. You can browse the available list at our store and pick one that suits you."
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600">Everything you need to know about our services and processes.</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="group bg-vi-gray/30 rounded-2xl p-6 cursor-pointer">
            <summary className="flex items-center justify-between font-bold text-lg list-none">
              {faq.q}
              <ChevronRight className="group-open:rotate-90 transition-transform text-vi-red" />
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      text: "Excellent service! Got my SIM ported to Vi in just a few minutes. The staff is very helpful and professional.",
      rating: 5
    },
    {
      name: "Priya Mehta",
      text: "The best Vi store in Chembur. They helped me choose a great postpaid plan that saves me money every month.",
      rating: 5
    },
    {
      name: "Amit Patel",
      text: "Very quick recharge and troubleshooting. Highly recommend this store for any Vodafone Idea related issues.",
      rating: 4
    }
  ];

  return (
    <section className="bg-vi-gray/20">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
            <span className="ml-2 text-vi-black font-bold">4.8/5 Average Rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-gray-600 italic mb-6">"{review.text}"</p>
              <div className="font-bold">— {review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-vi-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-vi-red rounded-lg flex items-center justify-center text-white font-bold text-2xl italic">
                Vi
              </div>
              <span className="font-bold text-xl tracking-tight">Chembur Store</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8">
              Your neighborhood telecommunication partner providing the best of Vi services in Chembur, Mumbai. Stay connected with the fastest network.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-vi-red transition-colors">
                <Smartphone size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-vi-red transition-colors">
                <Users size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="https://www.myvi.in" target="_blank" className="hover:text-white transition-colors">Official Vi Site</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download Vi App</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="tel:+919820302949" className="hover:text-white transition-colors">Emergency Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Vi Store Chembur. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
      
      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-40 flex flex-col gap-3">
        <a 
          href="https://www.google.com/maps/dir/?api=1&destination=19.0522,72.9005" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-vi-black text-white rounded-full shadow-2xl flex items-center justify-center"
        >
          <MapPin size={24} />
        </a>
        <a 
          href="tel:+919820302949" 
          className="w-14 h-14 bg-vi-red text-white rounded-full shadow-2xl flex items-center justify-center"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
}
