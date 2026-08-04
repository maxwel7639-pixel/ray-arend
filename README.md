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
img/og-cover.jpg    capa do link (preview no WhatsApp/Instagram)
```

### Regerar a capa do link

`img/og-cover.jpg` é uma captura da seção hero em 2400×1260 (proporção 1,91:1).
Se o hero mudar, dá pra regerar rodando o site local e tirando um screenshot do
hero nessa proporção — o importante é manter o arquivo abaixo de ~300 KB e a
URL da `og:image` absoluta.

> O WhatsApp guarda o preview em cache por link. Depois de trocar a capa, o
> preview antigo pode continuar aparecendo — mandar o link com `?v=2` no fim
> força ele a buscar de novo.

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

- [ ] **Trocar 3 descrições provisórias de curso.** Códigos de LUZ Arcturianos,
      Cura Arcturiana e Último Despertar estão com um texto genérico, porque a
      arte desses produtos não descreve o conteúdo. Estão marcados com
      `TEXTO PROVISÓRIO` no `index.html` — é pedir 1 ou 2 linhas pro Ray.
- [ ] Trocar `og:url` **e** `og:image`/`twitter:image` no `<head>` pelo domínio
      final (hoje apontam para `https://ray-arend.vercel.app/`). A `og:image`
      precisa ser URL absoluta, senão o WhatsApp não carrega a capa.
- [ ] Adicionar os 3 prints que faltam (acima)
- [ ] Se o Ray tiver o link do perfil do Google, vale transformar o badge do
      hero num `<a>` apontando pra lá

A nota do Google (`5,0 · 60 avaliações`) já está no ar em três lugares: o badge
do hero, o selo de autoridade e o cabeçalho da seção de avaliações. Se o número
mudar, é procurar por `60 avaliações` no `index.html`.

## Rodar localmente

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Contato usado no site

- WhatsApp: `+55 51 99247-7215` → todos os links usam `https://wa.me/5551992477215`
  com mensagem pré-preenchida diferente por seção
- Instagram: [@xama.pena.azul.do.amor](https://instagram.com/xama.pena.azul.do.amor)
