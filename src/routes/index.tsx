import { marked } from 'marked'
import { createFileRoute, Link } from '@tanstack/react-router'
import { allJobs, allEducations, allProjects } from 'content-collections'
import { Github, Mail, FileDown, ArrowUpRight, Menu } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

const GITHUB_URL = 'https://github.com/ss4616'
const EMAIL = 'saniya.saad@hotmail.com'

const SKILLS: Array<{ group: string; items: Array<string> }> = [
  {
    group: 'Testing & QA',
    items: [
      'Manual & exploratory testing',
      'Test case design',
      'Selenium WebDriver',
      'API testing (Postman)',
      'Regression planning',
      'TestRail',
    ],
  },
  {
    group: 'Project Coordination',
    items: [
      'Project charters',
      'Scope & risk registers',
      'Stakeholder mapping',
      'Sprint planning',
      'Cross-team standups',
    ],
  },
  {
    group: 'Tools & Process',
    items: ['JIRA', 'Confluence', 'Agile / Scrum', 'Git', 'CI/CD pipelines'],
  },
]

const CERTIFICATIONS: Array<{
  name: string
  issuer: string
  year: string
}> = [
  {
    name: 'ISTQB Certified Tester, Foundation Level',
    issuer: 'International Software Testing Qualifications Board',
    year: '2021',
  },
  {
    name: 'Certified Associate in Project Management (CAPM)',
    issuer: 'Project Management Institute',
    year: '2023',
  },
  {
    name: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    year: '2022',
  },
]

const ACHIEVEMENTS: Array<{ metric: string; detail: string }> = [
  {
    metric: '−82%',
    detail:
      'reduction in release-day sign-off time after replacing manual regression checks with a tiered automated suite.',
  },
  {
    metric: '400+',
    detail:
      'test cases authored and maintained in TestRail for a patient-scheduling platform across three sub-teams.',
  },
  {
    metric: '14 avg',
    detail:
      'defects surfaced per sprint by a weekly bug-bash ritual introduced and run end to end.',
  },
  {
    metric: '3 squads',
    detail:
      'adopted the project-charter and stakeholder-mapping template built to speed up initiative kickoffs.',
  },
]

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
]

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <div className="grain-overlay" aria-hidden="true" />

      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-border/70 bg-ink/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#about"
            className="font-display text-lg tracking-tight text-paper"
          >
            S. Saad<span className="text-rust-bright">.</span>
          </a>
          <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.16em] text-muted-foreground md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-rust-bright"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="text-paper md:hidden"
            aria-label="Toggle navigation"
          >
            <Menu size={22} />
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-4 border-t border-border/70 px-6 py-4 text-sm uppercase tracking-widest md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-muted-foreground hover:text-rust-bright"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero / About */}
      <section
        id="about"
        className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28"
      >
        <div className="fade-up space-y-7">
          <span className="stamp px-3 py-1 text-[0.65rem] font-semibold uppercase">
            Quality Verified
          </span>
          <h1 className="font-display text-[2.75rem] leading-[1.05] tracking-tight text-paper sm:text-6xl">
            Saniya Saad
          </h1>
          <p className="max-w-lg font-display text-xl italic text-rust-bright sm:text-2xl">
            Software Quality Assurance Engineer &mdash; Project Coordination
            &amp; Delivery
          </p>
          <p className="max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
            SQA Engineer with a passion for building reliable, user-focused
            products. Beyond testing, I&rsquo;m interested in project
            planning and delivery, with skills in defining scope,
            objectives, stakeholders, and risks through project charters. I
            enjoy combining attention to detail with big-picture thinking to
            help turn ideas into successful products.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-rust px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-rust-bright"
            >
              <FileDown size={16} />
              View Resume
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-paper transition-transform hover:-translate-y-0.5 hover:border-rust-bright hover:text-rust-bright"
            >
              <Github size={16} />
              GitHub Profile
            </a>
          </div>
        </div>

        <div
          className="fade-up flex justify-center md:justify-end"
          style={{ animationDelay: '120ms' }}
        >
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rotate-2 border border-rust/40" />
            <img
              src="/headshot-on-white.jpg"
              alt="Portrait of Saniya Saad"
              className="h-72 w-60 rotate-[-1.5deg] rounded-sm object-cover shadow-2xl ring-1 ring-border sm:h-80 sm:w-64"
            />
            <span className="absolute -bottom-4 -right-4 rounded-sm bg-ink-soft px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-rust-bright ring-1 ring-rust/50">
              Case #041 &mdash; Approved
            </span>
          </div>
        </div>
      </section>

      {/* Skills */}
      <Section id="skills" index="01" title="Skills" kicker="Toolkit on file">
        <div className="grid gap-8 sm:grid-cols-3">
          {SKILLS.map((group) => (
            <div key={group.group}>
              <h3 className="mb-4 font-display text-lg text-rust-bright">
                {group.group}
              </h3>
              <ul className="space-y-2.5 text-sm text-paper/90">
                {group.items.map((item) => (
                  <li key={item} className="ledger-tick">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" index="02" title="Education" kicker="Transcript">
        <div className="space-y-8">
          {allEducations.map((education) => (
            <article
              key={education.school}
              className="border-l-2 border-rust/40 pl-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl text-paper">
                  {education.school}
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {formatYear(education.startDate)}
                  {education.endDate
                    ? ` – ${formatYear(education.endDate)}`
                    : ''}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {education.summary}
              </p>
              {education.content && (
                <div
                  className="prose prose-invert prose-sm mt-3 max-w-none text-paper/80"
                  dangerouslySetInnerHTML={{ __html: marked(education.content) }}
                />
              )}
            </article>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" index="03" title="Projects" kicker="Field notes">
        <div className="grid gap-6 sm:grid-cols-2">
          {allProjects.map((project) => (
            <article
              key={project._meta.path}
              className="group flex flex-col gap-4 border border-border bg-ink-soft/60 p-6 transition-colors hover:border-rust/60"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg text-paper">
                  {project.title}
                </h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-muted-foreground transition-colors group-hover:text-rust-bright"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-border px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section
        id="certifications"
        index="04"
        title="Certifications"
        kicker="Stamped &amp; sealed"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col justify-between gap-3 border border-border p-5"
            >
              <div>
                <p className="font-display text-base leading-snug text-paper">
                  {cert.name}
                </p>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-rust-bright">
                {cert.year}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section
        id="achievements"
        index="05"
        title="Achievements"
        kicker="Audit results"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((item) => (
            <div key={item.metric} className="space-y-2">
              <p className="font-display text-4xl text-rust-bright">
                {item.metric}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Work history, folded in as supporting evidence */}
        <div className="mt-14 space-y-6 border-t border-border pt-10">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Where these were logged
          </h3>
          {allJobs.map((job) => (
            <div
              key={job.jobTitle}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <p className="text-sm text-paper">
                <span className="font-semibold">{job.jobTitle}</span>
                <span className="text-muted-foreground"> — {job.company}</span>
              </p>
              <span className="font-mono text-xs text-muted-foreground">
                {formatYear(job.startDate)}
                {job.endDate ? ` – ${formatYear(job.endDate)}` : ' – Present'}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <section id="contact" className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-rust-bright">
            06 / Get in touch
          </span>
          <h2 className="mt-4 font-display text-4xl text-paper sm:text-5xl">
            Let&rsquo;s ship something reliable together.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            Open to SQA and project-coordination roles where quality and
            delivery are treated as the same problem.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-sm bg-rust px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-rust-bright"
            >
              <Mail size={16} />
              {EMAIL}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-paper transition-transform hover:-translate-y-0.5 hover:border-rust-bright hover:text-rust-bright"
            >
              <Github size={16} />
              github.com/ss4616
            </a>
          </div>
        </div>
        <div className="border-t border-border/70 px-6 py-6 text-center font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          Saniya Saad — Built &amp; tested with care —{' '}
          <Link to="/resume" className="hover:text-rust-bright">
            full resume
          </Link>
        </div>
      </section>
    </div>
  )
}

function Section({
  id,
  index,
  title,
  kicker,
  children,
}: {
  id: string
  index: string
  title: string
  kicker: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="border-t border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-baseline gap-4">
          <span className="font-mono text-xs text-rust-bright">{index}</span>
          <div>
            <h2 className="font-display text-3xl text-paper">{title}</h2>
            <p
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: kicker }}
            />
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}

function formatYear(date: string) {
  return new Date(date).getFullYear()
}
