/**
 * Sidebar — design Figma MCP node 30:1516.
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
          padding: 'var(--space-16)',
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
                  style={{
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
                  }}
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
                        {/* Removido o size literal para evitar erro de tipagem */}
                        <Icon className="size-5" />
                      </span>
                      {isExpanded && (
                        <span
                          style={{
                            position: 'relative',
                            zIndex: 10,
                            color: 'var(--Colors-Secondary-secondary-900)',
                            fontSize: 'var(--Label-Medium-size)',
                            fontWeight: 'var(--Label-Medium-weight)',
                            lineHeight: 'var(--Label-Medium-lineHeight)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {item.label}
                        </span>
                      )}
                      {!isExpanded && (
                        <div
                          className="sidebar-nav-tooltip"
                          style={{
                            position: 'absolute',
                            left: '100%',
                            marginLeft: 'var(--space-12)',
                            padding: 'var(--space-8) var(--space-12)',
                            backgroundColor: 'var(--Colors-Primary-primary-500)',
                            color: 'var(--Colors-Secondary-secondary-900)',
                            borderRadius: 6,
                            zIndex: 60,
                            whiteSpace: 'nowrap',
                          }}
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

      <div
        style={{
          marginTop: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isExpanded ? 'flex-start' : 'center',
          padding: 'var(--space-12)',
          gap: isExpanded ? 'var(--space-12)' : 0,
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--color-neutral-300)',
          }}
        >
          <User className="size-3.5" style={{ color: 'var(--Colors-Secondary-secondary-900)' }} />
        </div>
        {isExpanded && (
          <div style={{ minWidth: 0, width: '100%' }}>
            <p style={{ margin: 0, fontWeight: 600, fontSize: 14 }}>{FIGMA_USER_NAME}</p>
            <p style={{ margin: 0, fontSize: 12 }}>{FIGMA_USER_EMAIL}</p>
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
          border: '1px solid var(--color-neutral-300)',
          borderRadius: '50%',
          backgroundColor: 'var(--Colors-Surface-surface-500)',
          cursor: 'pointer',
          zIndex: 9999,
        }}
      >
        {isExpanded ? <ChevronLeft className="size-2.5" /> : <ChevronRight className="size-2.5" />}
      </button>
    </aside>
  );
}