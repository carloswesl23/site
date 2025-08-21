# Estrutura do Projeto Standalone - Cardápio Digital

## Arquivos para copiar para o novo repositório:

### Raiz do projeto:
- `index.html` (de src/standalone-menu/index.html)
- `package.json` (de src/standalone-menu/package.json) 
- `vercel.json` (de src/standalone-menu/vercel.json)
- `tailwind.config.ts` (do projeto principal)
- `postcss.config.js` (do projeto principal)
- `tsconfig.json` (do projeto principal)
- `tsconfig.app.json` (do projeto principal)
- `tsconfig.node.json` (do projeto principal)
- `vite.config.ts` (do projeto principal)
- `components.json` (do projeto principal)

### src/:
- `src/main.tsx` (de src/standalone-menu/main.tsx)
- `src/StandaloneApp.tsx` (de src/standalone-menu/StandaloneApp.tsx)
- `src/StandaloneMenu.tsx` (de src/standalone-menu/StandaloneMenu.tsx)
- `src/standalone.css` (de src/standalone-menu/standalone.css)

### src/integrations/supabase/:
- `src/integrations/supabase/client.ts` (de src/standalone-menu/integrations/supabase/client.ts)
- `src/integrations/supabase/types.ts` (do projeto principal)

### src/hooks/:
- `src/hooks/useEstablishmentData.ts` (de src/standalone-menu/hooks/useEstablishmentData.ts)
- `src/hooks/useMenuProducts.ts` (de src/standalone-menu/hooks/useMenuProducts.ts)
- `src/hooks/use-mobile.tsx` (do projeto principal)
- `src/hooks/use-toast.ts` (do projeto principal)

### src/components/ui/: (todos do projeto principal)
- `src/components/ui/button.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/dialog.tsx`
- `src/components/ui/drawer.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/label.tsx`
- `src/components/ui/scroll-area.tsx`
- `src/components/ui/select.tsx`
- `src/components/ui/separator.tsx`
- `src/components/ui/sheet.tsx`
- `src/components/ui/textarea.tsx`
- `src/components/ui/toast.tsx`
- `src/components/ui/toaster.tsx`
- `src/components/ui/use-toast.ts`

### src/components/standalone/:
- `src/components/standalone/StandaloneMenuHeader.tsx`
- `src/components/standalone/StandaloneCategoryTabs.tsx`
- `src/components/standalone/StandaloneProductCard.tsx`
- `src/components/standalone/StandaloneCartDrawer.tsx`
- `src/components/standalone/StandaloneProductModal.tsx`
- `src/components/standalone/StandalonePizzaModal.tsx`
- `src/components/standalone/StandaloneCheckoutModal.tsx`

### src/lib/:
- `src/lib/utils.ts` (do projeto principal)

### src/pages/:
- `src/pages/NotFound.tsx` (do projeto principal)

## Instruções de Deploy:

1. **Criar novo repositório** no GitHub
2. **Copiar todos os arquivos** seguindo a estrutura acima
3. **Instalar dependências**: `npm install`
4. **Configurar Vercel**:
   - Conectar repositório
   - Variáveis de ambiente não necessárias (URLs hardcoded)
5. **Configurar DNS**:
   - Apontar menu.lovemenu.com.br para domínio Vercel
   - SSL automático na Vercel

## Funcionalidades Incluídas:
- ✅ Carrinho de compras
- ✅ Customizações de produtos
- ✅ Pizzas personalizáveis
- ✅ Upsell configurável
- ✅ Interface responsiva
- ✅ Isolamento por user_id
- ✅ Conexão Supabase
- ✅ Roteamento /:slug