export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

export interface VisitorLog {
  id: string;
  timestamp: string;
  path: string;
  referrer: string;
  browser: string;
  os: string;
  device: 'Mobile' | 'Tablet' | 'Desktop';
  visitorId: string;
}

export interface VisitorAnalytics {
  totalViews: number;
  uniqueVisitors: number;
  pageViewsByPath: Record<string, number>;
  deviceBreakdown: { Desktop: number; Mobile: number; Tablet: number };
  browserBreakdown: Record<string, number>;
  recentVisits: VisitorLog[];
}

const MESSAGES_KEY = 'portfolio_admin_messages';
const VISITS_KEY = 'portfolio_admin_visits';
const VISITOR_ID_KEY = 'portfolio_visitor_id';
const ADMIN_AUTH_KEY = 'portfolio_admin_auth';

// Utility helper to parse Browser, OS, and Device from navigator.userAgent
function parseUserAgent(): { browser: string; os: string; device: 'Mobile' | 'Tablet' | 'Desktop' } {
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  
  // Device
  let device: 'Mobile' | 'Tablet' | 'Desktop' = 'Desktop';
  if (/iPad|Tablet|Android(?!.*Mobile)/i.test(ua)) {
    device = 'Tablet';
  } else if (/Mobile|iPhone|Android/i.test(ua)) {
    device = 'Mobile';
  }

  // OS
  let os = 'Unknown OS';
  if (/Windows/i.test(ua)) os = 'Windows';
  else if (/Macintosh|Mac OS X/i.test(ua)) os = 'macOS';
  else if (/Linux/i.test(ua)) os = 'Linux';
  else if (/Android/i.test(ua)) os = 'Android';
  else if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS';

  // Browser
  let browser = 'Unknown Browser';
  if (/Edg/i.test(ua)) browser = 'Microsoft Edge';
  else if (/Chrome/i.test(ua)) browser = 'Chrome';
  else if (/Safari/i.test(ua)) browser = 'Safari';
  else if (/Firefox/i.test(ua)) browser = 'Firefox';
  else if (/Opera|OPR/i.test(ua)) browser = 'Opera';

  return { browser, os, device };
}

// Get or generate persistent unique visitor ID
function getOrCreateVisitorId(): string {
  try {
    let id = localStorage.getItem(VISITOR_ID_KEY);
    if (!id) {
      id = 'v_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
      localStorage.setItem(VISITOR_ID_KEY, id);
    }
    return id;
  } catch (e) {
    return 'v_temp_' + Date.now();
  }
}

export const adminStorage = {
  // --- Admin Authentication ---
  login(usernameInput: string, passwordInput: string): boolean {
    const envUser = 
      process.env.REACT_APP_ADMIN_USERNAME || 
      (import.meta as any).env?.VITE_ADMIN_USERNAME || 
      'admin';

    const envPass = 
      process.env.REACT_APP_ADMIN_PASSWORD || 
      (import.meta as any).env?.VITE_ADMIN_PASSWORD || 
      'admin123';

    if (usernameInput.trim() === envUser && passwordInput.trim() === envPass) {
      try {
        sessionStorage.setItem(ADMIN_AUTH_KEY, 'true');
        localStorage.setItem(ADMIN_AUTH_KEY, 'true');
      } catch (e) {}
      return true;
    }
    return false;
  },

  logout(): void {
    try {
      sessionStorage.removeItem(ADMIN_AUTH_KEY);
      localStorage.removeItem(ADMIN_AUTH_KEY);
    } catch (e) {}
  },

  isAuthenticated(): boolean {
    try {
      return (
        sessionStorage.getItem(ADMIN_AUTH_KEY) === 'true' ||
        localStorage.getItem(ADMIN_AUTH_KEY) === 'true'
      );
    } catch (e) {
      return false;
    }
  },

  // --- Messages Management ---
  getMessages(): ContactMessage[] {
    try {
      const data = localStorage.getItem(MESSAGES_KEY);
      if (!data) return [];
      return JSON.parse(data);
    } catch (e) {
      return [];
    }
  },

  addMessage(msg: { name: string; email: string; message: string }): ContactMessage {
    const messages = this.getMessages();
    const newMessage: ContactMessage = {
      id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      name: msg.name,
      email: msg.email,
      message: msg.message,
      timestamp: new Date().toISOString(),
      isRead: false,
    };
    messages.unshift(newMessage);
    try {
      localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
    } catch (e) {}
    return newMessage;
  },

  markAsRead(id: string): void {
    const messages = this.getMessages().map((m) =>
      m.id === id ? { ...m, isRead: true } : m
    );
    try {
      localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
    } catch (e) {}
  },

  deleteMessage(id: string): void {
    const messages = this.getMessages().filter((m) => m.id !== id);
    try {
      localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
    } catch (e) {}
  },

  getUnreadCount(): number {
    return this.getMessages().filter((m) => !m.isRead).length;
  },

  // --- Visitor Analytics Management ---
  logVisitor(path: string): void {
    try {
      // Don't track admin pages themselves as public visitor traffic
      if (path.startsWith('/admin')) return;

      const visits = this.getVisitorLogs();
      const { browser, os, device } = parseUserAgent();
      const visitorId = getOrCreateVisitorId();

      const newLog: VisitorLog = {
        id: 'vis_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        timestamp: new Date().toISOString(),
        path: path || '/',
        referrer: typeof document !== 'undefined' && document.referrer ? document.referrer : 'Direct',
        browser,
        os,
        device,
        visitorId,
      };

      // Limit stored logs to last 500 to keep localStorage clean
      visits.unshift(newLog);
      if (visits.length > 500) visits.pop();

      localStorage.setItem(VISITS_KEY, JSON.stringify(visits));
    } catch (e) {}
  },

  getVisitorLogs(): VisitorLog[] {
    try {
      const data = localStorage.getItem(VISITS_KEY);
      if (!data) return [];
      return JSON.parse(data);
    } catch (e) {
      return [];
    }
  },

  getAnalytics(): VisitorAnalytics {
    const logs = this.getVisitorLogs();
    const uniqueVisitorsSet = new Set<string>();
    const pageViewsByPath: Record<string, number> = {};
    const deviceBreakdown: { Desktop: number; Mobile: number; Tablet: number } = {
      Desktop: 0,
      Mobile: 0,
      Tablet: 0,
    };
    const browserBreakdown: Record<string, number> = {};

    logs.forEach((log) => {
      uniqueVisitorsSet.add(log.visitorId);
      
      // Page views count
      pageViewsByPath[log.path] = (pageViewsByPath[log.path] || 0) + 1;

      // Device count
      if (log.device in deviceBreakdown) {
        deviceBreakdown[log.device]++;
      } else {
        deviceBreakdown.Desktop++;
      }

      // Browser count
      browserBreakdown[log.browser] = (browserBreakdown[log.browser] || 0) + 1;
    });

    return {
      totalViews: logs.length,
      uniqueVisitors: uniqueVisitorsSet.size,
      pageViewsByPath,
      deviceBreakdown,
      browserBreakdown,
      recentVisits: logs.slice(0, 50),
    };
  },

  clearAnalytics(): void {
    try {
      localStorage.removeItem(VISITS_KEY);
    } catch (e) {}
  },

  exportData(): void {
    const exportObject = {
      messages: this.getMessages(),
      analytics: this.getAnalytics(),
      allVisitorLogs: this.getVisitorLogs(),
      exportDate: new Date().toISOString(),
    };

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportObject, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `portfolio_admin_export_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  },
};
