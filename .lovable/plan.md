

## Plano: Vídeos Institucionais em Locais Estratégicos

Os 3 vídeos (J002, J50, J500) serão usados de forma **institucional e neutra**, sem vínculo a produtos específicos, mostrando os moinhos em funcionamento para transmitir credibilidade e dinamismo.

### Locais de inserção

1. **Hero da página de Produtos** (`Products.tsx`)
   - Substituir o header atual (texto simples) por um hero com vídeo de fundo em loop (J500 — mais imponente)
   - Overlay escuro + texto por cima, estilo similar ao hero da Home
   - `<video autoPlay loop muted playsInline>` com `object-cover`

2. **Seção "Nossa História" na Home** (`Home.tsx`, linha 243)
   - Substituir o placeholder cinza com ícone Award por um vídeo em loop (J50)
   - Mantém o layout grid 50/50 existente, vídeo no lado direito

3. **Seção "Veja em Ação"** — nova seção na `Products.tsx`
   - Inserida entre o grid de cards e a tabela comparativa
   - Layout com 2 vídeos lado a lado (J002 e J50) em cards arredondados
   - Título "Veja Nossos Moinhos em Ação" + breve texto institucional
   - Vídeos com `rounded-xl`, sombra, e borda sutil

4. **Hero da página Tecnologia** (`Technology.tsx`)
   - Fundo com vídeo em loop (J002 — modelo laboratório combina com o contexto técnico)
   - Overlay + texto existente por cima

### Arquivos afetados

- **Copiar vídeos** para `public/videos/` (j002.mp4, j50.mp4, j500.mp4) — public porque vídeos são pesados e não devem ser bundled pelo Vite
- **`src/pages/Products.tsx`** — hero com vídeo + nova seção "Veja em Ação"
- **`src/pages/Home.tsx`** — vídeo na seção "Nossa História"
- **`src/pages/Technology.tsx`** — hero com vídeo de fundo

### Implementação técnica

Todos os vídeos usam a tag nativa HTML5:
```html
<video autoPlay loop muted playsInline className="...">
  <source src="/videos/j500.mp4" type="video/mp4" />
</video>
```
- `muted` é obrigatório para autoplay funcionar nos navegadores
- `playsInline` necessário para iOS
- Referenciados via `/videos/` (pasta public)

