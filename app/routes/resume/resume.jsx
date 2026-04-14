import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import styles from './resume.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Resume',
    description:
      'Saksham Tomer — Full Stack Agentic AI Engineer. 2+ years building production LLM applications, multi-agent systems, and cloud-native microservices.',
  });
};

const skills = {
  'Languages': 'Python, TypeScript, JavaScript, Rust, Go, Java, C, Solidity',
  'AI / Agentic': 'LangGraph, LangChain, RAG, MCP, Multi-agent Orchestration, Prompt Engineering, Hugging Face, LLM Fine-tuning, Vector Databases, Embeddings, OpenAI / Anthropic / Gemini APIs',
  'Frontend': 'React.js, Next.js, Redux, WebGL, WebGPU, Three.js, WebSockets, WebRTC, HTML5, CSS3',
  'Backend & APIs': 'Node.js, Express.js, NestJS, FastAPI, RESTful APIs, GraphQL, Microservices, Kafka, Prisma',
  'Databases': 'PostgreSQL, MongoDB, MySQL, Redis, PineconeDB',
  'Cloud & DevOps': 'AWS (Lambda, ECS, EKS, S3, CloudFront), Docker, Kubernetes, CI/CD, GitHub Actions, Prometheus, Grafana, Terraform',
};

const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Hutter Products',
    period: 'Jan 2025 – Present',
    location: 'Remote — Switzerland',
    bullets: [
      'Architected full stack e-commerce platform (React.js, Node.js, PostgreSQL) with real-time 3D WebGL/GLSL visualization → +40% user engagement, +25% conversions.',
      'Engineered virtual try-on system using WebGPU and custom shader pipelines (AO, diffuse, normal mapping) for photorealistic clothing simulation.',
      'Designed AWS serverless architecture (Lambda, CloudFront, S3) cutting response times 60% and costs 35%; Prometheus/Grafana monitoring reduced downtime 45%.',
      'Integrated OAuth 2.0, JWT, and Stripe processing — 10,000 daily transactions at 99.9% uptime; conducted code reviews and Agile sprint delivery.',
    ],
  },
  {
    role: 'Full Stack & AI Developer (Part-Time)',
    company: 'OpenBook.games',
    period: 'Mar 2025 – Oct 2025',
    location: 'Remote — Singapore',
    bullets: [
      'Orchestrated LangGraph-based agentic microservices on AWS EKS (mesh architecture, Docker) powering a production AI game engine at 99.5% service availability.',
      'Built 3D battle mode system (Three.js, WebGL) with Meta Segment Anything for intelligent scene segmentation and A* pathfinding for autonomous enemy AI movement.',
      'Engineered audio-intensity conversation system with threshold-based response algorithms and Kokoro TTS for natural in-game NPC dialogue.',
    ],
  },
  {
    role: 'Machine Learning Intern',
    company: 'SoftPro India',
    period: 'May – Aug 2024',
    location: 'Remote — India',
    bullets: [
      'Built quantized RAG pipelines (Hugging Face + LangChain) for enterprise multimodal chat applications optimized for deployment latency and cost.',
      'Trained regression and classification models to ~85% accuracy; improved pipeline performance ~20% via feature selection and model validation.',
      'Reduced data inconsistencies 30% and improved downstream model accuracy 15% through cross-functional data management.',
    ],
  },
  {
    role: 'Senior Full Stack Developer',
    company: 'SRMS Hospital',
    period: 'Feb – May 2024',
    location: 'Remote — India',
    bullets: [
      'Delivered e-health platform (Next.js, WebSockets, WebRTC) boosting new patient acquisition 20%; accelerated PostgreSQL migrations 60% via query optimization.',
      'Designed microservices architecture with Docker, Kubernetes, Redis, and Kafka; implemented unit and integration tests via GitHub Actions CI/CD — 98% test coverage.',
    ],
  },
];

const projects = [
  {
    name: 'SolXPass',
    desc: 'Cross-chain decentralized identity — won Solana Radar Hackathon (Reclaim Protocol SideTrack), attracted multiple investor offers.',
    tech: 'Rust, Next.js, Solidity',
    link: '/projects/solxpass',
  },
  {
    name: 'Vim Terminal',
    desc: 'Git-like Rust file explorer CLI published on Crates.io with 790+ downloads. Cross-platform TUI.',
    tech: 'Rust, CLI, crates.io',
    link: 'https://crates.io/crates/vim_terminal',
  },
  {
    name: 'Peaceful Whisper',
    desc: 'AI voice journaling app: Whisper ASR → LLM reflection → Kokoro TTS audio playback.',
    tech: 'React, Whisper, LLM, TTS',
    link: '/projects/peaceful-whisper',
  },
  {
    name: 'AIQuizzes',
    desc: 'AI quiz generator using Gemini API for MCQ + open-ended questions; NextAuth + Prisma ORM.',
    tech: 'Next.js, PostgreSQL, Gemini API',
    link: 'https://ai-quizzes-psi.vercel.app',
  },
  {
    name: 'Proxy Server',
    desc: 'Multi-threaded HTTP proxy in C reducing latency 50% via POSIX socket optimization.',
    tech: 'C, Multithreading, POSIX',
    link: 'https://github.com/saksham-tomer/proxyServerMultiThreaded',
  },
];

function ResumeSection({ title, children }) {
  return (
    <div className={styles.resumeSection}>
      <div className={styles.sectionDivider}>
        <span className={styles.sectionTitle}>{title}</span>
        <div className={styles.sectionLine} />
      </div>
      {children}
    </div>
  );
}

export function Resume() {
  return (
    <>
      <Section className={styles.page} as="main" id="resume">
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.nameBlock}>
              <Heading level={1} as="h1" className={styles.name}>
                <DecoderText text="Saksham Tomer" start delay={200} />
              </Heading>
              <Text className={styles.roleText} size="l" as="p">
                Full Stack Agentic AI Engineer
              </Text>
            </div>
            <div className={styles.contacts}>
              <a href="mailto:sakshamtomerdevs@gmail.com" className={styles.contactLink}>
                sakshamtomerdevs@gmail.com
              </a>
              <a href="tel:+919760896424" className={styles.contactLink}>
                +91 9760896424
              </a>
              <a href="https://www.linkedin.com/in/saksham-tomer-62917b403/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                linkedin.com/in/saksham-tomer-62917b403
              </a>
              <a href="https://github.com/saksham-tomer" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                github.com/saksham-tomer
              </a>
              <span className={styles.contactLink}>Noida, India (IST)</span>
            </div>
            <div className={styles.downloadRow}>
              <Button
                href="https://drive.google.com/uc?export=download&id=1rGVNRL91ImPAOGV-C_PYLmUETxg9_Q5M"
                target="_blank"
                rel="noopener noreferrer"
                icon="arrow-right"
                as="a"
                className={styles.downloadBtn}
              >
                Download PDF
              </Button>
            </div>
          </div>

          {/* Summary */}
          <ResumeSection title="Summary">
            <Text className={styles.summary} as="p">
              Full Stack Agentic AI Engineer with 2+ years of full stack development experience building
              production LLM applications, multi-agent systems (LangGraph, MCP), RAG pipelines, and
              cloud-native microservices on AWS. Skilled in system design, RESTful API development,
              and Agile/Scrum delivery across cross-functional distributed teams. Delivered 40%
              engagement gains, 60% faster response times, and 99.9% uptime across remote teams
              in Switzerland and Singapore.
            </Text>
          </ResumeSection>

          {/* Skills */}
          <ResumeSection title="Technical Skills">
            <div className={styles.skillsGrid}>
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className={styles.skillRow}>
                  <span className={styles.skillCategory}>{category}:</span>
                  <span className={styles.skillItems}>{items}</span>
                </div>
              ))}
            </div>
          </ResumeSection>

          {/* Experience */}
          <ResumeSection title="Work Experience">
            <div className={styles.experienceList}>
              {experience.map(({ role, company, period, location, bullets }) => (
                <div key={company} className={styles.expItem}>
                  <div className={styles.expHeader}>
                    <div className={styles.expLeft}>
                      <Heading level={4} as="h3" className={styles.expRole}>
                        {role}
                      </Heading>
                      <Text className={styles.expCompany} size="s">
                        {company}
                      </Text>
                    </div>
                    <div className={styles.expRight}>
                      <Text className={styles.expPeriod} size="s">{period}</Text>
                      <Text className={styles.expLocation} size="s">{location}</Text>
                    </div>
                  </div>
                  <ul className={styles.bullets}>
                    {bullets.map((b, i) => (
                      <li key={i} className={styles.bullet}>
                        <Text size="s" as="span">{b}</Text>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ResumeSection>

          {/* Projects */}
          <ResumeSection title="Key Projects">
            <div className={styles.projectsGrid}>
              {projects.map(({ name, desc, tech, link }) => (
                <div key={name} className={styles.projectCard}>
                  <div className={styles.projectHeader}>
                    <a href={link} className={styles.projectName} target={link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      {name} →
                    </a>
                    <span className={styles.projectTech}>{tech}</span>
                  </div>
                  <Text size="s" className={styles.projectDesc}>{desc}</Text>
                </div>
              ))}
            </div>
          </ResumeSection>

          {/* Education */}
          <ResumeSection title="Education">
            <div className={styles.eduItem}>
              <div className={styles.expHeader}>
                <div className={styles.expLeft}>
                  <Heading level={4} as="h3" className={styles.expRole}>
                    BTech in Computer Science and Engineering
                  </Heading>
                  <Text className={styles.expCompany} size="s">
                    SRMS College of Engineering & Technology, Bareilly, India
                  </Text>
                </div>
              </div>
            </div>
          </ResumeSection>
        </div>
      </Section>
      <Footer />
    </>
  );
}
