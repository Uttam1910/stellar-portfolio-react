import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { adminStorage } from '../../services/adminStorage';
import { SEOHead } from '../../components/SEOHead';
import { 
  FaTachometerAlt, 
  FaEnvelope, 
  FaChartLine, 
  FaSignOutAlt, 
  FaDownload, 
  FaExternalLinkAlt,
  FaShieldAlt 
} from 'react-icons/fa';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  const [unreadCount, setUnreadCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setUnreadCount(adminStorage.getUnreadCount());
    const interval = setInterval(() => {
      setUnreadCount(adminStorage.getUnreadCount());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    adminStorage.logout();
    navigate('/admin/login', { replace: true });
  };

  const handleExport = () => {
    adminStorage.exportData();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      <SEOHead 
        title={`${title} — Portfolio Admin`} 
        description="Uttam Thapa Portfolio Admin Control Center" 
        canonicalUrl="https://www.uttamthapa.com/admin"
      />

      {/* Admin Top Header */}
      <header className="bg-slate-900 border-b border-slate-700/80 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center text-sm font-bold">
              <FaShieldAlt />
            </div>
            <div>
              <span className="font-sans font-bold text-sm text-white tracking-tight block">
                ADMIN CONTROL CENTER
              </span>
              <span className="font-mono text-[10px] text-blue-400 tracking-wider">
                Uttam Thapa Portfolio System
              </span>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleExport}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 text-xs font-mono transition-colors"
              title="Export all messages and analytics to JSON"
            >
              <FaDownload className="text-xs text-blue-400" />
              <span>Export JSON</span>
            </button>

            <Link
              to="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 text-xs font-mono transition-colors"
            >
              <span>View Site</span>
              <FaExternalLinkAlt className="text-[10px]" />
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 text-xs font-semibold transition-colors"
            >
              <FaSignOutAlt className="text-xs" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Sub-Navigation Tabs Bar */}
        <div className="bg-slate-900/60 border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto py-2">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`
              }
            >
              <FaTachometerAlt />
              <span>Dashboard</span>
            </NavLink>

            <NavLink
              to="/admin/messages"
              className={({ isActive }) =>
                `inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all relative ${
                  isActive
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`
              }
            >
              <FaEnvelope />
              <span>Messages Inbox</span>
              {unreadCount > 0 && (
                <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-amber-500 text-slate-950 rounded-full animate-pulse">
                  {unreadCount}
                </span>
              )}
            </NavLink>

            <NavLink
              to="/admin/analytics"
              className={({ isActive }) =>
                `inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`
              }
            >
              <FaChartLine />
              <span>Visitor Analytics</span>
            </NavLink>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Admin Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/40 py-4 text-center text-xs font-mono text-slate-500">
        Uttam Thapa Portfolio Admin System — Protected Environment
      </footer>
    </div>
  );
};
