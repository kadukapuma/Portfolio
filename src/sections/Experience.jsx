import { motion } from 'motion/react';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Kreethya (Pvt) Ltd',
    location: 'Sri Lanka',
    period: 'Present',
    badge: 'Current Role • aureon.kreethya.com',
    badgeColor: 'border-sand/30 bg-sand/10 text-sand',
    link: { href: 'https://aureon.kreethya.com/', label: 'aureon.kreethya.com' },
    description:
      'Building and shipping business software at Kreethya (Pvt) Ltd. Currently developing Aureon (aureon.kreethya.com), a full jewellery shop management system covering daily gold prices, barcode-tagged stock, craftsmen jobs, sales, customer credit and profit reporting, alongside the company website and other products hosted on kreethya.com.',
    achievements: [
      'Developing Aureon end to end: an Express REST API, a React (Vite + MUI) frontend and a MySQL 8 database.',
      'Built a business overview dashboard with live 24K / 22K gold prices (LKR per pound), 30-day price movement and 7-day sales performance.',
      'Added at-a-glance cards for sales today, customer credit, overdue bills, stock, supplier balances and workshop workload.',
      'Implemented seven modules: users & roles, gold prices, items, purchases, craft jobs, sales and reports — covering suppliers, purchases, customers, billing, payments and credit.',
      'Designed role-based permissions with per-user Allow / Block exceptions enforced on every API request, plus account lockout after 5 failed logins and a full activity log.',
      'Modelled craftsman gold and cash accounts that track gold issued, returned and wastage, alongside barcode tagging and per-karat daily gold pricing.',
      'Built reporting for sales, profit, stock, wastage and balances, backed by a single schema.sql with tables, seed data and reporting views.',
      'Built FixFlow (fixflow.kreethya.com), a multi-tenant service center SaaS with a separate MySQL database per company resolved from the subdomain, and queued tenant provisioning.',
      'Developed the Kreethya.com company website with React, Vite and the React Compiler — animated logo intro, mascot assistant, services, work showcase, delivery process and enquiry flow.',
      'Contributed to HP ERP (hp.kreethya.com) as a team project: a hire purchase ERP with agreements, instalments, multi-branch stock, purchasing and accounting on Laravel 11, Next.js and Docker.',
    ],
    projects: [
      {
        name: 'Aureon — Jewellery Management System',
        url: 'https://aureon.kreethya.com/',
        label: 'aureon.kreethya.com',
        note: 'In development',
      },
      { name: 'FixFlow — Service Center SaaS', url: 'https://fixflow.kreethya.com', label: 'fixflow.kreethya.com', note: 'Live' },
      { name: 'HP ERP — Hire Purchase System', url: 'https://hp.kreethya.com', label: 'hp.kreethya.com', note: 'Live demo • Team project' },
      { name: 'Kreethya.com — Company Website', url: 'https://kreethya.com', label: 'kreethya.com', note: 'Live' },
    ],
    technologies: ['Node.js', 'Express', 'React', 'Vite', 'MUI', 'MySQL 8', 'JWT', 'Laravel', 'Next.js', 'Docker'],
  },
  {
    role: 'Software Engineer',
    company: 'Smart Omega Group',
    location: 'Sri Lanka',
    period: 'Previous',
    badge: 'picku.lk',
    badgeColor: 'border-mint/30 bg-mint/10 text-mint',
    description:
      'Led the full-stack engineering, API architecture, and live deployment of PickU (picku.lk)—a commercial on-demand ride-hailing and logistics ecosystem across iOS, Android, Cloud Backend, and Operations Portal.',
    achievements: [
      'Architected and deployed PickU (picku.lk), serving real-time ride-booking, multi-vehicle dispatching, and automated fare settlements.',
      'Engineered a sub-second driver dispatch engine integrating PostgreSQL/PostGIS spatial queries and Redis ring queues with automated offer timeouts.',
      'Constructed a real-time GPS sanitization pipeline filtering low-accuracy pings and impossible speed leaps to eliminate GPS drift and fare inflation.',
      'Implemented an in-house double-entry general ledger with dynamic single-balance netting, guaranteeing zero financial discrepancies between cash collections and digital receivables.',
      'Built an end-to-end real-time communication pipeline using Laravel Reverb WebSockets to stream trip status, dispatch offers, and vehicle telemetry with minimal battery and data overhead.',
      'Shipped Passenger and Driver mobile apps for iOS and Android with React Native (Expo 54), Expo Router, NativeWind, React Native Maps and headless background location tracking during active trips.',
      'Modelled the ride lifecycle as a strict finite state machine (REQUESTED ➔ ACCEPTED ➔ ARRIVED ➔ STARTED ➔ COMPLETED / CANCELLED) with fully audited transitions.',
      'Delivered round-trip / return-leg bookings with waiting-time billing and early-termination safeguards, plus a "Book for a Friend" option for third-party passengers.',
      'Built dynamic per-vehicle fare configuration (base fare, per-km rate, waiting fee, cancellation fees) for Tuk-Tuks, Cars and Motorbikes.',
      'Created a multi-step driver onboarding & KYC flow (NIC, driving licence, revenue licence, vehicle photos on Cloudinary) with an admin approval workflow and role-based access (Super Admin, Dispatchers, Operators).',
      'Built the React 19 + Vite operations & admin portal with live updates via Laravel Echo and PDF / Excel exports (jsPDF, SheetJS).',
      'Integrated Google Maps (Routes v2, Places Autocomplete), Notify.lk SMS OTP and Expo push notifications.',
      'Set up the production stack on Ubuntu, Nginx, PHP-FPM and Supervisor workers with a zero-downtime deployment pipeline: pre-deploy backups, dry-run checks, bundle validation and guarded migrations.',
    ],
    projects: [
      {
        name: 'PickU Passenger App',
        url: 'https://play.google.com/store/apps/details?id=lk.picku.passenger',
        label: 'Google Play',
        note: 'React Native (Expo 54)',
      },
      {
        name: 'PickU Driver App',
        url: 'https://play.google.com/store/apps/details?id=com.picku.DriverApp',
        label: 'Google Play',
        note: 'Background GPS telemetry',
      },
    ],
    technologies: [
      'Laravel 12',
      'PostgreSQL / PostGIS',
      'React Native (Expo 54)',
      'Redis',
      'Laravel Reverb WebSockets',
      'React 19',
      'Docker',
      'Linux / Nginx',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Softmaster Technologies',
    location: 'Kandy, Sri Lanka',
    period: 'Previous Role',
    badge: 'Commercial ERP & Systems',
    badgeColor: 'border-royal/30 bg-royal/10 text-lavender',
    description:
      'Participated in the full software development lifecycle, building customized client business systems, responsive interfaces, and API integrations.',
    achievements: [
      'Engineered tailored enterprise client web applications using Laravel for business logic and Vue.js for dynamic frontend interfaces.',
      'Designed normalized relational database schemas and optimized complex MySQL queries for high performance and sub-second reporting.',
      'Built secure RESTful endpoints for third-party service integration, authentication, and administrative report generation.',
      'Conducted system testing, troubleshooting, and continuous optimization for deployed client solutions.',
    ],
    technologies: ['Laravel', 'Vue.js', 'PHP', 'MySQL', 'RESTful APIs', 'Git', 'Bootstrap/Tailwind'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-spacing c-space">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-heading">Work Experience</p>
        <p className="subtext mt-2 max-w-2xl">
          Verified commercial engineering roles building distributed systems, real-time mobility platforms, and enterprise solutions.
        </p>
      </motion.div>

      <div className="mt-10 flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <motion.article
            key={exp.company + exp.role}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-md shadow-2xl transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold text-white tracking-wide">{exp.role}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full border font-medium ${exp.badgeColor}`}>
                    {exp.badge}
                  </span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-neutral-300">
                  <span className="font-semibold text-aqua">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                  {exp.link && (
                    <>
                      <span>•</span>
                      <a
                        href={exp.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-mint hover:underline"
                      >
                        {exp.link.label} <span className="text-xs">↗</span>
                      </a>
                    </>
                  )}
                </div>
              </div>

              <span className="text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-neutral-300 self-start">
                {exp.period}
              </span>
            </div>

            <p className="mt-4 text-sm md:text-base text-neutral-300 leading-relaxed">
              {exp.description}
            </p>

            <div className="mt-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                Key Contributions &amp; Engineering Scope
              </h4>
              <ul className="space-y-2 text-sm text-neutral-300">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-mint mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {exp.projects && (
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  Products &amp; Platforms
                </h4>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {exp.projects.map((proj) => (
                    <a
                      key={proj.name}
                      href={proj.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group/proj flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-white/20 hover:bg-white/10"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white group-hover/proj:text-aqua">{proj.name}</p>
                        <p className="mt-0.5 text-xs text-neutral-400">
                          <span className="text-mint">{proj.label}</span> • {proj.note}
                        </p>
                      </div>
                      <span className="text-xs text-neutral-400 group-hover/proj:text-aqua">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-2">
              <span className="text-xs text-neutral-400 mr-2 font-medium">Tech Stack:</span>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200 transition-colors hover:bg-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;

