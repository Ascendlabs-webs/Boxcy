/* Compiled from src/app.jsx — do not edit by hand. Edit src/app.jsx and re-run: node scripts/build.js */
const {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback
} = React;

/* =========================================================
   DATA — single source of truth
   ========================================================= */
const IMG = {
  hero1: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1200&auto=format&fit=crop",
  hero2: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=900&auto=format&fit=crop",
  hero3: "https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=900&auto=format&fit=crop",
  hair: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=900&auto=format&fit=crop",
  skin: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=900&auto=format&fit=crop",
  nails: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=900&auto=format&fit=crop",
  bridal: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=900&auto=format&fit=crop",
  spa: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=900&auto=format&fit=crop",
  tattoo: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=900&auto=format&fit=crop",
  makeup: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?q=80&w=900&auto=format&fit=crop",
  wellness: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=900&auto=format&fit=crop",
  salon1: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1100&auto=format&fit=crop",
  salon2: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1100&auto=format&fit=crop",
  salon3: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=1100&auto=format&fit=crop",
  salon4: "https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=1100&auto=format&fit=crop",
  salon5: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1100&auto=format&fit=crop",
  salon6: "https://images.unsplash.com/photo-1571646034647-52e6ea84b28c?q=80&w=1100&auto=format&fit=crop",
  finalCta: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1800&auto=format&fit=crop",
  story: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1200&auto=format&fit=crop",
  press: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=400&auto=format&fit=crop",
  cover: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
  partnerHero: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1200&auto=format&fit=crop",
  face1: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=240&auto=format&fit=crop&crop=faces",
  face2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=240&auto=format&fit=crop&crop=faces",
  face3: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=240&auto=format&fit=crop&crop=faces",
  face4: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=240&auto=format&fit=crop&crop=faces",
  face5: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=240&auto=format&fit=crop&crop=faces",
  face6: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=240&auto=format&fit=crop&crop=faces"
};
const CATEGORIES = [{
  name: "Hair",
  desc: "Cuts, colour, blow-drys & bridal styling",
  img: IMG.hair,
  count: "120+ pros"
}, {
  name: "Skin",
  desc: "Facials, peels & glow rituals",
  img: IMG.skin,
  count: "85+ pros"
}, {
  name: "Nails",
  desc: "Manicures, art & extensions",
  img: IMG.nails,
  count: "60+ pros"
}, {
  name: "Bridal",
  desc: "Looks for your big day, on time, every time",
  img: IMG.bridal,
  count: "40+ studios"
}, {
  name: "Spa",
  desc: "Massage, hammam & quiet hours",
  img: IMG.spa,
  count: "30+ retreats"
}, {
  name: "Tattoo",
  desc: "Ink by trusted artists",
  img: IMG.tattoo,
  count: "20+ studios"
}, {
  name: "Makeup",
  desc: "Editorial, occasion, lessons",
  img: IMG.makeup,
  count: "50+ artists"
}, {
  name: "Wellness",
  desc: "Yoga, sound & restorative rituals",
  img: IMG.wellness,
  count: "25+ studios"
}];
const SALONS = [{
  id: "hair-lab",
  name: "The Hair Lab",
  loc: "Adyar",
  area: "South Chennai",
  rating: 4.9,
  reviews: 328,
  price: 499,
  from: "Haircut & Styling",
  next: "6:30 PM today",
  tags: ["Hair", "Styling"],
  img: IMG.salon1,
  services: ["Haircut & Styling · 45m · ₹499", "Keratin Treatment · 180m · ₹3,499", "Hair Spa · 60m · ₹899", "Bridal Hair Trial · 90m · ₹1,999"]
}, {
  id: "mane",
  name: "Mane Story Salon",
  loc: "Velachery",
  area: "South Chennai",
  rating: 4.8,
  reviews: 402,
  price: 399,
  from: "Men's Haircut",
  next: "12:30 PM today",
  tags: ["Hair", "Beard"],
  img: IMG.salon2,
  services: ["Men's Haircut · 30m · ₹399", "Beard Trim · 15m · ₹199", "Hair Colour · 90m · ₹1,899", "Hot Towel Shave · 30m · ₹349"]
}, {
  id: "aura",
  name: "Aura Spa & Wellness",
  loc: "Nungambakkam",
  area: "Central Chennai",
  rating: 4.8,
  reviews: 512,
  price: 1299,
  from: "Aroma Massage",
  next: "5:00 PM today",
  tags: ["Spa", "Massage"],
  img: IMG.salon3,
  services: ["Aroma Massage · 60m · ₹1,299", "Deep Tissue · 75m · ₹1,799", "Hammam Ritual · 90m · ₹2,499", "Couples Retreat · 120m · ₹4,999"]
}, {
  id: "blush",
  name: "Blush Beauty Lounge",
  loc: "Besant Nagar",
  area: "South Chennai",
  rating: 4.9,
  reviews: 246,
  price: 999,
  from: "Soft Glam Makeup",
  next: "4:15 PM today",
  tags: ["Makeup", "Skin"],
  img: IMG.salon4,
  services: ["Soft Glam · 60m · ₹999", "Hydrating Facial · 75m · ₹1,499", "Bridal Trial · 120m · ₹3,999", "Lash Lift · 45m · ₹1,299"]
}, {
  id: "velvet",
  name: "Velvet Nail Bar",
  loc: "Anna Nagar",
  area: "West Chennai",
  rating: 4.7,
  reviews: 189,
  price: 699,
  from: "Gel Manicure",
  next: "3:45 PM today",
  tags: ["Nails", "Art"],
  img: IMG.salon5,
  services: ["Gel Manicure · 60m · ₹699", "Builder Gel · 90m · ₹1,299", "Nail Art · add-on · ₹299", "Pedicure · 60m · ₹799"]
}, {
  id: "zarra",
  name: "Zarra Bridal Studio",
  loc: "T. Nagar",
  area: "Central Chennai",
  rating: 5.0,
  reviews: 98,
  price: 2499,
  from: "Bridal Trial",
  next: "Tomorrow, 10 AM",
  tags: ["Bridal", "Hair"],
  img: IMG.salon6,
  services: ["Bridal Trial · 120m · ₹2,499", "Engagement Look · 90m · ₹3,499", "Reception Glam · 120m · ₹4,999", "Mehendi & Hair · 180m · ₹5,999"]
}];
const PRESS = ["Vogue India", "The Hindu", "Cosmopolitan", "Mint Lounge", "Architectural Digest", "Elle", "YourStory"];
const JOURNAL = [{
  kicker: "Field Notes",
  title: "What a great Chennai salon looks like in 2026",
  read: "6 min",
  img: IMG.cover
}, {
  kicker: "Studio Visit",
  title: "Inside Aura Spa's new Nungambakkam retreat",
  read: "4 min",
  img: IMG.story
}, {
  kicker: "Conversation",
  title: "The rise of the independent beauty professional",
  read: "8 min",
  img: IMG.hero3
}];
const FAQS = [{
  q: "Is Bocxy free for customers?",
  a: "Yes. Booking on Bocxy is free for customers — you only pay the salon or professional at the time of your service, at the price they list on Bocxy."
}, {
  q: "How does booking actually work?",
  a: "You pick a service and a time. The professional confirms in minutes. We send reminders 24h and 1h before. If plans change, you can reschedule in one tap."
}, {
  q: "What is Bocxy Partner?",
  a: "Bocxy Partner is the operating system for beauty businesses — appointments, staff, customers, reminders, payments and analytics, all in one place. We charge a small platform fee per booking, with a free plan to start."
}, {
  q: "Which cities does Bocxy operate in?",
  a: "We're currently live across Chennai with 100+ partner salons and 500+ independent professionals. Mumbai, Bengaluru and Hyderabad open in 2026."
}, {
  q: "How do you verify professionals?",
  a: "Every partner is verified for ID, business registration and portfolio. Reviews are only from real bookings, and we moderate them by hand."
}];
const STAFF = [{
  name: "Anita Raj",
  role: "Senior Stylist",
  rating: 4.9,
  jobs: 312,
  img: IMG.face3
}, {
  name: "Vikram S.",
  role: "Colour Specialist",
  rating: 4.8,
  jobs: 198,
  img: IMG.face2
}, {
  name: "Sana K.",
  role: "Skin Therapist",
  rating: 4.9,
  jobs: 246,
  img: IMG.face5
}];
const RECENT_BOOKINGS = [{
  name: "Priya R.",
  action: "booked Haircut & Styling",
  place: "The Hair Lab",
  time: "just now"
}, {
  name: "Karthik S.",
  action: "booked Beard Trim",
  place: "Mane Story",
  time: "2 min ago"
}, {
  name: "Divya K.",
  action: "booked Bridal Trial",
  place: "Zarra Studio",
  time: "5 min ago"
}, {
  name: "Meera J.",
  action: "booked Gel Manicure",
  place: "Velvet Nails",
  time: "8 min ago"
}, {
  name: "Rahul K.",
  action: "booked Hair Spa",
  place: "Aura Spa",
  time: "12 min ago"
}];
const AWARDS = [{
  l: "Forbes 30 Under 30",
  y: "2025"
}, {
  l: "YourStory Tech30",
  y: "2025"
}, {
  l: "NASSCOM Emerge 50",
  y: "2024"
}, {
  l: "Babson WIN Lab",
  y: "2024"
}];
const PRODUCTS = [{
  id: "clinic",
  name: "Clinic Software",
  tag: "For clinics",
  desc: "EMR, appointments, billing and patient records for aesthetic clinics.",
  img: IMG.cover,
  icon: "✚",
  features: ["Patient EMR", "Treatment plans", "Before/after photos", "Billing & receipts"]
}, {
  id: "salon",
  name: "Salon & Spa Software",
  tag: "For salons",
  desc: "Bookings, staff, inventory and customer CRM for salons and spas.",
  img: IMG.salon3,
  icon: "✂",
  features: ["Appointment calendar", "Staff commissions", "Inventory tracking", "Customer history"]
}, {
  id: "medspa",
  name: "Medspa Software",
  tag: "For medspas",
  desc: "End-to-end management for medical spas — packages, memberships, consent forms.",
  img: IMG.spa,
  icon: "✦",
  features: ["Membership plans", "Package redemptions", "Digital consent", "Multi-location"]
}, {
  id: "derm",
  name: "Dermatology Software",
  tag: "For dermatologists",
  desc: "Clinical workflows, prescriptions and follow-ups for dermatology clinics.",
  img: IMG.skin,
  icon: "◐",
  features: ["Rx management", "Follow-up reminders", "Photo records", "Lab integrations"]
}, {
  id: "crm",
  name: "Bocxy CRM",
  tag: "Customer CRM",
  desc: "One customer record across all touchpoints — bookings, marketing, loyalty.",
  img: IMG.face1,
  icon: "◑",
  features: ["Unified profile", "Segments & journeys", "Loyalty & referrals", "WhatsApp campaigns"]
}, {
  id: "hr",
  name: "HR & Payroll",
  tag: "For teams",
  desc: "Attendance, payroll, leave and compliance for beauty and wellness teams.",
  img: IMG.face2,
  icon: "◒",
  features: ["Attendance & shifts", "Payroll & TDS", "Leave & holidays", "Statutory compliance"]
}];
const NEW_PRODUCT = {
  id: "marketplace",
  name: "Bocxy Marketplace",
  tag: "For everyone · coming soon",
  desc: "Discover and book Chennai's finest salons, spas and beauty professionals. One quiet app.",
  icon: "◆",
  features: ["100+ verified + 500+ pros", "Real-time slots", "Tap-to-book in 30s", "UPI, cards & wallets"]
};
const INTEGRATIONS = ["Razorpay", "Stripe", "WhatsApp Business", "Google Calendar", "Tally", "Zoho Books", "Shiprocket", "Meta Pixel"];

/* =========================================================
   DESIGN SYSTEM
   ========================================================= */
function Reveal({
  children,
  delay = 0,
  className = "",
  big = false,
  as = "div"
}) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVis(true);
        io.disconnect();
      }
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -60px 0px"
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    style: {
      transitionDelay: `${delay}ms`
    },
    className: `${big ? "reveal-2" : "reveal"} ${vis ? "revealed" : ""} ${className}`
  }, children);
}
function Eyebrow({
  children,
  light = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] ${light ? "text-cream/70" : "text-taupe"}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-px w-8 bg-clay"
  }), /*#__PURE__*/React.createElement("span", null, children));
}
function Btn({
  children,
  variant = "clay",
  className = "",
  as = "a",
  href = "#",
  onClick
}) {
  const Tag = as;
  const base = "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay/60 active:scale-[0.98]";
  const variants = {
    clay: "bg-clay text-cream hover:bg-clay-deep hover:shadow-[0_12px_32px_-12px_rgba(181,86,47,0.6)]",
    dark: "bg-ink text-cream hover:bg-charcoal",
    cream: "bg-cream text-ink hover:bg-bone border border-ink/10",
    outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-cream",
    ghostlight: "border border-cream/30 text-cream hover:bg-cream hover:text-ink"
  };
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    className: `${base} ${variants[variant]} ${className}`
  }, children);
}
function Logo({
  light = false,
  size = "md"
}) {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-[34px]"
  };
  return /*#__PURE__*/React.createElement("a", {
    href: "#/",
    className: "flex items-center gap-2 select-none",
    "aria-label": "Bocxy home"
  }, /*#__PURE__*/React.createElement("span", {
    className: `font-serif font-medium tracking-tighter ${sizes[size]} ${light ? "text-cream" : "text-ink"}`
  }, "bocxy"), /*#__PURE__*/React.createElement("span", {
    className: "mt-1 h-1.5 w-1.5 rounded-full bg-clay"
  }));
}
function Stat({
  value,
  label,
  delay = 0
}) {
  return /*#__PURE__*/React.createElement(Reveal, {
    delay: delay,
    className: "text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-5xl font-light tracking-tight sm:text-6xl text-ink num"
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, label));
}
function useCountUp(target, duration = 1400, start = false) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const tick = now => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return n;
}

/* =========================================================
   NAV + ROUTER
   ========================================================= */
function useRoute() {
  const [path, setPath] = useState(window.location.hash.replace(/^#/, "") || "/");
  useEffect(() => {
    const onChange = () => setPath(window.location.hash.replace(/^#/, "") || "/");
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  const nav = useCallback(to => {
    window.location.hash = to;
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, []);
  return [path, nav];
}
function LiveTicker() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % RECENT_BOOKINGS.length), 3200);
    return () => clearInterval(t);
  }, []);
  const b = RECENT_BOOKINGS[idx];
  return /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto mt-10 flex max-w-[1400px] items-center justify-center gap-3 px-6 md:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-xs text-ink shadow-soft"
  }, /*#__PURE__*/React.createElement("span", {
    className: "relative flex h-2 w-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-60"
  }), /*#__PURE__*/React.createElement("span", {
    className: "relative inline-flex h-2 w-2 rounded-full bg-leaf"
  })), /*#__PURE__*/React.createElement("span", {
    className: "font-medium"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-ink"
  }, b.name), " ", /*#__PURE__*/React.createElement("span", {
    className: "text-taupe"
  }, b.action), " ", /*#__PURE__*/React.createElement("span", {
    className: "text-ink/40"
  }, "at"), " ", /*#__PURE__*/React.createElement("span", {
    className: "font-medium text-clay"
  }, b.place)), /*#__PURE__*/React.createElement("span", {
    className: "text-taupe/70"
  }, "\xB7 ", b.time))));
}
function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const fn = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setW(h > 0 ? window.scrollY / h * 100 : 0);
    };
    fn();
    window.addEventListener("scroll", fn, {
      passive: true
    });
    window.addEventListener("resize", fn);
    return () => {
      window.removeEventListener("scroll", fn);
      window.removeEventListener("resize", fn);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll-progress",
    style: {
      width: w + "%"
    },
    "aria-hidden": "true"
  });
}
function SideToc({
  items
}) {
  const [active, setActive] = useState(items[0]?.id || "");
  useEffect(() => {
    const els = items.map(i => document.getElementById(i.id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, {
      rootMargin: "-40% 0px -50% 0px"
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [items]);
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "On this page",
    className: "pointer-events-none fixed right-8 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "pointer-events-auto space-y-3 text-right"
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i.id
  }, /*#__PURE__*/React.createElement("a", {
    href: `#${i.id}`,
    className: `group inline-flex items-center gap-3 transition-all ${active === i.id ? "text-ink" : "text-taupe/50 hover:text-taupe"}`
  }, /*#__PURE__*/React.createElement("span", {
    className: `text-[10px] font-mono uppercase tracking-wider transition-all ${active === i.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`
  }, String(items.indexOf(i) + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    className: `h-px transition-all ${active === i.id ? "w-10 bg-ink" : "w-5 bg-current"}`
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-medium"
  }, i.label))))));
}
function WordmarkMarquee() {
  const words = ["Editorial", "Verified", "Calm", "Considered", "Local", "Craft-led", "Independent", "Beautiful"];
  return /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden border-y border-ink/10 bg-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee__inner--fast flex shrink-0 items-center gap-12 pr-12 py-6"
  }, [0, 1].map(k => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "flex items-center gap-12 pr-12"
  }, words.map(w => /*#__PURE__*/React.createElement("span", {
    key: w + k,
    className: "flex items-center gap-12 font-serif text-3xl italic tracking-tight text-ink/80"
  }, /*#__PURE__*/React.createElement("span", null, w), /*#__PURE__*/React.createElement("span", {
    className: "text-clay"
  }, "\u2726"))))))));
}
function ProductGrid() {
  const all = [...PRODUCTS, {
    ...NEW_PRODUCT,
    img: IMG.hero1,
    isNew: true
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "products",
    className: "bg-cream/40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-end justify-between gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "The Bocxy Suite")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-7xl"
  }, "Six software products.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "One quiet marketplace."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-lg font-serif text-lg italic text-ink/65"
  }, "Bocxy runs the back office of India's best beauty businesses \u2014 and is now opening the front door to customers too."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 220
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 rounded-full border border-ink/15 bg-paper p-1.5 text-xs"
  }, /*#__PURE__*/React.createElement("button", {
    className: "rounded-full bg-ink px-4 py-2 font-medium text-cream"
  }, "All products"), /*#__PURE__*/React.createElement("button", {
    className: "rounded-full px-4 py-2 font-medium text-ink/60 transition-colors hover:text-ink"
  }, "SaaS"), /*#__PURE__*/React.createElement("button", {
    className: "rounded-full px-4 py-2 font-medium text-clay transition-colors hover:text-clay"
  }, "New \xB7 Marketplace")))), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
  }, all.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.id,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/" + p.id,
    className: `group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1 hover:shadow-lift ${p.isNew ? "border-ink bg-ink text-cream" : "border-ink/10 bg-paper"}`
  }, p.isNew && /*#__PURE__*/React.createElement("span", {
    className: "absolute right-4 top-4 rounded-full bg-clay px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream z-10"
  }, "Coming soon"), /*#__PURE__*/React.createElement("div", {
    className: "relative h-44 overflow-hidden"
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: "",
    className: "h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: `absolute inset-0 ${p.isNew ? "bg-gradient-to-t from-ink via-ink/40 to-transparent" : "bg-gradient-to-t from-paper/90 via-paper/20 to-transparent"}`
  }), /*#__PURE__*/React.createElement("span", {
    className: `absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full font-serif text-lg ${p.isNew ? "bg-cream text-ink" : "bg-cream text-ink"}`
  }, p.icon)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-1 flex-col p-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: `text-[10px] font-semibold uppercase tracking-[0.22em] ${p.isNew ? "text-clay" : "text-taupe"}`
  }, p.tag), /*#__PURE__*/React.createElement("h3", {
    className: `mt-2 font-serif text-xl font-medium ${p.isNew ? "text-cream" : "text-ink"}`
  }, p.name), /*#__PURE__*/React.createElement("p", {
    className: `mt-2 text-sm leading-relaxed ${p.isNew ? "text-cream/65" : "text-ink/65"}`
  }, p.desc), /*#__PURE__*/React.createElement("ul", {
    className: `mt-4 space-y-1.5 text-xs ${p.isNew ? "text-cream/70" : "text-ink/70"}`
  }, p.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: `h-1 w-1 rounded-full ${p.isNew ? "bg-clay" : "bg-clay"}`
  }), f))), /*#__PURE__*/React.createElement("div", {
    className: `mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-medium transition-all duration-300 ${p.isNew ? "text-cream/70 group-hover:text-clay" : "text-ink/60 group-hover:text-clay"}`
  }, "Explore ", p.isNew ? "the launch" : "the product", " ", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-taupe"
  }, /*#__PURE__*/React.createElement("span", null, "Trusted by ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-ink"
  }, "2,400+"), " beauty businesses"), /*#__PURE__*/React.createElement("span", {
    className: "h-1 w-1 rounded-full bg-taupe"
  }), /*#__PURE__*/React.createElement("span", null, "Powering ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-ink"
  }, "100K+"), " appointments every month"), /*#__PURE__*/React.createElement("span", {
    className: "h-1 w-1 rounded-full bg-taupe"
  }), /*#__PURE__*/React.createElement("span", null, "Across ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-ink"
  }, "14"), " Indian cities"))));
}
function IntegrationsRow() {
  return /*#__PURE__*/React.createElement("section", {
    className: "border-y border-ink/10 bg-paper py-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 md:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-taupe"
  }, "Plays well with"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 font-serif text-lg italic text-ink/70"
  }, "Connects to the tools your business already uses.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
  }, INTEGRATIONS.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "font-serif text-base italic text-ink/55"
  }, t))))));
}
function Manifesto() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-10 lg:grid-cols-12 lg:gap-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Manifesto \xB7 2026")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-6 font-serif text-3xl italic text-ink/80 sm:text-4xl"
  }, "\u2014 Bocxy, on beauty"))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8"
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-serif text-3xl font-light leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-6xl"
  }, "We believe beauty is a ", /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "thousand small appointments."), " We believe each one deserves to be a calm, considered moment. We believe the people who do this work deserve software that respects their craft, and customers deserve a quieter way to find them.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 320
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-12 grid gap-10 sm:grid-cols-3"
  }, [{
    n: "01",
    t: "Honest listings",
    d: "Real photos. Real prices. Real reviews from real bookings."
  }, {
    n: "02",
    t: "Considered defaults",
    d: "Every screen is designed to get out of the way of your ritual."
  }, {
    n: "03",
    t: "Local first",
    d: "Beauty is local. We're proudly Chennai-built — and we're spreading slowly."
  }].map(p => /*#__PURE__*/React.createElement("div", {
    key: p.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-xl italic text-clay"
  }, p.n), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 font-serif text-lg font-medium"
  }, p.t), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-sm leading-relaxed text-ink/65"
  }, p.d)))))))));
}
function TryBooking() {
  const services = ["Haircut & Styling", "Hair Spa", "Beard Trim", "Manicure", "Facial"];
  const slots = ["Today, 6:30 PM", "Today, 7:00 PM", "Tomorrow, 11 AM", "Tomorrow, 4 PM"];
  const [step, setStep] = useState(0);
  const [svc, setSvc] = useState(null);
  const [slot, setSlot] = useState(null);
  const [done, setDone] = useState(false);
  function reset() {
    setStep(0);
    setSvc(null);
    setSlot(null);
    setDone(false);
  }
  return /*#__PURE__*/React.createElement("section", {
    id: "try",
    className: "bg-bone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid items-stretch gap-12 lg:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Try a booking \xB7 live")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-7xl"
  }, "Book yourself", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "right now."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-md font-serif text-xl italic text-ink/65"
  }, "Pick a service. Pick a slot. That's it. Same flow as the app \u2014 no signup needed for the demo."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-3xl font-light tracking-tighter text-clay"
  }, "~12s"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-[10px] font-semibold uppercase tracking-wider text-taupe"
  }, "Avg booking time")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-3xl font-light tracking-tighter text-clay"
  }, "4.8\u2605"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-[10px] font-semibold uppercase tracking-wider text-taupe"
  }, "Avg pro rating")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-3xl font-light tracking-tighter text-clay"
  }, "2min"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-[10px] font-semibold uppercase tracking-wider text-taupe"
  }, "Avg nearest pro"))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex h-full min-h-[520px] flex-col overflow-hidden rounded-3xl bg-paper p-6 shadow-lift sm:p-8"
  }, !done ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: `h-1.5 w-6 rounded-full transition-all ${step >= 0 ? "bg-clay" : "bg-ink/10"}`
  }), /*#__PURE__*/React.createElement("span", {
    className: `h-1.5 w-6 rounded-full transition-all ${step >= 1 ? "bg-clay" : "bg-ink/10"}`
  }), /*#__PURE__*/React.createElement("span", {
    className: `h-1.5 w-6 rounded-full transition-all ${step >= 2 ? "bg-clay" : "bg-ink/10"}`
  })), /*#__PURE__*/React.createElement("button", {
    onClick: reset,
    className: "text-[10px] font-semibold uppercase tracking-wider text-taupe hover:text-ink"
  }, "Reset")), /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, step === 0 && /*#__PURE__*/React.createElement("div", {
    className: "ticker-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-wider text-taupe"
  }, "Step 1 \xB7 Pick a service"), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 grid grid-cols-2 gap-2"
  }, services.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => {
      setSvc(s);
      setStep(1);
    },
    className: `group rounded-xl border px-4 py-3 text-left text-sm transition-all ${svc === s ? "border-clay bg-clay/5 text-clay-deep" : "border-ink/10 hover:border-ink hover:bg-cream"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-medium"
  }, s), /*#__PURE__*/React.createElement("div", {
    className: "mt-0.5 text-[10px] text-taupe"
  }, "from \u20B9", s.includes("Beard") ? "199" : s.includes("Manicure") ? "699" : s.includes("Facial") ? "999" : "399"))))), step === 1 && /*#__PURE__*/React.createElement("div", {
    className: "ticker-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-wider text-taupe"
  }, "Step 2 \xB7 Pick a time"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 flex items-center gap-2 text-sm text-taupe"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rounded-full bg-cream px-3 py-1 text-[10px] font-semibold"
  }, svc), /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(0),
    className: "text-[10px] underline"
  }, "change")), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 grid grid-cols-2 gap-2"
  }, slots.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => {
      setSlot(s);
      setStep(2);
    },
    className: "rounded-xl border border-ink/10 px-4 py-3 text-left text-sm transition-all hover:border-clay hover:bg-cream"
  }, s)))), step === 2 && /*#__PURE__*/React.createElement("div", {
    className: "ticker-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-wider text-taupe"
  }, "Step 3 \xB7 Confirm"), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 rounded-2xl border border-ink/10 bg-cream p-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-taupe"
  }, "Service"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-semibold"
  }, svc)), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-taupe"
  }, "When"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-semibold"
  }, slot)), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-taupe"
  }, "Where"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-semibold"
  }, "The Hair Lab \xB7 Adyar")), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 border-t border-ink/10 pt-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDone(true),
    className: "w-full rounded-full bg-clay py-3 text-sm font-semibold text-cream transition-colors hover:bg-clay-deep"
  }, "Confirm booking")))))) : /*#__PURE__*/React.createElement("div", {
    className: "flex h-full flex-col items-center justify-center text-center ticker-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex h-20 w-20 items-center justify-center rounded-full bg-leaf/15"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    className: "h-10 w-10 text-leaf"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 font-serif text-4xl font-light tracking-tighter sm:text-5xl"
  }, "You're booked."), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 max-w-sm font-serif text-lg italic text-ink/65"
  }, "A confirmation has been sent to your phone. Reminders will follow 24h and 1h before."), /*#__PURE__*/React.createElement("button", {
    onClick: reset,
    className: "mt-8 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium transition-colors hover:border-ink hover:bg-ink hover:text-cream"
  }, "Book another")))))));
}
function SalonIndex() {
  return /*#__PURE__*/React.createElement("section", {
    id: "index",
    className: "bg-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-end justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "The Salon Index")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-7xl"
  }, "Chennai's finest,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "by the numbers.")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 220
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-serif text-lg italic text-ink/60"
  }, "Edition \u21161 \xB7 6 of 100+ salons"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 overflow-hidden rounded-2xl border border-ink/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden grid-cols-12 gap-4 border-b border-ink/10 bg-cream px-6 py-4 text-[10px] font-semibold uppercase tracking-wider text-taupe md:grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-span-4"
  }, "Salon"), /*#__PURE__*/React.createElement("div", {
    className: "col-span-2"
  }, "Area"), /*#__PURE__*/React.createElement("div", {
    className: "col-span-1 text-center"
  }, "Rating"), /*#__PURE__*/React.createElement("div", {
    className: "col-span-2"
  }, "From"), /*#__PURE__*/React.createElement("div", {
    className: "col-span-2"
  }, "Next available"), /*#__PURE__*/React.createElement("div", {
    className: "col-span-1 text-right"
  }, "\u2192")), SALONS.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.id,
    delay: i * 50
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/discover",
    className: "group grid grid-cols-12 gap-4 border-b border-ink/8 px-6 py-5 transition-colors last:border-b-0 hover:bg-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-span-12 flex items-center gap-3 md:col-span-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-xs text-taupe"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("img", {
    src: s.img,
    alt: "",
    className: "h-12 w-12 rounded-lg object-cover",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-lg font-medium transition-colors group-hover:text-clay"
  }, s.name), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-taupe md:hidden"
  }, s.loc, " \xB7 \u2605", s.rating))), /*#__PURE__*/React.createElement("div", {
    className: "col-span-6 self-center text-sm md:col-span-2"
  }, s.area), /*#__PURE__*/React.createElement("div", {
    className: "col-span-6 self-center text-center text-sm font-medium md:col-span-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-clay"
  }, "\u2605 ", s.rating)), /*#__PURE__*/React.createElement("div", {
    className: "col-span-6 self-center text-sm md:col-span-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-ink/60"
  }, "from "), "\u20B9", s.price), /*#__PURE__*/React.createElement("div", {
    className: "col-span-6 self-center text-sm md:col-span-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-ink/60"
  }, s.next.split(",")[0]), /*#__PURE__*/React.createElement("span", {
    className: "hidden md:inline"
  }, ", ", s.next.split(",")[1])), /*#__PURE__*/React.createElement("div", {
    className: "col-span-12 self-center text-right text-cla md:col-span-1 md:text-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block transition-transform duration-300 group-hover:translate-x-1"
  }, "\u2192"))))))));
}
function MapExplore() {
  const pins = [{
    x: 38,
    y: 64,
    label: "Adyar",
    count: 14
  }, {
    x: 48,
    y: 48,
    label: "Nungambakkam",
    count: 22
  }, {
    x: 22,
    y: 30,
    label: "Anna Nagar",
    count: 18
  }, {
    x: 70,
    y: 72,
    label: "Velachery",
    count: 11
  }, {
    x: 52,
    y: 62,
    label: "T. Nagar",
    count: 16
  }, {
    x: 60,
    y: 80,
    label: "Besant Nagar",
    count: 9
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "map",
    className: "bg-cream/40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid items-center gap-12 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Discover \xB7 In Chennai")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-7xl"
  }, "A city of salons,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "one quiet map."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-md font-serif text-lg italic text-ink/65"
  }, "From Adyar to Anna Nagar \u2014 every neighbourhood has its favourites. Bocxy's network covers 100+ verified salons across 14 areas.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement("ul", {
    className: "mt-8 space-y-2"
  }, pins.sort((a, b) => b.count - a.count).slice(0, 4).map(p => /*#__PURE__*/React.createElement("li", {
    key: p.label,
    className: "flex items-center justify-between border-b border-ink/10 py-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-serif text-base font-medium"
  }, p.label), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-taupe"
  }, p.count, " pros \xB7 \u2605 4.8 avg")))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[4/5] overflow-hidden rounded-3xl bg-bone shadow-soft sm:aspect-[5/4]"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 500 400",
    className: "h-full w-full"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "dots",
    x: "0",
    y: "0",
    width: "14",
    height: "14",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "0.8",
    fill: "#1A130C",
    opacity: "0.18"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "500",
    height: "400",
    fill: "url(#dots)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,260 Q120,300 220,280 T500,300 L500,400 L0,400 Z",
    fill: "#1A130C",
    opacity: "0.06"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,260 Q120,300 220,280 T500,300",
    fill: "none",
    stroke: "#1A130C",
    strokeOpacity: "0.25",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40,80 Q160,140 280,160 T460,220",
    fill: "none",
    stroke: "#1A130C",
    strokeOpacity: "0.18",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120,40 L380,360",
    fill: "none",
    stroke: "#1A130C",
    strokeOpacity: "0.15",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M60,200 L440,80",
    fill: "none",
    stroke: "#1A130C",
    strokeOpacity: "0.15",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M220,30 Q260,200 200,370",
    fill: "none",
    stroke: "#1A130C",
    strokeOpacity: "0.15",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: "60",
    y: "340",
    fontFamily: "Fraunces, serif",
    fontSize: "11",
    fontStyle: "italic",
    fill: "#1A130C",
    opacity: "0.4"
  }, "Bay of Bengal"), /*#__PURE__*/React.createElement("text", {
    x: "180",
    y: "50",
    fontFamily: "Fraunces, serif",
    fontSize: "10",
    fontStyle: "italic",
    fill: "#1A130C",
    opacity: "0.3"
  }, "CHENNAI")), pins.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.label,
    delay: 300 + i * 80,
    className: "absolute",
    as: "div"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pin group absolute -translate-x-1/2 -translate-y-1/2",
    style: {
      left: p.x + "%",
      top: p.y + "%"
    },
    "aria-label": `${p.label}, ${p.count} pros`
  }, /*#__PURE__*/React.createElement("span", {
    className: "relative flex h-4 w-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-clay opacity-40"
  }), /*#__PURE__*/React.createElement("span", {
    className: "relative inline-flex h-4 w-4 rounded-full bg-clay ring-4 ring-paper"
  })), /*#__PURE__*/React.createElement("span", {
    className: "absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold text-cream opacity-0 transition-opacity group-hover:opacity-100"
  }, p.label, " \xB7 ", p.count))))))))));
}
function FounderNote() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-12 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.face1,
    alt: "",
    className: "h-full w-full object-cover",
    loading: "lazy"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Founder's Note")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-4xl font-light leading-tight tracking-tighter sm:text-6xl"
  }, "\"My mother ran a salon from a paper diary.", /*#__PURE__*/React.createElement("br", null), "I built her a phone.\"")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-10 max-w-2xl space-y-5 font-serif text-lg leading-relaxed text-ink/75"
  }, /*#__PURE__*/React.createElement("p", null, "Bocxy started on a Tuesday, in a one-room salon in Mylapore. My mother had a paper diary, three phones on hold, and a customer trying to book a haircut for her sister's wedding."), /*#__PURE__*/React.createElement("p", null, "We thought: ", /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "this is absurd."), " The booking problem is solved. The trust problem is solved. The reminders problem is solved \u2014 by every other industry on earth. Beauty shouldn't be different."), /*#__PURE__*/React.createElement("p", null, "So we built Bocxy. For my mother. For every stylist who's ever missed a call because they had colour on their hands. For every customer who's ever been put on hold."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-2xl italic text-clay"
  }, "Aanya M."), /*#__PURE__*/React.createElement("div", {
    className: "text-xs uppercase tracking-[0.22em] text-taupe"
  }, "Founder & CEO")), /*#__PURE__*/React.createElement("span", {
    className: "font-serif text-3xl italic text-clay/50"
  }, "\u2014 A.M.")))))));
}
function AwardsStrip() {
  return /*#__PURE__*/React.createElement("section", {
    className: "border-y border-ink/10 bg-cream/40 py-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 md:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center gap-6 lg:flex-row lg:justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-taupe"
  }, "Recognition"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4 lg:gap-x-12"
  }, AWARDS.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.l,
    className: "text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-base italic text-ink/70"
  }, a.l), /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] text-taupe"
  }, a.y)))))));
}
function PaymentsStrip() {
  const methods = [{
    l: "UPI",
    sub: "GPay, PhonePe, Paytm"
  }, {
    l: "Cards",
    sub: "Visa, Mastercard, Rupay, Amex"
  }, {
    l: "Wallets",
    sub: "Amazon Pay, Mobikwik"
  }, {
    l: "Net Banking",
    sub: "All major banks"
  }, {
    l: "Pay at venue",
    sub: "Cash or card on arrival"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-paper py-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 md:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-taupe"
  }, "Pay your way"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 font-serif text-2xl font-light tracking-tighter sm:text-3xl"
  }, "Every Indian payment method, supported.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-x-8 gap-y-3"
  }, methods.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.l,
    className: "text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-lg font-medium"
  }, m.l), /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] text-taupe"
  }, m.sub)))))));
}
function Navbar({
  route,
  nav
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, {
      passive: true
    });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);
  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [route]);
  const links = [{
    label: "Products",
    to: "/products",
    hasMenu: true
  }, {
    label: "Discover",
    to: "/discover"
  }, {
    label: "For Business",
    to: "/business"
  }, {
    label: "Journal",
    to: "/journal"
  }, {
    label: "About",
    to: "/about"
  }];
  const onRoute = route === "/" || route === "";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || !onRoute ? "bg-paper/85 backdrop-blur-xl shadow-[0_1px_0_rgba(26,19,12,0.07)]" : "bg-transparent"}`
  }, /*#__PURE__*/React.createElement("nav", {
    className: "mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-6 md:px-12",
    "aria-label": "Main navigation"
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("div", {
    className: "hidden items-center gap-8 lg:flex"
  }, links.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.label,
    className: "relative",
    onMouseEnter: () => l.hasMenu && setProductsOpen(true),
    onMouseLeave: () => l.hasMenu && setProductsOpen(false)
  }, /*#__PURE__*/React.createElement("a", {
    href: `#${l.to}`,
    className: "navline text-sm text-ink/70 hover:text-ink transition-colors inline-flex items-center gap-1"
  }, l.label, l.hasMenu && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-3 w-3 opacity-60"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    strokeLinecap: "round"
  }))), l.hasMenu && productsOpen && /*#__PURE__*/React.createElement("div", {
    className: "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[640px] rounded-2xl border border-ink/10 bg-paper p-5 shadow-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.id,
    href: `#${p.to || "/products"}`,
    className: "group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-cream"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cream font-serif text-base"
  }, p.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold text-ink"
  }, p.name), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-taupe"
  }, p.desc)))), /*#__PURE__*/React.createElement("a", {
    href: "#/discover",
    className: "group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-ink hover:text-cream"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-clay font-serif text-base text-cream"
  }, "\u25C6"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-sm font-semibold"
  }, "Bocxy Marketplace ", /*#__PURE__*/React.createElement("span", {
    className: "rounded-full bg-clay px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-cream"
  }, "New")), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-taupe group-hover:text-cream/60"
  }, "Discover and book Chennai's best"))))))))), /*#__PURE__*/React.createElement("div", {
    className: "hidden items-center gap-3 lg:flex"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/business",
    className: "text-sm font-medium text-ink/70 hover:text-ink transition-colors"
  }, "For Business"), /*#__PURE__*/React.createElement("a", {
    href: "#/discover",
    className: "group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-all duration-300 hover:bg-charcoal hover:shadow-lift"
  }, "Book an Appointment", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    className: "rounded-full p-2.5 text-ink transition-colors hover:bg-ink/5 lg:hidden",
    "aria-label": open ? "Close menu" : "Open menu",
    "aria-expanded": open
  }, open ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-6 w-6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18",
    strokeLinecap: "round"
  })) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-6 w-6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16",
    strokeLinecap: "round"
  }))))), open && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 top-[76px] z-40 overflow-y-auto bg-paper px-6 pb-10 pt-6 lg:hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2"
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: `#${l.to}`,
    className: "border-b border-ink/10 py-5 font-serif text-3xl text-ink transition-colors hover:text-clay"
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 flex flex-col gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/discover",
    className: "inline-flex items-center justify-center gap-2 rounded-full bg-clay px-6 py-4 text-sm font-medium text-cream"
  }, "Book an Appointment"), /*#__PURE__*/React.createElement("a", {
    href: "#/business",
    className: "inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-6 py-4 text-sm font-medium text-ink"
  }, "For Business"))));
}
function Footer() {
  const cols = [{
    h: "Discover",
    links: ["Hair", "Skin", "Nails", "Bridal", "Spa", "Tattoo", "Wellness"]
  }, {
    h: "For Business",
    links: ["Bocxy Partner", "Pricing", "Case Studies", "Partner With Us"]
  }, {
    h: "Company",
    links: ["About", "Journal", "Careers", "Contact", "Press"]
  }, {
    h: "Ecosystem",
    links: ["Bocxy Academy", "Bocxy Tech", "Bocxy Glam"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "bg-ink text-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 pb-10 pt-20 md:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-14 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4"
  }, /*#__PURE__*/React.createElement(Logo, {
    light: true,
    size: "lg"
  }), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-xs font-serif text-lg italic text-cream/70 leading-relaxed"
  }, "A quiet revolution in beauty."), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 max-w-xs text-sm leading-relaxed text-cream/50"
  }, "Chennai's editorial marketplace for the people who make us feel like ourselves."), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 flex items-center gap-2 text-xs text-cream/60"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-4 w-4 text-clay"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7-5.1-7-11a7 7 0 1114 0c0 5.9-7 11-7 11z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.5"
  })), "Chennai \xB7 Bengaluru \xB7 Mumbai \xB7 Hyderabad"), /*#__PURE__*/React.createElement("form", {
    className: "mt-8 flex max-w-sm items-center gap-2 rounded-full border border-cream/15 p-1.5",
    onSubmit: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Your email",
    className: "flex-1 bg-transparent px-4 py-2 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
  }), /*#__PURE__*/React.createElement("button", {
    className: "rounded-full bg-clay px-5 py-2.5 text-xs font-semibold text-cream transition-colors hover:bg-clay-deep"
  }, "Subscribe"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8"
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/40"
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    className: "mt-5 space-y-3"
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/discover",
    className: "text-sm text-cream/70 transition-colors hover:text-cream"
  }, l)))))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-20 border-t border-cream/10 pt-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-[clamp(80px,18vw,220px)] font-medium leading-[0.85] tracking-tightest text-cream/[0.06] select-none"
  }, "bocxy"), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-cream/40"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Bocxy Beauty Pvt. Ltd. \xB7 Made in Chennai."), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-6"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/",
    className: "transition-colors hover:text-cream/70"
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#/",
    className: "transition-colors hover:text-cream/70"
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#/",
    className: "transition-colors hover:text-cream/70"
  }, "Cookies"))))));
}
function MobileCta() {
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/92 px-4 py-3 backdrop-blur-xl md:hidden"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/discover",
    className: "flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-sm font-semibold text-cream"
  }, "Book an Appointment"));
}

/* =========================================================
   HOME
   ========================================================= */
function Counter({
  to,
  suffix = ""
}) {
  const [ref, setRef] = useState(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    if (!ref) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVis(true);
        io.disconnect();
      }
    }, {
      threshold: 0.3
    });
    io.observe(ref);
    return () => io.disconnect();
  }, [ref]);
  const n = useCountUp(to, 1600, vis);
  return /*#__PURE__*/React.createElement("span", {
    ref: setRef,
    className: "num"
  }, n.toLocaleString(), suffix);
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "relative overflow-hidden pt-[76px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full bg-clay/10 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -left-32 top-1/2 h-[520px] w-[520px] rounded-full bg-blush/50 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto grid max-w-[1400px] items-end gap-12 px-6 pb-20 pt-12 md:px-12 md:pb-28 md:pt-16 lg:grid-cols-12 lg:gap-16 lg:pt-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "relative flex h-2 w-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-60"
  }), /*#__PURE__*/React.createElement("span", {
    className: "relative inline-flex h-2 w-2 rounded-full bg-leaf"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-taupe"
  }, "Edition \u21161 \xB7 Chennai"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    big: true
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-7 font-serif text-[58px] leading-[0.96] tracking-tightest sm:text-8xl lg:text-[112px]"
  }, "A quiet", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "font-light italic text-clay underline-mark"
  }, "revolution"), /*#__PURE__*/React.createElement("br", null), "in beauty.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 260
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-8 max-w-xl font-serif text-xl italic leading-relaxed text-ink/70"
  }, "Bocxy is the marketplace for the people who make you feel like yourself \u2014 salons, spas, bridal studios and independent professionals, all bookable in seconds.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 360
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex flex-wrap items-center gap-4"
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#/discover",
    variant: "clay"
  }, "Book an Appointment ", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-4 w-4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement(Btn, {
    href: "#download"
  }, "Download the App"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 460
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/business",
    className: "group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink/70 transition-colors hover:text-clay"
  }, /*#__PURE__*/React.createElement("span", {
    className: "border-b border-clay/40 pb-0.5 text-clay"
  }, "I run a salon"), /*#__PURE__*/React.createElement("span", {
    className: "text-ink/40"
  }, "\u2014 Grow with Bocxy Partner"), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "relative lg:col-span-5"
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative h-[560px] overflow-hidden rounded-t-[280px] rounded-b-2xl shadow-lift sm:h-[620px]"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.hero1,
    alt: "Bocxy editorial portrait",
    className: "h-full w-full object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"
  })), /*#__PURE__*/React.createElement("div", {
    className: "animate-floaty2 absolute -left-6 top-12 hidden items-center gap-2.5 rounded-full bg-cream/95 px-5 py-3 shadow-soft backdrop-blur sm:flex"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1.5 w-1.5 rounded-full bg-leaf animate-pulse-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-medium"
  }, "3,200 booked this week")), /*#__PURE__*/React.createElement("div", {
    className: "animate-floaty absolute -right-4 bottom-32 hidden rounded-2xl bg-paper p-4 shadow-lift sm:block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.face1,
    alt: "",
    className: "h-10 w-10 rounded-full object-cover",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-sm font-medium"
  }, "Priya R."), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-taupe"
  }, "Alwarpet \xB7 just booked")))), /*#__PURE__*/React.createElement("div", {
    className: "animate-floaty absolute -bottom-6 -left-2 hidden rounded-2xl bg-paper p-5 shadow-lift sm:block",
    style: {
      animationDelay: "1.2s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-taupe"
  }, "Confirmed \xB7 Today"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 font-serif text-lg font-medium"
  }, "12:30 PM"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-taupe"
  }, "Haircut & Styling \xB7 The Hair Lab")))))), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 md:px-12"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border border-ink/10 bg-paper p-3 shadow-soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2 sm:grid-cols-4"
  }, [{
    l: "Service",
    v: "Anything you need",
    icon: "✦"
  }, {
    l: "Where",
    v: "Chennai · 2km",
    icon: "◆"
  }, {
    l: "When",
    v: "Today, evening",
    icon: "◇"
  }, {
    l: "Who",
    v: "Anyone available",
    icon: "○"
  }].map((f, i) => /*#__PURE__*/React.createElement("a", {
    key: f.l,
    href: "#/discover",
    className: "group flex items-center justify-between rounded-2xl bg-cream/60 px-5 py-4 transition-colors hover:bg-cream"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, f.l), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 font-serif text-sm font-medium text-ink"
  }, f.v)), /*#__PURE__*/React.createElement("span", {
    className: "text-clay transition-transform duration-300 group-hover:scale-110"
  }, f.icon)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 flex items-center justify-between gap-3 px-2 pb-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 overflow-hidden text-[11px] text-taupe"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold uppercase tracking-wider"
  }, "Trending:"), ["Bridal trial", "Keratin", "Couples massage", "Beard trim", "Gel nails"].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#/discover",
    className: "rounded-full bg-cream/60 px-3 py-1 transition-colors hover:bg-clay hover:text-cream"
  }, t))), /*#__PURE__*/React.createElement("a", {
    href: "#/discover",
    className: "inline-flex items-center gap-2 rounded-full bg-clay px-5 py-2.5 text-xs font-semibold text-cream transition-colors hover:bg-clay-deep"
  }, "Search \u2192"))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-24 border-y border-ink/10 bg-cream/50 py-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 md:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-taupe"
  }, "As featured in"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-center gap-x-10 gap-y-3 sm:gap-x-14"
  }, PRESS.map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    className: "font-serif text-base italic text-ink/55"
  }, p)))))));
}
function DualAudience() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-6 lg:grid-cols-2"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("a", {
    href: "#/discover",
    className: "group relative block overflow-hidden rounded-3xl bg-cream p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-14"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "For you"), /*#__PURE__*/React.createElement("h3", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-6xl"
  }, "Find your next", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "ritual.")), /*#__PURE__*/React.createElement("p", {
    className: "mt-5 max-w-sm text-sm leading-relaxed text-ink/65"
  }, "Browse 100+ verified salons and 500+ independent professionals. Book a haircut at 6:30 PM tonight, in 30 seconds."), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex items-center gap-3 text-sm font-medium"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 transition-colors group-hover:bg-clay group-hover:text-cream"
  }, "Explore the marketplace", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-4 w-4 transition-transform group-hover:translate-x-0.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/React.createElement("img", {
    src: IMG.hero2,
    alt: "",
    className: "absolute -right-12 -bottom-12 h-72 w-72 rounded-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-110 sm:h-96 sm:w-96",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute right-6 top-6 font-serif text-xs italic text-taupe"
  }, "01 / 02"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/business",
    className: "group relative block overflow-hidden rounded-3xl bg-ink p-10 text-cream transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-14"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    light: true
  }, "For your business"), /*#__PURE__*/React.createElement("h3", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-6xl"
  }, "Run your salon,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay underline-mark"
  }, "uninterrupted.")), /*#__PURE__*/React.createElement("p", {
    className: "mt-5 max-w-sm text-sm leading-relaxed text-cream/65"
  }, "Bocxy Partner is the calm operating system for beauty businesses \u2014 appointments, staff, customers and revenue, in one place."), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex items-center gap-3 text-sm font-medium"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 text-ink transition-colors group-hover:bg-clay group-hover:text-cream"
  }, "Become a Partner", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-4 w-4 transition-transform group-hover:translate-x-0.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/React.createElement("img", {
    src: IMG.partnerHero,
    alt: "",
    className: "absolute -right-12 -bottom-12 h-72 w-72 rounded-full object-cover opacity-25 transition-transform duration-700 group-hover:scale-110 sm:h-96 sm:w-96",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute right-6 top-6 font-serif text-xs italic text-cream/50"
  }, "02 / 02"))))));
}
function TrustStrip() {
  const stats = [{
    v: "100",
    suf: "+",
    l: "Partner Salons"
  }, {
    v: "10,000",
    suf: "+",
    l: "Appointments Booked"
  }, {
    v: "500",
    suf: "+",
    l: "Beauty Professionals"
  }, {
    v: "4.8",
    suf: "★",
    l: "Average Rating"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "border-y border-ink/10 bg-cream/40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-24"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    className: "text-center font-serif text-xl italic text-ink/70"
  }, "Trusted by beauty professionals and customers across Chennai.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 grid grid-cols-2 gap-y-10 md:grid-cols-4"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.l,
    delay: i * 100
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-5xl font-light tracking-tight sm:text-6xl text-ink"
  }, /*#__PURE__*/React.createElement(Counter, {
    to: parseInt(s.v.toString().replace(/,/g, ""))
  }), s.suf), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, s.l))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-12 text-center text-[11px] text-taupe/70"
  }, "* Figures are illustrative placeholders for this design concept."))));
}
function Categories() {
  return /*#__PURE__*/React.createElement("section", {
    id: "explore",
    className: "bg-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-end justify-between gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "The Categories")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-7xl"
  }, "Whatever your", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "kind of self-care.")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 220
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/discover",
    className: "group inline-flex items-center gap-2 text-sm font-medium text-ink/70 transition-colors hover:text-clay"
  }, "Browse all services", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-4 w-4 transition-transform group-hover:translate-x-1"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
  }, CATEGORIES.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.name,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/discover",
    className: "group relative block aspect-[4/5] overflow-hidden rounded-2xl"
  }, /*#__PURE__*/React.createElement("img", {
    src: c.img,
    alt: c.name,
    className: "h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream/90 text-ink opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:rotate-[-45deg]"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-4 w-4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-0 right-0 p-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/60"
  }, c.count), /*#__PURE__*/React.createElement("h3", {
    className: "mt-1 font-serif text-3xl font-medium text-cream"
  }, c.name), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-xs text-cream/75"
  }, c.desc))))))));
}
function FeaturedSalons() {
  const [sel, setSel] = useState(SALONS[0]);
  return /*#__PURE__*/React.createElement("section", {
    id: "salons",
    className: "bg-bone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-end justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Featured \xB7 This week")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-7xl"
  }, "The neighbourhood", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "favourites.")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/discover",
    className: "group inline-flex items-center gap-2 text-sm font-medium text-ink/70 transition-colors hover:text-clay"
  }, "See all 100+ in Chennai", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-4 w-4 transition-transform group-hover:translate-x-1"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
  }, SALONS.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.id,
    delay: i * 70
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setSel(s),
    className: "group block h-full w-full text-left"
  }, /*#__PURE__*/React.createElement("article", {
    className: `flex h-full flex-col overflow-hidden rounded-2xl border bg-paper transition-all duration-500 hover:-translate-y-1 hover:shadow-lift ${sel.id === s.id ? "border-ink shadow-lift" : "border-ink/8"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative h-56 overflow-hidden"
  }, /*#__PURE__*/React.createElement("img", {
    src: s.img,
    alt: s.name,
    className: "h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-ink backdrop-blur"
  }, s.tags[0]), /*#__PURE__*/React.createElement("span", {
    className: "absolute right-4 top-4 flex items-center gap-1 rounded-full bg-ink/85 px-3 py-1.5 text-[11px] font-semibold text-cream backdrop-blur"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 20 20",
    fill: "currentColor",
    className: "h-3 w-3 text-clay"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9z"
  })), s.rating)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-1 flex-col p-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between gap-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl font-medium"
  }, s.name), /*#__PURE__*/React.createElement("p", {
    className: "mt-0.5 text-xs text-taupe"
  }, s.area, " \xB7 ", s.loc)), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-taupe"
  }, s.reviews, " reviews")), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex flex-wrap gap-1.5"
  }, s.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "rounded-full bg-cream px-2.5 py-1 text-[10px] font-medium text-cocoa"
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 border-t border-ink/8 pt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-medium"
  }, s.from, " from ", /*#__PURE__*/React.createElement("span", {
    className: "text-ink/60"
  }, "\u20B9", s.price)), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 flex items-center gap-1.5 text-xs font-semibold text-leaf"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1.5 w-1.5 rounded-full bg-leaf animate-pulse-dot"
  }), s.next))))))))));
}
function FeatureSpotlight() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-16 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:sticky lg:top-28"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Why Bocxy")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-6xl"
  }, "Your beauty routine,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "without the back-and-forth."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-sm font-serif text-lg italic leading-relaxed text-ink/65"
  }, "\"I just want a haircut tonight.\" That's it. That's the whole brief. We built Bocxy for that moment.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#/discover",
    variant: "dark",
    className: "mt-10"
  }, "Open the marketplace \u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10"
  }, [{
    n: "01",
    t: "Real-time availability",
    d: "See actual appointment slots, not 'call us to find out'.",
    icon: "◐"
  }, {
    n: "02",
    t: "Verified professionals",
    d: "Every salon and artist is reviewed for ID, training and craft.",
    icon: "◑"
  }, {
    n: "03",
    t: "Book in 30 seconds",
    d: "Service, professional, slot, confirm. No phone tag.",
    icon: "◒"
  }, {
    n: "04",
    t: "Everything in one place",
    d: "Hair, skin, nails, bridal, spa, tattoo and more.",
    icon: "◓"
  }].map((it, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: it.n,
    delay: i * 100
  }, /*#__PURE__*/React.createElement("div", {
    className: "group flex items-start gap-6 bg-paper p-8 transition-colors duration-300 hover:bg-cream"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-serif text-3xl text-clay shrink-0 w-12"
  }, it.n), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl font-medium"
  }, it.t), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 max-w-md text-sm leading-relaxed text-ink/65"
  }, it.d)), /*#__PURE__*/React.createElement("span", {
    className: "text-3xl text-clay/50 transition-transform duration-500 group-hover:scale-125 group-hover:text-clay"
  }, it.icon)))))))));
}
function FieldNotes() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-ink text-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-12 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    light: true
  }, "Field Notes \xB7 2026")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-6xl"
  }, "A new rhythm", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay underline-mark"
  }, "for beauty."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-md font-serif text-lg italic leading-relaxed text-cream/75"
  }, "Beauty is a thousand small appointments. We believe each one deserves to be a calm, considered moment \u2014 not a phone call, a hold-music loop, and a vague promise.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/journal",
    className: "group mt-10 inline-flex items-center gap-2 text-sm font-medium text-cream/70 transition-colors hover:text-clay"
  }, "Read the Journal", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-4 w-4 transition-transform group-hover:translate-x-1"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-6 sm:grid-cols-2 lg:col-span-7"
  }, JOURNAL.map((j, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: j.title,
    delay: i * 100,
    className: i === 2 ? "sm:col-span-2" : ""
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/journal",
    className: "group block"
  }, /*#__PURE__*/React.createElement("article", {
    className: "overflow-hidden rounded-2xl border border-cream/10 transition-all duration-500 hover:-translate-y-1 hover:border-cream/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: `relative overflow-hidden ${i === 2 ? "aspect-[16/7]" : "aspect-[4/3]"}`
  }, /*#__PURE__*/React.createElement("img", {
    src: j.img,
    alt: "",
    className: "h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-ink p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"
  }, j.kicker), /*#__PURE__*/React.createElement("h3", {
    className: "mt-3 font-serif text-2xl font-medium leading-snug transition-colors group-hover:text-clay"
  }, j.title), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex items-center gap-2 text-[11px] text-cream/40"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-px w-6 bg-cream/30"
  }), /*#__PURE__*/React.createElement("span", null, j.read, " read")))))))))));
}
function Testimonials() {
  const quotes = [{
    q: "I used to spend hours calling salons to find a slot. Bocxy makes it effortless — and the reminders mean I actually show up.",
    n: "Priya Ramesh",
    r: "Customer · Alwarpet",
    img: IMG.face1
  }, {
    q: "We replaced three tools with Bocxy Partner. Staff calendars, payments and reminders — finally one system.",
    n: "Karthik Selvaraj",
    r: "Owner, Mane Story · Anna Nagar",
    img: IMG.face2
  }, {
    q: "Booked my bridal trial in under a minute. The team followed up like a concierge. Worth every rupee.",
    n: "Divya K.",
    r: "Bride-to-be · Mylapore",
    img: IMG.face4
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-cream/50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Loved in Chennai")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 max-w-3xl font-serif text-5xl font-light leading-tight tracking-tighter sm:text-7xl"
  }, "Quietly, our customers", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "say it best."))), /*#__PURE__*/React.createElement("div", {
    className: "mt-16 grid gap-6 md:grid-cols-3"
  }, quotes.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t.n,
    delay: i * 120
  }, /*#__PURE__*/React.createElement("figure", {
    className: "flex h-full flex-col rounded-3xl border border-ink/10 bg-paper p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-6xl leading-none text-clay"
  }, "\""), /*#__PURE__*/React.createElement("blockquote", {
    className: "mt-3 flex-1 font-serif text-xl font-light leading-snug tracking-tight"
  }, t.q), /*#__PURE__*/React.createElement("figcaption", {
    className: "mt-7 flex items-center gap-3 border-t border-ink/10 pt-5"
  }, /*#__PURE__*/React.createElement("img", {
    src: t.img,
    alt: t.n,
    className: "h-11 w-11 rounded-full object-cover",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold"
  }, t.n), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-taupe"
  }, t.r)), /*#__PURE__*/React.createElement("div", {
    className: "ml-auto flex gap-0.5 text-clay"
  }, [0, 1, 2, 3, 4].map(s => /*#__PURE__*/React.createElement("svg", {
    key: s,
    viewBox: "0 0 20 20",
    fill: "currentColor",
    className: "h-3.5 w-3.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9z"
  })))))))))));
}
function AppBanner() {
  return /*#__PURE__*/React.createElement("section", {
    id: "download",
    className: "bg-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid items-center gap-12 lg:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "The Bocxy App")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-7xl"
  }, "A salon in", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "your pocket."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 font-serif text-xl italic text-ink/65"
  }, "Discover. Book. Relax. Repeat.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/",
    className: "group flex items-center gap-3 rounded-2xl bg-ink px-5 py-3.5 text-cream transition-all duration-300 hover:bg-charcoal"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 384 512",
    fill: "currentColor",
    className: "h-6 w-6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-left leading-tight"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block text-[10px] uppercase tracking-wider text-cream/60"
  }, "Download on the"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-semibold"
  }, "App Store"))), /*#__PURE__*/React.createElement("a", {
    href: "#/",
    className: "group flex items-center gap-3 rounded-2xl bg-ink px-5 py-3.5 text-cream transition-all duration-300 hover:bg-charcoal"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 512 512",
    fill: "currentColor",
    className: "h-5 w-5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-left leading-tight"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block text-[10px] uppercase tracking-wider text-cream/60"
  }, "Get it on"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-semibold"
  }, "Google Play"))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 440
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-8 inline-flex items-center gap-4 rounded-2xl border border-ink/10 bg-cream px-4 py-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://api.qrserver.com/v1/create-qr-code/?size=96x96&data=https://www.bocxy.com",
    alt: "QR code to download the Bocxy app",
    className: "h-20 w-20",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-[180px] text-xs leading-relaxed text-ink/55"
  }, "Point your camera at the code to download the app instantly.")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto h-[560px] w-full max-w-[420px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute left-0 top-6 w-[230px] rotate-[-7deg] sm:w-[260px]"
  }, /*#__PURE__*/React.createElement(PhoneMockup, null, /*#__PURE__*/React.createElement(AppHomeScreen, null))), /*#__PURE__*/React.createElement("div", {
    className: "absolute right-0 top-32 w-[230px] rotate-[7deg] sm:w-[260px]"
  }, /*#__PURE__*/React.createElement(PhoneMockup, null, /*#__PURE__*/React.createElement(AppConfirmScreen, null))))))));
}
function FinalCta() {
  return /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-ink text-cream"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.finalCta,
    alt: "",
    className: "absolute inset-0 h-full w-full object-cover opacity-30",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center md:py-44"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    light: true
  }, "The invitation")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-6xl font-light leading-[1.02] tracking-tighter text-cream sm:text-8xl"
  }, "Make time", /*#__PURE__*/React.createElement("br", null), "for ", /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "yourself."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-md font-serif text-xl italic leading-relaxed text-cream/75"
  }, "Find your next beauty experience with Bocxy \u2014 and leave the back-and-forth behind.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex flex-wrap justify-center gap-4"
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#/discover",
    variant: "clay"
  }, "Book an Appointment \u2192"), /*#__PURE__*/React.createElement(Btn, {
    href: "#/business",
    variant: "ghostlight"
  }, "I run a salon")))));
}
function HomePage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(LiveTicker, null), /*#__PURE__*/React.createElement(WordmarkMarquee, null), /*#__PURE__*/React.createElement(DualAudience, null), /*#__PURE__*/React.createElement(Manifesto, null), /*#__PURE__*/React.createElement(TrustStrip, null), /*#__PURE__*/React.createElement(AwardsStrip, null), /*#__PURE__*/React.createElement(ProductGrid, null), /*#__PURE__*/React.createElement(IntegrationsRow, null), /*#__PURE__*/React.createElement(TryBooking, null), /*#__PURE__*/React.createElement(MapExplore, null), /*#__PURE__*/React.createElement(Categories, null), /*#__PURE__*/React.createElement(FeaturedSalons, null), /*#__PURE__*/React.createElement(SalonIndex, null), /*#__PURE__*/React.createElement(FeatureSpotlight, null), /*#__PURE__*/React.createElement(FounderNote, null), /*#__PURE__*/React.createElement(FieldNotes, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(PaymentsStrip, null), /*#__PURE__*/React.createElement(AppBanner, null), /*#__PURE__*/React.createElement(FinalCta, null));
}

/* =========================================================
   PHONE MOCKUPS (shared)
   ========================================================= */
function PhoneMockup({
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `relative rounded-[3rem] bg-ink p-[10px] shadow-lift ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden rounded-[2.4rem] bg-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute left-1/2 top-2.5 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-ink"
  }), children));
}
function AppHomeScreen() {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-[520px] flex-col text-ink"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-6 pb-2 pt-12 text-[10px] font-semibold"
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block h-2 w-3 rounded-[2px] bg-ink/70"
  }), /*#__PURE__*/React.createElement("span", {
    className: "inline-block h-2 w-3 rounded-[2px] bg-ink/40"
  }), /*#__PURE__*/React.createElement("span", {
    className: "inline-block h-2 w-3 rounded-[2px] bg-ink/20"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "px-5 pt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-taupe"
  }, "Good evening,"), /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-lg font-medium"
  }, "Priya"), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex items-center gap-2 rounded-xl border border-ink/10 bg-paper px-3 py-2.5 text-[11px] text-taupe"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-3.5 w-3.5 text-clay"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7-5.1-7-11a7 7 0 1114 0c0 5.9-7 11-7 11z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.5"
  })), "Search salons, services\u2026"), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex gap-1.5"
  }, ["Hair", "Skin", "Nails", "Spa"].map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: c,
    className: `rounded-full px-3 py-1.5 text-[10px] font-medium ${i === 0 ? "bg-ink text-cream" : "bg-cream border border-ink/10"}`
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex-1 space-y-2.5 overflow-hidden px-5"
  }, SALONS.slice(0, 3).map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    className: "flex items-center gap-3 rounded-2xl border border-ink/10 bg-paper p-2.5"
  }, /*#__PURE__*/React.createElement("img", {
    src: s.img,
    alt: "",
    className: "h-12 w-12 rounded-xl object-cover",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] font-semibold"
  }, s.name), /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] text-taupe"
  }, s.loc, " \xB7 ", s.from), /*#__PURE__*/React.createElement("div", {
    className: "mt-0.5 flex items-center gap-1 text-[9px] font-semibold text-leaf"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1 w-1 rounded-full bg-leaf"
  }), s.next)), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-0.5 text-[10px] font-semibold"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 20 20",
    fill: "currentColor",
    className: "h-3 w-3 text-clay"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9z"
  })), s.rating)))), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-ink/10 bg-paper px-5 py-3.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-around text-[10px] text-taupe"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-clay font-semibold"
  }, "\u2302 Home"), /*#__PURE__*/React.createElement("span", null, "\u2661 Saved"), /*#__PURE__*/React.createElement("span", null, "\u25F7 Bookings"), /*#__PURE__*/React.createElement("span", null, "\u25D0 Me"))));
}
function AppConfirmScreen() {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-[520px] flex-col items-center justify-center px-6 text-ink"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex h-16 w-16 items-center justify-center rounded-full bg-leaf/15"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    className: "h-8 w-8 text-leaf"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 font-serif text-2xl font-medium"
  }, "You're booked."), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-xs text-taupe"
  }, "See you soon \u2728"), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 w-full rounded-2xl border border-ink/10 bg-paper p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.salon1,
    alt: "",
    className: "h-10 w-10 rounded-xl object-cover",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-semibold"
  }, "The Hair Lab"), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-taupe"
  }, "Adyar \xB7 2 min away"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 space-y-1.5 border-t border-ink/10 pt-3 text-[11px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-taupe"
  }, "Service"), /*#__PURE__*/React.createElement("span", {
    className: "font-medium"
  }, "Haircut & Styling")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-taupe"
  }, "When"), /*#__PURE__*/React.createElement("span", {
    className: "font-medium"
  }, "Today \xB7 12:30 PM")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-taupe"
  }, "With"), /*#__PURE__*/React.createElement("span", {
    className: "font-medium"
  }, "Anita")))), /*#__PURE__*/React.createElement("button", {
    className: "mt-5 w-full rounded-full bg-ink py-3 text-xs font-semibold text-cream"
  }, "Add to calendar"), /*#__PURE__*/React.createElement("button", {
    className: "mt-2 w-full rounded-full border border-ink/15 py-3 text-xs font-medium"
  }, "View booking"));
}
function BookingSlotScreen() {
  const slots = ["10:00", "11:30", "12:30", "2:00", "4:15", "6:30"];
  const [sel, setSel] = useState(2);
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-[520px] flex-col text-ink"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-6 pb-2 pt-12 text-[10px] font-semibold"
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block h-2 w-3 rounded-[2px] bg-ink/70"
  }), /*#__PURE__*/React.createElement("span", {
    className: "inline-block h-2 w-3 rounded-[2px] bg-ink/40"
  }), /*#__PURE__*/React.createElement("span", {
    className: "inline-block h-2 w-3 rounded-[2px] bg-ink/20"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-5 py-3"
  }, /*#__PURE__*/React.createElement("button", {
    className: "rounded-full p-1.5 hover:bg-ink/5",
    "aria-label": "Back"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-4 w-4 -scale-x-100"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "text-[13px] font-semibold"
  }, "Book appointment"), /*#__PURE__*/React.createElement("span", {
    className: "text-[13px]"
  }, "\u2661")), /*#__PURE__*/React.createElement("div", {
    className: "mx-5 flex items-center gap-3 rounded-2xl border border-ink/10 bg-paper p-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.salon1,
    alt: "",
    className: "h-11 w-11 rounded-xl object-cover",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 text-[12px] font-semibold"
  }, "The Hair Lab ", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 20 20",
    fill: "currentColor",
    className: "h-3 w-3 text-clay"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9z"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-medium text-taupe"
  }, "4.9")), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-taupe"
  }, "Adyar \xB7 2 min away")), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1 text-[10px] font-semibold text-leaf"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1.5 w-1.5 rounded-full bg-leaf"
  }), "Open")), /*#__PURE__*/React.createElement("div", {
    className: "px-5 pt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-wider text-taupe"
  }, "Select service"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between rounded-xl border border-clay/40 bg-clay/5 p-2.5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] font-semibold"
  }, "Haircut & Styling"), /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] text-taupe"
  }, "45 min \xB7 \u20B9499")), /*#__PURE__*/React.createElement("span", {
    className: "flex h-4 w-4 items-center justify-center rounded-full bg-clay"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1.5 w-1.5 rounded-full bg-cream"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between rounded-xl border border-ink/10 p-2.5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] font-semibold"
  }, "Hair Spa & Massage"), /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] text-taupe"
  }, "60 min \xB7 \u20B9899")), /*#__PURE__*/React.createElement("span", {
    className: "h-4 w-4 rounded-full border border-ink/25"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "px-5 pt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-wider text-taupe"
  }, "Today \xB7 Thu 11"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 grid grid-cols-3 gap-1.5"
  }, slots.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSel(i),
    className: `rounded-lg py-2 text-[10px] font-medium transition-colors ${i === 1 ? "text-ink/30 line-through" : sel === i ? "bg-clay text-cream" : "border border-ink/15 hover:border-clay"}`
  }, s)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-auto flex items-center justify-between border-t border-ink/10 bg-paper px-5 py-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-taupe"
  }, "Total"), /*#__PURE__*/React.createElement("div", {
    className: "text-[13px] font-bold"
  }, "\u20B9499 ", /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] font-medium text-taupe"
  }, "\xB7 12:30 PM"))), /*#__PURE__*/React.createElement("button", {
    className: "rounded-full bg-clay px-5 py-2.5 text-[11px] font-semibold text-cream"
  }, "Confirm booking")));
}

/* =========================================================
   DISCOVER PAGE
   ========================================================= */
function SalonDetail({
  salon,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-[60] flex items-end sm:items-center sm:justify-center bg-ink/70 backdrop-blur-md",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full max-w-4xl overflow-hidden rounded-t-3xl bg-paper sm:rounded-3xl",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    className: "absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink shadow-soft transition-colors hover:bg-ink hover:text-cream"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-4 w-4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-0 md:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative h-72 overflow-hidden md:h-auto"
  }, /*#__PURE__*/React.createElement("img", {
    src: salon.img,
    alt: salon.name,
    className: "h-full w-full object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-5 left-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/70"
  }, salon.area), /*#__PURE__*/React.createElement("h3", {
    className: "mt-1 font-serif text-4xl font-medium text-cream"
  }, salon.name)), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-5 top-5 flex gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rounded-full bg-paper/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink backdrop-blur"
  }, salon.tags[0]), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1 rounded-full bg-ink/85 px-3 py-1 text-[11px] font-semibold text-cream backdrop-blur"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 20 20",
    fill: "currentColor",
    className: "h-3 w-3 text-clay"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9z"
  })), salon.rating))), /*#__PURE__*/React.createElement("div", {
    className: "max-h-[80vh] overflow-y-auto p-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-taupe"
  }, salon.reviews, " verified reviews")), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-sm text-ink/65"
  }, salon.area, " \xB7 ", salon.loc, " \xB7 Open until 9 PM today"), /*#__PURE__*/React.createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, "Services menu"), /*#__PURE__*/React.createElement("ul", {
    className: "mt-3 divide-y divide-ink/8"
  }, salon.services.map(s => /*#__PURE__*/React.createElement("li", {
    key: s,
    className: "flex items-center justify-between py-3 text-sm"
  }, /*#__PURE__*/React.createElement("span", null, s.split(" · ").slice(0, 1).join()), /*#__PURE__*/React.createElement("span", {
    className: "text-ink/60"
  }, s.split(" · ").slice(1).join(" · ")))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, "The team"), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 grid grid-cols-3 gap-3"
  }, STAFF.map(st => /*#__PURE__*/React.createElement("div", {
    key: st.name,
    className: "rounded-2xl border border-ink/10 bg-cream p-3 text-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: st.img,
    alt: "",
    className: "mx-auto h-12 w-12 rounded-full object-cover",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-xs font-semibold"
  }, st.name), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-taupe"
  }, st.role), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-[10px] text-clay"
  }, "\u2605 ", st.rating, " \xB7 ", st.jobs))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, "Inside the studio"), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 grid grid-cols-3 gap-2"
  }, [salon.img, IMG.salon3, IMG.salon5].map((src, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: src,
    alt: "",
    className: "aspect-square w-full rounded-lg object-cover",
    loading: "lazy"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 flex flex-wrap items-center gap-3"
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#/discover",
    variant: "clay"
  }, "Book at ", salon.next.split(",")[0]), /*#__PURE__*/React.createElement(Btn, {
    href: "#/discover",
    variant: "outline"
  }, "Message salon")), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 text-[11px] text-taupe"
  }, "Free cancellation up to 4 hours before. Reminders sent automatically.")))));
}
function DiscoverPage() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All");
  const areas = ["All", "South Chennai", "Central Chennai", "West Chennai"];
  const filtered = useMemo(() => filter === "All" ? SALONS : SALONS.filter(s => s.area === filter), [filter]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-paper pt-[120px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-clay/8 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 md:px-12"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Discover \xB7 Chennai")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-6 max-w-3xl font-serif text-6xl font-light leading-[0.96] tracking-tighter sm:text-8xl"
  }, "A quiet, considered", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "marketplace."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-8 max-w-xl font-serif text-xl italic leading-relaxed text-ink/65"
  }, "100+ verified salons. 500+ independent professionals. Filter by service, neighbourhood or tonight's last-minute slots.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex flex-wrap gap-2"
  }, areas.map(a => /*#__PURE__*/React.createElement("button", {
    key: a,
    onClick: () => setFilter(a),
    className: `rounded-full border px-5 py-2.5 text-xs font-medium transition-all ${filter === a ? "border-ink bg-ink text-cream" : "border-ink/15 text-ink/70 hover:border-ink/40 hover:bg-cream"}`
  }, a)), /*#__PURE__*/React.createElement("button", {
    className: "rounded-full border border-ink/15 px-5 py-2.5 text-xs font-medium text-ink/70 hover:border-ink/40 hover:bg-cream"
  }, "Today"), /*#__PURE__*/React.createElement("button", {
    className: "rounded-full border border-ink/15 px-5 py-2.5 text-xs font-medium text-ink/70 hover:border-ink/40 hover:bg-cream"
  }, "Before 8 PM"), /*#__PURE__*/React.createElement("button", {
    className: "rounded-full border border-ink/15 px-5 py-2.5 text-xs font-medium text-ink/70 hover:border-ink/40 hover:bg-cream"
  }, "\u20B9 Under 1,000"))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-paper pb-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 md:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex items-end justify-between border-b border-ink/10 pb-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-serif text-sm italic text-ink/65"
  }, "Showing ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold not-italic text-ink"
  }, filtered.length), " of 100+ salons"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-taupe"
  }, "Sorted by \xB7 nearest first")), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
  }, filtered.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.id,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setActive(s),
    className: "group block h-full w-full text-left"
  }, /*#__PURE__*/React.createElement("article", {
    className: "flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative h-56 overflow-hidden"
  }, /*#__PURE__*/React.createElement("img", {
    src: s.img,
    alt: s.name,
    className: "h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-ink backdrop-blur"
  }, s.tags[0]), /*#__PURE__*/React.createElement("span", {
    className: "absolute right-4 top-4 flex items-center gap-1 rounded-full bg-ink/85 px-3 py-1.5 text-[11px] font-semibold text-cream backdrop-blur"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 20 20",
    fill: "currentColor",
    className: "h-3 w-3 text-clay"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9z"
  })), s.rating)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-1 flex-col p-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between gap-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl font-medium"
  }, s.name), /*#__PURE__*/React.createElement("p", {
    className: "mt-0.5 text-xs text-taupe"
  }, s.area, " \xB7 ", s.loc)), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-taupe"
  }, s.reviews, " reviews")), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex flex-wrap gap-1.5"
  }, s.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "rounded-full bg-cream px-2.5 py-1 text-[10px] font-medium text-cocoa"
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 border-t border-ink/8 pt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-medium"
  }, s.from, " from ", /*#__PURE__*/React.createElement("span", {
    className: "text-ink/60"
  }, "\u20B9", s.price)), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 flex items-center gap-1.5 text-xs font-semibold text-leaf"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1.5 w-1.5 rounded-full bg-leaf animate-pulse-dot"
  }), s.next)), /*#__PURE__*/React.createElement("span", {
    className: "mt-5 w-full rounded-full border border-ink/15 py-3 text-center text-sm font-medium transition-all duration-300 group-hover:border-clay group-hover:bg-clay group-hover:text-cream"
  }, "Quick Book"))))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-16 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#/discover",
    variant: "outline"
  }, "Load more salons \u2192")))), /*#__PURE__*/React.createElement("section", {
    className: "bg-cream/40 py-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 md:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid items-center gap-12 lg:grid-cols-2"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "The booking experience"), /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-6xl"
  }, "Service. Pro. Time.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "Done.")), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-md font-serif text-lg italic text-ink/65"
  }, "A booking takes 30 seconds. No phone calls, no waiting on hold, no surprises.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150
  }, /*#__PURE__*/React.createElement(PhoneMockup, null, /*#__PURE__*/React.createElement(BookingSlotScreen, null)))))), active && /*#__PURE__*/React.createElement(SalonDetail, {
    salon: active,
    onClose: () => setActive(null)
  }));
}

/* =========================================================
   BUSINESS (BOCCXY PARTNER) PAGE
   ========================================================= */
function PartnerDashboard() {
  const bars = [42, 58, 49, 70, 64, 88, 100];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const schedule = [{
    time: "10:00",
    name: "Priya S.",
    service: "Haircut & Blowdry",
    staff: "Anita",
    status: "Completed"
  }, {
    time: "11:30",
    name: "Kavya M.",
    service: "Keratin Treatment",
    staff: "Anita",
    status: "In progress"
  }, {
    time: "12:30",
    name: "Arjun R.",
    service: "Hair Spa",
    staff: "Vikram",
    status: "Confirmed"
  }, {
    time: "2:00",
    name: "Meera J.",
    service: "Manicure",
    staff: "Sana",
    status: "Confirmed"
  }, {
    time: "3:30",
    name: "Walk-in slot",
    service: "Open",
    staff: "—",
    status: "Available"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl bg-paper p-6 text-ink shadow-lift sm:p-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-2.5 w-2.5 rounded-full bg-clay/40"
  }), /*#__PURE__*/React.createElement("span", {
    className: "h-2.5 w-2.5 rounded-full bg-clay/60"
  }), /*#__PURE__*/React.createElement("span", {
    className: "h-2.5 w-2.5 rounded-full bg-clay"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold uppercase tracking-wider text-taupe"
  }, "Bocxy Partner \xB7 Dashboard"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-taupe"
  }, "The Hair Lab")), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4"
  }, [{
    l: "Revenue today",
    v: "₹24,580",
    d: "+18%"
  }, {
    l: "Appointments",
    v: "32",
    d: "6 new"
  }, {
    l: "Occupancy",
    v: "86%",
    d: "+4%"
  }, {
    l: "No-shows",
    v: "2",
    d: "−40%"
  }].map(k => /*#__PURE__*/React.createElement("div", {
    key: k.l,
    className: "rounded-2xl border border-ink/10 bg-cream p-3.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-medium uppercase tracking-wider text-taupe"
  }, k.l), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 font-serif text-xl font-semibold num"
  }, k.v), /*#__PURE__*/React.createElement("div", {
    className: "mt-0.5 text-[10px] font-semibold text-leaf"
  }, k.d)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 rounded-2xl border border-ink/10 bg-cream p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold"
  }, "Weekly performance"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-taupe"
  }, "This week")), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex h-28 items-end gap-2"
  }, bars.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex flex-1 flex-col items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: `w-full rounded-md transition-all duration-700 ${i === 6 ? "bg-clay" : "bg-ink/15"}`,
    style: {
      height: `${b}%`
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] text-taupe"
  }, days[i]))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 rounded-2xl border border-ink/10 bg-cream p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold"
  }, "Today's schedule"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-clay"
  }, "View all")), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 space-y-2"
  }, schedule.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.time + r.name,
    className: "flex items-center gap-3 rounded-xl bg-paper px-3 py-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-10 text-[11px] font-semibold"
  }, r.time), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] font-semibold"
  }, r.name), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-taupe"
  }, r.service, " \xB7 ", r.staff)), /*#__PURE__*/React.createElement("span", {
    className: `rounded-full px-2.5 py-1 text-[9px] font-semibold ${r.status === "Completed" ? "bg-ink/10 text-ink/60" : r.status === "In progress" ? "bg-clay/15 text-clay-deep" : r.status === "Confirmed" ? "bg-leaf/15 text-leaf" : "border border-dashed border-ink/25 text-taupe"}`
  }, r.status))))));
}
function PartnerCalendar() {
  const hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5", "6"];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const cells = useMemo(() => hours.map(() => days.map(() => Math.random() > 0.55)), [hours, days]);
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl bg-paper p-6 text-ink shadow-lift sm:p-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold uppercase tracking-wider text-taupe"
  }, "Calendar \xB7 This week"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 text-[10px] text-taupe"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-2 w-2 rounded-sm bg-clay"
  }), "Booked"), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-2 w-2 rounded-sm bg-clay/25"
  }), "Pending"), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-2 w-2 rounded-sm border border-dashed border-ink/30"
  }), "Open"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 grid",
    style: {
      gridTemplateColumns: `60px repeat(${days.length}, 1fr)`
    }
  }, /*#__PURE__*/React.createElement("div", null), days.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    className: "px-2 pb-2 text-center text-[10px] font-semibold uppercase tracking-wider text-taupe"
  }, d)), hours.map((h, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    className: "py-1 pr-3 text-right text-[10px] text-taupe"
  }, h, i < 4 ? " AM" : " PM"), cells[i].map((c, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    className: `m-0.5 h-8 rounded ${c ? "bg-clay" : Math.random() > 0.6 ? "bg-clay/25" : "border border-dashed border-ink/15"}`
  }))))));
}
function PartnerCustomer() {
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl bg-paper p-6 text-ink shadow-lift sm:p-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold uppercase tracking-wider text-taupe"
  }, "Customers \xB7 CRM"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-taupe"
  }, "2,481 active")), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 grid grid-cols-2 gap-3"
  }, [{
    n: "Priya R.",
    t: "12 visits · ₹14,200 LTV",
    tag: "VIP"
  }, {
    n: "Kavya M.",
    t: "6 visits · ₹4,800 LTV",
    tag: "Regular"
  }, {
    n: "Arjun R.",
    t: "3 visits · ₹1,650 LTV",
    tag: "New"
  }, {
    n: "Meera J.",
    t: "9 visits · ₹9,100 LTV",
    tag: "Regular"
  }].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.n,
    className: "flex items-center gap-3 rounded-2xl border border-ink/10 bg-cream p-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: [IMG.face1, IMG.face4, IMG.face2, IMG.face3][i],
    alt: "",
    className: "h-10 w-10 rounded-full object-cover",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold"
  }, c.n), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-taupe"
  }, c.t)), /*#__PURE__*/React.createElement("span", {
    className: "rounded-full bg-paper px-2.5 py-1 text-[9px] font-semibold text-clay"
  }, c.tag)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 rounded-2xl border border-ink/10 bg-cream p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-wider text-taupe"
  }, "No-show risk \xB7 next 24h"), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 space-y-2"
  }, [{
    n: "Sneha V.",
    t: "6 PM · Hair Spa",
    r: 12
  }, {
    n: "Rahul K.",
    t: "8 PM · Beard Trim",
    r: 28
  }].map(r => /*#__PURE__*/React.createElement("div", {
    key: r.n,
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-medium w-24"
  }, r.n), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 h-2 rounded-full bg-paper overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full bg-clay",
    style: {
      width: `${r.r}%`
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-taupe w-12 text-right"
  }, r.r, "%"))))));
}
function Pricing() {
  const tiers = [{
    name: "Starter",
    price: "Free",
    desc: "For solo professionals just getting started.",
    features: ["Up to 50 bookings / mo", "Online booking page", "Email reminders", "iOS & Android app"],
    cta: "Start free",
    featured: false
  }, {
    name: "Pro",
    price: "₹999",
    suf: "/mo",
    desc: "For salons ready to grow.",
    features: ["Unlimited bookings", "Staff calendars (up to 8)", "WhatsApp reminders", "Customer CRM", "Payouts in T+1", "No-show insurance"],
    cta: "Start 14-day trial",
    featured: true
  }, {
    name: "Premium",
    price: "Custom",
    desc: "For multi-location studios and chains.",
    features: ["Everything in Pro", "Unlimited staff", "Multi-location dashboards", "API + webhooks", "Dedicated partner manager", "Custom integrations"],
    cta: "Talk to us",
    featured: false
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "grid gap-6 md:grid-cols-3"
  }, tiers.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t.name,
    delay: i * 100
  }, /*#__PURE__*/React.createElement("div", {
    className: `relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-1 ${t.featured ? "border-ink bg-ink text-cream shadow-lift" : "border-ink/10 bg-paper"}`
  }, t.featured && /*#__PURE__*/React.createElement("span", {
    className: "absolute -top-3 left-8 rounded-full bg-clay px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream"
  }, "Most popular"), /*#__PURE__*/React.createElement("div", {
    className: `text-[10px] font-semibold uppercase tracking-[0.22em] ${t.featured ? "text-clay" : "text-taupe"}`
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex items-baseline gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: `font-serif text-5xl font-light tracking-tighter ${t.featured ? "text-cream" : "text-ink"}`
  }, t.price), t.suf && /*#__PURE__*/React.createElement("span", {
    className: `text-sm ${t.featured ? "text-cream/60" : "text-taupe"}`
  }, t.suf)), /*#__PURE__*/React.createElement("p", {
    className: `mt-3 text-sm leading-relaxed ${t.featured ? "text-cream/65" : "text-ink/65"}`
  }, t.desc), /*#__PURE__*/React.createElement("ul", {
    className: `mt-6 space-y-2.5 text-sm ${t.featured ? "text-cream/80" : "text-ink/75"}`
  }, t.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    className: "flex items-start gap-2"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    className: `mt-0.5 h-4 w-4 shrink-0 ${t.featured ? "text-clay" : "text-clay"}`
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", null, f)))), /*#__PURE__*/React.createElement(Btn, {
    href: "#/business",
    variant: t.featured ? "clay" : "outline",
    className: "mt-8 w-full"
  }, t.cta)))));
}
function ProductsPage() {
  const [active, setActive] = useState(PRODUCTS[0]);
  const all = [...PRODUCTS, {
    ...NEW_PRODUCT,
    features: ["100+ verified + 500+ pros", "Real-time slots", "Tap-to-book in 30s", "UPI, cards & wallets"]
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-paper pt-[120px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-clay/8 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 pb-16 md:px-12 md:pb-24"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "The Bocxy Suite \xB7 6 products")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    big: true
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-6 font-serif text-6xl font-light leading-[0.96] tracking-tighter sm:text-8xl"
  }, "The operating system", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay underline-mark"
  }, "for beauty businesses."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-8 max-w-xl font-serif text-xl italic leading-relaxed text-ink/65"
  }, "Six software products, designed to run every kind of beauty business \u2014 and a quiet marketplace to bring customers in.")))), /*#__PURE__*/React.createElement("section", {
    className: "bg-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 pb-16 md:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3"
  }, all.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => setActive(p),
    className: `rounded-full border px-5 py-2.5 text-xs font-medium transition-all ${active.id === p.id ? "border-ink bg-ink text-cream" : "border-ink/15 text-ink/70 hover:border-ink/40 hover:bg-cream"}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "mr-1.5"
  }, p.icon), p.name))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-paper pb-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 md:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid items-center gap-12 rounded-3xl border border-ink/10 bg-cream p-8 md:grid-cols-2 md:p-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: `relative overflow-hidden rounded-2xl shadow-soft ${active.id === "marketplace" ? "aspect-[5/4]" : "aspect-[5/4]"}`
  }, /*#__PURE__*/React.createElement("img", {
    src: active.img,
    alt: active.name,
    className: "h-full w-full object-cover",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream font-serif text-lg"
  }, active.icon)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"
  }, active.tag), /*#__PURE__*/React.createElement("h2", {
    className: "mt-3 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-6xl"
  }, active.name), /*#__PURE__*/React.createElement("p", {
    className: "mt-5 max-w-md font-serif text-lg italic leading-relaxed text-ink/65"
  }, active.desc), /*#__PURE__*/React.createElement("ul", {
    className: "mt-7 space-y-3"
  }, active.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    className: "flex items-center gap-3 text-sm text-ink/75"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex h-6 w-6 items-center justify-center rounded-full bg-clay text-cream"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    className: "h-3 w-3"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), f))), /*#__PURE__*/React.createElement("div", {
    className: "mt-9 flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#/business",
    variant: "clay"
  }, "Book a demo"), /*#__PURE__*/React.createElement(Btn, {
    href: "#/business",
    variant: "outline"
  }, "See pricing")))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-bone py-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 md:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
  }, [{
    v: "2,400+",
    l: "Active businesses"
  }, {
    v: "100K+",
    l: "Bookings / month"
  }, {
    v: "14",
    l: "Cities live"
  }, {
    v: "99.9%",
    l: "Uptime SLA"
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    className: "rounded-2xl border border-ink/10 bg-paper p-6 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-4xl font-light tracking-tighter text-ink"
  }, s.v), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, s.l)))))));
}
function BusinessPage() {
  const [tab, setTab] = useState("dashboard");
  const tabs = [{
    id: "dashboard",
    l: "Dashboard"
  }, {
    id: "calendar",
    l: "Calendar"
  }, {
    id: "customers",
    l: "Customers"
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-paper pt-[120px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-clay/8 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto grid max-w-[1400px] items-center gap-12 px-6 pb-20 md:px-12 md:pb-28 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Bocxy Partner")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    big: true
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-6 font-serif text-6xl font-light leading-[0.96] tracking-tighter sm:text-8xl"
  }, "Run your salon,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "uninterrupted."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-8 max-w-md font-serif text-xl italic leading-relaxed text-ink/65"
  }, "The calm operating system for beauty businesses. Appointments, staff, customers, payments and analytics \u2014 one quiet place.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex flex-wrap items-center gap-4"
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#/business",
    variant: "clay"
  }, "Start free trial \u2192"), /*#__PURE__*/React.createElement(Btn, {
    href: "#/business",
    variant: "outline"
  }, "Book a 1:1 demo"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 440
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-10 grid grid-cols-3 gap-6"
  }, [{
    v: "+38%",
    l: "Bookings filled"
  }, {
    v: "−42%",
    l: "No-shows"
  }, {
    v: "+27%",
    l: "Repeat customers"
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-3xl font-light tracking-tighter text-clay"
  }, s.v), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-[10px] font-semibold uppercase tracking-wider text-taupe"
  }, s.l)))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6"
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(PartnerDashboard, null), /*#__PURE__*/React.createElement("div", {
    className: "animate-floaty absolute -left-4 -top-5 hidden items-center gap-2 rounded-2xl bg-paper px-4 py-3 shadow-lift sm:-left-10 sm:flex"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex h-7 w-7 items-center justify-center rounded-full bg-leaf/15"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    className: "h-4 w-4 text-leaf"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold"
  }, "Reminder sent"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-taupe"
  }, "Kavya M. \xB7 11:30 AM"))), /*#__PURE__*/React.createElement("div", {
    className: "animate-floaty2 absolute -bottom-5 -right-3 hidden rounded-2xl bg-clay px-4 py-3 text-cream shadow-lift sm:-right-8 sm:block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] uppercase tracking-wider text-cream/70"
  }, "New booking"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-semibold"
  }, "Hair Spa \xB7 \u20B91,499"))))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-cream/40 py-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 md:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-end justify-between border-b border-ink/10 pb-4"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-3xl font-light tracking-tighter sm:text-4xl"
  }, "A peek inside the product")), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "hidden gap-2 md:flex"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    className: `rounded-full px-5 py-2 text-xs font-medium transition-all ${tab === t.id ? "bg-ink text-cream" : "text-ink/60 hover:text-ink"}`
  }, t.l))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-10"
  }, /*#__PURE__*/React.createElement(Reveal, null, tab === "dashboard" && /*#__PURE__*/React.createElement(PartnerDashboard, null), tab === "calendar" && /*#__PURE__*/React.createElement(PartnerCalendar, null), tab === "customers" && /*#__PURE__*/React.createElement(PartnerCustomer, null))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex justify-center gap-2 md:hidden"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    className: `rounded-full px-4 py-2 text-xs font-medium transition-all ${tab === t.id ? "bg-ink text-cream" : "text-ink/60 hover:text-ink"}`
  }, t.l))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-paper py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 md:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-12 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Everything you need")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-6xl"
  }, "Six quiet superpowers.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "One screen.")))), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3"
  }, [{
    t: "Smart calendar",
    d: "Drag-and-drop bookings across staff and chairs.",
    icon: "◐"
  }, {
    t: "Smart reminders",
    d: "WhatsApp & email nudges that cut no-shows by 42%.",
    icon: "◑"
  }, {
    t: "Customer CRM",
    d: "Know every customer — visits, spend, preferences.",
    icon: "◒"
  }, {
    t: "Online booking page",
    d: "Your own branded URL on the marketplace.",
    icon: "◓"
  }, {
    t: "Payouts & reports",
    d: "T+1 settlements and end-of-day reconciliation.",
    icon: "◆"
  }, {
    t: "Marketing tools",
    d: "Re-engagement campaigns, gift cards, referrals.",
    icon: "◇"
  }].map((f, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: f.t,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    className: "group flex h-full flex-col bg-paper p-7 transition-colors duration-300 hover:bg-cream"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-3xl text-clay"
  }, f.icon), /*#__PURE__*/React.createElement("h3", {
    className: "mt-4 font-serif text-xl font-medium"
  }, f.t), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm leading-relaxed text-ink/65"
  }, f.d)))))))), /*#__PURE__*/React.createElement("section", {
    id: "pricing",
    className: "bg-bone py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 md:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Pricing")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-7xl"
  }, "Simple plans.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "No surprises."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 font-serif text-xl italic text-ink/65"
  }, "Start free. Upgrade when you're ready. Cancel anytime."))), /*#__PURE__*/React.createElement("div", {
    className: "mt-14"
  }, /*#__PURE__*/React.createElement(Pricing, null)))), /*#__PURE__*/React.createElement("section", {
    className: "bg-paper py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 md:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-8 lg:grid-cols-2"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl bg-ink p-10 text-cream sm:p-14"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    light: true
  }, "For Business"), /*#__PURE__*/React.createElement("h3", {
    className: "mt-6 font-serif text-4xl font-light leading-tight tracking-tighter sm:text-5xl"
  }, "Ready to fill your calendar?"), /*#__PURE__*/React.createElement("p", {
    className: "mt-5 font-serif text-lg italic text-cream/65"
  }, "\"We added \u20B94.2L in new bookings in our first 90 days. Bocxy Partner just works.\" \u2014 Karthik S., Mane Story"), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#/business",
    variant: "clay"
  }, "Start free trial \u2192"), /*#__PURE__*/React.createElement(Btn, {
    href: "#/business",
    variant: "ghostlight"
  }, "Book a demo")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl bg-cream p-10 sm:p-14"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Case study"), /*#__PURE__*/React.createElement("h3", {
    className: "mt-6 font-serif text-4xl font-light leading-tight tracking-tighter sm:text-5xl"
  }, "From 4 chairs to 12.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "In eight months.")), /*#__PURE__*/React.createElement("p", {
    className: "mt-5 text-sm leading-relaxed text-ink/65"
  }, "How Blush Beauty Lounge scaled from a single chair to a 12-chair studio \u2014 using Bocxy Partner for bookings, staff and CRM."), /*#__PURE__*/React.createElement("a", {
    href: "#/journal",
    className: "mt-8 inline-flex items-center gap-2 text-sm font-medium text-clay"
  }, "Read the story \u2192"), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-3xl font-light text-clay"
  }, "+186%"), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-wider text-taupe"
  }, "Revenue")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-3xl font-light text-clay"
  }, "3x"), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-wider text-taupe"
  }, "Bookings")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-3xl font-light text-clay"
  }, "98%"), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-wider text-taupe"
  }, "Show-up rate")))))))));
}

/* =========================================================
   ABOUT + JOURNAL
   ========================================================= */
function AboutPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-paper pt-[120px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-clay/8 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 pb-20 md:px-12 md:pb-28"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-12 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "About \xB7 Est. 2023")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    big: true
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-6 font-serif text-6xl font-light leading-[0.96] tracking-tighter sm:text-8xl"
  }, "We built the", /*#__PURE__*/React.createElement("br", null), "beauty marketplace", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay underline-mark"
  }, "India deserved."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-8 max-w-xl font-serif text-xl italic leading-relaxed text-ink/65"
  }, "Bocxy started in a one-room salon in Mylapore, where our founder watched her mother juggle a paper diary, three phone calls and a walk-in \u2014 all at once. We thought: there's a better way.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-xl text-base leading-relaxed text-ink/70"
  }, "Today, Bocxy connects 100+ partner salons and 500+ independent professionals with customers across Chennai. We're building the calm, considered marketplace India's beauty industry has been waiting for \u2014 one quiet booking at a time."))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aspect-[4/5] overflow-hidden rounded-3xl shadow-lift"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.story,
    alt: "",
    className: "h-full w-full object-cover",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "animate-floaty absolute -bottom-6 -left-6 hidden rounded-2xl bg-paper p-5 shadow-lift sm:block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-wider text-taupe"
  }, "Founded"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 font-serif text-2xl font-medium"
  }, "2023 \xB7 Chennai")))))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-cream/40 py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 md:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-14 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Our values")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-6xl"
  }, "Quiet principles", /*#__PURE__*/React.createElement("br", null), "for a loud industry."))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 lg:col-span-8"
  }, [{
    n: "01",
    t: "Calm over hype",
    d: "Beauty isn't a content vertical. It's your time, your ritual, your day. We design every screen to get out of the way."
  }, {
    n: "02",
    t: "Craft over scale",
    d: "We partner with people who do their craft seriously. We verify, we curate, we say no when something isn't right."
  }, {
    n: "03",
    t: "People over metrics",
    d: "We measure success by repeat customers and show-up rates — not viral hits. Beauty is local, and so are we."
  }, {
    n: "04",
    t: "Honesty over gloss",
    d: "Real photos, real prices, real reviews. No fake discounts, no inflated ratings, no theatre."
  }].map((v, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: v.n,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-paper p-8 transition-colors hover:bg-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-serif text-2xl italic text-clay"
  }, v.n), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl font-medium"
  }, v.t)), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 max-w-2xl text-sm leading-relaxed text-ink/65"
  }, v.d)))))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-paper py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 md:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-12 sm:grid-cols-3"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Stat, {
    value: "2023",
    label: "Founded"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "100",
    label: "Partner Salons"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "500",
    label: "Independent Pros"
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-ink py-24 text-cream md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 md:px-12"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    light: true
  }, "Press")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-7xl"
  }, "Quietly noticed.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 flex flex-wrap items-center gap-x-14 gap-y-6"
  }, PRESS.map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    className: "font-serif text-2xl italic text-cream/55"
  }, p))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-paper py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-3xl px-6 md:px-12"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "FAQ")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-6xl"
  }, "Common questions,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "quiet answers."))), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 space-y-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10"
  }, FAQS.map((f, i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: f.q,
    item: f,
    delay: i * 60
  }))))));
}
function FaqItem({
  item,
  delay
}) {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement(Reveal, {
    delay: delay
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-paper"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    className: "flex w-full items-center justify-between gap-6 p-6 text-left transition-colors hover:bg-cream"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-serif text-xl font-medium"
  }, item.q), /*#__PURE__*/React.createElement("span", {
    className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-all ${open ? "rotate-45 bg-ink text-cream" : ""}`
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-3.5 w-3.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14",
    strokeLinecap: "round"
  })))), open && /*#__PURE__*/React.createElement("div", {
    className: "px-6 pb-6 text-sm leading-relaxed text-ink/70"
  }, item.a)));
}
function JournalPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-paper pt-[120px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-clay/8 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 pb-20 md:px-12 md:pb-28"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "The Journal")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    big: true
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-6 font-serif text-6xl font-light leading-[0.96] tracking-tighter sm:text-8xl"
  }, "Notes on craft,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "ritual & taste."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-8 max-w-xl font-serif text-xl italic leading-relaxed text-ink/65"
  }, "Long-form, photographed features and field notes from the people shaping India's new beauty economy.")))), /*#__PURE__*/React.createElement("section", {
    className: "bg-paper pb-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1400px] px-6 md:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
  }, JOURNAL.map((j, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: j.title,
    delay: i * 100
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/journal",
    className: "group block"
  }, /*#__PURE__*/React.createElement("article", {
    className: "overflow-hidden rounded-3xl border border-ink/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[4/5] overflow-hidden"
  }, /*#__PURE__*/React.createElement("img", {
    src: j.img,
    alt: "",
    className: "h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"
  }, j.kicker), /*#__PURE__*/React.createElement("h3", {
    className: "mt-3 font-serif text-2xl font-medium leading-snug transition-colors group-hover:text-clay"
  }, j.title), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex items-center gap-2 text-[11px] text-taupe"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-px w-6 bg-ink/15"
  }), /*#__PURE__*/React.createElement("span", null, j.read, " read")))))))))));
}

/* =========================================================
   ROUTER ROOT
   ========================================================= */
function App() {
  const [route, nav] = useRoute();
  let page;
  let toc = null;
  if (route.startsWith("/discover")) page = /*#__PURE__*/React.createElement(DiscoverPage, null);else if (route.startsWith("/business")) page = /*#__PURE__*/React.createElement(BusinessPage, null);else if (route.startsWith("/about")) page = /*#__PURE__*/React.createElement(AboutPage, null);else if (route.startsWith("/journal")) page = /*#__PURE__*/React.createElement(JournalPage, null);else if (route.startsWith("/products")) page = /*#__PURE__*/React.createElement(ProductsPage, null);else {
    page = /*#__PURE__*/React.createElement(HomePage, null);
    toc = /*#__PURE__*/React.createElement(SideToc, {
      items: [{
        id: "top",
        label: "Hero"
      }, {
        id: "products",
        label: "Suite"
      }, {
        id: "explore",
        label: "Categories"
      }, {
        id: "salons",
        label: "Featured"
      }, {
        id: "index",
        label: "Salon Index"
      }, {
        id: "try",
        label: "Try Booking"
      }, {
        id: "map",
        label: "In Chennai"
      }, {
        id: "download",
        label: "App"
      }]
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-paper font-sans text-ink"
  }, /*#__PURE__*/React.createElement(ScrollProgress, null), /*#__PURE__*/React.createElement(Navbar, {
    route: route,
    nav: nav
  }), /*#__PURE__*/React.createElement("main", {
    key: route
  }, page), toc, /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(MobileCta, null));
}
document.getElementById("root").dataset.mounted = "true";
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));