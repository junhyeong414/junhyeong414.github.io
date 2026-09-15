"use client";

import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Atom,
  BracketsCurly,
  Check,
  Circuitry,
  Database,
  Flask,
  List,
  PaperPlaneTilt,
  X,
} from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  { id: "01", domain: "Research system", title: "Project title to be added", accent: "mint" },
  { id: "02", domain: "Experimental study", title: "Project title to be added", accent: "ink" },
  { id: "03", domain: "Computational model", title: "Project title to be added", accent: "coral" },
  { id: "04", domain: "Applied engineering", title: "Project title to be added", accent: "paper" },
  { id: "05", domain: "Data investigation", title: "Project title to be added", accent: "paper" },
  { id: "06", domain: "Prototype development", title: "Project title to be added", accent: "mint" },
  { id: "07", domain: "Field research", title: "Project title to be added", accent: "coral" },
  { id: "08", domain: "Technical validation", title: "Project title to be added", accent: "ink" },
  { id: "09", domain: "Systems analysis", title: "Project title to be added", accent: "mint" },
  { id: "10", domain: "Methods development", title: "Project title to be added", accent: "paper" },
  { id: "11", domain: "Collaborative research", title: "Project title to be added", accent: "ink" },
  { id: "12", domain: "Engineering study", title: "Project title to be added", accent: "coral" },
];

const expertise = [
  { icon: Atom, title: "Research areas", text: "Add the scientific domains and questions that define your work." },
  { icon: Circuitry, title: "Technical skills", text: "Add the engineering, analytical, and computational skills you use." },
  { icon: BracketsCurly, title: "Tools", text: "Add the software, platforms, languages, and laboratory tools you know." },
  { icon: Flask, title: "Methods", text: "Add the experimental, modeling, validation, and design methods you practice." },
];

const achievementTypes = ["Publications", "Patents", "Awards", "Recognition"];

export default function Home() {
  const pageRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      gsap.from(".hero-copy > *", {
        y: 36,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });
      gsap.from(".hero-visual", { scale: 0.92, opacity: 0, duration: 1.2, ease: "power3.out" });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 42,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 86%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, index) => {
        gsap.from(card, {
          y: 70 + (index % 3) * 18,
          opacity: 0,
          scale: 0.96,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 92%", once: true },
        });
      });

      const words = gsap.utils.toArray<HTMLElement>(".manifesto-word");
      gsap.fromTo(
        words,
        { opacity: 0.13 },
        {
          opacity: 1,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: ".manifesto",
            start: "top 75%",
            end: "bottom 45%",
            scrub: 0.6,
          },
        },
      );
    },
    { scope: pageRef },
  );

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main ref={pageRef} className="site-shell">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Portfolio home">
          <span>YN</span>
          <span className="wordmark-text">Research portfolio</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#expertise">Expertise</a>
        </div>
        <a className="nav-cta" href="#contact">
          Get in Touch <ArrowUpRight weight="bold" />
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <List />}
        </button>
        {menuOpen && (
          <div className="mobile-menu">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#expertise" onClick={() => setMenuOpen(false)}>Expertise</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Get in Touch</a>
          </div>
        )}
      </nav>

      <header className="hero section-pad" id="top">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-copy">
          <p className="eyebrow">Scientist · Engineer · 6 years in practice</p>
          <h1>
            Your Name
            <span>turns complex questions into clear, testable systems.</span>
          </h1>
          <p className="hero-intro">
            Add a one-line statement describing your research or engineering focus and the change you want your work to make.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">
              Get in Touch <ArrowRight weight="bold" />
            </a>
            <a className="text-link" href="#projects">
              Explore the work <ArrowDown weight="bold" />
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Placeholder portrait for the portfolio owner">
          <div className="portrait-frame">
            <Image src="/hero-portrait.png" alt="Placeholder portrait to be replaced by the portfolio owner" fill priority sizes="(max-width: 900px) 86vw, 42vw" />
          </div>
          <div className="visual-note">
            <span>Portrait placeholder</span>
            <p>Replace with the portfolio owner’s approved image.</p>
          </div>
        </div>
      </header>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((group) => (
            <div className="marquee-group" key={group}>
              <span>Research</span><Atom /><span>Engineering</span><Circuitry /><span>Evidence</span><Database /><span>Collaboration</span><Flask />
            </div>
          ))}
        </div>
      </div>

      <section className="about section-pad" id="about">
        <div className="section-heading reveal">
          <p className="eyebrow">A rigorous, collaborative practice</p>
          <h2>Six years spent asking better questions and building useful answers.</h2>
        </div>
        <div className="about-grid">
          <div className="about-intro reveal">
            <p>
              Add a concise, verified account of your background here: the environments you have worked in, the problems you care about, and what collaborators can expect from you.
            </p>
          </div>
          <div className="approach-list reveal">
            <article>
              <span>Frame</span>
              <p>Clarify the question, constraints, evidence, and definition of success.</p>
            </article>
            <article>
              <span>Test</span>
              <p>Choose methods that make assumptions visible and results reproducible.</p>
            </article>
            <article>
              <span>Translate</span>
              <p>Turn findings into decisions, systems, and shared understanding.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="manifesto section-pad">
        <p>
          {"I connect careful inquiry with practical engineering, moving from uncertainty to evidence and from evidence to systems people can use."
            .split(" ")
            .map((word, index) => <span className="manifesto-word" key={`${word}-${index}`}>{word} </span>)}
        </p>
      </section>

      <section className="projects section-pad" id="projects">
        <div className="project-heading reveal">
          <div>
            <p className="eyebrow">Research and engineering archive</p>
            <h2>Twelve projects, documented with the evidence that matters.</h2>
          </div>
          <p>
            Every entry reserves space for a verified problem, method, personal contribution, and outcome. Replace the prompts with approved portfolio details.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.id}>
              <div className="project-topline">
                <span>{project.id}</span>
                <span>{project.domain}</span>
              </div>
              <div className="project-mark" aria-hidden="true"><span /><span /><span /></div>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <dl>
                  <div><dt>Problem</dt><dd>Add the verified challenge.</dd></div>
                  <div><dt>Method</dt><dd>Add the methods used.</dd></div>
                  <div><dt>Contribution</dt><dd>Add your individual role.</dd></div>
                  <div><dt>Outcome</dt><dd>Add the verified result.</dd></div>
                </dl>
              </div>
              <ArrowUpRight className="card-arrow" weight="bold" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="expertise section-pad" id="expertise">
        <div className="expertise-title reveal">
          <p className="eyebrow">Capabilities in context</p>
          <h2>Expertise is more useful when it is connected.</h2>
        </div>
        <div className="expertise-accordion reveal">
          {expertise.map(({ icon: Icon, title, text }, index) => (
            <article className="expertise-item" key={title}>
              <div className="expertise-index">0{index + 1}</div>
              <Icon size={32} weight="duotone" />
              <div><h3>{title}</h3><p>{text}</p></div>
              <ArrowUpRight weight="bold" />
            </article>
          ))}
        </div>
      </section>

      <section className="achievements section-pad" id="achievements">
        <div className="achievement-layout">
          <div className="achievement-heading reveal">
            <p className="eyebrow">Selected achievements</p>
            <h2>A place for work that has been formally recognized.</h2>
            <p>No publication, patent, award, or affiliation is claimed until verified details are supplied.</p>
          </div>
          <div className="achievement-list reveal">
            {achievementTypes.map((type) => (
              <article key={type}>
                <span>{type}</span>
                <p>Verified entry to be added</p>
                <ArrowRight weight="bold" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-intro reveal">
          <p className="eyebrow">Start a conversation</p>
          <h2>Have a hard problem worth exploring?</h2>
          <p>Use the form for collaboration, research, career, or industry inquiries.</p>
          <a href="mailto:your.email@example.com">your.email@example.com <ArrowUpRight weight="bold" /></a>
        </div>
        <form className="contact-form reveal" onSubmit={submit}>
          <label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
          <label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@organization.com" /></label>
          <label>Organization<input name="organization" autoComplete="organization" required placeholder="Company, lab, or institution" /></label>
          <label>Inquiry type
            <select name="inquiryType" required defaultValue="">
              <option value="" disabled>Select an inquiry</option>
              <option>Research collaboration</option>
              <option>Industry partnership</option>
              <option>Career opportunity</option>
              <option>Speaking or advisory</option>
              <option>Other</option>
            </select>
          </label>
          <label className="full-field">Message<textarea name="message" required rows={5} placeholder="Tell me about the question, opportunity, or collaboration you have in mind." /></label>
          <button className="button button-coral" type="submit">
            {sent ? <><Check weight="bold" /> Message ready</> : <>Send inquiry <PaperPlaneTilt weight="bold" /></>}
          </button>
          {sent && <p className="form-note" role="status">Form validated. Connect this form to an approved email or form service before launch.</p>}
        </form>
      </section>

      <footer>
        <a className="wordmark" href="#top"><span>YN</span><span className="wordmark-text">Research portfolio</span></a>
        <p>Portfolio content placeholders require owner approval before publication.</p>
        <a href="#top">Back to top <ArrowUpRight weight="bold" /></a>
      </footer>
    </main>
  );
}
