// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  name: string;
  stack: string;
  description: string;
}

interface SubRole {
  title: string;
  period: string;
  bullets: string[];
}

interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  bullets?: string[];
  projects?: Project[];
  subRoles?: SubRole[];
}

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'nQode Software Company',
    type: 'Full-time · Hybrid',
    period: 'April 2024 – Present',
    bullets: [
      'Developing scalable web applications using React, Next.js, and TypeScript within a spec-driven development workflow.',
      'Collaborating closely with designers and product owners to translate detailed specifications into pixel-precise, maintainable UI components.',
      'Contributing to full-stack features with backend integrations and REST API consumption.',
      'Participating in code reviews and enforcing TypeScript best practices to maintain code quality and type safety.',
    ],
    projects: [
      {
        name: 'Reisknaller.nl – Travel Agency Platform',
        stack: 'Next.js · PHP Laravel · MySQL · MongoDB',
        description:
          'Performant travel deals platform with server-side rendering in Next.js, integrated with a PHP/Laravel REST API backed by MySQL and MongoDB.',
      },
      {
        name: 'Florbs – Enterprise SaaS Platform',
        stack: 'Next.js · MUI · REST APIs · OAuth / JWT',
        description:
          'Architected and bootstrapped the frontend from scratch. Built feature-rich MUI components, implemented OAuth authentication, JWT refresh token flows, authorization logic, and complex data manipulation.',
      },
    ],
  },
  {
    role: 'Forwardslash',
    company: 'Full-time · Hybrid',
    type: 'June 2021 – April 2024 · 2 yrs 10 mos',
    period: '',
    subRoles: [
      {
        title: 'Team Lead',
        period: 'May 2023 – April 2024',
        bullets: [
          'Led the frontend development team; conducted code reviews and mentored junior developers on React and modern JavaScript best practices.',
          'Coordinated sprint planning, task delegation, and delivery timelines to ensure consistent on-time feature releases.',
          'Acted as the technical bridge between project managers and developers, translating business requirements into actionable tasks.',
          'Introduced and enforced component architecture patterns and coding standards to improve team-wide consistency.',
        ],
      },
      {
        title: 'Web Developer',
        period: 'June 2021 – May 2023',
        bullets: [
          'Built and maintained client-facing web applications using React and PHP across multiple simultaneous projects.',
          'Developed reusable component libraries and contributed to frontend architecture decisions.',
          'Collaborated on full-stack features integrating PHP backends with modern JavaScript frontends.',
          'Applied Clean Architecture and DDD principles across a growing project portfolio.',
        ],
      },
    ],
  },
  {
    role: 'Software Engineer',
    company: 'SaaS Craftsmen',
    type: 'Full-time · On-site',
    period: 'March 2020 – May 2021',
    bullets: [
      'Contributed to LicenSee, a startup SaaS product, as part of a cross-functional team of five engineers.',
      'Built reusable React component libraries and performant UI components focused on maintainability and reusability.',
      'Integrated third-party payment services and communicated directly with clients to gather requirements.',
    ],
  },
  {
    role: 'Assistant Web Developer',
    company: 'Clarinet Internet Solutions',
    type: 'Freelance · Remote',
    period: 'October 2016 – August 2020',
    bullets: [
      'Developed and maintained commercial WordPress websites for clients across various industries.',
      'Wrote custom PHP scripts to automate DevOps and business workflows, reducing manual overhead.',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'Vega IT Sourcing',
    type: 'Internship · On-site',
    period: 'August 2018',
    bullets: [
      'Contributed to a full-stack e-commerce platform using Laravel, delivering RESTful API endpoints and server-rendered views with Blade templates.',
      'Implemented core commerce features including product management, order processing, and cart functionality using Eloquent ORM.',
    ],
  },
];

const projects: Project[] = [
  {
    name: 'GParency',
    stack: 'React · Next.js · NestJS · AWS',
    description:
      'Commercial real estate investment portal featuring an interactive transaction map, investment calculator, and advanced property search tools. Deployed on AWS.',
  },
  {
    name: 'Aeroreserva',
    stack: 'WordPress · PHP · 12 Languages',
    description:
      'Global airport Wi-Fi directory with automated content generation via custom PHP scripts. Localized into 12 languages.',
  },
  {
    name: 'Bowling Zabac',
    stack: 'React · Ant Design · React Query · Strapi · MySQL · DigitalOcean',
    description:
      'Live scorekeeping platform for a business bowling league. Full-stack with Strapi CMS backend, self-hosted on a manually configured DigitalOcean droplet.',
  },
];

const technicalSkills = [
  { label: 'React', core: true },
  { label: 'Next.js', core: true },
  { label: 'TypeScript', core: true },
  { label: 'Node.js', core: true },
  { label: 'NestJS', core: true },
  { label: 'PHP / Laravel', core: true },
  { label: 'PostgreSQL', core: false },
  { label: 'MySQL', core: false },
  { label: 'MongoDB', core: false },
  { label: 'REST APIs', core: false },
  { label: 'MUI', core: false },
  { label: 'Git', core: false },
  { label: 'HTML / CSS', core: false },
  { label: 'Clean Architecture', core: false },
  { label: 'Domain-Driven Design', core: false },
  { label: 'AWS', core: false },
  { label: 'Docker', core: false },
  { label: 'DigitalOcean', core: false },
  { label: 'Web Security', core: false },
  { label: 'WordPress', core: false },
];

const education: EducationItem[] = [
  {
    institution: 'Faculty of Technical Sciences, University of Novi Sad',
    degree: 'Computer Software Engineering',
    period: '2015 – 2020',
  },
  {
    institution: 'High School Svetozar Miletic, Novi Sad',
    degree: 'Technicals of Economics and Finance',
    period: '2011 – 2015',
  },
];

const softSkills = [
  'Team Leadership',
  'Technical Mentoring',
  'Client Communication',
  'Sprint Planning',
  'Requirements Analysis',
  'Technical Interviewing',
];

// ─── Sub-components ────────────────────────────────────────────────────────────

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={styles.sectionLabel}>
    <span style={styles.sectionLabelText}>{children}</span>
    <div style={styles.sectionLabelLine} />
  </div>
);

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul style={styles.bulletList}>
    {items.map((item, i) => (
      <li key={i} style={styles.bulletItem}>
        <span style={styles.bulletDash}>—</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ProjectCard: React.FC<{ project: Project; indent?: boolean }> = ({
  project,
  indent = false,
}) => (
  <div style={{ ...styles.projectCard, marginLeft: indent ? '0' : '0' }}>
    <p style={styles.projectName}>{project.name}</p>
    <p style={styles.projectStack}>{project.stack}</p>
    <p style={styles.projectDesc}>{project.description}</p>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const MilanResume: React.FC = () => {
  return (
    <div style={styles.page}>
      {/* HEADER */}
      <header style={styles.header}>
        <div>
          <h1 style={styles.name}>Milan Masnikosa</h1>
          <p style={styles.title}>Senior Software Engineer · Frontend &amp; Full-Stack</p>
          <div style={styles.contacts}>
            <a href="mailto:milan.masnikosa@gmail.com" style={styles.contactLink}>
              milan.masnikosa@gmail.com
            </a>
            <span style={styles.contactSep}>|</span>
            <span style={styles.contactItem}>+381 65-665-1895</span>
            <span style={styles.contactSep}>|</span>
            <a
              href="https://linkedin.com/in/milan-masnikosa"
              target="_blank"
              rel="noreferrer"
              style={styles.contactLink}
            >
              linkedin.com/in/milan-masnikosa
            </a>
          </div>
        </div>
      </header>

      <div style={styles.divider} />

      {/* SUMMARY */}
      <section style={styles.section}>
        <SectionLabel>Summary</SectionLabel>
        <p style={styles.summaryText}>
          Senior Software Engineer with 7+ years of experience building scalable web applications,
          SaaS platforms, and full-stack products across multiple industries. Strong track record
          leading frontend teams, architecting React/Next.js applications, and delivering
          pixel-precise UIs within spec-driven workflows. Experienced in backend integration
          (PHP/Laravel, Node.js, NestJS, REST APIs) and actively deepening expertise in backend
          architecture, PostgreSQL, and cloud infrastructure.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section style={styles.section}>
        <SectionLabel>Experience</SectionLabel>

        {experiences.map((exp, i) => (
          <div key={i} style={styles.expItem}>
            {/* Standard single-role entry */}
            {!exp.subRoles && (
              <>
                <div style={styles.expMeta}>
                  <span style={styles.expPeriod}>{exp.period}</span>
                  <span style={styles.expCompany}>{exp.company}</span>
                  <span style={styles.expType}>{exp.type}</span>
                </div>
                <div style={styles.expContent}>
                  <h3 style={styles.expRole}>{exp.role}</h3>
                  {exp.bullets && <BulletList items={exp.bullets} />}
                  {exp.projects && (
                    <div style={styles.projectsBlock}>
                      <p style={styles.projectsLabel}>Key Projects</p>
                      <div style={styles.projectsGrid}>
                        {exp.projects.map((p, j) => (
                          <ProjectCard key={j} project={p} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Multi-role (Forwardslash) */}
            {exp.subRoles && (
              <>
                <div style={styles.expMeta}>
                  <span style={styles.expCompany}>{exp.role}</span>
                  <span style={styles.expType}>{exp.company}</span>
                  <span style={styles.expPeriod}>{exp.type}</span>
                </div>
                <div style={styles.expContent}>
                  {exp.subRoles.map((sub, j) => (
                    <div key={j} style={styles.subRole}>
                      <div style={styles.subRoleHeader}>
                        <h3 style={styles.subRoleTitle}>{sub.title}</h3>
                        <span style={styles.subRolePeriod}>{sub.period}</span>
                      </div>
                      <BulletList items={sub.bullets} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </section>

      {/* PROJECTS */}
      <section style={styles.section}>
        <SectionLabel>Notable Projects</SectionLabel>
        <div style={styles.projectsGrid}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section style={styles.section}>
        <SectionLabel>Technical Skills</SectionLabel>
        <div style={styles.skillsGrid}>
          {technicalSkills.map((s, i) => (
            <span key={i} style={s.core ? styles.skillTagCore : styles.skillTag}>
              {s.label}
            </span>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section style={styles.section}>
        <SectionLabel>Education</SectionLabel>
        {education.map((e, i) => (
          <div key={i} style={styles.eduRow}>
            <div>
              <p style={styles.eduInstitution}>{e.institution}</p>
              <p style={styles.eduDegree}>{e.degree}</p>
            </div>
            <span style={styles.eduPeriod}>{e.period}</span>
          </div>
        ))}
      </section>

      {/* SOFT SKILLS & LANGUAGES */}
      <section style={styles.section}>
        <SectionLabel>Languages &amp; Soft Skills</SectionLabel>
        <div style={styles.langRow}>
          <span style={styles.skillTagCore}>English – Professional</span>
          <span style={styles.skillTagCore}>Serbian – Native</span>
        </div>
        <div style={{ ...styles.skillsGrid, marginTop: '10px' }}>
          {softSkills.map((s, i) => (
            <span key={i} style={styles.skillTag}>
              {s}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

// ─── Styles ───────────────────────────────────────────────────────────────────

const GREEN = '#2D6A4F';
const DARK = '#1A1A2E';
const MID = '#4A556A';
const LIGHT_BG = '#F0F8F4';
const BORDER = '#D8E8DF';

const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    color: DARK,
    maxWidth: '860px',
    margin: '0 auto',
    padding: '2.5rem 1.5rem',
    lineHeight: 1.6,
  },
  header: {
    marginBottom: '1.5rem',
  },
  name: {
    fontFamily: "'Libre Baskerville', serif",
    fontSize: 'clamp(32px, 5vw, 44px)',
    fontWeight: 400,
    margin: '0 0 6px',
    letterSpacing: '-0.5px',
    color: DARK,
  },
  title: {
    fontSize: '13px',
    color: MID,
    fontWeight: 300,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    margin: '0 0 14px',
  },
  contacts: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px 14px',
    alignItems: 'center',
  },
  contactItem: {
    fontSize: '13px',
    color: MID,
  },
  contactLink: {
    fontSize: '13px',
    color: GREEN,
    textDecoration: 'none',
  },
  contactSep: {
    fontSize: '13px',
    color: BORDER,
  },
  divider: {
    height: '2px',
    background: GREEN,
    borderRadius: '2px',
    marginBottom: '2rem',
  },
  section: {
    marginBottom: '2.25rem',
  },
  sectionLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '1.25rem',
  },
  sectionLabelText: {
    fontSize: '10px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: GREEN,
    fontWeight: 600,
    whiteSpace: 'nowrap',
  },
  sectionLabelLine: {
    flex: 1,
    height: '1px',
    backgroundColor: BORDER,
  },
  summaryText: {
    fontSize: '14.5px',
    color: MID,
    lineHeight: 1.8,
    margin: 0,
  },
  expItem: {
    display: 'grid',
    gridTemplateColumns: '180px 1fr',
    gap: '0 28px',
    marginBottom: '2rem',
    paddingBottom: '2rem',
    borderBottom: `1px solid ${BORDER}`,
  },
  expMeta: {
    paddingTop: '2px',
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  expPeriod: {
    fontSize: '12px',
    color: MID,
    fontStyle: 'italic',
    lineHeight: 1.4,
  },
  expCompany: {
    fontSize: '12.5px',
    color: GREEN,
    fontWeight: 600,
    marginTop: '2px',
  },
  expType: {
    fontSize: '11.5px',
    color: MID,
    fontWeight: 300,
  },
  expContent: {
    minWidth: 0,
  },
  expRole: {
    fontSize: '16px',
    fontWeight: 600,
    margin: '0 0 10px',
    color: DARK,
  },
  bulletList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  bulletItem: {
    fontSize: '13.5px',
    color: MID,
    lineHeight: 1.65,
    marginBottom: '5px',
    display: 'flex',
    gap: '8px',
    alignItems: 'flex-start',
  },
  bulletDash: {
    color: GREEN,
    fontSize: '11px',
    marginTop: '2px',
    flexShrink: 0,
  },
  projectsBlock: {
    marginTop: '16px',
  },
  projectsLabel: {
    fontSize: '11px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: GREEN,
    fontWeight: 600,
    margin: '0 0 10px',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '12px',
  },
  projectCard: {
    padding: '14px 16px',
    border: `1px solid ${BORDER}`,
    borderRadius: '8px',
    backgroundColor: LIGHT_BG,
  },
  projectName: {
    fontSize: '13.5px',
    fontWeight: 600,
    color: DARK,
    margin: '0 0 4px',
  },
  projectStack: {
    fontSize: '11.5px',
    color: GREEN,
    margin: '0 0 6px',
    letterSpacing: '0.3px',
  },
  projectDesc: {
    fontSize: '13px',
    color: MID,
    lineHeight: 1.6,
    margin: 0,
  },
  subRole: {
    marginBottom: '20px',
  },
  subRoleHeader: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: '8px',
    gap: '12px',
  },
  subRoleTitle: {
    fontSize: '15px',
    fontWeight: 600,
    color: DARK,
    margin: 0,
  },
  subRolePeriod: {
    fontSize: '12px',
    color: MID,
    fontStyle: 'italic',
    whiteSpace: 'nowrap',
  },
  skillsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '7px',
  },
  skillTag: {
    fontSize: '12px',
    padding: '4px 12px',
    borderRadius: '20px',
    border: `1px solid ${BORDER}`,
    color: MID,
    backgroundColor: '#F7FAF8',
  },
  skillTagCore: {
    fontSize: '12px',
    padding: '4px 12px',
    borderRadius: '20px',
    border: `1px solid ${GREEN}`,
    color: GREEN,
    backgroundColor: LIGHT_BG,
    fontWeight: 500,
  },
  eduRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '14px',
    gap: '12px',
  },
  eduInstitution: {
    fontSize: '14.5px',
    fontWeight: 600,
    color: DARK,
    margin: '0 0 3px',
  },
  eduDegree: {
    fontSize: '13px',
    color: MID,
    margin: 0,
  },
  eduPeriod: {
    fontSize: '12px',
    color: MID,
    fontStyle: 'italic',
    whiteSpace: 'nowrap',
  },
  langRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '7px',
    marginBottom: '0',
  },
};

export default MilanResume;
