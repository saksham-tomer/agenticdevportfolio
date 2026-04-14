import bgSolxpass from '~/assets/solxpass-bg.png';
import solxpassCover from '~/assets/solxpass-cover.png';
import solxpassArch from '~/assets/solxpass-arch.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './solxpass.module.css';

const title = 'SolXPass — Decentralized Identity & Rewards on Solana';
const description =
  'SolXPass is a proof-of-person platform on Solana that aggregates ZK-verified identity claims across multiple life categories, enabling users to earn NFT rewards and level up — built during the Solana Radar Hackathon.';
const roles = [
  'Next.js 14 + TypeScript',
  'Solana / Anchor (Rust)',
  'Reclaim Protocol ZK',
  'Zero-Knowledge Proofs',
  'NFT Minting',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

function YouTubeEmbed({ videoId, title: vidTitle }) {
  return (
    <div className={styles.videoWrapper}>
      <iframe
        className={styles.videoFrame}
        src={`https://www.youtube.com/embed/${videoId}`}
        title={vidTitle}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

export const SolXPass = () => {
  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={0.6}
          src={bgSolxpass}
          srcSet={`${bgSolxpass} 1080w, ${bgSolxpass} 2160w`}
          placeholder={bgSolxpass}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://v0-ecru.vercel.app"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${solxpassCover} 1280w, ${solxpassCover} 2560w`}
              width={1280}
              height={800}
              placeholder={solxpassCover}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="SolXPass decentralized identity dashboard showing proof categories and NFT reward tiers"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              Web3 apps can verify wallet ownership but not who you actually are. Traditional
              KYC is centralized and expensive. SolXPass answers: how do you aggregate
              verifiable real-world identity claims on-chain across food, gaming, finance,
              social, and more — without exposing private data?
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Hackathon Demo</ProjectSectionHeading>
              <ProjectSectionText>
                Presented live at the{' '}
                <Link href="https://solana.com/radar">Solana Radar Hackathon</Link> — won
                the Reclaim Protocol SideTrack. This is the demo submitted to the competition:
              </ProjectSectionText>
            </ProjectTextRow>
            <YouTubeEmbed
              videoId="nrNN-r_LAr8"
              title="SolXPass — Solana Radar Hackathon Demo"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              srcSet={`${solxpassArch} 1280w, ${solxpassArch} 2560w`}
              width={1280}
              height={800}
              placeholder={solxpassArch}
              alt="SolXPass architecture: user wallet → Reclaim Protocol ZK proofs → Solana on-chain verification → NFT minting"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Architecture</ProjectSectionHeading>
              <ProjectSectionText>
                Users submit identity proofs from multiple life categories. The{' '}
                <Link href="https://reclaimprotocol.org">Reclaim Protocol</Link> generates
                zero-knowledge proofs of off-chain claims (GitHub, LinkedIn, streaming
                history) that are verified on-chain via an Anchor program — the proof hash
                is stored on Solana, the raw data never leaves the client. Verified proofs
                unlock NFT rewards across four leveling tiers: Animal → Dinosaur → Alien →
                Hero.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Reward system</ProjectSectionHeading>
                <ProjectSectionText>
                  Users earn on-chain rewards by verifying identity across categories and
                  engaging on SolxPass Feeds (a Twitter-like community layer for Proof of
                  Person). Sharing achievements on Twitter grants bonus multipliers. Rewards
                  are minted as NFTs with 10 levels per tier — each tier unlocking exclusive
                  protocol privileges.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>NPM SDK</ProjectSectionHeading>
                <ProjectSectionText>
                  SolXPass ships an npm package (<code>reclaim-solxpass</code>) so DApps
                  can retrieve user scores, tiers, proofs, and levels in two lines of code.
                  Built for DeFi, DePIN, and blockchain infrastructure — add verified
                  identity gates to any Solana application without building the verification
                  layer yourself.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Platform Overview</ProjectSectionHeading>
              <ProjectSectionText>
                Full walkthrough of the SolxPass platform — proof generation, reward
                claiming, and the community feed:
              </ProjectSectionText>
            </ProjectTextRow>
            <YouTubeEmbed
              videoId="V8yvr6hZWP0"
              title="SolxPass Overview — Platform Walkthrough"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>View the project</ProjectSectionHeading>
              <ProjectSectionText>
                Live at{' '}
                <Link href="https://v0-ecru.vercel.app">v0-ecru.vercel.app</Link>. Full
                source code on{' '}
                <Link href="https://github.com/saksham-tomer/solxpass">GitHub</Link>, including
                the Anchor program, ZK proof integration, and npm SDK.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
