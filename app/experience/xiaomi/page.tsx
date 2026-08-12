export default function XiaomiExperience() {
  return (
    <main className="experience-detail experience-detail-ai">
      <nav className="detail-nav">
        <a href="/#experience">← 返回代表经历</a>
        <a href="/">谭美玲 · PORTFOLIO</a>
      </nav>

      <header className="detail-hero">
        <div className="detail-hero-copy">
          <p className="detail-kicker">01 / AI PRODUCT OPERATION</p>
          <p className="detail-company">小米科技有限责任公司 · 2024.10—2025.02 · 武汉</p>
          <h1>把智能体从想法，<br />推进到可用、可测，<br />再持续迭代。</h1>
          <p>在 AI 产品运营实践中，我覆盖需求理解、角色定位、Prompt 设计、功能测试、内容调优和用户反馈分析，并把分散问题整理成可执行的优化动作。</p>
        </div>
        <div className="detail-hero-art" aria-hidden="true"><span>🤖</span><i>PROMPT</i><b>11</b><em>✦</em></div>
      </header>

      <section className="detail-metric-row" aria-label="经历成果">
        <article><strong>11</strong><span>独立搭建 AI 智能体</span></article>
        <article><strong>4</strong><span>已上线智能体持续优化</span></article>
        <article><strong>全流程</strong><span>定位、测试、调优、反馈</span></article>
      </section>

      <section className="detail-section detail-process">
        <div className="detail-section-heading"><p>HOW I WORKED</p><h2>我的工作方法</h2></div>
        <div className="detail-step-grid">
          <article><span>01</span><b>🔍</b><h3>识别真实需求</h3><p>从用户场景和使用目标出发，拆解高频问题，明确智能体的角色、边界和任务优先级。</p></article>
          <article><span>02</span><b>🧩</b><h3>设计交互逻辑</h3><p>编写与迭代 Prompt，组织知识、语气和输出结构，让回答更稳定，也更符合实际使用方式。</p></article>
          <article><span>03</span><b>🧪</b><h3>测试与调优</h3><p>使用典型与边界问题反复验证，记录回答偏差、流程断点和理解歧义，逐项修正。</p></article>
          <article><span>04</span><b>📈</b><h3>反馈驱动迭代</h3><p>归纳线上反馈和竞品信息，输出内容配置、交互体验与后续运营方向的优化建议。</p></article>
        </div>
      </section>

      <section className="detail-section detail-outcome">
        <div><p className="detail-kicker">WHAT I LEARNED</p><h2>这段经历让我形成的能力</h2></div>
        <div className="detail-outcome-list">
          <p><span>01</span>把模糊需求转化为清晰、可执行的产品任务。</p>
          <p><span>02</span>用测试记录和用户反馈判断问题，而不是只凭直觉修改。</p>
          <p><span>03</span>在内容表达、产品体验与运营目标之间寻找平衡。</p>
        </div>
      </section>

      <footer className="detail-next">
        <a href="/experience/china-securities"><span>下一段经历</span><strong>新华社中国证券报 · 内容增长 →</strong></a>
      </footer>
    </main>
  );
}
