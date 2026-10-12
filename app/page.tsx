import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpenText, Briefcase, Certificate, GraduationCap, Medal } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "./components/contact-form";
import { MotionLayer } from "./components/motion-layer";
import { SiteFooter } from "./components/site-footer";
import { SiteNav } from "./components/site-nav";
import { activities, awards, certifications, featuredResearch, publications, skillGroups, trainingPrograms } from "./data/portfolio";

const researchMedia: Record<string, { src: string; alt: string }> = {
  "wafer-scale-gold-nanoparticle-patterning": {
    src: "/media/semiconductor/wafer-pattern-overview.jpg",
    alt: "Wafer-scale patterned substrate 전체 사진",
  },
  "mg-air-battery-architecture-comsol": {
    src: "/media/uav/uav-hero.jpg",
    alt: "Mg-air battery architecture를 적용한 초소형 UAV prototype",
  },
};

const currentResearchSlugs = ["wafer-scale-gold-nanoparticle-patterning", "mg-air-battery-architecture-comsol"];

export default function Home() {
  return (
    <main className="page-shell" id="home">
      <MotionLayer />
      <SiteNav />

      <header className="hero page-pad">
        <div className="hero-copy hero-reveal">
          <p className="hero-name">BAN JUN HYEONG</p>
          <p className="hero-degree">가천대학원 배터리공학과 석사과정</p>
          <h1>Materials · Processing ·<br />Devices</h1>
          <p className="hero-lede">실제 응용 환경과 요구 성능을 고려하여 소재와 공정 조건을 검토하고,<br className="hero-lede-break" /> 소자 및 시스템 수준에서 성능을 평가합니다.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#research">주요 연구 보기 <ArrowDown weight="bold" /></Link>
            <Link className="button button-secondary" href="#contact">연락하기 <ArrowRight weight="bold" /></Link>
          </div>
        </div>
        <figure className="hero-portrait media-reveal">
          <Image src="/media/about/profile.jpg" alt="반준형 프로필 사진" fill priority sizes="(max-width: 860px) 100vw, 42vw" />
        </figure>
      </header>

      <section className="research page-pad" id="research">
        <div className="section-heading section-heading-simple research-title reveal"><h2>주요 연구</h2><p>현재 수행 중인 연구를 정리했습니다.</p></div>
        <div className="featured-grid">
          {featuredResearch.filter((project) => currentResearchSlugs.includes(project.slug)).map((project, index) => {
            const media = researchMedia[project.slug];
            return (
              <Link className={`research-card research-card-${index + 1} ${media ? "" : "research-card-text-only"} reveal`} href={`/research/${project.slug}`} key={project.slug}>
                {media && <div className="research-media media-reveal"><Image src={media.src} alt={media.alt} fill loading="eager" sizes="(max-width: 860px) 100vw, 50vw" /></div>}
                <div className="research-card-copy"><span>{project.category}</span><h3>{project.shortTitle}</h3><p>{project.summary}</p>{project.award && <strong className="award-badge">{project.award}</strong>}<em>연구 자세히 보기 <ArrowUpRight weight="bold" /></em></div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="selected-project page-pad" id="projects">
        <div className="section-heading section-heading-simple reveal"><h2>프로젝트</h2></div>
        {featuredResearch.filter((project) => project.slug === "self-healing-electroluminescent-device").map((project) => (
          <Link className="selected-project-card reveal" href={`/research/${project.slug}`} key={project.slug}>
            <div><span>{project.category}</span><h3>{project.shortTitle}</h3><p>{project.summary}</p></div>
            <div className="selected-project-meta"><strong>{project.award}</strong><em>프로젝트 자세히 보기 <ArrowUpRight weight="bold" /></em></div>
          </Link>
        ))}
      </section>

      <section className="publications page-pad" id="publications">
        <div className="section-heading section-heading-simple reveal"><h2>논문</h2></div>
        <div className="publication-list reveal">{publications.map((paper, index) => <article key={paper.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{paper.title}</h3><strong>{paper.status}</strong></div></article>)}</div>
      </section>

      <section className="skills page-pad" id="skills">
        <div className="section-heading section-heading-simple reveal"><h2>기술 및 연구 역량</h2></div>
        <div className="skills-grid">{skillGroups.map((group, index) => <article className="reveal" key={group.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{group.title}</h3><p>{group.items.join(" · ")}</p></article>)}</div>
      </section>

      <section className="credentials page-pad" id="credentials">
        <div className="section-heading section-heading-simple reveal"><h2>Education / 학력</h2></div>
        <div className="education-list education-timeline reveal">
            <article><GraduationCap size={30} weight="duotone" /><span>2026.03 – 현재</span><div><h3>가천대학원</h3><p>배터리공학과 석사과정</p></div></article>
            <article><GraduationCap size={30} weight="duotone" /><span>2023.03 – 2026.02</span><div><h3>가천대학교</h3><p>화공생명공학 · 이차전지융합전공</p></div></article>
            <article><GraduationCap size={30} weight="duotone" /><span>2019.03 – 2023.02</span><div><h3>선문대학교</h3><p>환경생명화학공학과<br />이후 가천대학교 편입</p></div></article>
        </div>
        <div className="credential-grid">
          <article className="credential-group reveal"><header><Certificate size={30} weight="duotone" /><h3>자격증</h3></header><div>{certifications.map((item) => <p key={item}>{item}</p>)}</div></article>
          <article className="credential-group awards-group reveal"><header><Medal size={30} weight="duotone" /><h3>수상내역</h3></header><div>{awards.map((item) => <p key={item}>{item}</p>)}</div></article>
          <article className="credential-group training-group reveal"><header><BookOpenText size={30} weight="duotone" /><h3>교육사항</h3></header><div>{trainingPrograms.map((item) => <p key={item}>{item}</p>)}</div></article>
          <article className="credential-group activities-group reveal"><header><Briefcase size={30} weight="duotone" /><h3>대내외활동</h3></header><div className="activity-list">{activities.map((item) => <article key={item.title}><span>{item.period}</span><h4>{item.title}</h4>{item.detail && <p>{item.detail}</p>}</article>)}</div></article>
        </div>
      </section>

      <section className="contact-footer page-pad" id="contact">
        <div className="section-heading section-heading-simple reveal"><h2>연락</h2><p>연구 협업, 진학 및 채용 관련 문의를 받을 수 있습니다. 아래 폼은 입력 확인용이며 실제 전송 기능은 연결 전입니다.</p></div>
        <ContactForm />
      </section>
      <SiteFooter />
    </main>
  );
}
