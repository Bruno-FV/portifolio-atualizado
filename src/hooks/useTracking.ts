import { useEffect, useState, useCallback } from 'react';

interface LogEntry {
  timestamp: string;
  action: 'visit' | 'download';
  details?: {
    method?: string;
    userAgent?: string;
    url?: string;
    sessionId?: string;
  };
}

const LOG_KEY = 'portfolio_logs';
const SESSION_KEY = 'portfolio_session';
const COOLDOWN_MINUTES = 5;

const getLogs = (): LogEntry[] => {
  try {
    const logs = localStorage.getItem(LOG_KEY);
    return logs ? JSON.parse(logs) as LogEntry[] : [];
  } catch {
    return [];
  }
};

const saveLogs = (logs: LogEntry[]) => {
  try {
    localStorage.setItem(LOG_KEY, JSON.stringify(logs));
  } catch (err) {
    console.error('Erro ao salvar logs:', err);
  }
};

const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = 'sess_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
};

const shouldLogVisit = (): boolean => {
  const logs = getLogs();
  const recentVisit = logs.find(log => log.action === 'visit');
  if (recentVisit) {
    const lastTime = new Date(recentVisit.timestamp).getTime();
    const now = Date.now();
    if (now - lastTime < COOLDOWN_MINUTES * 60 * 1000) {
      console.log('Visita ignorada: cooldown 5min');
      return false;
    }
  }
  return true;
};

export const useTracking = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  const addVisit = useCallback(() => {
    if (!shouldLogVisit()) return;

    const sessionId = getSessionId();
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      action: 'visit',
      details: {
        userAgent: navigator.userAgent.slice(0, 100),
        url: window.location.href,
        sessionId,
      },
    };
    const currentLogs = getLogs();
    const newLogs = [entry, ...currentLogs.slice(0, 499)]; // Máx 500
    saveLogs(newLogs);
    setLogs(newLogs);
    console.log('✅ VISITA registrada');
  }, []);

  const addDownload = useCallback((method: string = 'unknown') => {
    const sessionId = getSessionId();
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      action: 'download',
      details: {
        method,
        userAgent: navigator.userAgent.slice(0, 100),
        sessionId,
      },
    };
    const currentLogs = getLogs();
    const newLogs = [entry, ...currentLogs.slice(0, 499)];
    saveLogs(newLogs);
    setLogs(newLogs);
    console.log('✅ DOWNLOAD registrado:', method);
  }, []);

  const refreshLogs = useCallback(() => {
    setLogs(getLogs());
  }, []);

  const exportLogs = useCallback(() => {
    const allLogs = getLogs();
    const visits = allLogs.filter(l => l.action === 'visit').length;
    const downloads = allLogs.filter(l => l.action === 'download').length;
    const lastUpdate = new Date().toLocaleString('pt-BR');

    const content = `# LOGS-ESTATISTICAS.TXT - Portfolio Bruno FV
Gerado: ${lastUpdate}
Sessão: ${getSessionId()}

ESTATÍSTICAS:
Visitas: ${visits}
Downloads CV: ${downloads}
Total: ${allLogs.length}

DETALHES:
${allLogs.map((log, i) => {
  const time = new Date(log.timestamp).toLocaleString('pt-BR');
  const session = log.details?.sessionId?.slice(-8) || 'N/A';
  const detail = log.details?.method || log.details?.url?.slice(0,40) || 'web';
  return `${i+1}. [${time}] ${log.action.toUpperCase()} | Sess:${session} | ${detail}`;
}).join('\n')}

---
Salve este arquivo como logs-estatisticas.txt para persistência.
Dados originais em localStorage do browser.
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'logs-estatisticas.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    console.log('📄 logs-estatisticas.txt baixado!');
  }, []);

  const clearLogs = useCallback(() => {
    localStorage.removeItem(LOG_KEY);
    sessionStorage.removeItem(SESSION_KEY);
    setLogs([]);
  }, []);

  return {
    logs,
    addVisit,
    addDownload,
    refreshLogs,
    exportLogs,
    clearLogs,
  };
};

