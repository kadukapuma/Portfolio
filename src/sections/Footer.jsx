const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: '/assets/socials/linkedIn.svg',
    href: 'https://linkedin.com/in/randika-kadukapuma',
  },
  {
    name: 'GitHub',
    icon: '/assets/logos/github.svg', // Reusing an existing github icon if available
    href: 'https://github.com/kadukapuma',
  },
  {
    name: 'WhatsApp',
    icon: '/assets/socials/whatsApp.svg',
    href: 'tel:+94740789832',
  },
]

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-[#050816] pt-14 pb-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-aqua/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-lavender/20 blur-3xl" />
      </div>

      <div className="relative c-space mx-auto max-w-7xl">
        
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              
              <a href="#home" className="mt-2 inline-block text-3xl font-bold leading-none tracking-tight">
                Randika
              </a>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300 md:text-base">
                Crafting modern web experiences with performance, clean UI, and
                meaningful interactions.
              </p>
            </div>

            {/* <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Quick Links</p>
              <nav className="flex flex-wrap items-center gap-3 text-sm text-neutral-100">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-full border border-white/15 bg-white/3 px-4 py-2 transition hover:-translate-y-0.5 hover:border-aqua/50 hover:bg-aqua/10"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div> */}
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-neutral-300">
              Copyright {new Date().getFullYear()} Randika. All rights reserved.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:-translate-y-0.5 hover:border-aqua/60 hover:bg-aqua/15"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        
      </div>
    </footer>
  )
}

export default Footer
