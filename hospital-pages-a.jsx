// hospital-pages-a.jsx — HomePage + ERStatusPage

function HomePage({ onNavigate, theme }) {
  const th = THEMES[theme];

  const centers = [
  { icon: '', title: '화상 치료 센터', sub: '중증 화상 전문 집중 치료', desc: '1–3도 화상의 응급 처치부터 피부 이식 재건까지. 전문 화상외과 의료진 24시간 대기.', page: 'burn-treatment', badge: '화상외과' },
  { icon: '', title: '외상·응급 센터', sub: '중증 외상 골든타임 확보', desc: '교통사고, 추락, 다발성 외상 환자의 신속 평가 및 응급 처치. 외상 전문의 상주.', page: 'er-status', badge: '외상외과' },
  { icon: '', title: 'HBOT 고압산소치료', sub: '고압산소 치료 전문 센터', desc: '화상 회복 및 난치성 상처, 감압증 치료를 위한 다인용 고압산소 챔버 운영.', page: 'hbot', badge: 'HBOT' },
  { icon: '', title: '응급 수술센터', sub: '24시간 응급 수술 가능', desc: '2개 응급 수술실 및 마취과 전문의 상주. CT, MRI 즉시 판독 체계.', page: 'er-status', badge: '응급의학과' }];


  const doctors = [
  { name: '박준호', title: '원장', dept: '응급의학과 전문의', career: '경력 15년', cred: '단국대의대 응급의학 전공의 수료' },
  { name: '최준락', title: '원장', dept: '화상외과 전문의', career: '경력 18년', cred: '순천향의대 외과학 박사' },
  { name: '하태솔', title: '과장', dept: '화상재건외과', career: '경력 12년', cred: '한림대학교 한강성심병원 화상외과 전문의' }];


  const stats = [
  { n: '1,000+', label: '연간 치료 환자' },
  { n: '98.2%', label: '화상 골든 타임내 시술' },
  { n: '24H', label: '응급 운영 체계' },
  { n: '15년', label: '전문 진료 연수' }];


  return (
    <div>
      {/* ── Hero ── */}
      <section className="h-home-hero" style={{
        height: '75vh',
        background: th.heroGradient,
        display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden'
      }}>
        {/* Grid pattern overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }} />
        {/* Coral accent circle (Variation A only) */}
        {theme === 'A' &&
        <div style={{
          position: 'absolute', right: -120, top: '50%', transform: 'translateY(-50%)',
          width: 600, height: 600, borderRadius: '50%',
          border: '1px solid rgba(232,83,58,0.12)',
          pointerEvents: 'none'
        }} />
        }
        {theme === 'B' &&
        <div style={{
          position: 'absolute', right: 80, top: '50%', transform: 'translateY(-50%)',
          width: 380, height: 380, borderRadius: '50%',
          background: 'rgba(232,83,58,0.06)',
          pointerEvents: 'none'
        }} />
        }

        <div style={{ 
          display: 'flex', 
          width: '100%', 
          height: '100%',
          position: 'relative', 
          zIndex: 1 
        }}>
          {/* Left text content - 55% */}
          <div style={{
            width: '55%',
            display: 'flex',
            alignItems: 'center',
            padding: '0 32px 0 32px'
          }} className="hero-left-content">
            <div style={{ maxWidth: 560 }}>
              {/* Live badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '7px 14px', background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)', borderRadius: 3,
                marginBottom: 28
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: C.success, display: 'inline-block', animation: 'hPulse 2s infinite' }} />
                <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 12, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                  LIVE — 응급실 지금 수용 가능
                </span>
              </div>

              <h1 style={{
                fontFamily: th.headingFont,
                fontSize: 'clamp(40px, 5vw, 60px)',
                fontWeight: 800, color: '#fff',
                lineHeight: 1.1, marginBottom: 14, letterSpacing: '-0.02em'
              }}>서해한결의료원</h1>

              <div style={{
                fontSize: 18, color: 'rgba(255,255,255,0.65)',
                fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 300,
                marginBottom: 24, letterSpacing: '0.06em'
              }}>화상 · 외상 전문 응급의료기관</div>

              <p style={{
                fontSize: 15, color: 'rgba(255,255,255,0.6)',
                fontFamily: "'Noto Sans KR', sans-serif", lineHeight: 1.8,
                marginBottom: 40
              }}>
                중증 화상 및 외상 환자를 위한 24시간 전문 응급의료기관.<br />
                최고 수준의 의료진과 첨단 장비로 서해안의 골든타임을 지킵니다.
              </p>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}>
                <button onClick={() => onNavigate('appointment')} style={{
                  background: C.red, color: '#fff', border: 'none',
                  padding: '15px 32px', borderRadius: 4, cursor: 'pointer',
                  fontFamily: "'Noto Sans KR', sans-serif", fontSize: 15, fontWeight: 700,
                  transition: 'all 0.15s', letterSpacing: '0.02em'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#a82e20'}
                onMouseLeave={(e) => e.currentTarget.style.background = C.red}>
                  응급 예약하기 →</button>
                <button onClick={() => onNavigate('er-status')} style={{
                  background: 'transparent', color: '#fff',
                  border: '1px solid rgba(255,255,255,0.35)',
                  padding: '15px 32px', borderRadius: 4, cursor: 'pointer',
                  fontFamily: "'Noto Sans KR', sans-serif", fontSize: 15, fontWeight: 400,
                  transition: 'all 0.15s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                  응급실 현황 →</button>
              </div>

              {/* Stats row */}
              <div className="h-hero-stats" style={{
                display: 'flex', gap: 0, maxWidth: 520,
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                {stats.map((s, i) =>
                <div key={i} style={{
                  flex: 1, padding: '16px 18px',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  borderTop: `2px solid ${i === 0 ? C.coral : 'transparent'}`
                }}>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 20, fontWeight: 700, color: '#fff', lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 5 }}>{s.label}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right image area - 45% (hidden on mobile) */}
          <div style={{
            width: '45%',
            height: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'stretch'
          }} className="hero-right-image">
            {/* Image with fade gradient on left */}
            <img 
              src="surgeon-scrubs_ET9TSSX4H6_upscayl_4x_high-fidelity-4x.jpg"
              alt="Surgeon"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top'
              }}
            />
            {/* Left-side navy fade gradient */}
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '120px',
              background: `linear-gradient(90deg, #0f2744 0%, transparent 100%)`,
              pointerEvents: 'none'
            }} />
          </div>
        </div>
      </section>

      {/* ── ER Status Strip ── */}
      <div style={{ background: '#061729', padding: '0 32px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="h-er-strip" style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'flex', alignItems: 'stretch', height: 64
        }}>
          <div style={{
            padding: '0 24px 0 0', display: 'flex', alignItems: 'center',
            borderRight: '1px solid rgba(255,255,255,0.08)', marginRight: 24,
            fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)',
            fontFamily: "'Inter', sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap'
          }}>실시간 현황</div>
          {[
          { label: '응급실 수용', status: '수용 가능' },
          { label: '화상 치료실', status: '치료 가능' },
          { label: '응급 수술실', status: '사용 중' },
          { label: '응급수술팀', status: '대기 중' },
          { label: '평균 대기', status: '약 12분', color: '#94a3b8' }].
          map((item, i) => {
            const color = item.color || getStatusColor(item.status);
            return (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 20,
                padding: '0 24px',
                borderRight: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none'
              }}>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: "'Inter', sans-serif", marginBottom: 3 }}>{item.label}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, display: 'inline-block', animation: 'hPulse 2s infinite' }} />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color }}>{item.status}</span>
                  </div>
                </div>
              </div>
            );
          })}
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <button onClick={() => onNavigate('er-status')} style={{
              background: 'none', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)',
              padding: '8px 16px', borderRadius: 3, cursor: 'pointer',
              fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600,
              transition: 'all 0.15s', letterSpacing: '0.04em'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}>
              상세 현황 →</button>
          </div>
        </div>
      </div>

      {/* ── Specialist Centers ── */}
      <section style={{ padding: '80px 32px', background: th.altBg }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionTitle theme={theme} sub="화상 및 외상 전문 진료센터로 신속하고 정확한 치료를 제공합니다.">전문 센터</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {centers.map((c, i) =>
            <button key={i} onClick={() => onNavigate(c.page)} style={{
              textAlign: 'left', background: '#fff', padding: '28px 24px',
              borderRadius: 6, cursor: 'pointer',
              transition: 'all 0.2s', display: 'flex', flexDirection: 'column',
              ...th.cardStyle
            }}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, th.cardHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, th.cardStyle)}>
              
                <div style={{ fontSize: 28, marginBottom: 14 }}>{c.icon}</div>
                <div style={{
                fontSize: 10, fontWeight: 700, color: C.coral, letterSpacing: '0.08em',
                fontFamily: "'Inter', sans-serif", marginBottom: 6, textTransform: 'uppercase'
              }}>{c.badge}</div>
                <h3 style={{
                fontFamily: th.headingFont, fontSize: 17, fontWeight: 700,
                color: C.navy, marginBottom: 4, lineHeight: 1.3
              }}>{c.title}</h3>
                <div style={{ fontSize: 12, color: C.coral, fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 12 }}>{c.sub}</div>
                <p style={{
                fontSize: 13, color: C.textMuted, lineHeight: 1.7,
                fontFamily: "'Noto Sans KR', sans-serif", flex: 1
              }}>{c.desc}</p>
                <div style={{ marginTop: 20, fontSize: 13, color: C.navy, fontWeight: 600, fontFamily: "'Noto Sans KR', sans-serif" }}>자세히 보기 →</div>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Featured Doctors ── */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
            <SectionTitle theme={theme} sub="각 분야 최고 전문의가 직접 진료합니다.">전문 의료진</SectionTitle>
            <button onClick={() => onNavigate('medical-team')} style={{
              background: 'none', border: `1px solid ${C.border}`, color: C.textMuted,
              padding: '9px 18px', borderRadius: 4, cursor: 'pointer',
              fontFamily: "'Noto Sans KR', sans-serif", fontSize: 13, transition: 'all 0.15s'
            }}
            onMouseEnter={(e) => {e.currentTarget.style.borderColor = C.navy;e.currentTarget.style.color = C.navy;}}
            onMouseLeave={(e) => {e.currentTarget.style.borderColor = C.border;e.currentTarget.style.color = C.textMuted;}}>
              전체 의료진 보기 →</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {doctors.map((doc, i) =>
            <div key={i} style={{
              display: 'flex', gap: 20, padding: '28px 24px',
              background: th.altBg === '#fff' ? C.bg : '#fff',
              borderRadius: 6, ...th.cardStyle, transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, th.cardHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, th.cardStyle)}>
              
                <DocAvatar name={doc.name} size={72} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, color: C.coral, fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: '0.06em', marginBottom: 4 }}>{doc.dept}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 6 }}>
                    <span style={{ fontFamily: th.headingFont, fontSize: 18, fontWeight: 700, color: C.navy }}>{doc.name}</span>
                    <span style={{ fontSize: 12, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif" }}>{doc.title}</span>
                  </div>
                  <div style={{ fontSize: 12, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", lineHeight: 1.6 }}>{doc.cred}</div>
                  <div style={{ marginTop: 8 }}>
                    <span style={{ fontSize: 11, color: C.navy, fontFamily: "'Inter', sans-serif", fontWeight: 600, background: C.navy + '10', padding: '3px 8px', borderRadius: 3 }}>{doc.career}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Emergency CTA ── */}
      <section style={{ background: C.navy, padding: '64px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontFamily: "'Inter', sans-serif", letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>24 HOURS EMERGENCY</div>
          <h2 style={{
            fontFamily: th.headingFont, fontSize: 32, fontWeight: 700,
            color: '#fff', marginBottom: 12, lineHeight: 1.3
          }}>중증 화상·외상, 지금 바로 연락하세요</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 36, fontFamily: "'Noto Sans KR', sans-serif", lineHeight: 1.7 }}>
            골든타임이 생사를 결정합니다. 24시간 응급 전문의가 대기 중입니다.
          </p>
          <div className="h-phone-cta" style={{
            display: 'inline-block',
            fontFamily: "'Inter', sans-serif", fontSize: 42, fontWeight: 800,
            color: '#fff', letterSpacing: '-0.01em', marginBottom: 32
          }}>041-0000-0000</div>
          <br />
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
            <button onClick={() => onNavigate('appointment')} style={{
              background: C.red, color: '#fff', border: 'none', padding: '14px 28px',
              borderRadius: 4, cursor: 'pointer', fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: 14, fontWeight: 700, transition: 'all 0.15s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#a82e20'}
            onMouseLeave={(e) => e.currentTarget.style.background = C.red}>
              응급 예약하기</button>
            <button onClick={() => onNavigate('er-status')} style={{
              background: 'transparent', color: '#fff', padding: '14px 28px',
              border: '1px solid rgba(255,255,255,0.3)', borderRadius: 4, cursor: 'pointer',
              fontFamily: "'Noto Sans KR', sans-serif", fontSize: 14, fontWeight: 400,
              transition: 'all 0.15s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
              응급실 현황 확인</button>
          </div>
        </div>
      </section>
    </div>);

}

// ─────────────────────────────────────────
//  ER STATUS PAGE
// ─────────────────────────────────────────
function ERStatusPage({ onNavigate, theme }) {
  const th = THEMES[theme];

  const statusCards = [
  {
    icon: '', title: '응급실 수용 현황', status: '수용 가능',
    items: [
    { label: '현재 대기 환자', value: '2명' },
    { label: '수용 가능 병상', value: '8개' },
    { label: '평균 대기 시간', value: '약 12분' },
    { label: '응급 등급 1순위', value: '즉시 배정' }]

  },
  {
    icon: '', title: '화상 치료실', status: '치료 가능',
    items: [
    { label: '운영 중 병상', value: '3 / 5개' },
    { label: '중증 화상 즉시 수용', value: '가능' },
    { label: 'HBOT 병행 치료', value: '대기 1건' },
    { label: '전담 의료진', value: '상주 중' }]

  },
  {
    icon: '', title: '응급 수술실', status: '사용 중',
    items: [
    { label: 'OR1 (진행 중)', value: '~60분', alert: true },
    { label: 'OR2', value: '대기 가능' },
    { label: 'C-arm (이동형 X선)', value: '가능' },
    { label: '마취과 전문의', value: '상주 중' }]

  }];


  const staff = [
  { name: '박준호', title: '원장', dept: '응급의학과', status: '진료 중', color: C.success },
  { name: '최준락', title: '원장', dept: '화상외과', status: '진료 중', color: C.success },
  { name: '하태솔', title: '과장', dept: '화상재건외과', status: '대기 중', color: C.success },
  { name: '윤경준', title: '원장', dept: '정형외과', status: '진료 중', color: C.success }];


  const equipment = [
  { name: 'CT (128채널)', status: '정상 가동' },
  { name: 'MRI', status: '외부 의뢰 가능: 15분' },
  { name: 'Digital X-ray', status: '정상 가동' },
  { name: '혈관조영장비', status: '정상 가동' },
  { name: '초음파진단기', status: '점검 중' },
  { name: '심장초음파', status: '정상 가동' }];


  const steps = [
  { n: '01', title: '접수 및 예진', desc: '응급실 입구 원무팀에서 접수 후 예진(Triage)을 받습니다.' },
  { n: '02', title: '진료 및 검사', desc: '중증도 순위에 따라 의료진의 진료와 필요한 응급 검사가 진행됩니다.' },
  { n: '03', title: '입원 또는 귀가', desc: '검사 결과에 따라 전문 센터로의 입원 결정 또는 처방 후 귀가합니다.' }];


  return (
    <div>
      <PageHero
        title="응급실 실시간 현황"
        subtitle="정확하고 신속한 정보로 응급 환자의 골든타임을 확보합니다."
        breadcrumb={[{ label: '홈', page: 'home' }, { label: '응급실 현황' }]}
        onNavigate={onNavigate} theme={theme} />
      

      {/* Update bar */}
      <div style={{ background: '#061729', padding: '0 32px', height: 48, display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: C.success, display: 'inline-block', animation: 'hPulse 2s infinite' }} />
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>LIVE</span>
          </div>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontFamily: "'Noto Sans KR', sans-serif" }}>
            마지막 업데이트: 오후 1:27 — 30초마다 자동 갱신
          </span>
        </div>
      </div>

      {/* Status Cards */}
      <section style={{ padding: '60px 32px', background: th.altBg }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionTitle theme={theme}>현황 대시보드</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {statusCards.map((card, i) =>
            <div key={i} style={{
              background: '#fff', borderRadius: 6, padding: '28px 24px',
              ...th.cardStyle
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div>
                    <div style={{ fontSize: 11, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 4 }}>{card.title}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: getStatusColor(card.status), display: 'inline-block', animation: 'hPulse 2s infinite' }} />
                      <span style={{ fontFamily: th.headingFont, fontSize: 22, fontWeight: 700, color: getStatusColor(card.status) }}>{card.status}</span>
                    </div>
                  </div>
                  <span style={{ fontSize: 28 }}>{card.icon}</span>
                </div>
                <div style={{ borderTop: `1px solid ${C.borderLight}`, paddingTop: 16 }}>
                  {card.items.map((item, j) =>
                <div key={j} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '8px 0',
                  borderBottom: j < card.items.length - 1 ? `1px solid ${C.borderLight}` : 'none'
                }}>
                      <span style={{ fontSize: 13, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif" }}>{item.label}</span>
                      <span style={{
                    fontSize: 13, fontWeight: 700,
                    color: item.alert ? C.red : C.text,
                    fontFamily: "'Inter', sans-serif"
                  }}>{item.value}</span>
                    </div>
                )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Medical Staff */}
      <section style={{ padding: '60px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionTitle theme={theme}>의료진 현재 상태</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {staff.map((s, i) =>
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 16, padding: '20px',
              background: C.bg, borderRadius: 6, ...th.cardStyle
            }}>
                <DocAvatar name={s.name} size={56} />
                <div>
                  <div style={{ fontFamily: th.headingFont, fontSize: 16, fontWeight: 700, color: C.navy }}>{s.name} {s.title}</div>
                  <div style={{ fontSize: 12, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 8 }}>{s.dept}</div>
                  <StatusPill status={s.status} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section style={{ padding: '60px 32px', background: th.altBg }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionTitle theme={theme}>장비 가동 현황</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {equipment.map((eq, i) =>
            <div key={i} style={{
              background: '#fff', padding: '16px 20px', borderRadius: 4,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              ...th.cardStyle
            }}>
                <span style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: 14, fontWeight: 600, color: C.navy }}>{eq.name}</span>
                <StatusPill status={eq.status} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Visit Guide */}
      <section style={{ padding: '60px 32px', background: C.navy }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionTitle theme={theme} center>응급 내원 안내</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
            {steps.map((s, i) =>
            <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                width: 56, height: 56, borderRadius: '50%',
                border: `2px solid ${C.coral}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
                fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 700, color: C.coral
              }}>{s.n}</div>
                <h3 style={{ fontFamily: th.headingFont, fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontFamily: "'Noto Sans KR', sans-serif" }}>{s.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Visitation */}
      <section style={{ padding: '60px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionTitle theme={theme}>면회 안내</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div style={{ padding: '28px 24px', background: C.bg, borderRadius: 6, ...th.cardStyle }}>
              <h4 style={{ fontFamily: th.headingFont, fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 16 }}>면회 시간</h4>
              {[
              { day: '평일', time: '18:00 – 20:00' },
              { day: '주말 · 공휴일', time: '10:00–12:00 / 18:00–20:00' }].
              map((r, i) =>
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '10px 0', borderBottom: i === 0 ? `1px solid ${C.borderLight}` : 'none'
              }}>
                  <span style={{ fontSize: 14, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif" }}>{r.day}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: C.text, fontFamily: "'Inter', sans-serif" }}>{r.time}</span>
                </div>
              )}
              <p style={{ marginTop: 14, fontSize: 12, color: C.red, fontFamily: "'Noto Sans KR', sans-serif" }}>
                * 응급실 내부는 감염 예방을 위해 면회가 엄격히 제한됩니다.
              </p>
            </div>
            <div style={{ padding: '28px 24px', background: C.bg, borderRadius: 6, ...th.cardStyle }}>
              <h4 style={{ fontFamily: th.headingFont, fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 16 }}>면회 수칙</h4>
              {['반드시 마스크를 착용해야 합니다.', '입실 전후 손소독제를 사용해 주십시오.', '만 12세 이하 어린이는 면회를 자제 바랍니다.', '꽃, 화분, 외부 음식물 반입은 금지됩니다.'].map((r, i) =>
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                  <span style={{ color: C.coral, fontSize: 13, flexShrink: 0 }}>·</span>
                  <span style={{ fontSize: 13, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", lineHeight: 1.6 }}>{r}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>);

}

// ─────────────────────────────────────────
//  HBOT PAGE
// ─────────────────────────────────────────
function HBOTPage({ onNavigate, theme }) {
  const th = THEMES[theme];

  const features = [
    { title: '다인용 고압산소 챔버', desc: '최대 12인 동시 치료 가능한 첨단 장비로 안전하고 효율적인 치료를 제공합니다.' },
    { title: '난치성 상처 치료', desc: '당뇨성 족부궤양, 화상 후유증, 골수염 등 난치성 상처의 조직 재생을 촉진합니다.' },
    { title: '감압증 응급 치료', desc: '잠수병, 가스색전증 등 감압증 환자를 위한 24시간 긴급 치료 시스템을 운영합니다.' },
    { title: '화상 회복 가속화', desc: 'HBOT 치료로 화상 환자의 상처 치유 기간을 단축하고 재감염 위험을 감소시킵니다.' }
  ];

  const stats = [
    { n: '500+', label: '연간 HBOT 치료' },
    { n: '92%', label: '상처 치유 성공률' },
    { n: '24H', label: '응급 치료 운영' },
    { n: '12인', label: '동시 치료 가능' }
  ];

  return (
    <div>
      <PageHero
        title="HBOT 고압산소치료"
        subtitle="첨단 고압산소 치료로 난치성 상처를 치유합니다."
        breadcrumb={[{ label: '홈', page: 'home' }, { label: 'HBOT' }]}
        onNavigate={onNavigate} theme={theme} />

      {/* Hero Section with Image */}
      <section className="h-hbot-hero" style={{
        height: '70vh',
        background: th.heroGradient,
        display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }} />

        <div style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            padding: '0 32px'
          }}>
            <div style={{ maxWidth: 520 }}>
              <h2 style={{
                fontFamily: th.headingFont,
                fontSize: 'clamp(32px, 4vw, 50px)',
                fontWeight: 800, color: '#fff',
                lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.02em'
              }}>고압산소 치료의 선두주자</h2>

              <p style={{
                fontSize: 16, color: 'rgba(255,255,255,0.75)',
                fontFamily: "'Noto Sans KR', sans-serif", lineHeight: 1.8,
                marginBottom: 32
              }}>
                최첨단 다인용 고압산소 챔버를 통해 화상 회복, 난치성 상처, 감압증을 안전하고 효과적으로 치료합니다. 전문 의료진이 24시간 대기하고 있습니다.
              </p>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <button onClick={() => onNavigate('appointment')} style={{
                  background: C.red, color: '#fff', border: 'none',
                  padding: '14px 28px', borderRadius: 4, cursor: 'pointer',
                  fontFamily: "'Noto Sans KR', sans-serif", fontSize: 14, fontWeight: 700,
                  transition: 'all 0.15s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#a82e20'}
                onMouseLeave={(e) => e.currentTarget.style.background = C.red}>
                  HBOT 예약하기 →</button>
              </div>
            </div>
          </div>

          <div className="h-hbot-hero-img" style={{
            width: '50%',
            height: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'stretch'
          }}>
            <img
              src="./images/hyperbaric-oxygen-therapy-chamber.jpg"
              alt="HBOT Chamber"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '120px',
              background: `linear-gradient(90deg, #0f2744 0%, transparent 100%)`,
              pointerEvents: 'none'
            }} />
          </div>
        </div>
      </section>

      {/* What is HBOT */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <h2 style={{
                fontFamily: th.headingFont, fontSize: 32, fontWeight: 700,
                color: C.navy, marginBottom: 24
              }}>HBOT란?</h2>
              <p style={{
                fontSize: 14, color: C.textMuted, lineHeight: 1.8,
                fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 24
              }}>
                고압산소치료(Hyperbaric Oxygen Therapy)
              </p>
              <p style={{
                fontSize: 14, color: C.textMuted, lineHeight: 1.8,
                fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 28
              }}>
                고압산소치료는 특수 챔버 안에서 대기압보다 높은 기압(2-3 ATA) 환경에 100% 순수 산소를 공급하는 치료법입니다.
              </p>
              <p style={{
                fontSize: 14, color: C.textMuted, lineHeight: 1.8,
                fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 28
              }}>
                혈액 내 산소 용해도를 극대화하여 손상된 조직에 산소를 공급하게 되어, 세포 재생과 감염 억제 효과를 동시에 제공합니다.
              </p>

              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24
              }}>
                <div>
                  <div style={{
                    fontSize: 28, fontWeight: 800, color: C.red,
                    fontFamily: "'Inter', sans-serif", marginBottom: 4
                  }}>최대<br />2000%</div>
                  <div style={{
                    fontSize: 12, color: C.textMuted,
                    fontFamily: "'Noto Sans KR', sans-serif"
                  }}>혈중 산소 증가</div>
                </div>
                <div>
                  <div style={{
                    fontSize: 24, fontWeight: 700, color: C.red,
                    fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 4
                  }}>최대<br />40% 향상</div>
                  <div style={{
                    fontSize: 12, color: C.textMuted,
                    fontFamily: "'Noto Sans KR', sans-serif"
                  }}>상처 치유 속도 향상</div>
                </div>
              </div>
              <div style={{ marginTop: 24 }}>
                <div style={{
                  fontSize: 14, fontWeight: 700, color: C.red,
                  fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 4
                }}>임상 입증</div>
                <div style={{
                  fontSize: 13, color: C.textMuted,
                  fontFamily: "'Noto Sans KR', sans-serif"
                }}>감염 억제 효과</div>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(200,200,200,0.1) 0%, rgba(150,150,150,0.1) 100%)',
              borderRadius: 8, padding: 0, height: 450,
              position: 'relative', overflow: 'hidden'
            }}>
              <img
                src="./images/hyperbaric-oxygen-therapy-chamber.jpg"
                alt="다인용 고압산소 챔버"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  borderRadius: 8, display: 'block'
                }}
              />
              <div style={{
                position: 'absolute', bottom: 20, right: 20,
                background: 'rgba(255,255,255,0.95)', padding: '12px 16px',
                borderRadius: 4, fontSize: 12, fontWeight: 600,
                color: C.navy, fontFamily: "'Noto Sans KR', sans-serif"
              }}>
                다인용 고압산소 챔버<br />(3인 동시 치료 가능)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 32px', background: th.altBg }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionTitle theme={theme} sub="다양한 질환의 치료와 회복을 돕습니다.">HBOT 치료 효과</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
            {features.map((f, i) =>
            <div key={i} style={{
              padding: '32px 28px', background: '#fff', borderRadius: 8,
              ...th.cardStyle
            }}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, th.cardHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, th.cardStyle)}>
              <h3 style={{
                fontFamily: th.headingFont, fontSize: 18, fontWeight: 700,
                color: C.navy, marginBottom: 12
              }}>{f.title}</h3>
              <p style={{
                fontSize: 14, color: C.textMuted, lineHeight: 1.8,
                fontFamily: "'Noto Sans KR', sans-serif"
              }}>{f.desc}</p>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24
          }}>
            {stats.map((s, i) =>
            <div key={i} style={{
              textAlign: 'center', padding: '32px 24px',
              background: C.bg, borderRadius: 8, ...th.cardStyle
            }}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, th.cardHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, th.cardStyle)}>
              <div style={{
                fontFamily: "'Inter', sans-serif", fontSize: 36, fontWeight: 800,
                color: C.coral, marginBottom: 8
              }}>{s.n}</div>
              <div style={{
                fontFamily: "'Noto Sans KR', sans-serif", fontSize: 13,
                color: C.textMuted
              }}>{s.label}</div>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: C.navy, padding: '60px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: th.headingFont, fontSize: 32, fontWeight: 700,
            color: '#fff', marginBottom: 16, lineHeight: 1.3
          }}>고압산소 치료가 필요하신가요?</h2>
          <p style={{
            fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 32,
            fontFamily: "'Noto Sans KR', sans-serif", lineHeight: 1.7
          }}>
            전문 의료진이 상담 후 맞춤형 치료 계획을 수립해드립니다.
          </p>
          <button onClick={() => onNavigate('appointment')} style={{
            background: C.red, color: '#fff', border: 'none', padding: '14px 32px',
            borderRadius: 4, cursor: 'pointer', fontFamily: "'Noto Sans KR', sans-serif",
            fontSize: 15, fontWeight: 700, transition: 'all 0.15s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#a82e20'}
          onMouseLeave={(e) => e.currentTarget.style.background = C.red}>
            지금 예약하기 →</button>
        </div>
      </section>
    </div>);
}

Object.assign(window, { HomePage, ERStatusPage, HBOTPage });