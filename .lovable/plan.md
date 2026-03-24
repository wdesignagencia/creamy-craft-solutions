

## .htaccess para cPanel (SPA React + Vite)

O projeto atualmente **não possui** um arquivo `.htaccess`. Como é uma Single Page Application (SPA) com React Router (BrowserRouter), o `.htaccess` é essencial para que o roteamento funcione corretamente no cPanel — sem ele, qualquer URL diferente de `/` retornará erro 404 do Apache.

### O que será criado

Um arquivo `public/.htaccess` com as seguintes instruções:

1. **Rewrite para SPA** — Redireciona todas as rotas para `index.html`, permitindo que o React Router gerencie a navegação (rotas como `/produtos`, `/contato`, `/sobre`, etc.)
2. **Compressão GZIP** — Ativa compressão para HTML, CSS, JS, SVG, JSON e fontes, melhorando a performance
3. **Cache de assets estáticos** — Define headers de cache para imagens, fontes, CSS e JS (assets do Vite já possuem hash no nome, então cache longo é seguro)
4. **Headers de segurança** — `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`
5. **Forçar HTTPS** — Redirecionamento automático de HTTP para HTTPS (caso o domínio tenha SSL configurado)

### Detalhes Técnicos

- Arquivo criado em `public/.htaccess` — o Vite copia automaticamente para a raiz do `dist/` no build
- Usa `mod_rewrite` (padrão em hospedagens cPanel com Apache)
- Usa `mod_deflate` para compressão e `mod_expires` para cache
- A regra de rewrite ignora arquivos e diretórios existentes (`RewriteCond %{REQUEST_FILENAME} !-f` e `!-d`), garantindo que assets estáticos (imagens, JS, CSS) sejam servidos normalmente

