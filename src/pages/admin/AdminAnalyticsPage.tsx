import React, { useState, useEffect } from 'react';
import { AdminLayout } from './AdminLayout';
import { adminStorage, VisitorAnalytics, VisitorLog } from '../../services/adminStorage';
import { 
  FaChartBar, 
  FaLaptop, 
  FaMobileAlt, 
  FaTabletAlt, 
  FaGlobe, 
  FaTrash, 
  FaDownload,
  FaRedo
} from 'react-icons/fa';

export const AdminAnalyticsPage: React.FC = () => {
  const [analytics, setAnalytics] = useState<VisitorAnalytics | null>(null);
  const [logs, setLogs] = useState<VisitorLog[]>([]);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = () => {
    setAnalytics(adminStorage.getAnalytics());
    setLogs(adminStorage.getVisitorLogs());
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to reset all stored visitor logs? This action cannot be undone.')) {
      adminStorage.clearAnalytics();
      loadAnalytics();
    }
  };

  const formatDate = (isoString: string) => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    } catch (e) {
      return isoString;
    }
  };

  const totalDeviceCount = analytics
    ? analytics.deviceBreakdown.Desktop + analytics.deviceBreakdown.Mobile + analytics.deviceBreakdown.Tablet
    : 0;

  return (
    <AdminLayout title="Visitor Traffic & Route Analytics">
      <div className="space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Visitor Analytics & Audience Insights</h1>
            <p className="text-slate-400 text-xs font-mono mt-1">Detailed visitor route traffic, device demographics, and browser logs</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={loadAnalytics}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors"
            >
              <FaRedo className="text-xs" />
              <span>Refresh</span>
            </button>
            <button
              onClick={() => adminStorage.exportData()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <FaDownload className="text-xs" />
              <span>Export JSON</span>
            </button>
            <button
              onClick={handleClear}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-semibold transition-colors"
            >
              <FaTrash className="text-xs" />
              <span>Clear Analytics</span>
            </button>
          </div>
        </div>

        {/* 2 Grid Columns for Route breakdown & Devices */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Top Visited Routes */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-700/80 rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="font-bold text-base text-white">Popular Portfolio Routes</h3>
                <p className="text-slate-400 text-xs font-mono">Page views distribution by URL path</p>
              </div>
              <FaChartBar className="text-blue-400 text-lg" />
            </div>

            {!analytics || Object.keys(analytics.pageViewsByPath).length === 0 ? (
              <div className="text-center py-8 text-slate-500 text-xs font-mono">
                No route hits recorded yet.
              </div>
            ) : (
              <div className="space-y-3">
                {Object.entries(analytics.pageViewsByPath)
                  .sort((a, b) => b[1] - a[1])
                  .map(([path, count]) => {
                    const percentage = Math.round((count / (analytics.totalViews || 1)) * 100);
                    return (
                      <div key={path} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-mono text-white font-semibold">{path}</span>
                          <span className="font-mono text-slate-400">{count} views ({percentage}%)</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
                          <div
                            className="h-full bg-blue-500 rounded-full transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>

          {/* Device & Browser Demographic */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-700/80 rounded-xl p-6 space-y-6">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div>
                  <h3 className="font-bold text-base text-white">Device Breakdown</h3>
                  <p className="text-slate-400 text-xs font-mono">Desktop vs Mobile vs Tablet</p>
                </div>
                <FaGlobe className="text-purple-400 text-lg" />
              </div>

              {analytics && totalDeviceCount > 0 ? (
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center space-y-1">
                    <FaLaptop className="text-blue-400 mx-auto text-base" />
                    <div className="text-xs font-bold text-white">Desktop</div>
                    <div className="text-xs font-mono text-slate-400">
                      {analytics.deviceBreakdown.Desktop} ({Math.round((analytics.deviceBreakdown.Desktop / totalDeviceCount) * 100)}%)
                    </div>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center space-y-1">
                    <FaMobileAlt className="text-emerald-400 mx-auto text-base" />
                    <div className="text-xs font-bold text-white">Mobile</div>
                    <div className="text-xs font-mono text-slate-400">
                      {analytics.deviceBreakdown.Mobile} ({Math.round((analytics.deviceBreakdown.Mobile / totalDeviceCount) * 100)}%)
                    </div>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center space-y-1">
                    <FaTabletAlt className="text-purple-400 mx-auto text-base" />
                    <div className="text-xs font-bold text-white">Tablet</div>
                    <div className="text-xs font-mono text-slate-400">
                      {analytics.deviceBreakdown.Tablet} ({Math.round((analytics.deviceBreakdown.Tablet / totalDeviceCount) * 100)}%)
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4 text-slate-500 text-xs font-mono">
                  No device data available yet.
                </div>
              )}
            </div>

            {/* Browsers List */}
            <div>
              <h4 className="font-bold text-xs text-white uppercase tracking-wider font-mono mb-2">Browser Distribution</h4>
              {analytics && Object.keys(analytics.browserBreakdown).length > 0 ? (
                <div className="space-y-1.5">
                  {Object.entries(analytics.browserBreakdown).map(([browser, count]) => (
                    <div key={browser} className="flex items-center justify-between text-xs p-2 rounded bg-slate-950 border border-slate-800/80">
                      <span className="text-slate-300 font-mono">{browser}</span>
                      <span className="font-mono text-blue-400 font-bold">{count} visits</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-slate-500 text-xs font-mono">No browser data logged yet.</div>
              )}
            </div>
          </div>

        </div>

        {/* Visitor Logs Table */}
        <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h3 className="font-bold text-base text-white">Full Visitor Session Log</h3>
              <p className="text-slate-400 text-xs font-mono">Chronological list of all visitor page views</p>
            </div>
            <span className="text-xs font-mono text-slate-400">Showing last {logs.length} entries</span>
          </div>

          {logs.length === 0 ? (
            <div className="text-center py-10 text-slate-500 text-xs font-mono">
              No traffic logs captured. Visit pages on the portfolio to record visitor sessions.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-3 px-4">Date & Time</th>
                    <th className="py-3 px-4">Visited Path</th>
                    <th className="py-3 px-4">Device</th>
                    <th className="py-3 px-4">Browser & OS</th>
                    <th className="py-3 px-4">Referrer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {logs.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-950/60 transition-colors">
                      <td className="py-3 px-4 text-slate-400">{formatDate(log.timestamp)}</td>
                      <td className="py-3 px-4 font-bold text-blue-400">{log.path}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] ${
                          log.device === 'Mobile' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-blue-500/20 text-blue-300'
                        }`}>
                          {log.device}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-300">{log.browser} ({log.os})</td>
                      <td className="py-3 px-4 text-slate-500 truncate max-w-[150px]">{log.referrer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </AdminLayout>
  );
};
