// hospital-pages-c.jsx — BurnTreatmentPage, HBOTPage, EquipmentPage, WorkersCompPage, DirectionsPage

// ─────────────────────────────────────────
//  BURN TREATMENT PAGE
// ─────────────────────────────────────────
function BurnTreatmentPage({ onNavigate, theme }) {
  const { useState } = React;
  const th = THEMES[theme];
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
  {
    label: '1도 화상', color: '#F59E0B', sub: '표재성 화상',
    symptoms: ['피부 발적·홍조', '통증 및 열감', '부종 없음', '물집 없음'],
    treatment: ['냉각 처치 (15~20분 흐르는 물)', '항생 연고 도포', '1~2주 내 자연 치유', '흉터 없음'],
    note: '대부분 외래 치료로 가능하며, 합병증 위험이 낮습니다.'
  },
  {
    label: '2도 화상', color: C.warning, sub: '부분층 화상',
    symptoms: ['물집 형성', '심한 통증', '분비물 발생', '부종 동반'],
    treatment: ['즉시 응급 드레싱', '물집 제거 금지', '창상 보호 드레싱', '항생제 처방'],
    note: '손상 깊이에 따라 수술이 필요할 수 있습니다. 즉시 내원 권고.'
  },
  {
    label: '3도 화상', color: C.red, sub: '전층 화상',
    symptoms: ['피부 탄화·괴사', '통증 없음 (신경 손상)', '가죽 같은 질감', '심각한 부종'],
    treatment: ['즉시 응급 처치 필수', '수액 소생 치료', '피부 이식 수술', 'HBOT 병행 치료'],
    note: '생명을 위협하는 중증 화상. 즉시 119 신고 및 응급의료기관 이송 필요.'
  }];


  const process = [
  { n: '01', title: '응급 접수', desc: '응급실 도착 즉시 화상 면적(TBSA) 및 중증도 평가 (1~3도, 위치, 원인).' },
  { n: '02', title: '초기 응급 처치', desc: '수액 소생, 기도 확보, 창상 냉각·드레싱. 필요 시 진통제 투여.' },
  { n: '03', title: '정밀 검사', desc: 'CT·혈액검사로 흡입 손상, 감염, 전해질 이상 확인.' },
  { n: '04', title: '수술 및 치료', desc: '가피 절개, 피부 이식, 창상 봉합 등 화상 수술을 진행합니다.' },
  { n: '05', title: 'HBOT 병행', desc: '필요 시 고압산소치료를 병행하여 창상 회복을 보조합니다.' },
  { n: '06', title: '재활·추적 관리', desc: '흉터 관리, 물리치료, 심리 상담을 포함한 통합 재활 프로그램.' }];


  const activeTabData = tabs[activeTab];

  return (
    <div>
      <PageHero
        title="화상 치료 센터"
        subtitle="중증 화상 응급 처치부터 재건 수술까지 진료합니다."
        breadcrumb={[{ label: '홈', page: 'home' }, { label: '진료 센터' }, { label: '화상 치료 센터' }]}
        onNavigate={onNavigate} theme={theme} />
      

      {/* Degree tabs */}
      <section style={{ padding: '60px 32px', background: th.altBg }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionTitle theme={theme} sub="화상 정도에 따른 증상과 치료 방법을 확인하세요.">화상 단계별 안내</SectionTitle>
          <div className="h-burn-tabs" style={{ display: 'flex', gap: 0, marginBottom: 32, borderBottom: `2px solid ${C.borderLight}` }}>
            {tabs.map((tab, i) =>
            <button key={i} onClick={() => setActiveTab(i)} style={{
              padding: '12px 28px', background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Noto Sans KR', sans-serif", fontSize: 15, fontWeight: activeTab === i ? 700 : 400,
              color: activeTab === i ? tab.color : C.textMuted,
              borderBottom: activeTab === i ? `2px solid ${tab.color}` : '2px solid transparent',
              marginBottom: -2, transition: 'all 0.15s'
            }}>
                {tab.label}
                <span style={{ fontSize: 11, marginLeft: 6, opacity: 0.7 }}>({tab.sub})</span>
              </button>
            )}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
            {/* Symptoms */}
            <div style={{ background: '#fff', borderRadius: 6, padding: '24px', border: `1px solid ${C.borderLight}` }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: activeTabData.color, letterSpacing: '0.08em', fontFamily: "'Inter', sans-serif", marginBottom: 12 }}>증상</div>
              {activeTabData.symptoms.map((s, i) =>
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: i < activeTabData.symptoms.length - 1 ? `1px solid ${C.borderLight}` : 'none' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: activeTabData.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: C.text, fontFamily: "'Noto Sans KR', sans-serif" }}>{s}</span>
                </div>
              )}
            </div>
            {/* Treatment */}
            <div style={{ background: '#fff', borderRadius: 6, padding: '24px', border: `1px solid ${C.borderLight}` }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: activeTabData.color, letterSpacing: '0.08em', fontFamily: "'Inter', sans-serif", marginBottom: 12 }}>치료 방법</div>
              {activeTabData.treatment.map((s, i) =>
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '10px 0', borderBottom: i < activeTabData.treatment.length - 1 ? `1px solid ${C.borderLight}` : 'none' }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: activeTabData.color, flexShrink: 0, marginTop: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontSize: 14, color: C.text, fontFamily: "'Noto Sans KR', sans-serif" }}>{s}</span>
                </div>
              )}
            </div>
            {/* Note */}
            <div style={{ background: activeTabData.color + '0d', borderRadius: 6, padding: '24px', border: `1px solid ${activeTabData.color}33` }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: activeTabData.color, letterSpacing: '0.08em', fontFamily: "'Inter', sans-serif", marginBottom: 12 }}>주의 사항</div>
              <p style={{ fontSize: 14, color: C.text, fontFamily: "'Noto Sans KR', sans-serif", lineHeight: 1.8 }}>{activeTabData.note}</p>
              {activeTab === 2 &&
              <button onClick={() => onNavigate('appointment')} style={{
                marginTop: 20, background: C.red, color: '#fff', border: 'none',
                padding: '12px 20px', borderRadius: 4, cursor: 'pointer',
                fontFamily: "'Noto Sans KR', sans-serif", fontSize: 13, fontWeight: 700
              }}>즉시 응급 예약 →</button>
              }
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section style={{ padding: '60px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionTitle theme={theme} sub="서해한결의료원의 체계적인 화상 치료 프로세스입니다.">치료 프로세스</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {process.map((p, i) =>
            <div key={i} style={{
              padding: '24px', background: C.bg, borderRadius: 6,
              borderLeft: `3px solid ${i < 2 ? C.coral : i < 4 ? C.warning : C.navy}`
            }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 24, fontWeight: 800, color: C.border, marginBottom: 12 }}>{p.n}</div>
                <h3 style={{ fontFamily: th.headingFont, fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* HBOT CTA */}
      <section style={{ background: C.navy, padding: '48px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontFamily: th.headingFont, fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 8 }}>HBOT 고압산소 병행 치료</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', fontFamily: "'Noto Sans KR', sans-serif" }}>고압산소치료는 화상 창상 회복 보조 및 감염 관리에 활용됩니다.</p>
          </div>
          <button onClick={() => onNavigate('hbot')} style={{
            background: C.coral, color: '#fff', border: 'none', padding: '14px 28px',
            borderRadius: 4, cursor: 'pointer', fontFamily: "'Noto Sans KR', sans-serif",
            fontSize: 14, fontWeight: 700, whiteSpace: 'nowrap', transition: 'all 0.15s'
          }}>HBOT 자세히 보기 →</button>
        </div>
      </section>
    </div>);

}

// ─────────────────────────────────────────
//  HBOT PAGE
// ─────────────────────────────────────────
function HBOTPage({ onNavigate, theme }) {
  const { useState } = React;
  const th = THEMES[theme];
  const [openFaq, setOpenFaq] = useState(null);

  const indications = [
  { icon: '🔥', title: '화상 및 창상 치료', desc: '2도 이상 화상, 당뇨발, 압박 창상 등 난치성 창상' },
  { icon: '🤿', title: '감압증', desc: '잠수병 및 산업 잠수 후 발생한 감압 질환' },
  { icon: '💨', title: '일산화탄소 중독', desc: '가스 중독 환자의 긴급 고압산소 치료' },
  { icon: '🦷', title: '골수염 · 방사선 괴사', desc: '만성 골수염, 방사선 치료 후 조직 괴사' },
  { icon: '🧠', title: '뇌졸중 후 재활', desc: '뇌경색 후 기능 회복 보조 치료' },
  { icon: '⚡', title: '연조직 감염', desc: '괴사성 근막염, 가스 괴저 응급 치료' }];


  const specs = [
  { label: '챔버 타입', value: '다인용 (Hard Shell)' },
  { label: '최대 수용', value: '3인 동시 치료' },
  { label: '치료 압력', value: '2.0–3.0 ATA' },
  { label: '표준 치료 시간', value: '90–120분 / 1회' },
  { label: '공급 산소', value: '의료용 산소 (식약처 허가 규격)' },
  { label: '내부 의료진', value: '텐더 상주' }];


  const faqs = [
  { q: '고압산소치료는 아픈가요?', a: '대부분의 환자분은 통증을 느끼지 않습니다. 귀나 부비동에 압력 변화를 느낄 수 있으나, 이퀄라이징으로 해결됩니다.' },
  { q: '한 번에 몇 회 치료가 필요한가요?', a: '질환에 따라 다르며, 화상 치료의 경우 보통 20–40회, 감압증은 1–5회 집중 치료가 표준입니다.' },
  { q: '치료 중 할 수 있는 것이 있나요?', a: '챔버 안에서 휴식, 독서, TV 시청이 가능합니다. 의료진이 항상 모니터링합니다.' },
  { q: '건강보험 적용이 되나요?', a: '적응증에 해당하는 경우 건강보험 급여가 적용됩니다. 내원 시 보험 적용 여부를 확인해 드립니다.' }];


  return (
    <div>
      <PageHero
        title="HBOT 고압산소치료 센터"
        subtitle="고압 환경에서 의료용 산소를 공급하여 창상 회복 보조에 활용되는 치료입니다."
        breadcrumb={[{ label: '홈', page: 'home' }, { label: '진료 센터' }, { label: 'HBOT 고압산소치료' }]}
        onNavigate={onNavigate} theme={theme} />
      

      {/* What is HBOT */}
      <section style={{ padding: '60px 32px', background: th.altBg }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <SectionTitle theme={theme} sub="고압산소치료(Hyperbaric Oxygen Therapy)">HBOT란?</SectionTitle>
            <p style={{ fontSize: 15, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", lineHeight: 1.9, marginBottom: 20 }}>
              고압산소치료는 특수 챔버 안에서 대기압보다 높은 기압(2–3 ATA) 환경에 의료용 산소를 공급하는 치료법입니다.
            </p>
            <p style={{ fontSize: 15, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", lineHeight: 1.9, marginBottom: 28 }}>
              고압 환경에서 공급된 산소는 혈장에 용해되어 조직에 전달되며, 창상 회복 보조 등에 활용되는 치료법입니다.
            </p>
            {[
            { label: '치료 압력', value: '2–3 ATA' },
            { label: '표준 치료 시간', value: '90–120분 / 1회' },
            { label: '다인용 챔버', value: '3인 동시 치료' }].
            map((s, i) =>
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '10px 0', borderBottom: `1px solid ${C.borderLight}` }}>
                <span style={{ fontSize: 18, fontWeight: 800, color: C.coral, fontFamily: "'Inter', sans-serif", width: 80 }}>{s.value}</span>
                <span style={{ fontSize: 14, color: C.text, fontFamily: "'Noto Sans KR', sans-serif" }}>{s.label}</span>
              </div>
            )}
          </div>
          <div style={{
            position: 'relative',
            borderRadius: 8,
            border: `1px solid ${C.border}`,
            overflow: 'hidden',
            height: 340,
            background: C.bg
          }}>
            <img
              src="images/hyperbaric-oxygen-therapy-chamber.jpg"
              alt="다인용 고압산소 챔버"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
        </div>
      </section>

      {/* Indications */}
      <section style={{ padding: '60px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionTitle theme={theme} sub="다음 질환에 고압산소치료가 활용됩니다.">치료 적응증</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {indications.map((ind, i) =>
            <div key={i} style={{ padding: '24px', background: C.bg, borderRadius: 6, border: `1px solid ${C.borderLight}`, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 28, flexShrink: 0 }}>{ind.icon}</span>
                <div>
                  <h3 style={{ fontFamily: th.headingFont, fontSize: 15, fontWeight: 700, color: C.navy, marginBottom: 6 }}>{ind.title}</h3>
                  <p style={{ fontSize: 13, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", lineHeight: 1.6 }}>{ind.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Equipment Specs + FAQ */}
      <section style={{ padding: '60px 32px', background: th.altBg }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>
            <SectionTitle theme={theme}>장비 사양</SectionTitle>
            <div style={{ background: '#fff', borderRadius: 6, border: `1px solid ${C.borderLight}`, overflow: 'hidden' }}>
              {specs.map((s, i) =>
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', padding: '14px 20px',
                borderBottom: i < specs.length - 1 ? `1px solid ${C.borderLight}` : 'none',
                background: i % 2 === 0 ? '#fff' : C.bg
              }}>
                  <span style={{ fontSize: 13, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif" }}>{s.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: C.navy, fontFamily: "'Inter', sans-serif" }}>{s.value}</span>
                </div>
              )}
            </div>
          </div>
          <div>
            <SectionTitle theme={theme}>자주 묻는 질문</SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {faqs.map((faq, i) =>
              <div key={i} style={{ background: '#fff', borderRadius: 6, border: `1px solid ${C.borderLight}`, overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                  width: '100%', padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  fontFamily: "'Noto Sans KR', sans-serif", fontSize: 14, fontWeight: 600, color: C.navy, textAlign: 'left'
                }}>
                    {faq.q}
                    <span style={{ color: C.coral, fontSize: 18, flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i &&
                <div style={{ padding: '0 20px 16px', fontSize: 13, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", lineHeight: 1.7 }}>{faq.a}</div>
                }
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>);

}

// ─────────────────────────────────────────
//  EQUIPMENT PAGE
// ─────────────────────────────────────────
function EquipmentPage({ onNavigate, theme }) {
  const { useState } = React;
  const th = THEMES[theme];
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
  { id: 'all', label: '전체' },
  { id: 'imaging', label: '영상 진단' },
  { id: 'burn', label: '화상 치료' },
  { id: 'monitoring', label: '모니터링' }];


  const equipment = [
  { name: '128ch-CT', spec: '128채널 멀티슬라이스', category: 'imaging', status: '정상 가동' },
  { name: '외상 초음파', spec: '심장, 장기 외상성 초음파', category: 'imaging', status: '사용 가능' },
  { name: 'Digital X-ray', spec: '2대 운영 중', category: 'imaging', status: '정상 가동' },
  { name: 'C-arm', spec: '이동식 실시간 투시 영상장비', category: 'imaging', status: '정상 가동' },
  { name: '고압산소 챔버', spec: '3인용 다인용', category: 'burn', status: '운영 중' },
  { name: '레이저 치료기', spec: 'CO₂ / Er:YAG', category: 'burn', status: '사용 가능' },
  { name: '인공호흡기', spec: '4대 보유', category: 'monitoring', status: '정상 가동' },
  { name: '내시경 진단기', spec: '검진, 소화기 질환 전용', category: 'imaging', status: '예약 필요' }];


  const filtered = activeCategory === 'all' ? equipment : equipment.filter((e) => e.category === activeCategory);

  return (
    <div>
      <PageHero
        title="의료 장비 소개"
        subtitle="장비와 즉각적인 가동 체계로 응급 환자에게 신속한 치료를 제공합니다."
        breadcrumb={[{ label: '홈', page: 'home' }, { label: '장비 소개' }]}
        onNavigate={onNavigate} theme={theme} />
      

      <section style={{ padding: '60px 32px 80px', background: th.altBg }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Category filter */}
          <div className="h-filter-tabs" style={{ display: 'flex', gap: 8, marginBottom: 40 }}>
            {categories.map((cat) =>
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)} style={{
              padding: '9px 18px', borderRadius: 4, cursor: 'pointer',
              border: activeCategory === cat.id ? `2px solid ${C.navy}` : `1px solid ${C.border}`,
              background: activeCategory === cat.id ? C.navy : '#fff',
              color: activeCategory === cat.id ? '#fff' : C.textMuted,
              fontFamily: "'Noto Sans KR', sans-serif", fontSize: 13, fontWeight: activeCategory === cat.id ? 700 : 400,
              transition: 'all 0.15s'
            }}>{cat.label}</button>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {filtered.map((eq, i) =>
            <div key={i} style={{ background: '#fff', borderRadius: 6, padding: '24px', ...th.cardStyle, transition: 'all 0.2s' }}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, th.cardHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, th.cardStyle)}>
              
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontFamily: th.headingFont, fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 2 }}>{eq.name}</h3>
                    <div style={{ fontSize: 11, color: C.textMuted, fontFamily: "'Inter', sans-serif" }}>{eq.spec}</div>
                  </div>
                  <StatusPill status={eq.status} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>);

}

// ─────────────────────────────────────────
//  WORKERS COMP PAGE
// ─────────────────────────────────────────
function WorkersCompPage({ onNavigate, theme }) {
  const th = THEMES[theme];

  const coverage = ['화상 및 열상 (업무 중 발생)', '기계·설비 접촉에 의한 외상', '추락·충돌 사고', '유해물질 노출 화학 화상', '작업 중 골절 및 관절 손상', '직업성 피부 질환'];
  const steps = [
  { n: '01', title: '사고 발생 즉시 신고', desc: '사업주에게 업무상 재해 사실을 즉시 보고하고 사고 경위서를 작성하세요.', action: null },
  { n: '02', title: '응급 치료 수진', desc: '서해한결의료원 응급실로 내원하면 산재 의료기관 지정 병원으로서 즉시 치료를 시작합니다.', action: '응급 예약하기' },
  { n: '03', title: '산재 요양 신청', desc: '근로복지공단에 요양급여 신청서 제출. 병원 원무과에서 관련 서류 발급을 도와드립니다.', action: null },
  { n: '04', title: '치료 및 보상 진행', desc: '요양 승인 후 치료비 전액 지원. 4일 이상 휴업 시 휴업급여(평균임금 70%) 지급.', action: null }];

  const docs = ['요양급여신청서 (근로복지공단 양식)', '초진 소견서 (병원 발급)', '사고 경위서 (사업주 확인)', '재직 증명서 또는 고용 계약서', '목격자 진술서 (있는 경우)', '사고 현장 사진 (있는 경우)'];

  return (
    <div>
      <PageHero
        title="산재 보험 안내"
        subtitle="업무 중 화상·외상 사고 발생 시 산재 보험 처리 절차와 지원 범위를 안내해 드립니다."
        breadcrumb={[{ label: '홈', page: 'home' }, { label: '진료 안내' }, { label: '산재 보험 안내' }]}
        onNavigate={onNavigate} theme={theme} />
      

      <section style={{ padding: '60px 32px', background: th.altBg }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 60 }}>
            <div>
              <SectionTitle theme={theme} sub="서해한결의료원은 근로복지공단 지정 산재 의료기관입니다.">산재 보험 적용 범위</SectionTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {coverage.map((item, i) =>
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: '#fff', borderRadius: 4, border: `1px solid ${C.borderLight}` }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: C.coral, flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: C.text, fontFamily: "'Noto Sans KR', sans-serif" }}>{item}</span>
                  </div>
                )}
              </div>
            </div>
            <div>
              <SectionTitle theme={theme} sub="필요 서류를 미리 준비하시면 신청이 빨라집니다.">제출 서류</SectionTitle>
              <div style={{ background: '#fff', borderRadius: 6, border: `1px solid ${C.borderLight}`, overflow: 'hidden' }}>
                {docs.map((doc, i) =>
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 14, padding: '13px 18px',
                  borderBottom: i < docs.length - 1 ? `1px solid ${C.borderLight}` : 'none',
                  background: i % 2 === 0 ? '#fff' : C.bg
                }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, color: C.navy, background: C.navy + '12', padding: '2px 7px', borderRadius: 3 }}>{String(i + 1).padStart(2, '0')}</span>
                    <span style={{ fontSize: 13, color: C.text, fontFamily: "'Noto Sans KR', sans-serif" }}>{doc}</span>
                  </div>
                )}
              </div>
              <p style={{ marginTop: 12, fontSize: 12, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif" }}>※ 원무과 (1층)에서 서류 발급 및 신청 도움을 받으실 수 있습니다.</p>
            </div>
          </div>

          <SectionTitle theme={theme} sub="사고 발생부터 보상 수령까지 4단계">신청 절차</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {steps.map((s, i) =>
            <div key={i} style={{ background: '#fff', borderRadius: 6, padding: '24px 20px', border: `1px solid ${C.borderLight}`, borderTop: `3px solid ${C.coral}` }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 24, fontWeight: 800, color: C.coral + '60', marginBottom: 12 }}>{s.n}</div>
                <h3 style={{ fontFamily: th.headingFont, fontSize: 15, fontWeight: 700, color: C.navy, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", lineHeight: 1.7, marginBottom: s.action ? 16 : 0 }}>{s.desc}</p>
                {s.action &&
              <button onClick={() => onNavigate('appointment')} style={{
                padding: '9px 16px', background: C.red, color: '#fff', border: 'none',
                borderRadius: 4, cursor: 'pointer', fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: 12, fontWeight: 700
              }}>{s.action} →</button>
              }
              </div>
            )}
          </div>
        </div>
      </section>
    </div>);

}

// ─────────────────────────────────────────
//  DIRECTIONS PAGE
// ─────────────────────────────────────────
function DirectionsPage({ onNavigate, theme }) {
  const th = THEMES[theme];

  const transport = [
  {
    type: '', icon: '',
    lines: [
    { name: '', detail: '' },
    { name: '', detail: '' }]

  },
  {
    type: '버스', icon: '🚌',
    lines: [
    { name: '간선 (파랑)', detail: '146, 341, 360 — 의료원 앞 정류장' },
    { name: '지선 (초록)', detail: '4211, 4318 — 의료원 앞 정류장' }]

  },
  {
    type: '자가용', icon: '🚗',
    lines: [
    { name: '서산IC 방향', detail: '서산로 → 00길 우회전 200m' },
    { name: '주차장', detail: '건물 지하 1–3층 (100면 / 최초 30분 무료)' }]

  }];


  const hours = [
  { dept: '응급실', time: '24시간 연중무휴', note: '' },
  { dept: '외래 진료', time: '월–금 09:00–17:00', note: '토요일 09:00–13:00' },
  { dept: '입원 원무', time: '월–금 09:00–18:00', note: '' },
  { dept: '야간 당직', time: '평일 17:00 – 익일 09:00', note: '응급 관련 문의 가능' }];


  return (
    <div>
      <PageHero
        title="오시는 길"
        subtitle="서울특별시 강남구 테헤란로 00길 00 · 응급실은 24시간 운영합니다."
        breadcrumb={[{ label: '홈', page: 'home' }, { label: '오시는 길' }]}
        onNavigate={onNavigate} theme={theme} />
      

      <section style={{ padding: '60px 32px 80px', background: th.altBg }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 60 }}>
            {/* Map placeholder */}
            <div>
              <div style={{
                background: `repeating-linear-gradient(45deg, #e8ecf0 0px, #e8ecf0 6px, #f0f4f8 6px, #f0f4f8 12px)`,
                borderRadius: 8, height: 380, display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: 12, border: `1px solid ${C.border}`
              }}>
                <div style={{ fontSize: 48 }}>📍</div>
                <div style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: 14, color: C.textMuted, textAlign: 'center', lineHeight: 1.8 }}>
                  충남 서산시<br />00길 00<br />
                  <span style={{ fontSize: 12 }}>서해안 고속도로 서산IC에서 차로 5분, 서산 시내에서 10분 </span>
                </div>
              </div>
            </div>
            {/* Address & hours */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ background: '#fff', borderRadius: 6, padding: '24px', border: `1px solid ${C.borderLight}` }}>
                <h3 style={{ fontFamily: th.headingFont, fontSize: 17, fontWeight: 700, color: C.navy, marginBottom: 16 }}>병원 정보</h3>
                {[
                { label: '주소', value: '충청남도 서산시 00길 00' },
                { label: '대표 전화', value: '041-0000-0000' },
                { label: '응급 직통', value: '041-0000-0000' },
                { label: '팩스', value: '041-0000-0000' },
                { label: '이메일', value: 'info@seohaehanggyeol.kr' }].
                map((r, i) =>
                <div key={i} style={{ display: 'flex', gap: 20, padding: '9px 0', borderBottom: i < 4 ? `1px solid ${C.borderLight}` : 'none' }}>
                    <span style={{ fontSize: 12, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", width: 70, flexShrink: 0 }}>{r.label}</span>
                    <span style={{ fontSize: 13, color: C.navy, fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{r.value}</span>
                  </div>
                )}
              </div>
              <div style={{ background: '#fff', borderRadius: 6, padding: '24px', border: `1px solid ${C.borderLight}` }}>
                <h3 style={{ fontFamily: th.headingFont, fontSize: 17, fontWeight: 700, color: C.navy, marginBottom: 16 }}>운영 시간</h3>
                {hours.map((h, i) =>
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: i < hours.length - 1 ? `1px solid ${C.borderLight}` : 'none', alignItems: 'center' }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: C.text, fontFamily: "'Noto Sans KR', sans-serif", width: 90 }}>{h.dept}</span>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 13, color: C.navy, fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>{h.time}</div>
                      {h.note && <div style={{ fontSize: 11, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif" }}>{h.note}</div>}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Transport options */}
          <SectionTitle theme={theme} sub="대중교통 및 자가용 이용 안내">교통 안내</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {transport.map((t, i) =>
            <div key={i} style={{ background: '#fff', borderRadius: 6, padding: '24px', border: `1px solid ${C.borderLight}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                  <span style={{ fontSize: 24 }}>{t.icon}</span>
                  <h3 style={{ fontFamily: th.headingFont, fontSize: 16, fontWeight: 700, color: C.navy }}>{t.type}</h3>
                </div>
                {t.lines.map((l, j) =>
              <div key={j} style={{ padding: '10px 0', borderBottom: j < t.lines.length - 1 ? `1px solid ${C.borderLight}` : 'none' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 3 }}>{l.name}</div>
                    <div style={{ fontSize: 12, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif" }}>{l.detail}</div>
                  </div>
              )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>);

}

Object.assign(window, { BurnTreatmentPage, HBOTPage, EquipmentPage, WorkersCompPage, DirectionsPage });