import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const pickUProject = {
  id: 'picku',
  title: 'PickU (PickYou) — On-Demand Ride-Hailing & Logistics Ecosystem',
  category: 'Commercial Production System',
  subtitle: 'Production-Grade Mobility Platform across iOS, Android, Cloud Backend & Admin Portal',
  liveUrl: 'https://picku.lk',
  status: 'Live in Production • picku.lk',
  statusColor: 'border-mint/40 bg-mint/10 text-mint',
  image: `${import.meta.env.BASE_URL}assets/projects/blazor-app.jpg`,
  gallery: [
    `${import.meta.env.BASE_URL}assets/projects/blazor-app.jpg`,
    `${import.meta.env.BASE_URL}assets/projects/auth-system.jpg`,
  ],
  ecosystem: [
    'Passenger & Driver Mobile Apps (iOS & Android)',
    'Real-Time Cloud Backend (Laravel 12 & PostGIS)',
    'Operations & Admin Portal (React 19 & Vite)',
  ],
  summaryBlurb:
    'PickU is an end-to-end commercial ride-hailing and on-demand mobility platform built for the transport market. The ecosystem features two cross-platform mobile apps powered by React Native (Expo 54), a real-time Laravel 12 & PostgreSQL/PostGIS backend with Laravel Reverb WebSockets, and an operations dashboard built with React & Vite. Key engineering highlights include sub-second geospatial driver dispatch, background GPS telemetry with noise/jump filtering, round-trip multi-leg routing, and a double-entry general ledger for financial settlement and commission netting.',
  challenge:
    'Building a competitive ride-hailing platform requires solving complex distributed systems problems: matching passengers with moving drivers within milliseconds, tracking vehicle positions reliably in low-connectivity areas without draining mobile batteries, preventing fare fraud caused by GPS drift, and managing multi-party financial settlement (cash vs. digital card payments) with absolute mathematical integrity. PickU was designed and built from scratch as a scalable, fault-tolerant mobility platform tailored to local vehicles (Tuk-Tuks, Cars, Motorbikes) and local payment/SMS gateways.',
  techStack: {
    mobile: 'React Native 0.81, Expo SDK 54, Expo Router v6, React 19, NativeWind, React Native Maps, Reanimated v4',
    backend: 'Laravel 12 (PHP 8.2+), PostgreSQL with PostGIS Spatial Extension, Redis, Laravel Reverb (WebSockets), Supervisor',
    admin: 'React 19, Vite 8, React Router v7, Laravel Echo, jsPDF / SheetJS',
    thirdParty: 'Google Maps API (Routes v2, Places Autocomplete New), Notify.lk (SMS OTP), Expo Push Notifications, Cloudinary',
    devOps: 'Ubuntu Linux, Nginx, PHP-FPM, Supervisor Worker Daemons, Safe Zero-Downtime Deployment Pipeline',
  },
  highlights: [
    {
      title: '1. High-Performance Geospatial Dispatch Engine',
      points: [
        'Multi-tiered driver discovery utilizing PostgreSQL PostGIS spatial radius indexing, with fallback to Redis geospatial caching and spherical distance computations.',
        'Sequential ring-offer dispatching: candidate drivers are queued with real-time countdown timers in Redis; offers expire and transition automatically via delayed background workers if rejected or timed out.',
        'Driver rejection cooldowns to prevent spamming unaccepted offers to the same driver.',
      ],
    },
    {
      title: '2. Real-Time Telemetry & GPS Anomaly Filtering Pipeline',
      points: [
        'Driver app runs headless background location tracking, continuously streaming coordinates to the backend during active trips.',
        'Real-time telemetry ingestion engine sanitizes location coordinates using strict acceptance criteria: rejecting low-accuracy GPS points, sequence duplicates, and detecting impossible physical speed jumps to eliminate GPS drift and fare inflation.',
      ],
    },
    {
      title: '3. Strict Finite State Machine (FSM) & Return-Trip Architecture',
      points: [
        'Deterministic ride lifecycle (REQUESTED ➔ ACCEPTED ➔ ARRIVED ➔ STARTED ➔ COMPLETED / CANCELLED) with fully audited state transitions and historical audit logs.',
        'Round-Trip / Return Leg Architecture: Enables passengers to book return trips with intermediate waiting periods, automated waiting-time billing, and early termination safeguards billed strictly on outbound distance.',
        '"Book for a Friend" feature allowing third-party passenger dispatch with custom contact handoff.',
      ],
    },
    {
      title: '4. Double-Entry General Ledger Financial Architecture',
      points: [
        'Complete in-house accounting system where every transaction produces balanced, immutable journal entries (total debits equal total credits) guarded by strict ledger balance validation.',
        'Signed Single-Balance Netting: Cash rides decrease driver balance (driver holds cash including PickU commission); Card rides increase driver balance (PickU holds fare). Both net out automatically without manual commission repayments.',
        'Dynamic per-vehicle fare configuration (base fare, per-km rate, per-minute waiting fee, cancellation fees, Haversine floor validation).',
      ],
    },
    {
      title: '5. Driver Onboarding, KYC & Document Verification',
      points: [
        'Multi-step onboarding collecting National Identity Cards (NIC), driver licenses, revenue licenses, and vehicle inspection photos stored securely on Cloudinary.',
        'Comprehensive administrative approval workflow with role-based access control (Super Admin, Dispatchers, Operators).',
      ],
    },
    {
      title: '6. Production Safety & Deployment Pipeline',
      points: [
        'Custom zero-downtime deployment pipelines featuring automated pre-deploy backups, isolated dry-run checks, bundle validation, and guarded database migration gates.',
      ],
    },
  ],
  tags: [
    'Laravel 12',
    'PostgreSQL / PostGIS',
    'React Native (Expo 54)',
    'Laravel Reverb WebSockets',
    'Redis',
    'Google Maps API',
    'Docker / Nginx',
  ],
};

const driveCareCardScreenshots = [
  {
    title: 'Station Dashboard',
    label: 'Vue 3.5 Web Console',
    badge: 'Station Portal',
    isMobile: false,
    src: encodeURI(`${import.meta.env.BASE_URL}assets/drive care/Screenshot 2026-09-05 140241.png`),
    caption: 'Vue 3.5 Web Console: Station Owner Dashboard & Real-Time Bookings',
  },
  {
    title: 'Gemini AI Assistant',
    label: 'Google Gemini API',
    badge: 'AI Operations',
    isMobile: false,
    src: encodeURI(`${import.meta.env.BASE_URL}assets/drive care/Screenshot 2026-08-27 135004.png`),
    caption: 'Google Gemini AI: Conversational Operations Assistant & Staff Inquiry',
  },
  {
    title: 'Mobile Garage',
    label: 'Flutter & Dart',
    badge: 'Mobile App',
    isMobile: true,
    src: encodeURI(`${import.meta.env.BASE_URL}assets/drive care/mobile/Screenshot_20260827-133035.png`),
    caption: 'Flutter Mobile App: Vehicle Garage Management & Service Booking',
  },
  {
    title: 'AI Mobile Co-Pilot',
    label: 'Gemini Mobile Chat',
    badge: 'Mobile AI',
    isMobile: true,
    src: encodeURI(`${import.meta.env.BASE_URL}assets/drive care/mobile/Screenshot_20260827-133043.png`),
    caption: 'Flutter Mobile: Gemini AI Automotive Diagnostics & Virtual Co-Pilot',
  },
  {
    title: 'Live QR Check-In',
    label: 'Web & Mobile Sync',
    badge: 'QR Check-In',
    isMobile: false,
    src: encodeURI(`${import.meta.env.BASE_URL}assets/drive care/Screenshot 2026-08-27 134013.png`),
    caption: 'Real-Time Check-In: Station QR Scanner & In-Progress Service Management',
  },
];

const driveCareProject = {
  id: 'drivecare',
  title: 'DriveCare — Real-Time Vehicle Service Booking & Garage Management Ecosystem',
  category: 'Academic & Engineering Project',
  subtitle: 'Multi-Tier Ecosystem with Flutter Mobile App, Vue 3 Web Portal & Google Gemini AI Engine',
  status: 'Academic Capstone Project',
  statusColor: 'border-royal/40 bg-royal/10 text-lavender',
  image: encodeURI(`${import.meta.env.BASE_URL}assets/drive care/Screenshot 2026-09-05 140241.png`),
  gallery: [
    {
      src: encodeURI(`${import.meta.env.BASE_URL}assets/drive care/Screenshot 2026-09-05 140241.png`),
      title: 'Station Dashboard & Real-Time Bookings',
      category: 'Vue 3.5 Web Portal',
      isMobile: false,
      description: 'Central operations console displaying live incoming bookings, active service metrics, and station ratings.',
    },
    {
      src: encodeURI(`${import.meta.env.BASE_URL}assets/drive care/Screenshot 2026-08-27 135004.png`),
      title: 'Google Gemini AI Operations Assistant',
      category: 'AI Operations Suite',
      isMobile: false,
      description: 'Conversational AI answering operational queries, staff rosters, and financial breakdowns in real-time.',
    },
    {
      src: encodeURI(`${import.meta.env.BASE_URL}assets/drive care/Screenshot 2026-08-27 134013.png`),
      title: 'Ongoing Services & Station QR Check-In',
      category: 'Web Portal & WebSockets',
      isMobile: false,
      description: 'Live job tracking interface showing checked-in vehicles, service progress, and contactless QR scanning.',
    },
    {
      src: encodeURI(`${import.meta.env.BASE_URL}assets/drive care/Screenshot 2026-08-27 134923.png`),
      title: 'Automated Commission & Platform Billing',
      category: 'Laravel 12 Cron Engine',
      isMobile: false,
      description: 'Automated monthly invoicing, platform commission calculations, and payment tracking.',
    },
    {
      src: encodeURI(`${import.meta.env.BASE_URL}assets/drive care/mobile/Screenshot_20260827-133035.png`),
      title: 'Vehicle Garage & Document Expiry Management',
      category: 'Flutter Mobile App',
      isMobile: true,
      description: 'Mobile garage with multi-vehicle tracking, document expiry alerts, and direct service scheduling.',
    },
    {
      src: encodeURI(`${import.meta.env.BASE_URL}assets/drive care/mobile/Screenshot_20260827-133043.png`),
      title: 'DriveCare AI Automotive Co-Pilot',
      category: 'Gemini AI Mobile Chat',
      isMobile: true,
      description: 'Conversational automotive assistant delivering diagnostics and personalized vehicle care tips.',
    },
    {
      src: encodeURI(`${import.meta.env.BASE_URL}assets/drive care/mobile/Screenshot_20260827-133253.png`),
      title: 'Nearby Station Geo-Discovery & Service Cart',
      category: 'Flutter Mobile App',
      isMobile: true,
      description: 'Interactive station discovery with multi-service cart selection and dynamic slot holds.',
    },
    {
      src: encodeURI(`${import.meta.env.BASE_URL}assets/drive care/mobile/Screenshot_20260827-133703.png`),
      title: 'Contactless QR Arrival Check-In',
      category: 'Flutter Mobile App',
      isMobile: true,
      description: 'Sub-second contactless QR check-in pushing immediate arrival notifications to the garage station dashboard.',
    },
  ],
  ecosystem: [
    'Vehicle Owner Mobile App (Flutter & Dart)',
    'Station Owner & Admin Portal (Vue 3.5 & Vite 7)',
    'Real-Time Cloud Backend (Laravel 12 & Laravel Reverb)',
    'AI Diagnostics & Forecasting Engine (Google Gemini API)',
  ],
  summaryBlurb:
    'DriveCare is an end-to-end, multi-tier vehicle service booking and smart garage operations platform. Built for automotive ecosystems, it unifies four user roles—Vehicle Owners, Station Owners, Mechanics/Staff, and Platform Administrators—into a cohesive, real-time platform. Features include real-time tracking via WebSockets, contactless QR check-in, map-based station discovery, dynamic slot scheduling, automated station billing, and a Google Gemini-powered AI diagnostic assistant & predictive business forecasting engine.',
  challenge:
    'Traditional vehicle service booking often suffers from fragmented phone scheduling, zero live progress visibility for drivers, and manual invoice/pen-and-paper tracking for garage owners. DriveCare modernizes automotive care through a unified multi-client ecosystem: a mobile app for vehicle owners, an operational web suite for service stations and mechanics, and a central administration portal.',
  techStack: {
    mobile: 'Flutter 3.x / Dart, Provider, OpenStreetMap, Camera QR Scanner, Native WebSocket Protocol Client',
    backend: 'Laravel 12, PHP 8.2+, Laravel Sanctum (Auth), Eloquent ORM, Scheduled Billing Daemons',
    realTime: 'Laravel Reverb (Native WebSockets, Secure Private User & Station Channels), Laravel Echo',
    webFrontend: 'Vue 3.5 (Composition API), Vite 7, Pinia, Tailwind CSS, Lucide Icons, SweetAlert2',
    artificialIntelligence: 'Google Gemini API (gemini-1.5-flash), Dual-Persona Context Pipelines & Diagnostics',
    database: 'SQLite (Development) / MySQL / PostgreSQL, Redis-compatible Cache',
  },
  multiRoleWorkflows: [
    {
      role: 'Vehicle Owners (Flutter Mobile App)',
      points: [
        'Vehicle profile management (make, model, transmission, fuel, mileage, and document expiry reminders).',
        'Nearby service station geo-discovery filtered by vehicle compatibility and GPS radius.',
        'Multi-service cart scheduling with slot holds and overlap conflict prevention.',
        'Contactless QR check-in upon arrival at the station.',
        'Live bi-directional service tracking via real-time WebSocket events (pending ➔ confirmed ➔ arrived ➔ completed).',
        'Interactive automotive diagnostic AI assistant powered by Google Gemini.',
      ],
    },
    {
      role: 'Station Owners & Mechanics (Vue 3 Web App)',
      points: [
        'End-to-end booking lifecycle management (arrivals, job queues, checkout status, visit adjustments).',
        'In-flight repair adjustments: Mechanics append extra repair items and labor costs mid-service with real-time recalculations pushed to customer mobile screen.',
        'Staff role creation, duty assignments, and station-issued quick-login codes.',
        'Automated monthly subscription billing, invoice tracking, and payment verification.',
        'AI-driven business predictions: 30-day revenue projections, turnover estimates, and peak day forecasting.',
      ],
    },
    {
      role: 'Platform Administrators',
      points: [
        'System-wide operational auditing, revenue oversight, station verification, and role-based access control.',
      ],
    },
  ],
  highlights: [
    {
      title: '1. Custom Hand-Rolled WebSocket Protocol in Flutter',
      points: [
        'Rather than relying on heavy third-party plugins, engineered a custom lightweight WebSocket service in Dart implementing the Pusher protocol to communicate directly with Laravel Reverb, enabling sub-second status synchronization across web and mobile.',
      ],
    },
    {
      title: '2. Concurrency-Safe Intelligent Scheduling Engine',
      points: [
        'Built an intelligent availability scheduling engine to calculate station capacity, slot duration overlaps, and temporary booking holds, eliminating double-bookings during simultaneous checkout flows.',
      ],
    },
    {
      title: '3. Dual-Persona Google Gemini AI Integration',
      points: [
        'Implemented role-aware prompt pipelines with persistent conversation context windows and rate limiting, delivering customized mechanical guidance for drivers and revenue forecasting for station owners.',
      ],
    },
    {
      title: '4. In-Flight Visit Adjustments & Dynamic Checkout Engine',
      points: [
        'Developed dynamic visit adjustment accounting, allowing mechanics to append extra repair items and labor costs mid-service with real-time recalculations pushed directly to the customer mobile checkout screen.',
      ],
    },
    {
      title: '5. Automated Recurring Billing Engine',
      points: [
        'Built scheduled background tasks with timezone-aware cron scheduling to automate recurring invoice generation and enforce station suspension for overdue accounts.',
      ],
    },
  ],
  tags: [
    'Flutter & Dart',
    'Vue 3.5 & Vite',
    'Laravel 12',
    'Laravel Reverb WebSockets',
    'Google Gemini AI',
    'Tailwind CSS',
    'MySQL / SQLite',
  ],
};

const supportingProjects = [
  {
    id: 'softmaster-erp',
    title: 'Client Enterprise System Implementation',
    category: 'Commercial Enterprise System',
    status: 'Softmaster Technologies',
    statusColor: 'border-royal/40 bg-royal/10 text-lavender',
    description:
      'Tailored business operations, inventory flows, and administrative workflow automation built for commercial clients using Laravel and Vue.js.',
    detailedDescription:
      'Engineered tailored enterprise systems to streamline client business operations, inventory tracking, and transaction reporting. Designed and documented clean RESTful APIs in Laravel, created reactive user interfaces with Vue.js, and structured relational MySQL schemas with optimized indexing for sub-second responses.',
    highlights: [
      'Custom administrative dashboards and operational reporting pipelines',
      'Clean RESTful API architecture connecting frontend modules with backend logic',
      'Optimized relational database queries for reduced server latency',
      'Role-based permission systems and secure user management',
    ],
    image: `${import.meta.env.BASE_URL}assets/projects/elearning.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}assets/projects/elearning.jpg`,
      `${import.meta.env.BASE_URL}assets/projects/accessories.jpg`,
    ],
    tags: ['Laravel', 'Vue.js', 'MySQL', 'REST APIs', 'Tailwind CSS'],
  },
  {
    id: 'store-3d',
    title: 'Interactive 3D Online Store',
    category: 'Engineering & 3D Project',
    status: 'Full-Stack & 3D Engineering',
    statusColor: 'border-aqua/40 bg-aqua/10 text-aqua',
    description:
      'A full-stack e-commerce application integrating Three.js for interactive, 360-degree 3D model product rendering and shopping cart flows.',
    detailedDescription:
      'Full-stack online store leveraging Three.js and React to render realistic 3D model previews of products. Includes complete cart management, user authentication, and an Express.js & MongoDB backend for secure order and product processing.',
    highlights: [
      'Interactive 3D product viewports powered by Three.js & React',
      'Secure JWT authentication and role-based access control',
      'NoSQL database modeling with MongoDB for scalable catalog data',
      'End-to-end shopping cart and checkout state management',
    ],
    image: `${import.meta.env.BASE_URL}assets/projects/auth-system.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}assets/projects/auth-system.jpg`,
      `${import.meta.env.BASE_URL}assets/coding-pov.png`,
    ],
    tags: ['React', 'Express.js', 'MongoDB', 'Three.js', 'Node.js'],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [driveCareActiveIndex, setDriveCareActiveIndex] = useState(0);
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  // Prevent scrolling when modal or lightbox is open
  if (selectedProject || lightboxImage) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <section id="work" className="section-spacing c-space">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-heading">Featured Work &amp; Systems</p>
        <p className="subtext mt-2 max-w-2xl">
          Comprehensive case studies across commercial mobility platforms, AI-assisted ecosystems, and enterprise web systems.
        </p>
      </motion.div>

      {/* SECTION 1: Commercial & Production Systems */}
      <div className="mt-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-mint"></span>
          <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-300">
            Commercial &amp; Production Systems
          </h3>
        </div>

        {/* 1. PickU Flagship Showcase Card */}
        <motion.article
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 md:p-10 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-mint/30 hover:bg-white/[0.07]"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-mint/10 blur-3xl"></div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Column: Image & Components */}
            <div className="w-full lg:w-5/12 flex flex-col gap-4">
              <div
                className="relative overflow-hidden rounded-2xl border border-white/10 group cursor-pointer"
                onClick={() => setSelectedProject(pickUProject)}
              >
                <img
                  src={pickUProject.image}
                  alt={pickUProject.title}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full border border-mint/40 bg-mint/10 text-mint backdrop-blur-md">
                    {pickUProject.status}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <p className="text-xs uppercase font-bold tracking-wider text-neutral-400">
                  Full Ecosystem Components
                </p>
                {pickUProject.ecosystem.map((comp) => (
                  <div key={comp} className="flex items-center gap-2 text-xs text-neutral-200">
                    <span className="text-mint">✓</span>
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Details & Bullets */}
            <div className="w-full lg:w-7/12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs uppercase tracking-widest text-mint font-semibold">
                    {pickUProject.category}
                  </span>
                  <a
                    href={pickUProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-aqua hover:underline"
                  >
                    <span>Visit picku.lk</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                  {pickUProject.title}
                </h3>
                <p className="text-sm font-medium text-neutral-300 mt-1">
                  {pickUProject.subtitle}
                </p>

                <p className="mt-4 text-sm md:text-base text-neutral-300 leading-relaxed">
                  {pickUProject.summaryBlurb}
                </p>

                <div className="mt-6 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Core Distributed Systems Highlights
                  </h4>
                  <div className="grid gap-2.5 sm:grid-cols-2 text-xs text-neutral-200">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                      <strong className="text-white block mb-1">⚡ Geospatial Dispatch Engine</strong>
                      PostGIS spatial radius discovery + Redis ring queues with delayed-job timeout workers.
                    </div>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                      <strong className="text-white block mb-1">📍 Telemetry &amp; Jump Filtering</strong>
                      Headless background GPS coordinate sanitization rejecting low-accuracy pings &amp; speed anomalies.
                    </div>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                      <strong className="text-white block mb-1">🔄 Finite State Machine (FSM)</strong>
                      Deterministic trip lifecycle with return-trip billing and automated waiting-time calculation.
                    </div>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                      <strong className="text-white block mb-1">⚖️ Double-Entry General Ledger</strong>
                      Balanced journal entries with automatic commission netting between cash and card payments.
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {pickUProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedProject(pickUProject)}
                  className="rounded-full bg-gradient-to-r from-royal to-lavender px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-royal/30 hover:scale-105 hover:shadow-royal/50 transition-all cursor-pointer"
                >
                  Explore Full Case Study &amp; Architecture
                </button>
                <a
                  href={pickUProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-mint/30 bg-mint/10 px-6 py-3 text-sm font-semibold text-mint hover:bg-mint/20 hover:scale-105 transition-all inline-flex items-center gap-2"
                >
                  <span>Visit Live Platform (picku.lk)</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>
          </div>
        </motion.article>
      </div>

      {/* SECTION 2: Flagship Academic Project: DriveCare */}
      <div className="mt-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-lavender"></span>
          <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-300">
            Flagship Academic &amp; Engineering Systems
          </h3>
        </div>

        {/* 2. DriveCare Large Showcase Card */}
        <motion.article
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 md:p-10 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-lavender/40 hover:bg-white/[0.07]"
        >
          <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-lavender/10 blur-3xl"></div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Column: Image & Previews */}
            <div className="w-full lg:w-5/12 flex flex-col gap-3">
              {/* Main Screenshot Preview */}
              <div
                className="relative overflow-hidden rounded-2xl border border-white/10 group cursor-pointer bg-neutral-950 h-72 md:h-84 flex items-center justify-center"
                onClick={() => setLightboxImage(driveCareCardScreenshots[driveCareActiveIndex])}
                title="Click to view full size screenshot"
              >
                {/* Ambient Blurred Backdrop */}
                <div
                  className="absolute inset-0 bg-cover bg-center filter blur-2xl opacity-30 scale-110 transition-all duration-500"
                  style={{ backgroundImage: `url(${driveCareCardScreenshots[driveCareActiveIndex].src})` }}
                />

                {/* The Uncropped Screenshot */}
                <img
                  src={driveCareCardScreenshots[driveCareActiveIndex].src}
                  alt={driveCareCardScreenshots[driveCareActiveIndex].title}
                  className={`relative z-10 transition-all duration-300 group-hover:scale-[1.02] ${
                    driveCareCardScreenshots[driveCareActiveIndex].isMobile
                      ? 'h-full max-h-[92%] w-auto object-contain rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-white/20'
                      : 'w-full h-full object-contain md:object-cover'
                  }`}
                />

                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-between p-4 pointer-events-none">
                  <div className="flex flex-col gap-1 max-w-[75%]">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-lavender/40 bg-lavender/25 text-lavender backdrop-blur-md self-start">
                      {driveCareCardScreenshots[driveCareActiveIndex].label}
                    </span>
                    <p className="text-xs font-bold text-white line-clamp-1">
                      {driveCareCardScreenshots[driveCareActiveIndex].caption}
                    </p>
                  </div>
                  <span className="text-[10px] font-medium text-aqua bg-black/75 px-2.5 py-1 rounded-full border border-white/15 backdrop-blur-md">
                    🔍 Full Size
                  </span>
                </div>
              </div>

              {/* Interactive Screenshot Selector Thumbnails */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400">
                    Interactive Screen Previews:
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(driveCareProject)}
                    className="text-aqua text-[10px] font-medium hover:underline cursor-pointer"
                  >
                    View all 8 screens &rarr;
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {driveCareCardScreenshots.map((item, idx) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setDriveCareActiveIndex(idx)}
                      className={`group/btn relative h-14 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                        driveCareActiveIndex === idx
                          ? 'border-lavender ring-2 ring-lavender/50 scale-[1.03]'
                          : 'border-white/10 opacity-70 hover:opacity-100 hover:border-white/30'
                      }`}
                      title={item.caption}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className={`w-full h-full ${item.isMobile ? 'object-contain bg-neutral-900 p-0.5' : 'object-cover'}`}
                      />
                      <span className="absolute bottom-0 inset-x-0 bg-black/85 text-[9px] font-bold text-center py-0.5 text-neutral-300 truncate px-0.5 group-hover/btn:text-white">
                        {item.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Ecosystem Checklist */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 space-y-1.5">
                <p className="text-[11px] uppercase font-bold tracking-wider text-neutral-400">
                  DriveCare Multi-Client Ecosystem
                </p>
                {driveCareProject.ecosystem.map((comp) => (
                  <div key={comp} className="flex items-center gap-2 text-xs text-neutral-200">
                    <span className="text-lavender">✓</span>
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: DriveCare Details */}
            <div className="w-full lg:w-7/12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs uppercase tracking-widest text-lavender font-semibold">
                    {driveCareProject.category}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-300">
                    Flutter • Vue 3 • Laravel 12 • Gemini AI
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                  {driveCareProject.title}
                </h3>
                <p className="text-sm font-medium text-neutral-300 mt-1">
                  {driveCareProject.subtitle}
                </p>

                <p className="mt-4 text-sm md:text-base text-neutral-300 leading-relaxed">
                  {driveCareProject.summaryBlurb}
                </p>

                <div className="mt-6 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Key Technical Highlights &amp; Engineering Feats
                  </h4>
                  <div className="grid gap-2.5 sm:grid-cols-2 text-xs text-neutral-200">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                      <strong className="text-white block mb-1">🔌 Native WebSocket Protocol Client</strong>
                      Engineered lightweight Dart WebSocket client communicating directly with Laravel Reverb for live updates.
                    </div>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                      <strong className="text-white block mb-1">📅 Concurrency-Safe Scheduling</strong>
                      Intelligent availability engine prevents multi-service slot overlaps and handles temporary booking holds.
                    </div>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                      <strong className="text-white block mb-1">🤖 Dual-Persona Google Gemini AI</strong>
                      Context-aware diagnostic assistant for drivers and predictive business intelligence for garage owners.
                    </div>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                      <strong className="text-white block mb-1">🛠️ In-Flight Visit Adjustments</strong>
                      Mechanics append extra repair items mid-service with real-time recalculations pushed to the customer checkout screen.
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {driveCareProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedProject(driveCareProject)}
                  className="rounded-full bg-gradient-to-r from-royal to-lavender px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-royal/30 hover:scale-105 hover:shadow-royal/50 transition-all cursor-pointer"
                >
                  Explore DriveCare Architecture &amp; Case Study
                </button>
              </div>
            </div>
          </div>
        </motion.article>
      </div>

      {/* SECTION 3: Additional Enterprise Systems & 3D Engineering */}
      <div className="mt-14">
        <h4 className="text-sm uppercase tracking-widest text-neutral-400 font-bold mb-4">
          Additional Commercial &amp; Engineering Systems
        </h4>
        <div className="grid gap-8 md:grid-cols-2">
          {supportingProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col justify-between p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl shadow-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:-translate-y-1.5 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
              title={`View details for ${project.title}`}
            >
              <div>
                <div className="relative overflow-hidden rounded-2xl mb-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 md:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1.5 rounded-full border backdrop-blur-md ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                  {project.category}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white mt-1 group-hover:text-aqua transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 space-y-1.5">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <span className="text-mint mt-0.5">▹</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-aqua group-hover:underline shrink-0 ml-2">
                  View Details &rarr;
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Comprehensive Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Dialog */}
            <motion.div
              className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-neutral-950/95 border border-white/20 backdrop-blur-2xl p-6 md:p-10 shadow-[0_0_60px_rgba(0,0,0,0.8)] text-left"
              initial={{ y: 40, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <button
                className="absolute top-5 right-5 z-10 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition-colors cursor-pointer"
                onClick={() => setSelectedProject(null)}
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col gap-6">
                {/* Modal Header */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${selectedProject.statusColor}`}>
                      {selectedProject.status}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-extrabold text-white">
                    {selectedProject.title}
                  </h2>
                  {selectedProject.liveUrl && (
                    <div className="mt-3 flex items-center gap-3">
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-mint/40 bg-mint/10 px-4 py-1.5 text-xs font-bold text-mint hover:bg-mint/20 transition-colors"
                      >
                        <span>Visit Live Platform: picku.lk</span>
                        <span>↗</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Gallery Header & Filter Tabs */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                        <span>📸 Verified Platform Screenshots</span>
                        <span className="text-xs text-neutral-400 font-normal">
                          (Click any image to view in full resolution)
                        </span>
                      </h4>
                    </div>

                    {/* Filter Tabs if project has categorized gallery */}
                    {selectedProject.gallery.some((item) => typeof item === 'object' && item.isMobile !== undefined) && (
                      <div className="flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-full text-xs">
                        <button
                          type="button"
                          onClick={() => setGalleryFilter('all')}
                          className={`px-3 py-1 rounded-full font-semibold transition-all cursor-pointer ${
                            galleryFilter === 'all'
                              ? 'bg-lavender text-neutral-950 shadow-md'
                              : 'text-neutral-300 hover:text-white'
                          }`}
                        >
                          All ({selectedProject.gallery.length})
                        </button>
                        <button
                          type="button"
                          onClick={() => setGalleryFilter('web')}
                          className={`px-3 py-1 rounded-full font-semibold transition-all cursor-pointer ${
                            galleryFilter === 'web'
                              ? 'bg-lavender text-neutral-950 shadow-md'
                              : 'text-neutral-300 hover:text-white'
                          }`}
                        >
                          Web Console ({selectedProject.gallery.filter((item) => typeof item === 'object' && !item.isMobile).length})
                        </button>
                        <button
                          type="button"
                          onClick={() => setGalleryFilter('mobile')}
                          className={`px-3 py-1 rounded-full font-semibold transition-all cursor-pointer ${
                            galleryFilter === 'mobile'
                              ? 'bg-lavender text-neutral-950 shadow-md'
                              : 'text-neutral-300 hover:text-white'
                          }`}
                        >
                          Flutter Mobile ({selectedProject.gallery.filter((item) => typeof item === 'object' && item.isMobile).length})
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Gallery Grid */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {selectedProject.gallery
                      .filter((item) => {
                        const hasMobileFlag = typeof item === 'object' && item.isMobile !== undefined;
                        if (!hasMobileFlag || galleryFilter === 'all') return true;
                        if (galleryFilter === 'mobile') return typeof item === 'object' && item.isMobile;
                        if (galleryFilter === 'web') return typeof item === 'object' && !item.isMobile;
                        return true;
                      })
                      .map((item, i) => {
                        const src = typeof item === 'string' ? item : item.src;
                        const title = typeof item === 'string' ? `${selectedProject.title} preview ${i + 1}` : item.title;
                        const category = typeof item === 'object' ? item.category : null;
                        const description = typeof item === 'object' ? item.description : null;
                        const isMobile = typeof item === 'object' ? item.isMobile : false;

                        return (
                          <div
                            key={title + i}
                            onClick={() => setLightboxImage(item)}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all hover:border-lavender/50 hover:bg-white/[0.07] cursor-pointer flex flex-col justify-between"
                            title="Click to view full screen"
                          >
                            {/* Image Box */}
                            <div
                              className={`relative overflow-hidden bg-neutral-950 flex items-center justify-center ${
                                isMobile ? 'h-80 sm:h-96 p-3' : 'h-56 sm:h-64'
                              }`}
                            >
                              {/* Ambient blurred backdrop for mobile */}
                              {isMobile && (
                                <div
                                  className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-25 scale-110"
                                  style={{ backgroundImage: `url(${src})` }}
                                />
                              )}

                              <img
                                src={src}
                                alt={title}
                                className={`relative z-10 transition-transform duration-500 group-hover:scale-[1.03] ${
                                  isMobile
                                    ? 'h-full max-h-[96%] w-auto object-contain rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-white/15'
                                    : 'w-full h-full object-contain md:object-cover'
                                }`}
                              />

                              {category && (
                                <span className="absolute top-3 left-3 z-20 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/15 bg-black/80 text-lavender backdrop-blur-md">
                                  {category}
                                </span>
                              )}

                              <span className="absolute top-3 right-3 z-20 text-[10px] font-medium px-2 py-0.5 rounded-full border border-white/10 bg-black/70 text-aqua opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                                🔍 Full Size
                              </span>
                            </div>

                            {/* Caption */}
                            {(title || description) && (
                              <div className="p-3.5 bg-neutral-900/90 border-t border-white/10">
                                <p className="text-xs font-bold text-white leading-tight flex items-center justify-between gap-2">
                                  <span>{title}</span>
                                  {isMobile && (
                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-royal/20 text-lavender font-normal shrink-0">
                                      Full Mobile View
                                    </span>
                                  )}
                                </p>
                                {description && (
                                  <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                                    {description}
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>

                {/* Case Study Details */}
                {selectedProject.challenge ? (
                  <div className="space-y-6">
                    {/* The Distributed Systems / Engineering Challenge */}
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-aqua mb-2">
                        📌 The Problem &amp; Architectural Context
                      </h4>
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    {/* Multi-Role Workflows (if DriveCare) */}
                    {selectedProject.multiRoleWorkflows && (
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                          👥 Multi-Role User Workflows
                        </h4>
                        <div className="space-y-3">
                          {selectedProject.multiRoleWorkflows.map((roleObj) => (
                            <div key={roleObj.role} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                              <h5 className="text-sm font-bold text-lavender mb-2">{roleObj.role}</h5>
                              <ul className="space-y-1.5 text-xs text-neutral-300">
                                {roleObj.points.map((p, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <span className="text-mint mt-0.5">▹</span>
                                    <span>{p}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Layered Technology Stack */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                        🛠️ Layered Technology Stack
                      </h4>
                      <div className="grid gap-3 text-xs">
                        {Object.entries(selectedProject.techStack).map(([layer, techs]) => (
                          <div key={layer} className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                            <strong className="text-mint capitalize block mb-1">
                              {layer.replace(/([A-Z])/g, ' $1')}:
                            </strong>
                            <span className="text-neutral-300">{techs}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Engineering Pillars */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                        🌟 Key Technical Highlights &amp; Engineering Challenges
                      </h4>
                      <div className="space-y-4">
                        {selectedProject.highlights.map((sec) => (
                          <div key={sec.title} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                            <h5 className="text-sm font-bold text-white mb-2">{sec.title}</h5>
                            <ul className="space-y-1.5 text-xs text-neutral-300">
                              {sec.points.map((p, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-mint mt-0.5">▹</span>
                                  <span>{p}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard Project View */
                  <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-1">
                        System Overview
                      </h4>
                      <p>{selectedProject.detailedDescription}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-2">
                        Key Architecture Highlights
                      </h4>
                      <ul className="space-y-1.5 text-sm">
                        {selectedProject.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-mint mt-0.5">▹</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 bg-black/95 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-5 right-5 z-20 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors cursor-pointer shadow-lg"
              aria-label="Close Lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div
              className="relative max-w-5xl max-h-[92vh] flex flex-col items-center justify-center"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={typeof lightboxImage === 'string' ? lightboxImage : lightboxImage.src}
                alt={typeof lightboxImage === 'object' ? lightboxImage.title : 'Screenshot preview'}
                className="max-h-[75vh] md:max-h-[80vh] max-w-[95vw] w-auto h-auto object-contain rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.9)] border border-white/20"
              />

              {typeof lightboxImage === 'object' && (lightboxImage.title || lightboxImage.caption || lightboxImage.description) && (
                <div className="mt-3 p-3.5 rounded-2xl bg-neutral-900/90 border border-white/10 backdrop-blur-md max-w-2xl text-center shadow-xl">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    {(lightboxImage.category || lightboxImage.badge || lightboxImage.label) && (
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-lavender/40 bg-lavender/20 text-lavender">
                        {lightboxImage.category || lightboxImage.badge || lightboxImage.label}
                      </span>
                    )}
                    <h4 className="text-sm md:text-base font-bold text-white">
                      {lightboxImage.title}
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {lightboxImage.description || lightboxImage.caption}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
