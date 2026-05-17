// hospital-pages-e.jsx — Care Process Page

function CareProcessPage({ onNavigate, theme }) {
  const th = THEMES[theme];
  const [activeProcess, setActiveProcess] = React.useState(0);

  const processes = [
    {
      id: 'outpatient',
      title: '외래 환자',
      color: '#0d6efd',
      colorLight: '#e7f1ff',
      icon: '🏥',
      steps: [
        { label: '접수', desc: '환자 정보 입력 및 진료과 선택' },
        { label: '진료', desc: '의료진 진료 및 초진 진찰' },
        { label: '검사', desc: '필요한 검사 및 영상 촬영' },
        { label: '진단', desc: '검사 결과 판정 및 치료 방침 결정', isBranch: true }
      ],
      branches: [
        {
          title: '수술 필요',
          color: '#0d6efd',
          steps: [
            { label: '수술 준비', desc: '입원 준비 및 의료 최적화' },
            { label: '수술', desc: '전담 의료진의 정밀 수술' },
            { label: '회복/퇴원', desc: '회복실 관찰 및 퇴원 관리' }
          ]
        },
        {
          title: '비수술',
          color: '#0d6efd',
          steps: [
            { label: '처방/치료', desc: '맞춤형 약물 및 물리치료' },
            { label: '추적관리', desc: '정기 외래 진료 및 모니터링' }
          ]
        }
      ]
    },
    {
      id: 'emergency',
      title: '응급 화상/외상',
      color: '#F07A35',
      colorLight: '#fff4ed',
      icon: '🚑',
      steps: [
        { label: '응급실 접수', desc: '즉시 응급 트리아지 및 바이탈 확인' },
        { label: '안정화', desc: '기도/호흡/순환 확보 및 소생' },
        { label: '초기 진단', desc: '신체 진찰 및 손상 정도 평가' },
        { label: '영상/검사', desc: '응급 CT·초음파 및 실험실 검사' },
        { label: '응급처치', desc: '소독·상처 처리 및 응급 치료' },
        { label: '수술/입원/전원', desc: '필요시 응급 수술 또는 전원 진행' }
      ]
    },
    {
      id: 'critical',
      title: '초중증 환자 (우선 응급)',
      color: '#E8533A',
      colorLight: '#ffe5e0',
      icon: '⚠️',
      steps: [
        { label: '중환자 분류', desc: '즉시 응급실 내 우선 격리실 입원', isHighlight: true },
        { label: '소생/안정화', desc: '응급의학과·외과 팀의 적극 소생', isHighlight: true },
        { label: '권역외상센터 핫라인', desc: '광역 중환자 수용 병상 확보', isHighlight: true },
        { label: '전원', desc: '전용 이송차 및 의료진 동반 전원', isHighlight: true },
        { label: '퇴원 후 재활/추적', desc: '전담 사례관리사 추적 및 재활 지원' }
      ]
    },
    {
      id: 'workers-comp',
      title: '산재/공단 검진',
      color: '#22C55E',
      colorLight: '#f0fdf4',
      icon: '📋',
      badge: '산단 패스트트랙',
      steps: [
        { label: '접수', desc: '산재 또는 공단 검진 서류 확인' },
        { label: '문진', desc: '근무 환경 및 증상 상세 청취' },
        { label: '검사', desc: '직무 관련성 판정을 위한 정밀 검사' },
        { label: '판정/상담', desc: '의료진 진단서 작성 및 상담' },
        { label: '결과통보', desc: '공단 제출용 진단서 및 의견서 발급' }
      ]
    }
  ];

  const process = processes[activeProcess];

  return (
    <div>
      <PageHero
        title="진료 과정"
        subtitle="환자의 상태에 맞는 맞춤형 진료 프로세스"
        breadcrumb={[{ label: '홈', page: 'home' }, { label: '진료 과정' }]}
        theme={theme}
      />

      {/* Process Selector */}
      <section style={{ padding: '40px 32px', background: '#fff', borderBottom: `1px solid ${C.borderLight}` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="h-care-process-tabs" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {processes.map((p, i) => (
              <button
                key={i}
                onClick={() => setActiveProcess(i)}
                style={{
                  padding: '16px 20px', borderRadius: 8, border: 'none', cursor: 'pointer',
                  background: activeProcess === i ? p.color : C.bg,
                  color: activeProcess === i ? '#fff' : C.text,
                  fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 600, fontSize: 14,
                  transition: 'all 0.2s', position: 'relative',
                  boxShadow: activeProcess === i ? `0 4px 12px ${p.color}20` : 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeProcess !== i) {
                    e.currentTarget.style.background = p.colorLight;
                    e.currentTarget.style.color = p.color;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeProcess !== i) {
                    e.currentTarget.style.background = C.bg;
                    e.currentTarget.style.color = C.text;
                  }
                }}
              >
                <span style={{ marginRight: 6 }}>{p.icon}</span>
                {p.title}
                {p.badge && (
                  <span style={{
                    position: 'absolute', top: -8, right: 4,
                    fontSize: 10, background: p.color, color: '#fff',
                    padding: '3px 8px', borderRadius: 10, fontWeight: 700
                  }}>
                    {p.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Process Detail */}
      <section style={{ padding: '60px 32px', background: process.colorLight }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <h2 style={{
              fontFamily: th.headingFont, fontSize: 28, fontWeight: 700, color: process.color,
              marginBottom: 12
            }}>
              {process.icon} {process.title}
            </h2>
            <p style={{
              fontSize: 15, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif"
            }}>
              {process.id === 'outpatient' && '일반 진료 환자의 접수부터 퇴원까지의 전체 과정'}
              {process.id === 'emergency' && '응급 상황의 빠른 응시와 단계별 치료 진행'}
              {process.id === 'critical' && '생명이 위협받는 초중증 환자의 우선 관리 체계'}
              {process.id === 'workers-comp' && '산업재해 및 공단 검진의 단계별 진행 과정'}
            </p>
          </div>

          {/* Main Flow */}
          <div style={{
            background: '#fff', borderRadius: 12, padding: '32px', marginBottom: 32,
            border: `2px solid ${process.color}40`
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              {process.steps.map((s, i) => (
                <React.Fragment key={i}>
                  <div style={{
                    background: s.isHighlight ? process.color : C.bg,
                    color: s.isHighlight ? '#fff' : process.color,
                    padding: '14px 20px', borderRadius: 8, textAlign: 'center',
                    minWidth: 100, fontWeight: 700, fontFamily: "'Noto Sans KR', sans-serif",
                    fontSize: 14, border: `2px solid ${process.color}`,
                    boxShadow: s.isHighlight ? `0 4px 12px ${process.color}30` : 'none'
                  }}>
                    {s.label}
                  </div>
                  {i < process.steps.length - 1 && (
                    <div style={{ fontSize: 20, color: process.color, fontWeight: 700 }}>→</div>
                  )}
                  {s.isBranch && (
                    <div style={{ width: '100%', height: 2, background: process.color, margin: '12px 0' }} />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Step Details */}
            <div style={{ marginTop: 32, paddingTop: 32, borderTop: `1px solid ${C.borderLight}` }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                {process.steps.map((s, i) => (
                  <div key={i} style={{
                    padding: '16px', background: s.isHighlight ? `${process.color}10` : C.bg,
                    borderRadius: 6, borderLeft: `4px solid ${process.color}`
                  }}>
                    <div style={{
                      fontSize: 13, fontWeight: 700, color: process.color, fontFamily: "'Inter', sans-serif",
                      marginBottom: 6
                    }}>
                      {i + 1}. {s.label}
                    </div>
                    <div style={{
                      fontSize: 12, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif"
                    }}>
                      {s.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Branches (for outpatient) */}
          {process.branches && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
              {process.branches.map((b, bi) => (
                <div key={bi} style={{
                  background: '#fff', borderRadius: 12, padding: '24px', border: `2px solid ${b.color}40`
                }}>
                  <h3 style={{
                    fontFamily: th.headingFont, fontSize: 18, fontWeight: 700, color: b.color,
                    marginBottom: 20, paddingBottom: 12, borderBottom: `2px solid ${b.color}40`
                  }}>
                    {b.title}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {b.steps.map((step, si) => (
                      <div key={si} style={{
                        display: 'flex', gap: 12, alignItems: 'flex-start'
                      }}>
                        <div style={{
                          width: 28, height: 28, borderRadius: '50%', background: b.color,
                          color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontWeight: 700, fontSize: 12, flexShrink: 0
                        }}>
                          {si + 1}
                        </div>
                        <div>
                          <div style={{
                            fontSize: 13, fontWeight: 700, color: C.navy, fontFamily: "'Noto Sans KR', sans-serif",
                            marginBottom: 3
                          }}>
                            {step.label}
                          </div>
                          <div style={{
                            fontSize: 12, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif"
                          }}>
                            {step.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Contact */}
      <section style={{ padding: '40px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{
            fontFamily: th.headingFont, fontSize: 20, fontWeight: 700, color: C.navy,
            marginBottom: 12
          }}>문의 및 상담</h3>
          <p style={{
            fontSize: 14, color: C.textMuted, fontFamily: "'Noto Sans KR', sans-serif", marginBottom: 20
          }}>
            진료 과정에 대한 궁금한 점이 있으신가요?
          </p>
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
            온라인 예약 →
          </button>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { CareProcessPage });
