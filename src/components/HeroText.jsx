import { FlipWords } from "./FlipWords"
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-36 md:text-left rounded-3xl bg-clip-text">
     
      {/* Desktop view */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I&apos;m Randika
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Software Engineer <br /> dedicated to crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords words={words} className="font-black text-white text-8xl" />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Solutions
          </motion.p>
        </div>

        {/* CTA Buttons - Desktop */}
        <motion.div
          className="mt-8 flex flex-wrap items-center gap-4"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.1 }}
        >
          <a
            href="#work"
            className="rounded-full bg-gradient-to-r from-royal to-lavender px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-royal/30 transition-all hover:scale-105 hover:shadow-royal/50"
          >
            View Projects &amp; Live Systems
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-6 py-3 text-sm font-medium text-neutral-200 transition-all hover:bg-white/10 hover:text-white hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Mobile view */}
      <div className="flex flex-col space-y-6 md:hidden px-4">
        <motion.p
          className="text-3xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I&apos;m Randika
        </motion.p>
        <div>
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Software Engineer dedicated to crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords words={words} className="font-black text-white text-6xl" />
          </motion.div>
          <motion.p
            className="text-3xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Solutions
          </motion.p>
        </div>

        {/* CTA Buttons - Mobile */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-9"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.1 }}
        >
          <a
            href="#work"
            className="w-full sm:w-auto rounded-full bg-gradient-to-r from-royal to-lavender px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-royal/30 text-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-neutral-200 text-center"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
