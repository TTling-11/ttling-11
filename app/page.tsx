const metrics = [
  { value: "11", label: "独立搭建 AI 智能体", detail: "从定位到上线" },
  { value: "4", label: "已上线智能体优化", detail: "基于反馈迭代" },
  { value: "200+", label: "财经短视频", detail: "参与策划与制作" },
  { value: "1000万+", label: "累计播放量", detail: "内容传播成果" },
];

const strengths = [
  {
    number: "01",
    title: "AI 产品运营",
    text: "经历过智能体从需求理解、定位设计、Prompt 编写到测试调优的完整流程。",
    proof: "11 个智能体独立搭建",
  },
  {
    number: "02",
    title: "用户与内容洞察",
    text: "能够从用户反馈与使用场景中识别问题，转化为内容配置和体验优化建议。",
    proof: "4 个线上产品持续优化",
  },
  {
    number: "03",
    title: "内容策划与增长",
    text: "理解选题、叙事、视觉和传播链路，兼顾内容质量、发布效率与传播结果。",
    proof: "200+ 条内容制作经验",
  },
];

const portfolioArchive = [
  {
    category: "数据新闻",
    title: "《他乡客》",
    result: "中国数据新闻大赛 · 国家级三等奖",
    description: "围绕异乡生活与身份记忆展开，用数据、视觉和长页交互组织复杂信息，让议题更容易被理解。",
    images: ["/portfolio/projects/data-news.jpg"],
    tags: ["数据叙事", "交互网页", "信息可视化"],
    links: [{ label: "查看交互作品", href: "https://readymag.com/u825704982/4423639/" }],
  },
  {
    category: "广告创意",
    title: "《生活里的设计师》",
    result: "大学生广告艺术大赛 · 国家级优秀奖",
    description: "从日常生活场景切入，通过人物、界面与动态视觉的组合，把产品价值转化为年轻化的内容表达。",
    images: ["/portfolio/projects/ad-designer.jpg"],
    tags: ["创意策划", "视频制作", "场景洞察"],
    links: [{ label: "查看视频", href: "https://www.bilibili.com/video/BV1RG411v7Lp/" }],
  },
  {
    category: "品牌视觉",
    title: "洗护产品创意表达",
    result: "大学生广告艺术节学院奖 · 入围",
    description: "以产品质感、色彩氛围与细节镜头为核心，构建更具辨识度的品牌视觉语言。",
    images: ["/portfolio/projects/brand-visual.jpg"],
    tags: ["视觉策划", "产品镜头", "品牌调性"],
    links: [{ label: "查看作品", href: "https://v.douyin.com/i8FQhr9B/" }],
  },
  {
    category: "人物专访",
    title: "《遇见邓布利多》",
    result: "武汉大学本科教师专访",
    description: "以人物故事为线索组织采访内容，在校园语境中兼顾信息密度、人物温度与轻量化表达。",
    images: ["/portfolio/projects/teacher-interview.jpg"],
    tags: ["采访策划", "人物故事", "视频包装"],
    links: [{ label: "查看专访", href: "https://www.bilibili.com/video/BV1Cw411b7G3/" }],
  },
  {
    category: "人物专访",
    title: "《看水漫过林野》",
    result: "新闻与传播学院院庆教师专访",
    description: "围绕教师经历与专业选择展开叙事，用克制的画面与文字建立更沉静的人物表达。",
    images: ["/portfolio/projects/anniversary-interview.jpg"],
    tags: ["人物采访", "内容策划", "叙事剪辑"],
    links: [{ label: "查看专访", href: "https://www.bilibili.com/video/BV11c411D7Tq/" }],
  },
  {
    category: "体育传播",
    title: "武汉大学师生田径运动会",
    result: "体育宣传中心记者团 · 视频作品",
    description: "记录大型赛事现场，以航拍、全景和节奏剪辑还原运动会的规模感、秩序感与集体氛围。",
    images: ["/portfolio/projects/sports-video.jpg"],
    tags: ["赛事记录", "现场拍摄", "视频剪辑"],
    links: [{ label: "查看视频", href: "https://www.bilibili.com/video/BV1Lb4y1j7ox/" }],
  },
  {
    category: "体育传播",
    title: "校园赛事系列报道",
    result: "体育宣传中心记者团 · 文字作品",
    description: "围绕赛程、人物与现场节点完成校园体育新闻采写，在高频发布中保持信息准确与内容节奏。",
    images: ["/portfolio/projects/sports-writing.jpg"],
    tags: ["新闻采写", "内容审核", "赛事传播"],
  },
  {
    category: "媒体编辑",
    title: "健康知识版面编辑",
    result: "大众卫生报 · 实习编辑作品",
    description: "参与健康科普内容的版面组织与视觉编辑，让专业信息以更清晰、易读的方式触达大众。",
    images: ["/portfolio/projects/health-newspaper.jpg"],
    tags: ["报刊编辑", "信息层级", "健康传播"],
    links: [
      { label: "查看 6 月 29 日版面", href: "https://epaper.voc.com.cn/dzwsb/html/2023-06/29/node_85.htm" },
      { label: "查看 7 月 6 日版面", href: "https://epaper.voc.com.cn/dzwsb/html/2023-07/06/node_85.htm" },
    ],
  },
  {
    category: "财经视频",
    title: "《中证问董》系列",
    result: "新华社中国证券报 · 实习编辑作品",
    description: "参与财经人物访谈与系列视频生产，在专业表达、人物包装与高频内容制作之间保持平衡。",
    images: ["/portfolio/projects/securities-video.jpg"],
    tags: ["财经内容", "人物访谈", "视频后期"],
    links: [{ label: "查看系列作品", href: "https://zzb.jddglobal.com/html/video/video-vod-nfull.html?infoId=590efbf966d1480dbae5394eaab52466&infoType=7&trainingType=3" }],
  },
];

const awards = [
  ["2024", "第十六届大学生广告艺术大赛", "国家级三等奖"],
  ["2024", "中国大学生计算机设计大赛", "省级二等奖"],
  ["2023", "第八届中国数据新闻大赛", "国家级三等奖"],
  ["2021—2024", "武汉大学新闻与传播学院", "连续三学年奖学金、优秀学生"],
];

export default function Home() {
  return (
    <main id="top">
      <nav className="site-nav" aria-label="主导航">
        <a className="brand" href="#top">
          <span className="brand-mark">TM</span>
          <span className="brand-name">谭美玲</span>
        </a>
        <div className="nav-menu">
          <a href="#strengths">核心能力</a>
          <a href="#experience">代表经历</a>
          <a href="#background">教育与荣誉</a>
          <a href="#portfolio">代表作品</a>
          <a href="#football">足球</a>
        </div>
        <a className="nav-cta" href="mailto:15549242057@163.com">
          联系我 <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <header className="hero-shell">
        <div className="hero-main">
          <div className="availability">
            <span className="status-dot" /> 求职方向：AI 产品运营 · 产品运营 · 内容增长
          </div>
          <p className="hero-identity">谭美玲 <span>TAN MEILING</span></p>
          <h1>让 AI 产品<br /><em>更好用，也更易被看见。</em></h1>
          <p className="hero-summary">
            武汉大学广告与媒介经济专业硕士研究生，具备 AI 智能体运营与财经内容生产经验。
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
            <img src="/lifestyle-portrait.jpg" alt="谭美玲生活照" />
            <span className="portrait-label">AI PRODUCT · CONTENT</span>
          </div>
          <div className="profile-details">
            <div><span>教育背景</span><strong>武汉大学 · 硕士</strong></div>
            <div><span>研究方向</span><strong>数字营销 / 内容传播</strong></div>
            <div><span>意向城市</span><strong>北京</strong></div>
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
          <p>不是简单罗列技能，而是用已经发生过的结果，说明我与目标岗位的匹配度。</p>
        </div>
        <div className="strength-grid">
          {strengths.map((item) => (
            <article className="strength-card" key={item.number}>
              <span className="card-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <strong>{item.proof} <span>↗</span></strong>
            </article>
          ))}
        </div>
        <div className="professional-facts">
          <div className="facts-heading">
            <p className="section-label">PROFESSIONAL TOOLKIT</p>
            <h3>专业能力与工具</h3>
            <p>把产品方法、内容能力与协作工具，组合成可执行的工作流。</p>
          </div>
          <div className="facts-grid">
            <article><span>PRODUCT &amp; AI</span><strong>Prompt 设计 · 智能体测试 · 用户反馈 · 竞品分析</strong></article>
            <article><span>DATA &amp; BUILD</span><strong>SQL · GitHub · TRAE · Codex</strong></article>
            <article><span>GROWTH CHANNELS</span><strong>Discord · X · LinkedIn</strong></article>
            <article><span>LANGUAGE</span><strong>IELTS 7.0 · 英文资料检索与沟通</strong></article>
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="portfolio-heading">
          <div>
            <p className="section-label">04 / SELECTED WORK</p>
            <h2>不只讲经历，<br />也让作品自己说话。</h2>
          </div>
          <div className="portfolio-heading-copy">
            <p>从广告创意到数据新闻、人物专访和媒体编辑，所有作品都在页面内展开，直接呈现项目主题、我的工作与成果。</p>
            <div className="portfolio-categories" aria-label="作品类型">
              <span>广告创意</span><span>数据新闻</span><span>人物专访</span><span>体育传播</span><span>媒体编辑</span>
            </div>
          </div>
        </div>

        <article className="featured-work">
          <div className="work-video-frame">
            <video controls playsInline preload="metadata" poster="/portfolio/alttab-poster.jpg" aria-label="播放《从此不必 Alt+Tab》广告短片">
              <source src="/portfolio/alttab.mp4" type="video/mp4" />
              你的浏览器暂不支持视频播放，可<a href="/portfolio/alttab.mp4">下载视频</a>观看。
            </video>
          </div>
          <div className="featured-work-copy">
            <div className="work-topline"><span>PRODUCT VIDEO</span><span>00:29</span></div>
            <h3>《从此不必 Alt+Tab》</h3>
            <p>从“多任务切换”的真实痛点切入，用高密度视觉叙事展现一站式 AI 内容创作体验。</p>
            <div className="work-insight">
              <span>核心表达</span>
              <strong>让复杂的创作流程，<br />变得连贯而直观。</strong>
            </div>
            <div className="work-tags"><span>AI 产品</span><span>痛点洞察</span><span>视觉叙事</span></div>
          </div>
        </article>

        <div className="work-grid">
          <article className="work-card">
            <div className="work-video-frame">
              <video controls playsInline preload="metadata" poster="/portfolio/sanfu-transform-poster.jpg" aria-label="播放《紧急变身？去三福！》广告短片">
                <source src="/portfolio/sanfu-transform.mp4" type="video/mp4" />
                你的浏览器暂不支持视频播放，可<a href="/portfolio/sanfu-transform.mp4">下载视频</a>观看。
              </video>
            </div>
            <div className="work-card-copy">
              <div className="work-topline"><span>BRAND VIDEO</span><span>00:30</span></div>
              <h3>《紧急变身？去三福！》</h3>
              <p>以年轻人的临时造型需求为情境，用快速变装与全景镜头强化三福“一站式解决”的品牌印象。</p>
              <div className="work-tags"><span>品牌广告</span><span>场景创意</span><span>节奏剪辑</span></div>
            </div>
          </article>

          <article className="work-card">
            <div className="work-video-frame">
              <video controls playsInline preload="metadata" poster="/portfolio/sanfu-bag-poster.jpg" aria-label="播放《这样一袋，装下万千可能》广告短片">
                <source src="/portfolio/sanfu-bag.mp4" type="video/mp4" />
                你的浏览器暂不支持视频播放，可<a href="/portfolio/sanfu-bag.mp4">下载视频</a>观看。
              </video>
            </div>
            <div className="work-card-copy">
              <div className="work-topline"><span>BRAND STORY</span><span>00:30</span></div>
              <h3>《这样一袋，装下万千可能》</h3>
              <p>让购物袋成为连接商品、生活方式与友谊的叙事线索，把品牌选择转化为年轻人的生活可能。</p>
              <div className="work-tags"><span>品牌故事</span><span>情感表达</span><span>生活方式</span></div>
            </div>
          </article>
        </div>

        <div className="archive-heading">
          <div><p className="section-label">PROJECT ARCHIVE</p><h3>更多作品，逐项展开。</h3></div>
          <p>每个项目都包含作品类型、成果说明与能力标签；有线上成品的项目可直接打开查看。</p>
        </div>

        <div className="archive-grid">
          {portfolioArchive.map((item, index) => (
            <article className={`archive-card ${index === 0 ? "archive-card-wide" : ""}`} key={item.title}>
              <div className={`archive-visual ${item.images.length > 1 ? "archive-visual-split" : ""}`}>
                {item.images.map((src, imageIndex) => (
                  <img src={src} alt={`${item.title}作品预览${item.images.length > 1 ? ` ${imageIndex + 1}` : ""}`} key={src} />
                ))}
                <span className="archive-index">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="archive-copy">
                <div className="archive-topline"><span>{item.category}</span><strong>{item.result}</strong></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="archive-meta">
                  <div className="archive-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  {item.links && (
                    <div className="archive-links">
                      {item.links.map((link) => (
                        <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} ↗</a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-title-row">
          <div><p className="section-label">02 / EXPERIENCE</p><h2>代表经历</h2></div>
          <p>聚焦与 AI 产品运营和内容增长最相关的两段实践，呈现“做了什么、如何做、产生了什么结果”。</p>
        </div>

        <article className="case-card case-dark">
          <div className="case-side">
            <span className="company-index">01</span>
            <div><p>2024.10 — 2025.02</p><p>北京</p></div>
          </div>
          <div className="case-body">
            <div className="case-header">
              <div><p>小米科技有限责任公司</p><h3>AI 产品运营</h3></div>
              <span className="case-badge">AI AGENT</span>
            </div>
            <div className="case-result-grid">
              <div><strong>11</strong><span>独立搭建智能体</span></div>
              <div><strong>4</strong><span>线上智能体优化</span></div>
              <div><strong>全流程</strong><span>定位—测试—调优</span></div>
            </div>
            <div className="case-steps">
              <div><span>需求与定位</span><p>围绕真实用户需求梳理使用场景，明确智能体角色、功能边界与内容方向。</p></div>
              <div><span>设计与验证</span><p>完成 Prompt 设计、功能测试和内容调优，持续检查回答质量与交互体验。</p></div>
              <div><span>反馈与迭代</span><p>归纳用户反馈，参与竞品与运营策略分析，输出内容配置优化和迭代建议。</p></div>
            </div>
            <div className="tag-list"><span>Prompt Design</span><span>Agent Testing</span><span>User Feedback</span><span>Competitive Research</span></div>
          </div>
        </article>

        <article className="case-card case-light">
          <div className="case-side">
            <span className="company-index">02</span>
            <div><p>2024.02 — 2024.06</p><p>北京</p></div>
          </div>
          <div className="case-body">
            <div className="case-header">
              <div><p>新华社中国证券报</p><h3>视频策划与后期制作</h3></div>
              <span className="case-badge">CONTENT</span>
            </div>
            <div className="case-result-grid">
              <div><strong>200+</strong><span>财经新闻短视频</span></div>
              <div><strong>5</strong><span>董事长专访片</span></div>
              <div><strong>1000万+</strong><span>内容总播放量</span></div>
            </div>
            <div className="case-steps">
              <div><span>重点栏目</span><p>参与《两会面对面》《两会新观察》《新质生产力图鉴》等重点财经栏目制作。</p></div>
              <div><span>内容生产</span><p>参与选题包装、素材整理、字幕校对和后期优化，理解财经内容的专业表达。</p></div>
              <div><span>传播结果</span><p>在高频内容生产中兼顾效率与质量，参与作品累计获得 1000 万+ 播放量。</p></div>
            </div>
            <div className="tag-list"><span>Content Strategy</span><span>Short Video</span><span>Financial Media</span><span>Visual Storytelling</span></div>
          </div>
        </article>
      </section>

      <section className="background-section" id="background">
        <div className="background-grid">
          <div className="education-column">
            <p className="section-label">03 / BACKGROUND</p>
            <h2>教育背景</h2>
            <article className="education-item current">
              <span>2025.09 — 至今</span>
              <div><strong>武汉大学 · 硕士研究生</strong><h3>广告与媒介经济</h3><p>品牌传播、媒介经济、数字营销、内容传播</p></div>
            </article>
            <article className="education-item">
              <span>2021.09 — 2025.06</span>
              <div><strong>武汉大学 · 本科</strong><h3>广播电视学</h3><p>武汉大学优秀毕业生</p></div>
            </article>
          </div>

          <div className="awards-column">
            <div className="column-heading"><h2>荣誉奖项</h2><span>SELECTED</span></div>
            <div className="award-list">
              {awards.map(([year, title, result]) => (
                <article key={`${year}-${title}`}><span>{year}</span><div><h3>{title}</h3><p>{result}</p></div></article>
              ))}
            </div>
          </div>
        </div>

        <div className="campus-block">
          <div><p className="section-label">LEADERSHIP</p><h2>校园经历</h2></div>
          <article><span>2022.06 — 2024.01</span><h3>武汉大学体育部宣传中心学生记者团</h3><p>主要负责人 · 组织记者团工作，参与大型赛事新闻及系列短视频的制作与审核。</p></article>
          <article><span>2022.06 — 2023.05</span><h3>武汉大学新闻与传播学院社团服务中心</h3><p>负责人 · 管理学院社团日常事务，主办武汉大学公益广告大赛。</p></article>
        </div>
      </section>

      <section className="football-section" id="football">
        <div className="football-heading">
          <div>
            <p className="section-label">05 / BEYOND WORK</p>
            <h2>球场，是我的<br />另一间课堂。</h2>
          </div>
          <div className="football-intro">
            <span>WUHAN UNIVERSITY WOMEN&apos;S FOOTBALL TEAM · NO. 7</span>
            <p>
              我是武汉大学女子足球队队员。长期训练和比赛让我习惯在高压中快速判断、
              与队友保持沟通，并为共同目标持续投入。
            </p>
          </div>
        </div>

        <div className="football-gallery">
          <figure className="football-photo football-photo-main">
            <img src="/football/football-dribble.jpg" alt="谭美玲在足球比赛中带球" />
            <figcaption><span>01</span><strong>判断与执行</strong></figcaption>
          </figure>
          <figure className="football-photo">
            <img src="/football/football-throwin.jpg" alt="谭美玲在足球比赛中掷界外球" />
            <figcaption><span>02</span><strong>专注每一次配合</strong></figcaption>
          </figure>
          <figure className="football-photo">
            <img src="/football/football-indoor.jpg" alt="谭美玲参加室内足球比赛" />
            <figcaption><span>03</span><strong>保持节奏与韧性</strong></figcaption>
          </figure>
        </div>

        <div className="football-values">
          <article><span>TEAMWORK</span><h3>团队协作</h3><p>先看队友的位置，再决定自己的动作。</p></article>
          <article><span>RESILIENCE</span><h3>抗压与韧性</h3><p>比分落后时，依然保持节奏和执行。</p></article>
          <article><span>DECISION</span><h3>快速判断</h3><p>在变化发生的瞬间，做出清晰选择。</p></article>
        </div>
      </section>

      <footer className="contact-section">
        <div className="contact-copy">
          <p className="section-label">06 / CONTACT</p>
          <h2>如果你正在寻找兼具<br /><em>产品思维与内容能力</em>的伙伴，</h2>
          <p>很期待与你聊聊 AI 产品、用户体验与增长。</p>
        </div>
        <a className="email-card" href="mailto:15549242057@163.com">
          <span>EMAIL ME</span>
          <strong>15549242057@163.com</strong>
          <i>↗</i>
        </a>
        <div className="footer-bottom"><span>© 2026 谭美玲</span><span>武汉大学 · AI PRODUCT OPERATIONS</span><a href="#top">回到顶部 ↑</a></div>
      </footer>
    </main>
  );
}
