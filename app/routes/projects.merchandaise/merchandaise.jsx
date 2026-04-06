import bgMerchandaise from '~/assets/merchandaise-bg.png';
import merchandaiseScreenshot from '~/assets/merchandaise-screenshot.png';
import merchandaiseWebgl from '~/assets/merchandaise-webgl.png';
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

const title = '3D e-commerce visualization platform';
const description =
  'merchandaise.com reimagines online shopping with real-time 3D product visualization powered by WebGL and custom GLSL shaders — enabling customers to inspect, customize, and experience products before buying.';
const roles = [
  'Three.js / WebGL',
  'Custom GLSL Shaders',
  'Next.js + TypeScript',
  'Framer Motion',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Merchandaise = () => {
  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={0.55}
          src={bgMerchandaise}
          srcSet={`${bgMerchandaise} 1080w, ${bgMerchandaise} 2160w`}
          placeholder={bgMerchandaise}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.merchandaise.com"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${merchandaiseScreenshot} 1280w, ${merchandaiseScreenshot} 2560w`}
              width={1280}
              height={800}
              placeholder={merchandaiseScreenshot}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="merchandaise.com landing page showing the customise merchandise instantly tagline"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              Traditional e-commerce is flat. Product photos lack context, returns are
              high, and customers cannot truly understand what they are buying until it
              arrives. Augmented and virtual try-on solutions are either expensive,
              complex to integrate, or require proprietary apps. merchandaise.com was
              built to make real-time 3D product visualization a commodity — fast,
              embeddable, and conversion-optimized.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <Image
              raised
              srcSet={`${merchandaiseWebgl} 1280w, ${merchandaiseWebgl} 2560w`}
              width={1280}
              height={800}
              placeholder={merchandaiseWebgl}
              alt="The 3D product viewer showing a sneaker with WebGL glass-like rendering and customization controls"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>WebGL rendering engine</ProjectSectionHeading>
              <ProjectSectionText>
                The visualization layer is built on Three.js with custom GLSL shaders
                for physically-based rendering (PBR), screen-space reflections (SSR),
                and real-time surface material switching. Products load as compressed
                GLTF models (via Draco), with LOD management ensuring smooth performance
                even on mid-range mobile devices. The shader pipeline supports
                subsurface scattering for fabrics and translucency for glass materials.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Conversion impact</ProjectSectionHeading>
                <ProjectSectionText>
                  After integrating the 3D viewer, A/B tests showed a 40% increase in
                  time-on-product-page and a 25% lift in conversion rate compared to
                  traditional photography. Return rates dropped 18% as customers had a
                  more accurate expectation of the product before purchase.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Technical stack</ProjectSectionHeading>
                <ProjectSectionText>
                  The platform is built on Next.js 14 with the App Router, using React
                  Server Components for catalog pages and client-side Three.js for the
                  interactive viewer. Product configurator state is managed with Zustand.
                  Framer Motion handles the UI transition animations. The backend uses
                  a Rust-based asset pipeline for GLTF compression and CDN delivery.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>Visit the platform</ProjectSectionHeading>
              <ProjectSectionText>
                Experience the 3D product viewer live at{' '}
                <Link href="https://www.merchandaise.com">merchandaise.com</Link>.
                The platform supports custom product uploads and provides an embeddable
                widget for third-party Shopify and WooCommerce stores.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};

