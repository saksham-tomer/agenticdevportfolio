import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useRef, useState } from 'react';
import styles from './agency.module.css';

const services = [
  {
    icon: '🤖',
    title: 'AI Agents & Automation',
    description: 'Custom LLM agents, RAG pipelines, and multi-agent orchestration systems using LangGraph and MCP.',
  },
  {
    icon: '🌐',
    title: 'Premium Web Experiences',
    description: 'High-performance Next.js apps, WebGL 3D interfaces, and real-time systems with 99.9% uptime.',
  },
  {
    icon: '⚡',
    title: 'AI Integrations',
    description: 'Integrate OpenAI, Anthropic, and Gemini APIs into your existing products. Ship in weeks, not months.',
  },
];

const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '< 4 wks', label: 'Delivery Time' },
  { value: '2+', label: 'Years Production AI' },
  { value: '∞', label: 'Passion for AI' },
];

export function Agency() {
  const [focused, setFocused] = useState(false);
  const sectionRef = useRef();

  return (
    <Section
      className={styles.agency}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id="agency"
      ref={sectionRef}
      tabIndex={-1}
    >
      <Transition in timeout={0}>
        {({ visible }) => (
          <div className={styles.content} data-visible={visible}>
            <div className={styles.header}>
              <div className={styles.badge} data-visible={visible}>
                <span className={styles.badgeDot} />
                Available for new projects
              </div>
              <Heading
                level={2}
                as="h2"
                className={styles.title}
                data-visible={visible}
              >
                <DecoderText text="Visionary AI Agency" start={visible} delay={300} />
              </Heading>
              <Text className={styles.subtitle} data-visible={visible} size="xl" as="p">
                I operate an independent AI agency building intelligent automation systems, multi-agent pipelines, and premium web experiences for ambitious founders — shipped fast, built right.
              </Text>
            </div>

            <div className={styles.stats} data-visible={visible}>
              {stats.map(({ value, label }) => (
                <div key={label} className={styles.stat}>
                  <span className={styles.statValue}>{value}</span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>

            <Divider collapsed={!visible} collapseDelay={500} notchWidth="64px" notchHeight="8px" />

            <div className={styles.services} data-visible={visible}>
              {services.map(({ icon, title, description }, i) => (
                <div key={title} className={styles.service} style={{ '--delay': `${i * 150}ms` }}>
                  <div className={styles.serviceIcon}>{icon}</div>
                  <Heading level={4} as="h3" className={styles.serviceTitle}>
                    {title}
                  </Heading>
                  <Text className={styles.serviceDesc} size="s" as="p">
                    {description}
                  </Text>
                </div>
              ))}
            </div>

            <div className={styles.cta} data-visible={visible}>
              <Button
                href="https://visionary-port.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                iconEnd="arrow-right"
                iconHoverShift
              >
                Visit Visionary Agency
              </Button>
              <Button
                secondary
                href="/contact"
                icon="send"
              >
                Work with me
              </Button>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
}
