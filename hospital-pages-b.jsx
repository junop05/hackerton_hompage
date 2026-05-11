// hospital-pages-b.jsx — AppointmentPage + MedicalTeamPage

// ─────────────────────────────────────────
//  APPOINTMENT PAGE (5-step wizard)
// ─────────────────────────────────────────
function AppointmentPage({ onNavigate, theme }) {
  const { useState } = React;
  const th = THEMES[theme];
  const [step, setStep] = useState(1);
  const [sel, setSel] = useState({ dept: null, doctor: null, date: null, time: null });

  const depts = [
    { id: 'er', label: '응급의학과', desc: '응급 외상·화상 초진 및 처치', icon: '🚑' },
    { id: 'burn', label: '화상외과', desc: '중증 화상 수술 및 드레싱', icon: '🔥' },
    { id: 'recon', label: '화상재건외과', desc: '흉터 재건·피부이식 수술', icon: '✂️' },
    { id: 'ortho', label: '정형외과', desc: '외상성 골절·관절 손상', icon: '🦴' },
    { id: 'hbot', label: 'HBOT 고압산소', desc: '고압산소 치료 상담', icon: '💨' },
    { id: 'wound', label: '창상 관리', desc: '만성 창상·욕창 치료', icon: '🩹' },
  ];

  const doctors = [
    { id: 'p1', name: '박준호', title: '원장', dept: ['er'], specialty: '응급의학과 전문의', career: '경력 15년' },
    { id: 'p2', name: '최준락', title: '원장', dept: ['burn'], specialty: '화상외과 전문의', career: '경력 18년' },
    { id: 'p3', name: '하태솔', title: '과장', dept: ['recon', 'burn'], specialty: '화상재건외과 전문의', career: '경력 12년' },
    { id: 'p4', name: '윤경준', title: '원장', dept: ['ortho'], specialty: '정형외과 전문의', career: '경력 16년' },
    { id: 'p5', name: '박중현', title: '과장', dept: ['ortho'], specialty: '정형외과 전문의', career: '경력 10년' },
    { id: 'p6', name: '구민호', title: '전문의', dept: ['internal'], specialty: '소화기내과 전문의', career: '경력 14년' },
  ];

  const times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const cal = [null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const disabledDates = [1, 3, 8, 10, 15, 17, 22, 24, 29, 31];

  const filteredDoctors = sel.dept ? doctors.filter(d => d.dept.includes(sel.dept)) : doctors;

  const STEPS = [
    { n: 1, label: '진료과 선택' },
    { n: 2, label: '의료진 선택' },
    { n: 3, label: '날짜·시간' },
    { n: 4, label: '예약자 정보' },
    { n: 5, label: '예약 완료' },
  ];

  const btnPrimary = {
    background: C.red, color: '#fff', border: 'none',
    padding: '13px 32px', borderRadius: 4, cursor: 'pointer',
    fontFamily: "'Noto Sans KR', sans-serif", fontSize: 15, fontWeight: 700,
    transition: 'all 0.15s',
  };
  const btnSecondary = {
    background: 'transparent', color: C.textMuted,
    border: `1px solid ${C.border}`,
    padding: '13px 24px', borderRadius: 4, cursor: 'pointer',
    fontFamily: "'Noto Sans KR', sans-serif", fontSize: 14, fontWeight: 400,
    transition: 'all 0.15s',
  };

  return (
    <div>
      <PageHero
        title="온라인 진료 예약"
        subtitle="원하시는 의료진과 시간을 선택하여 빠르고 편리하게 예약하세요."
        breadcrumb={[{ label: '홈', page: 'home' }, { label: '진료 안내', page: 'appointment' }, { label: '온라인 예약' }]}
        onNavigate={onNavigate} theme={theme}
      />

      <section style={{ padding: '60px 32px 80px', background: th.altBg }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>

          {/* Step indicator */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 52, justifyContent: 'center' }}>
            {STEPS.map((s, i) => (
              <React.Fragment key={s.n}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: step > s.n ? C.coral : step === s.n ? C.navy : 'transparent',
                    border: step > s.n ? `2px solid ${C.coral}` : step === s.n ? `2px solid ${C.navy}` : `2px solid ${C.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 700,
                    color: step >= s.n ? '#fff' : C.border,
                    transition: 'all 0.3s',
                    fontSize: step > s.n ? 14 : 13,
                  }}>{step > s.n ? '✓' : s.n}</div>
                  <span style={{
                    fontSize: 11, fontFamily: "'Noto Sans KR', sans-serif",
                    color: step === s.n ? C.navy : C.textMuted, fontWeight: step === s.n ? 700 : 400,
                    whiteSpace: 'nowrap',
                  }}>{s.label}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{
                    flex: 1, height: 2, background: step > s.n ? C.coral : C.borderLight,
                    margin: '0 8px', marginBottom: 22, transition: 'all 0.3s',
                  }} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* ── STEP 1: Department ── */}
          {step === 1 && (
            <div>
              <h2 style={{ fontFamily: th.headingFont, fontSize: 22, fontWeight: 700, color: C.navy, marginBottom: 8 }}>진료과를 선택하세요</h2>
              <p style={{ fontSize: 14, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 28 }}>선택하지 않으면 전체 의료진이 표시됩니다.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 40 }}>
                {depts.map(d => (
                  <button key={d.id} onClick={() => setSel(s => ({ ...s, dept: d.id }))} style={{
                    textAlign: 'left', padding: '20px', background: '#fff', borderRadius: 6, cursor: 'pointer',
                    border: sel.dept === d.id ? `2px solid ${C.navy}` : `1px solid ${C.border}`,
                    boxShadow: sel.dept === d.id ? `0 0 0 3px ${C.navy}18` : 'none',
                    transition: 'all 0.15s',
                  }}>
                    <div style={{ fontSize: 24, marginBottom: 10 }}>{d.icon}</div>
                    <div style={{ fontFamily: th.headingFont, fontSize: 15, fontWeight: 700, color: C.navy, marginBottom: 4 }}>{d.label}</div>
                    <div style={{ fontSize: 12, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif" }}>{d.desc}</div>
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                <button onClick={() => { setSel(s => ({ ...s, dept: null })); setStep(2); }} style={{ ...btnSecondary }}>진료과 선택 안함 →</button>
                <button onClick={() => sel.dept && setStep(2)} style={{ ...btnPrimary, opacity: sel.dept ? 1 : 0.5 }}>다음 단계 →</button>
              </div>
            </div>
          )}

          {/* ── STEP 2: Doctor ── */}
          {step === 2 && (
            <div>
              <h2 style={{ fontFamily: th.headingFont, fontSize: 22, fontWeight: 700, color: C.navy, marginBottom: 8 }}>의료진을 선택하세요</h2>
              <p style={{ fontSize: 14, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 28 }}>
                {sel.dept ? `선택한 진료과: ${depts.find(d => d.id === sel.dept)?.label}` : '전체 의료진'}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 40 }}>
                {filteredDoctors.map(doc => (
                  <button key={doc.id} onClick={() => setSel(s => ({ ...s, doctor: doc.id }))} style={{
                    textAlign: 'left', padding: '20px 18px', background: '#fff', borderRadius: 6, cursor: 'pointer',
                    border: sel.doctor === doc.id ? `2px solid ${C.navy}` : `1px solid ${C.border}`,
                    boxShadow: sel.doctor === doc.id ? `0 0 0 3px ${C.navy}18` : 'none',
                    transition: 'all 0.15s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                  }}>
                    <DocAvatar name={doc.name} size={64} />
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 11, color: C.coral, fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: '0.06em', marginBottom: 4 }}>{doc.specialty}</div>
                      <div style={{ fontFamily: th.headingFont, fontSize: 16, fontWeight: 700, color: C.navy }}>{doc.name} <span style={{ fontSize: 12, fontWeight: 400, fontFamily: "'Noto Sans KR', sans-serif", color: C.textMuted }}>{doc.title}</span></div>
                      <div style={{ fontSize: 11, color: C.textMuted, marginTop: 4, fontFamily: "'Noto Sans KR', sans-serif" }}>{doc.career}</div>
                    </div>
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={() => setStep(1)} style={btnSecondary}>← 이전</button>
                <button onClick={() => sel.doctor && setStep(3)} style={{ ...btnPrimary, opacity: sel.doctor ? 1 : 0.5 }}>다음 단계 →</button>
              </div>
            </div>
          )}

          {/* ── STEP 3: Date & Time ── */}
          {step === 3 && (
            <div>
              <h2 style={{ fontFamily: th.headingFont, fontSize: 22, fontWeight: 700, color: C.navy, marginBottom: 28 }}>날짜와 시간을 선택하세요</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 40 }}>
                {/* Calendar */}
                <div style={{ background: '#fff', borderRadius: 6, padding: '24px', border: `1px solid ${C.border}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: C.textMuted }}>‹</button>
                    <span style={{ fontFamily: th.headingFont, fontSize: 16, fontWeight: 700, color: C.navy }}>2026년 10월</span>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: C.textMuted }}>›</button>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', marginBottom: 10 }}>
                    {days.map((d, i) => (
                      <div key={d} style={{ fontSize: 11, fontWeight: 700, color: i === 0 ? C.red : i === 6 ? '#0d6efd' : C.textMuted, padding: '4px 0', fontFamily: "'Inter', sans-serif" }}>{d}</div>
                    ))}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', gap: '4px 0' }}>
                    {cal.map((d, i) => (
                      <div key={i} style={{ padding: '2px' }}>
                        {d !== null ? (
                          <button onClick={() => !disabledDates.includes(d) && setSel(s => ({ ...s, date: d }))} style={{
                            width: 34, height: 34, borderRadius: '50%', border: 'none', cursor: disabledDates.includes(d) ? 'not-allowed' : 'pointer',
                            background: sel.date === d ? C.navy : 'transparent',
                            color: sel.date === d ? '#fff' : disabledDates.includes(d) ? C.border : i % 7 === 0 ? C.red : i % 7 === 6 ? '#0d6efd' : C.text,
                            fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: sel.date === d ? 700 : 400,
                            transition: 'all 0.1s', opacity: disabledDates.includes(d) ? 0.35 : 1,
                          }}>{d}</button>
                        ) : <div />}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Time slots */}
                <div style={{ background: '#fff', borderRadius: 6, padding: '24px', border: `1px solid ${C.border}` }}>
                  <h3 style={{ fontFamily: th.headingFont, fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 20 }}>
                    {sel.date ? `10월 ${sel.date}일 예약 가능 시간` : '날짜를 먼저 선택하세요'}
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    {times.map(t => (
                      <button key={t} onClick={() => sel.date && setSel(s => ({ ...s, time: t }))} style={{
                        padding: '16px', border: sel.time === t ? `2px solid ${C.navy}` : `1px solid ${C.border}`,
                        borderRadius: 4, background: sel.time === t ? C.navy + '0d' : '#fff', cursor: sel.date ? 'pointer' : 'not-allowed',
                        fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: sel.time === t ? 700 : 400,
                        color: sel.time === t ? C.navy : C.text, transition: 'all 0.15s',
                        opacity: sel.date ? 1 : 0.4,
                      }}>{t}</button>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={() => setStep(2)} style={btnSecondary}>← 이전</button>
                <button onClick={() => sel.date && sel.time && setStep(4)} style={{ ...btnPrimary, opacity: sel.date && sel.time ? 1 : 0.5 }}>다음 단계 →</button>
              </div>
            </div>
          )}

          {/* ── STEP 4: Patient Info ── */}
          {step === 4 && (
            <div>
              <h2 style={{ fontFamily: th.headingFont, fontSize: 22, fontWeight: 700, color: C.navy, marginBottom: 8 }}>예약자 정보를 입력하세요</h2>
              <p style={{ fontSize: 14, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 32 }}>정확한 정보를 입력하시면 신속한 응급 처치가 가능합니다.</p>

              {/* Summary */}
              <div style={{ background: C.navy + '0a', border: `1px solid ${C.navy}22`, borderRadius: 6, padding: '16px 20px', marginBottom: 32, display: 'flex', gap: 32 }}>
                {[
                  { label: '진료과', value: depts.find(d => d.id === sel.dept)?.label || '미선택' },
                  { label: '의료진', value: doctors.find(d => d.id === sel.doctor)?.name || '미선택' },
                  { label: '날짜', value: sel.date ? `2026년 10월 ${sel.date}일` : '미선택' },
                  { label: '시간', value: sel.time || '미선택' },
                ].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 11, color: C.textMuted, fontFamily: "'Inter', sans-serif", marginBottom: 3 }}>{s.label}</div>
                    <div style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: 14, fontWeight: 700, color: C.navy }}>{s.value}</div>
                  </div>
                ))}
              </div>

              <div style={{ background: '#fff', borderRadius: 6, padding: '32px', border: `1px solid ${C.border}` }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                  {[
                    { label: '성명', placeholder: '홍길동', type: 'text' },
                    { label: '연락처', placeholder: '010-0000-0000', type: 'tel' },
                    { label: '생년월일', placeholder: '000000 (6자리)', type: 'text' },
                    { label: '성별', placeholder: '남 / 여', type: 'text' },
                  ].map((f, i) => (
                    <div key={i}>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: C.navy, marginBottom: 7, fontFamily: "'Noto Sans KR', sans-serif", letterSpacing: '0.02em' }}>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} style={{
                        width: '100%', padding: '12px 14px', borderRadius: 4,
                        border: `1px solid ${C.border}`, fontFamily: "'Noto Sans KR', sans-serif",
                        fontSize: 14, color: C.text, outline: 'none',
                        transition: 'border 0.15s', boxSizing: 'border-box',
                      }}
                        onFocus={e => e.target.style.borderColor = C.navy}
                        onBlur={e => e.target.style.borderColor = C.border}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: C.navy, marginBottom: 7, fontFamily: "'Noto Sans KR', sans-serif" }}>증상 메모</label>
                  <textarea placeholder="간단히 증상을 적어주세요 (선택 사항)" rows={3} style={{
                    width: '100%', padding: '12px 14px', borderRadius: 4,
                    border: `1px solid ${C.border}`, fontFamily: "'Noto Sans KR', sans-serif",
                    fontSize: 14, color: C.text, resize: 'none', outline: 'none', boxSizing: 'border-box',
                    transition: 'border 0.15s',
                  }}
                    onFocus={e => e.target.style.borderColor = C.navy}
                    onBlur={e => e.target.style.borderColor = C.border}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
                <button onClick={() => setStep(3)} style={btnSecondary}>← 이전</button>
                <button onClick={() => setStep(5)} style={{ ...btnPrimary, padding: '13px 40px' }}>예약 확정하기 →</button>
              </div>
            </div>
          )}

          {/* ── STEP 5: Confirmation ── */}
          {step === 5 && (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: C.success + '18', border: `2px solid ${C.success}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px', fontSize: 28,
              }}>✓</div>
              <h2 style={{ fontFamily: th.headingFont, fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 10 }}>예약이 완료되었습니다</h2>
              <p style={{ fontSize: 15, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 36, lineHeight: 1.7 }}>
                예약 확인 문자가 등록하신 연락처로 발송됩니다.<br />
                예약 변경·취소는 방문 24시간 전까지 가능합니다.
              </p>
              <div style={{ display: 'inline-flex', gap: 48, background: C.bg, borderRadius: 8, padding: '24px 40px', marginBottom: 36 }}>
                {[
                  { label: '의료진', value: doctors.find(d => d.id === sel.doctor)?.name || '—' },
                  { label: '날짜', value: sel.date ? `10월 ${sel.date}일` : '—' },
                  { label: '시간', value: sel.time || '—' },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 11, color: C.textMuted, fontFamily: "'Inter', sans-serif", marginBottom: 4 }}>{s.label}</div>
                    <div style={{ fontFamily: th.headingFont, fontSize: 18, fontWeight: 700, color: C.navy }}>{s.value}</div>
                  </div>
                ))}
              </div>
              <br />
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                <button onClick={() => { setStep(1); setSel({ dept: null, doctor: null, date: null, time: null }); }} style={btnSecondary}>새 예약하기</button>
                <button onClick={() => onNavigate('home')} style={btnPrimary}>홈으로 돌아가기</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────
//  MEDICAL TEAM PAGE
// ─────────────────────────────────────────
function MedicalTeamPage({ onNavigate, theme }) {
  const { useState } = React;
  const th = THEMES[theme];
  const [activeDept, setActiveDept] = useState('all');

  const deptTabs = [
    { id: 'all', label: '전체' },
    { id: 'er', label: '응급의학과' },
    { id: 'burn', label: '화상외과' },
    { id: 'ortho', label: '정형외과' },
    { id: 'internal', label: '내과' },
  ];

  const doctors = [
    { name: '박준호', title: '원장', dept: ['er'], deptLabel: '응급의학과', career: '경력 15년', edu: '단국대학교 의과대학 졸업', train: '응급의학과 전문의 자격 취득', awards: ['대한응급의학회 우수 논문상', '보건복지부 표창'], specialties: ['화상 응급 처치', '외상 집중 치료', '소생의학'] },
    { name: '최준락', title: '원장', dept: ['burn'], deptLabel: '화상외과', career: '경력 18년', edu: '순천향대학교 의과대학 졸업', train: '화상외과 세부전문의', awards: ['대한화상학회 학술상'], specialties: ['중증 화상 수술', '피부이식', '화상 재건'] },
    { name: '하태솔', title: '과장', dept: ['recon', 'burn'], deptLabel: '화상재건외과', career: '경력 12년', edu: '단국대학교 의과대학 졸업', train: '한림대학교 한강성심병원 화상외과 전공의 수료', awards: [], specialties: ['흉터 재건', '피부 이식 재건', '화상 응급 수술'] },
    { name: '윤경준', title: '원장', dept: ['ortho'], deptLabel: '정형외과', career: '경력 16년', edu: '단국대학교 의과대학 졸업', train: '정형외과 전문의', awards: ['대한정형외과학회 우수상'], specialties: ['외상성 골절', '대퇴, 무릎 관절 재건'] },
    { name: '박중현', title: '과장', dept: ['ortho'], deptLabel: '정형외과', career: '경력 10년', edu: '순천향대학교 의과대학 졸업', train: '정형외과 전문의', awards: [], specialties: ['사지 관절 골절', '인대파열', '다발성 골절'] },
    { name: '구민호', title: '전문의', dept: ['internal'], deptLabel: '내과', career: '경력 14년', edu: '충남대학교 의과대학 졸업', train: '소화기내과 세분 전문의', awards: [], specialties: ['소화기 질환', '통증 관리', '중환자 내과'] },
  ];

  const filtered = activeDept === 'all' ? doctors : doctors.filter(d => d.dept.includes(activeDept));

  return (
    <div>
      <PageHero
        title="전문 의료진"
        subtitle="각 분야 최고의 전문의가 직접 진료하고 치료합니다."
        breadcrumb={[{ label: '홈', page: 'home' }, { label: '의료진 소개' }]}
        onNavigate={onNavigate} theme={theme}
      />

      <section style={{ padding: '60px 32px 80px', background: th.altBg }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Dept tabs */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 48, flexWrap: 'wrap' }}>
            {deptTabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveDept(tab.id)} style={{
                padding: '9px 18px', borderRadius: 4, cursor: 'pointer',
                border: activeDept === tab.id ? `2px solid ${C.navy}` : `1px solid ${C.border}`,
                background: activeDept === tab.id ? C.navy : '#fff',
                color: activeDept === tab.id ? '#fff' : C.textMuted,
                fontFamily: "'Noto Sans KR', sans-serif", fontSize: 13, fontWeight: activeDept === tab.id ? 700 : 400,
                transition: 'all 0.15s',
              }}>{tab.label}</button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {filtered.map((doc, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 8, overflow: 'hidden',
                ...th.cardStyle, transition: 'all 0.2s',
              }}
                onMouseEnter={e => Object.assign(e.currentTarget.style, th.cardHover)}
                onMouseLeave={e => Object.assign(e.currentTarget.style, th.cardStyle)}
              >
                {/* Color header */}
                <div style={{ background: C.navy, padding: '28px 24px 0', display: 'flex', gap: 16, alignItems: 'flex-end' }}>
                  <DocAvatar name={doc.name} size={72} />
                  <div style={{ paddingBottom: 16 }}>
                    <div style={{ fontSize: 10, color: C.coral, fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: '0.08em', marginBottom: 4 }}>{doc.deptLabel.toUpperCase()}</div>
                    <div style={{ fontFamily: th.headingFont, fontSize: 20, fontWeight: 800, color: '#fff' }}>{doc.name}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', fontFamily: "'Noto Sans KR', sans-serif" }}>{doc.title} · {doc.career}</div>
                  </div>
                </div>
                {/* Body */}
                <div style={{ padding: '20px 24px' }}>
                  <div style={{ fontSize: 12, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 14, lineHeight: 1.6 }}>
                    <div>{doc.edu}</div>
                    <div>{doc.train}</div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                    {doc.specialties.map((s, j) => (
                      <span key={j} style={{
                        padding: '4px 10px', background: C.navy + '0d', borderRadius: 3,
                        fontSize: 11, color: C.navy, fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 600,
                      }}>{s}</span>
                    ))}
                  </div>
                  <button onClick={() => onNavigate('appointment')} style={{
                    width: '100%', padding: '11px', background: C.red, color: '#fff', border: 'none',
                    borderRadius: 4, cursor: 'pointer', fontFamily: "'Noto Sans KR', sans-serif",
                    fontSize: 13, fontWeight: 700, transition: 'all 0.15s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = '#a82e20'}
                    onMouseLeave={e => e.currentTarget.style.background = C.red}
                  >이 의료진으로 예약하기</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { AppointmentPage, MedicalTeamPage });
