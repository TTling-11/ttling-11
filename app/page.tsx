"use client";

import { useEffect, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";

const metrics = [
  { value: "7", label: "校园场景 Skill", detail: "搭建并上架" },
  { value: "项目", label: "科小研专家 · 提案平台", detail: "基于 Comate 搭建交付" },
  { value: "11", label: "独立搭建 AI 智能体", detail: "从定位到上线" },
  { value: "200+", label: "财经短视频", detail: "累计播放 1000 万+" },
];

const strengths = [
  {
    number: "01",
    icon: "🧩",
    title: "AI 产品与场景落地",
    text: "从需求理解、定位设计到测试调优，搭建智能体与校园场景 Skill，推动 AI 能力落地。",
    proof: "11 个智能体 · 7 个校园场景 Skill",
  },
  {
    number: "02",
    icon: "🔍",
    title: "用户洞察与项目交付",
    text: "从用户反馈和客户业务中识别问题，推进产品优化、场景试点与实际项目交付。",
    proof: "4 个智能体优化 · 提案平台交付",
  },
  {
    number: "03",
    icon: "✨",
    title: "AI 工具与实践创新",
    text: "结合 AI 工具、Skill 和多维表开发应用，探索 AI 驱动的视频剪辑与视觉包装工作流。",
    proof: "科小研 · 2 个课题试点",
  },
  {
    number: "04",
    icon: "🚀",
    title: "内容策划与增长",
    text: "参与公众号选题、视觉物料策划与财经视频制作，兼顾内容表达、生产效率与传播效果。",
    proof: "7 期推文 · 200+ 条财经视频",
  },
];

const collectionVideos = [
  {
    index: "01",
    category: "城市传播",
    title: "《长治，现在就出发！》",
    description: "国家级三等奖作品，以城市体验为线索完成一次有节奏的目的地表达。",
    duration: "00:58",
    poster: "/portfolio-2026/changzhi.webp",
    src: "/portfolio-2026/changzhi.mp4",
  },
  {
    index: "02",
    category: "AI 创意",
    title: "《讯飞星火 · AI 共创高效生活》",
    description: "从真实生活场景出发，呈现 AI 如何参与、连接并提升日常效率。",
    duration: "01:16",
    poster: "/portfolio-2026/xinghuo.webp",
    src: "/portfolio-2026/xinghuo.mp4",
  },
  {
    index: "03",
    category: "品牌广告",
    title: "《紧急变身？去三福！》",
    description: "以临时造型需求为情境，用快速变装强化“一站式解决”的品牌印象。",
    duration: "00:30",
    poster: "/portfolio-2026/sanfu-transform.webp",
    src: "/portfolio-2026/sanfu-transform.mp4",
  },
  {
    index: "04",
    category: "品牌故事",
    title: "《这样一袋，装下万千可能》",
    description: "让购物袋连接商品、友谊与生活方式，把普通物件变成叙事线索。",
    duration: "00:30",
    poster: "/portfolio-2026/sanfu-bag.webp",
    src: "/portfolio-2026/sanfu-bag.mp4",
  },
  {
    index: "05",
    category: "产品创意",
    title: "《可画：生活里的设计师》",
    description: "国家级优秀奖作品，用人物、界面与动态视觉呈现产品价值。",
    duration: "00:43",
    poster: "/portfolio-2026/canva-designer.webp",
    src: "/portfolio-2026/canva-designer.mp4",
  },
  {
    index: "06",
    category: "产品影像",
    title: "《从此不必 Alt+Tab》",
    description: "从多任务切换的真实痛点切入，用高密度视觉叙事展现一站式创作体验。",
    duration: "00:29",
    poster: "/portfolio-2026/alt-tab.webp",
    src: "/portfolio-2026/alt-tab.mp4",
  },
];

const writingWorks = [
  { index: "07", type: "数据新闻", title: "《他乡客》", description: "以数据、视觉和长页交互组织异乡生活与身份记忆。", href: "https://readymag.website/u825704982/4423639/", icon: "✦", preview: "/portfolio-2026/writing-data.webp", width: 1100, height: 585 },
  { index: "08", type: "体育新闻", title: "体育新闻作品", description: "聚焦赛事现场与校园体育内容的采写表达。", href: "https://mp.weixin.qq.com/s/Ed1eL2PcKtv19pGKDSQfVA", icon: "⚽", preview: "/portfolio-2026/writing-sports.webp", width: 900, height: 999 },
];

const footballMoments = [
  { image: "/football/football-dribble.webp", width: 1000, height: 1500, label: "判断与执行", note: "带球时先观察空间，再做出动作。" },
  { image: "/football/football-throwin.webp", width: 1000, height: 1500, label: "专注每次配合", note: "每一次重新开球，都是新的协作起点。" },
  { image: "/football/football-match-2026.webp", width: 1280, height: 853, label: "保持节奏与韧性", note: "场地变化，但沟通与判断始终不变。" },
];

export default function Home() {
  const [introOpen, setIntroOpen] = useState(true);
  const [introCardsOut, setIntroCardsOut] = useState(false);
  const [workIndex, setWorkIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<(typeof collectionVideos)[number] | null>(null);
  const [footballIndex, setFootballIndex] = useState(0);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIntroOpen(false);
        setActiveVideo(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const enterPortfolio = () => {
    setIntroOpen(false);
  };

  const drawIntroCards = () => {
    setIntroCardsOut(true);
  };

  const followIntroEyes = (event: ReactPointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    event.currentTarget.style.setProperty("--eye-x", `${x * 4}px`);
    event.currentTarget.style.setProperty("--eye-y", `${y * 3}px`);
  };

  const resetIntroEyes = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--eye-x", "0px");
    event.currentTarget.style.setProperty("--eye-y", "0px");
  };

  return (
    <main id="top">
      {introOpen && (
        <section className="intro-gate" aria-label="谭美玲个人作品集开场">
          <p className="intro-glass-word" aria-hidden="true">welcome</p>
          <div className={`intro-stage ${introCardsOut ? "is-drawn" : ""}`} onPointerMove={followIntroEyes} onPointerLeave={resetIntroEyes}>
            <a className="intro-card intro-card-one" href="#strengths" onClick={enterPortfolio}>
              <span className="intro-card-art intro-art-story" aria-hidden="true">
                <span className="art-spark">✦</span><span className="art-emoji">🧩</span>
              </span>
              <i>核心能力</i>
            </a>
            <a className="intro-card intro-card-two" href="#experience" onClick={enterPortfolio}>
              <span className="intro-card-art intro-art-story" aria-hidden="true">
                <span className="art-spark">✦</span><span className="art-emoji">📝</span>
              </span>
              <i>实习经历</i>
            </a>
            <a className="intro-card intro-card-three" href="#top" onClick={enterPortfolio}>
              <span className="intro-card-art intro-art-about" aria-hidden="true">
                <img src="/avatar-emoji.webp" alt="" />
              </span>
              <i>个人介绍</i>
            </a>
            <a className="intro-card intro-card-four" href="#portfolio" onClick={enterPortfolio}>
              <span className="intro-card-art intro-art-ai" aria-hidden="true">
                <span className="art-spark">✦</span><span className="art-emoji">🎞️</span>
              </span>
              <i>代表作品</i>
            </a>
            <a className="intro-card intro-card-five" href="#football" onClick={enterPortfolio}>
              <span className="intro-card-art intro-art-football" aria-hidden="true">
                <span className="art-ball">⚽</span><span className="art-player">07</span>
              </span>
              <i>兴趣爱好</i>
            </a>
            <div className="intro-folder">
              <button
                className="intro-folder-trigger"
                type="button"
                onClick={drawIntroCards}
                aria-label="展开谭美玲的个人主页分类卡片"
                aria-expanded={introCardsOut}
              />
              <span className="intro-folder-tab">个人作品集 · 2026</span>
              <span className="intro-sticker intro-avatar-sticker">
                <img src="/avatar-emoji.webp" alt="" />
              </span>
              <span className="intro-sticker intro-eyes-sticker" aria-hidden="true">
                <span className="intro-eye"><i /></span>
                <span className="intro-eye"><i /></span>
              </span>
              <strong>谭美玲</strong>
              <small>洞察用户需求，打造有价值的产品</small>
              <a className="intro-enter" href="#top" onClick={enterPortfolio} aria-label="进入谭美玲个人主页">
                <span>进入主页</span><b>↗</b>
              </a>
            </div>
          </div>
          <p className="intro-hint">点击文件夹展开分类卡片，或点击 进入主页 直接进入首页 · 按退出键跳过</p>
        </section>
      )}

      <nav className="site-nav" aria-label="主导航">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true"><img src="/avatar-emoji.webp" alt="" /></span>
          <span className="brand-name">谭美玲</span>
        </a>
        <div className="nav-menu">
          <a href="#strengths">核心能力</a>
          <a href="#experience">实习经历</a>
          <a href="#portfolio">代表作品</a>
          <a href="#football">兴趣爱好</a>
        </div>
        <a className="nav-cta" href="mailto:15549242057@163.com">
          联系我 <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <header className="hero-shell">
        <div className="hero-main">
          <div className="availability">
            <span className="status-dot" /> 求职方向：产品运营
          </div>
          <p className="hero-identity"><strong>谭美玲</strong></p>
          <p className="hero-summary">
            武汉大学广告与媒介经济专业硕士研究生，具备 AI 产品运营与内容生产经验，擅长从用户需求出发，把洞察转化为可落地的产品内容和持续迭代方案。
          </p>
          <h1><span>洞察用户需求</span><em>打造有价值的产品</em></h1>
          <div className="hero-buttons">
            <a className="button-primary" href="#experience">查看实习经历 <span>↓</span></a>
            <a className="button-secondary" href="mailto:15549242057@163.com">发送邮件 ↗</a>
          </div>
          <div className="workflow" aria-label="工作方法">
            <span>用户洞察</span><i>→</i><span>产品内容</span><i>→</i><span>测试迭代</span><i>→</i><span>增长反馈</span>
          </div>
        </div>

        <aside className="profile-card">
          <div className="portrait-wrap">
            <img src="/lifestyle-portrait.webp" alt="谭美玲生活照" width={900} height={1350} loading="lazy" decoding="async" />

          </div>
          <div className="profile-details">
            <div><span>教育背景</span><strong>武汉大学 · 本科、硕士</strong></div>
            <div><span>研究方向</span><strong>数字营销 / 内容传播</strong></div>
            <div><span>意向城市</span><strong>深圳 / 北京</strong></div>
            <div><span>英语能力</span><strong>IELTS 7.0</strong></div>
          </div>
        </aside>
      </header>

      <section className="metrics" aria-label="核心成果">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <div><h2>{metric.label}</h2><p>{metric.detail}</p></div>
          </article>
        ))}
      </section>

      <section className="section strengths-section" id="strengths">
        <div className="section-intro">

          <div className="numbered-heading"><span className="section-number">01</span><h2>我能为团队带来什么？</h2></div>
          <p>我能结合 AI 产品运营、用户洞察和内容生产经验，从需求出发推动场景落地、项目交付与持续优化。</p>
        </div>
        <div className="strength-grid">
          {strengths.map((item) => (
            <article className="strength-card" key={item.number}>
              <div className="strength-card-top">
                <div className="strength-title"><span className="strength-icon" aria-hidden="true">{item.icon}</span><h3>{item.title}</h3></div>
                <span className="card-number">{item.number}</span>
              </div>
              <p>{item.text}</p>
              <strong>{item.proof} <span>↗</span></strong>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="breath-cluster breath-cluster-portfolio" aria-hidden="true"><span>▶</span><span>✦</span><span>08</span></div>
        <div className="portfolio-heading">
          <div>

            <div className="numbered-heading"><span className="section-number">03</span><h2>作品展示</h2></div>
          </div>
          <div className="portfolio-heading-copy">
            <p>从产品实践到影像与文字，记录不同形式的探索和表达。</p>
            <div className="portfolio-categories" aria-label="作品类型">
              <a href="#vibe-coding">Vibe Coding 作品</a><a href="#video-works">视频作品</a><a href="#writing-works">文字作品</a>
            </div>
          </div>
        </div>

        <section className="portfolio-group" id="vibe-coding">
          <h3>Vibe Coding 作品</h3>
          <div className="vibe-skill-block"><div className="vibe-skill-heading"><div><p>场景化工具</p><h4>Skill 作品</h4></div><span>从需求到可用的解决方案</span></div><div className="skill-icon-list" aria-label="Skill 作品类型">
            {[
              ['职业规划','围绕职业规划大赛，辅助梳理参赛内容。','M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z'],
              ['竞赛活动','为校园竞赛活动提供场景化支持。','M8 3h8v4a4 4 0 01-8 0V3zm-3 1H3v2a4 4 0 004 4m12-6h2v2a4 4 0 01-4 4M12 11v7m-4 3h8m-6-3h4'],
              ['网络安全','服务校园网络安全考试相关场景。','M12 2l8 3v6c0 5-3 8-8 11-5-3-8-6-8-11V5l8-3zm-3 10l2 2 4-4'],
              ['迎新权益','面向高校迎新权益场景提供支持。','M3 9l9-5 9 5-9 5-9-5zm3 2v5c3 3 9 3 12 0v-5m3-2v6'],
              ['3D 教材建构','围绕教材知识点创建交互式三维辅助教材。','M12 2l8 4.5v10L12 21l-8-4.5v-10L12 2zm-8 4.5l8 5 8-5M12 11.5V21'],
              ['网页 design','辅助网页视觉设计与界面优化。','M3 4h18v16H3V4zm0 5h18M7 6.5h.01M10 6.5h.01M8 14l-2 2 2 2m8-4l2 2-2 2m-3-5l-2 6']
            ].map(([label, description, path]) => <div className="skill-icon-item" key={label}><span className="skill-card-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={path} /></svg></span><div className="skill-card-content"><strong>{label}</strong><p>{description}</p></div></div>)}
          </div></div>
          <div className="vibe-projects">
            <article className="vibe-project vibe-internship"><div className="vibe-internship-copy"><span className="vibe-project-type">校园服务</span><h4>学院实习助手</h4><p>为学院实习场景设计的线上助手</p><div className="vibe-demo-account"><span>体验账号：<strong>interview</strong></span><span>密码：<strong>interview</strong></span></div><a href="https://152.136.160.248/" target="_blank" rel="noreferrer">访问作品 ↗</a></div><a className="vibe-internship-preview" href="/portfolio-preview/internship.webp" target="_blank" rel="noreferrer"><img src="/portfolio-preview/internship.webp" alt="学院实习助手页面预览" width={1200} height={682} loading="lazy" decoding="async" /></a></article>
            <article className="vibe-project vibe-textbooks"><div className="vibe-project-copy"><div><span className="vibe-project-type">交互教学</span><h4>3D 辅助教材</h4><p>借助 AI 制作交互式三维模型，让知识结构更直观。</p></div><span className="vibe-project-count">04 / 教材预览</span></div><div className="vibe-preview-grid">
              {[['plant','植物细胞'],['animal','动物细胞'],['digestion','消化和吸收'],['vessel','血管']].map(([file, title]) => <a href={`/portfolio-preview/${file}.webp`} target="_blank" rel="noreferrer" key={file}><img src={`/portfolio-preview/${file}.webp`} alt={`${title}教材界面预览`} width={1200} height={750} loading="lazy" decoding="async" /><span>{title}</span></a>)}
            </div></article>
            <article className="vibe-project vibe-proposal"><div className="vibe-proposal-copy"><span className="vibe-project-type">项目交付</span><h4>湖南大学提案平台</h4><p>围绕教代会提案流程，搭建线上服务平台。</p><a href="/portfolio-preview/proposal.webp" target="_blank" rel="noreferrer">查看界面预览 ↗</a></div><a className="vibe-proposal-preview" href="/portfolio-preview/proposal.webp" target="_blank" rel="noreferrer"><img src="/portfolio-preview/proposal.webp" alt="湖南大学提案平台界面预览" width={1200} height={750} loading="lazy" decoding="async" /></a></article>
          </div>
        </section>
        <section className="portfolio-group" id="video-works"><h3>视频作品</h3>
        <div className="work-orbit-shell">
          <div className="work-orbit-label"><span>08</span><p>件作品收录</p></div>
          <div className="work-ring-viewport">
            <div className="work-ring work-category-ring" style={{ "--work-rotation": `${workIndex * -60}deg` } as CSSProperties}>
              {collectionVideos.map((track, index) => (
                <article
                  className={`work-ring-panel ${index === workIndex ? "is-active" : ""}`}
                  style={{ "--work-angle": `${index * 60}deg`, "--work-counter-angle": `${index * -60}deg` } as CSSProperties}
                  key={track.category}
                >
                  <button type="button" onClick={() => setWorkIndex(index)} aria-label={`聚焦${track.category}作品`} aria-pressed={index === workIndex}>
                    <img src={track.poster} alt="" width={960} height={540} loading="lazy" decoding="async" />
                    <span>{track.index}</span>
                    <strong>{track.category}</strong>
                  </button>
                </article>
              ))}
            </div>
            <button className="work-orbit-core work-category-core" type="button" onClick={() => setActiveVideo(collectionVideos[workIndex])} aria-label={`点击播放${collectionVideos[workIndex].title}`}>

              <img src={collectionVideos[workIndex].poster} alt={`${collectionVideos[workIndex].title}作品预览`} width={960} height={540} decoding="async" />
              <b>{collectionVideos[workIndex].duration}</b>
              <span className="work-core-play"><i>▶</i><em>点击播放</em></span>
            </button>
          </div>
          <div className="work-orbit-focus"><div><span>{collectionVideos[workIndex].category} · {collectionVideos[workIndex].duration}</span><h3>{collectionVideos[workIndex].title}</h3><p>{collectionVideos[workIndex].description}</p></div><button className="play-work-button" type="button" onClick={() => setActiveVideo(collectionVideos[workIndex])}>播放作品 <span>▶</span></button></div>
          <div className="work-orbit-controls" aria-label="切换作品类别">
            <button type="button" onClick={() => setWorkIndex((workIndex + collectionVideos.length - 1) % collectionVideos.length)} aria-label="上一个作品">←</button>
            <div>{collectionVideos.map((track, index) => <button type="button" className={index === workIndex ? "is-active" : ""} onClick={() => setWorkIndex(index)} aria-label={`查看${track.title}`} aria-pressed={index === workIndex} key={track.title} />)}</div>
            <button type="button" onClick={() => setWorkIndex((workIndex + 1) % collectionVideos.length)} aria-label="下一个作品">→</button>
          </div>
        </div>
        </section>

        <section className="portfolio-group" id="writing-works"><h3>文字作品</h3>
        <div className="writing-work-grid" aria-label="文字作品">
          {writingWorks.map((work) => (
            <a className="writing-work-card" href={work.href} target="_blank" rel="noreferrer" key={work.title}>
              <div className="writing-work-preview"><img src={work.preview} alt={`${work.title}作品预览`} width={work.width} height={work.height} loading="lazy" decoding="async" /></div>
              <div className="writing-work-copy"><div><span>{work.index} / 文字作品</span><b>{work.icon}</b></div><p>{work.type}</p><h3>{work.title}</h3><small>{work.description}</small><strong>打开作品 <i>↗</i></strong></div>
            </a>
          ))}
        </div>
        </section>

      </section>

      {activeVideo && (
        <div className="video-dialog" role="dialog" aria-modal="true" aria-label={`播放${activeVideo.title}`}>
          <button className="video-dialog-backdrop" type="button" onClick={() => setActiveVideo(null)} aria-label="关闭播放窗口" />
          <div className="video-dialog-card">
            <div className="video-dialog-top"><span>{activeVideo.category} · {activeVideo.duration}</span><button type="button" onClick={() => setActiveVideo(null)} aria-label="关闭">×</button></div>
            <video key={activeVideo.src} controls autoPlay playsInline preload="metadata" poster={activeVideo.poster}>
              <source src={activeVideo.src} type="video/mp4" />
              你的浏览器暂不支持视频播放。
            </video>
            <div className="video-dialog-bottom"><h2>{activeVideo.title}</h2></div>
          </div>
        </div>
      )}

      <section className="experience-section" id="experience">
        <div className="breath-cluster breath-cluster-experience" aria-hidden="true"><span>✦</span><span>02</span><span>↗</span></div>
        <div className="section-title-row">
          <div className="numbered-heading"><span className="section-number">02</span><h2>实习经历</h2></div>
          <p>从教育场景中的 AI 产品实践，到智能体运营和财经视频制作，持续积累产品、内容与项目交付经验。</p>
        </div>

        <div className="experience-overview">
          <article className="experience-tile experience-tile-content experience-tile-kingsoft">
            <div className="experience-tile-top"><span>01</span><b>💡</b></div>
            <div className="experience-company"><h3>金山办公 · AI 产品运营（教育行业）</h3><span>2026.08 — 2026.11 · 武汉</span></div>
            <p className="experience-summary">围绕高校场景开展内容运营、AI 产品实践与客户项目交付。</p>
            <ul className="experience-points"><li>主导高校开学季内容宣发，策划并产出 7 期公众号推文及配套海报，沉淀运营 SOP 与宣发排期表</li><li>搭建并上架 7 个校园场景 Skill，覆盖职业规划大赛、竞赛活动、网络安全考试及迎新权益</li><li>开发 3D 教材生成 Skill，产出 15 节离线交互教材并投放客户；设计科研数字员工「科小研」，搭建 6 个 Skill 和 7 张多维表</li><li>交付湖南大学教代会提案平台，完成身份识别、提案匹配与提案生成 Skill 的搭建</li></ul>
            <div className="experience-metrics"><span><strong>科小研</strong>科研数字员工</span><span><strong>提案平台</strong>客户项目交付</span><span><strong>7 个</strong>校园场景 Skill</span></div>
          </article>
          <article className="experience-tile experience-tile-ai">
            <div className="experience-tile-top"><span>02</span><b>🤖</b></div>
            <div className="experience-company"><h3>小米科技有限责任公司 · AI 产品运营</h3><span>2024.10 — 2025.02 · 武汉</span></div>
            <p className="experience-summary">围绕用户需求完成智能体从定位到上线后的持续迭代。</p>
            <ul className="experience-points"><li>独立搭建 11 个智能体应用，优化 4 个已上线智能体</li><li>完成定位、Prompt 设计、功能测试与内容调优</li><li>参与竞品调研与运营策略分析，输出迭代建议</li><li>归纳用户反馈并优化内容配置，推动体验提升</li></ul>
            <div className="experience-metrics"><span><strong>11</strong>独立搭建</span><span><strong>4</strong>线上优化</span><span><strong>全流程</strong>定位至迭代</span></div>
          </article>

          <article className="experience-tile experience-tile-content">
            <div className="experience-tile-top"><span>03</span><b>🎬</b></div>
            <div className="experience-company"><h3>新华社中国证券报 · 视频策划与后期制作</h3><span>2024.02 — 2024.06 · 北京</span></div>
            <p className="experience-summary">参与财经栏目、人物专访与高频短视频生产，兼顾专业表达与传播效率。</p>
            <ul className="experience-points"><li>参与《两会面对面》《两会新观察》等重点栏目制作</li><li>累计制作财经新闻短视频 200+ 条、上市公司董事长专访 5 条</li><li>熟悉财经选题表达、短视频传播逻辑与媒体生产流程</li><li>覆盖选题包装、素材整理、字幕校对与后期优化</li></ul>
            <div className="experience-metrics"><span><strong>200+</strong>短视频</span><span><strong>5</strong>人物专访</span><span><strong>1000万+</strong>总播放量</span></div>
          </article>
        </div>
      </section>

      <section className="football-section" id="football">
        <div className="breath-cluster breath-cluster-football" aria-hidden="true"><span>07</span><span>⚽</span><span>↗</span></div>
        <div className="football-heading">
          <div>

            <div className="numbered-heading"><span className="section-number">04</span><h2><span>我的 <b>7 号</b></span><em>球员档案</em></h2></div>
          </div>
          <div className="football-intro">

            <p>训练和比赛，是我理解沟通、判断和共同目标的另一种方式</p>
          </div>
        </div>

        <div className="football-capsule">
          <div className="football-player-card">
            <div className="football-photo-stack">
              {footballMoments.map((moment, index) => (
                <figure className={index === footballIndex ? "is-active" : ""} aria-hidden={index !== footballIndex} key={moment.label}>
                  <img src={moment.image} alt={`谭美玲在足球比赛中${moment.label}`} width={moment.width} height={moment.height} loading="lazy" decoding="async" />
                  <figcaption><strong>{moment.label}</strong></figcaption>
                </figure>
              ))}
            </div>
          </div>

          <aside className="football-notebook" aria-label="足球带给我的能力">
            <div className="football-scoreline"><strong>07</strong></div>
            <div className="football-mini-pitch" aria-hidden="true">
              <span className="pitch-circle" />
              <span className="pitch-line pitch-line-one" />
              <span className="pitch-line pitch-line-two" />
              <span className="pitch-player pitch-player-main">07</span>
              <span className="pitch-player pitch-player-one" />
              <span className="pitch-player pitch-player-two" />
              <span className="pitch-ball">⚽</span>
            </div>
            <div className="football-traits">
              <article><span>👀</span><div><b>场上观察</b><p>先看空间，再做选择。</p></div></article>
              <article><span>🤝</span><div><b>团队配合</b><p>相信协作胜过单打独斗。</p></div></article>
              <article><span>⚡</span><div><b>快速判断</b><p>变化发生时保持清晰。</p></div></article>
            </div>
          </aside>
        </div>

        <p className="football-tab-hint">点击下方照片卡片，切换我的球场片段 <span>↓</span></p>
        <div className="football-tabs" aria-label="选择球场片段">
          {footballMoments.map((moment, index) => (
            <button type="button" className={index === footballIndex ? "is-active" : ""} onClick={() => setFootballIndex(index)} aria-pressed={index === footballIndex} key={moment.label}>
              <img src={moment.image} alt="" /><span>{String(index + 1).padStart(2, "0")}</span><strong>{moment.label}</strong><em>{moment.note}</em>
            </button>
          ))}
        </div>
      </section>

      <footer className="contact-section">
        <div className="contact-stage">
          <div className="contact-float contact-float-one">✦</div><div className="contact-float contact-float-two">💌</div><div className="contact-float contact-float-three">07</div>


          <h2><strong>下一段有趣的合作</strong><em>要不要一起开始？</em></h2>
          <a className="email-card" href="mailto:15549242057@163.com">
            <span>发送邮件</span>
            <strong>15549242057@163.com</strong>
            <i>↗</i>
          </a>

        </div>
        <div className="footer-bottom"><span>© 2026 谭美玲</span><span>武汉大学 · 产品运营与内容增长</span><a href="#top">回到顶部 ↑</a></div>
      </footer>
    </main>
  );
}
