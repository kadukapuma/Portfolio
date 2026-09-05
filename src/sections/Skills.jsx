import { motion } from 'motion/react';

const skillCategories = [
  {
    category: 'Backend & Distributed Systems',
    description: 'High-concurrency servers, geospatial indexing, AI integration & WebSockets',
    skills: [
      { name: 'Laravel 12', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
      { name: 'PostgreSQL / PostGIS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
      { name: 'Reverb (WebSockets)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg' },
      { name: 'Google Gemini AI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg' },
      { name: 'PHP 8.2+', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
      { name: 'Node.js & Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'RESTful APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
    ],
  },
  {
    category: 'Frontend & Mobile Ecosystems',
    description: 'Cross-platform mobile apps, reactive web consoles & 3D visualizations',
    skills: [
      { name: 'React Native (Expo 54)', icon: `${import.meta.env.BASE_URL}assets/logos/react.svg` },
      { name: 'Flutter & Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
      { name: 'Vue 3.5 & Pinia', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
      { name: 'React 19', icon: `${import.meta.env.BASE_URL}assets/logos/react.svg` },
      { name: 'JavaScript (ES6+)', icon: `${import.meta.env.BASE_URL}assets/logos/javascript.svg` },
      { name: 'Three.js', icon: `${import.meta.env.BASE_URL}assets/logos/threejs.svg` },
      { name: 'Tailwind / NativeWind', icon: `${import.meta.env.BASE_URL}assets/logos/tailwindcss.svg` },
      { name: 'HTML5 & CSS3', icon: `${import.meta.env.BASE_URL}assets/logos/html5.svg` },
    ],
  },
  {
    category: 'Databases & Cloud Infrastructure',
    description: 'Spatial data modeling, schema optimization & container deployment',
    skills: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'SQLite', icon: `${import.meta.env.BASE_URL}assets/logos/sqlite.svg` },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Linux (Ubuntu)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
      { name: 'Nginx & PHP-FPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    ],
  },
  {
    category: 'DevOps, Tools & Verification',
    description: 'API testing, telemetry integration & zero-downtime deployment',
    skills: [
      { name: 'Postman (Certified)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
      { name: 'Git & GitHub', icon: `${import.meta.env.BASE_URL}assets/logos/github.svg` },
      { name: 'Google Maps APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg' },
      { name: 'Vite 7/8', icon: `${import.meta.env.BASE_URL}assets/logos/vitejs.svg` },
      { name: 'Cloudinary KYC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg' },
      { name: 'VS Code', icon: `${import.meta.env.BASE_URL}assets/logos/visualstudiocode.svg` },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-spacing c-space">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-heading">Technical Capabilities</p>
        <p className="subtext mt-2 max-w-2xl">
          A structured breakdown of languages, frameworks, cloud services, and workflows I use to build scalable systems.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {skillCategories.map((cat, idx) => (
          <motion.article
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl shadow-xl transition-all duration-300 hover:bg-white/[0.08]"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white tracking-wide">{cat.category}</h3>
              <p className="text-xs text-neutral-400 mt-1">{cat.description}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 p-2.5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/15 hover:bg-white/10 transition-all"
                >
                  <img src={skill.icon} alt={skill.name} className="h-5 w-5 object-contain shrink-0" />
                  <span className="text-xs font-medium text-neutral-200 truncate">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="mt-8 p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="headtext text-lg font-bold mb-3">Core Engineering Strengths &amp; Practices</h3>
        <div className="flex flex-wrap gap-2.5">
          {[
            'Distributed Systems Architecture',
            'Geospatial Indexing (PostGIS)',
            'Real-Time WebSockets (Laravel Reverb)',
            'AI Diagnostics (Google Gemini API)',
            'Double-Entry General Ledgers',
            'Headless Background GPS Telemetry',
            'Finite State Machine (FSM) Design',
            'Cross-Platform Mobile (Flutter & React Native)',
            'Safe Zero-Downtime Deployments',
            'Clean Code (SOLID Principles)',
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-neutral-300 hover:text-white hover:border-mint/40 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
