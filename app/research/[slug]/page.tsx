import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle, ImageSquare } from "@phosphor-icons/react/dist/ssr";
import { MotionLayer } from "../../components/motion-layer";
import { SiteFooter } from "../../components/site-footer";
import { SiteNav } from "../../components/site-nav";
import { featuredResearch } from "../../data/portfolio";

const waferImages = [
  { src: "/media/semiconductor/wafer-pattern-overview.jpg", alt: "Wafer-scale patterned substrate 전체 사진", label: "Wafer overview", fit: "cover" },
  { src: "/media/semiconductor/wafer-pattern-closeup.jpg", alt: "Wafer patterned substrate 확대 사진", label: "Pattern close-up", fit: "cover" },
  { src: "/media/semiconductor/process-01.png", alt: "사용자가 제공한 wafer-scale 공정 자료 1", label: "Process material 01", fit: "contain" },
  { src: "/media/semiconductor/process-02.png", alt: "사용자가 제공한 wafer-scale 공정 자료 2", label: "Process material 02", fit: "contain" },
];

const uavImages = [
  { src: "/media/uav/uav-hero.jpg", alt: "Mg-air battery architecture를 적용한 초소형 UAV prototype", label: "UAV prototype", fit: "cover" },
  { src: "/media/uav/uav-discharge.jpg", alt: "Mg-air battery 정전류 방전 데이터 그래프", label: "Constant-current discharge", fit: "contain" },
  { src: "/media/uav/uav-power-density.jpg", alt: "Mg-air battery 출력밀도 데이터 그래프", label: "Power density", fit: "contain" },
];

export function generateStaticParams() {
  return featuredResearch.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredResearch.find((item) => item.slug === slug);
  return project ? { title: `${project.shortTitle} | 반준형`, description: project.summary } : {};
}

export default async function ResearchDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = featuredResearch.find((item) => item.slug === slug);
  if (!project) notFound();
  const showcaseOrder = ["wafer-scale-gold-nanoparticle-patterning", "mg-air-battery-architecture-comsol", "self-healing-electroluminescent-device"];
  const showcaseProjects = showcaseOrder.map((item) => featuredResearch.find((projectItem) => projectItem.slug === item)).filter((item): item is NonNullable<typeof item> => Boolean(item));
  const projectIndex = showcaseProjects.findIndex((item) => item.slug === slug);
  const nextProject = showcaseProjects[(Math.max(projectIndex, 0) + 1) % showcaseProjects.length];
  const isWafer = slug === "wafer-scale-gold-nanoparticle-patterning";
  const isUav = slug === "mg-air-battery-architecture-comsol";
  const isSelfHealing = slug === "self-healing-electroluminescent-device";
  const leadImage = isWafer
    ? waferImages[0]
    : isUav
      ? uavImages[0]
    : isSelfHealing
      ? { src: "/media/contest/self-healing-award.jpg", alt: "2025 화학공학경진대회 은상 수상 단체 사진", label: "Award photograph", fit: "cover" }
      : null;

  return (
    <main className="page-shell research-detail">
      <MotionLayer />
      <SiteNav />
      <header className="detail-hero page-pad hero-reveal">
        <Link className="back-link" href={isSelfHealing ? "/#projects" : "/#research"}><ArrowLeft weight="bold" /> {isSelfHealing ? "프로젝트로 돌아가기" : "주요 연구로 돌아가기"}</Link>
        <p className="detail-category">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="detail-summary">{project.summary}</p>
        <div className="detail-meta">{project.status && <span>{project.status}</span>}{project.award && <span>{project.award}</span>}</div>
      </header>

      {leadImage && <section className={`detail-lead-media page-pad media-reveal ${leadImage.fit === "contain" ? "media-contain" : ""}`}>
        <Image src={leadImage.src} alt={leadImage.alt} fill priority sizes="(max-width: 860px) 100vw, 1440px" />
        <div className="detail-media-caption"><strong>{leadImage.label}</strong></div>
      </section>}

      <div className="detail-content page-pad">
        <section className="detail-challenge reveal"><div><h2>연구 목적</h2></div><div>{project.background.map((item) => <p key={item}>{item}</p>)}<div className="problem-list">{project.problem.map((item) => <span key={item}>{item}</span>)}</div><strong>{project.objective}</strong></div></section>

        <section className="role-section reveal"><div><h2>주요 수행 내용</h2></div>{project.roleGroups ? <div className="role-groups">{project.roleGroups.map((group) => <article key={group.title}><h3>{group.title}</h3>{group.items.map((item) => <p key={item}><CheckCircle weight="fill" />{item}</p>)}</article>)}</div> : <div className="role-list">{project.role.map((item) => <p key={item}><CheckCircle weight="fill" />{item}</p>)}</div>}</section>

        <section className="detail-process reveal"><div><h2>공정 및 실험</h2></div><div className="workflow">{project.workflow.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p>{index < project.workflow.length - 1 && <ArrowRight weight="bold" />}</article>)}</div></section>

        {isWafer && (
          <section className="process-media-section reveal">
            <div><h2>공정 자료</h2></div>
            <div className="process-figure-grid">{waferImages.slice(2).map((image) => <figure className="media-reveal" key={image.src}><div><Image src={image.src} alt={image.alt} fill sizes="(max-width: 860px) 100vw, 50vw" /></div><figcaption>{image.label}</figcaption></figure>)}</div>
          </section>
        )}

        <section className="experiment-section reveal">
          <div><h2>{isUav ? "측정 및 분석" : isWafer ? "측정 및 특성 분석" : "실험 및 평가"}</h2></div>
          <div className="method-list">{project.methods.map((item) => <span key={item}>{item}</span>)}</div>
          {isWafer && <div className="experiment-gallery">{waferImages.slice(0, 2).map((image) => <figure className="media-reveal" key={image.src}><div><Image src={image.src} alt={image.alt} fill sizes="(max-width: 860px) 100vw, 50vw" /></div><figcaption>{image.label}</figcaption></figure>)}</div>}
          {isUav && <figure className="uav-data-figure media-reveal"><div><Image src={uavImages[1].src} alt={uavImages[1].alt} fill sizes="(max-width: 860px) 100vw, 960px" /></div><figcaption>{uavImages[1].label}</figcaption></figure>}
        </section>

        {isSelfHealing && (
          <section className="video-section reveal">
            <div><h2>프로젝트 영상</h2></div>
            <div className="video-frame"><iframe src="https://www.youtube.com/embed/mu7ocuKZyDs" title="Autonomous Self-Healing 3D Electroluminescent Device 대회 관련 영상" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
          </section>
        )}

        <section className="detail-results reveal"><div><h2>결과 및 분석</h2></div>{project.metrics && <div className="metric-grid">{project.metrics.map((metric) => <article key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span><small>{metric.note}</small></article>)}</div>}<div className="result-list">{project.results.map((item) => <p key={item}>{item}</p>)}</div>{isUav && <figure className="uav-data-figure media-reveal"><div><Image src={uavImages[2].src} alt={uavImages[2].alt} fill sizes="(max-width: 860px) 100vw, 960px" /></div><figcaption>{uavImages[2].label}</figcaption></figure>}</section>

        <section className="detail-insight reveal"><div><h2>연구 내용</h2></div><div>{project.interpretation.map((item) => <p key={item}>{item}</p>)}</div></section>

        <section className="detail-skills reveal"><p className="eyebrow">기술 및 장비</p><div>{project.skills.map((item) => <span key={item}>{item}</span>)}</div></section>

        <section className="gallery-section reveal"><div><h2>{isWafer ? "Wafer-scale 연구 이미지" : isUav ? "UAV 연구 이미지" : isSelfHealing ? "프로젝트 이미지" : "연구 이미지"}</h2></div>
          {isWafer ? <div className="research-gallery">{waferImages.map((image) => <figure className={`media-reveal fit-${image.fit}`} key={image.src}><div><Image src={image.src} alt={image.alt} fill sizes="(max-width: 860px) 100vw, 50vw" /></div><figcaption>{image.label}</figcaption></figure>)}</div>
            : isUav ? <div className="research-gallery"><figure className="media-reveal fit-cover"><div><Image src={uavImages[0].src} alt={uavImages[0].alt} fill sizes="(max-width: 860px) 100vw, 50vw" /></div><figcaption>{uavImages[0].label}</figcaption></figure>{uavImages.slice(1).map((image) => <figure className="media-reveal fit-contain" key={image.src}><div><Image src={image.src} alt={image.alt} fill sizes="(max-width: 860px) 100vw, 50vw" /></div><figcaption>{image.label}</figcaption></figure>)}</div>
              : isSelfHealing ? <div className="research-gallery single"><figure className="media-reveal fit-cover"><div><Image src="/media/contest/self-healing-award.jpg" alt="2025 화학공학경진대회 은상 수상 단체 사진" fill sizes="(max-width: 860px) 100vw, 960px" /></div><figcaption>2025 화학공학경진대회 은상</figcaption></figure></div>
              : <div className="gallery-grid">{project.gallery.map((item, index) => <article className="media-reveal" key={item}><ImageSquare size={34} weight="thin" /><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><p>TODO — 검증된 원본 이미지를 추가합니다.</p></article>)}</div>}
        </section>
      </div>

      <section className="next-project page-pad"><span>다음 연구</span><Link href={`/research/${nextProject.slug}`}><strong>{nextProject.shortTitle}</strong><ArrowRight weight="bold" /></Link></section>
      <SiteFooter />
    </main>
  );
}
