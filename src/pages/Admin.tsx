import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLeadStore } from '@/stores/useLeadStore';
import { Trash2, ExternalLink, Clock, CheckCircle2, PhoneCall } from 'lucide-react';
import { toast } from 'sonner';

const Admin = () => {
  const { leads, updateLeadStatus, deleteLead } = useLeadStore();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'New': return <Clock className="w-4 h-4 text-blue-400" />;
      case 'Contacted': return <PhoneCall className="w-4 h-4 text-yellow-400" />;
      case 'Closed': return <CheckCircle2 className="w-4 h-4 text-green-400" />;
      default: return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard — MyCarHub</title>
      </Helmet>

      <div className="min-h-screen bg-[var(--bg-main)]">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden mb-12">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1454165833767-02750849389e?w=1600&q=80" 
              alt="Admin Dashboard" 
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[var(--bg-main)]" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              Admin <span className="text-gradient">Control</span>
            </h1>
            <p className="text-gray-400">Manage and track your customer inquiries in real-time.</p>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-12 flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Lead Stream</h2>
              <p className="text-gray-500">Overview of all active and historical inquiries.</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-white">{leads.length}</p>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Total Leads</p>
            </div>
          </header>

          <div className="grid gap-6">
            {leads.length === 0 ? (
              <div className="glass p-20 text-center rounded-3xl border border-white/10">
                <p className="text-gray-500 text-lg">No inquiries yet.</p>
              </div>
            ) : (
              leads.map((lead) => (
                <motion.div
                  key={lead.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all flex flex-col md:flex-row justify-between gap-8"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 ${
                        lead.status === 'New' ? 'bg-blue-500/10 text-blue-400' :
                        lead.status === 'Contacted' ? 'bg-yellow-500/10 text-yellow-400' :
                        'bg-green-500/10 text-green-400'
                      }`}>
                        {getStatusIcon(lead.status)}
                        {lead.status}
                      </span>
                      <span className="text-xs text-gray-600 font-medium">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{lead.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {lead.email} • {lead.phone}
                    </p>
                    
                    {lead.carName && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-[var(--primary)] font-medium mb-4">
                        <ExternalLink className="w-3 h-3" />
                        Interested in: {lead.carName}
                      </div>
                    )}
                    
                    <p className="text-gray-300 text-sm italic bg-black/20 p-4 rounded-xl border border-white/5">
                      "{lead.message}"
                    </p>
                  </div>

                  <div className="flex flex-row md:flex-col justify-end gap-3 min-w-[150px]">
                    <select
                      value={lead.status}
                      onChange={(e) => updateLeadStatus(lead.id, e.target.value as any)}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-[var(--primary)] transition-all cursor-pointer"
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Closed">Closed</option>
                    </select>
                    <button
                      onClick={() => {
                        deleteLead(lead.id);
                        toast.error('Lead deleted');
                      }}
                      className="p-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all ml-auto md:ml-0"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
