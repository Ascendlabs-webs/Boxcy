/* Precompiled from index.html — do not edit by hand. Edit the source inside index.html and re-run: node scripts/build.js */
const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;

/* ---------- data ---------- */
const IMG = {
  heroArch: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
  heroMakeup: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop",
  hair: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=900&auto=format&fit=crop",
  skin: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=900&auto=format&fit=crop",
  nails: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=900&auto=format&fit=crop",
  bridal: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=900&auto=format&fit=crop",
  spa: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=900&auto=format&fit=crop",
  tattoo: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=900&auto=format&fit=crop",
  salon1: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=900&auto=format&fit=crop",
  salon2: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=900&auto=format&fit=crop",
  salon3: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=900&auto=format&fit=crop",
  salon4: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=900&auto=format&fit=crop",
  salon5: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=900&auto=format&fit=crop",
  salon6: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=900&auto=format&fit=crop",
  pamper: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=900&auto=format&fit=crop",
  finalCta: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1600&auto=format&fit=crop",
  face1: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop&crop=faces",
  face2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&crop=faces",
  face3: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop&crop=faces",
  face4: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop&crop=faces",
  face5: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop&crop=faces"
};
const CATEGORIES = [{
  name: "Hair",
  desc: "Cuts, colour, styling & more",
  img: IMG.hair,
  span: "lg:col-span-5 lg:row-span-2"
}, {
  name: "Skin",
  desc: "Facials, glow & skin rituals",
  img: IMG.skin,
  span: "lg:col-span-7"
}, {
  name: "Nails",
  desc: "Manicures, art & extensions",
  img: IMG.nails,
  span: "lg:col-span-4"
}, {
  name: "Bridal",
  desc: "Looks for your big day",
  img: IMG.bridal,
  span: "lg:col-span-3"
}, {
  name: "Spa",
  desc: "Massages, rituals & calm",
  img: IMG.spa,
  span: "lg:col-span-7"
}, {
  name: "Tattoo",
  desc: "Ink by trusted artists",
  img: IMG.tattoo,
  span: "lg:col-span-5"
}];
const SALONS = [{
  name: "The Hair Lab",
  loc: "Adyar, Chennai",
  rating: 4.9,
  reviews: 328,
  price: "Haircut from ₹499",
  next: "Next available · 6:30 PM",
  tags: ["Hair", "Styling"],
  img: IMG.salon1
}, {
  name: "Aura Spa & Wellness",
  loc: "Nungambakkam",
  rating: 4.8,
  reviews: 512,
  price: "Spa rituals from ₹1,299",
  next: "Next available · 5:00 PM",
  tags: ["Spa", "Massage"],
  img: IMG.salon2
}, {
  name: "Blush Beauty Lounge",
  loc: "Besant Nagar",
  rating: 4.9,
  reviews: 246,
  price: "Makeup from ₹999",
  next: "Next available · 4:15 PM",
  tags: ["Makeup", "Skin"],
  img: IMG.salon3
}, {
  name: "Velvet Nail Bar",
  loc: "Anna Nagar",
  rating: 4.7,
  reviews: 189,
  price: "Gel nails from ₹699",
  next: "Next available · 3:45 PM",
  tags: ["Nails", "Art"],
  img: IMG.salon4
}, {
  name: "Mane Story Salon",
  loc: "Velachery",
  rating: 4.8,
  reviews: 402,
  price: "Haircut from ₹399",
  next: "Next available · 12:30 PM",
  tags: ["Hair", "Beard"],
  img: IMG.salon5
}, {
  name: "Zarra Bridal Studio",
  loc: "T. Nagar",
  rating: 5.0,
  reviews: 98,
  price: "Bridal trials from ₹2,499",
  next: "Next available · Tomorrow, 10 AM",
  tags: ["Bridal", "Hair"],
  img: IMG.salon6
}];
const ECOSYSTEM = [{
  name: "Bocxy",
  tag: "The marketplace",
  desc: "Discover and book beauty experiences near you.",
  live: true
}, {
  name: "Bocxy Partner",
  tag: "For businesses",
  desc: "Appointments, staff, customers and revenue in one place.",
  live: true
}, {
  name: "Bocxy Academy",
  tag: "For careers",
  desc: "Training and growth for beauty professionals.",
  live: false
}, {
  name: "Bocxy Glam",
  tag: "For inspiration",
  desc: "Trends, looks and editorial stories.",
  live: false
}, {
  name: "Bocxy Tech",
  tag: "The engine",
  desc: "Technology powering modern beauty businesses.",
  live: false
}];

/* ---------- icons ---------- */
const Icon = {
  Star: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 20 20",
    fill: "currentColor",
    className: p.c
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9z"
  })),
  Arrow: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: p.c
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })),
  Pin: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: p.c
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7-5.1-7-11a7 7 0 1114 0c0 5.9-7 11-7 11z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.5"
  })),
  Check: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    className: p.c
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })),
  Chevron: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: p.c
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })),
  Menu: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: p.c
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16",
    strokeLinecap: "round"
  })),
  X: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: p.c
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18",
    strokeLinecap: "round"
  })),
  Apple: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 384 512",
    fill: "currentColor",
    className: p.c
  }, /*#__PURE__*/React.createElement("path", {
    d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
  })),
  Play: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 512 512",
    fill: "currentColor",
    className: p.c
  }, /*#__PURE__*/React.createElement("path", {
    d: "M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
  })),
  Instagram: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 448 512",
    fill: "currentColor",
    className: p.c
  }, /*#__PURE__*/React.createElement("path", {
    d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
  })),
  LinkedIn: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 448 512",
    fill: "currentColor",
    className: p.c
  }, /*#__PURE__*/React.createElement("path", {
    d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
  })),
  YouTube: p => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 576 512",
    fill: "currentColor",
    className: p.c
  }, /*#__PURE__*/React.createElement("path", {
    d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
  }))
};

/* ---------- shared components ---------- */
function Reveal({
  children,
  delay = 0,
  className = ""
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
      rootMargin: "0px 0px -40px 0px"
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      transitionDelay: `${delay}ms`
    },
    className: `reveal ${vis ? "revealed" : ""} ${className}`
  }, children);
}
function Eyebrow({
  children,
  light = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] ${light ? "text-clay" : "text-clay"}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-px w-8 bg-clay/60"
  }), children);
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
function Btn({
  href = "#",
  variant = "clay",
  children,
  className = "",
  onClick
}) {
  const base = "btn-shine group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay/60 active:scale-[0.98]";
  const variants = {
    clay: "bg-clay text-cream hover:bg-clay-deep shadow-[0_10px_30px_-12px_rgba(192,90,51,0.55)]",
    dark: "bg-espresso text-cream hover:bg-cocoa",
    outline: "border border-espresso/25 text-espresso hover:border-espresso hover:bg-espresso hover:text-cream",
    light: "bg-cream text-espresso hover:bg-white",
    ghostlight: "border border-cream/30 text-cream hover:bg-cream hover:text-espresso"
  };
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    className: `${base} ${variants[variant]} ${className}`
  }, children);
}
function Logo({
  light = false
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "flex items-center gap-2",
    "aria-label": "Bocxy home"
  }, /*#__PURE__*/React.createElement("span", {
    className: `font-serif text-[26px] font-semibold tracking-tight leading-none ${light ? "text-cream" : "text-espresso"}`
  }, "bocxy"), /*#__PURE__*/React.createElement("span", {
    className: "mt-1 h-1.5 w-1.5 rounded-full bg-clay"
  }));
}

/* ---------- 1. NAVIGATION ---------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
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
  const links = [{
    label: "Explore",
    href: "#explore"
  }, {
    label: "How It Works",
    href: "#how"
  }, {
    label: "For Businesses",
    href: "#business"
  }, {
    label: "About Bocxy",
    href: "#about"
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-cream/85 backdrop-blur-xl shadow-[0_1px_0_rgba(34,24,18,0.08)]" : "bg-transparent"}`
  }, /*#__PURE__*/React.createElement("nav", {
    className: "mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 md:px-10",
    "aria-label": "Main navigation"
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("div", {
    className: "hidden items-center gap-9 lg:flex"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    className: "navlink text-sm text-espresso/70 hover:text-espresso"
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "hidden items-center gap-3 lg:flex"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#business",
    className: "text-sm font-medium text-espresso/80 hover:text-espresso transition-colors"
  }, "For Businesses"), /*#__PURE__*/React.createElement("a", {
    href: "#salons",
    className: "inline-flex items-center gap-2 rounded-full bg-espresso px-6 py-3 text-sm font-medium text-cream transition-all duration-300 hover:bg-cocoa hover:shadow-lift"
  }, "Book an Appointment", /*#__PURE__*/React.createElement(Icon.Arrow, {
    c: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    className: "rounded-full p-2.5 text-espresso transition-colors hover:bg-espresso/5 lg:hidden",
    "aria-label": open ? "Close menu" : "Open menu",
    "aria-expanded": open
  }, open ? /*#__PURE__*/React.createElement(Icon.X, {
    c: "h-6 w-6"
  }) : /*#__PURE__*/React.createElement(Icon.Menu, {
    c: "h-6 w-6"
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-cream px-6 pb-10 pt-6 lg:hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2"
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    onClick: () => setOpen(false),
    className: "border-b border-espresso/10 py-5 font-serif text-3xl text-espresso transition-colors hover:text-clay",
    style: {
      transitionDelay: `${i * 40}ms`
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 flex flex-col gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#salons",
    onClick: () => setOpen(false),
    className: "inline-flex items-center justify-center gap-2 rounded-full bg-clay px-6 py-4 text-sm font-medium text-cream"
  }, "Book an Appointment"), /*#__PURE__*/React.createElement("a", {
    href: "#business",
    onClick: () => setOpen(false),
    className: "inline-flex items-center justify-center gap-2 rounded-full border border-espresso/20 px-6 py-4 text-sm font-medium text-espresso"
  }, "For Businesses"))));
}

/* ---------- phone mockup ---------- */
function PhoneFrame({
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `relative rounded-[3rem] bg-espresso p-[10px] shadow-lift ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden rounded-[2.4rem] bg-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute left-1/2 top-2.5 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-espresso"
  }), children));
}
function BookingScreen() {
  const slots = ["10:00", "11:30", "12:30", "2:00", "4:15", "6:30"];
  const [sel, setSel] = useState(2);
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-full flex-col text-espresso"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-6 pb-2 pt-12 text-[10px] font-semibold"
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block h-2 w-3 rounded-[2px] bg-espresso/70"
  }), /*#__PURE__*/React.createElement("span", {
    className: "inline-block h-2 w-3 rounded-[2px] bg-espresso/40"
  }), /*#__PURE__*/React.createElement("span", {
    className: "inline-block h-2 w-3 rounded-[2px] bg-espresso/20"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-5 py-3"
  }, /*#__PURE__*/React.createElement("button", {
    className: "rounded-full p-1.5 hover:bg-espresso/5",
    "aria-label": "Back"
  }, /*#__PURE__*/React.createElement(Icon.Chevron, {
    c: "h-4 w-4 -scale-x-100"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-[13px] font-semibold"
  }, "Book appointment"), /*#__PURE__*/React.createElement("span", {
    className: "text-[13px]"
  }, "\u2661")), /*#__PURE__*/React.createElement("div", {
    className: "mx-5 flex items-center gap-3 rounded-2xl border border-espresso/10 bg-white p-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.salon1,
    alt: "The Hair Lab",
    className: "h-11 w-11 rounded-xl object-cover",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 text-[12px] font-semibold"
  }, "The Hair Lab ", /*#__PURE__*/React.createElement(Icon.Star, {
    c: "h-3 w-3 text-clay"
  }), /*#__PURE__*/React.createElement("span", {
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
    className: "flex items-center justify-between rounded-xl border border-espresso/10 p-2.5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] font-semibold"
  }, "Hair Spa & Massage"), /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] text-taupe"
  }, "60 min \xB7 \u20B9899")), /*#__PURE__*/React.createElement("span", {
    className: "h-4 w-4 rounded-full border border-espresso/25"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "px-5 pt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-wider text-taupe"
  }, "Choose professional"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 flex gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rounded-full bg-espresso px-3 py-1.5 text-[10px] font-semibold text-cream"
  }, "Any"), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5 rounded-full border border-espresso/15 px-3 py-1.5 text-[10px]"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.face3,
    alt: "Anita",
    className: "h-4 w-4 rounded-full object-cover",
    loading: "lazy"
  }), "Anita \u26054.9"), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5 rounded-full border border-espresso/15 px-3 py-1.5 text-[10px]"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.face2,
    alt: "Vikram",
    className: "h-4 w-4 rounded-full object-cover",
    loading: "lazy"
  }), "Vikram \u26054.8"))), /*#__PURE__*/React.createElement("div", {
    className: "px-5 pt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-wider text-taupe"
  }, "Today \xB7 Thu 11"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 grid grid-cols-3 gap-1.5"
  }, slots.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSel(i),
    className: `rounded-lg py-2 text-[10px] font-medium transition-colors ${i === 1 ? "text-espresso/30 line-through" : sel === i ? "bg-clay text-cream" : "border border-espresso/15 hover:border-clay"}`
  }, s)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-auto flex items-center justify-between border-t border-espresso/10 bg-white px-5 py-4"
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

/* ---------- 2. HERO ---------- */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "relative overflow-hidden pt-[72px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-clay/10 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -left-52 top-96 h-[420px] w-[420px] rounded-full bg-blush/50 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-14 md:px-10 lg:grid-cols-12 lg:pb-32 lg:pt-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2.5 rounded-full border border-espresso/10 bg-paper/80 py-2 pl-3 pr-4 shadow-sm backdrop-blur"
  }, /*#__PURE__*/React.createElement("span", {
    className: "relative flex h-2 w-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-60"
  }), /*#__PURE__*/React.createElement("span", {
    className: "relative inline-flex h-2 w-2 rounded-full bg-leaf"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, "Now live in Chennai \xB7 100+ partners"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-6 font-serif text-[44px] font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-[76px]"
  }, "Beauty appointments,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "font-light italic text-clay"
  }, "made effortless."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-md text-[17px] leading-relaxed text-espresso/70"
  }, "Discover the best salons, spas, and beauty professionals near you \u2014 and book your appointment in seconds.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-9 flex flex-wrap items-center gap-4"
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#salons",
    variant: "clay"
  }, "Book an Appointment ", /*#__PURE__*/React.createElement(Icon.Arrow, {
    c: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
  })), /*#__PURE__*/React.createElement(Btn, {
    href: "#download",
    variant: "outline"
  }, /*#__PURE__*/React.createElement(Icon.Apple, {
    c: "h-4 w-4"
  }), " Download the App"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 400
  }, /*#__PURE__*/React.createElement("a", {
    href: "#business",
    className: "group mt-7 inline-flex items-center gap-2 text-sm font-medium text-espresso/70 transition-colors hover:text-clay"
  }, "Own a salon? ", /*#__PURE__*/React.createElement("span", {
    className: "text-clay underline decoration-clay/40 underline-offset-4 group-hover:decoration-clay"
  }, "Grow with Bocxy"), " ", /*#__PURE__*/React.createElement(Icon.Arrow, {
    c: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 500
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex -space-x-3"
  }, [IMG.face1, IMG.face2, IMG.face3, IMG.face4].map((f, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: f,
    alt: "",
    className: "h-9 w-9 rounded-full border-2 border-cream object-cover",
    loading: "lazy"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-espresso/60"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-espresso"
  }, "4.8\u2605"), " average rating \xB7 10,000+ appointments booked")))), /*#__PURE__*/React.createElement("div", {
    className: "relative lg:col-span-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto h-[520px] max-w-[560px] sm:h-[600px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-ring absolute left-0 top-0 h-[440px] w-[300px] overflow-hidden rounded-t-[150px] rounded-b-3xl shadow-soft sm:h-[500px] sm:w-[340px]"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.heroArch,
    alt: "Hair stylist at work in a Chennai salon",
    className: "hero-img h-full w-full object-cover",
    fetchpriority: "high",
    decoding: "async"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent"
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute right-0 top-16 w-[250px] sm:w-[280px]"
  }, /*#__PURE__*/React.createElement(PhoneFrame, {
    className: "animate-floaty2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-[520px] sm:h-[560px]"
  }, /*#__PURE__*/React.createElement(BookingScreen, null)))), /*#__PURE__*/React.createElement("div", {
    className: "animate-floaty absolute bottom-24 left-6 flex items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-3 shadow-soft backdrop-blur"
  }, /*#__PURE__*/React.createElement(Icon.Star, {
    c: "h-4 w-4 text-clay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold"
  }, "4.9"), " ", /*#__PURE__*/React.createElement("span", {
    className: "text-taupe"
  }, "\xB7 The Hair Lab"))), /*#__PURE__*/React.createElement("div", {
    className: "animate-floaty2 absolute bottom-2 right-6 flex items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-3 shadow-soft backdrop-blur",
    style: {
      animationDelay: "0.8s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex h-7 w-7 items-center justify-center rounded-full bg-leaf/15"
  }, /*#__PURE__*/React.createElement(Icon.Check, {
    c: "h-4 w-4 text-leaf"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold"
  }, "Appointment confirmed"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-taupe"
  }, "Today \xB7 12:30 PM"))), /*#__PURE__*/React.createElement("div", {
    className: "animate-floaty absolute left-10 top-8 flex items-center gap-2 rounded-full bg-espresso px-4 py-2 text-xs text-cream shadow-soft",
    style: {
      animationDelay: "1.6s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1.5 w-1.5 rounded-full bg-leaf"
  }), " Available today"), /*#__PURE__*/React.createElement("div", {
    className: "animate-floaty absolute right-10 top-2 flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-2 text-xs shadow-soft backdrop-blur",
    style: {
      animationDelay: "2.4s"
    }
  }, /*#__PURE__*/React.createElement(Icon.Pin, {
    c: "h-3.5 w-3.5 text-clay"
  }), " 2 min away")))), /*#__PURE__*/React.createElement("div", {
    className: "border-y border-espresso/10 bg-parchment/60 py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee mx-auto max-w-7xl overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee__inner w-max"
  }, [0, 1].map(k => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "flex items-center gap-10 pr-10 text-[13px] font-medium uppercase tracking-[0.25em] text-espresso/50"
  }, ["Hair", "Skin", "Nails", "Bridal", "Spa", "Tattoo", "Makeup", "Wellness"].map(t => /*#__PURE__*/React.createElement("span", {
    key: t + k,
    className: "flex items-center gap-10"
  }, /*#__PURE__*/React.createElement("span", null, t), /*#__PURE__*/React.createElement("span", {
    className: "text-clay"
  }, "\u2726")))))))));
}

/* ---------- 3. TRUST STRIP ---------- */
function TrustStrip() {
  const stats = [{
    v: "100+",
    l: "Partner Salons"
  }, {
    v: "10K+",
    l: "Appointments Booked"
  }, {
    v: "500+",
    l: "Beauty Professionals"
  }, {
    v: "4.8★",
    l: "Average Rating"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "border-b border-espresso/10 bg-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    className: "text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, "Trusted by beauty professionals and customers across Chennai")), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 grid grid-cols-2 gap-y-10 md:grid-cols-4"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.l,
    delay: i * 100,
    className: `text-center ${i > 0 ? "md:border-l md:border-espresso/10" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-5xl font-light tracking-tight text-espresso"
  }, s.v), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-taupe"
  }, s.l)))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-10 text-center text-[11px] text-taupe/70"
  }, "*Figures shown are illustrative placeholders for this design concept."))));
}

/* ---------- 4. HOW IT WORKS ---------- */
function HowItWorks() {
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    className: "scroll-mt-24 bg-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "How Bocxy works")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-5 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl"
  }, "From ", /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "\u201CI need a salon\u201D"), /*#__PURE__*/React.createElement("br", null), "to \u201CAppointment confirmed.\u201D"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "lg:mt-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "group flex h-full flex-col rounded-3xl border border-espresso/10 bg-paper p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-number"
  }, "01"), /*#__PURE__*/React.createElement("div", {
    className: "step-label mt-4"
  }, "Discover"), /*#__PURE__*/React.createElement("h3", {
    className: "mt-2 font-serif text-2xl font-medium"
  }, "Find your perfect match"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-sm leading-relaxed text-espresso/65"
  }, "Search salons, spas, and beauty professionals by location, service, ratings, availability, and price."), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 rounded-2xl border border-espresso/10 bg-cream p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-sm"
  }, /*#__PURE__*/React.createElement(Icon.Pin, {
    c: "h-4 w-4 text-clay"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-espresso/70"
  }, "Haircut \xB7 Adyar")), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between rounded-xl bg-white px-3 py-2 text-xs shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-medium"
  }, "The Hair Lab"), /*#__PURE__*/React.createElement("span", {
    className: "text-clay"
  }, "\u2605 4.9")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between rounded-xl bg-white px-3 py-2 text-xs shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-medium"
  }, "Mane Story"), /*#__PURE__*/React.createElement("span", {
    className: "text-clay"
  }, "\u2605 4.8")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between rounded-xl bg-white px-3 py-2 text-xs shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-medium"
  }, "Blush Lounge"), /*#__PURE__*/React.createElement("span", {
    className: "text-clay"
  }, "\u2605 4.9")))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150,
    className: "lg:mt-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "group flex h-full flex-col rounded-3xl border border-espresso/10 bg-paper p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-number"
  }, "02"), /*#__PURE__*/React.createElement("div", {
    className: "step-label mt-4"
  }, "Book"), /*#__PURE__*/React.createElement("h3", {
    className: "mt-2 font-serif text-2xl font-medium"
  }, "Pick your slot in seconds"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-sm leading-relaxed text-espresso/65"
  }, "Choose your service, professional, date, and an available time slot. No calls. No waiting."), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 rounded-2xl border border-espresso/10 bg-cream p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1.5"
  }, ["Today", "Fri 12", "Sat 13"].map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: d,
    className: `rounded-lg px-2.5 py-1.5 text-[10px] font-medium ${i === 0 ? "bg-espresso text-cream" : "bg-white text-espresso/60"}`
  }, d))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 grid grid-cols-3 gap-1.5"
  }, ["10:00", "12:30", "2:00", "4:15", "6:30", "8:00"].map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: `rounded-lg py-1.5 text-center text-[10px] font-medium ${i === 1 ? "bg-clay text-cream" : "bg-white text-espresso/70"}`
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex items-center justify-center gap-1.5 rounded-xl bg-clay py-2 text-[11px] font-semibold text-cream"
  }, /*#__PURE__*/React.createElement(Icon.Check, {
    c: "h-3.5 w-3.5"
  }), " Booked in 12 seconds")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300,
    className: "lg:mt-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "group flex h-full flex-col rounded-3xl border border-espresso/10 bg-paper p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-number"
  }, "03"), /*#__PURE__*/React.createElement("div", {
    className: "step-label mt-4"
  }, "Get pampered"), /*#__PURE__*/React.createElement("h3", {
    className: "mt-2 font-serif text-2xl font-medium"
  }, "Show up and unwind"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-sm leading-relaxed text-espresso/65"
  }, "Enjoy the experience. Rate it, rebook in one tap, and let Bocxy handle the rest."), /*#__PURE__*/React.createElement("div", {
    className: "relative mt-8 h-44 overflow-hidden rounded-2xl"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.pamper,
    alt: "Spa relaxation experience",
    className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-medium backdrop-blur"
  }, /*#__PURE__*/React.createElement(Icon.Star, {
    c: "h-3.5 w-3.5 text-clay"
  }), " Rate your experience")))))));
}

/* ---------- 5. EXPLORE SERVICES ---------- */
function Explore() {
  return /*#__PURE__*/React.createElement("section", {
    id: "explore",
    className: "scroll-mt-24 bg-parchment/50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-end justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Explore")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-5 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl"
  }, "Whatever your kind", /*#__PURE__*/React.createElement("br", null), "of ", /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "self-care.")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("a", {
    href: "#salons",
    className: "group inline-flex items-center gap-2 text-sm font-medium text-espresso/70 transition-colors hover:text-clay"
  }, "Browse all services ", /*#__PURE__*/React.createElement(Icon.Arrow, {
    c: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 no-scrollbar lg:grid lg:grid-cols-12 lg:grid-rows-[270px_270px_300px] lg:overflow-visible lg:pb-0"
  }, CATEGORIES.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.name,
    delay: i * 80,
    className: `min-w-[78%] snap-center sm:min-w-[55%] ${c.span}`
  }, /*#__PURE__*/React.createElement("a", {
    href: "#salons",
    className: "group relative block h-[380px] w-full overflow-hidden rounded-2xl lg:h-full"
  }, /*#__PURE__*/React.createElement("img", {
    src: c.img,
    alt: c.name,
    className: "h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/15 to-transparent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream/90 text-espresso opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:rotate-[-45deg]"
  }, /*#__PURE__*/React.createElement(Icon.Arrow, {
    c: "h-4 w-4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-0 p-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-3xl font-medium text-cream"
  }, c.name), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-sm text-cream/80"
  }, c.desc, " ", /*#__PURE__*/React.createElement("span", {
    className: "ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1"
  }, "\u2192")))))))));
}

/* ---------- 6. DISCOVER NEARBY ---------- */
function Nearby() {
  const trackRef = useRef(null);
  const scrollBy = dir => trackRef.current && trackRef.current.scrollBy({
    left: dir * 380,
    behavior: "smooth"
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "salons",
    className: "scroll-mt-24 bg-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-end justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Discover nearby")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-5 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl"
  }, "Great beauty experiences,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "right around you.")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollBy(-1),
    className: "hidden h-11 w-11 items-center justify-center rounded-full border border-espresso/15 transition-all hover:border-espresso hover:bg-espresso hover:text-cream md:flex",
    "aria-label": "Previous salons"
  }, /*#__PURE__*/React.createElement(Icon.Chevron, {
    c: "h-4 w-4 -scale-x-100"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollBy(1),
    className: "hidden h-11 w-11 items-center justify-center rounded-full border border-espresso/15 transition-all hover:border-espresso hover:bg-espresso hover:text-cream md:flex",
    "aria-label": "Next salons"
  }, /*#__PURE__*/React.createElement(Icon.Chevron, {
    c: "h-4 w-4"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#download",
    className: "group ml-2 inline-flex items-center gap-2 text-sm font-medium text-espresso/70 transition-colors hover:text-clay"
  }, "View all salons ", /*#__PURE__*/React.createElement(Icon.Arrow, {
    c: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    className: "mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 no-scrollbar"
  }, SALONS.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.name,
    delay: i * 80,
    className: "min-w-[300px] snap-start sm:min-w-[340px]"
  }, /*#__PURE__*/React.createElement("article", {
    className: "group flex h-full flex-col overflow-hidden rounded-2xl border border-espresso/10 bg-paper transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative h-52 overflow-hidden"
  }, /*#__PURE__*/React.createElement("img", {
    src: s.img,
    alt: s.name,
    className: "h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.07]",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-espresso backdrop-blur"
  }, s.tags[0]), /*#__PURE__*/React.createElement("span", {
    className: "absolute right-4 top-4 flex items-center gap-1 rounded-full bg-espresso/80 px-3 py-1.5 text-[11px] font-semibold text-cream backdrop-blur"
  }, /*#__PURE__*/React.createElement(Icon.Star, {
    c: "h-3 w-3 text-clay"
  }), " ", s.rating)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-1 flex-col p-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between gap-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl font-medium"
  }, s.name), /*#__PURE__*/React.createElement("p", {
    className: "mt-0.5 flex items-center gap-1 text-xs text-taupe"
  }, /*#__PURE__*/React.createElement(Icon.Pin, {
    c: "h-3 w-3"
  }), " ", s.loc)), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-taupe"
  }, s.reviews, " reviews")), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex flex-wrap gap-1.5"
  }, s.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "tag"
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 border-t border-espresso/10 pt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-medium"
  }, s.price), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 flex items-center gap-1.5 text-xs font-semibold text-leaf"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1.5 w-1.5 rounded-full bg-leaf animate-pulse-dot"
  }), s.next)), /*#__PURE__*/React.createElement("button", {
    className: "mt-5 w-full rounded-full border border-espresso/15 py-3 text-sm font-medium transition-all duration-300 hover:border-clay hover:bg-clay hover:text-cream active:scale-[0.98]"
  }, "Quick Book"))))))));
}

/* ---------- 7. WHY BOCXY ---------- */
function WhyBocxy() {
  const items = [{
    n: "01",
    t: "Real-time availability",
    d: "See actual appointment slots instead of calling around.",
    ui: /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-1.5"
    }, ["10:00", "11:30", "12:30", "2:00"].map((t, i) => /*#__PURE__*/React.createElement("span", {
      key: t,
      className: `rounded-lg px-2.5 py-1.5 text-[10px] font-medium ${i === 2 ? "bg-clay text-cream" : "bg-cream text-espresso/70 border border-espresso/10"}`
    }, t)))
  }, {
    n: "02",
    t: "Trusted professionals",
    d: "Discover highly rated salons and beauty experts, verified by real reviews.",
    ui: /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex -space-x-2"
    }, ["face1", "face2", "face3"].map((f, i) => /*#__PURE__*/React.createElement("img", {
      key: i,
      src: IMG[f],
      alt: "",
      className: "h-8 w-8 rounded-full border-2 border-paper object-cover",
      loading: "lazy"
    }))), /*#__PURE__*/React.createElement("span", {
      className: "rounded-full bg-cream px-3 py-1.5 text-[10px] font-semibold border border-espresso/10"
    }, "\u2605 4.9 \xB7 328 reviews"))
  }, {
    n: "03",
    t: "Easy booking",
    d: "Book whenever you want, from anywhere. Confirm in seconds, not phone calls.",
    ui: /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "rounded-full bg-clay px-4 py-2 text-[11px] font-semibold text-cream"
    }, "Book now"), /*#__PURE__*/React.createElement("span", {
      className: "rounded-full bg-cream px-3 py-1.5 text-[10px] font-medium border border-espresso/10"
    }, "\u2713 Confirmed in 12s"))
  }, {
    n: "04",
    t: "Everything in one place",
    d: "Hair, skin, nails, bridal, spa, tattoo and more — one app for all of it.",
    ui: /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-1.5"
    }, ["Hair", "Skin", "Nails", "Bridal", "Spa"].map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      className: "rounded-full bg-cream px-2.5 py-1 text-[10px] font-medium border border-espresso/10"
    }, t)))
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-parchment/50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-14 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:sticky lg:top-28"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Why Bocxy")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-5 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl"
  }, "Your beauty routine, ", /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "without the back-and-forth."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-5 max-w-sm text-[15px] leading-relaxed text-espresso/65"
  }, "No more calling around for slots. No more guessing who's good. Bocxy puts the best of Chennai's beauty scene in your pocket.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#salons",
    variant: "dark",
    className: "mt-8"
  }, "Start booking ", /*#__PURE__*/React.createElement(Icon.Arrow, {
    c: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-px overflow-hidden rounded-3xl border border-espresso/10 bg-espresso/10 sm:grid-cols-2"
  }, items.map((it, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: it.n,
    delay: i * 100,
    className: "bg-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex h-full flex-col p-8 transition-colors duration-300 hover:bg-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-sm italic text-clay"
  }, it.n), /*#__PURE__*/React.createElement("h3", {
    className: "mt-3 font-serif text-xl font-medium"
  }, it.t), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm leading-relaxed text-espresso/65"
  }, it.d), /*#__PURE__*/React.createElement("div", {
    className: "mt-6"
  }, it.ui)))))))));
}

/* ---------- 8. BOCCXY PARTNER ---------- */
function Partner() {
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
  const bars = [42, 58, 49, 70, 64, 88, 100];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const statusCls = {
    "Completed": "bg-espresso/10 text-espresso/60",
    "In progress": "bg-clay/15 text-clay-deep",
    "Confirmed": "bg-leaf/15 text-leaf",
    "Available": "border border-dashed border-espresso/25 text-taupe"
  };
  const features = [{
    t: "Manage your team",
    d: "Keep schedules and staff availability organized."
  }, {
    t: "Reduce no-shows",
    d: "Automated reminders help customers show up."
  }, {
    t: "Fill empty slots",
    d: "Make unused appointment capacity bookable."
  }, {
    t: "Understand your business",
    d: "Track bookings, customers, and revenue in real time."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "business",
    className: "scroll-mt-24 bg-espresso text-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid items-center gap-16 lg:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Bocxy Partner")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-5 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl"
  }, "Own a beauty business?", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "Turn every booking into growth."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-md text-[16px] leading-relaxed text-cream/70"
  }, "Bocxy Partner helps salons and spas manage bookings, staff, customers, and revenue \u2014 all from one place.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-9 flex flex-wrap gap-4"
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#download",
    variant: "clay"
  }, "Explore Bocxy Partner ", /*#__PURE__*/React.createElement(Icon.Arrow, {
    c: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
  })), /*#__PURE__*/React.createElement(Btn, {
    href: "#download",
    variant: "ghostlight"
  }, "I'm a salon owner \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2"
  }, features.map((f, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: f.t,
    delay: i * 100,
    className: "border-t border-cream/15 pt-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-serif text-sm italic text-clay"
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-semibold"
  }, f.t)), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-[13px] leading-relaxed text-cream/55"
  }, f.d))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl bg-paper p-6 text-espresso shadow-lift sm:p-8"
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
    className: "rounded-2xl border border-espresso/10 bg-cream p-3.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-medium uppercase tracking-wider text-taupe"
  }, k.l), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 font-serif text-xl font-semibold"
  }, k.v), /*#__PURE__*/React.createElement("div", {
    className: "mt-0.5 text-[10px] font-semibold text-leaf"
  }, k.d)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 rounded-2xl border border-espresso/10 bg-cream p-4"
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
    className: `w-full rounded-md transition-all duration-700 ${i === 6 ? "bg-clay" : "bg-espresso/15"}`,
    style: {
      height: `${b}%`
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] text-taupe"
  }, days[i]))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 rounded-2xl border border-espresso/10 bg-cream p-4"
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
    className: "flex items-center gap-3 rounded-xl bg-white px-3 py-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-10 text-[11px] font-semibold"
  }, r.time), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] font-semibold"
  }, r.name), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-taupe"
  }, r.service, " \xB7 ", r.staff)), /*#__PURE__*/React.createElement("span", {
    className: `rounded-full px-2.5 py-1 text-[9px] font-semibold ${statusCls[r.status]}`
  }, r.status)))))), /*#__PURE__*/React.createElement("div", {
    className: "animate-floaty absolute -left-4 -top-5 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-espresso shadow-lift sm:-left-8"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex h-7 w-7 items-center justify-center rounded-full bg-leaf/15"
  }, /*#__PURE__*/React.createElement(Icon.Check, {
    c: "h-4 w-4 text-leaf"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold"
  }, "Reminder sent"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-taupe"
  }, "Kavya M. \xB7 11:30 AM"))), /*#__PURE__*/React.createElement("div", {
    className: "animate-floaty2 absolute -bottom-5 -right-3 rounded-2xl bg-clay px-4 py-3 text-cream shadow-lift sm:-right-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] uppercase tracking-wider text-cream/70"
  }, "New booking"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-semibold"
  }, "Hair Spa \xB7 \u20B91,499")))))));
}

/* ---------- 9. ECOSYSTEM ---------- */
function Ecosystem() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "scroll-mt-24 bg-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "The ecosystem")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-5 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl"
  }, "More than bookings.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "A beauty ecosystem.")))), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 grid gap-px overflow-hidden rounded-3xl border border-espresso/10 bg-espresso/10 md:grid-cols-3 lg:grid-cols-5"
  }, ECOSYSTEM.map((e, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: e.name,
    delay: i * 80,
    className: "bg-paper"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-espresso hover:text-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: `flex h-10 w-10 items-center justify-center rounded-full border font-serif text-lg ${e.live ? "border-clay/40 bg-clay/10 text-clay" : "border-espresso/15 text-espresso/50 group-hover:border-cream/30 group-hover:text-cream/70"}`
  }, e.name.replace("Bocxy", "B")[0]), e.live ? /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-leaf"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1.5 w-1.5 rounded-full bg-leaf"
  }), "Live") : /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-semibold uppercase tracking-wider text-taupe"
  }, "Soon")), /*#__PURE__*/React.createElement("h3", {
    className: "mt-6 font-serif text-xl font-medium"
  }, e.name), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-[10px] font-semibold uppercase tracking-wider text-clay"
  }, e.tag), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-[13px] leading-relaxed text-espresso/60 transition-colors group-hover:text-cream/60"
  }, e.desc), /*#__PURE__*/React.createElement("span", {
    className: "mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-medium opacity-0 transition-all duration-300 group-hover:opacity-100"
  }, "Explore ", /*#__PURE__*/React.createElement(Icon.Arrow, {
    c: "h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
  }))))))));
}

/* ---------- 10. TESTIMONIALS ---------- */
function Testimonials() {
  const quotes = [{
    q: "I used to spend hours calling salons just to find an available slot. Bocxy makes it incredibly easy.",
    n: "Priya Ramesh",
    r: "Product Designer · Alwarpet",
    img: IMG.face1
  }, {
    q: "Managing staff and appointments became much easier once we started using Bocxy Partner.",
    n: "Karthik Selvaraj",
    r: "Owner, Mane Story · Anna Nagar",
    img: IMG.face2
  }, {
    q: "Booked my bridal trial in under a minute. The reminders meant I never missed a thing.",
    n: "Divya K.",
    r: "Bride-to-be · Mylapore",
    img: IMG.face4
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-sand/40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-14 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Loved in Chennai")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-5 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl"
  }, "Stories from", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "real people."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-5 text-[15px] leading-relaxed text-espresso/65"
  }, "Customers and business owners, finding their rhythm with Bocxy."))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-6 md:grid-cols-2"
  }, quotes.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t.n,
    delay: i * 120,
    className: i === 2 ? "md:col-span-2" : ""
  }, /*#__PURE__*/React.createElement("figure", {
    className: "flex h-full flex-col rounded-3xl border border-espresso/10 bg-paper p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-5xl leading-none text-clay"
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    className: "mt-2 flex-1 font-serif text-xl font-light leading-relaxed tracking-tight sm:text-2xl"
  }, t.q), /*#__PURE__*/React.createElement("figcaption", {
    className: "mt-7 flex items-center gap-3 border-t border-espresso/10 pt-5"
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
  }, [0, 1, 2, 3, 4].map(s => /*#__PURE__*/React.createElement(Icon.Star, {
    key: s,
    c: "h-3.5 w-3.5"
  }))))))))))));
}

/* ---------- 11. APP DOWNLOAD ---------- */
function AppDownload() {
  return /*#__PURE__*/React.createElement("section", {
    id: "download",
    className: "scroll-mt-24 bg-espresso text-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:px-10 lg:grid-cols-2 lg:py-32"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "The Bocxy app")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-5 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl"
  }, "Your next appointment", /*#__PURE__*/React.createElement("br", null), "is ", /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "a tap away."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-5 font-serif text-xl italic text-cream/70"
  }, "Discover. Book. Relax. Repeat.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-9 flex flex-wrap gap-4"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "group flex items-center gap-3 rounded-2xl border border-cream/25 px-5 py-3.5 transition-all duration-300 hover:border-cream hover:bg-cream/5"
  }, /*#__PURE__*/React.createElement(Icon.Apple, {
    c: "h-7 w-7"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-left leading-tight"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block text-[10px] uppercase tracking-wider text-cream/60"
  }, "Download on the"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-semibold"
  }, "App Store"))), /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "group flex items-center gap-3 rounded-2xl border border-cream/25 px-5 py-3.5 transition-all duration-300 hover:border-cream hover:bg-cream/5"
  }, /*#__PURE__*/React.createElement(Icon.Play, {
    c: "h-6 w-6"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-left leading-tight"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block text-[10px] uppercase tracking-wider text-cream/60"
  }, "Get it on"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-semibold"
  }, "Google Play"))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 400
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-8 flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl bg-white p-2.5"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://api.qrserver.com/v1/create-qr-code/?size=96x96&data=https://www.bocxy.com",
    alt: "QR code to download the Bocxy app",
    className: "h-20 w-20",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("p", {
    className: "max-w-[180px] text-xs leading-relaxed text-cream/55"
  }, "Scan with your phone camera to download the app instantly.")))), /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto h-[560px] w-full max-w-[440px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute left-0 top-8 w-[230px] rotate-[-6deg] sm:w-[250px]"
  }, /*#__PURE__*/React.createElement(PhoneFrame, null, /*#__PURE__*/React.createElement("div", {
    className: "flex h-[500px] flex-col text-espresso"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-6 pt-12 text-[10px] font-semibold"
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    className: "px-5 pt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-taupe"
  }, "Good evening,"), /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-lg font-medium"
  }, "Priya"), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex items-center gap-2 rounded-xl border border-espresso/10 bg-white px-3 py-2.5 text-[11px] text-taupe"
  }, /*#__PURE__*/React.createElement(Icon.Pin, {
    c: "h-3.5 w-3.5 text-clay"
  }), " Search salons, spas, services\u2026"), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex gap-1.5 overflow-hidden"
  }, ["Hair", "Skin", "Nails", "Spa"].map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: c,
    className: `rounded-full px-3 py-1.5 text-[10px] font-medium ${i === 0 ? "bg-espresso text-cream" : "bg-cream border border-espresso/10"}`
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex-1 space-y-2.5 overflow-hidden px-5"
  }, SALONS.slice(0, 3).map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    className: "flex items-center gap-3 rounded-2xl border border-espresso/10 bg-white p-2.5"
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
  }, s.loc, " \xB7 ", s.price), /*#__PURE__*/React.createElement("div", {
    className: "mt-0.5 flex items-center gap-1 text-[9px] font-semibold text-leaf"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1 w-1 rounded-full bg-leaf"
  }), s.next)), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-0.5 text-[10px] font-semibold"
  }, /*#__PURE__*/React.createElement(Icon.Star, {
    c: "h-3 w-3 text-clay"
  }), s.rating)))), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-espresso/10 bg-white px-5 py-3.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-around text-[9px] text-taupe"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-clay"
  }, "\u2302"), /*#__PURE__*/React.createElement("span", null, "\u2661"), /*#__PURE__*/React.createElement("span", null, "\uD83D\uDDD3"), /*#__PURE__*/React.createElement("span", null, "\uD83D\uDC64")))))), /*#__PURE__*/React.createElement("div", {
    className: "absolute right-0 top-24 w-[230px] rotate-[6deg] sm:w-[250px]"
  }, /*#__PURE__*/React.createElement(PhoneFrame, null, /*#__PURE__*/React.createElement("div", {
    className: "flex h-[500px] flex-col items-center justify-center text-espresso px-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex h-16 w-16 items-center justify-center rounded-full bg-leaf/15"
  }, /*#__PURE__*/React.createElement(Icon.Check, {
    c: "h-8 w-8 text-leaf"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 font-serif text-2xl font-medium"
  }, "You're booked!"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-xs text-taupe"
  }, "See you soon \u2728"), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 w-full rounded-2xl border border-espresso/10 bg-white p-4"
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
    className: "mt-3 space-y-1.5 border-t border-espresso/10 pt-3 text-[11px]"
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
    className: "mt-5 w-full rounded-full bg-espresso py-3 text-xs font-semibold text-cream"
  }, "Add to calendar"), /*#__PURE__*/React.createElement("button", {
    className: "mt-2 w-full rounded-full border border-espresso/15 py-3 text-xs font-medium"
  }, "View booking")))), /*#__PURE__*/React.createElement("div", {
    className: "animate-floaty absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs text-espresso shadow-lift"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1.5 w-1.5 rounded-full bg-leaf"
  }), " 3,200+ people booked this week"))));
}

/* ---------- 12. FINAL CTA ---------- */
function FinalCta() {
  return /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.finalCta,
    alt: "",
    className: "absolute inset-0 h-full w-full object-cover",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-espresso/70"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-espresso/30"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto flex max-w-4xl flex-col items-center px-6 py-32 text-center md:py-44"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "One more thing")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl"
  }, "Make time", /*#__PURE__*/React.createElement("br", null), "for ", /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "yourself."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-md text-[16px] leading-relaxed text-cream/80"
  }, "Find your next beauty experience with Bocxy \u2014 and leave the back-and-forth behind.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex flex-wrap justify-center gap-4"
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#salons",
    variant: "clay"
  }, "Book an Appointment ", /*#__PURE__*/React.createElement(Icon.Arrow, {
    c: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
  })), /*#__PURE__*/React.createElement(Btn, {
    href: "#explore",
    variant: "ghostlight"
  }, "Explore Bocxy")))));
}

/* ---------- 13. FOOTER ---------- */
function Footer() {
  const cols = [{
    h: "Discover",
    links: [{
      t: "Hair",
      h: "#explore"
    }, {
      t: "Skin",
      h: "#explore"
    }, {
      t: "Nails",
      h: "#explore"
    }, {
      t: "Bridal",
      h: "#explore"
    }, {
      t: "Spa",
      h: "#explore"
    }, {
      t: "Tattoo",
      h: "#explore"
    }]
  }, {
    h: "For Businesses",
    links: [{
      t: "Bocxy Partner",
      h: "#business"
    }, {
      t: "Business Solutions",
      h: "#business"
    }, {
      t: "Partner With Us",
      h: "#business"
    }]
  }, {
    h: "Company",
    links: [{
      t: "About",
      h: "#about"
    }, {
      t: "How it works",
      h: "#how"
    }, {
      t: "Salons",
      h: "#salons"
    }]
  }, {
    h: "Ecosystem",
    links: [{
      t: "Download app",
      h: "#download"
    }, {
      t: "Explore",
      h: "#explore"
    }, {
      t: "Book now",
      h: "#salons"
    }]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "bg-espresso text-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-7xl px-6 pb-10 pt-20 md:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-12 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4"
  }, /*#__PURE__*/React.createElement(Logo, {
    light: true
  }), /*#__PURE__*/React.createElement("p", {
    className: "mt-5 max-w-xs text-sm leading-relaxed text-cream/55"
  }, "Chennai's beauty and wellness marketplace. Discover, book, and get pampered \u2014 effortlessly."), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex items-center gap-2 text-xs text-cream/60"
  }, /*#__PURE__*/React.createElement(Icon.Pin, {
    c: "h-4 w-4 text-clay"
  }), " Chennai, India"), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex gap-3"
  }, [{
    i: "Instagram",
    c: Icon.Instagram
  }, {
    i: "LinkedIn",
    c: Icon.LinkedIn
  }, {
    i: "YouTube",
    c: Icon.YouTube
  }].map(s => /*#__PURE__*/React.createElement("a", {
    key: s.i,
    href: "#top",
    "aria-label": s.i,
    className: "flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-all duration-300 hover:border-clay hover:bg-clay hover:text-cream"
  }, /*#__PURE__*/React.createElement(s.c, {
    c: "h-4 w-4"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8"
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/40"
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    className: "mt-5 space-y-3"
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.t
  }, /*#__PURE__*/React.createElement("a", {
    href: l.h,
    className: "text-sm text-cream/70 transition-colors hover:text-cream"
  }, l.t)))))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-16 border-t border-cream/10 pt-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-[clamp(64px,14vw,160px)] font-medium leading-none tracking-tight text-cream/[0.06] select-none"
  }, "bocxy"), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-cream/40"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Bocxy. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-6"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "transition-colors hover:text-cream/70"
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "transition-colors hover:text-cream/70"
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "transition-colors hover:text-cream/70"
  }, "Cookies"))))));
}

/* ---------- mobile sticky CTA ---------- */
function MobileCta() {
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-x-0 bottom-0 z-40 border-t border-espresso/10 bg-cream/92 px-4 pt-3 backdrop-blur-xl md:hidden",
    style: {
      paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#salons",
    className: "btn-shine flex w-full items-center justify-center gap-2 rounded-full bg-clay py-3.5 text-sm font-semibold text-cream shadow-[0_10px_30px_-12px_rgba(192,90,51,0.55)]"
  }, "Book an Appointment \u2192"));
}

/* ---------- root ---------- */
function BocxySite() {
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-cream font-sans text-espresso"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#how",
    className: "skip-link"
  }, "Skip to content"), /*#__PURE__*/React.createElement(ScrollProgress, null), /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", {
    id: "main"
  }, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(TrustStrip, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(Explore, null), /*#__PURE__*/React.createElement(Nearby, null), /*#__PURE__*/React.createElement(WhyBocxy, null), /*#__PURE__*/React.createElement(Partner, null), /*#__PURE__*/React.createElement(Ecosystem, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(AppDownload, null), /*#__PURE__*/React.createElement(FinalCta, null)), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(MobileCta, null));
}
document.getElementById("root").dataset.mounted = "true";
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(BocxySite, null));