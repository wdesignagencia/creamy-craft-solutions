

## Plano: Ativar downloads das fichas técnicas

Sim! Basta você anexar os PDFs das fichas técnicas aqui no chat. O plano:

1. **Receber os arquivos PDF** — você anexa os PDFs (um por modelo: J10, J60, J120, J240, J500, T1000D)
2. **Salvar em `public/fichas/`** — cada arquivo nomeado pelo slug (ex: `j10.pdf`, `j60.pdf`)
3. **Atualizar `src/data/products.ts`** — adicionar campo `pdfUrl` em cada produto apontando para `/fichas/j10.pdf` etc.
4. **Atualizar Downloads e ProductDetail** — transformar os botões "Baixar PDF" e "Ficha PDF" em links `<a href={product.pdfUrl} download>` funcionais

Pode anexar os PDFs na próxima mensagem que eu implemento tudo.

