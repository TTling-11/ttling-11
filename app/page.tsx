"use client";

import { useEffect, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";

const metrics = [
  { value: "11", label: "独立搭建 AI 智能体", detail: "从定位到上线" },
  { value: "4", label: "已上线智能体优化", detail: "基于反馈迭代" },
  { value: "200+", label: "财经短视频", detail: "参与策划与制作" },
  { value: "1000万+", label: "累计播放量", detail: "内容传播成果" },
];

const strengths = [
  {
    number: "01",
    icon: "🧩",
    title: "AI 产品运营",
    text: "经历过智能体从需求理解、定位设计、Prompt 编写到测试调优的完整流程。",
    proof: "11 个智能体独立搭建",
  },
  {
    number: "02",
    icon: "🔍",
    title: "用户与内容洞察",
    text: "能够从用户反馈与使用场景中识别问题，转化为内容配置和体验优化建议。",
    proof: "4 个线上产品持续优化",
  },
  {
    number: "03",
    icon: "🚀",
    title: "内容策划与增长",
    text: "理解选题、叙事、视觉和传播链路，兼顾内容质量、发布效率与传播结果。",
    proof: "200+ 条内容制作经验",
  },
  {
    number: "04",
    icon: "✨",
    title: "AI 工具驱动执行",
    text: "善于使用 Codex、TRAE 等 AI 与协作工具，辅助信息整理、原型搭建、内容生产和快速验证。",
    proof: "把工具真正转化为交付效率",
  },
];

const collectionVideos = [
  {
    index: "01",
    category: "城市传播",
    title: "《长治，现在就出发！》",
    description: "国家级三等奖作品，以城市体验为线索完成一次有节奏的目的地表达。",
    duration: "00:58",
    poster: "/portfolio-2026/changzhi.jpg",
    src: "/portfolio-2026/changzhi.mp4",
  },
  {
    index: "02",
    category: "AI 创意",
    title: "《讯飞星火 · AI 共创高效生活》",
    description: "从真实生活场景出发，呈现 AI 如何参与、连接并提升日常效率。",
    duration: "01:16",
    poster: "/portfolio-2026/xinghuo.jpg",
    src: "/portfolio-2026/xinghuo.mp4",
  },
  {
    index: "03",
    category: "品牌广告",
    title: "《紧急变身？去三福！》",
    description: "以临时造型需求为情境，用快速变装强化“一站式解决”的品牌印象。",
    duration: "00:30",
    poster: "/portfolio-2026/sanfu-transform.jpg",
    src: "/portfolio-2026/sanfu-transform.mp4",
  },
  {
    index: "04",
    category: "品牌故事",
    title: "《这样一袋，装下万千可能》",
    description: "让购物袋连接商品、友谊与生活方式，把普通物件变成叙事线索。",
    duration: "00:30",
    poster: "/portfolio-2026/sanfu-bag.jpg",
    src: "/portfolio-2026/sanfu-bag.mp4",
  },
  {
    index: "05",
    category: "产品创意",
    title: "《可画：生活里的设计师》",
    description: "国家级优秀奖作品，用人物、界面与动态视觉呈现产品价值。",
    duration: "00:43",
    poster: "/portfolio-2026/canva-designer.jpg",
    src: "/portfolio-2026/canva-designer.mp4",
  },
  {
    index: "06",
    category: "产品影像",
    title: "《从此不必 Alt+Tab》",
    description: "从多任务切换的真实痛点切入，用高密度视觉叙事展现一站式创作体验。",
    duration: "00:29",
    poster: "/portfolio-2026/alt-tab.jpg",
    src: "/portfolio-2026/alt-tab.mp4",
  },
];

const writingWorks = [
  { index: "07", type: "数据新闻", title: "《他乡客》", description: "以数据、视觉和长页交互组织异乡生活与身份记忆。", href: "https://readymag.website/u825704982/4423639/", icon: "✦", preview: "/portfolio-2026/writing-data.png" },
  { index: "08", type: "体育新闻", title: "体育新闻作品", description: "聚焦赛事现场与校园体育内容的采写表达。", href: "https://mp.weixin.qq.com/s/Ed1eL2PcKtv19pGKDSQfVA", icon: "⚽", preview: "/portfolio-2026/writing-sports.png" },
];

const footballMoments = [
  { image: "/football/football-dribble.jpg", label: "判断与执行", note: "带球时先观察空间，再做出动作。" },
  { image: "/football/football-throwin.jpg", label: "专注每次配合", note: "每一次重新开球，都是新的协作起点。" },
  { image: "/football/football-indoor.jpg", label: "保持节奏与韧性", note: "场地变化，但沟通与判断始终不变。" },
];

const awards = [
  { year: "2024", title: "第十六届大学生广告艺术大赛", result: "国家级三等奖", icon: "🥉", tone: "cyan" },
  { year: "2023", title: "第八届中国数据新闻大赛", result: "国家级三等奖", icon: "🗞️", tone: "blue" },
  { year: "2023", title: "第十五届大学生广告艺术大赛", result: "国家级优秀奖", icon: "🎨", tone: "pink" },
  { year: "2024", title: "第十七届中国大学生计算机设计大赛", result: "省级二等奖", icon: "🖥️", tone: "yellow" },
  { year: "2025", title: "武汉大学优秀毕业生", result: "优秀毕业生", icon: "🎓", tone: "mint" },
  { year: "2021—2024", title: "武汉大学新闻与传播学院奖学金", result: "连续三学年获得", icon: "📚", tone: "blue" },
  { year: "2024", title: "武汉大学", result: "社会活动积极分子", icon: "🌱", tone: "mint" },
  { year: "2023", title: "武汉大学新闻与传播学院", result: "优秀志愿者", icon: "🫶", tone: "pink" },
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
                <span className="art-spark">✦</span><span className="art-emoji">🧩</span><b>IDEA</b>
              </span>
              <i>核心能力</i>
            </a>
            <a className="intro-card intro-card-two" href="#experience" onClick={enterPortfolio}>
              <span className="intro-card-art intro-art-story" aria-hidden="true">
                <span className="art-spark">✦</span><span className="art-emoji">📝</span><b>WORK</b>
              </span>
              <i>代表经历</i>
            </a>
            <a className="intro-card intro-card-three" href="#background" onClick={enterPortfolio}>
              <span className="intro-card-art intro-art-about" aria-hidden="true">
                <span className="art-bubble">HELLO!</span><img src="/avatar-emoji.webp" alt="" />
              </span>
              <i>教育与荣誉</i>
            </a>
            <a className="intro-card intro-card-four" href="#portfolio" onClick={enterPortfolio}>
              <span className="intro-card-art intro-art-ai" aria-hidden="true">
                <span className="art-spark">✦</span><span className="art-emoji">🎞️</span><b>PLAY</b>
              </span>
              <i>代表作品</i>
            </a>
            <a className="intro-card intro-card-five" href="#football" onClick={enterPortfolio}>
              <span className="intro-card-art intro-art-football" aria-hidden="true">
                <span className="art-ball">⚽</span><span className="art-player">07</span><b>GO!</b>
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
              <span className="intro-folder-tab">PORTFOLIO · 2026</span>
              <span className="intro-sticker intro-avatar-sticker">
                <img src="/avatar-emoji.webp" alt="" />
              </span>
              <span className="intro-sticker intro-eyes-sticker" aria-hidden="true">
                <span className="intro-eye"><i /></span>
                <span className="intro-eye"><i /></span>
              </span>
              <strong>谭美玲</strong>
              <small>把洞察变成体验，让内容抵达更远</small>
              <a className="intro-enter" href="#top" onClick={enterPortfolio} aria-label="进入谭美玲个人主页">
                <span>ENTER PORTFOLIO</span><b>↗</b>
              </a>
            </div>
          </div>
          <p className="intro-hint">点击文件夹展开分类卡片，或点击 ENTER PORTFOLIO 直接进入首页 · 按 ESC 跳过</p>
        </section>
      )}

      <nav className="site-nav" aria-label="主导航">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true"><img src="/avatar-emoji.webp" alt="" /></span>
          <span className="brand-name">谭美玲</span>
        </a>
        <div className="nav-menu">
          <a href="#strengths">核心能力</a>
          <a href="#experience">代表经历</a>
          <a href="#background">教育与荣誉</a>
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
            <span className="status-dot" /> 求职方向：产品运营 · 内容增长
          </div>
          <p className="hero-identity"><strong>谭美玲</strong> <span>TAN MEILING</span></p>
          <h1><span>把洞察变成体验</span><em>让内容抵达更远</em></h1>
          <p className="hero-summary">
            武汉大学广告与媒介经济专业硕士研究生，具备 AI 智能体运营与内容生产经验。
            擅长从用户需求出发，把洞察转化为可落地的产品内容和持续迭代方案。
          </p>
          <div className="hero-buttons">
            <a className="button-primary" href="#experience">查看代表经历 <span>↓</span></a>
            <a className="button-secondary" href="mailto:15549242057@163.com">发送邮件 ↗</a>
          </div>
          <div className="workflow" aria-label="工作方法">
            <span>用户洞察</span><i>→</i><span>产品内容</span><i>→</i><span>测试迭代</span><i>→</i><span>增长反馈</span>
          </div>
        </div>

        <aside className="profile-card">
          <div className="portrait-wrap">
            <img src="/lifestyle-portrait.jpg" alt="谭美玲生活照" loading="lazy" decoding="async" />
            <span className="portrait-label">This is me</span>
          </div>
          <div className="profile-details">
            <div><span>教育背景</span><strong>武汉大学 · 硕士</strong></div>
            <div><span>研究方向</span><strong>数字营销 / 内容传播</strong></div>
            <div><span>意向城市</span><strong>武汉 / 北京</strong></div>
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
          <p className="section-label">01 / ROLE FIT</p>
          <h2>我能为团队<br />带来什么？</h2>
          <p>我能把用户洞察、产品运营、内容表达与 AI 工具串成完整工作流：既能独立推进，也能依据数据和反馈持续迭代，把想法更快落成可验证的结果。</p>
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
            <p className="section-label">04 / SELECTED WORK</p>
            <h2>不只讲经历，<br />也让作品自己说话</h2>
          </div>
          <div className="portfolio-heading-copy">
            <p>6 支视频和 2 篇文字作品，记录从城市传播、AI 创意到品牌与产品叙事的不同表达方式。</p>
            <div className="portfolio-categories" aria-label="作品类型">
              <span>视频作品 06</span><span>文字作品 02</span>
            </div>
          </div>
        </div>

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
                    <img src={track.poster} alt="" loading="lazy" decoding="async" />
                    <span>{track.index}</span>
                    <strong>{track.category}</strong>
                  </button>
                </article>
              ))}
            </div>
            <button className="work-orbit-core work-category-core" type="button" onClick={() => setActiveVideo(collectionVideos[workIndex])} aria-label={`点击播放${collectionVideos[workIndex].title}`}>
              <span>SELECTED VIDEO</span>
              <img src={collectionVideos[workIndex].poster} alt={`${collectionVideos[workIndex].title}作品预览`} decoding="async" />
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

        <div className="writing-work-grid" aria-label="文字作品">
          {writingWorks.map((work) => (
            <a className="writing-work-card" href={work.href} target="_blank" rel="noreferrer" key={work.title}>
              <div className="writing-work-preview"><img src={work.preview} alt={`${work.title}作品预览`} loading="lazy" decoding="async" /></div>
              <div className="writing-work-copy"><div><span>{work.index} / WRITING</span><b>{work.icon}</b></div><p>{work.type}</p><h3>{work.title}</h3><small>{work.description}</small><strong>打开作品 <i>↗</i></strong></div>
            </a>
          ))}
        </div>

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
            <div className="video-dialog-bottom"><h2>{activeVideo.title}</h2><span>CLICK · WATCH · REPLAY</span></div>
          </div>
        </div>
      )}

      <section className="experience-section" id="experience">
        <div className="breath-cluster breath-cluster-experience" aria-hidden="true"><span>✦</span><span>02</span><span>↗</span></div>
        <div className="section-title-row">
          <div><p className="section-label">02 / EXPERIENCE</p><h2>代表经历</h2></div>
          <p>从智能体从 0 到 1 的运营闭环，到高频财经视频的策划制作；两段实习共同沉淀了产品、内容与增长的实战能力。</p>
        </div>

        <div className="experience-overview">
          <article className="experience-tile experience-tile-ai">
            <div className="experience-tile-top"><span>01 / AI PRODUCT</span><b>🤖</b></div>
            <div className="experience-company"><p>小米科技有限责任公司</p><span>2024.10 — 2025.02 · 武汉</span></div>
            <h3>AI 产品运营</h3>
            <p className="experience-summary">围绕用户需求完成智能体从定位到上线后的持续迭代。</p>
            <ul className="experience-points"><li>独立搭建 11 个智能体应用，优化 4 个已上线智能体</li><li>完成定位、Prompt 设计、功能测试与内容调优</li><li>参与竞品调研与运营策略分析，输出迭代建议</li><li>归纳用户反馈并优化内容配置，推动体验提升</li></ul>
            <div className="experience-metrics"><span><strong>11</strong>独立搭建</span><span><strong>4</strong>线上优化</span><span><strong>全流程</strong>定位至迭代</span></div>
          </article>

          <article className="experience-tile experience-tile-content">
            <div className="experience-tile-top"><span>02 / CONTENT GROWTH</span><b>🎬</b></div>
            <div className="experience-company"><p>新华社中国证券报</p><span>2024.02 — 2024.06 · 北京</span></div>
            <h3>视频策划与后期制作</h3>
            <p className="experience-summary">参与财经栏目、人物专访与高频短视频生产，兼顾专业表达与传播效率。</p>
            <ul className="experience-points"><li>参与《两会面对面》《两会新观察》等重点栏目制作</li><li>累计制作财经新闻短视频 200+ 条、上市公司董事长专访 5 条</li><li>熟悉财经选题表达、短视频传播逻辑与媒体生产流程</li><li>覆盖选题包装、素材整理、字幕校对与后期优化</li></ul>
            <div className="experience-metrics"><span><strong>200+</strong>短视频</span><span><strong>5</strong>人物专访</span><span><strong>1000万+</strong>总播放量</span></div>
          </article>
        </div>
      </section>

      <section className="background-section" id="background">
        <div className="breath-cluster breath-cluster-learning" aria-hidden="true"><span>WHU</span><span>✦</span><span>◎</span></div>
        <div className="education-heading">
          <div><p className="section-label">03 / LEARNING PATH</p><h2>我的学习坐标</h2></div>
          <p>从内容创作与影像叙事出发，进一步走向品牌传播、数字营销与 AI 产品运营。</p>
        </div>

        <div className="learning-atlas" aria-label="从本科到硕士的学习轨迹">
          <div className="learning-atlas-route" aria-hidden="true"><span>CONTENT</span><i>✦</i><b>PRODUCT</b></div>
          <article className="learning-stop learning-stop-bachelor">
            <div className="learning-stop-index"><span>01</span><i>🎥</i></div>
            <div className="learning-stop-copy"><p>2021.09 — 2025.06</p><strong>本科 · 广播电视学</strong><h3>武汉大学</h3><span>从内容创作与影像叙事出发</span><div><i>内容创作</i><i>影像叙事</i><i>优秀毕业生</i></div></div>
          </article>
          <article className="learning-stop learning-stop-master">
            <div className="learning-stop-index"><span>02</span><i>🎓</i></div>
            <div className="learning-stop-copy"><p>2025.09 — 至今</p><strong>硕士研究生 · 广告与媒介经济</strong><h3>武汉大学</h3><span>走向品牌传播、数字营销与 AI 产品内容</span><div><i>数字营销</i><i>品牌传播</i><i>AI 产品</i></div></div>
          </article>
        </div>

        <div className="awards-showcase">
          <div className="awards-showcase-heading"><span aria-hidden="true">🏆</span><div><p className="section-label">HONORS EXHIBITION</p><h2>荣誉画廊</h2><p>从专业竞赛到校园荣誉，完整记录每一次投入得到的回应。</p></div></div>
          <div className="honors-gallery" aria-label="荣誉奖项画廊">
            {awards.map((award, index) => (
              <article className={`honor-frame honor-${award.tone}`} style={{ "--frame-order": index } as CSSProperties} key={`${award.year}-${award.title}`}>
                <div className="honor-art"><span>{award.icon}</span><i>{String(index + 1).padStart(2, "0")}</i></div>
                <div className="honor-caption"><span>{award.year}</span><h3>{award.title}</h3><p>{award.result}</p></div>
              </article>
            ))}
          </div>
        </div>

        <div className="campus-stage">
          <div className="campus-stage-heading"><div><p className="section-label">CAMPUS ROLES</p><h2>我的校园角色</h2></div><p>不只参与活动，也负责把人、内容和流程组织起来。</p></div>
          <div className="campus-role-grid">
            <article className="campus-role campus-role-media">
              <div className="campus-role-art" aria-hidden="true"><div className="campus-character campus-character-report"><img src="/campus-character-reporter.png" alt="" /><span className="campus-action-badge">🎙️</span><span className="campus-character-tag tag-one">采访现场</span><span className="campus-character-tag tag-two">内容审核</span></div><span className="campus-role-label">记者团</span><i>📹</i></div>
              <div className="campus-role-copy"><span>2022.06 — 2024.01</span><p>ROLE 01 · 内容统筹</p><h3>体育部宣传中心<br />学生记者团</h3><strong>主要负责人</strong><p>组织和指导记者团工作，参与大型赛事新闻、系列短视频的制作与审核。</p><div><i>团队协作</i><i>内容审核</i><i>赛事传播</i></div></div>
            </article>
            <article className="campus-role campus-role-community">
              <div className="campus-role-art" aria-hidden="true"><div className="campus-character campus-character-plan"><img src="/campus-character-planner.png" alt="" /><span className="campus-action-badge">🗂️</span><span className="campus-character-tag tag-one">活动统筹</span><span className="campus-character-tag tag-two">资源协调</span></div><span className="campus-role-label">社团服务</span><i>📌</i></div>
              <div className="campus-role-copy"><span>2022.06 — 2023.05</span><p>ROLE 02 · 项目组织</p><h3>新闻与传播学院<br />社团服务中心</h3><strong>负责人</strong><p>统筹学院社团日常事务与活动支持，主办武汉大学公益广告大赛。</p><div><i>项目管理</i><i>活动策划</i><i>资源协调</i></div></div>
            </article>
          </div>
        </div>
      </section>

      <section className="football-section" id="football">
        <div className="breath-cluster breath-cluster-football" aria-hidden="true"><span>07</span><span>⚽</span><span>↗</span></div>
        <div className="football-heading">
          <div>
            <p className="section-label">05 / BEYOND WORK</p>
            <h2><span>我的 <b>7 号</b></span><em>球员档案</em></h2>
          </div>
          <div className="football-intro">
            <span>WUHAN UNIVERSITY WOMEN&apos;S FOOTBALL TEAM · NO. 7</span>
            <p>训练和比赛，是我理解沟通、判断和共同目标的另一种方式</p>
          </div>
        </div>

        <div className="football-capsule">
          <div className="football-player-card">
            <div className="football-photo-stack">
              {footballMoments.map((moment, index) => (
                <figure className={index === footballIndex ? "is-active" : ""} aria-hidden={index !== footballIndex} key={moment.label}>
                  <img src={moment.image} alt={`谭美玲在足球比赛中${moment.label}`} loading="lazy" decoding="async" />
                  <figcaption><span>WHU W.F.C. · NO. 7</span><strong>{moment.label}</strong></figcaption>
                </figure>
              ))}
            </div>
          </div>

          <aside className="football-notebook" aria-label="足球带给我的能力">
            <div className="football-scoreline"><span>PLAYER CARD</span><strong>07</strong><b>FORWARD / TEAM PLAYER</b></div>
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
          <p className="section-label">06 / LET&apos;S CONNECT</p>
          <p className="contact-kicker">THE NEXT GOOD STORY STARTS HERE</p>
          <h2><strong>下一段有趣的合作</strong><em>要不要一起开始？</em></h2>
          <p>欢迎和我聊产品、内容、增长，或者一场值得被讲好的故事。</p>
          <a className="email-card" href="mailto:15549242057@163.com">
            <span>DROP ME A LINE</span>
            <strong>15549242057@163.com</strong>
            <i>↗</i>
          </a>
          <div className="contact-stickers" aria-hidden="true"><span>PRODUCT × CONTENT</span><span>WUHAN / BEIJING</span><span>READY TO CONNECT</span></div>
        </div>
        <div className="footer-bottom"><span>© 2026 谭美玲</span><span>武汉大学 · 产品运营与内容增长</span><a href="#top">回到顶部 ↑</a></div>
      </footer>
    </main>
  );
}
