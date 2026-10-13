# Fernando Henrique Marques Advogados

Landing page baseada no **Template 1 (v1.2.0)**. A arquitetura React/Vite e o processo de build foram preservados. O conteúdo do cliente está centralizado em `landing.data.json`.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Validação e produção

```bash
npm run lint
npm run build
npm run preview
```

O build gera `dist/`. O script de build também cria o HTML principal renderizado no servidor e o insere em `dist/index.html`; o React hidrata esse conteúdo no navegador. A página deve ser servida por HTTP durante os testes.

## Estado editorial

A página usa o nome, as seis imagens enviadas, telefone, e-mail e endereço fornecidos. As três fotografias temáticas aparecem como imagens ilustrativas, sem atribuir ao escritório uma área de atuação ainda não confirmada. O número informado também foi configurado para o botão fixo de WhatsApp a pedido do cliente.

**Publicação e indexação bloqueadas** até o recebimento e validação das informações em `SEO.md`. Enquanto isso, `robots.txt` impede rastreamento e os metadados usam `noindex`.
# fernandohenrique
