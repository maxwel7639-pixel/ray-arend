# Ray Arend | Terapeuta — site

Site estático (HTML + CSS + JS puro, sem build) implementado a partir do projeto
do Claude Design **“Ray Arend website updates”** (`Ray Arend.dc.html`).

## Estrutura

```
index.html          página única, com todas as seções
css/styles.css      tokens do design system Nocturne + componentes
js/main.js          reveal ao rolar + tilt nos cards
img/                fotos dos slots (hero, sobre, atendimentos, cursos)
img/avaliacoes/     prints das avaliações do Google
```

Os arquivos ficam na **raiz do repositório** — na Vercel é só importar com
Framework `Other`, Build e Output vazios, sem mexer em Root Directory.

## O que já está pronto

- Hero com mandala girando, aura animada, foto do Ray e badge de nota do Google
- Selos de autoridade (Instagram, nota do Google, atendimento 24h)
- 4 cards de atendimento com foto de fundo e CTA de WhatsApp
- “Como funciona” em 3 etapas
- 6 cards de cursos e produtos
- Sobre o Ray + as 4 camadas do trabalho
- Depoimentos + avaliações reais do Google
- FAQ em acordeão (`<details name="faq">`, um aberto por vez)
- CTA final, rodapé e botão flutuante de WhatsApp
- Open Graph para preview bonito no WhatsApp/Instagram
- Responsivo mobile-first (no celular os cards viram pilha de tela cheia,
  igual ao design original)
- Respeita `prefers-reduced-motion`

## Pendência: 3 prints de avaliação do Google

A seção “Avaliações reais no Google” está com **2 dos 5 prints**
(Paulo Ramos e Gelcira Lumertz). Faltam três, que já existem exportados no
projeto do Claude Design, na pasta `imagens-do-site/avaliacoes-google/`.

Copie e renomeie para `img/avaliacoes/`:

| Origem (zip do Claude Design)      | Destino neste repo                  |
| ---------------------------------- | ----------------------------------- |
| `01-avaliacao-leia-pinheiro.png`   | `img/avaliacoes/01-leia-pinheiro.png`   |
| `02-avaliacao-alyne-pessoa.png`    | `img/avaliacoes/02-alyne-pessoa.png`    |
| `05-avaliacao-carla-ferreira.png`  | `img/avaliacoes/05-carla-ferreira.png`  |

Depois, no `index.html`, descomente os dois blocos marcados com
`FALTAM 3 PRINTS` dentro de `.google-masonry`. O HTML já está escrito.

## Antes de publicar

- [ ] Trocar `og:url` no `<head>` pelo domínio final (hoje aponta para
      `https://ray-arend.vercel.app/`)
- [ ] Adicionar os 3 prints que faltam (acima)
- [ ] Confirmar com o Ray o **total de avaliações no Google**. O badge do hero
      hoje mostra só `★★★★★ 5,0 · avaliações no Google`, sem número — tem um
      comentário no `index.html` mostrando onde entra a contagem.
- [ ] Se o Ray tiver o link do perfil do Google, vale transformar o badge num
      `<a>` apontando pra lá

## Rodar localmente

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Contato usado no site

- WhatsApp: `+55 51 99247-7215` → todos os links usam `https://wa.me/5551992477215`
  com mensagem pré-preenchida diferente por seção
- Instagram: [@xama.pena.azul.do.amor](https://instagram.com/xama.pena.azul.do.amor)
