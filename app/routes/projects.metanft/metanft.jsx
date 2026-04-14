import { Fragment } from 'react';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './metanft.module.css';

// Using a placeholder background or an existing one from assets
import bgPlaceholder from '~/assets/merchandaise-bg.png';

const title = 'MetaNft — Immersive Web3 Metaverse in Three.js';
const description =
  'A decentralized 3D metaverse built with Three.js and WebGL. Users explore an open virtual environment, interact socially via proximity chat, and securely trade NFTs represented as 3D artifacts embedded in the game world.';
const roles = [
  'Three.js / WebGL',
  'React / Next.js',
  'Web3 / Solidity',
  'WebSocket integration',
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

export const MetaNft = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.metanft}>
        <ProjectBackground
          src={bgPlaceholder}
          srcSet={`${bgPlaceholder} 1280w, ${bgPlaceholder} 2560w`}
          placeholder={bgPlaceholder}
          opacity={0.6}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/saksham-tomer/mEtaNfT"
          roles={roles}
        />

        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The Concept</ProjectSectionHeading>
              <ProjectSectionText>
                Traditional NFT marketplaces are grid-like 2D galleries. MetaNft re-imagines digital ownership by rendering NFTs as physical artifacts inside a sprawling 3D social world. Built natively with Three.js and WebGL, the browser-based environment requires no heavy downloads while still delivering high performance through optimized geometry instancing and compressed textures.
              </ProjectSectionText>
            </ProjectTextRow>
            <YouTubeEmbed
              videoId="_3J04An_PPc"
              title="MetaNft - devlog0 - Web3 metaverse in three.js"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Technical Implementation</ProjectSectionHeading>
              <ProjectSectionText>
                The frontend relies heavily on Three.js wrapped within React Three Fiber for state-driven 3D rendering. Player movement and physics are managed via Rapier.js to ensure responsive collisions and gravity. WebSockets handle real-time synchronization of player coordinates and chat functions. For Web3 interactions, the project integrates ethers.js directly to the user's Metamask wallet for secure, on-chain NFT transactions triggered via 3D raycasting when a player interacts with a gallery object.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>View Source Code</ProjectSectionHeading>
              <ProjectSectionText>
                The project source is available on{' '}
                <Link href="https://github.com/saksham-tomer/mEtaNfT">GitHub</Link>.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
