// hospital-pages-f.jsx — Philosophy Page

function PhilosophyPage({ onNavigate, theme }) {
  const th = THEMES[theme];

  const values = [
    {
      title: '책임 의식',
      desc: '왔으면 끝까지. 치료부터 재활·복직까지 전 과정을 책임집니다.'
    },
    {
      title: '전문성 집중',
      desc: '화상·외상 분야에서 지역 내 최고 수준의 특화 의료를 제공합니다.'
    },
    {
      title: '지역 상생',
      desc: '산업단지와 연계해 지역 의료 안전망 역할을 수행합니다.'
    }
  ];

  const principles = [
    '골든타임은 도로 위에서 낭비되어선 안 됩니다',
    '수술 이후도, 재활 이후도, 복직까지도 우리의 진료입니다',
    '중등도 환자를 끝까지 책임지는 거점이 되겠습니다'
  ];

  return (
    <div>
      <PageHero
        title="진료 철학"
        subtitle="서해한결의료원이 지향하는 의료의 가치"
        breadcrumb={[{ label: '홈', page: 'home' }, { label: '진료 철학' }]}
        theme={theme}
      />

      {/* Director's Message */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            {/* Photo */}
            <div style={{
              borderRadius: 12, overflow: 'hidden',
              aspectRatio: '3/4',
            }} className="director-photo">
              <img
                src="20260511_053631_32fceee2.png"
                alt="박준호 원장"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              />
            </div>

            {/* Message */}
            <div>
              <div style={{ marginBottom: 12 }}>
                <h2 style={{
                  fontFamily: th.headingFont, fontSize: 32, fontWeight: 700, color: C.navy,
                  marginBottom: 6, lineHeight: 1.2
                }}>박준호 원장</h2>
                <p style={{
                  fontSize: 14, color: C.coral, fontFamily: "'Inter', sans-serif", fontWeight: 600,
                  letterSpacing: '0.05em', textTransform: 'uppercase'
                }}>응급의학과 전문의</p>
              </div>

              <div style={{
                fontSize: 16, color: C.text, fontFamily: "'Noto Sans KR', sans-serif",
                lineHeight: 1.8, marginTop: 32,
                borderLeft: `4px solid ${C.coral}`, paddingLeft: 24
              }}>
                <p style={{ marginBottom: 16 }}>
                  2025년, 서해안에서 산업재해 화상을 입으면 왜 청주까지 2시간을 달려야 합니까.
                </p>
                <p style={{ marginBottom: 16 }}>
                  그 질문에서 이 병원이 시작되었습니다.
                </p>
                <p style={{ marginBottom: 16 }}>
                  환자가 치료를 위해 먼 길을 떠나지 않아도 되는 환경—
                </p>
                <p style={{ marginBottom: 16 }}>
                  골든타임은 병원 문 앞에서 지켜져야 합니다.
                </p>
                <p style={{ fontWeight: 700, fontSize: 17, color: C.navy }}>
                  왔으면 끝까지. 치료부터 재활, 직장 복귀까지 우리가 책임집니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: '80px 32px', background: theme === 'A' ? '#f8f9fa' : '#f5f7fa' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{
              fontFamily: th.headingFont, fontSize: 32, fontWeight: 700, color: C.navy,
              marginBottom: 16
            }}>핵심 가치</h2>
            <p style={{
              fontSize: 16, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif"
            }}>서해한결의료원이 추구하는 세 가지 핵심 가치</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {values.map((v, i) => (
              <div
                key={i}
                style={{
                  background: '#fff', borderRadius: 12, padding: '40px 28px',
                  border: `2px solid ${C.border}`, textAlign: 'center',
                  transition: 'all 0.2s', cursor: 'pointer',
                  ...th.cardStyle
                }}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, th.cardHover);
                  e.currentTarget.style.borderColor = C.coral;
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, th.cardStyle);
                }}
              >
                <div style={{
                  width: 60, height: 60, background: C.bg, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px', fontSize: 28
                }}></div>
                <h3 style={{
                  fontFamily: th.headingFont, fontSize: 20, fontWeight: 700, color: C.navy,
                  marginBottom: 16
                }}>
                  {v.title}
                </h3>
                <p style={{
                  fontSize: 15, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif",
                  lineHeight: 1.6
                }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Banner */}
      <section style={{ background: C.navy, padding: '60px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 20,
            alignItems: 'center'
          }}>
            {principles.map((p, i) => (
              <div
                key={i}
                style={{
                  fontSize: 18, fontWeight: 700, color: '#fff',
                  fontFamily: "'Noto Sans KR', sans-serif", textAlign: 'center',
                  paddingBottom: i < principles.length - 1 ? 20 : 0,
                  borderBottom: i < principles.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                  width: '100%'
                }}
              >
                "{p}"
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '60px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{
            fontFamily: th.headingFont, fontSize: 24, fontWeight: 700, color: C.navy,
            marginBottom: 20
          }}>
            이런 가치를 실천하는 병원입니다
          </h3>
          <p style={{
            fontSize: 15, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif",
            marginBottom: 28
          }}>
            24시간 응급 대응 체계, 전문 의료진, 지역 협력 네트워크로 환자분의 신뢰에 응하겠습니다.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('care-process')}
              style={{
                padding: '12px 28px', background: C.navy, color: '#fff', border: 'none',
                borderRadius: 6, cursor: 'pointer', fontFamily: "'Noto Sans KR', sans-serif",
                fontWeight: 700, fontSize: 14, transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#0f3a5f'}
              onMouseLeave={(e) => e.currentTarget.style.background = C.navy}
            >
              진료 과정 보기
            </button>
            <button
              onClick={() => onNavigate('appointment')}
              style={{
                padding: '12px 28px', background: C.red, color: '#fff', border: 'none',
                borderRadius: 6, cursor: 'pointer', fontFamily: "'Noto Sans KR', sans-serif",
                fontWeight: 700, fontSize: 14, transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#a82e20'}
              onMouseLeave={(e) => e.currentTarget.style.background = C.red}
            >
              온라인 예약
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { PhilosophyPage });
