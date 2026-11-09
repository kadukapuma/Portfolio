import { useState } from 'react';
import { motion } from 'motion/react';
import { FaGithub, FaJava } from 'react-icons/fa';
import {
  SiLaravel,
  SiReact,
  SiPython,
  SiMysql,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiVite,
  SiNextdotjs,
  SiDocker,
} from 'react-icons/si';
import { HiUserGroup } from 'react-icons/hi';
import { githubProjects } from '../constants/githubProjects';

const techIcons = {
  laravel: SiLaravel,
  react: SiReact,
  python: SiPython,
  mysql: SiMysql,
  node: SiNodedotjs,
  typescript: SiTypescript,
  postgresql: SiPostgresql,
  vite: SiVite,
  java: FaJava,
  next: SiNextdotjs,
  docker: SiDocker,
};

// Full class strings so Tailwind can see them at build time.
const accents = {
  mint: { glow: 'bg-mint/30', text: 'text-mint', border: 'border-mint/30', hover: 'hover:border-mint/30', ring: 'border-mint ring-mint/50' },
  aqua: { glow: 'bg-aqua/30', text: 'text-aqua', border: 'border-aqua/30', hover: 'hover:border-aqua/30', ring: 'border-aqua ring-aqua/50' },
  sand: { glow: 'bg-sand/30', text: 'text-sand', border: 'border-sand/30', hover: 'hover:border-sand/30', ring: 'border-sand ring-sand/50' },
  lavender: { glow: 'bg-lavender/30', text: 'text-lavender', border: 'border-lavender/30', hover: 'hover:border-lavender/40', ring: 'border-lavender ring-lavender/50' },
  royal: { glow: 'bg-royal/40', text: 'text-lavender', border: 'border-royal/40', hover: 'hover:border-royal/40', ring: 'border-lavender ring-lavender/50' },
  orange: { glow: 'bg-orange/30', text: 'text-orange', border: 'border-orange/30', hover: 'hover:border-orange/30', ring: 'border-orange ring-orange/50' },
  coral: { glow: 'bg-coral/30', text: 'text-coral', border: 'border-coral/30', hover: 'hover:border-coral/30', ring: 'border-coral ring-coral/50' },
  fuchsia: { glow: 'bg-fuchsia/30', text: 'text-fuchsia', border: 'border-fuchsia/30', hover: 'hover:border-fuchsia/30', ring: 'border-fuchsia ring-fuchsia/50' },
};

const accentOf = (project) => accents[project.accent] ?? accents.lavender;

/** Generated cover for repos that have no screenshots. */
export const RepoCover = ({ project, className = 'h-48' }) => {
  const a = accentOf(project);
  const [repoOwner, repoName] = project.repoUrl.split('/').slice(-2);
  return (
    <div className={`relative overflow-hidden bg-midnight ${className}`}>
      <div
        className="absolute inset-0 bg-cover opacity-20"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/grid.png)` }}
      />
      <div className={`absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl ${a.glow}`} />
      <div className={`absolute -bottom-12 -left-12 h-40 w-40 rounded-full blur-3xl ${a.glow}`} />
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
        <div className="flex items-center gap-4">
          {project.icons.map((key) => {
            const Icon = techIcons[key];
            return Icon ? (
              <span
                key={key}
                className={`grid h-14 w-14 place-items-center rounded-2xl border bg-white/5 backdrop-blur-md ${a.border} ${a.text}`}
              >
                <Icon size={28} />
              </span>
            ) : null;
          })}
        </div>
        <p className="font-mono text-xs text-neutral-300">
          <span className="text-neutral-500">{repoOwner}/</span>
          {repoName}
        </p>
      </div>
    </div>
  );
};

const ProjectShowcase = ({ project, reverse, onSelect, onOpenImage }) => {
  const [active, setActive] = useState(0);
  const a = accentOf(project);
  const shots = project.gallery;
  const current = shots[active];

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 md:p-10 backdrop-blur-md shadow-2xl transition-all duration-300 hover:bg-white/[0.07] ${a.hover}`}
    >
      <div
        className={`pointer-events-none absolute -top-24 h-96 w-96 rounded-full blur-3xl opacity-40 ${a.glow} ${
          reverse ? '-left-24' : '-right-24'
        }`}
      />

      <div className={`relative flex flex-col gap-8 items-start ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        {/* Image column */}
        <div className="w-full lg:w-5/12 flex flex-col gap-3">
          <div
            className="relative overflow-hidden rounded-2xl border border-white/10 group cursor-pointer bg-neutral-950"
            onClick={() => (current ? onOpenImage(current) : onSelect(project))}
            title={current ? 'Click to view full size screenshot' : 'View project details'}
          >
            {current ? (
              <img
                src={current.src}
                alt={current.title}
                className="w-full h-64 md:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <RepoCover project={project} className="h-64 md:h-80" />
            )}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex items-end justify-between gap-2 p-4 pointer-events-none">
              <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border backdrop-blur-md ${project.statusColor}`}>
                {project.status}
              </span>
              {current && (
                <span className="text-[10px] font-medium text-aqua bg-black/75 px-2.5 py-1 rounded-full border border-white/15 backdrop-blur-md">
                  🔍 Full Size
                </span>
              )}
            </div>
          </div>

          {shots.length > 1 && (
            <div className="grid grid-cols-4 gap-1.5">
              {shots.map((shot, idx) => (
                <button
                  key={shot.src}
                  type="button"
                  onClick={() => setActive(idx)}
                  title={shot.title}
                  className={`relative h-14 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                    active === idx
                      ? `ring-2 scale-[1.03] ${a.ring}`
                      : 'border-white/10 opacity-70 hover:opacity-100 hover:border-white/30'
                  }`}
                >
                  <img src={shot.src} alt={shot.title} className="w-full h-full object-cover object-top" />
                  <span className="absolute bottom-0 inset-x-0 bg-black/85 text-[9px] font-bold text-center py-0.5 text-neutral-300 truncate px-0.5">
                    {shot.title}
                  </span>
                </button>
              ))}
            </div>
          )}

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
            <p className="text-xs uppercase font-bold tracking-wider text-neutral-400 mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Details column */}
        <div className="w-full lg:w-7/12 flex flex-col justify-between">
          <div>
            <div className="mb-2">
              <span className={`text-xs uppercase tracking-widest font-semibold ${a.text}`}>
                {project.category}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">{project.title}</h3>
            <p className="text-sm font-medium text-neutral-300 mt-1">{project.description}</p>
            {project.collaboration && (
              <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-200">
                <HiUserGroup size={14} className={a.text} />
                <span>{project.collaboration}</span>
              </p>
            )}

            <p className="mt-4 text-sm md:text-base text-neutral-300 leading-relaxed">
              {project.detailedDescription}
            </p>

            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Key Features</h4>
              <div className="grid gap-2.5 sm:grid-cols-2 text-xs text-neutral-200">
                {project.highlights.slice(0, 4).map((h) => (
                  <div key={h} className="p-3 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-2">
                    <span className={`mt-0.5 ${a.text}`}>▹</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onSelect(project)}
              className="rounded-full bg-gradient-to-r from-royal to-lavender px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-royal/30 hover:scale-105 hover:shadow-royal/50 transition-all cursor-pointer"
            >
              Explore Full Details
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-mint/30 bg-mint/10 px-6 py-3 text-sm font-semibold text-mint hover:bg-mint/20 hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <span>{project.liveCta ?? `Visit ${project.liveLabel}`}</span>
                <span className="text-xs">↗</span>
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-neutral-200 hover:bg-white/10 hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <FaGithub size={16} />
              <span>View Source</span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const CompactCard = ({ project, index, onSelect }) => (
  <motion.article
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.08]"
    onClick={() => onSelect(project)}
    title={`View details for ${project.title}`}
  >
    <div className="relative overflow-hidden">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-48 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <RepoCover project={project} />
      )}
      <span
        className={`absolute top-3 right-3 z-20 rounded-full border px-2.5 py-1 text-[10px] font-semibold backdrop-blur-md ${project.statusColor}`}
      >
        {project.status}
      </span>
    </div>

    <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">{project.category}</p>
        <h4 className="mt-1 text-lg md:text-xl font-bold text-white transition-colors group-hover:text-aqua">
          {project.title}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-neutral-300">{project.description}</p>
        <div className="mt-4 space-y-1.5">
          {project.highlights.slice(0, 3).map((h) => (
            <div key={h} className="flex items-start gap-2 text-xs text-neutral-300">
              <span className="text-mint mt-0.5">▹</span>
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 border-t border-white/10 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-xs font-semibold">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white"
          >
            <FaGithub size={14} />
            <span>Source</span>
          </a>
          <span className="text-aqua group-hover:underline">View Details &rarr;</span>
        </div>
      </div>
    </div>
  </motion.article>
);

const GithubProjects = ({ onSelect, onOpenImage }) => {
  const featured = githubProjects.filter((p) => !p.compact);
  const more = githubProjects.filter((p) => p.compact);

  return (
    <>
      <div className="mt-14 flex flex-col gap-10">
        {featured.map((project, index) => (
          <ProjectShowcase
            key={project.id}
            project={project}
            reverse={index % 2 === 0}
            onSelect={onSelect}
            onOpenImage={onOpenImage}
          />
        ))}
      </div>

      {more.length > 0 && (
        <div className="mt-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-aqua"></span>
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-300">More Projects</h3>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {more.map((project, index) => (
              <CompactCard key={project.id} project={project} index={index} onSelect={onSelect} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GithubProjects;
