import { motion } from 'motion/react'

const skills = [
  { name: 'JavaScript', icon: '/assets/logos/javascript.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'React', icon: '/assets/logos/react.svg' },
  { name: 'Three.js', icon: '/assets/logos/threejs.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
]

const Skills = () => {
  return (
    <section id="skills" className="section-spacing c-space">
      <motion.p
        className="text-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Tools
      </motion.p>

      <motion.div
        className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {skills.map((skill) => (
          <article
            key={skill.name}
            className="flex items-center gap-3 p-5 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
          >
            <img src={skill.icon} alt={skill.name} className="h-9 w-9 object-contain" />
            <p className="font-medium text-neutral-100">{skill.name}</p>
          </article>
        ))}
      </motion.div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="headtext mb-4 text-xl">Soft Skills</h3>
        <div className="flex flex-wrap gap-3">
          {['Teamwork', 'Leadership', 'Adaptability', 'Communication', 'Problem-solving'].map((skill) => (
            <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
