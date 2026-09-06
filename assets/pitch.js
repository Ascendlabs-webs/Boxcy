/* Precompiled from pitch.html — do not edit by hand. Edit the source inside pitch.html and re-run: node scripts/build.js */
const {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback
} = React;

/* ============================================================
   REAL BOCCXY CONTENT — extracted from bocxy.com audit
   No fabricated statistics, names, or claims.
   ============================================================ */
const CONTACT = {
  phoneDisplay: "+91 97878 97873",
  phoneHref: "tel:+919787897873",
  phones: [{
    display: "+91 97878 97873",
    href: "tel:+919787897873"
  }, {
    display: "+91 90908 91908",
    href: "tel:+919090891908"
  }, {
    display: "+91 86969 83939",
    href: "tel:+918696983939"
  }],
  whatsapp: "https://api.whatsapp.com/send/?phone=+919787897873",
  email: "contact@bocxy.com",
  supportEmail: "support@Bocxy.com",
  address: "3rd Floor, Bhattad Towers, 18, Westcott Rd, Indira Garden, Royapettah, Chennai, Tamil Nadu 600014",
  mapLink: "https://maps.app.goo.gl/bNnktih6SJEu7wB8A",
  footerTagline: "BOCXY POWERS YOUR IDEATION INTO A REAL PRODUCT!",
  social: {
    facebook: "https://www.facebook.com/people/Bocxyofficial/100064168185477/",
    instagram: "https://www.instagram.com/bocxyofficial/",
    linkedin: "https://in.linkedin.com/company/bocxyofficial"
  }
};
const TEAM = [{
  name: "Raj Mariappan",
  role: "Chairman & Managing Director",
  company: "Bocxy Group",
  img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
}];
const TESTIMONIALS = [{
  q: "Bocxy has transformed how we operate. The AI insights alone have helped us personalize treatments in ways we never thought possible. Our patient engagement and retention have never been higher!",
  n: "Dr. Anya Sharma",
  r: "Med Spa Owner",
  img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop"
}, {
  q: "The billing software has simplified our entire process. Managing patient invoices and payments is now faster and more accurate. My staff saves hours every week!",
  n: "Dr. Anderson",
  r: "Dermatology Clinic",
  img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=300&auto=format&fit=crop"
}, {
  q: "Our salon billing used to be messy. Now with this software, tracking services, generating bills, and managing clients has become so easy. Totally worth it!",
  n: "Anita Kapoor",
  r: "Salon Owner",
  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop"
}];
const WHY_BOCCXY = [{
  t: "Saves hours every week with automation",
  d: "Routine tasks handled automatically — from appointment reminders to invoices — so your team focuses on clients, not admin."
}, {
  t: "Improves customer satisfaction & loyalty",
  d: "Personalised communication, loyalty programs and effortless booking experiences keep your clients coming back."
}, {
  t: "Minimises errors in bookings and payments",
  d: "One source of truth eliminates the double-bookings, missed slots and reconciliation headaches that cost Indian businesses real money."
}, {
  t: "Actionable insights with real-time reports",
  d: "Revenue, occupancy, retention and staff productivity — at a glance, on any device, the moment you need them."
}, {
  t: "Scales as your business grows",
  d: "Single chair to multi-location enterprise — Bocxy grows with you, not against you."
}];
const BLOG_POSTS = [{
  kicker: "Insight",
  title: "Why Clinics Need Smart Billing Software",
  desc: "Discover how dermatology and specialty clinics are reducing errors and saving time with automated billing solutions.",
  to: "#/journal",
  comments: [{
    n: "Dr. Mehta",
    t: "This article highlights the exact pain points I face in my clinic. Very useful insights!"
  }, {
    n: "Anjali",
    t: "I manage billing for a clinic, and automation has saved us hours every day."
  }]
}, {
  kicker: "Insight",
  title: "Simplifying Salon Management with Billing Tools",
  desc: "From tracking appointments to easy invoice generation, see how salons benefit from integrated billing systems.",
  to: "#/journal",
  comments: [{
    n: "Pooja",
    t: "I run a salon, and billing used to be so messy. Now with software, everything is smooth."
  }, {
    n: "Ravi",
    t: "Great explanation. Billing tools are a must-have for salons now."
  }]
}, {
  kicker: "Whitepaper",
  title: "The Future of Aesthetic Clinics: Why Digital Management Software is a Game-Changer",
  desc: "The aesthetic industry in India is expanding rapidly — and digital clinic management software is reshaping how clinics compete and grow.",
  to: "#/services/future",
  comments: []
}];
const TECH_STACK = [{
  group: "Frontend",
  items: ["HTML5", "CSS3 / SCSS", "JavaScript", "Angular", "React"]
}, {
  group: "Backend",
  items: ["Java / Spring Boot", "Python / Django", "Node.js", "MySQL", "PostgreSQL"]
}, {
  group: "Cloud & DevOps",
  items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
}, {
  group: "Tools",
  items: ["Git / GitHub", "GitLab", "Jenkins", "VS Code", "Postman"]
}];
const FAQS = [{
  q: "What does Bocxy actually do?",
  a: "Bocxy is a smart digital platform designed for salons, spas, aesthetic clinics, dermatology clinics, med spas, and wellness businesses. It brings appointments, billing, customer records, marketing, staff and payroll into one secure place."
}, {
  q: "Does Bocxy offer CRM software?",
  a: "Yes. Bocxy provides a built-in customer relationship management system that captures every client interaction, service history and preference — so you can personalise communication, send targeted campaigns, and build lasting loyalty."
}, {
  q: "Can I manage staff and payroll using Bocxy?",
  a: "Absolutely. Bocxy offers HR and payroll software to simplify employee scheduling, attendance, leave tracking, automated salary processing, and tax compliance."
}, {
  q: "Is Bocxy suitable for aesthetic and wellness clinics?",
  a: "Yes. Bocxy has dedicated aesthetic clinic software and dermatology clinic software with EMR, treatment templates, before/after photo tracking and medical-grade image management."
}, {
  q: "How can Bocxy improve customer experience?",
  a: "With automated booking, 24/7 online self-service, digital payments, loyalty programs, automated reminders, and personalised communication that keeps your business top-of-mind."
}, {
  q: "Is Bocxy easy to use for small businesses?",
  a: "Yes. Bocxy is built with a simple and localised interface tailored for Indian businesses. If you can use a smartphone, you can use Bocxy."
}, {
  q: "Does Bocxy support online payments and digital receipts?",
  a: "Yes. Bocxy supports secure digital transactions, invoices, and receipts through integrated POS and online payment processing."
}, {
  q: "Can Bocxy help me grow my business revenue?",
  a: "Definitely. By automating bookings, improving customer retention, optimising staff productivity, and giving you the data to make better decisions."
}];
const FOOTER_PRODUCTS = [{
  name: "Aesthetic Clinic Software",
  href: "#/products/clinic"
}, {
  name: "Salon & Spa Software",
  href: "#/products/salon"
}, {
  name: "Med Spa Software",
  href: "#/products/medspa"
}, {
  name: "Dermatology Clinic Software",
  href: "#/products/derm"
}, {
  name: "Bocxy CRM",
  href: "#/products/crm"
}, {
  name: "HR & Payroll Software",
  href: "#/products/hr"
}];
const FOOTER_SOLUTIONS = [{
  name: "Integrated Management System (IMS)",
  href: "#/services/ims"
}, {
  name: "Enterprise Resource Planning (ERP)",
  href: "#/services/erp"
}, {
  name: "Customised Business Solutions",
  href: "#/services/custom"
}, {
  name: "Future of Aesthetic Clinics",
  href: "#/services/future"
}];
const RESOURCES = [{
  kicker: "Insight",
  title: "The Future of Aesthetic Clinics: Why Digital Management Software is a Game-Changer",
  read: "6 min",
  to: "#/journal"
}, {
  kicker: "Guide",
  title: "Choosing the right HR software for an Indian salon or spa business",
  read: "5 min",
  to: "#/journal"
}, {
  kicker: "Product",
  title: "Inside Bocxy's Integrated Management System — what true operational synergy looks like",
  read: "7 min",
  to: "#/journal"
}, {
  kicker: "Customer story",
  title: "How an aesthetic clinic reduced no-shows by replacing spreadsheets with smart reminders",
  read: "4 min",
  to: "#/case-study"
}];
const TOURS = {
  bookings: {
    title: "Smart booking & scheduling",
    body: "Manage single, multi-session and walk-in appointments across practitioners and rooms. Drag-and-drop calendar, automated reminders, and 24/7 online booking that captures clients after hours."
  },
  patient: {
    title: "EMR & digital patient records",
    body: "Securely store treatment history, before/after photos, consent forms and notes. Dermatology-specific templates and medical-grade image management included."
  },
  pos: {
    title: "Billing, POS & payments",
    body: "UPI, cards and digital receipts in one flow. Automated invoicing, integrated payments, and detailed financial reporting by location, service or staff member."
  },
  marketing: {
    title: "CRM & marketing automation",
    body: "Centralized client profiles, segmented campaigns, automated birthday & re-engagement messages, loyalty programs and gift cards — all from one console."
  },
  hr: {
    title: "HR, attendance & payroll",
    body: "Rosters, attendance, leave, automated salary processing, TDS and statutory compliance. Employee self-service portal built for Indian businesses."
  },
  reports: {
    title: "Reports & insights",
    body: "Real-time dashboards on revenue, occupancy, retention, staff productivity, popular services and inventory — drill down to any dimension in seconds."
  }
};
const SECURITY = [{
  t: "Encrypted in transit",
  d: "TLS 1.2+ on every connection between you, your clients and Bocxy."
}, {
  t: "Encrypted at rest",
  d: "All data is stored with state-of-the-art encryption in our cloud infrastructure."
}, {
  t: "Granular access controls",
  d: "Role-based permissions so each team member sees only what they need."
}, {
  t: "Regular backups",
  d: "Automated, encrypted backups with tested recovery procedures."
}, {
  t: "Audit trails",
  d: "Every change to patient, financial and inventory records is logged."
}, {
  t: "Localised compliance",
  d: "Built around Indian data and statutory requirements."
}];
const INTEGRATIONS = [{
  t: "Razorpay",
  d: "Payments"
}, {
  t: "Stripe",
  d: "Payments"
}, {
  t: "PayU",
  d: "Payments"
}, {
  t: "Google Calendar",
  d: "Calendars"
}, {
  t: "WhatsApp Business",
  d: "Messaging"
}, {
  t: "SMS Gateway",
  d: "Messaging"
}, {
  t: "Mailchimp",
  d: "Email"
}, {
  t: "Tally",
  d: "Accounting"
}, {
  t: "Zoho Books",
  d: "Accounting"
}, {
  t: "Shiprocket",
  d: "Logistics"
}, {
  t: "Meta Pixel",
  d: "Marketing"
}, {
  t: "Google Analytics",
  d: "Analytics"
}];
const CASE_STUDY = {
  business: "A growing aesthetic clinic in Chennai",
  challenge: "Three practitioners, one front-desk manager, paper appointment books and a spreadsheet for inventory. Frequent double-bookings, missed client follow-ups, and an end-of-month reconciliation that took two days.",
  approach: "Replaced paper + spreadsheets with Bocxy Aesthetic Clinic Software. Migrated patient records, set up automated SMS reminders, configured package-based treatment tracking, and connected the in-clinic POS.",
  outcome: ["Patient records unified across all practitioners in one secure EMR", "Automated reminders reduced no-shows dramatically", "End-of-month reconciliation takes hours, not days", "Owner now has real-time visibility from any device"]
};
const PRODUCT_FAQS = {
  clinic: [{
    q: "What is your clinic software?",
    a: "Bocxy's clinic software is an all-in-one management system designed to help clinics, med spas, and dermatology practices streamline their operations. It typically includes features for scheduling, patient records, billing, marketing, and inventory management."
  }, {
    q: "How can Bocxy improve my clinic's efficiency?",
    a: "Bocxy automates many manual tasks, such as appointment reminders, invoicing, and patient communication. This frees up your staff to focus on patient care and other high-value activities, leading to a more efficient and profitable practice."
  }, {
    q: "Is my patient data secure?",
    a: "Yes. Bocxy uses advanced security protocols to keep your data safe at all times."
  }, {
    q: "Can I integrate Bocxy with other tools I use?",
    a: "Bocxy is designed to be a comprehensive, all-in-one solution, but we also offer integrations with popular tools and services to ensure a seamless workflow. Please contact our support team for more details on specific integrations."
  }, {
    q: "Can I manage multiple clinic locations?",
    a: "Absolutely — you can track, manage, and report for multiple branches from one dashboard."
  }, {
    q: "Do I need technical skills to use it?",
    a: "Not at all. Bocxy is built for non-technical users with an easy, mobile-friendly interface."
  }],
  salon: [{
    q: "What is the difference between a salon booking system and salon booking software?",
    a: "The terms are often used interchangeably. A salon booking software typically refers to the full-featured desktop or cloud-based application, while a salon booking system can be a more general term for the functionality that handles appointments."
  }, {
    q: "How can a salon booking system help me reduce no-shows?",
    a: "By using automated appointment reminders via email and SMS, a salon booking system significantly reduces the number of missed appointments, protecting your revenue and keeping your schedule full."
  }, {
    q: "Is Bocxy a good salon booking app for small businesses?",
    a: "Yes. Bocxy's scalable features and intuitive design make it an ideal salon booking app for small salons and spas. It provides all the necessary tools for growth without being overly complex or expensive."
  }],
  medspa: [{
    q: "How does Bocxy's med spa software differ from general salon spa software?",
    a: "It includes specialized EMR, treatment tracking, and compliance features crucial for medical spas."
  }, {
    q: "Is Bocxy considered the best aesthetic clinic software for client retention?",
    a: "Yes. Our integrated CRM boosts satisfaction and retention with automation and loyalty tools."
  }, {
    q: "Does the software handle both services and retail sales?",
    a: "Absolutely. Includes inventory control and POS for both services and retail products."
  }, {
    q: "What specific scheduling features are offered?",
    a: "24/7 online booking, multi-practitioner/location management, reminders, customizable calendars, client self-service."
  }, {
    q: "Does Bocxy include medical spa charting software?",
    a: "Yes, with detailed and compliant documentation, photo tracking, and customizable templates."
  }],
  derm: [{
    q: "How is Bocxy different from other clinic management software?",
    a: "Bocxy offers a specialized EMR and strong compliance focus, covering both medical and cosmetic sides of dermatology."
  }, {
    q: "How does Bocxy's CRM improve patient engagement?",
    a: "Our CRM enables patient profiles, personalized communication, reminders, and follow-ups, reducing no-shows and building loyalty."
  }, {
    q: "How does Bocxy support complex treatment plans?",
    a: "Bocxy's package/session-based treatment management simplifies multi-session treatments, tracking visits, billing, and progress automatically."
  }, {
    q: "Can I use Bocxy for both medical and cosmetic patients?",
    a: "Yes. Bocxy's hybrid system lets you manage all patient types in one platform."
  }, {
    q: "Is Bocxy the best software for hybrid dermatology practices?",
    a: "Yes. Bocxy uniquely combines medical rigor with aesthetic flexibility, making it the best all-in-one dermatology clinic software."
  }],
  crm: [{
    q: "What is Bocxy's CRM software and who is it designed for?",
    a: "Bocxy's CRM software is a comprehensive solution designed for salons, spas, dermatology clinics, med spas, and other wellness centers. It helps you manage all aspects of your client relationships, from initial contact and booking to ongoing engagement and loyalty."
  }, {
    q: "How does Bocxy's CRM help improve client loyalty and retention?",
    a: "Our CRM software is built to foster strong client relationships. It allows you to create detailed client profiles, track their service history and preferences, and send personalized communications like birthday wishes, re-booking reminders, and post-service follow-ups."
  }, {
    q: "Can Bocxy's CRM help me with marketing my services?",
    a: "Absolutely! Bocxy's CRM software includes robust marketing & loyalty tools. You can launch automated email and SMS campaigns, promote special offers to segmented client groups, and manage client loyalty programs directly from the platform."
  }, {
    q: "Is the client data within Bocxy's CRM secure and compliant?",
    a: "Yes, data security and compliance are paramount. Bocxy's CRM software operates within our secure, all-in-one platform, designed with state-of-the-art encryption for data protection."
  }, {
    q: "How does the CRM integrate with Bocxy's salon booking system?",
    a: "Bocxy's CRM is seamlessly integrated with our booking system. When a client books, their details are automatically updated in their CRM profile — one unified view of every interaction."
  }, {
    q: "Can I access client information from the CRM on my mobile device?",
    a: "Yes. Bocxy provides a dedicated salon booking app and mobile access for on-the-go management, so you can view client details, track performance, and manage aspects of your CRM directly from your smartphone or tablet."
  }],
  hr: [{
    q: "What is the difference between HR software and HR management platforms?",
    a: "The terms are often used interchangeably. HR management platforms typically refer to a more comprehensive, all-in-one system that includes multiple modules, while HR software can sometimes refer to a single-function tool (e.g., just for payroll)."
  }, {
    q: "How does HR payroll software ensure compliance?",
    a: "Our HR payroll software is regularly updated with the latest tax regulations and labor laws. It automates calculations and filings, significantly reducing the risk of errors and ensuring you stay compliant."
  }, {
    q: "Can small businesses benefit from employee management software?",
    a: "Absolutely. Bocxy is designed to be affordable and scalable for small and medium-sized businesses. Even small teams benefit by streamlining processes, improving communication, and creating a more professional and organized workplace from the start."
  }, {
    q: "Can Bocxy handle both HR and payroll tasks?",
    a: "Yes. Bocxy combines HR management with payroll processing for an all-in-one solution."
  }, {
    q: "Do I need technical skills to use Bocxy?",
    a: "No. Bocxy is intuitive and easy to use — if you can use a smartphone, you can use Bocxy."
  }],
  ims: [{
    q: "What is the primary benefit of using an Integrated Management System like Bocxy?",
    a: "Achieving operational excellence through complete business unification. Bocxy's IMS eliminates data silos, automates workflows, provides centralized data management, and offers holistic insights, leading to significant improvements in efficiency, accuracy, and profitability."
  }, {
    q: "How does Bocxy's IMS help with data security and compliance?",
    a: "By centralizing data on a single, secure platform, Bocxy enhances your data protection strategy. Our unified business platform is built with state-of-the-art encryption and features designed to help you meet relevant industry regulations, ensuring consistent compliance."
  }, {
    q: "Can Bocxy's IMS be customized for my specific business type?",
    a: "Yes. Bocxy is highly customizable. While our core IMS provides a comprehensive framework, it's designed with the flexibility to tailor workflows, services, and branding to the unique needs of different businesses — salon, spa, dermatology clinic, or med spa."
  }, {
    q: "Will implementing an IMS be a complicated process?",
    a: "Bocxy strives for a seamless implementation. Our team works with you to ensure a smooth transition, leveraging your existing data and workflows. The goal of our all-in-one business software is to simplify, not complicate, your operations."
  }],
  erp: [{
    q: "What is the main difference between an IMS and an ERP system, and which does Bocxy offer?",
    a: "Bocxy offers a robust Integrated Management System with strong ERP capabilities tailored for clinics, salons, and spas. While IMS focuses on streamlining cross-functional processes, ERP systems typically integrate all core business functions like finance, HR, and supply chain management. Bocxy provides ERP solutions that deliver the best of both worlds."
  }, {
    q: "How does Bocxy's ERP support financial management?",
    a: "Our ERP solution offers comprehensive financial tools, including integrated accounting, expense tracking, and robust reporting. You can monitor revenue, expenditures, payroll, and profitability in real-time, ensuring accurate financial management and compliance."
  }, {
    q: "Can Bocxy's ERP system help with managing multiple locations?",
    a: "Yes. Bocxy's all-in-one business management software is designed for scalability and multi-location management. Our ERP solution allows you to centralize operations, financial reporting, and client data across all your branches."
  }, {
    q: "Is data security a priority with Bocxy's ERP?",
    a: "Absolutely. Data security is fundamental to Bocxy's ERP software. Our ERP platform is built with state-of-the-art encryption and strict access controls to protect all sensitive business and client data."
  }],
  custom: [{
    q: "What types of businesses can benefit from Bocxy's customised business solutions?",
    a: "Bocxy provides customised business solutions for a wide range of organizations, from small local businesses to comprehensive custom enterprise software for larger, multi-location operations. If your business has unique processes or finds off-the-shelf software restrictive, a custom solution can be highly beneficial."
  }, {
    q: "How does Bocxy ensure our specific needs are met?",
    a: "As a dedicated custom software company, Bocxy employs a highly collaborative discovery and development process. We work closely with you through workshops and detailed consultations to deeply understand your workflows and pain points, ensuring the final custom business management software precisely matches your unique requirements."
  }, {
    q: "Is custom software more expensive than off-the-shelf options?",
    a: "While the upfront investment for custom software can sometimes be higher, it often proves more cost-effective in the long run. You avoid recurring licensing fees for unused features, costly integrations, and constant workarounds. Bocxy's solutions provide a superior ROI."
  }, {
    q: "What kind of support does Bocxy offer after delivering custom software?",
    a: "Bocxy offers comprehensive post-launch support. We provide ongoing maintenance, updates, and dedicated technical assistance to ensure your custom business management software continues to perform optimally and evolves with your business needs."
  }]
};
const CAREERS = [{
  t: "Build software that matters",
  d: "Every feature you ship helps real Indian businesses serve their clients better."
}, {
  t: "Intrapreneurial culture",
  d: "We perceive our client products as our own and proactively come up with relevant suggestions in the development lifecycle."
}, {
  t: "100+ products, diverse industries",
  d: "Cross-domain exposure across beauty, wellness, healthcare, retail and more."
}, {
  t: "Young team, real ownership",
  d: "A young, intrapreneurial team where every person owns outcomes, not just tasks."
}];

/* ============================================================
   DESIGN SYSTEM
   ============================================================ */
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
  light = false,
  mono = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] ${light ? "text-bone/70" : "text-taupe"}`
  }, /*#__PURE__*/React.createElement("span", {
    className: `h-px w-8 ${light ? "bg-bone/40" : "bg-clay"}`
  }), /*#__PURE__*/React.createElement("span", {
    className: mono ? "font-mono" : ""
  }, children));
}
function Btn({
  children,
  variant = "clay",
  className = "",
  href = "#",
  onClick,
  as = "a"
}) {
  const Tag = as;
  const base = "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay/60 active:scale-[0.98]";
  const variants = {
    clay: "bg-clay text-paper hover:bg-rust hover:shadow-[0_12px_32px_-12px_rgba(181,86,47,0.6)]",
    dark: "bg-ink text-paper hover:bg-charcoal",
    cream: "bg-bone text-ink hover:bg-cream border border-ink/10",
    outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-paper",
    outlineLight: "border border-paper/30 text-paper hover:bg-paper hover:text-ink",
    ghost: "text-ink/70 hover:text-ink",
    ghostLight: "text-paper/70 hover:text-paper"
  };
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    className: `${base} ${variants[variant]} ${className}`
  }, children);
}
function Arrow({
  className = "h-4 w-4"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function Chevron({
  className = "h-4 w-4",
  flip = false
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: `${className} ${flip ? "-scale-x-100" : ""}`
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function Logo({
  light = false,
  size = "md"
}) {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-[32px]"
  };
  return /*#__PURE__*/React.createElement("a", {
    href: "#/",
    className: "flex items-center gap-2 select-none",
    "aria-label": "Bocxy home"
  }, /*#__PURE__*/React.createElement("span", {
    className: `font-serif font-medium tracking-tighter ${sizes[size]} ${light ? "text-paper" : "text-ink"}`
  }, "bocxy"), /*#__PURE__*/React.createElement("span", {
    className: "mt-1 h-1.5 w-1.5 rounded-full bg-clay"
  }));
}

/* ============================================================
   ROUTER
   ============================================================ */
function useRoute() {
  const [path, setPath] = useState(window.location.hash.replace(/^#/, "") || "/");
  useEffect(() => {
    const onChange = () => {
      const p = window.location.hash.replace(/^#/, "") || "/";
      setPath(p);
      window.scrollTo({
        top: 0,
        behavior: "instant"
      });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  const nav = useCallback(to => {
    window.location.hash = to;
  }, []);
  return [path, nav];
}

/* ============================================================
   NAV
   ============================================================ */
function MegaMenu() {
  return /*#__PURE__*/React.createElement("div", {
    className: "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid w-[860px] grid-cols-3 overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-span-1 border-r border-ink/10 bg-bone/60 p-6"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "For beauty & wellness"), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 space-y-1"
  }, [{
    n: "Aesthetic Clinic",
    d: "EMR · EMR · Billing · Appointments"
  }, {
    n: "Salon & Spa",
    d: "Bookings · Scheduling · CRM"
  }, {
    n: "Med Spa",
    d: "EMR · Memberships · Packages"
  }, {
    n: "Dermatology Clinic",
    d: "Charts · Rx · Imaging"
  }].map(p => /*#__PURE__*/React.createElement("a", {
    key: p.n,
    href: "#/products",
    className: "group block rounded-lg p-3 transition-colors hover:bg-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold text-ink"
  }, p.n), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-taupe"
  }, p.d))))), /*#__PURE__*/React.createElement("div", {
    className: "col-span-1 border-r border-ink/10 bg-bone/40 p-6"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "For business operations"), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 space-y-1"
  }, [{
    n: "Bocxy CRM",
    d: "Customers · Loyalty · Marketing"
  }, {
    n: "HR & Payroll",
    d: "Attendance · Salary · Compliance"
  }, {
    n: "Integrated Management System",
    d: "All systems, one platform"
  }, {
    n: "Enterprise Resource Planning",
    d: "Finance · Operations · Reporting"
  }, {
    n: "Customised Business Solutions",
    d: "Bespoke for your workflow"
  }].map(p => /*#__PURE__*/React.createElement("a", {
    key: p.n,
    href: "#/services",
    className: "group block rounded-lg p-3 transition-colors hover:bg-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold text-ink"
  }, p.n), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-taupe"
  }, p.d))))), /*#__PURE__*/React.createElement("div", {
    className: "col-span-1 p-6"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Why teams choose Bocxy"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 font-serif text-lg italic leading-snug text-ink/75"
  }, "\"Bocxy ensures your operations run smoothly, efficiently, and with complete reliability.\""), /*#__PURE__*/React.createElement("a", {
    href: "#/about",
    className: "mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-clay"
  }, "About Bocxy ", /*#__PURE__*/React.createElement(Arrow, {
    className: "h-3.5 w-3.5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 rounded-xl bg-ink p-4 text-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-wider text-clay"
  }, "Talk to us"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 font-serif text-base"
  }, "Book a free demo"), /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    className: "mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-bone/80 hover:text-bone"
  }, "Get started ", /*#__PURE__*/React.createElement(Arrow, {
    className: "h-3.5 w-3.5"
  }))))));
}
function Navbar({
  route
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
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
    setSolutionsOpen(false);
  }, [route]);
  const links = [{
    label: "Products",
    hasMenu: "products"
  }, {
    label: "Solutions",
    hasMenu: "solutions"
  }, {
    label: "Why Bocxy",
    to: "#why"
  }, {
    label: "Resources",
    to: "#resources"
  }, {
    label: "About",
    to: "#/about"
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || route !== "/" ? "bg-paper/90 backdrop-blur-xl shadow-[0_1px_0_rgba(15,14,12,0.07)]" : "bg-transparent"}`
  }, /*#__PURE__*/React.createElement("nav", {
    className: "mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-6 md:px-10",
    "aria-label": "Main navigation"
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("div", {
    className: "hidden items-center gap-7 lg:flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative",
    onMouseEnter: () => {
      setProductsOpen(true);
      setSolutionsOpen(false);
    },
    onMouseLeave: () => setProductsOpen(false)
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/products",
    className: "navline text-sm text-ink/75 hover:text-ink transition-colors inline-flex items-center gap-1"
  }, "Products", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-3 w-3 opacity-60"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    strokeLinecap: "round"
  }))), productsOpen && /*#__PURE__*/React.createElement("div", {
    className: "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid w-[560px] grid-cols-2 overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-span-1 border-r border-ink/10 bg-bone/60 p-5"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "For beauty & wellness"), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 space-y-1"
  }, [{
    n: "Aesthetic Clinic",
    to: "#/products/clinic"
  }, {
    n: "Salon & Spa",
    to: "#/products/salon"
  }, {
    n: "Med Spa",
    to: "#/products/medspa"
  }, {
    n: "Dermatology Clinic",
    to: "#/products/derm"
  }].map(p => /*#__PURE__*/React.createElement("a", {
    key: p.n,
    href: p.to,
    className: "block rounded-lg p-2.5 text-sm text-ink/80 transition-colors hover:bg-paper hover:text-ink"
  }, p.n)))), /*#__PURE__*/React.createElement("div", {
    className: "col-span-1 p-5"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "For business operations"), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 space-y-1"
  }, [{
    n: "Bocxy CRM",
    to: "#/products/crm"
  }, {
    n: "HR & Payroll",
    to: "#/products/hr"
  }].map(p => /*#__PURE__*/React.createElement("a", {
    key: p.n,
    href: p.to,
    className: "block rounded-lg p-2.5 text-sm text-ink/80 transition-colors hover:bg-paper hover:text-ink"
  }, p.n))))))), /*#__PURE__*/React.createElement("div", {
    className: "relative",
    onMouseEnter: () => {
      setSolutionsOpen(true);
      setProductsOpen(false);
    },
    onMouseLeave: () => setSolutionsOpen(false)
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/services",
    className: "navline text-sm text-ink/75 hover:text-ink transition-colors inline-flex items-center gap-1"
  }, "Solutions", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-3 w-3 opacity-60"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    strokeLinecap: "round"
  }))), solutionsOpen && /*#__PURE__*/React.createElement("div", {
    className: "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[420px] overflow-hidden rounded-2xl border border-ink/10 bg-paper p-5 shadow-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, [{
    n: "Integrated Management System",
    d: "All systems, one platform",
    to: "#/services/ims"
  }, {
    n: "Enterprise Resource Planning",
    d: "Finance, operations, reporting",
    to: "#/services/erp"
  }, {
    n: "Customised Business Solutions",
    d: "Bespoke for your workflow",
    to: "#/services/custom"
  }, {
    n: "Future of Aesthetic Clinics",
    d: "Our R&D direction",
    to: "#/services/future"
  }].map(p => /*#__PURE__*/React.createElement("a", {
    key: p.n,
    href: p.to,
    className: "block rounded-lg p-3 transition-colors hover:bg-bone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold text-ink"
  }, p.n), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-taupe"
  }, p.d))))))), /*#__PURE__*/React.createElement("a", {
    href: "#why",
    className: "navline text-sm text-ink/75 hover:text-ink transition-colors"
  }, "Why Bocxy"), /*#__PURE__*/React.createElement("a", {
    href: "#resources",
    className: "navline text-sm text-ink/75 hover:text-ink transition-colors"
  }, "Resources"), /*#__PURE__*/React.createElement("a", {
    href: "#/about",
    className: "navline text-sm text-ink/75 hover:text-ink transition-colors"
  }, "About")), /*#__PURE__*/React.createElement("div", {
    className: "hidden items-center gap-3 lg:flex"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    className: "text-sm font-medium text-ink/75 hover:text-ink transition-colors"
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    className: "inline-flex items-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-paper"
  }, "Book a Free Demo"), /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    className: "group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-all duration-300 hover:bg-charcoal hover:shadow-lift"
  }, "Start Free Trial", /*#__PURE__*/React.createElement(Arrow, {
    className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
  }))), /*#__PURE__*/React.createElement("button", {
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
    className: "flex flex-col"
  }, ["Products", "Solutions", "Why Bocxy", "Resources", "About"].map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: l === "Products" ? "#/products" : l === "Solutions" ? "#/services" : l === "About" ? "#/about" : l === "Why Bocxy" ? "#why" : "#resources",
    className: "border-b border-ink/10 py-5 font-serif text-3xl text-ink transition-colors hover:text-clay"
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 flex flex-col gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    className: "inline-flex items-center justify-center gap-2 rounded-full bg-clay px-6 py-4 text-sm font-medium text-paper"
  }, "Start Free Trial"), /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    className: "inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-6 py-4 text-sm font-medium text-ink"
  }, "Book a Free Demo"))));
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
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "bg-ink text-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 pb-10 pt-20 md:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-12 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4"
  }, /*#__PURE__*/React.createElement(Logo, {
    light: true,
    size: "lg"
  }), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-xs font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-clay"
  }, CONTACT.footerTagline), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 space-y-3 text-sm text-paper/60"
  }, CONTACT.phones.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.display,
    href: p.href,
    className: "flex items-center gap-2 transition-colors hover:text-paper"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-4 w-4 text-clay"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0122 16.92z",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), p.display)), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${CONTACT.email}`,
    className: "flex items-center gap-2 transition-colors hover:text-paper"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-4 w-4 text-clay"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 6l-10 7L2 6"
  })), CONTACT.email), /*#__PURE__*/React.createElement("a", {
    href: CONTACT.mapLink,
    target: "_blank",
    rel: "noreferrer",
    className: "flex items-start gap-2 transition-colors hover:text-paper"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "mt-0.5 h-4 w-4 text-clay"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7-5.1-7-11a7 7 0 1114 0c0 5.9-7 11-7 11z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.5"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-xs leading-relaxed"
  }, CONTACT.address)), /*#__PURE__*/React.createElement("a", {
    href: CONTACT.whatsapp,
    target: "_blank",
    rel: "noreferrer",
    className: "inline-flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2 text-xs transition-colors hover:border-clay hover:bg-clay"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "h-3.5 w-3.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.5 14.4l-2-1c-.3-.2-.7-.1-.9.2l-.8 1.1c-.2.3-.6.4-.9.2-1.4-.7-2.5-1.7-3.5-3-.2-.3-.1-.7.1-.9l1-.9c.3-.2.3-.6.1-.9l-1-2c-.2-.4-.6-.5-1-.4-1.5.6-2.4 2.1-2 3.6.8 3.1 3 5.6 6 6.7 1.5.6 3.2-.2 3.9-1.7.2-.4.1-.8-.2-1zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.2-1.4c1.4.8 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"
  })), "Chat on WhatsApp"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 pt-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-semibold uppercase tracking-wider text-paper/40"
  }, "Follow us"), [{
    l: "Instagram",
    h: CONTACT.social.instagram,
    v: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 448 512",
      fill: "currentColor",
      className: "h-4 w-4"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z"
    }))
  }, {
    l: "LinkedIn",
    h: CONTACT.social.linkedin,
    v: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 448 512",
      fill: "currentColor",
      className: "h-4 w-4"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
    }))
  }, {
    l: "Facebook",
    h: CONTACT.social.facebook,
    v: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 320 512",
      fill: "currentColor",
      className: "h-4 w-4"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
    }))
  }].map(s => /*#__PURE__*/React.createElement("a", {
    key: s.l,
    href: s.h,
    target: "_blank",
    rel: "noreferrer",
    "aria-label": s.l,
    className: "flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-paper/70 transition-colors hover:border-clay hover:bg-clay hover:text-paper"
  }, s.v))))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/40"
  }, "Products"), /*#__PURE__*/React.createElement("ul", {
    className: "mt-5 space-y-3 text-sm"
  }, FOOTER_PRODUCTS.map(p => /*#__PURE__*/React.createElement("li", {
    key: p.name
  }, /*#__PURE__*/React.createElement("a", {
    href: p.href,
    className: "text-paper/70 transition-colors hover:text-paper"
  }, p.name))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/40"
  }, "Solutions"), /*#__PURE__*/React.createElement("ul", {
    className: "mt-5 space-y-3 text-sm"
  }, FOOTER_SOLUTIONS.map(p => /*#__PURE__*/React.createElement("li", {
    key: p.name
  }, /*#__PURE__*/React.createElement("a", {
    href: p.href,
    className: "text-paper/70 transition-colors hover:text-paper"
  }, p.name))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/40"
  }, "Company"), /*#__PURE__*/React.createElement("ul", {
    className: "mt-5 space-y-3 text-sm"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/about",
    className: "text-paper/70 transition-colors hover:text-paper"
  }, "About Bocxy")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/about#mission",
    className: "text-paper/70 transition-colors hover:text-paper"
  }, "Our Mission")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/about#vision",
    className: "text-paper/70 transition-colors hover:text-paper"
  }, "Our Vision")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/about#team",
    className: "text-paper/70 transition-colors hover:text-paper"
  }, "Leadership Team")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/careers",
    className: "text-paper/70 transition-colors hover:text-paper"
  }, "Careers")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/case-study",
    className: "text-paper/70 transition-colors hover:text-paper"
  }, "Case Study")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/40"
  }, "Resources"), /*#__PURE__*/React.createElement("ul", {
    className: "mt-5 space-y-3 text-sm"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/journal",
    className: "text-paper/70 transition-colors hover:text-paper"
  }, "Journal")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#faqs",
    className: "text-paper/70 transition-colors hover:text-paper"
  }, "FAQs")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#technology",
    className: "text-paper/70 transition-colors hover:text-paper"
  }, "Technology")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    className: "text-paper/70 transition-colors hover:text-paper"
  }, "Contact Support")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/privacy",
    className: "text-paper/70 transition-colors hover:text-paper"
  }, "Privacy Policy")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#/privacy",
    className: "text-paper/70 transition-colors hover:text-paper"
  }, "Terms of Service")))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-16 border-t border-paper/10 pt-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-[clamp(72px,16vw,200px)] font-medium leading-[0.85] tracking-tightest text-paper/[0.06] select-none"
  }, "bocxy"), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-paper/40"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " Bocxy \xB7 ", CONTACT.address, "."), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-6"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/privacy",
    className: "transition-colors hover:text-paper/70"
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#/privacy",
    className: "transition-colors hover:text-paper/70"
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#/privacy",
    className: "transition-colors hover:text-paper/70"
  }, "Cookies"))))));
}

/* ============================================================
   UI MOCKUP COMPONENTS — Premium enterprise SaaS interfaces
   These represent ACTUAL Bocxy product capabilities.
   ============================================================ */
function DashboardMock() {
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl bg-paper text-ink shadow-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b border-ink/8 px-5 py-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-2.5 w-2.5 rounded-full bg-clay/40"
  }), /*#__PURE__*/React.createElement("span", {
    className: "h-2.5 w-2.5 rounded-full bg-clay/60"
  }), /*#__PURE__*/React.createElement("span", {
    className: "h-2.5 w-2.5 rounded-full bg-clay"
  })), /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] uppercase tracking-wider text-taupe"
  }, "bocxy.app / dashboard"), /*#__PURE__*/React.createElement("div", {
    className: "h-6 w-6 rounded-full bg-ink/10"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-3 p-5"
  }, [{
    l: "Today's bookings",
    v: "32",
    d: "+12%"
  }, {
    l: "Revenue (MTD)",
    v: "₹2.4L",
    d: "+18%"
  }, {
    l: "Active clients",
    v: "1,284",
    d: "+5%"
  }].map(k => /*#__PURE__*/React.createElement("div", {
    key: k.l,
    className: "rounded-xl border border-ink/8 bg-cream/50 p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] font-medium uppercase tracking-wider text-taupe"
  }, k.l), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 font-serif text-xl font-semibold num"
  }, k.v), /*#__PURE__*/React.createElement("div", {
    className: "mt-0.5 text-[9px] font-semibold text-success"
  }, k.d)))), /*#__PURE__*/React.createElement("div", {
    className: "px-5 pb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-ink/8 bg-cream/50 p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-semibold text-ink"
  }, "Appointments \xB7 today"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[9px] text-taupe"
  }, "12 slots \xB7 9 booked")), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 grid grid-cols-6 gap-1.5"
  }, ["10:00", "11:30", "12:30", "2:00", "3:30", "5:00"].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: `rounded-md p-1.5 text-[9px] ${i === 0 ? "bg-clay text-paper" : i === 1 ? "bg-ink/10 text-ink/70" : i === 3 ? "bg-leaf/15 text-leaf" : "border border-dashed border-ink/15 text-taupe"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold"
  }, t), /*#__PURE__*/React.createElement("div", {
    className: "opacity-70"
  }, i === 0 ? "Anita" : i === 1 ? "Vikram" : i === 3 ? "Sana" : "open")))))));
}
function CalendarMock() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl bg-paper text-ink shadow-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b border-ink/8 px-5 py-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] uppercase tracking-wider text-taupe"
  }, "smart calendar"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1.5"
  }, /*#__PURE__*/React.createElement("button", {
    className: "rounded-md border border-ink/10 px-2 py-1 text-[10px]"
  }, "Day"), /*#__PURE__*/React.createElement("button", {
    className: "rounded-md bg-ink px-2 py-1 text-[10px] text-paper"
  }, "Week"))), /*#__PURE__*/React.createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-7 gap-1.5 text-center font-mono text-[9px] uppercase text-taupe"
  }, days.map(d => /*#__PURE__*/React.createElement("div", {
    key: d
  }, d))), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 grid grid-cols-7 gap-1.5"
  }, Array.from({
    length: 28
  }).map((_, i) => {
    const filled = [2, 4, 7, 9, 11, 14, 17, 20, 22, 24].includes(i);
    const partial = [3, 6, 10, 13, 18, 21, 25].includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `flex h-9 items-center justify-center rounded text-[10px] font-medium ${filled ? "bg-clay text-paper" : partial ? "bg-clay/30 text-ink" : "border border-ink/10 text-taupe"}`
    }, i + 1);
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex items-center gap-3 text-[9px] text-taupe"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-2 w-2 rounded-sm bg-clay"
  }), "Booked"), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-2 w-2 rounded-sm bg-clay/30"
  }), "Pending"), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-2 w-2 rounded-sm border border-ink/15"
  }), "Open"))));
}
function EmrMock() {
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl bg-paper text-ink shadow-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b border-ink/8 px-5 py-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] uppercase tracking-wider text-taupe"
  }, "emr \xB7 patient chart"), /*#__PURE__*/React.createElement("span", {
    className: "rounded-full bg-leaf/15 px-2 py-0.5 text-[9px] font-semibold text-leaf"
  }, "Active")), /*#__PURE__*/React.createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 border-b border-ink/8 pb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-9 w-9 rounded-full bg-clay/15"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] font-semibold"
  }, "Anjali R. \xB7 32 yrs"), /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] text-taupe"
  }, "Last visit \xB7 14 days ago \xB7 6 visits")), /*#__PURE__*/React.createElement("div", {
    className: "ml-auto text-right text-[9px] text-taupe"
  }, /*#__PURE__*/React.createElement("div", null, "Skin type \xB7 IV"), /*#__PURE__*/React.createElement("div", null, "Allergies \xB7 none"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 grid grid-cols-3 gap-2 text-[9px]"
  }, [{
    l: "Treatment plan",
    v: "3/8 sessions"
  }, {
    l: "Before/after",
    v: "8 photos"
  }, {
    l: "Consent forms",
    v: "Signed"
  }].map(k => /*#__PURE__*/React.createElement("div", {
    key: k.l,
    className: "rounded-md border border-ink/10 p-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-taupe"
  }, k.l), /*#__PURE__*/React.createElement("div", {
    className: "mt-0.5 font-semibold text-ink"
  }, k.v)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 rounded-md bg-cream/50 p-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] font-semibold uppercase tracking-wider text-taupe"
  }, "Today's note"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-[10px] text-ink/80"
  }, "Hydration facial + LED therapy. Skin tone evening, mild reduction in pigmentation around cheek area."))));
}
function PayrollMock() {
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl bg-paper text-ink shadow-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b border-ink/8 px-5 py-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] uppercase tracking-wider text-taupe"
  }, "payroll \xB7 nov 2026"), /*#__PURE__*/React.createElement("span", {
    className: "rounded-full bg-clay/15 px-2 py-0.5 text-[9px] font-semibold text-clay-deep"
  }, "In review")), /*#__PURE__*/React.createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-3 grid grid-cols-3 gap-2 text-[9px]"
  }, [{
    l: "Gross",
    v: "₹2,84,500"
  }, {
    l: "Deductions",
    v: "₹42,300"
  }, {
    l: "Net payable",
    v: "₹2,42,200"
  }].map(k => /*#__PURE__*/React.createElement("div", {
    key: k.l,
    className: "rounded-md bg-cream/50 p-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-taupe"
  }, k.l), /*#__PURE__*/React.createElement("div", {
    className: "mt-0.5 font-serif text-sm font-semibold num"
  }, k.v)))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5"
  }, [{
    n: "Anita R.",
    r: "Senior Stylist",
    s: "₹48,200"
  }, {
    n: "Vikram S.",
    r: "Colour Specialist",
    s: "₹52,800"
  }, {
    n: "Sana K.",
    r: "Skin Therapist",
    s: "₹45,600"
  }].map(e => /*#__PURE__*/React.createElement("div", {
    key: e.n,
    className: "flex items-center gap-2 rounded-md border border-ink/8 p-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-6 w-6 rounded-full bg-clay/15"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold"
  }, e.n), /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] text-taupe"
  }, e.r)), /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] font-semibold num"
  }, e.s))))));
}
function CrmMock() {
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl bg-paper text-ink shadow-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b border-ink/8 px-5 py-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] uppercase tracking-wider text-taupe"
  }, "crm \xB7 client profile"), /*#__PURE__*/React.createElement("span", {
    className: "rounded-full bg-clay/15 px-2 py-0.5 text-[9px] font-semibold text-clay-deep"
  }, "VIP")), /*#__PURE__*/React.createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 border-b border-ink/8 pb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-9 w-9 rounded-full bg-clay/15"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] font-semibold"
  }, "Meera J. \xB7 since 2022"), /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] text-taupe"
  }, "12 visits \xB7 \u20B914,200 LTV"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 grid grid-cols-2 gap-2 text-[9px]"
  }, [{
    l: "Avg spend/visit",
    v: "₹1,183"
  }, {
    l: "Last visit",
    v: "3 weeks ago"
  }, {
    l: "Preferred service",
    v: "Hair Spa"
  }, {
    l: "Birthday",
    v: "14 Mar"
  }].map(k => /*#__PURE__*/React.createElement("div", {
    key: k.l,
    className: "rounded-md border border-ink/8 p-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-taupe"
  }, k.l), /*#__PURE__*/React.createElement("div", {
    className: "mt-0.5 font-semibold"
  }, k.v)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 rounded-md bg-clay/10 p-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[9px] font-semibold uppercase tracking-wider text-clay-deep"
  }, "Suggested action"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-[10px] text-ink/80"
  }, "Send \"We miss you\" SMS with \u20B9200 off rebooking offer"))));
}
function PosMock() {
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl bg-paper text-ink shadow-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b border-ink/8 px-5 py-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] uppercase tracking-wider text-taupe"
  }, "pos \xB7 checkout"), /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] font-semibold num"
  }, "\u20B91,498")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 p-4"
  }, [{
    n: "Hair Spa & Massage",
    d: "60 min · Anita",
    v: "₹899"
  }, {
    n: "Beard Trim",
    d: "15 min · Vikram",
    v: "₹199"
  }, {
    n: "Bocxy Hair Oil (retail)",
    d: "1 unit",
    v: "₹400"
  }].map(i => /*#__PURE__*/React.createElement("div", {
    key: i.n,
    className: "flex items-center justify-between rounded-md border border-ink/8 p-2 text-[10px]"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold"
  }, i.n), /*#__PURE__*/React.createElement("div", {
    className: "text-taupe"
  }, i.d)), /*#__PURE__*/React.createElement("div", {
    className: "font-mono font-semibold num"
  }, i.v))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-md bg-ink p-2.5 text-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-[10px]"
  }, /*#__PURE__*/React.createElement("span", null, "Pay via UPI \xB7 GPay"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono font-semibold num"
  }, "\u20B91,498")))));
}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  const [wIdx, setWIdx] = useState(0);
  const words = ["Innovate.", "Automate.", "Scale.", "Transform."];
  useEffect(() => {
    const t = setInterval(() => setWIdx(i => (i + 1) % words.length), 1800);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "relative overflow-hidden bg-paper pt-[76px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full bg-clay/12 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -left-32 top-1/2 h-[520px] w-[520px] rounded-full bg-cream blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto grid max-w-[1320px] items-center gap-12 px-6 pb-20 pt-12 md:px-10 md:pb-28 md:pt-16 lg:grid-cols-12 lg:gap-16 lg:pt-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-bone/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, /*#__PURE__*/React.createElement("span", {
    className: "relative flex h-1.5 w-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-60"
  }), /*#__PURE__*/React.createElement("span", {
    className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-leaf"
  })), /*#__PURE__*/React.createElement("span", null, "Empowering businesses with all-in-one software"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    big: true
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-7 font-serif text-[52px] font-light leading-[0.96] tracking-tightest sm:text-7xl lg:text-[88px]"
  }, "Bocxy: Empowering Your Business with", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay underline-mark"
  }, words[wIdx]))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-7 max-w-xl font-serif text-xl italic leading-relaxed text-ink/70"
  }, "Running a successful business means juggling countless tasks \u2014 from client appointments and payroll to marketing and compliance. Bocxy provides an integrated, AI-driven platform that simplifies your operations, automates the mundane, and empowers your team to deliver exceptional results.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-9 flex flex-wrap items-center gap-3"
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#/contact",
    variant: "dark"
  }, "Start a free trial ", /*#__PURE__*/React.createElement(Arrow, {
    className: "h-4 w-4"
  })), /*#__PURE__*/React.createElement(Btn, {
    href: "#/contact",
    variant: "outline"
  }, "Book a Free Demo"), /*#__PURE__*/React.createElement("a", {
    href: "#/products",
    className: "ml-2 inline-flex items-center gap-1.5 text-sm font-medium text-ink/70 transition-colors hover:text-clay"
  }, "Explore products ", /*#__PURE__*/React.createElement(Arrow, {
    className: "h-4 w-4"
  })))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 440
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-taupe"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1 w-1 rounded-full bg-leaf"
  }), " Indian-built \xB7 INR billing"), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1 w-1 rounded-full bg-leaf"
  }), " Multi-location ready"), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-1 w-1 rounded-full bg-leaf"
  }), " Mobile + web")))), /*#__PURE__*/React.createElement("div", {
    className: "relative lg:col-span-5"
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "animate-floaty"
  }, /*#__PURE__*/React.createElement(DashboardMock, null)), /*#__PURE__*/React.createElement("div", {
    className: "animate-floaty2 absolute -left-6 -top-6 hidden w-44 sm:block"
  }, /*#__PURE__*/React.createElement(CalendarMock, null)), /*#__PURE__*/React.createElement("div", {
    className: "animate-floaty absolute -right-2 bottom-8 hidden w-48 sm:block",
    style: {
      animationDelay: "1.4s"
    }
  }, /*#__PURE__*/React.createElement(PosMock, null)))))));
}

/* ============================================================
   TRUST STRIP (qualitative — no fabricated numbers)
   ============================================================ */
function TrustStrip() {
  const items = [{
    t: "Industry-specific",
    d: "Built for beauty, wellness & clinical workflows"
  }, {
    t: "Smart automation",
    d: "Less admin, more time with your clients"
  }, {
    t: "Secure & scalable",
    d: "Enterprise-grade reliability from day one"
  }, {
    t: "Built for growth",
    d: "Single chair to multi-location, one platform"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "border-y border-ink/10 bg-bone/40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 py-14 md:px-10 md:py-20"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    className: "text-center font-serif text-xl italic text-ink/70"
  }, "Built on principles that matter to Indian businesses.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 grid grid-cols-2 gap-y-10 md:grid-cols-4"
  }, items.map((it, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: it.t,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 font-serif text-2xl font-medium tracking-tight text-ink"
  }, it.t), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-sm text-ink/65"
  }, it.d)))))));
}

/* ============================================================
   ONE PLATFORM / ECOSYSTEM DIAGRAM
   ============================================================ */
function EcosystemSection() {
  const layers = [{
    t: "Appointments & scheduling",
    d: "24/7 online booking, reminders, smart calendar"
  }, {
    t: "Client management (CRM)",
    d: "Profiles, history, preferences, segments"
  }, {
    t: "Marketing & loyalty",
    d: "Targeted campaigns, automated journeys"
  }, {
    t: "Billing, POS & payments",
    d: "UPI, cards, digital invoices & receipts"
  }, {
    t: "Staff & HR",
    d: "Rosters, attendance, self-service"
  }, {
    t: "Payroll & compliance",
    d: "Automated salary, tax deductions, payslips"
  }, {
    t: "Reports & analytics",
    d: "Real-time, actionable insights"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "why",
    className: "bg-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 py-24 md:px-10 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-12 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "One platform")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-6xl"
  }, "Every operational need.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "One quiet system."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-md font-serif text-lg italic leading-relaxed text-ink/65"
  }, "Bocxy eliminates the friction of multiple tools \u2014 your data flows seamlessly across every department, in real time.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement("ul", {
    className: "mt-8 space-y-3 text-sm text-ink/75"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex h-6 w-6 items-center justify-center rounded-full bg-clay text-paper"
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
  }))), " One source of truth across teams"), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex h-6 w-6 items-center justify-center rounded-full bg-clay text-paper"
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
  }))), " Real-time updates, no manual sync"), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex h-6 w-6 items-center justify-center rounded-full bg-clay text-paper"
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
  }))), " Scales from solo to multi-location")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, layers.map((l, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: l.t,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("div", {
    className: "group flex items-center gap-4 rounded-2xl border border-ink/10 bg-paper p-4 transition-all duration-300 hover:-translate-x-1 hover:border-ink/30 hover:shadow-soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bone font-mono text-[10px] font-semibold text-clay"
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-lg font-medium"
  }, l.t), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-taupe"
  }, l.d)), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-4 w-4 text-ink/40 transition-transform group-hover:translate-x-1 group-hover:text-clay"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -inset-x-4 -inset-y-4 -z-10 rounded-3xl bg-gradient-to-br from-clay/5 to-transparent blur-2xl"
  }))))));
}

/* ============================================================
   PRODUCTS — editorial product system
   ============================================================ */
const PRODUCTS_DATA = {
  clinic: {
    name: "Aesthetic Clinic Software",
    kicker: "For clinics",
    tagline: "An all-in-one clinic management system with AI-powered insights.",
    desc: "Whether you run a single clinic or multiple branches, Bocxy's aesthetic clinic software keeps everything organised, accessible, and secure. Our platform goes beyond basic scheduling and billing, using intelligent insights to enhance patient care, boost revenue, and free up your time.",
    features: ["AI-Powered Patient Insights & Personalized Care", "Intelligent Appointment Management & 24/7 Online Booking", "Automated Reminders — drastically reduce no-shows", "Secure Patient Records (EMR) & Digital Forms", "Comprehensive Patient Profiles with before/after photos", "Digital Prescriptions — send safely and efficiently", "Streamlined Billing, POS & Integrated Payments", "Detailed Financial Reporting & Revenue Tracking", "Built-in CRM & Marketing Automation"],
    benefits: [{
      t: "Save time & reduce errors",
      d: "Automate appointment reminders, form collection, and invoicing. Less manual work, fewer errors."
    }, {
      t: "Boost client retention",
      d: "Personalised care, automated follow-ups, and targeted marketing keep your clinic top-of-mind."
    }, {
      t: "Improve cash flow",
      d: "Streamlined billing, secure payments and deposits upfront, and real-time financial reports."
    }, {
      t: "Stay compliant & secure",
      d: "Enterprise-level security protocols protect every piece of patient data."
    }, {
      t: "Make smarter decisions",
      d: "Identify trends, optimise strategies, track performance — all from one dashboard."
    }],
    why: [{
      t: "All-in-one solution",
      d: "Consolidate your tools and eliminate the need for multiple, disconnected systems."
    }, {
      t: "Built for clinics",
      d: "Specifically designed for dermatology and clinical practices — from before/after photos to specific treatments."
    }, {
      t: "Unrivalled AI capabilities",
      d: "A competitive edge with smart, data-driven insights that improve outcomes and profitability."
    }, {
      t: "Exceptional support",
      d: "Our dedicated support team is always available to help you get the most out of your subscription."
    }],
    testimonial: {
      q: "Bocxy has transformed how we operate. The AI insights alone have helped us personalize treatments in ways we never thought possible. Our patient engagement and retention have never been higher!",
      n: "Dr. Anya Sharma",
      r: "Med Spa Owner"
    },
    who: "Aesthetic clinics · Skin clinics · Multi-branch practices",
    mock: /*#__PURE__*/React.createElement(EmrMock, null)
  },
  salon: {
    name: "Salon & Spa Software",
    kicker: "For salons & spas",
    tagline: "A modern salon booking system built for growth.",
    desc: "Bocxy is a complete salon software solution designed to streamline every aspect of your business. Manage appointments, clients, payments, and staff with one powerful platform — and grow with smart insights, automated campaigns, and an integrated POS.",
    features: ["24/7 Online Booking", "On-the-go Management via mobile", "Client Self-Service Portal", "Push Notifications & Automated Reminders", "Smart Calendar with drag-and-drop", "Client Management (CRM)", "Marketing & Loyalty Tools", "Point of Sale (POS) & Reporting", "Staff Management with Performance Tracking", "Integrated Payroll Prep", "Retail & Inventory Control"],
    benefits: [{
      t: "More bookings, fewer no-shows",
      d: "24/7 online booking, smart reminders and push notifications fill your calendar and keep it full."
    }, {
      t: "Happier clients, more loyalty",
      d: "Personalised profiles, automated follow-ups and a self-service app make every client feel valued."
    }, {
      t: "Operations in one place",
      d: "POS, inventory, staff and reporting unified into a single source of truth."
    }, {
      t: "Insight that drives growth",
      d: "Real-time reports on revenue, retention, service popularity and staff productivity."
    }],
    why: [{
      t: "Built for Indian salons",
      d: "Localised workflows, INR billing, and understanding of how Indian beauty businesses actually operate."
    }, {
      t: "Affordable at every stage",
      d: "From a single chair to a multi-location chain, Bocxy scales with you."
    }, {
      t: "Intuitive and easy to use",
      d: "If you can use a smartphone, you can use Bocxy — minimal training required."
    }, {
      t: "Always-on support",
      d: "Real humans helping you get the most out of your subscription."
    }],
    testimonial: {
      q: "Our salon billing used to be messy. Now with this software, tracking services, generating bills, and managing clients has become so easy. Totally worth it!",
      n: "Anita Kapoor",
      r: "Salon Owner"
    },
    who: "Salons · Spas · Wellness studios",
    mock: /*#__PURE__*/React.createElement(CalendarMock, null)
  },
  medspa: {
    name: "Med Spa Software",
    kicker: "For med spas",
    tagline: "Comprehensive med spa software for rapid growth and enhanced client loyalty.",
    desc: "Bocxy's med spa software is designed for the modern medical spa. Capture inquiries, track client journeys, manage memberships and packages, and automate personalised communications — all from a single, integrated platform.",
    features: ["Online Appointment Booking — digital & walk-in", "Advanced Client Profiles with treatment history", "Specialized EMR & Treatment Tracking", "Compliance features for medical spas", "Integrated POS & Payment Processing", "Retail & Inventory Management", "Membership & Package Management", "Targeted Marketing Automation", "Multi-practitioner & multi-location", "Customizable treatment templates & photo tracking"],
    benefits: [{
      t: "Specialized clinical workflows",
      d: "EMR, treatment tracking and compliance features that go beyond generic salon software."
    }, {
      t: "Memberships & packages",
      d: "Sell, track, and automatically redeem packages and memberships across your med spa."
    }, {
      t: "Smarter client retention",
      d: "Integrated CRM with automated follow-ups, loyalty programs, and re-engagement campaigns."
    }, {
      t: "Actionable insights",
      d: "Real-time reports and analytics for data-driven decisions on treatments, staff and marketing."
    }],
    why: [{
      t: "Best of both worlds",
      d: "The luxurious client journey of a high-end spa meets the operational demands of a medical aesthetic practice."
    }, {
      t: "Built for compliance",
      d: "Documentation, photo tracking, consent forms and templates that meet medical-spa standards."
    }, {
      t: "Centralized operations",
      d: "Automates routine tasks across practitioners, locations and departments."
    }, {
      t: "Scales with you",
      d: "Flexible for single locations or growing enterprises with multiple practitioners."
    }],
    who: "Medical spas · Aesthetic practices with clinical services",
    mock: /*#__PURE__*/React.createElement(DashboardMock, null)
  },
  derm: {
    name: "Dermatology Clinic Software",
    kicker: "For dermatology",
    tagline: "Specialized EMR, medical billing, and data security for modern practices.",
    desc: "Bocxy's dermatology clinic software focuses on what matters most: secure, specialised EMR, medical-grade image management, and seamless patient communication. Built for dermatologists who need more than a generic system.",
    features: ["Comprehensive Suite of Features", "Appointment booking (walk-ins & digital)", "Electronic Patient Records (EPR)", "Pharmacy management", "Before & after photo tracking", "Inventory control", "Package/session-based treatment management", "Dermatology-Specific Templates — skin conditions, screenings, procedural notes", "Medical-Grade Image Management with annotation", "Built-in encryption & access controls", "Automated communication & follow-ups"],
    benefits: [{
      t: "Specialised EMR",
      d: "Dermatology-specific templates for skin conditions, cancer screenings, and procedural notes."
    }, {
      t: "Medical-grade imaging",
      d: "Secure storage and annotation of before/after photos and body maps directly in patient charts."
    }, {
      t: "Hybrid medical & cosmetic",
      d: "Manage both medical and cosmetic patients in one platform with billing that handles both."
    }, {
      t: "Package-based treatment plans",
      d: "Track multi-session treatments, billing, and progress automatically."
    }],
    why: [{
      t: "Integrated medical & cosmetic billing",
      d: "Perfect for complex and session-based treatment plans."
    }, {
      t: "Hybrid functionality",
      d: "Manage both medical and cosmetic treatments with integrated tools."
    }, {
      t: "All-in-one efficiency",
      d: "Combine EMR, practice management and patient engagement into one streamlined system."
    }, {
      t: "Compliant and secure",
      d: "Built with encryption and access controls to keep patient records fully secure."
    }],
    testimonial: {
      q: "The billing software has simplified our entire process. Managing patient invoices and payments is now faster and more accurate. My staff saves hours every week!",
      n: "Dr. Anderson",
      r: "Dermatology Clinic"
    },
    who: "Dermatology clinics · Skin specialists",
    mock: /*#__PURE__*/React.createElement(EmrMock, null)
  },
  crm: {
    name: "Bocxy CRM",
    kicker: "Customer relationship management",
    tagline: "Build meaningful, lasting relationships with every client.",
    desc: "Bocxy's CRM is the foundation of a successful, client-centric business. Move beyond simple booking and billing to understand, engage, and retain your clients — with centralized profiles, targeted campaigns, and a mobile app that lets you manage on the go.",
    features: ["Centralized Client Profiles — one source of truth", "Personalized Experience — remember favourite services", "Detailed Service & Purchase History", "Automated Marketing — birthday, promotions, reminders", "Targeted Email & SMS Campaigns", "Loyalty Programs & Gift Cards", "Secure data with state-of-the-art encryption", "Mobile access via the Bocxy app", "Seamless integration with the booking system"],
    benefits: [{
      t: "Detailed client profiles",
      d: "Contact details, service history, product preferences, allergy notes, and personal milestones."
    }, {
      t: "Integrated communication",
      d: "Reach clients directly from their profile via SMS or email — personalised, contextual."
    }, {
      t: "Loyalty & gift cards",
      d: "Set up loyalty programs and sell gift cards directly through the system."
    }, {
      t: "Smart analytics",
      d: "Identify trends, understand your most loyal customers, and optimise marketing spend."
    }],
    why: [{
      t: "Easy to use",
      d: "Intuitive platform your staff can start using from day one with minimal training."
    }, {
      t: "All-in-one solution",
      d: "CRM integrates seamlessly with booking, billing and staff management in one dashboard."
    }, {
      t: "Loyalty engine",
      d: "Convert new clients into loyal brand advocates who return again and again."
    }, {
      t: "Mobile ready",
      d: "Access client details, track performance, and manage your CRM from anywhere."
    }],
    who: "Any beauty or wellness business that wants to retain clients",
    mock: /*#__PURE__*/React.createElement(CrmMock, null)
  },
  hr: {
    name: "HR & Payroll Software",
    kicker: "For teams",
    tagline: "An all-in-one HR management platform — built for Indian businesses.",
    desc: "Bocxy's HR payroll software simplifies employee management, payroll processing, and compliance. Featuring a user-friendly dashboard, it streamlines HR tasks, ensures timely payslips, and supports scalable workforce management for growing businesses.",
    features: ["Automated Payroll Processing", "Attendance & Leave Tracking", "Compliance & Tax Calculations — Indian labour laws", "Employee Self-Service Portal", "Seamless Integrations with existing tools", "Save Time & Reduce Errors", "Ensure Timely Payments", "Boost Employee Satisfaction", "Built for Indian Businesses — INR, TDS, statutory compliance"],
    benefits: [{
      t: "Save time & reduce errors",
      d: "Automate calculations for deductions, taxes, and bonuses — fewer mistakes, less admin."
    }, {
      t: "Ensure timely payments",
      d: "Scheduled payroll runs and automated processing keep every payday on time."
    }, {
      t: "Built-in compliance",
      d: "Automatic updates for PF, ESI, TDS and other statutory requirements."
    }, {
      t: "Boost employee satisfaction",
      d: "Self-service portal gives staff control over payslips, leave and personal data."
    }],
    why: [{
      t: "Built for Indian businesses",
      d: "Pre-configured with local compliance, statutory requirements and workflows — from PF and ESI to PT and TDS."
    }, {
      t: "Easy to use",
      d: "Clean, intuitive, mobile-friendly interface with minimal learning curve."
    }, {
      t: "Cost-effective",
      d: "Flexible, transparent pricing with affordable plans that grow with your business."
    }, {
      t: "Secure & reliable",
      d: "State-of-the-art security protocols and encryption to protect your most critical information."
    }],
    who: "Any business with employees in India",
    mock: /*#__PURE__*/React.createElement(PayrollMock, null)
  }
};
function ProductShowcase({
  id
}) {
  const p = PRODUCTS_DATA[id];
  if (!p) return /*#__PURE__*/React.createElement("div", {
    className: "p-20 text-center"
  }, "Product not found. ", /*#__PURE__*/React.createElement("a", {
    href: "#/products",
    className: "text-clay underline"
  }, "See all"));
  return /*#__PURE__*/React.createElement("article", {
    className: "bg-paper"
  }, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden pt-[120px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-clay/10 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 pb-16 md:px-10 md:pb-20"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("a", {
    href: "#/products",
    className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-taupe hover:text-clay"
  }, /*#__PURE__*/React.createElement(Chevron, {
    className: "h-3 w-3",
    flip: true
  }), " All products")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-clay"
  }, p.kicker)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 180,
    big: true
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-4 font-serif text-5xl font-light leading-[0.98] tracking-tightest sm:text-7xl lg:text-[80px]"
  }, p.name)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 280
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-2xl font-serif text-2xl italic leading-relaxed text-ink/70"
  }, p.tagline)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 360
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex flex-wrap items-center gap-3"
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#/contact",
    variant: "dark"
  }, "Start Free Trial ", /*#__PURE__*/React.createElement(Arrow, {
    className: "h-4 w-4"
  })), /*#__PURE__*/React.createElement(Btn, {
    href: "#/contact",
    variant: "outline"
  }, "Book a Free Demo"))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-paper pb-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto grid max-w-[1320px] items-center gap-12 px-6 md:px-10 lg:grid-cols-2"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-xl leading-relaxed text-ink/80"
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, "Ideal for"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 font-serif text-lg italic text-ink/75"
  }, p.who)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150
  }, p.mock))), /*#__PURE__*/React.createElement("section", {
    className: "bg-bone/40 py-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "What you get")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-4 font-serif text-4xl font-light leading-tight tracking-tighter sm:text-5xl"
  }, "Built for the way you actually work.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3"
  }, p.features.map((f, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: f,
    delay: i * 40
  }, /*#__PURE__*/React.createElement("div", {
    className: "group flex items-start gap-3 bg-paper p-6 transition-colors duration-300 hover:bg-cream"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clay text-paper"
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
  }))), /*#__PURE__*/React.createElement("span", {
    className: "text-sm leading-relaxed text-ink/80"
  }, f))))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-paper py-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "How it benefits you")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-4 font-serif text-4xl font-light leading-tight tracking-tighter sm:text-5xl"
  }, "Real outcomes, not just features.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2"
  }, p.benefits.map((b, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: b.t,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-paper p-8 transition-colors hover:bg-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-xs font-semibold text-clay"
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl font-medium"
  }, b.t)), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-sm leading-relaxed text-ink/70"
  }, b.d))))))), p.testimonial && /*#__PURE__*/React.createElement("section", {
    className: "bg-bone/40 py-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-3xl px-6 text-center md:px-10"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "From a customer")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-6 font-serif text-3xl font-light leading-snug italic text-ink sm:text-4xl"
  }, "\"", p.testimonial.q, "\"")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-8 inline-flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-lg font-medium"
  }, p.testimonial.n), /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-taupe"
  }, "\u2014 ", p.testimonial.r))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-paper py-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Why choose Bocxy")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-4 font-serif text-4xl font-light leading-tight tracking-tighter sm:text-5xl"
  }, "The reasons professionals switch.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
  }, p.why.map((w, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: w.t,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("div", {
    className: "group h-full rounded-2xl border border-ink/10 bg-bone/40 p-6 transition-all hover:-translate-y-1 hover:bg-paper hover:shadow-soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex h-9 w-9 items-center justify-center rounded-full bg-clay/15 font-mono text-xs font-semibold text-clay"
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    className: "mt-5 font-serif text-lg font-medium"
  }, w.t), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm leading-relaxed text-ink/70"
  }, w.d))))))), PRODUCT_FAQS[id] && PRODUCT_FAQS[id].length > 0 && /*#__PURE__*/React.createElement("section", {
    id: "faqs",
    className: "bg-bone/40 py-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-12 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "FAQs")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-4 font-serif text-4xl font-light leading-tight tracking-tighter sm:text-5xl"
  }, "Frequently asked questions."))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10"
  }, PRODUCT_FAQS[id].map((f, i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: f.q,
    item: f,
    index: i
  }))))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-ink py-20 text-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-3xl px-6 text-center md:px-10"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    light: true
  }, "Get started")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-5 font-serif text-4xl font-light leading-tight tracking-tighter sm:text-5xl"
  }, "See ", p.name, " for your business.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-5 font-serif text-lg italic text-paper/65"
  }, "Book a free demo \u2014 we'll show you exactly how it fits your workflow.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-9 flex flex-wrap justify-center gap-3"
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#/contact",
    variant: "clay"
  }, "Book a Free Demo"), /*#__PURE__*/React.createElement(Btn, {
    href: "#/contact",
    variant: "outlineLight"
  }, "Start Free Trial"))))));
}
function ProductsOverview() {
  const order = ["clinic", "salon", "medspa", "derm", "crm", "hr"];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-paper pt-[120px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-clay/10 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 pb-16 md:px-10 md:pb-24"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Products")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    big: true
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-6 font-serif text-6xl font-light leading-[0.96] tracking-tightest sm:text-8xl"
  }, "Six industry-specific products.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "One unified platform."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-ink/65"
  }, "Each Bocxy product is purpose-built for a specific kind of beauty or wellness business \u2014 and designed to work together.")))), order.map((id, idx) => {
    const p = PRODUCTS_DATA[id];
    const flip = idx % 2 === 1;
    return /*#__PURE__*/React.createElement("section", {
      key: id,
      className: `${idx % 2 === 0 ? "bg-paper" : "bg-bone/40"} py-20 md:py-28`
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-auto grid max-w-[1320px] items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-20"
    }, /*#__PURE__*/React.createElement(Reveal, {
      className: flip ? "lg:order-2" : ""
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-clay"
    }, p.kicker), /*#__PURE__*/React.createElement("h2", {
      className: "mt-3 font-serif text-4xl font-light leading-tight tracking-tighter sm:text-5xl lg:text-[56px]"
    }, p.name), /*#__PURE__*/React.createElement("p", {
      className: "mt-5 font-serif text-xl italic text-ink/70"
    }, p.tagline), /*#__PURE__*/React.createElement("ul", {
      className: "mt-7 space-y-2.5"
    }, p.features.slice(0, 6).map(f => /*#__PURE__*/React.createElement("li", {
      key: f,
      className: "flex items-start gap-3 text-sm text-ink/75"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clay text-paper"
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
    }))), f))), /*#__PURE__*/React.createElement("a", {
      href: `#/products/${id}`,
      className: "mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-clay hover:text-rust"
    }, "Learn more about ", p.name, " ", /*#__PURE__*/React.createElement(Arrow, {
      className: "h-3.5 w-3.5"
    }))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 150,
      className: flip ? "lg:order-1" : ""
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, p.mock))));
  }));
}

/* ============================================================
   SOLUTIONS (IMS / ERP / Custom / Future)
   ============================================================ */
const SOLUTIONS_DATA = {
  ims: {
    name: "Integrated Management System (IMS)",
    kicker: "For multi-system operations",
    tagline: "A truly effective IMS isn't a collection of tools — it's a cohesive ecosystem that transforms how you operate.",
    desc: "Eliminate silos, streamline operations, centralize data, enhance compliance, and future-proof your business with Bocxy's IMS.",
    pillars: [{
      t: "Integrated CRM & Client Management",
      d: "Our robust CRM system connects directly with your booking and sales data, offering a complete view of every client interaction, preferences, and history."
    }, {
      t: "Smart Booking & Scheduling",
      d: "Whether it's online or walk-in, our intuitive booking system is linked to staff availability, room allocation, and service durations for optimal efficiency."
    }, {
      t: "Comprehensive HR & Payroll",
      d: "From staff scheduling and performance tracking to automated payroll calculations and compliance, your HR functions are fully integrated with your operational data."
    }, {
      t: "Efficient Billing & Financial Management",
      d: "Process payments, manage invoices, track expenditures, and generate detailed financial reports — all from a centralized hub."
    }]
  },
  erp: {
    name: "Enterprise Resource Planning (ERP)",
    kicker: "For growing operations",
    tagline: "Go beyond basic management — an intelligent, interconnected system for your entire operation.",
    desc: "As your salon, spa, or clinic expands, managing individual systems for different departments can quickly become cumbersome. Bocxy's ERP brings operational unity, automated workflows, and strategic financial control.",
    pillars: [{
      t: "Integrated Finance & Accounting",
      d: "Manage your general ledger, accounts payable/receivable, payroll, and financial reporting from a single dashboard."
    }, {
      t: "Human Resources & Staff Management",
      d: "Streamline HR tasks including staff scheduling, time tracking, performance reviews, and automated payroll processing."
    }, {
      t: "Client Relationship Management (CRM)",
      d: "A robust CRM captures every client interaction, service history, and preference — enabling personalized marketing and superior customer service."
    }, {
      t: "Supply Chain & Inventory Optimization",
      d: "Maintain precise control over your retail products, professional supplies, and consumables. Automate reorder points and minimize waste."
    }, {
      t: "Service & Appointment Management",
      d: "A complete operations layer for any service-led business."
    }]
  },
  custom: {
    name: "Customised Business Solutions",
    kicker: "Bespoke for your workflow",
    tagline: "Off-the-shelf doesn't fit every business. Bocxy builds software designed exclusively for your operations.",
    desc: "Bocxy's customised business solutions give you a competitive edge that off-the-shelf software simply can't match.",
    pillars: [{
      t: "Perfect Workflow Alignment",
      d: "We start by deeply understanding your business model, current pain points, and future goals, ensuring every line of code addresses a real need."
    }, {
      t: "Discovery & Consultation",
      d: "We start by deeply understanding your business model, current pain points, and future goals, ensuring every line of code addresses a real need."
    }, {
      t: "Strategic Design & Development",
      d: "Our expert team leverages cutting-edge technology and best practices to design intuitive, robust, and scalable solutions."
    }, {
      t: "Seamless Integration",
      d: "We ensure your new custom software integrates flawlessly with any existing third-party tools or systems you rely on."
    }, {
      t: "Ongoing Support & Evolution",
      d: "Our partnership doesn't end at launch. We provide continuous support, maintenance, and iterative development."
    }, {
      t: "Unmatched Competitive Advantage",
      d: "Offer unique services, streamline client experiences, or optimize internal processes in ways your rivals simply can't match."
    }, {
      t: "Scalability for Future Growth",
      d: "Built to grow with you."
    }]
  },
  future: {
    name: "The Future of Aesthetic Clinics: Why Digital Management Software is a Game-Changer",
    kicker: "Whitepaper · Our R&D direction",
    tagline: "The aesthetic industry in India is expanding rapidly — digital clinic management software is reshaping how clinics compete and grow.",
    desc: "As clinics expand, so do the challenges — managing patient records, scheduling appointments, processing payments, and ensuring compliance. This is where aesthetic clinic management software becomes a true game-changer.",
    pillars: [{
      t: "Streamlined Appointment Scheduling",
      d: "Traditional scheduling often causes double bookings, miscommunication, and no-shows. With digital clinic scheduling software, appointments are automated, reminders are sent instantly, and clients enjoy a seamless booking experience — leading to higher satisfaction and revenue."
    }, {
      t: "Centralized Patient Records & History",
      d: "Aesthetic treatments require accurate records. A digital clinic management system securely stores consultation notes, treatment plans, and medical histories in one place — ensuring compliance while allowing staff to deliver personalized services efficiently."
    }, {
      t: "Enhanced Customer Experience",
      d: "Today's clients expect convenience. With online booking, automated follow-ups, and personalized reminders, clinic software elevates the customer experience, creating stronger relationships and higher retention."
    }, {
      t: "Smarter Billing & Inventory Management",
      d: "Managing consumables and payments can drain valuable time. Integrated billing and inventory tracking help clinics reduce errors, improve efficiency, and ensure they never run out of essential supplies."
    }, {
      t: "Data-Driven Growth",
      d: "With built-in reports and analytics, clinics can track revenue trends, identify popular treatments, and measure staff performance. These insights empower smarter decisions and long-term scalability."
    }, {
      t: "Scalable & Future-Ready",
      d: "Whether you're running a single clinic or managing multiple branches, aesthetic clinic software grows with your business. It adapts to changing needs, ensuring long-term sustainability."
    }]
  }
};
function SolutionShowcase({
  id
}) {
  const s = SOLUTIONS_DATA[id];
  if (!s) return /*#__PURE__*/React.createElement("div", {
    className: "p-20 text-center"
  }, "Solution not found. ", /*#__PURE__*/React.createElement("a", {
    href: "#/services",
    className: "text-clay underline"
  }, "See all"));
  return /*#__PURE__*/React.createElement("article", {
    className: "bg-paper"
  }, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden pt-[120px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-clay/10 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 pb-16 md:px-10 md:pb-24"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("a", {
    href: "#/services",
    className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-taupe hover:text-clay"
  }, /*#__PURE__*/React.createElement(Chevron, {
    className: "h-3 w-3",
    flip: true
  }), " All solutions")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-clay"
  }, s.kicker)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 180,
    big: true
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-4 max-w-4xl font-serif text-5xl font-light leading-[0.98] tracking-tightest sm:text-7xl"
  }, s.name)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 280
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-2xl font-serif text-2xl italic leading-relaxed text-ink/70"
  }, s.tagline)))), /*#__PURE__*/React.createElement("section", {
    className: "bg-paper pb-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    className: "max-w-3xl font-serif text-xl leading-relaxed text-ink/80"
  }, s.desc)), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 space-y-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10"
  }, s.pillars.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.t,
    delay: i * 50
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-paper p-8 transition-colors hover:bg-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-xs font-semibold text-clay"
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl font-medium"
  }, p.t)), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 max-w-3xl text-sm leading-relaxed text-ink/70"
  }, p.d))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-12 flex flex-wrap items-center gap-3"
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#/contact",
    variant: "dark"
  }, "Book a Free Demo ", /*#__PURE__*/React.createElement(Arrow, {
    className: "h-4 w-4"
  })), /*#__PURE__*/React.createElement(Btn, {
    href: "#/contact",
    variant: "outline"
  }, "Talk to our team"))))), PRODUCT_FAQS[id] && PRODUCT_FAQS[id].length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "bg-bone/40 py-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-12 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "FAQs")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-4 font-serif text-4xl font-light leading-tight tracking-tighter sm:text-5xl"
  }, "Frequently asked questions."))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10"
  }, PRODUCT_FAQS[id].map((f, i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: f.q,
    item: f,
    index: i
  }))))))));
}
function ServicesOverview() {
  const order = ["ims", "erp", "custom", "future"];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-paper pt-[120px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-clay/10 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 pb-16 md:px-10 md:pb-24"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Solutions")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    big: true
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-6 font-serif text-6xl font-light leading-[0.96] tracking-tightest sm:text-8xl"
  }, "Enterprise-grade solutions.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "Built for Indian scale."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-ink/65"
  }, "From integrated management systems to fully bespoke builds \u2014 Bocxy has a solution for every operational need.")))), order.map((id, i) => {
    const s = SOLUTIONS_DATA[id];
    const flip = i % 2 === 1;
    return /*#__PURE__*/React.createElement("section", {
      key: id,
      className: `${i % 2 === 0 ? "bg-paper" : "bg-bone/40"} py-20`
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-auto grid max-w-[1320px] items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-20"
    }, /*#__PURE__*/React.createElement(Reveal, {
      className: flip ? "lg:order-2" : ""
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-clay"
    }, s.kicker), /*#__PURE__*/React.createElement("h2", {
      className: "mt-3 font-serif text-4xl font-light leading-tight tracking-tighter sm:text-5xl"
    }, s.name), /*#__PURE__*/React.createElement("p", {
      className: "mt-5 font-serif text-xl italic text-ink/70"
    }, s.tagline), /*#__PURE__*/React.createElement("p", {
      className: "mt-5 max-w-md text-sm leading-relaxed text-ink/70"
    }, s.desc), /*#__PURE__*/React.createElement("a", {
      href: `#/services/${id}`,
      className: "mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-clay hover:text-rust"
    }, "Learn more ", /*#__PURE__*/React.createElement(Arrow, {
      className: "h-3.5 w-3.5"
    }))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 150,
      className: flip ? "lg:order-1" : ""
    }, /*#__PURE__*/React.createElement("div", {
      className: "grid gap-3 sm:grid-cols-2"
    }, s.pillars.slice(0, 4).map(p => /*#__PURE__*/React.createElement("div", {
      key: p.t,
      className: "rounded-2xl border border-ink/10 bg-paper p-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-serif text-base font-medium"
    }, p.t), /*#__PURE__*/React.createElement("div", {
      className: "mt-1 text-[11px] text-taupe"
    }, p.d)))))));
  }));
}

/* ============================================================
   WHY BOCCXY (real benefits, not invented)
   ============================================================ */
function WhyBocxy() {
  const benefits = [{
    t: "Automation that just works",
    d: "Reduce manual work across bookings, billing, follow-ups and reports. Your team gets time back for clients."
  }, {
    t: "Improved customer satisfaction",
    d: "Automated booking, digital payments, loyalty programs, and personalised communication that keeps clients coming back."
  }, {
    t: "Fewer errors, more revenue",
    d: "Reduce booking and payment errors with a single, integrated source of truth across every touchpoint."
  }, {
    t: "Real-time reporting",
    d: "Actionable insights on revenue, staff productivity, client retention, and growth — available the moment you need them."
  }, {
    t: "Built for Indian businesses",
    d: "Localised for Indian workflows, regulations, languages and payment methods. Support that understands your context."
  }, {
    t: "Scales with you",
    d: "From a single chair to a multi-location enterprise — Bocxy grows with you, not against you."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-bone/40 py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Why Bocxy")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-6xl"
  }, "A digital growth partner,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "not just a software provider."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-xl font-serif text-lg italic text-ink/65"
  }, "\"Bocxy isn't just a software provider \u2014 we are your digital growth partner.\""))), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3"
  }, benefits.map((b, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: b.t,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("div", {
    className: "group h-full bg-paper p-8 transition-colors duration-300 hover:bg-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    className: "mt-3 font-serif text-2xl font-medium"
  }, b.t), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-sm leading-relaxed text-ink/70"
  }, b.d)))))));
}

/* ============================================================
   TECHNOLOGY STACK (REAL — from audit)
   ============================================================ */
function TechnologySection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "technology",
    className: "bg-paper py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid items-end gap-10 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Technologies we use")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-6xl"
  }, "Technology strength defines the success of any business in the digital era.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-ink/65"
  }, "With experience developing 100+ products in a diverse range of industries, our team has honed the skills of domain expertise. With a young and intrapreneurial team at Bocxy, we perceive our client products as our own."))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl bg-ink p-8 text-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"
  }, "Tech stats"), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 font-serif text-4xl font-light tracking-tighter"
  }, "100+ products developed"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-sm text-paper/60"
  }, "across diverse industries"))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
  }, TECH_STACK.map((g, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: g.group,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border border-ink/10 bg-bone/40 p-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, g.group), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 flex flex-wrap gap-2"
  }, g.items.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "rounded-full border border-ink/15 bg-paper px-3 py-1.5 text-xs font-medium text-ink/80"
  }, t)))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 500
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl bg-clay p-7 text-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/70"
  }, "Always"), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 font-serif text-xl font-medium leading-snug"
  }, "Clean code. Reliable infrastructure. Long-term maintainability."), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-sm text-paper/75"
  }, "Every line of code addresses a real business need."))))));
}

/* ============================================================
   ABOUT — Mission, Vision, Team (real text from audit)
   ============================================================ */
function AboutPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-paper pt-[120px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-clay/10 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 pb-20 md:px-10 md:pb-28"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "About Bocxy")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    big: true
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-6 max-w-4xl font-serif text-6xl font-light leading-[0.96] tracking-tightest sm:text-8xl"
  }, "Behind Bocxy is a passionate team of technologists, strategists and industry experts.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-ink/65"
  }, "We believe in the power of digital transformation for India's wellness sector. With diverse backgrounds in IT, customer experience, design and business operations, our team brings together the right blend of innovation and industry knowledge.")))), /*#__PURE__*/React.createElement("section", {
    id: "story",
    className: "bg-bone/40 py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto grid max-w-[1320px] items-start gap-12 px-6 md:px-10 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Our story"), /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-4xl font-light leading-tight tracking-tighter sm:text-5xl"
  }, "Smart, scalable and secure digital solutions.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150,
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-5 font-serif text-xl leading-relaxed text-ink/80"
  }, /*#__PURE__*/React.createElement("p", null, "At Bocxy, we empower businesses with smart, scalable, and secure digital solutions designed to simplify operations and boost growth. From aesthetic clinic software and beauty & wellness management tools to salon spa software, HR payroll solutions, and customer relationship management systems, we deliver technology that streamlines your workflows, enhances client experiences, and drives measurable results."), /*#__PURE__*/React.createElement("p", null, "Our mission is to help businesses stay ahead in the digital era by offering software that is intuitive, customizable, and backed by enterprise-grade security. Whether you're managing appointments, automating payroll, or strengthening customer relationships, Bocxy ensures that your operations run smoothly, efficiently, and with complete reliability."), /*#__PURE__*/React.createElement("p", null, "With a client-first approach, cutting-edge features, and dedicated support, Bocxy isn't just a software provider \u2014 ", /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "we are your digital growth partner"), "."))))), /*#__PURE__*/React.createElement("section", {
    id: "mission",
    className: "bg-paper py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto grid max-w-[1320px] items-start gap-12 px-6 md:px-10 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Our mission"), /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-4xl font-light leading-tight tracking-tighter sm:text-5xl"
  }, "Help businesses stay ahead in the digital era.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150,
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-serif text-xl leading-relaxed text-ink/80"
  }, "Our mission is to help businesses stay ahead in the digital era by offering software that is intuitive, customizable, and backed by enterprise-grade security. Whether you're managing appointments, automating payroll, or strengthening customer relationships, Bocxy ensures that your operations run smoothly, efficiently, and with complete reliability."), /*#__PURE__*/React.createElement("p", {
    className: "mt-5 font-serif text-xl leading-relaxed text-ink/80"
  }, "With a client-first approach, cutting-edge features, and dedicated support, Bocxy isn't just a software provider \u2014 ", /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "we are your digital growth partner"), ".")))), /*#__PURE__*/React.createElement("section", {
    id: "vision",
    className: "bg-paper py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto grid max-w-[1320px] items-start gap-12 px-6 md:px-10 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "lg:col-span-7 lg:order-2"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Our vision"), /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-4xl font-light leading-tight tracking-tighter sm:text-5xl"
  }, "India's most trusted digital platform for beauty and wellness."), /*#__PURE__*/React.createElement("p", {
    className: "mt-7 font-serif text-xl leading-relaxed text-ink/80"
  }, "Our goal is not just to provide software but to become a digital growth partner for every wellness brand in India. By combining technology with deep industry understanding, Bocxy helps businesses unlock efficiency, stay competitive, and build lasting customer loyalty in an increasingly digital world."), /*#__PURE__*/React.createElement("p", {
    className: "mt-5 font-serif text-xl leading-relaxed text-ink/80"
  }, "At Bocxy, our vision is to become India's most trusted and preferred digital platform for managing and scaling beauty and wellness businesses. We aspire to create a future where every salon, spa, and clinic \u2014 whether big or small \u2014 can harness the power of technology to operate seamlessly, connect meaningfully with clients, and unlock their full growth potential."), /*#__PURE__*/React.createElement("p", {
    className: "mt-5 font-serif text-xl leading-relaxed text-ink/80"
  }, "By focusing on trust, innovation, and accessibility, we aim to transform the wellness industry into a truly digitally empowered ecosystem, where businesses thrive, customers enjoy unparalleled experiences, and India leads the way in digital adoption for wellness services.")), /*#__PURE__*/React.createElement(Reveal, {
    className: "lg:col-span-5 lg:order-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticky top-28 rounded-3xl bg-ink p-10 text-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"
  }, "In one line"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 font-serif text-2xl italic leading-snug text-paper/85"
  }, "\"A future where every salon, spa and clinic can harness the power of technology.\""), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 grid grid-cols-2 gap-4 border-t border-paper/15 pt-6 text-sm"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] uppercase tracking-wider text-paper/50"
  }, "Trust"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-paper/85"
  }, "Foundational")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] uppercase tracking-wider text-paper/50"
  }, "Innovation"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-paper/85"
  }, "Continuous")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] uppercase tracking-wider text-paper/50"
  }, "Accessibility"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-paper/85"
  }, "Universal")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] uppercase tracking-wider text-paper/50"
  }, "Focus"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-paper/85"
  }, "India first"))))))), /*#__PURE__*/React.createElement("section", {
    id: "team",
    className: "bg-bone/40 py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Leadership")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-6xl"
  }, "Meet the Bocxy team.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 font-serif text-lg italic text-ink/65"
  }, "\"Behind Bocxy is a passionate team of technologists, strategists, and industry experts who believe in the power of digital transformation for India's wellness sector.\""))), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
  }, TEAM.map((m, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: m.name,
    delay: i * 100
  }, /*#__PURE__*/React.createElement("div", {
    className: "group h-full rounded-3xl border border-ink/10 bg-paper p-8 transition-all hover:-translate-y-1 hover:shadow-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aspect-square w-full overflow-hidden rounded-2xl bg-bone"
  }, /*#__PURE__*/React.createElement("img", {
    src: m.img,
    alt: m.name,
    className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"
  }, m.company), /*#__PURE__*/React.createElement("h3", {
    className: "mt-2 font-serif text-2xl font-medium"
  }, m.name), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-sm text-taupe"
  }, m.role)))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-10 rounded-3xl border border-ink/10 bg-paper p-8"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-serif text-lg italic leading-relaxed text-ink/75"
  }, "\"We are united by a shared vision: to empower salons, spas, and clinics with smarter, simpler, and localized digital tools. Every feature we design, every update we release, and every piece of support we provide is driven by our commitment to helping businesses grow faster, operate smarter, and serve customers better.\""), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-sm text-taupe"
  }, "\u2014 Bocxy Group, with diverse backgrounds in IT, customer experience, design and business operations"))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-paper py-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl bg-cream/50 p-10 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"
  }, "Want to join?"), /*#__PURE__*/React.createElement("h3", {
    className: "mt-3 font-serif text-3xl font-light tracking-tighter sm:text-4xl"
  }, "Build the next generation of wellness software with us."), /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    className: "mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-all hover:bg-charcoal"
  }, "Get in touch ", /*#__PURE__*/React.createElement(Arrow, {
    className: "h-4 w-4"
  })))))));
}

/* ============================================================
   FAQ
   ============================================================ */
function FAQSection({
  asPage = false
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: asPage ? "faqs" : "faqs-inline",
    className: asPage ? "bg-paper py-24 md:py-32" : "bg-bone/40 py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-12 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Frequently asked")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-4xl font-light leading-tight tracking-tighter sm:text-5xl"
  }, "Questions, answered.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-5 font-serif text-lg italic text-ink/65"
  }, "Everything you need to know before getting started with Bocxy."))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10"
  }, FAQS.map((f, i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: f.q,
    item: f,
    index: i
  })))))));
}
function FaqItem({
  item,
  index
}) {
  return /*#__PURE__*/React.createElement(Reveal, {
    delay: index * 40
  }, /*#__PURE__*/React.createElement("details", {
    className: "group bg-paper"
  }, /*#__PURE__*/React.createElement("summary", {
    className: "flex items-center justify-between gap-6 p-6 transition-colors hover:bg-cream"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-serif text-lg font-medium"
  }, item.q), /*#__PURE__*/React.createElement("span", {
    className: "acc-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-transform"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-3.5 w-3.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "px-6 pb-6 text-sm leading-relaxed text-ink/75"
  }, item.a)));
}

/* ============================================================
   CONTACT
   ============================================================ */
function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    message: ""
  });
  const [sent, setSent] = useState(false);
  function submit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-paper pt-[120px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-clay/10 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 pb-16 md:px-10 md:pb-24"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Contact")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    big: true
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-6 font-serif text-6xl font-light leading-[0.96] tracking-tightest sm:text-8xl"
  }, "Let's talk about your business.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-ink/65"
  }, "Book a free demo, start a free trial, or just ask us a question. We'd love to hear from you.")))), /*#__PURE__*/React.createElement("section", {
    className: "bg-paper pb-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto grid max-w-[1320px] gap-12 px-6 md:px-10 lg:grid-cols-12 lg:gap-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    className: "rounded-3xl border border-ink/10 bg-bone/40 p-8 md:p-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-5 sm:grid-cols-2"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    value: form.name,
    onChange: v => setForm({
      ...form,
      name: v
    }),
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Mobile",
    value: form.mobile,
    onChange: v => setForm({
      ...form,
      mobile: v
    }),
    type: "tel",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "sm:col-span-2"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    value: form.email,
    onChange: v => setForm({
      ...form,
      email: v
    }),
    type: "email",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "sm:col-span-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    value: form.message,
    onChange: e => setForm({
      ...form,
      message: e.target.value
    }),
    rows: 5,
    className: "mt-2 w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink placeholder:text-taupe/60 focus:border-ink focus:outline-none",
    placeholder: "Tell us about your business and what you're looking for...",
    required: true
  })))), /*#__PURE__*/React.createElement("div", {
    className: "mt-7 flex flex-wrap items-center gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-all hover:bg-charcoal hover:shadow-lift"
  }, "Send message ", /*#__PURE__*/React.createElement(Arrow, {
    className: "h-4 w-4"
  })), /*#__PURE__*/React.createElement("a", {
    href: CONTACT.whatsapp,
    target: "_blank",
    rel: "noreferrer",
    className: "inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
  }, "Or chat on WhatsApp")), sent && /*#__PURE__*/React.createElement("div", {
    className: "mt-5 rounded-xl bg-leaf/10 px-4 py-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-leaf"
  }, "Thank you for contacting Us!"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-sm text-leaf"
  }, "We will contact you soon."))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 lg:col-span-5"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border border-ink/10 bg-paper p-8"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl font-medium"
  }, "Direct contact"), /*#__PURE__*/React.createElement("ul", {
    className: "mt-6 space-y-4 text-sm"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, "Phone"), CONTACT.phones.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.display,
    href: p.href,
    className: "mt-1 block font-serif text-lg text-ink hover:text-clay"
  }, p.display))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, "Email"), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${CONTACT.email}`,
    className: "mt-1 block font-serif text-lg text-ink hover:text-clay"
  }, CONTACT.email)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, "WhatsApp"), /*#__PURE__*/React.createElement("a", {
    href: CONTACT.whatsapp,
    target: "_blank",
    rel: "noreferrer",
    className: "mt-1 block font-serif text-lg text-ink hover:text-clay"
  }, "Chat instantly")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, "Office"), /*#__PURE__*/React.createElement("a", {
    href: CONTACT.mapLink,
    target: "_blank",
    rel: "noreferrer",
    className: "mt-1 block font-serif text-base leading-snug text-ink hover:text-clay"
  }, CONTACT.address))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl bg-ink p-8 text-paper"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-2xl font-medium"
  }, "Prefer a quick chat?"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-sm text-paper/70"
  }, "Our team is available Monday\u2013Saturday, 10am to 7pm IST. We'll respond within one business day."), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex flex-col gap-3"
  }, /*#__PURE__*/React.createElement(Btn, {
    href: CONTACT.whatsapp,
    variant: "clay"
  }, "Chat on WhatsApp"), /*#__PURE__*/React.createElement(Btn, {
    href: CONTACT.phones[0].href,
    variant: "outlineLight"
  }, "Call ", CONTACT.phones[0].display))))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-bone/40 py-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement("a", {
    href: CONTACT.mapLink,
    target: "_blank",
    rel: "noreferrer",
    className: "block rounded-3xl border border-ink/10 bg-paper p-2 transition-shadow hover:shadow-soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex aspect-[16/6] flex-col items-center justify-center rounded-2xl bg-bone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, "Office \xB7 Open in Google Maps"), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-center font-serif text-2xl italic text-ink/70"
  }, CONTACT.address), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-xs text-taupe"
  }, "Bhattad Towers, 3rd Floor \xB7 Westcott Road, Royapettah"))))));
}
function Field({
  label,
  value,
  onChange,
  type = "text",
  required
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "block"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    onChange: e => onChange(e.target.value),
    required: required,
    className: "mt-2 w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink placeholder:text-taupe/60 focus:border-ink focus:outline-none"
  }));
}

/* ============================================================
   INTERACTIVE PRODUCT TOUR
   ============================================================ */
function ProductTour() {
  const [tab, setTab] = useState("bookings");
  const order = ["bookings", "patient", "pos", "marketing", "hr", "reports"];
  const t = TOURS[tab];
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-ink py-24 text-paper md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    light: true
  }, "Inside the platform")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-6xl"
  }, "A guided tour of", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "how Bocxy actually works."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-paper/65"
  }, "Click through the modules to see what your team experiences day-to-day."))), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 grid gap-10 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "lg:col-span-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5"
  }, order.map((k, i) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setTab(k),
    className: `group flex w-full items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left transition-all ${tab === k ? "border-clay bg-clay/10 text-paper" : "border-paper/10 bg-paper/5 text-paper/70 hover:border-paper/30 hover:bg-paper/10"}`
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 font-serif text-lg"
  }, TOURS[k].title)), /*#__PURE__*/React.createElement(Arrow, {
    className: `h-4 w-4 transition-transform ${tab === k ? "text-clay translate-x-1" : "text-paper/40"}`
  }))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150,
    className: "lg:col-span-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border border-paper/10 bg-paper/5 p-8 md:p-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"
  }, "Now showing"), /*#__PURE__*/React.createElement("h3", {
    className: "mt-2 font-serif text-3xl font-light tracking-tighter sm:text-4xl"
  }, t.title), /*#__PURE__*/React.createElement("p", {
    className: "mt-5 max-w-2xl font-serif text-lg italic leading-relaxed text-paper/75"
  }, t.body), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3"
  }, ["Real-time sync", "Role-based access", "Mobile ready"].map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    className: "rounded-xl border border-paper/10 bg-paper/5 p-4 text-sm text-paper/75"
  }, f))), /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-clay hover:text-ember"
  }, "See it in your business ", /*#__PURE__*/React.createElement(Arrow, {
    className: "h-4 w-4"
  })))))));
}

/* ============================================================
   SECURITY & COMPLIANCE
   ============================================================ */
function SecuritySection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-bone/40 py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto grid max-w-[1320px] items-start gap-12 px-6 md:px-10 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Security & compliance"), /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-4xl font-light leading-tight tracking-tighter sm:text-5xl"
  }, "Your client data is your most valuable asset."), /*#__PURE__*/React.createElement("p", {
    className: "mt-5 max-w-md font-serif text-lg italic leading-relaxed text-ink/65"
  }, "Bocxy is built with state-of-the-art encryption, granular access controls, and the operational safeguards Indian wellness businesses need."), /*#__PURE__*/React.createElement("a", {
    href: "#/privacy",
    className: "mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-clay hover:text-rust"
  }, "Read our privacy policy ", /*#__PURE__*/React.createElement(Arrow, {
    className: "h-3.5 w-3.5"
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150,
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3 sm:grid-cols-2"
  }, SECURITY.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    className: "group rounded-2xl border border-ink/10 bg-paper p-5 transition-all hover:-translate-y-0.5 hover:border-ink/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-lg font-medium"
  }, s.t)), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-sm text-ink/65"
  }, s.d)))))));
}

/* ============================================================
   INTEGRATIONS MARKETPLACE
   ============================================================ */
function IntegrationsSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-paper py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Integrations")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-4xl font-light leading-tight tracking-tighter sm:text-5xl"
  }, "Plays well with the tools you already use.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-5 max-w-xl font-serif text-lg italic text-ink/65"
  }, "Connect Bocxy to your payments, calendars, accounting, marketing and logistics stack \u2014 no rip-and-replace."))), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
  }, INTEGRATIONS.map((it, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: it.t,
    delay: i * 40
  }, /*#__PURE__*/React.createElement("div", {
    className: "group flex h-full items-center gap-3 rounded-2xl border border-ink/10 bg-bone/40 p-5 transition-all hover:-translate-y-0.5 hover:border-ink/30 hover:bg-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-paper font-serif text-base font-medium text-clay"
  }, it.t[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold text-ink"
  }, it.t), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] uppercase tracking-wider text-taupe"
  }, it.d)))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 400
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-8 text-center text-xs text-taupe"
  }, "Don't see what you need? Bocxy offers bespoke integrations through our Customised Business Solutions."))));
}

/* ============================================================
   RESOURCES / JOURNAL
   ============================================================ */
function ResourcesSection({
  asPage = false
}) {
  const items = asPage ? BLOG_POSTS.concat([...BLOG_POSTS, ...BLOG_POSTS]).slice(0, 6) : BLOG_POSTS;
  return /*#__PURE__*/React.createElement("section", {
    id: "resources",
    className: asPage ? "bg-paper py-24 md:py-32" : "bg-bone/40 py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-end justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Resources")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-4xl font-light leading-tight tracking-tighter sm:text-5xl"
  }, "Our latest posts."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/journal",
    className: "text-sm font-medium text-clay hover:text-rust"
  }, "View all articles \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
  }, items.map((r, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: r.title + i,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("a", {
    href: r.to,
    className: "group flex h-full flex-col rounded-2xl border border-ink/10 bg-paper p-6 transition-all hover:-translate-y-1 hover:shadow-soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"
  }, r.kicker), /*#__PURE__*/React.createElement("h3", {
    className: "mt-3 flex-1 font-serif text-lg font-medium leading-snug text-ink transition-colors group-hover:text-clay"
  }, r.title), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-xs text-ink/65"
  }, r.desc), r.comments && r.comments.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mt-4 space-y-2 border-t border-ink/10 pt-3"
  }, r.comments.map(c => /*#__PURE__*/React.createElement("p", {
    key: c.n,
    className: "text-[11px] leading-relaxed text-ink/65"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-ink"
  }, c.n, ":"), " \"", c.t, "\""))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 text-[11px] font-semibold text-clay"
  }, "Read more \u2192")))))));
}
function JournalPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-paper pt-[120px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-clay/10 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 pb-16 md:px-10 md:pb-20"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Journal")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    big: true
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-6 max-w-4xl font-serif text-6xl font-light leading-[0.96] tracking-tightest sm:text-8xl"
  }, "Notes on the future", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "of beauty & wellness."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-ink/65"
  }, "Long-form insights from the Bocxy team on the technologies, workflows and customer trends shaping Indian beauty and wellness businesses.")))), /*#__PURE__*/React.createElement("section", {
    className: "bg-paper pb-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
  }, RESOURCES.concat(RESOURCES).map((r, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: r.title + i,
    delay: i % 4 * 60
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/journal",
    className: "group flex h-full flex-col rounded-2xl border border-ink/10 bg-paper p-6 transition-all hover:-translate-y-1 hover:shadow-soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"
  }, r.kicker), /*#__PURE__*/React.createElement("h3", {
    className: "mt-3 flex-1 font-serif text-xl font-medium leading-snug text-ink transition-colors group-hover:text-clay"
  }, r.title), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex items-center gap-2 text-[11px] text-taupe"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-px w-6 bg-ink/20"
  }), /*#__PURE__*/React.createElement("span", null, r.read, " read")))))))));
}

/* ============================================================
   CASE STUDY
   ============================================================ */
function CaseStudyPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-paper pt-[120px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-clay/10 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 pb-16 md:px-10 md:pb-24"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("a", {
    href: "#/",
    className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-taupe hover:text-clay"
  }, /*#__PURE__*/React.createElement(Chevron, {
    className: "h-3 w-3",
    flip: true
  }), " Back home")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-clay"
  }, "Customer story")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 180,
    big: true
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-4 max-w-4xl font-serif text-5xl font-light leading-[0.98] tracking-tightest sm:text-7xl"
  }, "From paper diaries to one quiet operating system.")))), /*#__PURE__*/React.createElement("section", {
    className: "bg-paper pb-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-12 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "lg:col-span-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-12"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"
  }, "The business"), /*#__PURE__*/React.createElement("h2", {
    className: "mt-3 font-serif text-3xl font-light tracking-tighter"
  }, CASE_STUDY.business), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 max-w-2xl text-sm leading-relaxed text-ink/65"
  }, "A representative scenario based on the workflows Bocxy is purpose-built for.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"
  }, "The challenge"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 max-w-2xl font-serif text-lg italic leading-relaxed text-ink/75"
  }, CASE_STUDY.challenge)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"
  }, "The approach"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 max-w-2xl font-serif text-lg italic leading-relaxed text-ink/75"
  }, CASE_STUDY.approach)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"
  }, "The outcome"), /*#__PURE__*/React.createElement("ul", {
    className: "mt-5 space-y-3"
  }, CASE_STUDY.outcome.map(o => /*#__PURE__*/React.createElement("li", {
    key: o,
    className: "flex items-start gap-3 text-sm text-ink/80"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clay text-paper"
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
  }))), o)))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150,
    className: "lg:col-span-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticky top-28 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl bg-ink p-8 text-paper"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-xl font-medium"
  }, "Could this be your business?"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-sm text-paper/70"
  }, "Walk through a tailored demo with our team \u2014 we'll show you exactly how Bocxy would fit your specific workflow."), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex flex-col gap-3"
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#/contact",
    variant: "clay"
  }, "Book a Free Demo"), /*#__PURE__*/React.createElement(Btn, {
    href: "#/contact",
    variant: "outlineLight"
  }, "Start Free Trial"))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl border border-ink/10 bg-bone/40 p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, "Disclaimer"), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-xs text-ink/65"
  }, "This page describes a representative scenario based on Bocxy's documented capabilities. It is not a real customer case study."))))))));
}

/* ============================================================
   CAREERS
   ============================================================ */
function CareersPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-paper pt-[120px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-clay/10 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 pb-16 md:px-10 md:pb-24"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Careers")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    big: true
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-6 max-w-4xl font-serif text-6xl font-light leading-[0.96] tracking-tightest sm:text-8xl"
  }, "Build the next generation of wellness software with us.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-ink/65"
  }, "Technology strength defines the success of any business in the digital era. With experience developing 100+ products across diverse industries, our young and intrapreneurial team perceives your product as our own \u2014 and proactively comes up with relevant suggestions in the development lifecycle.")))), /*#__PURE__*/React.createElement("section", {
    className: "bg-paper pb-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
  }, CAREERS.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.t,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("div", {
    className: "group h-full rounded-3xl border border-ink/10 bg-bone/40 p-7 transition-all hover:-translate-y-1 hover:shadow-soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    className: "mt-3 font-serif text-xl font-medium"
  }, c.t), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-sm leading-relaxed text-ink/70"
  }, c.d))))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-ink py-24 text-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-3xl px-6 text-center md:px-10"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    light: true
  }, "Get in touch")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-5 font-serif text-4xl font-light leading-tight tracking-tighter sm:text-5xl"
  }, "No open roles to list \u2014 yet.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-5 font-serif text-lg italic text-paper/65"
  }, "If building technology for India's beauty, wellness and healthcare businesses excites you, we'd still love to hear from you.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement("a", {
    href: `mailto:${CONTACT.email}?subject=Careers`,
    className: "mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-ink transition-all hover:bg-cream"
  }, CONTACT.email, " ", /*#__PURE__*/React.createElement(Arrow, {
    className: "h-4 w-4"
  }))))));
}

/* ============================================================
   PRIVACY POLICY (real excerpt from audit)
   ============================================================ */
function PrivacyPage() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-paper pt-[120px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-3xl px-6 pb-24 md:px-10"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Legal")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-6xl"
  }, "Terms of Service & Privacy Policy")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 font-serif text-lg italic text-ink/70"
  }, "Please carefully read these Terms of Service and privacy policy before accessing or using our website, platform, or mobile application, and before availing any of our services.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-10 space-y-6 text-sm leading-relaxed text-ink/75"
  }, /*#__PURE__*/React.createElement("p", null, "By accessing or using and/or availing any of the Services, you agree to be bound by the terms described herein and all terms incorporated by reference. If you do not agree to all of these terms, do not avail Services or use this website, platform, or mobile application."), /*#__PURE__*/React.createElement("h2", {
    className: "mt-10 font-serif text-2xl font-medium text-ink"
  }, "Use of services and the website"), /*#__PURE__*/React.createElement("p", null, "The Bocxy platform is provided for business use by salons, spas, aesthetic clinics, dermatology clinics, med spas and wellness centres. We do not provide medical advice; the platform is an operations and management tool. Any references to clinical workflows are for documentation and billing purposes only."), /*#__PURE__*/React.createElement("h2", {
    className: "mt-10 font-serif text-2xl font-medium text-ink"
  }, "Definitions"), /*#__PURE__*/React.createElement("p", null, "When we refer to a physician or healthcare provider, we mean the licensed professional or clinic responsible for delivering care to their clients. When we refer to a healthcare provider using Bocxy, we mean the business account holder. Content or offers presented from our Advertisers are governed by their own terms."), /*#__PURE__*/React.createElement("h2", {
    className: "mt-10 font-serif text-2xl font-medium text-ink"
  }, "Use of services"), /*#__PURE__*/React.createElement("p", null, "You agree to use the Services only for lawful business purposes. You will not misuse the platform, attempt to access records you are not authorised for, or interfere with the operation of the Services. If you are a physician or healthcare provider, you remain responsible for your clinical decisions and for obtaining any required client consents."), /*#__PURE__*/React.createElement("h2", {
    className: "mt-10 font-serif text-2xl font-medium text-ink"
  }, "Shipping & refund policy"), /*#__PURE__*/React.createElement("p", null, "Bocxy delivers software as a service \u2014 there is no physical shipment. Subscription, onboarding and support fees are billed as agreed at purchase. If you believe a charge is incorrect, contact us and we will review it promptly."), /*#__PURE__*/React.createElement("h2", {
    className: "mt-10 font-serif text-2xl font-medium text-ink"
  }, "Data security"), /*#__PURE__*/React.createElement("p", null, "Bocxy operates within a secure, all-in-one platform designed with state-of-the-art encryption for data protection. Access to patient, financial and operational records is governed by role-based access controls and audit trails."), /*#__PURE__*/React.createElement("h2", {
    className: "mt-10 font-serif text-2xl font-medium text-ink"
  }, "Contact"), /*#__PURE__*/React.createElement("p", null, "If you have any questions, please contact us at ", /*#__PURE__*/React.createElement("a", {
    href: `mailto:${CONTACT.email}`,
    className: "text-clay underline"
  }, CONTACT.email), ", ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:support@Bocxy.com",
    className: "text-clay underline"
  }, "support@Bocxy.com"), " or call ", /*#__PURE__*/React.createElement("a", {
    href: CONTACT.phoneHref,
    className: "text-clay underline"
  }, CONTACT.phoneDisplay), "."), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 rounded-2xl border border-ink/10 bg-bone/40 p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe"
  }, "The full Terms of Service and Privacy Policy"), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm text-ink/70"
  }, "The complete, legally binding text is available at ", /*#__PURE__*/React.createElement("a", {
    href: "https://bocxy.com/privacy-policy",
    target: "_blank",
    rel: "noreferrer",
    className: "text-clay underline"
  }, "bocxy.com/privacy-policy"), "."))))));
}

/* ============================================================
   FLOATING CHAT WIDGET (mock)
   ============================================================ */
function ChatWidget() {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    "aria-label": "Open chat",
    className: "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-paper shadow-lift transition-transform hover:scale-105 md:bottom-8 md:right-8"
  }, open ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-5 w-5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18",
    strokeLinecap: "round"
  })) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-5 w-5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-3rem)] overflow-hidden rounded-3xl border border-ink/10 bg-paper shadow-lift md:bottom-28 md:right-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-ink p-5 text-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-lg"
  }, "Chat with the Bocxy team"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 text-xs text-paper/60"
  }, "We typically reply within minutes during business hours.")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 p-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl rounded-tl-sm bg-bone p-3 text-sm text-ink/85"
  }, "Hi! Looking for a specific product, pricing, or want to book a demo?"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, ["Book a Free Demo", "Start a Free Trial", "Talk to sales"].map(q => /*#__PURE__*/React.createElement("a", {
    key: q,
    href: "#/contact",
    onClick: () => setOpen(false),
    className: "block rounded-full border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
  }, q)), /*#__PURE__*/React.createElement("a", {
    href: CONTACT.whatsapp,
    target: "_blank",
    rel: "noreferrer",
    className: "block rounded-full border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
  }, "Continue on WhatsApp")))));
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */
function TestimonialsSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-paper py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Our customers love us")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-6xl"
  }, "Hear from some of", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "our happy clients.")))), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 grid gap-6 md:grid-cols-3"
  }, TESTIMONIALS.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t.n,
    delay: i * 100
  }, /*#__PURE__*/React.createElement("figure", {
    className: "group flex h-full flex-col rounded-3xl border border-ink/10 bg-bone/40 p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-paper hover:shadow-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-0.5 text-clay"
  }, [0, 1, 2, 3, 4].map(s => /*#__PURE__*/React.createElement("span", {
    key: s
  }, "\u2605"))), /*#__PURE__*/React.createElement("blockquote", {
    className: "mt-5 flex-1 font-serif text-xl font-light leading-snug text-ink"
  }, "\"", t.q, "\""), /*#__PURE__*/React.createElement("figcaption", {
    className: "mt-7 flex items-center gap-3 border-t border-ink/10 pt-5"
  }, /*#__PURE__*/React.createElement("img", {
    src: t.img,
    alt: t.n,
    className: "h-12 w-12 rounded-full object-cover",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold text-ink"
  }, t.n), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-taupe"
  }, t.r)))))))));
}

/* ============================================================
   WHY BOCCXY (real benefits from landing page)
   ============================================================ */
function WhyBocxySection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-cream/40 py-24 md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto grid max-w-[1320px] items-start gap-12 px-6 md:px-10 lg:grid-cols-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Why Bocxy")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-6xl"
  }, "Why businesses", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    className: "italic text-clay"
  }, "choose Bocxy."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 font-serif text-lg italic leading-relaxed text-ink/65"
  }, "\"Bocxy isn't just a software provider \u2014 we are your digital growth partner.\""))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "space-y-3"
  }, WHY_BOCCXY.map((b, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: b.t,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("li", {
    className: "group flex items-start gap-5 rounded-2xl border border-ink/10 bg-paper p-6 transition-all hover:-translate-x-1 hover:border-ink/30"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-clay font-mono text-[10px] font-semibold text-paper"
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-serif text-xl font-medium text-ink"
  }, b.t), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-sm leading-relaxed text-ink/70"
  }, b.d)))))))));
}

/* ============================================================
   DEMO VIDEOS
   ============================================================ */
function DemosSection() {
  const [open, setOpen] = useState(null);
  const demos = [{
    key: "salon",
    title: "Experience Our Salon Product in Action",
    sub: "Salon & Spa Software · Demo",
    desc: "Watch this short demo video to see how our software simplifies your workflow.",
    poster: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    src: "https://www.bocxy.com/video/salon-demo.mp4"
  }, {
    key: "aesthetic",
    title: "Clinic Demo Video — Experience Our Aesthetic Clinic Software in Action",
    sub: "Aesthetic Clinic Software · Demo",
    desc: "Watch this short demo video to see how our platform enhances your clinic's efficiency and patient care.",
    poster: "https://images.unsplash.com/photo-1629909613654-28e377c37b17?q=80&w=1200&auto=format&fit=crop",
    src: "https://www.bocxy.com/video/aesthetic_video.mp4"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-ink py-24 text-paper md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 md:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    light: true
  }, "See it in action")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-6 font-serif text-5xl font-light leading-tight tracking-tighter sm:text-6xl"
  }, "Product demos.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 font-serif text-lg italic leading-relaxed text-paper/70"
  }, "Two-minute walkthroughs that show how Bocxy actually works in a real salon or clinic."))), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 grid gap-6 md:grid-cols-2"
  }, demos.map((d, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: d.key,
    delay: i * 100
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(d),
    className: "group block w-full text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[16/9] overflow-hidden rounded-2xl"
  }, /*#__PURE__*/React.createElement("img", {
    src: d.poster,
    alt: d.title,
    className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-ink/40"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex h-16 w-16 items-center justify-center rounded-full bg-paper text-ink shadow-lift transition-transform duration-300 group-hover:scale-110"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "h-6 w-6 ml-1"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5v14l11-7z"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"
  }, d.sub), /*#__PURE__*/React.createElement("h3", {
    className: "mt-2 font-serif text-2xl font-medium"
  }, d.title), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm text-paper/65"
  }, d.desc)))))), open && /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(null),
    className: "fixed inset-0 z-[80] flex items-center justify-center bg-ink/80 p-6 backdrop-blur-md"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    className: "relative w-full max-w-4xl overflow-hidden rounded-2xl bg-ink shadow-lift"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(null),
    "aria-label": "Close",
    className: "absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-paper text-ink hover:bg-clay hover:text-paper"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-4 w-4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("video", {
    src: open.src,
    poster: open.poster,
    controls: true,
    autoPlay: true,
    className: "aspect-video w-full bg-ink"
  }), /*#__PURE__*/React.createElement("div", {
    className: "p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-clay"
  }, "Bocxy product demo"), /*#__PURE__*/React.createElement("h3", {
    className: "mt-1 font-serif text-2xl font-medium"
  }, open.title))))));
}

/* ============================================================
   STANDALONE DEMOS + SUCCESS PAGES (mirror original /demos routes)
   ============================================================ */
function DemosPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "relative overflow-hidden bg-paper pt-[120px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-clay/10 blur-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-[1320px] px-6 pb-16 md:px-10 md:pb-20"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Product demos")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    big: true
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-6 max-w-4xl font-serif text-6xl font-light leading-[0.96] tracking-tightest sm:text-8xl"
  }, "See Bocxy in action.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-ink/65"
  }, "Experience our salon and aesthetic clinic software in action \u2014 short demo videos showing how Bocxy simplifies your workflow.")))), /*#__PURE__*/React.createElement(DemosSection, null));
}
function SuccessPage() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-paper pt-[160px] pb-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-2xl px-6 text-center md:px-10"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-leaf/15"
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
  })))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mt-8 font-serif text-5xl font-light tracking-tighter sm:text-6xl"
  }, "Thank you for contacting Us!")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-5 font-serif text-xl italic text-ink/65"
  }, "We will contact you soon.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex flex-wrap justify-center gap-3"
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#/",
    variant: "dark"
  }, "Back to home"), /*#__PURE__*/React.createElement(Btn, {
    href: "#/contact",
    variant: "clay"
  }, "Book a Free Demo")))));
}

/* ============================================================
   HOME PAGE (with all upgrades)
   ============================================================ */
function HomePage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(TrustStrip, null), /*#__PURE__*/React.createElement(EcosystemSection, null), /*#__PURE__*/React.createElement(ProductsOverview, null), /*#__PURE__*/React.createElement(ProductTour, null), /*#__PURE__*/React.createElement(WhyBocxySection, null), /*#__PURE__*/React.createElement(DemosSection, null), /*#__PURE__*/React.createElement(IntegrationsSection, null), /*#__PURE__*/React.createElement(TechnologySection, null), /*#__PURE__*/React.createElement(SecuritySection, null), /*#__PURE__*/React.createElement(TestimonialsSection, null), /*#__PURE__*/React.createElement(ResourcesSection, null), /*#__PURE__*/React.createElement(FAQSection, null), /*#__PURE__*/React.createElement("section", {
    className: "bg-ink py-24 text-paper md:py-32"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-3xl px-6 text-center md:px-10"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    light: true
  }, "Ready to start?")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-5 font-serif text-5xl font-light leading-[1.02] tracking-tighter sm:text-6xl"
  }, "Make your business smarter.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-6 font-serif text-xl italic leading-relaxed text-paper/75"
  }, "\"Bocxy ensures your operations run smoothly, efficiently, and with complete reliability.\"")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex flex-wrap justify-center gap-3"
  }, /*#__PURE__*/React.createElement(Btn, {
    href: "#/contact",
    variant: "clay"
  }, "Book a Free Demo"), /*#__PURE__*/React.createElement(Btn, {
    href: "#/contact",
    variant: "outlineLight"
  }, "Start a free trial"))))));
}

/* ============================================================
   APP ROUTER
   ============================================================ */
function App() {
  const [route] = useRoute();
  let page = null;
  const norm = (route || "/").replace(/\/+$/, "") || "/";
  if (norm === "/products/clinic" || norm === "/products/clinic-software") page = /*#__PURE__*/React.createElement(ProductShowcase, {
    id: "clinic"
  });else if (norm === "/products/salon" || norm === "/products/salon-spa-software") page = /*#__PURE__*/React.createElement(ProductShowcase, {
    id: "salon"
  });else if (norm === "/products/medspa" || norm === "/products/medspa-software") page = /*#__PURE__*/React.createElement(ProductShowcase, {
    id: "medspa"
  });else if (norm === "/products/derm" || norm === "/products/dermatology-clinic-software") page = /*#__PURE__*/React.createElement(ProductShowcase, {
    id: "derm"
  });else if (norm === "/products/crm" || norm === "/products/crm-software") page = /*#__PURE__*/React.createElement(ProductShowcase, {
    id: "crm"
  });else if (norm === "/products/hr" || norm === "/products/hr-and-payroll-software") page = /*#__PURE__*/React.createElement(ProductShowcase, {
    id: "hr"
  });else if (norm === "/services/ims" || norm === "/services/System-integrated-management-system") page = /*#__PURE__*/React.createElement(SolutionShowcase, {
    id: "ims"
  });else if (norm === "/services/erp" || norm === "/services/enterprise-resource-planning") page = /*#__PURE__*/React.createElement(SolutionShowcase, {
    id: "erp"
  });else if (norm === "/services/custom" || norm === "/services/customised-busniess-solutions" || norm === "/services/customised-business-solutions") page = /*#__PURE__*/React.createElement(SolutionShowcase, {
    id: "custom"
  });else if (norm === "/services/future" || norm === "/services/future-of-aesthetic-clinics") page = /*#__PURE__*/React.createElement(SolutionShowcase, {
    id: "future"
  });else if (norm === "/products") page = /*#__PURE__*/React.createElement(ProductsOverview, null);else if (norm === "/services") page = /*#__PURE__*/React.createElement(ServicesOverview, null);else if (norm === "/about") page = /*#__PURE__*/React.createElement(AboutPage, null);else if (norm === "/journal" || norm === "/new-blogs") page = /*#__PURE__*/React.createElement(JournalPage, null);else if (norm === "/case-study") page = /*#__PURE__*/React.createElement(CaseStudyPage, null);else if (norm === "/careers" || norm === "/carrer") page = /*#__PURE__*/React.createElement(CareersPage, null);else if (norm === "/privacy" || norm === "/privacy-policy") page = /*#__PURE__*/React.createElement(PrivacyPage, null);else if (norm === "/contact") page = /*#__PURE__*/React.createElement(ContactPage, null);else if (norm === "/success") page = /*#__PURE__*/React.createElement(SuccessPage, null);else if (norm === "/demos" || norm === "/demo-salon" || norm === "/demo-aesthetic") page = /*#__PURE__*/React.createElement(DemosPage, null);else page = /*#__PURE__*/React.createElement(HomePage, null);
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-paper font-sans text-ink"
  }, /*#__PURE__*/React.createElement(ScrollProgress, null), /*#__PURE__*/React.createElement(Navbar, {
    route: route
  }), /*#__PURE__*/React.createElement("main", {
    key: route
  }, page), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(ChatWidget, null));
}
document.getElementById("root").dataset.mounted = "true";
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));