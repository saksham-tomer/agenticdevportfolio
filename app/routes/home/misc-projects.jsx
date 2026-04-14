import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import styles from './misc-projects.module.css';

const miscProjects = [
  {
    name: 'SpriteGen',
    desc: 'AI-powered sprite sheet generator using diffusion models. Generate game-ready sprites from text prompts.',
    tech: ['Python', 'Diffusion', 'AI', 'Image Gen'],
    github: 'https://github.com/saksham-tomer/spritegen',
    live: '/projects/spritegen',
  },
  {
    name: 'MetaNft',
    desc: 'Web3 metaverse built with Three.js. NFT trading and social hangout in an immersive 3D environment.',
    tech: ['Three.js', 'Web3', 'WebGL', 'Solidity'],
    github: 'https://github.com/saksham-tomer/mEtaNfT',
    live: '/projects/metanft',
  },
  {
    name: 'LocalCHat',
    desc: 'Local Multimodal AI Chat — LLaVA for images, Whisper for audio, ChromaDB for PDFs, runs entirely on consumer hardware.',
    tech: ['Python', 'Ollama', 'LLaVA', 'Whisper', 'ChromaDB'],
    github: 'https://github.com/saksham-tomer/LocalCHat',
    live: 'https://local-c-hat.vercel.app',
  },
  {
    name: 'MultiDisease Predictor',
    desc: 'Multimodal ML pipeline for disease classification — diabetes, heart disease, Parkinson\'s — at ~85% accuracy.',
    tech: ['Python', 'Streamlit', 'ML', 'Scikit-learn'],
    github: 'https://github.com/saksham-tomer/multidisease',
    live: 'https://multidisease-saksham.streamlit.app',
  },
  {
    name: 'GreyMatterFi',
    desc: 'DeFi portfolio tracker and yield optimizer on-chain. Real-time data aggregation across multiple protocols.',
    tech: ['Next.js', 'DeFi', 'Web3', 'Solidity'],
    github: 'https://github.com/saksham-tomer/GreyMatterFi',
    live: 'https://greymatter-lcyqpltc6-saksham-tomers-projects.vercel.app',
  },
  {
    name: 'AIQuizzes',
    desc: 'AI quiz generator using Gemini API for MCQ and open-ended questions with NextAuth and Prisma ORM persistence.',
    tech: ['Next.js', 'Gemini API', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/saksham-tomer/AIQuizzes',
    live: 'https://ai-quizzes-psi.vercel.app',
  },
  {
    name: 'Git Vault',
    desc: 'Git-like version control CLI in Rust — init, commit, revert, diff. Published on Crates.io with 790+ downloads.',
    tech: ['Rust', 'CLI', 'crates.io'],
    github: 'https://github.com/saksham-tomer/git_vault',
    live: 'https://crates.io/crates/git_vault',
  },
  {
    name: 'Chaos Crowd',
    desc: 'Solana-powered crowdfunding via Blinks. Create a project, share on social media, connect with backers — funding through your social network.',
    tech: ['Solana', 'Blinks', 'Next.js', 'Crowdfunding'],
    github: 'https://github.com/saksham-tomer/Chaos_Crowd',
    live: 'https://chaos-crowd-eight.vercel.app',
  },
  {
    name: 'ChatComp',
    desc: 'Real-time collaborative chat with component-based UI. WebSocket-powered with room management and persistent history.',
    tech: ['Next.js', 'WebSockets', 'Redis', 'Chat'],
    github: 'https://github.com/saksham-tomer/ChatComp',
    live: 'https://chat-comp.vercel.app',
  },
  {
    name: 'Vim Terminal (Crate)',
    desc: 'Rust TUI file explorer with full vim keybindings, dual-pane navigation, and live file preview. 970+ downloads.',
    tech: ['Rust', 'TUI', 'crates.io', 'CLI'],
    github: 'https://github.com/saksham-tomer/vim_terminal',
    live: 'https://crates.io/crates/vim_terminal',
  },
  {
    name: 'NextReadme',
    desc: 'Auto-generate beautiful README files from GitHub repos using AI. Drag-and-drop editor with live preview.',
    tech: ['Next.js', 'AI', 'Markdown', 'OpenAI'],
    github: 'https://github.com/saksham-tomer/NextReadme',
    live: 'https://next-readme-five.vercel.app',
  },
];

export function MiscProjects() {
  return (
    <Section className={styles.section} as="section" id="more-projects">
      <div className={styles.header}>
        <Heading level={5} as="h2" className={styles.title}>
          More work
        </Heading>
        <Text className={styles.subtitle} size="s" as="p">
          A selection of open-source experiments, tools, and explorations across AI, systems, and web.
        </Text>
      </div>
      <div className={styles.grid}>
        {miscProjects.map(({ name, desc, tech, github, live }) => (
          <div key={name} className={styles.card}>
            <div className={styles.cardHeader}>
              <Heading level={6} as="h3" className={styles.cardTitle}>
                {name}
              </Heading>
              <div className={styles.links}>
                {github && (
                  <Link href={github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    GitHub
                  </Link>
                )}
                {live && (
                  <Link href={live} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Live
                  </Link>
                )}
              </div>
            </div>
            <Text className={styles.cardDesc} size="s" as="p">
              {desc}
            </Text>
            <div className={styles.tags}>
              {tech.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
