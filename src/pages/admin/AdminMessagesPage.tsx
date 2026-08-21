import React, { useState, useEffect } from 'react';
import { AdminLayout } from './AdminLayout';
import { adminStorage, ContactMessage } from '../../services/adminStorage';
import { 
  FaEnvelope, 
  FaEnvelopeOpen, 
  FaTrash, 
  FaReply, 
  FaSearch, 
  FaCheck, 
  FaUndo 
} from 'react-icons/fa';

export const AdminMessagesPage: React.FC = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = () => {
    setMessages(adminStorage.getMessages());
  };

  const handleMarkAsRead = (id: string) => {
    adminStorage.markAsRead(id);
    loadMessages();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      adminStorage.deleteMessage(id);
      loadMessages();
    }
  };

  const filteredMessages = messages.filter((msg) => {
    const matchesFilter =
      filter === 'all' ? true : filter === 'unread' ? !msg.isRead : msg.isRead;
    const matchesSearch =
      msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.message.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const formatDate = (isoString: string) => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString() + ' at ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch (e) {
      return isoString;
    }
  };

  return (
    <AdminLayout title="Messages Inbox">
      <div className="space-y-6">
        
        {/* Header & Stats */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Recruiter Messages Inbox</h1>
            <p className="text-slate-400 text-xs font-mono mt-1">Manage inquiries submitted via portfolio contact form</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
              Total: <strong className="text-white">{messages.length}</strong>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400">
              Unread: <strong className="text-amber-300">{messages.filter(m => !m.isRead).length}</strong>
            </span>
          </div>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Tabs */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-blue-500 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              All ({messages.length})
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'unread'
                  ? 'bg-blue-500 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Unread ({messages.filter(m => !m.isRead).length})
            </button>
            <button
              onClick={() => setFilter('read')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'read'
                  ? 'bg-blue-500 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Read ({messages.filter(m => m.isRead).length})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 text-xs">
              <FaSearch />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search sender, email, message..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Messages List */}
        {filteredMessages.length === 0 ? (
          <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-12 text-center text-slate-400 space-y-3">
            <FaEnvelopeOpen className="text-3xl mx-auto text-slate-600" />
            <h3 className="text-base font-bold text-white">No Messages Found</h3>
            <p className="text-xs font-mono text-slate-500 max-w-md mx-auto">
              {searchTerm
                ? `No messages matching search "${searchTerm}".`
                : 'Your admin message inbox is currently empty. Contact submissions will automatically land here.'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredMessages.map((msg) => (
              <div
                key={msg.id}
                className={`bg-slate-900 border rounded-xl p-6 transition-all ${
                  msg.isRead
                    ? 'border-slate-800 text-slate-300'
                    : 'border-blue-500/40 bg-slate-900/90 shadow-md ring-1 ring-blue-500/20'
                }`}
              >
                {/* Message Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${
                      msg.isRead ? 'bg-slate-800 text-slate-400' : 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                    }`}>
                      {msg.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm sm:text-base">{msg.name}</span>
                        {!msg.isRead && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                            NEW UNREAD
                          </span>
                        )}
                      </div>
                      <a
                        href={`mailto:${msg.email}`}
                        className="text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {msg.email}
                      </a>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-400">
                    {formatDate(msg.timestamp)}
                  </span>
                </div>

                {/* Body */}
                <div className="mb-6 whitespace-pre-wrap text-xs sm:text-sm text-slate-200 leading-relaxed font-sans bg-slate-950/60 p-4 rounded-lg border border-slate-800">
                  {msg.message}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    {!msg.isRead ? (
                      <button
                        onClick={() => handleMarkAsRead(msg.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 text-xs font-semibold transition-colors"
                      >
                        <FaCheck className="text-blue-400 text-xs" />
                        <span>Mark as Read</span>
                      </button>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500">
                        <FaCheck className="text-emerald-400" />
                        <span>Read</span>
                      </span>
                    )}

                    <a
                      href={`mailto:${msg.email}?subject=Re: Inquiry on Uttam Thapa Portfolio&body=%0A%0A---%0AOriginal Message from ${encodeURIComponent(msg.name)}:%0A${encodeURIComponent(msg.message)}`}
                      onClick={() => !msg.isRead && handleMarkAsRead(msg.id)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold shadow-sm transition-all"
                    >
                      <FaReply className="text-xs" />
                      <span>Reply via Email</span>
                    </a>
                  </div>

                  <button
                    onClick={() => handleDelete(msg.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-semibold transition-colors"
                  >
                    <FaTrash className="text-xs" />
                    <span>Delete</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </AdminLayout>
  );
};
