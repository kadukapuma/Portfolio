import { motion } from 'motion/react';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Smart Omega Group',
    location: 'Sri Lanka',
    period: 'Present',
    badge: 'Current Role • picku.lk',
    badgeColor: 'border-mint/30 bg-mint/10 text-mint',
    description:
      'Leading the full-stack engineering, API architecture, and live deployment of PickU (picku.lk)—a commercial on-demand ride-hailing and logistics ecosystem across iOS, Android, Cloud Backend, and Operations Portal.',
    achievements: [
      'Architected and deployed PickU (picku.lk), serving real-time ride-booking, multi-vehicle dispatching, and automated fare settlements.',
      'Engineered a sub-second driver dispatch engine integrating PostgreSQL/PostGIS spatial queries and Redis ring queues with automated offer timeouts.',
      'Constructed a real-time GPS sanitization pipeline filtering low-accuracy pings and impossible speed leaps to eliminate GPS drift and fare inflation.',
      'Implemented an in-house double-entry general ledger with dynamic single-balance netting, guaranteeing zero financial discrepancies between cash collections and digital receivables.',
      'Built an end-to-end real-time communication pipeline using Laravel Reverb WebSockets to stream trip status, dispatch offers, and vehicle telemetry with minimal battery and data overhead.',
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
            key={exp.company}
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

