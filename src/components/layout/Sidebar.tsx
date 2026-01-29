/**
 * Sidebar — design Figma MCP node 30:1516. Apenas elementos visuais: logo, nav, perfil (avatar + nome + email), toggle.
 */
import { NavLink } from 'react-router-dom';
import { useSidebar } from '@/hooks/useSidebar';
import {
  Home,
  CreditCard,
  User,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import logoImg from '@/assets/logo.png';
import logoCollapsedImg from '@/assets/logo-collapsed.png';

interface NavItem {
  path: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/cards', label: 'Cartões', icon: CreditCard },
];

const FIGMA_USER_NAME = 'Lucas Marte';
const FIGMA_USER_EMAIL = 'lucasmarte@gmail.com';

const LOGO_AREA_HEIGHT_PX = 56;

export default function Sidebar() {
  const { isExpanded, toggle } = useSidebar();

  return (
    <aside
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        position: 'relative',
        height: '100vh',
        width: isExpanded ? 'var(--sidebar-width-expanded)' : 'var(--sidebar-width-collapsed)',
        backgroundColor: 'var(--Colors-Surface-surface-500)',
        borderRight: '1px solid var(--color-neutral-300)',
        transition: 'width 300ms ease-in-out',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isExpanded ? 'space-between' : 'center',
          flexShrink: 0,
          padding: 'var(--space-16)',
        }}
      >
        <img
          src={isExpanded ? logoImg : logoCollapsedImg}
          alt="Mycash+"
          style={{
            height: isExpanded ? 24 : 40,
            width: 'auto',
            maxWidth: isExpanded ? '100%' : 48,
            objectFit: 'contain',
            objectPosition: isExpanded ? 'left center' : 'center center',
          }}
        />
      </div>

      <nav
        style={{
          flex: 1,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 'var(--space-16)',
          paddingBottom: 'var(--space-16)',
          paddingLeft: 'var(--space-16)',
          paddingRight: 'var(--space-16)',
        }}
      >
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: 'var(--space-8)',
          }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className="sidebar-nav-link"
                  style={({ isActive }) => ({
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    position: 'relative',
                    paddingTop: 'var(--space-12)',
                    paddingBottom: 'var(--space-12)',
                    paddingLeft: isExpanded ? 'var(--space-16)' : 0,
                    paddingRight: isExpanded ? 'var(--space-16)' : 0,
                    justifyContent: isExpanded ? 'flex-start' : 'center',
                    borderRadius: 9999,
                    textDecoration: 'none',
                    border: 'none',
                    boxShadow: 'none',
                  })}
                >
                  {({ isActive }) => (
                    <>
                      <span
                        style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundColor: isActive ? 'var(--Colors-Primary-primary-500)' : 'transparent',
                          borderRadius: 9999,
                        }}
                        aria-hidden
                      />
                      <span
                        style={{
                          position: 'relative',
                          zIndex: 10,
                          display: 'flex',
                          flexShrink: 0,
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--Colors-Secondary-secondary-900)',
                          marginRight: isExpanded ? 'var(--space-16)' : 0,
                        }}
                      >
                        <Icon size={20} />
                      </span>
                      <span
                        style={{
                          position: 'relative',
                          zIndex: 10,
                          display: isExpanded ? undefined : 'none',
                          color: 'var(--Colors-Secondary-secondary-900)',
                          fontSize: 'var(--Label-Medium-size)',
                          fontWeight: 'var(--Label-Medium-weight)',
                          lineHeight: 'var(--Label-Medium-lineHeight)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                        }}
                      >
                        {item.label}
                      </span>
                      {!isExpanded && (
                        <div
                          style={{
                            position: 'absolute',
                            left: '100%',
                            marginLeft: 'var(--space-12)',
                            padding: 'var(--space-8) var(--space-12)',
                            backgroundColor: 'var(--Colors-Primary-primary-500)',
                            color: 'var(--Colors-Secondary-secondary-900)',
                            fontSize: 'var(--Paragraph-Small-size)',
                            fontWeight: 'var(--Label-Medium-weight)',
                            lineHeight: 'var(--Paragraph-Small-lineHeight)',
                            whiteSpace: 'nowrap',
                            borderRadius: 6,
                            opacity: 0,
                            pointerEvents: 'none',
                            zIndex: 60,
                            transition: 'opacity 200ms ease',
                          }}
                          className="sidebar-nav-tooltip"
                        >
                          {item.label}
                        </div>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Perfil — Figma 1-6879: compacto, sem linha separadora; avatar 28px, Label/Medium, Paragraph/Small, space/12 */}
      <div
        style={{
          marginTop: 'auto',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: isExpanded ? 'flex-start' : 'center',
          gap: isExpanded ? 'var(--space-12)' : 0,
          padding: 'var(--space-12)',
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 'var(--shape-100)',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            backgroundColor: 'var(--color-neutral-300)',
          }}
        >
          <User size={14} style={{ color: 'var(--Colors-Secondary-secondary-900)' }} />
        </div>
        {isExpanded && (
          <div style={{ minWidth: 0, width: '100%' }}>
            <p
              style={{
                margin: 0,
                marginBottom: 4,
                color: 'var(--Colors-Secondary-secondary-900)',
                fontSize: 14,
                lineHeight: 1.25,
                fontWeight: 600,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {FIGMA_USER_NAME}
            </p>
            <p
              style={{
                margin: 0,
                color: 'var(--Colors-Secondary-secondary-900)',
                fontSize: 12,
                fontWeight: 400,
                lineHeight: 1.25,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {FIGMA_USER_EMAIL}
            </p>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={toggle}
        style={{
          position: 'absolute',
          top: LOGO_AREA_HEIGHT_PX / 2 - 8,
          right: -8,
          width: 16,
          height: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          border: '1px solid var(--color-neutral-300)',
          borderRadius: 'var(--shape-100)',
          backgroundColor: 'var(--Colors-Surface-surface-500)',
          boxShadow: '0 1px 4px rgba(0, 0, 0, 0.06)',
          zIndex: 9999,
          cursor: 'pointer',
        }}
        aria-label={isExpanded ? 'Recolher sidebar' : 'Expandir sidebar'}
      >
        {isExpanded ? (
          <ChevronLeft size={10} style={{ color: 'var(--Colors-Secondary-secondary-900)' }} aria-hidden />
        ) : (
          <ChevronRight size={10} style={{ color: 'var(--Colors-Secondary-secondary-900)' }} aria-hidden />
        )}
      </button>
    </aside>
  );
}
