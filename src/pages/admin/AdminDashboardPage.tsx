import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from './AdminLayout';
import { adminStorage, VisitorAnalytics, ContactMessage } from '../../services/adminStorage';
import { 
  FaEye, 
  FaUsers, 
  FaEnvelope, 
  FaEnvelopeOpen, 
  FaLaptop, 
  FaMobileAlt, 
  FaTabletAlt,
  FaArrowRight,
  FaClock,
  FaExternalLinkAlt
} from 'react-icons/fa';

export const AdminDashboardPage: React.FC = () => {
  const [analytics, setAnalytics] = useState<VisitorAnalytics | null>(null);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 4000);
    return () => clearInterval(interval);
  }, []);

  const loadData = () => {
    setAnalytics(adminStorage.getAnalytics());
    setMessages(adminStorage.getMessages());
    setUnreadCount(adminStorage.getUnreadCount());
  };

  const formatDate = (isoString: string) => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch (e) {
      return isoString;
    }
  };

  return (
    <AdminLayout title="Admin Overview Dashboard">
      <div className="space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">System Overview</h1>
            <p className="text-slate-400 text-xs font-mono mt-1">Real-time Visitor Analytics & Inbox Snapshot</p>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Analytics Engine Active</span>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Total Page Views */}
          <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Total Page Views</span>
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center text-sm">
                <FaEye />
              </div>
            </div>
            <div className="text-3xl font-bold text-white tracking-tight">
              {analytics ? analytics.totalViews : 0}
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Across all portfolio routes
            </div>
          </div>

          {/* Card 2: Unique Visitors */}
          <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Unique Visitors</span>
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center text-sm">
                <FaUsers />
              </div>
            </div>
            <div className="text-3xl font-bold text-white tracking-tight">
              {analytics ? analytics.uniqueVisitors : 0}
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Distinct visitor tokens
            </div>
          </div>

          {/* Card 3: Total Messages */}
          <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Total Contact Emails</span>
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-sm">
                <FaEnvelopeOpen />
              </div>
            </div>
            <div className="text-3xl font-bold text-white tracking-tight">
              {messages.length}
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Captured recruiter inquiries
            </div>
          </div>

          {/* Card 4: Unread Inbox */}
          <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Unread Inbox</span>
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center text-sm">
                <FaEnvelope />
              </div>
            </div>
            <div className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>{unreadCount}</span>
              {unreadCount > 0 && (
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-amber-500/20 text-amber-400">Action Required</span>
              )}
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Pending recruiter messages
            </div>
          </div>
        </div>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Recent Messages Preview */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-700/80 rounded-xl p-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div>
                  <h3 className="font-bold text-base text-white">Recent Messages Inbox</h3>
                  <p className="text-slate-400 text-xs font-mono">Latest inquiries submitted on portfolio</p>
                </div>
                <Link
                  to="/admin/messages"
                  className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:text-blue-300"
                >
                  <span>View All ({messages.length})</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>

              {messages.length === 0 ? (
                <div className="text-center py-10 text-slate-500 text-xs font-mono">
                  No messages received yet. When recruiters submit the contact form, their emails will appear here.
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.slice(0, 4).map((msg) => (
                    <div
                      key={msg.id}
                      className={`p-3.5 rounded-lg border text-xs space-y-1.5 transition-colors ${
                        msg.isRead
                          ? 'bg-slate-950/60 border-slate-800/80 text-slate-300'
                          : 'bg-blue-500/10 border-blue-500/30 text-white font-medium'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">{msg.name}</span>
                        <span className="text-[10px] font-mono text-slate-400">{formatDate(msg.timestamp)}</span>
                      </div>
                      <div className="text-blue-400 font-mono text-[11px]">{msg.email}</div>
                      <p className="text-slate-300 line-clamp-2 leading-relaxed">{msg.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Recent Visitors Activity Log */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-700/80 rounded-xl p-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div>
                  <h3 className="font-bold text-base text-white">Live Visitor Stream</h3>
                  <p className="text-slate-400 text-xs font-mono">Latest page view hits</p>
                </div>
                <Link
                  to="/admin/analytics"
                  className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:text-blue-300"
                >
                  <span>Full Analytics</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>

              {!analytics || analytics.recentVisits.length === 0 ? (
                <div className="text-center py-10 text-slate-500 text-xs font-mono">
                  No visitor logs registered yet. Navigate around the site to log live traffic.
                </div>
              ) : (
                <div className="space-y-2.5 overflow-x-auto">
                  {analytics.recentVisits.slice(0, 5).map((visit) => (
                    <div
                      key={visit.id}
                      className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="text-blue-400 text-sm flex-shrink-0">
                          {visit.device === 'Mobile' ? (
                            <FaMobileAlt />
                          ) : visit.device === 'Tablet' ? (
                            <FaTabletAlt />
                          ) : (
                            <FaLaptop />
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="font-mono text-white text-xs truncate">
                            {visit.path}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400 truncate">
                            {visit.browser} • {visit.os}
                          </div>
                        </div>
                      </div>

                      <div className="text-[10px] font-mono text-slate-400 flex-shrink-0 flex items-center gap-1">
                        <FaClock className="text-[9px]" />
                        <span>{formatDate(visit.timestamp)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </AdminLayout>
  );
};
