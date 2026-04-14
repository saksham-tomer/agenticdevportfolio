import solxpassTexture from '~/assets/solxpass-screenshot.png';
import solxpassTextureLarge from '~/assets/solxpass-screenshot.png';
import solxpassTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import merchandaiseTexture from '~/assets/merchandaise-screenshot.png';
import merchandaiseTextureLarge from '~/assets/merchandaise-screenshot.png';
import merchandaiseTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import peacefulWhisperTexture from '~/assets/peaceful-whisper-bg.png';
import peacefulWhisperTextureLarge from '~/assets/peaceful-whisper-bg.png';
import peacefulWhisperTexturePlaceholder from '~/assets/gamestack-list-placeholder.jpg';
import vimterminalTexture from '~/assets/vimterminal-screenshot.png';
import vimterminalTextureLarge from '~/assets/vimterminal-screenshot.png';
import vimterminalTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { Agency } from './agency.jsx';
import { MiscProjects } from './misc-projects.jsx';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoder wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Full-Stack & Agentic AI Developer',
    description: `Portfolio of ${config.name} — a full-stack developer specializing in agentic AI systems, blockchain/Web3 applications, and high-performance developer tooling. Building AI-first products end-to-end with TypeScript, Rust, and modern LLM frameworks.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="SolXPass — Cross-Chain Decentralized Identity"
        description="Decentralized identity & access control built on Solana. Won the Solana Radar Hackathon's Reclaim Protocol SideTrack — a secure Web3 access solution with multiple investor offers."
        buttonText="View project"
        buttonLink="/projects/solxpass"
        model={{
          type: 'laptop',
          alt: 'SolXPass decentralized identity dashboard on GitHub',
          textures: [
            {
              srcSet: `${solxpassTexture} 1280w, ${solxpassTextureLarge} 2560w`,
              placeholder: solxpassTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Peaceful Whisper — AI Voice Journaling"
        description="An AI-powered voice journaling app that transcribes speech, generates thoughtful LLM reflections, and plays back calming AI audio responses. Built for mental wellness at scale."
        buttonText="View project"
        buttonLink="/projects/peaceful-whisper"
        model={{
          type: 'phone',
          alt: 'Peaceful Whisper AI journaling app',
          video: 'https://drive.google.com/uc?export=download&id=1M1K8LRHx_ND721jSdH0HMsG2mM-or0TP',
          textures: [
            {
              srcSet: `${peacefulWhisperTexture} 375w, ${peacefulWhisperTextureLarge} 750w`,
              placeholder: peacefulWhisperTexturePlaceholder,
            },
            {
              srcSet: `${peacefulWhisperTexture} 375w, ${peacefulWhisperTextureLarge} 750w`,
              placeholder: peacefulWhisperTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="merchandaise.com — 3D E-Commerce Platform"
        description="Advanced e-commerce platform with real-time 3D product visualization using WebGL shaders and GLSL rendering. Increased user engagement 40% and conversion rates 25%."
        buttonText="View project"
        buttonLink="/projects/merchandaise"
        model={{
          type: 'laptop',
          alt: 'merchandaise.com 3D product viewer',
          textures: [
            {
              srcSet: `${merchandaiseTexture} 1280w, ${merchandaiseTextureLarge} 2560w`,
              placeholder: merchandaiseTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Vim Terminal — Rust-Powered File Explorer"
        description="Fast terminal-based file explorer with full vim keybindings built in Rust. Published on crates.io with 970+ downloads. Cross-platform with TUI/Crossterm."
        buttonText="View project"
        buttonLink="/projects/vim-terminal"
        model={{
          type: 'laptop',
          alt: 'vim_terminal crates.io page showing download stats',
          textures: [
            {
              srcSet: `${vimterminalTexture} 800w, ${vimterminalTextureLarge} 1920w`,
              placeholder: vimterminalTexturePlaceholder,
            },
          ],
        }}
      />
      <Agency />
      <MiscProjects />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
