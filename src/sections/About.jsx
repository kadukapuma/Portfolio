import { motion } from 'motion/react'

const stats = [
  { label: 'Years Of Learning', value: '4+' },
  { label: 'Key Focus', value: 'Laravel & Vue' },
  { label: 'Degree', value: 'BSc. IT (Reading)' },
]

const About = () => {
  return (
    <section id="about" className="section-spacing c-space">
      <motion.p
        className="text-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.p>

      <motion.div
        className="mt-8 grid gap-6 md:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <article className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl shadow-2xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
          <div className="relative w-60 h-60 mb-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-aqua via-royal to-lavender rounded-full blur-2xl opacity-40"></div>
            <img 
              src="/assets/my_image/my_image2.png" 
              alt="Randika" 
              className="relative w-full h-full rounded-2xl object-cover  ring-white/20 shadow-xl"
            />
          </div>
          <h3 className="headtext text-center font-bold text-2xl tracking-wide">Randika</h3>
          <p className="mt-1 font-medium text-center text-sm uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-aqua to-lavender">Passionate Web Developer</p>
        </article>

        <div className="md:col-span-2 flex flex-col gap-6">
          <article className="p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl shadow-2xl transition-all duration-300 hover:bg-white/10 h-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-royal/20 flex items-center justify-center border border-royal/30 text-royal">👔</span>
              <h3 className="text-xl font-bold">Professional Profile</h3>
            </div>
            <p className="subtext leading-relaxed text-neutral-300">
              I am Randika, a motivated Software Developer with a focus on Laravel and Vue.js. 
              I have practical experience in full-stack web development, including system implementation, 
              customization, and bug fixing for real-world projects. I am characterized as a fast 
              learner with strong problem-solving skills, and I emphasize clean code and scalable architecture.
            </p>
          </article>

          <article className="p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl shadow-2xl transition-all duration-300 hover:bg-white/10 h-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-mint/20 flex items-center justify-center border border-mint/30 text-mint">🚀</span>
              <h3 className="text-xl font-bold">Experience & Education</h3>
            </div>
            <div className="space-y-4">
              <p className="subtext leading-relaxed text-neutral-300">
                <strong className="text-white">Experience:</strong> Software Developer at Softmaster Technologies, Kandy.<br/>
                Participated in the full development lifecycle, system implementation, optimizations, and building RESTful APIs.
              </p>
              <div className="h-px w-full bg-white/10"></div>
              <p className="subtext leading-relaxed text-neutral-300">
                <strong className="text-white">Education:</strong> BSc in Information Technology (2022–2025) at Sri Lanka International Buddhist Academy (SIBA).
              </p>
              <div className="h-px w-full bg-white/10"></div>
              <p className="subtext leading-relaxed text-neutral-300">
                <strong className="text-white">Certifications:</strong>
                <br/><span className="text-aqua">•</span> Introduction to Cybersecurity (Cisco Networking Academy) | <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 ml-1">Earned Online</span>
                <br/><span className="text-aqua">•</span> Postman API Fundamentals Workshop (API Literacy Tour) | <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 ml-1">Earned Online</span>
              </p>
            </div>
          </article>
        </div>
      </motion.div>

      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {stats.map((item) => (
          <article key={item.label} className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-md rounded-3xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-white/20">
            <p className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-aqua via-mint to-lavender mb-2">{item.value}</p>
            <p className="text-sm font-medium text-neutral-300 uppercase tracking-wider">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default About
