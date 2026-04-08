import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  Users, 
  Calculator, 
  CheckCircle2, 
  Instagram, 
  Twitter, 
  Facebook, 
  Menu, 
  X, 
  ArrowRight,
  Zap,
  Target,
  Trophy
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Programs', href: '#programs' },
    { name: 'Membership', href: '#membership' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'BMI', href: '#bmi' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
            <Dumbbell className="text-black w-6 h-6" />
          </div>
          <span className="text-2xl font-display tracking-wider uppercase">P2PClouds</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-brand transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button className="btn-primary py-2 px-6 text-sm">Join Now</button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium hover:text-brand transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="btn-primary w-full">Join Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-brand font-bold tracking-[0.3em] uppercase mb-4 block">Elite Fitness Platform</span>
          <h1 className="text-6xl md:text-8xl font-display uppercase leading-[0.9] mb-6">
            Push Your <br />
            <span className="text-brand">Limits</span> Beyond
          </h1>
          <p className="text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
            Experience the ultimate transformation with expert trainers, state-of-the-art equipment, and a community that drives you to greatness.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary flex items-center gap-2">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="btn-outline">View Programs</button>
          </div>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-10 right-6 hidden lg:flex gap-8">
        {[
          { label: 'Trainers', value: '20+' },
          { label: 'Members', value: '5k+' },
          { label: 'Programs', value: '15+' },
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="text-right"
          >
            <div className="text-4xl font-display text-brand">{stat.value}</div>
            <div className="text-xs uppercase tracking-widest text-white/50">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    { title: 'Bodybuilding', icon: <Dumbbell />, desc: 'Build massive strength and muscle with our structured hypertrophy programs.' },
    { title: 'Weight Loss', icon: <Zap />, desc: 'High-intensity cardio and metabolic conditioning to torch fat efficiently.' },
    { title: 'Personal Training', icon: <Users />, desc: 'One-on-one sessions tailored to your specific goals and fitness level.' },
    { title: 'Performance', icon: <Trophy />, desc: 'Athletic training focused on speed, power, and agility for competitors.' },
  ];

  return (
    <section id="programs" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display uppercase mb-4">Our Elite Programs</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Choose from a variety of specialized training paths designed to help you reach your peak potential.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((p, i) => (
            <motion.div 
              key={p.title}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-bg border border-white/5 hover:border-brand/50 transition-all group"
            >
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-black transition-colors">
                {React.cloneElement(p.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Membership = () => {
  const plans = [
    { name: 'Basic', price: '29', features: ['Gym Access', 'Standard Equipment', 'Locker Room', 'Free Water'] },
    { name: 'Pro', price: '59', features: ['All Basic Features', 'Group Classes', 'Personal Trainer (2/mo)', 'Nutrition Plan'], popular: true },
    { name: 'Elite', price: '99', features: ['All Pro Features', 'Unlimited PT', 'Sauna & Spa', 'Guest Passes', 'Priority Support'] },
  ];

  return (
    <section id="membership" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display uppercase mb-4">Choose Your Plan</h2>
          <p className="text-white/60">Flexible membership options to suit your lifestyle and goals.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative p-10 rounded-3xl border ${plan.popular ? 'border-brand bg-brand/5' : 'border-white/10 bg-surface'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display text-brand">${plan.price}</span>
                  <span className="text-white/50">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 size={18} className="text-brand" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-brand text-black hover:bg-brand-dark' : 'bg-white/10 hover:bg-white/20'}`}>
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BMICalculator = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [message, setMessage] = useState<string>('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (weight && height) {
      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      const val = w / (h * h);
      setBmi(parseFloat(val.toFixed(1)));
      
      if (val < 18.5) setMessage('Underweight');
      else if (val < 25) setMessage('Healthy Weight');
      else if (val < 30) setMessage('Overweight');
      else setMessage('Obese');
    }
  };

  return (
    <section id="bmi" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display uppercase mb-6">Calculate Your <span className="text-brand">BMI</span></h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              The Body Mass Index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. Use our tool to get a quick assessment.
            </p>
            <form onSubmit={calculateBMI} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50">Weight (kg)</label>
                  <input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="70"
                    className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 focus:border-brand outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50">Height (cm)</label>
                  <input 
                    type="number" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="175"
                    className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 focus:border-brand outline-none transition-all"
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Calculator size={20} /> Calculate Now
              </button>
            </form>
          </div>

          <div className="glass p-10 rounded-3xl text-center">
            {bmi ? (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="space-y-4"
              >
                <div className="text-sm uppercase tracking-[0.3em] text-white/50">Your Result</div>
                <div className="text-8xl font-display text-brand">{bmi}</div>
                <div className="text-2xl font-bold">{message}</div>
                <div className="pt-6 grid grid-cols-4 gap-2 text-[10px] uppercase tracking-tighter">
                  <div className={bmi < 18.5 ? 'text-brand' : 'text-white/20'}>Underweight<br/>&lt;18.5</div>
                  <div className={bmi >= 18.5 && bmi < 25 ? 'text-brand' : 'text-white/20'}>Healthy<br/>18.5-25</div>
                  <div className={bmi >= 25 && bmi < 30 ? 'text-brand' : 'text-white/20'}>Overweight<br/>25-30</div>
                  <div className={bmi >= 30 ? 'text-brand' : 'text-white/20'}>Obese<br/>&gt;30</div>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-white/20">
                <Target size={64} className="mb-4" />
                <p>Enter your details to see results</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Trainers = () => {
  const trainers = [
    { name: 'Alex Rivera', role: 'Bodybuilding Expert', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop' },
    { name: 'Sarah Chen', role: 'HIIT Specialist', img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Marcus Thorne', role: 'Strength Coach', img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop' },
  ];

  return (
    <section id="trainers" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display uppercase mb-4">Meet Our <span className="text-brand">Experts</span></h2>
            <p className="text-white/60">Our world-class trainers are here to guide, motivate, and push you towards your goals with precision and passion.</p>
          </div>
          <button className="btn-outline">View All Trainers</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((t) => (
            <div key={t.name} className="group relative overflow-hidden rounded-3xl aspect-[3/4]">
              <img 
                src={t.img} 
                alt={t.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="text-xs uppercase tracking-widest text-brand mb-1">{t.role}</div>
                <h3 className="text-2xl font-bold">{t.name}</h3>
                <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram size={20} className="hover:text-brand cursor-pointer" />
                  <Twitter size={20} className="hover:text-brand cursor-pointer" />
                  <Facebook size={20} className="hover:text-brand cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand rounded flex items-center justify-center">
                <Dumbbell className="text-black w-5 h-5" />
              </div>
              <span className="text-xl font-display tracking-wider uppercase">P2PClouds</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Elevating the fitness experience through elite training, community support, and data-driven results.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand hover:text-black transition-all cursor-pointer">
                <Instagram size={18} />
              </div>
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand hover:text-black transition-all cursor-pointer">
                <Twitter size={18} />
              </div>
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand hover:text-black transition-all cursor-pointer">
                <Facebook size={18} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#membership" className="hover:text-white transition-colors">Membership</a></li>
              <li><a href="#trainers" className="hover:text-white transition-colors">Trainers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand">Support</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand">Newsletter</h4>
            <p className="text-sm text-white/50 mb-4">Get the latest fitness tips and platform updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-bg border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-brand flex-grow"
              />
              <button className="bg-brand text-black p-2 rounded-lg hover:bg-brand-dark transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest">
          <p>© 2026 P2PClouds Fitness. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Designed for Excellence</span>
            <span>Built for Results</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Programs />
      <Membership />
      <Trainers />
      <BMICalculator />
      <Footer />
    </div>
  );
}
