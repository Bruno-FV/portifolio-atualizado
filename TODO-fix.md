# TODO-FIX: Corrigir Loop Infinito de Visitas

## Problema:
useEffect em Index.tsx com dep [track] causa re-renders infinitos → logs 'visit' em loop.

## Plano de Correção:
1. [x] Atualizar useTracking.ts: addVisit com cooldown 5min + session flag
2. [x] Atualizar Index.tsx: useEffect([], [])
3. [x] Testar: npm run dev → 1 visit só por sessão
4. [x] Atualizar TODO.md + completar

Próximo: Editar useTracking.ts

