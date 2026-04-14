import bgSpritegen from '~/assets/spritegen-bg.png';
import spritegenScreenshot from '~/assets/spritegen-screenshot.png';
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

const title = 'SpriteGen — High-Performance WASM Spritesheet Generator';
const description =
  'WASM Spritesheet Generator is a high-performance, WebAssembly-powered utility written in Rust for generating spritesheets and metadata from image arrays. It is ideal for game developers and web developers working with custom graphics pipelines.';
const roles = [
  'Rust',
  'WebAssembly (WASM)',
  'Canvas API',
  'Image Processing',
  'NPM Package',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const SpriteGen = () => {
  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={0.55}
          src={bgSpritegen}
          srcSet={`${bgSpritegen} 1080w, ${bgSpritegen} 2160w`}
          placeholder={bgSpritegen}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/saksham-tomer/spritegen"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${spritegenScreenshot} 1280w, ${spritegenScreenshot} 2560w`}
              width={1280}
              height={800}
              placeholder={spritegenScreenshot}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Code snippet showing how to use wasm-spritesheet-generator NPM package in JavaScript"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              Game developers and creative coders frequently need to dynamically stitch individual frames or image arrays into efficient spritesheets on the client side. Doing this in JavaScript is slow and memory-intensive. Traditional tools are desktop-only and don't integrate directly into modern web-based toolchains.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>How it works</ProjectSectionHeading>
              <ProjectSectionText>
                SpriteGen leverages Rust's performance and compiles down to WebAssembly (WASM), exposing a blazingly fast asynchronous function to JavaScript: <code>generate_spritesheet_canvas()</code>. By offloading heavy image manipulation and layout logic to Rust, the tool achieves near-native performance right within the browser.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Metadata export</ProjectSectionHeading>
                <ProjectSectionText>
                  Alongside the generated pixel data, SpriteGen outputs a rich JSON metadata structure mapped to standard formats. The metadata inherently details frame coordinates, sizes, dimensions, scale, and animation metadata, allowing dropping the generated spritesheet directly into engines like Phaser, PixiJS, or Godot.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Format support</ProjectSectionHeading>
                <ProjectSectionText>
                  The utility seamlessly accepts <code>ImageData</code> extracted from canvas or raw JS structures. It outputs a composition ready to be drawn out via <code>putImageData</code> — allowing zero-overhead integration with existing HTML5 Canvas workflows or direct PNG downloading.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>Open source</ProjectSectionHeading>
              <ProjectSectionText>
                Available via NPM as <code>wasm-spritesheet-generator</code> and fully open-source under MIT. Full Rust source code and complete JS documentation are on{' '}
                <Link href="https://github.com/saksham-tomer/spritegen">GitHub</Link>.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
