
import { useState } from 'react'
import './App.css'

interface Project {
  id: number
  type: string
  title: string
  client: string
  description: string
  technologies: string[]
  highlights: string[]
  impact?: string
  status?: string
}

const projects: Project[] = [
  {
    id: 1,
    type: 'LOGISTICS & BACKEND DEVELOPMENT',
    title: 'Blue Dart Website',
    client: 'DHL Blue Dart',
    description:
      'Worked on backend integrations supporting shipment tracking, international bulk-shipment booking and internal survey workflows.',
    technologies: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'RabbitMQ',
      'Redis',
      'Oracle',
      'Glowroot',
    ],
    highlights: [
      'Integrated shipment-tracking APIs with the Blue Dart website, supporting approximately 100,000 tracking API requests per day.',
      'Integrated internal survey APIs and supported international bulk-shipment booking workflows.',
      'Diagnosed and resolved a production concurrency and timeout issue in international shipment-file processing by correcting CountDownLatch handling.',
      'Supported application deployments across SIT, UAT and production environments.',
      'Contributed to the transition from manual deployments to GitHub Actions automation.',
    ],
    impact: 'Large-scale shipment tracking and backend integration',
  },
  {
    id: 2,
    type: 'ENTERPRISE INTEGRATION',
    title: 'EDI Integration Platform',
    client: 'DHL Blue Dart',
    description:
      'Developed and supported enterprise integration workflows for shipment booking, transit and delivery processes, handling multiple message formats and communication protocols.',
    technologies: [
      'Java',
      'Spring Boot',
      'Apache Camel',
      'RabbitMQ',
      'Redis',
      'Oracle',
      'ELK Stack',
    ],
    highlights: [
      'Worked on EDI processing pipelines for shipment lifecycle and B2B data integrations.',
      'Handled JSON, XML, text and other message formats across HTTP, SFTP and AS2 integrations.',
      'Optimized Redis caching and achieved approximately 60% API latency reduction.',
      'Contributed to Java 8 to Java 21 modernization and Spring Boot upgrades.',
      'Implemented and supported asynchronous messaging, retry mechanisms and RabbitMQ Dead Letter Queues.',
      'Investigated production issues and contributed to root cause analysis and fixes.',
      'Supported shell scripts, cron jobs and disaster recovery activities.',
    ],
    impact: 'Approximately 60% API latency reduction through caching optimization',
  },
  {
    id: 3,
    type: 'API INTEGRATION & SCHEDULED PROCESSING',
    title: 'NPS Data Extractor',
    client: 'DHL Blue Dart',
    description:
      'Worked on API integration and scheduled data processing, including token caching, coordination across application instances and message-based processing.',
    technologies: [
      'Java',
      'Spring Boot',
      'WebClient',
      'REST APIs',
      'Redis',
      'RabbitMQ',
    ],
    highlights: [
      'Integrated external APIs using Spring WebClient.',
      'Implemented token caching using internal Redis APIs.',
      'Worked on distributed scheduler coordination using Redis locks across two production instances.',
      'Integrated RabbitMQ-based message processing.',
      'Supported scheduled data extraction and verification workflows.',
    ],
    impact: 'Reliable scheduled processing across multiple application instances',
  },
  {
    id: 4,
    type: 'DEVOPS & CLOUD AUTOMATION',
    title: 'CI/CD Automation & Cloud Migration',
    client: 'DHL Blue Dart',
    description:
      'Managed the transition from manual deployment processes to automated GitHub Actions workflows and supported migration to cloud-based runners.',
    technologies: [
      'GitHub Actions',
      'CI/CD',
      'Java',
      'Linux',
      'Shell Scripting',
      'Cloud Runners',
    ],
    highlights: [
      'Managed the transition from manual deployments to GitHub Actions workflows for applications in scope.',
      'Migrated deployment workflows to cloud-based GitHub runners.',
      'Updated workflow configurations and resolved connectivity-related issues.',
      'Automated deployments across relevant SIT, UAT and production environments.',
      'Supported production releases, deployment troubleshooting and environment configuration.',
      'Participated in disaster recovery switching, service validation and failover/failback activities.',
    ],
    impact: 'Reduced dependency on repetitive manual deployment activities',
  },
  {
    id: 5,
    type: 'FINTECH & PAYMENT INTEGRATION',
    title: 'Payment Gateway Middleware',
    client: 'Safexpay',
    description:
      'Worked on middleware payment services and integrations connecting merchants with banking systems.',
    technologies: [
      'Java',
      'Spring Boot',
      'Oracle',
      'MongoDB',
      'REST APIs',
    ],
    highlights: [
      'Worked on middleware services supporting payment gateway integrations.',
      'Integrated external banking APIs for authorization, settlement and reconciliation workflows.',
      'Worked on retry and failure-handling mechanisms to improve transaction reliability.',
      'Supported production troubleshooting and payment-service reliability.',
    ],
    impact: 'Reliable payment processing and banking system integrations',
  },
  {
    id: 6,
    type: 'PERSONAL LEARNING PROJECT',
    title: 'GenAI with Spring Boot',
    client: 'Personal Project',
    description:
      'Exploring how Java applications can integrate with large language models, starting with Spring AI and a locally hosted Ollama model.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring AI',
      'Ollama',
      'LLMs',
    ],
    highlights: [
      'Configured a Spring Boot application with Spring AI dependencies.',
      'Set up a locally hosted Llama model using Ollama.',
      'Exploring how to build AI-powered REST APIs using Java.',
      'Planning to extend the application towards agent-based workflows.',
    ],
    status: 'In Progress',
  },{
  id: 7,
  type: 'Personal Project',
  title: 'Personal Developer Portfolio',
  client: 'Independent Project',
  description:
    'Designed and developed a responsive personal portfolio website to showcase professional experience, enterprise projects and technology solutions.',
  technologies: [
    'React',
    'TypeScript',
    'Vite',
    'CSS',
    'Git',
    'GitHub',
    'Vercel',
  ],
  highlights: [
    'Developed a responsive user interface using React and TypeScript.',
    'Created reusable components and structured layouts.',
    'Managed source code and version control using Git and GitHub.',
    'Configured continuous deployment through GitHub and Vercel.',
  ],
  status: 'Live',
},
]

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)

  const visibleHighlights = expanded
    ? project.highlights
    : project.highlights.slice(0, 3)

  return (
    <article className="project-card">
      <p className="project-type">{project.type}</p>

      <h3>{project.title}</h3>

      <p className="project-client">{project.client}</p>

      <p>{project.description}</p>

      <div className="skill-tags">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-highlights">
        <h4>Key Contributions</h4>

        <ul>
          {visibleHighlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>

      {project.impact && (
        <p className="project-impact">
          <strong>Impact:</strong> {project.impact}
        </p>
      )}

      {project.status && (
        <p className="project-status">{project.status}</p>
      )}

      {project.highlights.length > 3 && (
        <button
          className="project-details-btn"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? 'Show Less' : 'View Details'}
          <span>{expanded ? ' ↑' : ' →'}</span>
        </button>
      )}
    </article>
  )
}

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <div className="brand-name">
          <div className="logo">
            JD<span>.</span>
          </div>
          <small>TECH SOLUTIONS & BUSINESS INTEGRATION</small>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <p className="intro">
            TECHNOLOGY SPECIALIST & SOFTWARE ENGINEER
          </p>

          <h1>
            Connecting Technology
            <span> with Business Solutions.</span>
          </h1>

          <p className="description">
            I'm Dipesh, a software engineer with 5+ years of
            experience building scalable enterprise applications,
            backend systems and business integrations using
            Java, Spring Boot and modern technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Let's Connect
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-icon">{'{ }'}</div>

          <h2>Technology & Integration</h2>

          <p>
            Full Stack Engineering
            <br />
            Enterprise Applications
            <br />
            Business Integrations
          </p>

          <div className="status">
            <span></span>
            Building scalable solutions
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="content-section" id="about">
        <p className="section-label">GET TO KNOW ME</p>

        <h2>About Me</h2>

        <p className="about-description">
          I'm a software developer with 5+ years of experience
          building backend applications, REST APIs and enterprise
          integrations. My primary expertise is Java, Spring Boot
          and Microservices, with hands-on experience in messaging,
          caching and deployment automation. I'm also expanding my
          full-stack capabilities with React and exploring
          AI-powered application development.
        </p>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>5+ Years</h3>
            <p>Software Development Experience</p>
          </div>

          <div className="highlight-card">
            <h3>Backend</h3>
            <p>Java & Microservices Engineering</p>
          </div>

          <div className="highlight-card">
            <h3>AI + DevOps</h3>
            <p>Expanding Technical Capabilities</p>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="content-section" id="skills">
        <p className="section-label">MY TECHNICAL EXPERTISE</p>

        <h2>Technology Stack</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Backend Development</h3>
            <div className="skill-tags">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Microservices</span>
              <span>Spring Security</span>
              <span>Hibernate / JPA</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Messaging & Caching</h3>
            <div className="skill-tags">
              <span>RabbitMQ</span>
              <span>Redis</span>
              <span>Apache Camel</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Databases & Monitoring</h3>
            <div className="skill-tags">
              <span>Oracle</span>
              <span>MySQL</span>
              <span>MongoDB</span>
              <span>ELK Stack</span>
              <span>Glowroot</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Frontend & DevOps</h3>
            <div className="skill-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Git</span>
              <span>GitHub Actions</span>
              <span>CI/CD</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Generative AI</h3>
            <div className="skill-tags">
              <span>Spring AI</span>
              <span>Ollama</span>
              <span>LLMs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="content-section" id="services">
        <p className="section-label">WHAT I DO</p>

        <h2>Technology Solutions</h2>

        <p className="about-description projects-intro">
          Combining software engineering expertise with practical
          technology solutions to support business requirements.
        </p>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>01</h3>
            <h4>Full Stack Engineering</h4>
            <p>
              Enterprise Frontend/backend applications, REST APIs and
              microservices using React,Java and Spring Boot.
            </p>
          </div>

          <div className="highlight-card">
            <h3>02</h3>
            <h4>Business Integration</h4>
            <p>
              API integrations, asynchronous messaging and
              connectivity between enterprise systems.
            </p>
          </div>

          <div className="highlight-card">
            <h3>03</h3>
            <h4>Web Solutions</h4>
            <p>
              Modern, responsive websites and web application
              development for business requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="content-section" id="projects">
        <p className="section-label">SELECTED WORK</p>

        <h2>Projects & Experience</h2>

        <p className="about-description projects-intro">
          A selection of enterprise backend development,
          logistics integrations, fintech solutions and
          deployment automation work, alongside my personal
          AI learning journey.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="content-section business-section" id="business">
        <p className="section-label">HAVE A PROJECT IN MIND?</p>

        <h2>Let's Build Something Meaningful.</h2>

        <p className="about-description">
          Looking to establish your business online or streamline
          your business processes? I can help you create a modern,
          responsive website or explore technology solutions
          suited to your requirements.
        </p>

        <div className="business-button">
          <a
            href="mailto:29dipesh@gmail.com?subject=JD%20Tech%20Solutions%20Enquiry"
            className="primary-btn"
          >
            Discuss Your Project →
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="content-section contact-section" id="contact">
        <p className="section-label">LET'S CONNECT</p>

        <h2>Start a Conversation</h2>

        <p className="about-description contact-description">
          Interested in discussing software engineering,
          backend development, business integrations or a
          potential project? Feel free to connect with me.
        </p>

        <div className="contact-links">
          <a
            href="mailto:29dipesh@gmail.com"
            className="contact-card"
          >
            <span className="contact-icon">✉</span>
            <span>
              <strong>Email</strong>
              <small>Let's get in touch</small>
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/dipesh-dhirajlal-867514198"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">in</span>
            <span>
              <strong>LinkedIn</strong>
              <small>Connect professionally</small>
            </span>
          </a>

          <a
            href="https://github.com/dipeshd2901"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">{'{ }'}</span>
            <span>
              <strong>GitHub</strong>
              <small>Explore my code</small>
            </span>
          </a>
        </div>

        <p className="contact-footer">
          JD. Tech Solutions & Business Integration
          <br />
          Built with React, TypeScript and a passion for technology.
        </p>
      </section>

    </div>
  )
}

export default App
