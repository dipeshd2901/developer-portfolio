
import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo">Portfolio.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">

        <div className="hero-content">
          <p className="intro">HELLO, I'M</p>

          <h1>
            Your Name
            <br />
            <span>Java Developer</span>
          </h1>

          <p className="description">
            I am a software engineer with 5+ years of experience
            building scalable backend applications using Java,
            Spring Boot and Microservices.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Contact Me
            </a>

            <a href="#projects" className="secondary-btn">
              View Projects
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-icon">{'{ }'}</div>
          <h2>Backend Focused</h2>
          <p>Java | Spring Boot | Microservices</p>
          <div className="status">
            <span></span> Building scalable solutions
          </div>
        </div>

      </section>

{/* About Me Section */}
<section className="content-section" id="about">
  <p className="section-label">GET TO KNOW ME</p>
  <h2>About Me</h2>

  <p className="about-description">
    I'm a software developer with 5+ years of experience building
    backend applications, REST APIs and enterprise integrations.
    My primary expertise is Java, Spring Boot and Microservices,
    with hands-on experience in messaging, caching and deployment
    automation. I'm also expanding my full-stack capabilities with
    React and exploring AI-assisted application development.
  </p>

  <div className="about-highlights">
    <div className="highlight-card">
      <h3>5+ Years</h3>
      <p>Software Development</p>
    </div>

    <div className="highlight-card">
      <h3>Backend</h3>
      <p>Java & Microservices</p>
    </div>

    <div className="highlight-card">
      <h3>AI + DevOps</h3>
      <p>Expanding My Toolkit</p>
    </div>
  </div>
</section>

{/* Technical Skills Section */}
<section className="content-section" id="skills">
  <p className="section-label">MY TOOLKIT</p>
  <h2>Technical Skills</h2>

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
      <h3>AI-Assisted Development</h3>
      <div className="skill-tags">
        <span>Junie</span>
        <span>GitHub Copilot</span>
        <span>Ollama</span>
        <span>Spring AI — Learning</span>
      </div>
    </div>
  </div>
</section>

{/* Projects Section */}
<section className="content-section" id="projects">
  <p className="section-label">WHAT I'VE WORKED ON</p>
  <h2>Projects & Experience</h2>

  <p className="about-description projects-intro">
    A selection of enterprise integration, backend development
    and automation work, alongside my personal AI learning journey.
  </p>

  <div className="projects-grid">
    <article className="project-card">
      <p className="project-type">ENTERPRISE INTEGRATION</p>
      <h3>EDI Integration Platform</h3>
      <p>
        Developed and supported integration workflows for shipment
        booking, transit and delivery processes, handling multiple
        message formats and communication protocols.
      </p>
      <div className="skill-tags">
        <span>Java</span>
        <span>Spring Boot</span>
        <span>Apache Camel</span>
        <span>RabbitMQ</span>
        <span>Redis</span>
      </div>
    </article>

    <article className="project-card">
      <p className="project-type">API INTEGRATION</p>
      <h3>NPS Data Extractor</h3>
      <p>
        Worked on API integration and scheduled data processing,
        including token caching, coordination across application
        instances and message-based processing.
      </p>
      <div className="skill-tags">
        <span>Spring Boot</span>
        <span>REST APIs</span>
        <span>Redis</span>
        <span>RabbitMQ</span>
      </div>
    </article>

    <article className="project-card">
      <p className="project-type">DEVOPS & AUTOMATION</p>
      <h3>Deployment Automation</h3>
      <p>
        Helped automate application deployment workflows using
        GitHub Actions, reducing reliance on repetitive manual
        deployment steps.
      </p>
      <div className="skill-tags">
        <span>GitHub Actions</span>
        <span>CI/CD</span>
        <span>Java</span>
        <span>Automation</span>
      </div>
    </article>

    <article className="project-card">
      <p className="project-type">PERSONAL LEARNING PROJECT</p>
      <h3>GenAI with Spring Boot</h3>
      <p>
        Exploring how Java applications can integrate with
        large language models, starting with a locally hosted
        model and Spring AI.
      </p>
      <div className="skill-tags">
        <span>Java</span>
        <span>Spring Boot</span>
        <span>Spring AI</span>
        <span>Ollama</span>
      </div>
      <p className="project-status">In progress</p>
    </article>
  </div>
</section>

{/* Contact Section */}
<section className="content-section contact-section" id="contact">
  <p className="section-label">LET'S CONNECT</p>
  <h2>Contact Me</h2>

  <p className="about-description contact-description">
    I'm always interested in discussing software engineering,
    backend development, full-stack opportunities and innovative
    technology projects. Feel free to connect with me.
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
      <span className="contact-icon">{"{ }"}</span>
      <span>
        <strong>GitHub</strong>
        <small>Explore my code</small>
      </span>
    </a>
  </div>

  <p className="contact-footer">
    Built with React, TypeScript and a passion for learning.
  </p>
</section>

    </div>
  )
}

export default App
