// hospital-components.jsx — Shared: Nav, Footer, PageHero, StatusPill, etc.

const { useState, useEffect, useRef } = React;

const C = {
  navy: '#0A2540',
  navyDark: '#061729',
  coral: '#E8533A',
  red: '#C0392B',
  bg: '#F8F9FA',
  white: '#FFFFFF',
  text: '#191C1D',
  textMuted: '#43474D',
  border: '#C4C6CE',
  borderLight: '#E2E8F0',
  success: '#22C55E',
  warning: '#F07A35'
};

const THEMES = {
  A: {
    id: 'A',
    name: 'A — Medical Heritage',
    headingFont: "'Noto Serif KR', serif",
    heroGradient: 'linear-gradient(135deg, #061729 0%, #0A2540 55%, #0f2e52 100%)',
    altBg: '#F8F9FA',
    cardStyle: { border: `1px solid #E2E8F0`, boxShadow: 'none' },
    cardHover: { border: `1px solid #0A2540`, boxShadow: '0 4px 20px rgba(10,37,64,0.07)' },
    primaryBtn: { bg: C.coral, hover: '#c9432e' },
    accentBar: { background: `linear-gradient(90deg, ${C.coral} 0%, #f07a35 100%)` }
  },
  B: {
    id: 'B',
    name: 'B — Clinical Modern',
    headingFont: "'Noto Sans KR', sans-serif",
    heroGradient: 'linear-gradient(135deg, #0A2540 0%, #0d2e55 60%, #0A2540 100%)',
    altBg: '#FFFFFF',
    cardStyle: { border: '1px solid transparent', boxShadow: '0 2px 16px rgba(10,37,64,0.06)' },
    cardHover: { border: '1px solid transparent', boxShadow: '0 8px 32px rgba(10,37,64,0.12)' },
    primaryBtn: { bg: C.navy, hover: '#0d2e55' },
    accentBar: { background: C.navy }
  }
};

const NAV_LINKS = [
{
  label: '진료 센터',
  sub: [
  { label: '화상 치료 센터', page: 'burn-treatment' },
  { label: 'HBOT 고압산소치료', page: 'hbot' }]

},
{ label: '의료진', page: 'medical-team' },
{ label: '장비 소개', page: 'equipment' },
{
  label: '진료 안내',
  sub: [
  { label: '온라인 예약', page: 'appointment' },
  { label: '응급실 현황', page: 'er-status' },
  { label: '진료 과정', page: 'care-process' },
  { label: '산재 보험 안내', page: 'workers-comp' }]

},
{
  label: '병원 소개',
  sub: [
  { label: '진료 철학', page: 'philosophy' },
  { label: '오시는 길', page: 'directions' },
  { label: '진료협력', page: 'cooperation' }]

}];


function EmergencyBanner({ onNavigate }) {
  return (
    <div className="h-emergency-banner" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: C.red, color: '#fff', height: 44,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500,
      letterSpacing: '0.01em', gap: 8
    }}>
      <span style={{ opacity: 0.9 }}>⚠️ 응급실 24시간 운영 중</span>
      <span className="h-eb-sep" style={{ opacity: 0.4 }}>|</span>
      <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>핫라인: 041-0000-0000</span>
      <span className="h-eb-sep" style={{ opacity: 0.4 }}>|</span>
      <button onClick={() => onNavigate('er-status')} className="h-eb-link" style={{
        color: '#fff', textDecoration: 'underline', background: 'none', border: 'none',
        cursor: 'pointer', fontSize: 13, fontFamily: "'Inter', sans-serif", fontWeight: 500
      }}>응급실 현황 →</button>
    </div>);

}

function Navigation({ currentPage, onNavigate, lang, setLang, theme }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const closeTimer = useRef(null);
  const th = THEMES[theme];

  const openMenu = (i) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(i);
  };
  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 220);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const isActive = (link) => {
    if (link.page) return currentPage === link.page;
    if (link.sub) return link.sub.some((s) => s.page === currentPage);
    return false;
  };

  const goMobile = (page) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <React.Fragment>
    <nav className="h-nav" style={{
      position: 'fixed', top: 44, left: 0, right: 0, zIndex: 999,
      background: '#fff', borderBottom: `1px solid ${C.border}`,
      height: 72
    }}>
      <div className="h-nav-inner" style={{
        maxWidth: 1280, margin: '0 auto', height: '100%',
        padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <button onClick={() => onNavigate('home')} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', gap: 3, textAlign: 'left'
        }}>
          <div className="h-nav-logo-title" style={{
            fontFamily: th.headingFont, fontSize: 20, fontWeight: 800,
            color: C.navy, lineHeight: 1, letterSpacing: '-0.01em'
          }}>서해한결의료원</div>
          <div className="h-nav-logo-sub" style={{
            fontFamily: "'Noto Sans KR', sans-serif", fontSize: 10,
            color: C.textMuted, letterSpacing: '0.04em'
          }}>화상 · 외상 응급의료기관</div>
        </button>

        {/* Nav links (desktop) */}
        <div className="h-nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {NAV_LINKS.map((link, i) =>
          <div key={i} style={{ position: 'relative' }}
          onMouseEnter={() => link.sub && openMenu(i)}
          onMouseLeave={closeMenu}>

              <button
              onClick={() => !link.sub && onNavigate(link.page)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Noto Sans KR', sans-serif", fontSize: 14,
                fontWeight: isActive(link) ? 700 : 400,
                color: isActive(link) ? C.navy : C.textMuted,
                borderBottom: isActive(link) ? `2px solid ${C.coral}` : '2px solid transparent',
                paddingBottom: 2, transition: 'all 0.15s',
                display: 'flex', alignItems: 'center', gap: 3,
                whiteSpace: 'nowrap'
              }}>

                {link.label}
                {link.sub && <span style={{ fontSize: 9, opacity: 0.6 }}>▾</span>}
              </button>

              {link.sub && openDropdown === i &&
            <div
              onMouseEnter={cancelClose}
              onMouseLeave={closeMenu}
              style={{
                position: 'absolute', top: 'calc(100% + 12px)', left: '50%',
                transform: 'translateX(-50%)',
                background: '#fff', border: `1px solid ${C.border}`,
                boxShadow: '0 8px 32px rgba(10,37,64,0.12)',
                minWidth: 190, borderRadius: 4, overflow: 'hidden'
              }}>
                  {link.sub.map((sub, j) =>
              <button key={j}
              onClick={() => {onNavigate(sub.page);setOpenDropdown(null);if (closeTimer.current) clearTimeout(closeTimer.current);}}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '12px 18px', background: 'none', border: 'none',
                cursor: 'pointer', fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: 13, color: C.text, transition: 'background 0.1s',
                borderBottom: j < link.sub.length - 1 ? `1px solid ${C.borderLight}` : 'none'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = C.bg}
              onMouseLeave={(e) => e.currentTarget.style.background = 'none'}>
                {sub.label}</button>
              )}
                </div>
            }
            </div>
          )}
        </div>

        {/* Right (desktop) */}
        <div className="h-nav-right-desktop" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', border: `1px solid ${C.border}`, borderRadius: 3, overflow: 'hidden' }}>
            {['ko', 'en'].map((l) =>
            <button key={l} onClick={() => setLang(l)} style={{
              padding: '5px 11px', fontSize: 11, fontWeight: 600,
              fontFamily: "'Inter', sans-serif", cursor: 'pointer', border: 'none',
              background: lang === l ? C.navy : '#fff',
              color: lang === l ? '#fff' : C.textMuted,
              transition: 'all 0.15s'
            }}>
                {l === 'ko' ? '한국어' : 'EN'}
              </button>
            )}
          </div>
          <button onClick={() => onNavigate('appointment')} style={{
            background: C.red, color: '#fff', border: 'none',
            padding: '9px 18px', borderRadius: 4, cursor: 'pointer',
            fontFamily: "'Noto Sans KR', sans-serif", fontSize: 13, fontWeight: 700,
            transition: 'all 0.15s', whiteSpace: 'nowrap'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#a82e20'}
          onMouseLeave={(e) => e.currentTarget.style.background = C.red}>

            예약
          </button>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="h-nav-hamburger"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="메뉴 열기"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            width: 40, height: 40, alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 5, padding: 0
          }}>
          <span style={{
            display: 'block', width: 22, height: 2, background: C.navy,
            transition: 'transform 0.2s',
            transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none'
          }} />
          <span style={{
            display: 'block', width: 22, height: 2, background: C.navy,
            opacity: mobileOpen ? 0 : 1, transition: 'opacity 0.2s'
          }} />
          <span style={{
            display: 'block', width: 22, height: 2, background: C.navy,
            transition: 'transform 0.2s',
            transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none'
          }} />
        </button>
      </div>
    </nav>

    {/* Mobile drawer */}
    <div className={`h-mobile-drawer-overlay${mobileOpen ? ' open' : ''}`} onClick={() => setMobileOpen(false)} />
    <div className={`h-mobile-drawer${mobileOpen ? ' open' : ''}`}>
      <div style={{ padding: '20px 16px 80px' }}>
        {NAV_LINKS.map((link, i) => (
          <div key={i} style={{ borderBottom: `1px solid ${C.borderLight}` }}>
            {link.sub ? (
              <React.Fragment>
                <button
                  onClick={() => setMobileExpanded(m => ({ ...m, [i]: !m[i] }))}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    width: '100%', padding: '16px 8px', background: 'none', border: 'none',
                    cursor: 'pointer', fontFamily: "'Noto Sans KR', sans-serif",
                    fontSize: 16, fontWeight: 600,
                    color: isActive(link) ? C.navy : C.text,
                    textAlign: 'left'
                  }}>
                  <span>{link.label}</span>
                  <span style={{ fontSize: 12, color: C.textMuted, transition: 'transform 0.2s', transform: mobileExpanded[i] ? 'rotate(180deg)' : 'none' }}>▾</span>
                </button>
                {mobileExpanded[i] && (
                  <div style={{ paddingBottom: 12 }}>
                    {link.sub.map((s, j) => (
                      <button key={j} onClick={() => goMobile(s.page)} style={{
                        display: 'block', width: '100%', textAlign: 'left',
                        padding: '12px 24px', background: 'none', border: 'none', cursor: 'pointer',
                        fontFamily: "'Noto Sans KR', sans-serif", fontSize: 14,
                        color: currentPage === s.page ? C.coral : C.textMuted,
                        fontWeight: currentPage === s.page ? 700 : 400
                      }}>
                        · {s.label}
                      </button>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ) : (
              <button onClick={() => goMobile(link.page)} style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '16px 8px', background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Noto Sans KR', sans-serif", fontSize: 16,
                color: isActive(link) ? C.navy : C.text,
                fontWeight: isActive(link) ? 700 : 600
              }}>
                {link.label}
              </button>
            )}
          </div>
        ))}

        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <button onClick={() => goMobile('appointment')} style={{
            background: C.red, color: '#fff', border: 'none',
            padding: '14px 18px', borderRadius: 4, cursor: 'pointer',
            fontFamily: "'Noto Sans KR', sans-serif", fontSize: 15, fontWeight: 700
          }}>응급 예약하기 →</button>

          <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
            {['ko', 'en'].map((l) => (
              <button key={l} onClick={() => setLang(l)} style={{
                flex: 1, padding: '10px', fontSize: 13, fontWeight: 600,
                fontFamily: "'Inter', sans-serif", cursor: 'pointer',
                border: `1px solid ${lang === l ? C.navy : C.border}`,
                background: lang === l ? C.navy : '#fff',
                color: lang === l ? '#fff' : C.textMuted,
                borderRadius: 4
              }}>
                {l === 'ko' ? '한국어' : 'English'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>);

}

function PageHero({ title, subtitle, breadcrumb, onNavigate, theme }) {
  const th = THEMES[theme];
  return (
    <section className="h-page-hero" style={{
      background: th.heroGradient,
      padding: '56px 32px 52px'
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {breadcrumb &&
        <div className="h-page-hero-breadcrumb" style={{
          color: 'rgba(255,255,255,0.45)', fontSize: 12,
          fontFamily: "'Inter', sans-serif", marginBottom: 18,
          display: 'flex', alignItems: 'center', gap: 6
        }}>
            {breadcrumb.map((b, i) =>
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {i > 0 && <span>›</span>}
                {b.page ?
            <button onClick={() => onNavigate(b.page)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.45)', cursor: 'pointer', fontSize: 12, fontFamily: "'Inter', sans-serif" }}>{b.label}</button> :
            <span style={{ color: 'rgba(255,255,255,0.75)' }}>{b.label}</span>
            }
              </span>
          )}
          </div>
        }
        <h1 style={{
          fontFamily: th.headingFont, fontSize: 38, fontWeight: 700,
          color: '#fff', marginBottom: 12, lineHeight: 1.2
        }}>{title}</h1>
        {subtitle &&
        <p style={{
          fontFamily: "'Noto Sans KR', sans-serif", fontSize: 16,
          color: 'rgba(255,255,255,0.7)', maxWidth: 560, lineHeight: 1.7
        }}>{subtitle}</p>
        }
      </div>
    </section>);

}

function SectionTitle({ children, sub, theme, center = false }) {
  const th = THEMES[theme];
  return (
    <div className="h-section-title" style={{ textAlign: center ? 'center' : 'left', marginBottom: 40 }}>
      <h2 style={{
        fontFamily: th.headingFont, fontSize: 28, fontWeight: 700,
        color: C.navy, marginBottom: sub ? 10 : 0, lineHeight: 1.3
      }}>{children}</h2>
      {sub &&
      <p style={{
        fontFamily: "'Noto Sans KR', sans-serif", fontSize: 15,
        color: C.textMuted, lineHeight: 1.7
      }}>{sub}</p>
      }
    </div>);

}

function getStatusColor(status) {
  const value = String(status || '').trim();
  if (value === '예약 필요') return '#9CA3AF';
  if (/^(사용 중|진행 중)$/.test(value)) return C.red;
  if (/대기|가능|진료|운영|정상|수용|상주/.test(value)) return C.success;
  return '#9CA3AF';
}

function StatusPill({ status }) {
  const color = getStatusColor(status);
  const shouldPulse = status !== '예약 필요';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 10px', borderRadius: 20,
      background: color + '1a', color,
      fontSize: 11, fontWeight: 700, fontFamily: "'Inter', sans-serif",
      letterSpacing: '0.02em'
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: '50%', background: color,
        display: 'inline-block',
        animation: shouldPulse ? 'hPulse 2s ease-in-out infinite' : 'none'
      }}></span>
      {status}
    </span>);

}

function DocAvatar({ name, size = 80 }) {
  const colors = ['#0A2540', '#E8533A', '#0d6efd', '#198754', '#6f42c1'];
  const colorIdx = name ? name.charCodeAt(0) % colors.length : 0;
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: colors[colorIdx] + '22',
      border: `2px solid ${colors[colorIdx]}33`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Noto Sans KR', sans-serif",
      fontSize: size * 0.38, fontWeight: 700, color: colors[colorIdx],
      flexShrink: 0, position: 'relative'
    }}>
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.4, color: '#9CA3AF' }}>
        <circle cx="12" cy="8" r="4" fill="currentColor"/>
        <path d="M 12 13 C 7.6 13 4 15.4 4 18.5 L 4 21 C 4 21.6 4.4 22 5 22 L 19 22 C 19.6 22 20 21.6 20 21 L 20 18.5 C 20 15.4 16.4 13 12 13 Z" fill="currentColor"/>
      </svg>
    </div>);

}

function Footer({ onNavigate, theme }) {
  const th = THEMES[theme];
  const cols = [
  { title: '진료 센터', links: [{ label: '화상 치료 센터', page: 'burn-treatment' }, { label: 'HBOT 고압산소치료', page: 'hbot' }, { label: '응급수술센터', page: 'er-status' }] },
  { title: '진료 안내', links: [{ label: '온라인 예약', page: 'appointment' }, { label: '응급실 현황', page: 'er-status' }, { label: '산재 보험 안내', page: 'workers-comp' }] },
  { title: '병원 정보', links: [{ label: '의료진 소개', page: 'medical-team' }, { label: '장비 소개', page: 'equipment' }, { label: '오시는 길', page: 'directions' }] }];

  return (
    <footer className="h-footer" style={{ background: C.navy, color: '#fff', padding: '60px 32px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="h-footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: th.headingFont, fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 4 }}>서해한결의료원</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 20, letterSpacing: '0.03em' }}>화상 · 외상 응급의료기관</div>
            <address style={{ fontStyle: 'normal', fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, fontFamily: "'Noto Sans KR', sans-serif" }}>
              서산시 00길 00<br />
              대표 ☎ 041-0000-0000<br />
              응급 직통 041-0000-0000
            </address>
          </div>
          {cols.map((col, i) =>
          <div key={i}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 18, fontFamily: "'Inter', sans-serif" }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map((l, j) =>
              <button key={j} onClick={() => onNavigate(l.page)} style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                fontSize: 13, color: 'rgba(255,255,255,0.6)', fontFamily: "'Noto Sans KR', sans-serif",
                textAlign: 'left', transition: 'color 0.15s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                {l.label}</button>
              )}
              </div>
            </div>
          )}
        </div>
        <div className="h-footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', fontFamily: "'Inter', sans-serif" }}>
            © 2026 서해한결의료원. All rights reserved. &nbsp;|&nbsp; 사업자등록번호 000-00-00000 &nbsp;|&nbsp; 대표원장: 홍길동
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            {['개인정보처리방침', '이용약관', '환자 권리장전'].map((t, i) =>
            <span key={i} style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', cursor: 'pointer', fontFamily: "'Noto Sans KR', sans-serif" }}>{t}</span>
            )}
          </div>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { C, THEMES, NAV_LINKS, EmergencyBanner, Navigation, PageHero, SectionTitle, StatusPill, DocAvatar, Footer, getStatusColor });