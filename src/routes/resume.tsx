import { marked } from 'marked'
import { createFileRoute, Link } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { ArrowLeft, Download } from 'lucide-react'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
})

function ResumePage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-14 lg:py-20">
        <div className="mb-10 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-rust-bright"
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-rust px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground hover:bg-rust-bright"
          >
            <Download size={14} />
            Download PDF
          </a>
        </div>

        <div className="flex flex-col items-start gap-6 border-b border-border pb-10 sm:flex-row sm:items-center">
          <img
            src="/headshot-on-white.jpg"
            alt="Portrait of Saniya Saad"
            className="h-28 w-24 rounded-sm object-cover ring-1 ring-border"
          />
          <div>
            <h1 className="font-display text-4xl text-paper">Saniya Saad</h1>
            <p className="mt-1 font-display text-lg italic text-rust-bright">
              Software Quality Assurance Engineer &mdash; Project
              Coordination &amp; Delivery
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              SQA Engineer with a passion for building reliable, user-focused
              products. Interested in project planning and delivery, defining
              scope, objectives, stakeholders, and risks through project
              charters.
            </p>
          </div>
        </div>

        <section className="space-y-6 border-b border-border py-10">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-rust-bright">
            Work Experience
          </h2>
          <div className="space-y-8">
            {allJobs.map((job) => (
              <article key={job.jobTitle}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl text-paper">
                      {job.jobTitle}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {job.company} &middot; {job.location}
                    </p>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {job.startDate.slice(0, 7)} –{' '}
                    {job.endDate ? job.endDate.slice(0, 7) : 'Present'}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-paper/85">
                  {job.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-border px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {job.content && (
                  <div
                    className="prose prose-invert prose-sm mt-4 max-w-none text-paper/80"
                    dangerouslySetInnerHTML={{ __html: marked(job.content) }}
                  />
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6 py-10">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-rust-bright">
            Education
          </h2>
          <div className="space-y-8">
            {allEducations.map((education) => (
              <article key={education.school}>
                <h3 className="font-display text-xl text-paper">
                  {education.school}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/85">
                  {education.summary}
                </p>
                {education.content && (
                  <div
                    className="prose prose-invert prose-sm mt-4 max-w-none text-paper/80"
                    dangerouslySetInnerHTML={{
                      __html: marked(education.content),
                    }}
                  />
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
