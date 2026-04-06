import bgSolxpass from '~/assets/solxpass-bg.png';
import solxpassScreenshot from '~/assets/solxpass-screenshot.png';
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

const title = 'Cross-chain decentralized identity on Solana';
const description =
  'SolXPass is a decentralized identity and access control platform built on Solana, leveraging the Reclaim Protocol to enable verifiable, cross-chain credentials — without exposing private data.';
const roles = [
  'Solana / Anchor (Rust)',
  'Reclaim Protocol SDK',
  'Next.js + TypeScript',
  'Cross-chain Architecture',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

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
          url="https://github.com/saksham-tomer/GreyMatterFi"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${solxpassScreenshot} 1280w, ${solxpassScreenshot} 2560w`}
              width={1280}
              height={800}
              placeholder={solxpassScreenshot}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="SolXPass GitHub repository showing the decentralized identity project"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              Web3 applications suffer from a fundamental identity crisis: wallets prove
              ownership of keys but not who you are. Traditional KYC solutions are
              centralized, expensive, and require users to sacrifice privacy. SolXPass
              was built to answer: how do you verify real-world claims on-chain without
              revealing the underlying data?
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              srcSet={`${solxpassArch} 1280w, ${solxpassArch} 2560w`}
              width={1280}
              height={800}
              placeholder={solxpassArch}
              alt="SolXPass architecture diagram showing the flow from user wallet through Reclaim Protocol to Solana on-chain identity"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Architecture</ProjectSectionHeading>
              <ProjectSectionText>
                The system uses the{' '}
                <Link href="https://reclaimprotocol.org">Reclaim Protocol</Link> to
                generate zero-knowledge proofs of off-chain claims (GitHub activity,
                LinkedIn, government IDs) that are then verified and minted as
                composable identity NFTs on Solana via an Anchor program. The
                cross-chain bridge allows these credentials to be consumed by EVM-based
                contracts through a Wormhole-compatible message format.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Hackathon win</ProjectSectionHeading>
              <ProjectSectionText>
                SolXPass was built at the{' '}
                <Link href="https://solana.com/radar">Solana Radar Hackathon</Link> in
                the Reclaim Protocol SideTrack category. The project received multiple
                investor offers and was praised for its novel approach to privacy-preserving
                on-chain identity without sacrificing composability. The Reclaim team
                highlighted it as a flagship integration example.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Technical highlights</ProjectSectionHeading>
                <ProjectSectionText>
                  The Anchor program handles ZK proof verification, NFT minting, and
                  on-chain access control in a single composable instruction set. The
                  Next.js frontend integrates Phantom wallet, generates proofs client-side
                  via the Reclaim SDK, and submits transactions with optimistic UI — all
                  in under 800ms end-to-end.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Impact</ProjectSectionHeading>
                <ProjectSectionText>
                  Enables Web3 app developers to add verified identity gates in under
                  10 lines of code. Privacy-preserving by default — the on-chain record
                  contains only the proof hash, never the underlying data. The system
                  supports cross-chain consumption, enabling EVM protocols to leverage
                  Solana-anchored identity proofs.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>View the project</ProjectSectionHeading>
              <ProjectSectionText>
                The full source code, architecture docs, and Anchor program are available
                on{' '}
                <Link href="https://github.com/saksham-tomer/GreyMatterFi">
                  GitHub
                </Link>
                . The Reclaim Protocol integration guide and on-chain program address are
                documented in the repository README.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};

