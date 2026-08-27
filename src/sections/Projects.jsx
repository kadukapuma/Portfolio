import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const projects = [
  {
    title: 'Online Clothing Store',
    description:
      'An e-commerce platform built as an academic project featuring interactive 3D elements, secure RESTful APIs for user authentication, product management, and order processing.',
    detailedDescription:
      'This project involved building a comprehensive e-commerce platform from scratch. Key features include a robust user authentication system, seamless product catalog browsing with 3D models integrated using Three.js, a shopping cart, and a secure checkout process. The backend was powered by Express.js and MongoDB to handle high traffic and ensure data consistency.',
    image: '/assets/projects/auth-system.jpg', // Placeholder image path, you can upload specific image if needed
    gallery: [
      '/assets/projects/auth-system.jpg',
      '/assets/projects/auth-system.jpg', // Placeholder
    ],
    tags: ['React', 'Express.js', 'MongoDB', 'Three.js'],
  },
  {
    title: 'Client System Implementation',
    description:
      'Developed web applications and business logic using Laravel and managed responsive frontend components with Vue.js during time at Softmaster Technologies.',
    detailedDescription:
      'During my time at Softmaster Technologies, I worked on implementing tailored client systems. I was responsible for designing and developing efficient REST APIs using Laravel and building dynamic, responsive UI components with Vue.js. This improved the overall user experience and streamlined business operations for our clients.',
    image: '/assets/projects/elearning.jpg',
    gallery: [
      '/assets/projects/elearning.jpg',
      '/assets/projects/elearning.jpg',
      '/assets/projects/elearning.jpg', // Placeholder
    ],
    tags: ['Laravel', 'Vue.js', 'MySQL', 'APIs'],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent scrolling when modal is open
  if (selectedProject) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <section id="work" className="section-spacing c-space">
      <motion.p
        className="text-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Featured Work
      </motion.p>

      <motion.div
        className="mt-8 grid gap-6 md:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl shadow-2xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 cursor-pointer group"
            onClick={() => setSelectedProject(project)}
            title={`View details for ${project.title}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-44 w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <h3 className="headtext mt-5 font-bold tracking-wide">{project.title}</h3>
            <p className="subtext mt-1">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={`${project.title}-${tag}`}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200 transition-colors group-hover:bg-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </motion.div>

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
              className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal */}
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-2xl p-6 md:p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <button
                className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                onClick={() => setSelectedProject(null)}
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 px-3 py-1 text-sm text-neutral-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {selectedProject.gallery.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${selectedProject.title} screenshot ${i + 1}`}
                      className="w-full h-auto rounded-xl object-cover shadow-lg"
                    />
                  ))}
                </div>

                <div className="text-neutral-300 leading-relaxed text-lg">
                  <p>{selectedProject.detailedDescription}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
