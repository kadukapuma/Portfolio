import { motion } from 'motion/react'

const socials = [
  {
    name: 'LinkedIn',
    icon: '/assets/socials/linkedIn.svg', // Ensure you have this placeholder or use text.
    href: 'https://linkedin.com/in/randika-kadukapuma',
  },
  {
    name: 'GitHub',
    icon: '/assets/logos/github.svg', // Reusing an existing github icon
    href: 'https://github.com/kadukapuma',
  },
  {
    name: 'WhatsApp/Phone',
    icon: '/assets/socials/whatsApp.svg',
    href: 'tel:+94740789832',
  },
]

const Contact = () => {
  return (
    <section id="contact" className="section-spacing c-space pb-16">
      <motion.p
        className="text-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.p>

      <motion.div
        className="mt-8 grid gap-6 md:grid-cols-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <article className="p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl shadow-xl transition-all duration-300 hover:bg-white/10">
          <h3 className="headtext">Let&apos;s Build Something Great</h3>
          <p className="subtext leading-relaxed mb-4">
            If you have a project idea, freelance request, or collaboration in
            mind, I would love to hear from you.
          </p>

          <div className="flex flex-col gap-2 mt-2 text-neutral-300">
            <p><strong>Email:</strong> kadukapuma@gmail.com</p>
            <p><strong>Phone:</strong> +94 740 789 832</p>
            <p><strong>Address:</strong> 3/A, Maharathanna, Menikhinna</p>
          </div>

          <a
            href="mailto:kadukapuma@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            Send Email
            <img src="/assets/arrow-right.svg" alt="arrow" className="h-4 w-4" />
          </a>
        </article>

        <article className="p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl shadow-xl transition-all duration-300 hover:bg-white/10">
          <h3 className="headtext">Find Me Online</h3>
          <p className="subtext">You can also connect with me on social platforms.</p>
          <div className="mt-5 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 hover:bg-white/10"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </article>
      </motion.div>
    </section>
  )
}

export default Contact
