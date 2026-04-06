import bgVimterminal from '~/assets/vimterminal-bg.png';
import vimterminalScreenshot from '~/assets/vimterminal-screenshot.png';
import vimterminalTui from '~/assets/vimterminal-tui.png';
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

const title = 'Rust-powered terminal file explorer';
const description =
  'vim_terminal is a blazing-fast TUI file explorer built in Rust with complete vim keybindings, dual-pane navigation, and live file previews — published on crates.io with 970+ downloads.';
const roles = [
  'Rust',
  'Ratatui / TUI-rs',
  'Crossterm',
  'Published on crates.io',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const VimTerminal = () => {
  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={0.6}
          src={bgVimterminal}
          srcSet={`${bgVimterminal} 1080w, ${bgVimterminal} 2160w`}
          placeholder={bgVimterminal}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://crates.io/crates/vim_terminal"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${vimterminalScreenshot} 1280w, ${vimterminalScreenshot} 2560w`}
              width={1280}
              height={800}
              placeholder={vimterminalScreenshot}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="vim_terminal crates.io page showing 970+ downloads and package metadata"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              Modern terminal users who live in vim face a constant context switch:
              stepping out to a GUI file manager or using clunky tools like ranger that
              lack true vim motion fidelity. The goal with vim_terminal was to build the
              file explorer that vim power users actually deserve — one that feels native,
              is written in memory-safe Rust, and starts in under 10ms.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <Image
              raised
              srcSet={`${vimterminalTui} 1280w, ${vimterminalTui} 2560w`}
              width={1280}
              height={800}
              placeholder={vimterminalTui}
              alt="The vim_terminal TUI showing a dual-pane file manager with vim keybindings and live file preview"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Interface design</ProjectSectionHeading>
              <ProjectSectionText>
                The TUI is built with{' '}
                <Link href="https://github.com/ratatui-org/ratatui">ratatui</Link> and
                Crossterm for cross-platform terminal rendering. The dual-pane layout
                uses Unicode box-drawing characters for crisp borders at any terminal
                size. The live preview panel renders text files with syntax-aware
                coloring and previews images as block characters where supported. All
                navigation uses authentic vim motions: <code>hjkl</code>, <code>gg</code>/
                <code>G</code>, <code>/</code> for fuzzy search, and <code>:q</code> to quit.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Rust architecture</ProjectSectionHeading>
                <ProjectSectionText>
                  The project uses async Tokio for non-blocking filesystem operations,
                  ensuring the UI never freezes during directory enumeration of large trees.
                  The state machine is modeled as a typed Rust enum with pattern matching
                  for all key handlers — making the codebase highly predictable and
                  easy to extend. Memory usage stays under 5MB regardless of directory size.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>970+ downloads</ProjectSectionHeading>
                <ProjectSectionText>
                  Published on{' '}
                  <Link href="https://crates.io/crates/vim_terminal">crates.io</Link>{' '}
                  and cross-platform on Linux, macOS, and Windows. The crate is installable
                  with a single <code>cargo install vim_terminal</code> command with no
                  system dependencies. Community contributors have added support for
                  custom themes via a TOML configuration file.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>Install it</ProjectSectionHeading>
              <ProjectSectionText>
                Install via cargo:{' '}
                <code>cargo install vim_terminal</code>
                {'  '}— or browse the source on{' '}
                <Link href="https://github.com/saksham-tomer/vim_terminal">
                  GitHub
                </Link>
                . Contributions welcome — the project uses conventional commits and has
                a full issues tracker for planned features.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};

