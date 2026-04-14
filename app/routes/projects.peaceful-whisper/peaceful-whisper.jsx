import bgPeacefulWhisper from '~/assets/peaceful-whisper-bg.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';

const title = 'Peaceful Whisper — AI Voice Journaling App';
const description =
  'Peaceful Whisper is an AI-powered voice journaling app that transcribes your spoken thoughts with Whisper, generates personalized LLM reflections, and delivers calming audio responses via Kokoro TTS — built for mental wellness.';
const roles = [
  'Whisper ASR',
  'LLM Integration',
  'Kokoro TTS',
  'React / Vite',
  'WebAudio API',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const PeacefulWhisper = () => {
  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={0.5}
          src={bgPeacefulWhisper}
          srcSet={`${bgPeacefulWhisper} 1080w, ${bgPeacefulWhisper} 2160w`}
          placeholder={bgPeacefulWhisper}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://peaceful-whisper-page.vercel.app"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              aspectRatio: '16/9',
              background: '#0a0a0f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
            }}>
              <video
                src="/Video Project.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                aria-label="Peaceful Whisper app demo video"
              />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              Journaling is one of the most evidence-backed tools for mental wellness — but
              most people don't journal because typing feels like effort at the end of a
              hard day. Voice is effortless. Peaceful Whisper removes the friction: speak
              for 60 seconds, and receive back a thoughtful, calming reflection crafted by
              an LLM — read aloud in a soothing AI voice.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>How it works</ProjectSectionHeading>
              <ProjectSectionText>
                The user speaks into their microphone. The audio stream is processed by{' '}
                <Link href="https://github.com/openai/whisper">OpenAI Whisper</Link>{' '}
                for accurate speech-to-text transcription. The transcript is sent to an
                LLM (GPT-4 / Gemini) with a carefully crafted system prompt designed to
                generate empathetic, non-judgmental journal reflections. The response is
                then passed to{' '}
                <Link href="https://github.com/remsky/Kokoro-82M">Kokoro TTS</Link>{' '}
                — a lightweight, high-quality text-to-speech model — and played back
                through the WebAudio API.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Audio pipeline</ProjectSectionHeading>
                <ProjectSectionText>
                  Recording uses the MediaRecorder API with VAD (voice activity detection)
                  to automatically stop after silence. Audio is chunked into WebM blobs,
                  sent to the backend via fetch, transcribed with Whisper, and the
                  transcript + LLM response flows back as a streaming response for
                  real-time text display.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Calm UX design</ProjectSectionHeading>
                <ProjectSectionText>
                  The interface is intentionally minimal — dark ambient gradients,
                  pulsing waveform visualizer, and a single large record button. There
                  are no notifications, no streaks, no gamification. The focus is entirely
                  on a brief, quiet moment of reflection without distractions.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>Try it</ProjectSectionHeading>
              <ProjectSectionText>
                Experience Peaceful Whisper live at{' '}
                <Link href="https://peaceful-whisper-page.vercel.app">
                  peaceful-whisper-page.vercel.app
                </Link>
                . The app runs entirely in the browser — no account required. Source code
                available on{' '}
                <Link href="https://github.com/saksham-tomer/peaceful-whisper-page">
                  GitHub
                </Link>
                .
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
