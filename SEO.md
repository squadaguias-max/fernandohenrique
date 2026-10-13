# SEO e pendências de publicação

## Posicionamento provisório

Tema atual: informações e contato para advocacia em Franca/SP. A página não declara área de atuação específica, atendimento on-line ou abrangência territorial além do endereço informado. O posicionamento de busca final depende da confirmação das áreas jurídicas e serviços reais.

## Implementado

- HTML inicial de produção com conteúdo principal renderizado, um H1 e seções semânticas.
- Título, descrição, idioma `pt-BR`, viewport, favicon, cor do tema, Open Graph e Twitter Card básicos.
- Dados estruturados `LegalService`, `Person` e `FAQPage`, limitados às informações visíveis e confirmadas.
- Foto principal priorizada, todas as imagens fornecidas incorporadas como recursos locais, fotografias temáticas otimizadas e carregadas sob demanda, dimensões declaradas, navegação acessível, links telefônico, WhatsApp e de e-mail, endereço, mapa incorporado e link externo para rota.
- `noindex` e `robots.txt` bloqueando rastreamento enquanto faltam dados essenciais. Não há canonical nem sitemap porque não foi informado domínio oficial.

## Dados que faltam enviar

1. Áreas de atuação e serviços efetivamente prestados, com a prioridade da landing page.
2. Número da OAB e UF de Fernando Henrique.
3. Domínio oficial a ser usado na publicação.
4. Modalidades de atendimento (presencial, on-line ou ambas) e regiões atendidas.
5. Biografia e credenciais aprovadas, caso devam constar na página.
6. Confirmação final da marca, foto, endereço e textos para publicação. O WhatsApp usa o número `(48) 98812-2932` informado pelo cliente; corrigir caso seja diferente.

## Depois de receber os dados

- Atualizar `landing.data.json`, seções, FAQ, metadados e JSON-LD; adicionar OAB visível.
- Configurar uma URL pública absoluta em canonical, `og:url`, `og:image`, Twitter Card e dados estruturados. Preparar imagem social com marca aprovada.
- Criar `sitemap.xml` com a única URL canônica pública; incluir sua URL em `robots.txt` e permitir rastreamento.
- Remover `noindex` somente após revisão profissional e publicação no domínio correto.
- Validar HTML servido, metadados, JSON-LD, links, responsividade e a saída de `npm run lint` e `npm run build`.
- Depois da publicação, verificar o domínio no Google Search Console, enviar o sitemap, testar os dados estruturados e manter as informações do Perfil da Empresa no Google consistentes.

## Observação editorial

O texto de rodapé foi redigido para identificar o material como informativo sem afirmar que a landing page deixa de ser publicidade profissional. A redação final deve passar por revisão de quem responde pelo escritório.
