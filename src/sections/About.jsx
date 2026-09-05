import { motion } from 'motion/react';

const stats = [
  { label: 'Flagship Platform', value: 'picku.lk' },
  { label: 'Current Role', value: 'Software Engineer' },
  { label: 'Company', value: 'Smart Omega Group' },
  { label: 'Degree', value: 'BSc. in IT (SIBA)' },
];

const engineeringPillars = [
  {
    icon: '⚡',
    title: 'Distributed Systems & Scalable APIs',
    description:
      'Designing high-concurrency RESTful architectures and event-driven backends using Laravel 12, PostgreSQL, Redis queues, and transactional integrity.',
  },
  {
    icon: '📍',
    title: 'Geospatial Dispatch & Real-Time Telemetry',
    description:
      'Implementing sub-second spatial discovery with PostGIS geospatial indexing, headless background GPS coordinate tracking, and telemetry noise filtering.',
  },
  {
    icon: '📱',
    title: 'Cross-Platform Mobile Ecosystems',
    description:
      'Building performant, fluid iOS and Android passenger and driver applications with React Native (Expo 54), NativeWind, and reactive WebSockets.',
  },
  {
    icon: '📊',
    title: 'Double-Entry Financial Ledgers',
    description:
      'Architecting mathematically balanced double-entry accounting engines with dynamic single-balance netting between cash collections and digital payouts.',
  },
];

const About = () => {
  return (
    <section id="about" className="section-spacing c-space">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-heading">About Me</p>
        <p className="subtext mt-2 max-w-2xl">
          A deep dive into my software engineering philosophy, core competencies, and verified academic credentials.
        </p>
      </motion.div>

      {/* Main Profile Grid */}
      <motion.div
        className="mt-8 grid gap-6 lg:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left: Avatar & Identity Card */}
        <article className="flex flex-col items-center justify-between p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl shadow-2xl transition-all duration-300 hover:bg-white/[0.08]">
          <div className="flex flex-col items-center w-full">
            <div className="relative w-52 h-52 mb-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-aqua via-royal to-lavender rounded-3xl blur-2xl opacity-40"></div>
              <img
                src={`${import.meta.env.BASE_URL}assets/my_image/me.png`}
                alt="Randika Kadukapuma"
                className="relative w-full h-full  ring-white/20 shadow-2xl"
              />
            </div>

            <h3 className="text-2xl font-bold tracking-wide text-white text-center">
              Randika Kadukapuma
            </h3>
            <p className="mt-1 font-semibold text-sm uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-aqua to-lavender text-center">
              Software Engineer
            </p>
            <p className="mt-2 text-xs text-neutral-300 text-center flex items-center justify-center gap-1.5">
              <span className="text-mint">●</span> Smart Omega Group • Sri Lanka
            </p>

            <div className="mt-4 w-full p-3.5 rounded-2xl bg-white/5 border border-white/5 text-center">
              <span className="text-xs text-neutral-400 block mb-1">Current Active Focus</span>
              <span className="text-sm font-semibold text-white">
                Engineering <strong className="text-aqua">PickU</strong> (picku.lk)
              </span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 w-full flex flex-col gap-2.5">
            <a
              href="#contact"
              className="w-full text-center py-2.5 px-4 rounded-full bg-gradient-to-r from-royal to-lavender text-xs font-semibold text-white shadow-lg shadow-royal/30 hover:shadow-royal/50 hover:scale-[1.02] transition-all"
            >
              Get In Touch
            </a>
            <a
              href="#experience"
              className="w-full text-center py-2.5 px-4 rounded-full border border-white/15 bg-white/5 text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-all"
            >
              View Career Experience
            </a>
          </div>
        </article>

        {/* Right: Narrative & Engineering Focus */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Engineering Narrative */}
          <article className="p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-2xl bg-royal/20 flex items-center justify-center border border-royal/30 text-royal text-lg">
                💻
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">Engineering Background &amp; Philosophy</h3>
                <p className="text-xs text-neutral-400">High-concurrency systems, mobile ecosystems &amp; robust architecture</p>
              </div>
            </div>
            <p className="subtext leading-relaxed text-neutral-300">
              I am a Software Engineer specialized in building production-grade distributed applications,
              real-time mobility platforms, and high-performance backend infrastructure. Currently at{' '}
              <strong className="text-white">Smart Omega Group</strong>, I lead the core engineering and
              cloud deployment of <strong className="text-aqua">PickU (picku.lk)</strong>—a multi-platform on-demand
              ride-hailing and logistics ecosystem featuring cross-platform mobile apps (iOS &amp; Android), a real-time
              Laravel 12 &amp; PostgreSQL/PostGIS backend, and an operations portal.
            </p>
            <p className="subtext leading-relaxed text-neutral-300 mt-3">
              My engineering discipline emphasizes mathematical consistency (such as double-entry ledger netting),
              low-latency geospatial indexing, headless background telemetry, clean code principles, and reliable
              zero-downtime deployment pipelines.
            </p>
          </article>

          {/* 4 Pillars of Expertise Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {engineeringPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition-all"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-lg">{pillar.icon}</span>
                  <h4 className="text-sm font-bold text-white leading-snug">{pillar.title}</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Education & Verified Credentials Section */}
      <motion.div
        className="mt-6 p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-2xl bg-mint/20 flex items-center justify-center border border-mint/30 text-mint text-lg">
              🎓
            </span>
            <div>
              <h3 className="text-xl font-bold text-white">Academic Foundation &amp; Verified Certifications</h3>
              <p className="text-xs text-neutral-400">Formal IT degree &amp; industry-accredited technical certifications</p>
            </div>
          </div>
          <span className="text-xs px-3 py-1 rounded-full border border-mint/30 bg-mint/10 text-mint font-medium self-start md:self-auto">
            Verified Credentials
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Degree */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-semibold text-aqua uppercase tracking-wider">Undergraduate Degree</span>
              <span className="text-xs text-neutral-400">2022 – 2025</span>
            </div>
            <h4 className="text-base font-bold text-white">BSc in Information Technology</h4>
            <p className="text-xs text-neutral-400 mt-1">
              Sri Lanka International Buddhist Academy (SIBA Campus)
            </p>
            <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
              Coursework emphasizing Data Structures &amp; Algorithms, Database Management Systems, Systems Architecture, and Network Security.
            </p>
          </div>

          {/* Certifications */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-lavender uppercase tracking-wider block mb-2">
                Industry Certifications
              </span>
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-white">Introduction to Cybersecurity</p>
                    <p className="text-xs text-neutral-400">Cisco Networking Academy</p>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/10 text-neutral-200 shrink-0">
                    Online Verified
                  </span>
                </div>
                <div className="h-px w-full bg-white/5"></div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-white">Postman API Fundamentals Workshop</p>
                    <p className="text-xs text-neutral-400">API Literacy Tour</p>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/10 text-neutral-200 shrink-0">
                    Online Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Metrics Row */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <article
            key={item.label}
            className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-md rounded-3xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
          >
            <p className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-aqua via-mint to-lavender mb-1 text-center">
              {item.value}
            </p>
            <p className="text-xs font-medium text-neutral-300 uppercase tracking-wider text-center">
              {item.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
