// hospital-pages-d.jsx — Medical Cooperation Page

function MedicalCooperationPage({ onNavigate, theme }) {
  const th = THEMES[theme];
  const [formData, setFormData] = React.useState({
    orgName: '',
    contactPerson: '',
    phone: '',
    category: '초중증 상향전원',
  });

  const partners = [
    {
      name: '단국대병원 권역외상센터',
      type: '초중증 상향전원',
      desc: '광역급 외상 응급의료 네트워크 협력',
      features: ['24시간 핫라인', '이송차량 지원', '중환자실 협력'],
      contact: '041-0000-0000'
    },
    {
      name: '서산의료원',
      type: '응급 연계',
      desc: '응급 환자 공동 관리 및 병상 공유',
      features: ['공동활용병상 MOU', '응급 의료진 파견', '장비 공동운영'],
      contact: '041-0000-0000'
    },
    {
      name: '순천향대 천안병원',
      type: '영상·진단협진',
      desc: '고급 영상진단 및 특화 진료 지원',
      features: ['MRI 협진', '혈관조영 협력', '신경외과 자문'],
      contact: '041-0000-0000'
    },
    {
      name: '근로복지공단',
      type: '산재 연계',
      desc: '산업재해 환자 전문 요양 및 재활',
      features: ['산재 승인 신청', '요양병원 연계', '재활센터 협력'],
      contact: '1545-0100'
    }
  ];

  const steps = [
    { n: '01', title: '접수 및 사전 협의', desc: '진료협력팀에 환자 정보 제공 및 상태 설명' },
    { n: '02', title: '의료진 판단', desc: '응급의학과·전문의 협의로 전원 필요성 판단' },
    { n: '03', title: '협력병원 확인', desc: '협력병원 수용 가능 여부 및 이송 일정 확정' },
    { n: '04', title: '환자 전원', desc: '안전한 이송 및 원무팀 서류 처리 완료' }
  ];

  const handleSubmit = () => {
    if (!formData.orgName || !formData.contactPerson || !formData.phone) {
      alert('모든 항목을 입력해주세요.');
      return;
    }
    console.log('의뢰 신청:', formData);
    alert('의료진 협력 신청이 완료되었습니다. 담당팀에서 연락드리겠습니다.');
    setFormData({ orgName: '', contactPerson: '', phone: '', category: '초중증 상향전원' });
  };

  return (
    <div>
      <PageHero
        title="진료협력"
        subtitle="권역 내 협력병원과의 안전한 환자 전원 및 협진 네트워크"
        breadcrumb={[{ label: '홈', page: 'home' }, { label: '진료협력' }]}
        theme={theme}
      />

      {/* ── Overview ── */}
      <section style={{ padding: '60px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{
              fontFamily: th.headingFont, fontSize: 32, fontWeight: 700, color: C.navy,
              marginBottom: 16, lineHeight: 1.3
            }}>스마트 바이패스 협력 네트워크</h2>
            <p style={{
              fontSize: 16, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif",
              lineHeight: 1.6, maxWidth: 600, margin: '0 auto'
            }}>
              서해한결의료원은 권역 내 주요 의료기관과 긴밀한 협력체계를 구축하여 환자의 상태에 맞는 최적의 의료 서비스를 제공합니다.
            </p>
          </div>

          {/* Partnership Overview */}
          <div style={{
            background: theme === 'A' ? '#f0f4f8' : '#f5f7fa',
            borderRadius: 8, padding: '32px', marginBottom: 60,
            borderLeft: `4px solid ${C.coral}`
          }}>
            <div className="h-coop-overview" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              <div>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.coral, fontFamily: "'Inter', sans-serif", marginBottom: 6 }}>4개</div>
                <div style={{ fontSize: 14, color: C.text, fontFamily: "'Noto Sans KR', sans-serif" }}>협력병원 및 기관</div>
              </div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.coral, fontFamily: "'Inter', sans-serif", marginBottom: 6 }}>24/7</div>
                <div style={{ fontSize: 14, color: C.text, fontFamily: "'Noto Sans KR', sans-serif" }}>응급 핫라인 운영</div>
              </div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.coral, fontFamily: "'Inter', sans-serif", marginBottom: 6 }}>상시</div>
                <div style={{ fontSize: 14, color: C.text, fontFamily: "'Noto Sans KR', sans-serif" }}>협진 가능</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section style={{ padding: '60px 32px', background: theme === 'A' ? '#f9f9f9' : '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionTitle theme={theme}>협력 의료기관</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginBottom: 60 }}>
            {partners.map((p, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 8, padding: '28px', border: `1px solid ${C.border}`,
                transition: 'all 0.2s', cursor: 'pointer',
                ...th.cardStyle
              }}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, th.cardHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, th.cardStyle)}
              >
                <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div>
                    <h3 style={{
                      fontFamily: th.headingFont, fontSize: 18, fontWeight: 700, color: C.navy,
                      marginBottom: 6
                    }}>{p.name}</h3>
                    <p style={{ fontSize: 13, color: C.coral, fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                      {p.type}
                    </p>
                  </div>
                  <span style={{
                    fontSize: 24, background: C.bg, width: 48, height: 48, borderRadius: 4,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    🏥
                  </span>
                </div>
                <p style={{ fontSize: 14, color: C.text, fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 16, lineHeight: 1.6 }}>
                  {p.desc}
                </p>
                <div style={{ marginBottom: 16 }}>
                  {p.features.map((f, j) => (
                    <span key={j} style={{
                      display: 'inline-block',
                      background: C.bg, color: C.navy, padding: '4px 10px',
                      borderRadius: 12, fontSize: 12, fontFamily: "'Noto Sans KR', sans-serif",
                      fontWeight: 500, marginRight: 6, marginBottom: 6
                    }}>{f}</span>
                  ))}
                </div>
                <div style={{ fontSize: 12, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", borderTop: `1px solid ${C.borderLight}`, paddingTop: 12 }}>
                  연락: <strong>{p.contact}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section style={{ padding: '60px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionTitle theme={theme}>전원 절차 안내</SectionTitle>
          <div className="h-coop-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 40 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div style={{
                  background: '#fff', borderRadius: 8, padding: '24px 20px', textAlign: 'center',
                  border: `2px solid ${C.border}`, minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center'
                }}>
                  <div style={{
                    fontSize: 32, fontWeight: 700, color: C.coral, fontFamily: "'Inter', sans-serif",
                    marginBottom: 12
                  }}>{s.n}</div>
                  <h4 style={{
                    fontFamily: th.headingFont, fontSize: 16, fontWeight: 700, color: C.navy,
                    marginBottom: 10
                  }}>{s.title}</h4>
                  <p style={{ fontSize: 13, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", lineHeight: 1.5 }}>
                    {s.desc}
                  </p>
                </div>
                {i < 3 && (
                  <div className="h-coop-step-arrow" style={{
                    position: 'absolute', right: -10, top: '50%', transform: 'translateY(-50%)',
                    fontSize: 20, color: C.coral
                  }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Referral Form ── */}
      <section style={{ padding: '60px 32px', background: theme === 'A' ? '#f9f9f9' : '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{
              fontFamily: th.headingFont, fontSize: 28, fontWeight: 700, color: C.navy,
              marginBottom: 12
            }}>협력병원 의뢰 신청</h2>
            <p style={{
              fontSize: 14, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif"
            }}>아래 정보를 입력하시면 담당팀에서 신속히 처리하겠습니다.</p>
          </div>

          <div style={{ background: '#fff', borderRadius: 8, padding: '32px', border: `1px solid ${C.border}` }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20, marginBottom: 28 }}>
              <div>
                <label style={{
                  display: 'block', fontSize: 14, fontWeight: 600, color: C.navy,
                  fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 8
                }}>기관명 <span style={{ color: C.red }}>*</span></label>
                <input
                  type="text"
                  placeholder="협력병원명 또는 의료기관명"
                  value={formData.orgName}
                  onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                  style={{
                    width: '100%', padding: '12px 14px', border: `1px solid ${C.border}`,
                    borderRadius: 6, fontFamily: "'Noto Sans KR', sans-serif", fontSize: 14,
                    outline: 'none', transition: 'border 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = C.navy}
                  onBlur={(e) => e.target.style.borderColor = C.border}
                />
              </div>

              <div>
                <label style={{
                  display: 'block', fontSize: 14, fontWeight: 600, color: C.navy,
                  fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 8
                }}>담당자명 <span style={{ color: C.red }}>*</span></label>
                <input
                  type="text"
                  placeholder="담당의 또는 담당자 이름"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  style={{
                    width: '100%', padding: '12px 14px', border: `1px solid ${C.border}`,
                    borderRadius: 6, fontFamily: "'Noto Sans KR', sans-serif", fontSize: 14,
                    outline: 'none', transition: 'border 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = C.navy}
                  onBlur={(e) => e.target.style.borderColor = C.border}
                />
              </div>

              <div>
                <label style={{
                  display: 'block', fontSize: 14, fontWeight: 600, color: C.navy,
                  fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 8
                }}>연락처 <span style={{ color: C.red }}>*</span></label>
                <input
                  type="tel"
                  placeholder="010-1234-5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%', padding: '12px 14px', border: `1px solid ${C.border}`,
                    borderRadius: 6, fontFamily: "'Noto Sans KR', sans-serif", fontSize: 14,
                    outline: 'none', transition: 'border 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = C.navy}
                  onBlur={(e) => e.target.style.borderColor = C.border}
                />
              </div>

              <div>
                <label style={{
                  display: 'block', fontSize: 14, fontWeight: 600, color: C.navy,
                  fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 8
                }}>환자 분류</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{
                    width: '100%', padding: '12px 14px', border: `1px solid ${C.border}`,
                    borderRadius: 6, fontFamily: "'Noto Sans KR', sans-serif", fontSize: 14,
                    outline: 'none', cursor: 'pointer', background: '#fff'
                  }}
                >
                  <option value="초중증 상향전원">초중증 상향전원</option>
                  <option value="영상 협진">영상 협진</option>
                  <option value="산재 요양">산재 요양</option>
                  <option value="기타">기타</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              style={{
                width: '100%', padding: '14px', background: C.red, color: '#fff',
                border: 'none', borderRadius: 6, cursor: 'pointer',
                fontFamily: "'Noto Sans KR', sans-serif", fontSize: 15, fontWeight: 700,
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#a82e20'}
              onMouseLeave={(e) => e.currentTarget.style.background = C.red}
            >
              의료진 협력 신청 →
            </button>
          </div>

          <div style={{
            marginTop: 28, padding: '16px 20px', background: C.bg, borderRadius: 6,
            fontSize: 13, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", lineHeight: 1.6
          }}>
            <strong style={{ color: C.navy }}>긴급 연락</strong><br />
            진료협력팀: <span style={{ fontWeight: 700 }}>041-0000-0000 (24시간)</span>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { MedicalCooperationPage });
