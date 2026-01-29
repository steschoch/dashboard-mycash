import { useState, useEffect } from 'react';

export function useSidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggle = () => {
    setIsExpanded((prev) => !prev);
  };

  // Salvar preferência no localStorage (apenas para UX, não para dados do app)
  useEffect(() => {
    const saved = localStorage.getItem('sidebar-expanded');
    if (saved !== null) {
      setIsExpanded(saved === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', String(isExpanded));
  }, [isExpanded]);

  return {
    isExpanded,
    toggle,
    setIsExpanded,
  };
}
