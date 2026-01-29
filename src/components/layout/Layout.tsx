/**
 * Layout — implementação do design Figma MCP node 30:1516.
 * Estrutura: sidebar (Sidebar) + área principal (main). Cores e espaço via get_variable_defs(30:1516).
 */
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <div
      className="min-h-screen w-full flex"
      style={{ backgroundColor: 'var(--Colors-Surface-surface-500)' }}
    >
      <Sidebar />
      <main className="flex-1 w-full min-w-0 transition-all duration-300 ease-in-out">
        <Outlet />
      </main>
    </div>
  );
}
