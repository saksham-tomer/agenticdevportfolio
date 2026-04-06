import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
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
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'Tools, languages, frameworks, and hardware I use to build AI-first systems, Web3 apps, and developer tooling.',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A comprehensive breakdown of the tools, languages, frameworks, and hardware I use daily to build agentic AI systems, full-stack web applications, and blockchain projects."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>AI & Agentic Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.langchain.com/">LangChain</Link> and{' '}
                    <Link href="https://www.langchain.com/langgraph">LangGraph</Link> for
                    building agentic AI pipelines and multi-step reasoning workflows.
                  </ListItem>
                  <ListItem>
                    <Link href="https://huggingface.co/">Hugging Face</Link> for RAG
                    quantized models, retrieval-augmented generation, and multi-modal
                    chat application deployment.
                  </ListItem>
                  <ListItem>
                    <Link href="https://platform.openai.com/">OpenAI API</Link> and{' '}
                    <Link href="https://ai.google.dev/">Google Gemini</Link> for LLM
                    integrations — including the AIQuizzes project with Gemini API and
                    NextAuth.
                  </ListItem>
                  <ListItem>
                    <Link href="https://modelcontextprotocol.io/">MCP (Model Context Protocol)</Link> for
                    building AI tool integrations and agentic developer workflows.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development Stack</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://code.visualstudio.com/">VS Code</Link> is my
                    primary editor, enhanced with GitHub Copilot and AI-assisted coding
                    tools for maximum velocity.
                  </ListItem>
                  <ListItem>
                    <Link href="https://nextjs.org/">Next.js</Link> and{' '}
                    <Link href="https://react.dev/">React</Link> for full-stack web
                    applications — my go-to for everything from e-commerce platforms to
                    AI chat interfaces.
                  </ListItem>
                  <ListItem>
                    <Link href="https://nestjs.com/">NestJS</Link> and{' '}
                    <Link href="https://expressjs.com/">Express</Link> for backend
                    microservices with REST APIs, GraphQL, and WebSocket support.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.rust-lang.org/">Rust</Link> for
                    systems-level tooling — including vim_terminal (970+ crates.io
                    downloads), git-vault, spritesheet generators, and WebAssembly
                    modules.
                  </ListItem>
                  <ListItem>
                    <Link href="https://go.dev/">Go</Link> for high-performance backend
                    servers, microservices, and multi-threaded proxy implementations.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.typescriptlang.org/">TypeScript</Link>{' '}
                    everywhere — strict mode, always. Clean types save debugging hours.
                  </ListItem>
                  <ListItem>
                    <Link href="https://threejs.org/">Three.js</Link> and{' '}
                    <Link href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API">WebGL/WebGPU</Link>{' '}
                    for real-time 3D product visualization and custom GLSL shader
                    programming.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Blockchain & Web3</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://solana.com/">Solana</Link> for high-throughput
                    blockchain applications — built SolXPass (Radar Hackathon winner)
                    and Chaos Crowd (Solana Blinks disaster recovery funding).
                  </ListItem>
                  <ListItem>
                    <Link href="https://soliditylang.org/">Solidity</Link> for EVM
                    smart contracts and cross-chain decentralized identity systems.
                  </ListItem>
                  <ListItem>
                    <Link href="https://nextjs.org/">Next.js</Link> with{' '}
                    <Link href="https://www.prisma.io/">Prisma ORM</Link> for Web3
                    frontends connected to on-chain and off-chain data.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Primary Languages</TableHeadCell>
                    <TableCell>TypeScript, Rust, Python, Go, Java, Solidity</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Databases</TableHeadCell>
                    <TableCell>PostgreSQL, Redis, MongoDB, PineconeDB</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Cloud & DevOps</TableHeadCell>
                    <TableCell>AWS (EC2, ECS, EKS, Lambda, S3, CloudFront), Docker, Kubernetes, Jenkins</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating System</TableHeadCell>
                    <TableCell>Windows 11 + WSL2 (Ubuntu)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Editor</TableHeadCell>
                    <TableCell>VS Code with GitHub Copilot + Antigravity AI</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Terminal</TableHeadCell>
                    <TableCell>Windows Terminal + PowerShell / Bash (WSL2)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitoring</TableHeadCell>
                    <TableCell>Prometheus + Grafana (automated alerting systems)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
