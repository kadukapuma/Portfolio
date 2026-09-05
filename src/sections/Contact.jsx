import { useState } from 'react';
import { motion } from 'motion/react';

const socials = [
  {
    name: 'LinkedIn',
    icon: `${import.meta.env.BASE_URL}assets/socials/linkedIn.svg`,
    href: 'https://linkedin.com/in/randika-kadukapuma',
  },
  {
    name: 'GitHub',
    icon: `${import.meta.env.BASE_URL}assets/logos/github.svg`,
    href: 'https://github.com/kadukapuma',
  },
  {
    name: 'WhatsApp',
    icon: `${import.meta.env.BASE_URL}assets/socials/whatsApp.svg`,
    href: 'https://wa.me/94740789832',
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const email = 'kadukapuma@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-spacing c-space pb-16">
      <motion.p
        className="text-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.p>
      <p className="subtext mt-2 max-w-2xl">
        Have a new project, technical inquiry, or interested in collaborating? Let&apos;s talk.
      </p>

      {/* Availability Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl border border-mint/30 bg-mint/5 backdrop-blur-md"
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-mint"></span>
          </span>
          <span className="text-sm font-medium text-neutral-200">
            Currently open to full-stack engineering roles, product discussions &amp; freelance consultations.
          </span>
        </div>

        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
          title="Copy email to clipboard"
        >
          <img
            src={copied ? `${import.meta.env.BASE_URL}assets/copy-done.svg` : `${import.meta.env.BASE_URL}assets/copy.svg`}
            alt="copy"
            className="h-3.5 w-3.5"
          />
          {copied ? 'Copied to Clipboard!' : 'Copy Email'}
        </button>
      </motion.div>

      <motion.div
        className="mt-8 grid gap-8 md:grid-cols-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {/* Contact Info & Channels */}
        <article className="flex flex-col justify-between p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl shadow-xl">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Let&apos;s Build Together</h3>
            <p className="subtext leading-relaxed">
              Feel free to reach out directly through any of these direct communication channels.
            </p>

            <div className="flex flex-col gap-4 mt-6 text-sm text-neutral-300">
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <div>
                  <p className="text-xs text-neutral-400">Email Address</p>
                  <p className="font-semibold text-white mt-0.5">{email}</p>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-neutral-200 transition-colors cursor-pointer"
                  aria-label="Copy Email"
                >
                  <img
                    src={copied ? `${import.meta.env.BASE_URL}assets/copy-done.svg` : `${import.meta.env.BASE_URL}assets/copy.svg`}
                    alt="copy"
                    className="h-4 w-4"
                  />
                </button>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <p className="text-xs text-neutral-400">Direct Phone / WhatsApp</p>
                <a href="https://wa.me/94740789832" target="_blank" rel="noreferrer" className="font-semibold text-white hover:text-aqua transition-colors mt-0.5 inline-block">
                  +94 740 789 832
                </a>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <p className="text-xs text-neutral-400">Location</p>
                <p className="font-semibold text-white mt-0.5">Kandy / Menikhinna, Sri Lanka</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs uppercase tracking-wider text-neutral-400 mb-3 font-medium">
              Connect on Social Platforms
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 hover:border-aqua/50 hover:bg-white/10 transition-all hover:-translate-y-0.5"
                  aria-label={social.name}
                  title={social.name}
                >
                  <img src={social.icon} alt={social.name} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </article>

        {/* Interactive Message Form */}
        <article className="p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
          <p className="subtext mb-6">
            Fill in the details below to start a conversation.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-xs uppercase tracking-wider text-neutral-400 font-semibold" htmlFor="name">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="e.g. John Doe"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="mt-1.5 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-royal focus:outline-none focus:ring-1 focus:ring-royal transition-all"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-neutral-400 font-semibold" htmlFor="email">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="e.g. john@example.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="mt-1.5 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-royal focus:outline-none focus:ring-1 focus:ring-royal transition-all"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-neutral-400 font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                placeholder="Tell me about your project, timeline, or inquiry..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="mt-1.5 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-royal focus:outline-none focus:ring-1 focus:ring-royal transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-royal to-lavender py-3.5 px-6 text-sm font-semibold text-white shadow-lg shadow-royal/30 hover:shadow-royal/50 hover:scale-[1.02] transition-all cursor-pointer"
            >
              Send Message
              <img src={`${import.meta.env.BASE_URL}assets/arrow-right.svg`} alt="arrow" className="h-4 w-4" />
            </button>

            {submitted && (
              <p className="text-center text-xs text-mint font-medium animate-pulse">
                Opening your email client to send message...
              </p>
            )}
          </form>
        </article>
      </motion.div>
    </section>
  );
};

export default Contact;
