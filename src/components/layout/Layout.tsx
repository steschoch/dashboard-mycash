import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen w-full bg-bg">
      {/* Navegação será adicionada nos próximos prompts */}
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}
