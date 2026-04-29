# TODO: Implementar Tracking de Acessos e Downloads do Currículo

Status: ✅ Concluída (com correções de loop infinito)

## Plano Aprovado:
- Usar localStorage para logs (visitas + downloads).
- Nova página `/downloads` para visualizar/exportar logs.txt.
- Atualizar Navbar com links download (track) + novo link Estatísticas.
- Sem GA4, foco em TXT via localStorage + download.

## Passos Lógicos (Marcar com [x] quando feito):

### 1. Criar hook para tracking [x]
   - `src/hooks/useTracking.ts`: Funções addVisit(), addDownload(), getLogs(), exportLogs().

### 2. Criar página Downloads [x]
   - `src/pages/Downloads.tsx`: Tabela logs + botão export TXT.

### 3. Atualizar App.tsx [x]
   - Adicionar rota `/downloads`.

### 4. Atualizar Navbar.tsx [x]
   - Adicionar onClick tracking nos links download.
   - Novo link nav: `/downloads` (Estatísticas).

### 5. Integrar tracking na página inicial [x]
   - Em Index.tsx: Chamar addVisit() onMount.

### 6. Testar [x]
   - npm run dev
   - Visitar site → download → /downloads → export TXT.

### 7. Completar [x]
   - Marcar todos [x], attempt_completion.

Próximo passo: Implementar hook useTracking.ts.

