import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, RefreshCw, Trash2 } from 'lucide-react';
import { useTracking } from '@/hooks/useTracking';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Downloads = () => {
  const { logs, refreshLogs, exportLogs, clearLogs } = useTracking();

  useEffect(() => {
    refreshLogs();
  }, [refreshLogs]);

  const totalVisits = logs.filter(l => l.action === 'visit').length;
  const totalDownloads = logs.filter(l => l.action === 'download').length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 md:px-6 py-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            📊 <span className="gradient-text">Estatísticas</span> de Acessos
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Registros de visitas e downloads do currículo salvos localmente no navegador.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div className="glass-card p-8 rounded-2xl text-center" whileHover={{ scale: 1.05 }}>
            <div className="text-3xl font-bold gradient-text mb-2">{totalVisits}</div>
            <div className="text-muted-foreground">Visitas ao Site</div>
          </motion.div>
          <motion.div className="glass-card p-8 rounded-2xl text-center" whileHover={{ scale: 1.05 }}>
            <div className="text-3xl font-bold text-primary mb-2">{totalDownloads}</div>
            <div className="text-muted-foreground">Downloads Currículo</div>
          </motion.div>
          <motion.div className="glass-card p-8 rounded-2xl text-center" whileHover={{ scale: 1.05 }}>
            <div className="text-3xl font-bold text-accent mb-2">{logs.length}</div>
            <div className="text-muted-foreground">Total Registros</div>
          </motion.div>
          <motion.div className="glass-card p-8 rounded-2xl text-center" whileHover={{ scale: 1.05 }}>
            <div className="text-3xl font-bold text-destructive mb-2">
              {Math.round((totalDownloads / (totalVisits || 1)) * 100) || 0}%
            </div>
            <div className="text-muted-foreground">Taxa Conversão</div>
          </motion.div>
        </div>

        {/* Actions */}
        <motion.div className="glass-card p-8 rounded-2xl mb-12 flex flex-wrap gap-4 justify-center">
          <button
            onClick={exportLogs}
            className="inline-flex items-center gap-2 px-6 py-3 hero-gradient rounded-lg font-semibold text-primary-foreground button-glow"
          >
<Download className="w-5 h-5" />
            📄 Salvar logs-estatisticas.txt
          </button>
          <button
            onClick={refreshLogs}
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary border border-border rounded-lg font-semibold hover:bg-muted transition-all"
          >
            <RefreshCw className="w-5 h-5 animate-spin" />
            Atualizar
          </button>
          {logs.length > 0 && (
            <button
              onClick={clearLogs}
              className="inline-flex items-center gap-2 px-6 py-3 bg-destructive/10 hover:bg-destructive text-destructive border border-destructive/20 rounded-lg font-semibold transition-all"
            >
              <Trash2 className="w-5 h-5" />
              Limpar Logs
            </button>
          )}
        </motion.div>

        {/* Logs Table */}
        {logs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-card p-12 rounded-2xl text-center"
          >
            <p className="text-muted-foreground text-lg mb-4">Nenhum registro encontrado</p>
            <p className="text-sm text-muted-foreground">Faça uma visita ou download para começar a rastrear!</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-border bg-muted/50">
              <h3 className="text-xl font-bold text-foreground">Últimos Registros ({logs.length})</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold text-foreground">Data/Hora</th>
                    <th className="text-left p-4 font-semibold text-foreground">Ação</th>
                    <th className="text-left p-4 font-semibold text-foreground">Detalhes</th>
                  </tr>
                </thead>
                <tbody>
                  {logs.slice(0, 50).map((log, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-border hover:bg-muted/50 transition-colors"
                    >
                      <td className="p-4 font-mono text-sm">
                        {new Date(log.timestamp).toLocaleString('pt-BR')}
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          log.action === 'download' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {log.action === 'download' ? '📥 DOWNLOAD' : '👁️ VISITA'}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground max-w-md truncate">
                        {JSON.stringify(log.details)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            {logs.length > 50 && (
              <div className="p-6 text-center text-sm text-muted-foreground border-t border-border">
                Mostrando 50 mais recentes de {logs.length} registros
              </div>
            )}
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Downloads;

