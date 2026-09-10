# First Midterm - AI Prompt & Audit Log

**Course:** COM-111 Web Application Development
**Student:** Alvaro Perez Fajardo and Zantiago Vargas Beltran
**Assignment:** First Midterm - Rock, Paper, Scissors (`index.html`, `design/`, `images/`)
**Repo:** https://github.com/alvropz12-iwnl/Midterm-1
**Scope:** This midterm only.
  
Every entry has four parts: the date and tool, the exact prompt, what came out of it, and the notes on what I changed by hand afterwards.

---

## Rules of AI Engagement (quick reference)

1. **Boilerplate is fine; architecture is mine.** AI may generate layouts, CSS grids, regex or boilerplate functions. Game state, event wiring and integration logic I have to understand myself.
2. **Every prompt gets a human audit.** No blind copy-paste: review it, run it, fix it, and write down what I changed.
3. **Oral defense readiness.** Any AI-generated block can be pointed at during evaluation. I have to explain how it works and how it was integrated. This log is the study guide.

---

## Tools I am using

_Update this table as I add or drop a tool. One row per tool, not per prompt._

| Tool | Model / version | What I use it for | First used |
| :--- | :--- | :--- | :--- |
| OpenAI Codex | GPT-5 | Repository setup, assignment analysis, HTML/CSS/JavaScript boilerplate, component organization, and prompt-log drafting | 2026-09-10 |
| Claude Code (CLI) | Claude Opus 5 | Layout scaffolding, CSS measured against the design JPGs, refactors, git chores | 2026-09-10 |
| `visual-check` skill | Chrome headless (Playwright) | Screenshots at 375x750, 390x844 and 1366x768 to compare against `design/` | 2026-09-10 |
| `top-design` skill | Claude Opus 5 | Pixel-perfect review of the heading container | 2026-09-10 |

## Entry template

_Copy the block below for every new entry. Newest entries go at the bottom. If a work session used no AI at all, write one line saying so and the date._

<!--
## [Short title of what I was building]

**Date:** YYYY-MM-DD · **Tool:** [tool and model]

### Prompt

```text
[Paste the exact prompt, word for word. If it was several prompts in one
session, number them: Prompt 1 - ..., Prompt 2 - ...]
```

_Prompt by: [who wrote it]_

### Result

[What it produced, in one or two sentences, with the real size: how many lines,
which files, which files are new.]

Where the code lives: [`path/to/file.ext`](path/to/file.ext) lines X-Y, with the
audited fixes at lines A-B. Commit `abc1234`.

### Notes and manual changes

- **[What went wrong, in bold.]** What the AI got wrong or left out, what I
  rewrote, and why. Name the file and the line. `path/to/file.ext:NN`.
- **[Next one.]** Same idea.
- Verified by [the actual check I ran and its real output]. Not "it looks fine".

---
-->

## Log

## Create the Midterm repository

**Date:** 2026-09-10 · **Tool:** OpenAI Codex (GPT-5)

### Prompt

```text
en mi carpeta de documents hay una carpeta que se llama "wb-rock-paper-scissors", necesito crear un repo que solo contenga esta carpeta y su contenido que se llame Midterm 1
```

_Prompt by: Alvaro Perez Fajardo_

### Result

Codex created the `Midterm 1` Git repository from the contents of `wb-rock-paper-scissors`. The initial snapshot contained 24 files: `index.html`, 10 JPG design references, and 13 image assets.

Where the result is recorded: the initial repository state is commit `ad5b4dd` (`Initial commit`).

### Notes and manual changes

- **Repository naming.** The local directory uses the requested name `Midterm 1`; the GitHub remote later used the URL-safe repository name `Midterm-1`.
- **Later repository work.** `PROMPT_LOG.md` was added in commit `66d4d56`, after the initial repository was created.
- Verified by `git show --stat ad5b4dd`, which reports 24 files and 38 inserted text lines, with binary JPG and PNG assets also included.

---

## Analyze the assignment PDF and starter files

**Date:** 2026-09-10 · **Tool:** OpenAI Codex (GPT-5)

### Prompt

```text
necesito que leas este pdf que contiene las instrucciones de mi midterm, para poder entender que tenemos que hacer, puedes analizar lo que hay de contenido en mi carpeta para saber con que contamos para trabajar
```

_Prompt by: Alvaro Perez Fajardo_

### Result

Codex read all four pages of `Rock-Paper-Scissors.pdf`, inspected the 10 desktop/mobile bonus references and 13 supplied image assets, and summarized the required responsive Rock-Paper-Scissors-Lizard-Spock game, scoring rules, modal, and optional score persistence. This was an analysis-only prompt and produced no code changes.

Where the analyzed project brief now lives: [`Problem_Description.md`](Problem_Description.md) lines 1-99. The visual references remain in [`design/`](design/) and the supplied assets in [`images/`](images/).

### Notes and manual changes

- **No generated implementation.** Codex only explained the requirements and identified the missing HTML structure, CSS, and JavaScript.
- **Brief added afterward.** `Problem_Description.md` and the first heading implementation were added in commit `945f0ea`; they were not generated by this analysis response.
- Verified by `pdfinfo Rock-Paper-Scissors.pdf`, which reported four letter-size pages, and by inspecting all desktop and mobile JPG references.

---

## Build the Rules modal

**Date:** 2026-09-10 · **Tool:** OpenAI Codex (GPT-5)

### Prompt

```text
hice pull en mi repo y ahi puedes ver que se agrego un .md que sera el prompt log que utilizaremos, puedes analizarlo para que comprendas absolutamente todas las reglas de nuestro prompt log cuando lo hagamos, del prompt log nos encargaremos hasta el final cuando hayamos terminado de desarrollar el proyecto

cuando lo hayas leido necesitamos comenzar con la elaboracion del proyecto, nos encargaremos nosotros primero de hacer el modal que muestra las reglas, en el contenido de design en el archivo "desktop-rules-modal-bonus", nuestra idea es comenzar haciendo 3 contenedores, necesitamos desarrollar el de rules

este contenedor se tiene que mostrar en la esquina inferior derecha y el punto de este contenedor o el objetivo que tiene es que cuando el usuario le de click se le muestren las reglas del juego. En la carpeta de Images puedes encontrar un archivo "images-rules-bonus.svg", este es el svg que tenemos que mostrar en el modal

El modal tiene que mostrar un titulo que diga Rules y que en la esquina superior derecha tenga una cruz para volver a ocultar este modal, y se debe mostrar el svg de las reglas

Puedes analizar la imagen que te comente para que veas mas o menos cual es el resultado que esperamos entregar
```

_Prompt by: Alvaro Perez Fajardo_

### Result

Codex first produced a 48-line `index.html`, a new 155-line `styles.css`, and a new 30-line `script.js`. The result included the lower-right Rules button, dark overlay, responsive modal, supplied bonus rules SVG, close icon, click/keyboard controls, and basic focus handling.

The modal's current integrated form lives in [`index.html`](index.html) lines 18-157 (styles), 249-289 (markup), and 291-318 (behavior). The separately generated version is preserved in Git history in commit `c1bd3fb` (`Rules Modal`).

### Notes and manual changes

- **Asset-name correction.** The prompt called the diagram `images-rules-bonus.svg`; the actual supplied file is `images/image-rules-bonus.svg`, so Codex used the real path.
- **Integration changed afterward.** The project already had the heading and shared CSS added in commit `945f0ea`. The modal was merged with that work in commit `1492250` and later inlined into the monolithic `index.html` in commit `a825444`.
- **Human audit still required.** The student should review and be able to explain `hidden`, `aria-expanded`, event listeners, focus changes, and the responsive media query before the oral defense.
- Verified at generation time with successful HTTP `200` responses for the HTML, CSS, JavaScript, and `images/image-rules-bonus.svg`; `node --check script.js` and `git diff --check` also completed without errors.

---

## Organize the Rules modal as a component

**Date:** 2026-09-10 · **Tool:** OpenAI Codex (GPT-5)

### Prompt

```text
perfecto, ahora necesito que hagas una carpeta que se llame modal donde incluya todo el componente de las rules y lo que hicimos, para que se facilite el desarrollo del proyecto
```

_Prompt by: Alvaro Perez Fajardo_

### Result

Codex created `modal/rules-modal.css` (140 lines) and `modal/rules-modal.js` (80 lines), reduced `index.html` to a `<rules-modal>` integration point, and kept only global page styles in the root stylesheet. The JavaScript defined a reusable custom element containing the modal markup and its open/close behavior.

Where that generated component is preserved: commit `c1bd3fb` contains [`modal/rules-modal.css`](https://github.com/alvropz12-iwnl/Midterm-1/blob/c1bd3fb/modal/rules-modal.css) and [`modal/rules-modal.js`](https://github.com/alvropz12-iwnl/Midterm-1/blob/c1bd3fb/modal/rules-modal.js).

### Notes and manual changes

- **Architecture revised manually.** The separate `modal/` directory was later removed and its HTML, CSS, and JavaScript were placed directly into `index.html` in commit `a825444` (`move the rules modal into index.html`).
- **Current location differs from the AI result.** The active modal is now in [`index.html`](index.html), not in a `modal/` directory. This should be explained as a deliberate manual integration choice.
- Verified at generation time with HTTP `200` responses for `modal/rules-modal.css` and `modal/rules-modal.js`, plus successful `node --check modal/rules-modal.js` and `git diff --check` commands.

---

## Draft the complete AI prompt log

**Date:** 2026-09-10 · **Tool:** OpenAI Codex (GPT-5)

### Prompt

```text
necesito que analices todos los prompts que te di en esta conversascion, y que me ayudes a con el formato que tenemos de prompt log, necesito que utilices los prompts literales que te di para que lo puedas llenar
```

_Prompt by: Alvaro Perez Fajardo_

### Result

Codex populated `PROMPT_LOG.md` with the five literal user prompts from this conversation, chronological results, real file counts and line locations, Git commit references, known later changes, verification evidence, and clearly marked audit items that still require human review.

Where the generated log lives: [`PROMPT_LOG.md`](PROMPT_LOG.md), beginning at the Tools table on line 25 and the Log section on line 69.

### Notes and manual changes

- **No invented human audit.** Items that cannot be proven from the conversation or Git history are marked as pending instead of being presented as manual student work.
- **Historical results preserved.** The log distinguishes the original AI-generated component structure from the repository's current monolithic `index.html` structure.
- Verified by comparing the literal prompt blocks against the conversation, checking commit history with `git log` and `git show --stat`, and running `git diff --check` after editing.

---

---

## Cloning the midterm repo

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
Clona aqui mismo este repo, con la cuenta de la UP: https://github.com/alvropz12-iwnl/Midterm-1
```

_Prompt by: Zantiago Vargas Beltran_

### Result

Repo cloned into this folder with the UP GitHub account. No code written. Starting point is commit `ad5b4dd` (`Initial commit`), an `index.html` with only bare text labels plus the `design/` and `images/` folders from the brief.

### Notes and manual changes

- Nothing to audit, it is a git clone. Checked with `git remote -v` that the origin points at `alvropz12-iwnl/Midterm-1` and not at a personal account.

---

## Creating this prompt log

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
Ve a la carpeta padre y luego entra al container. En el container, busca el prompt block que utilizo en el classwork y haz una copia limpia desde cero para este first term, en donde voy a registrar todo el uso de ella y qué estoy usando.
```

_Prompt by: Zantiago Vargas Beltran_

### Result

Created `PROMPT_LOG.md` (this file) reusing the structure of the classwork log: header, rules of engagement, tools table, entry template and log section. Commit `66d4d56` (`added prompt log`).

### Notes and manual changes

- **Scope line was copied wrong at first.** It pointed at the classwork paths. I rewrote it so it says this log covers the midterm only and points at the other two logs. `PROMPT_LOG.md:7`.

---

## Base HTML layout: HEADING / MATCHPORT / NAV

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
Iniciemos con el layout base HTML, lo dividiremos en 3 secciones HEADING, MATCHPORT, NAV, el van de orden superior a inferior, [Image #1] esta es nuestra referencia, y dividiremos los containers de la siguiente forma:

1. El heading container, se divide en 2, izquierda el .logo-container, y derecha el .score-container, que tiene dentro 2 subdivs verticales, en el superior va el label de "score" y debajo el label aun mas grande de valor del "score", todo este container tiene un border stroke blanco como en la referencia.

2. En el MATCHPOINT container, dependiendo el step tendremos un solo main container, tipo flexbox, donde mostraremos primero todas las opciones, aqui el usuario selecciona la que quiere, los svg en badges cn rounded radius y una sombra tipo neumofismo extarior, en el step 2 se crean 2 sub containers [Image #2], S2: [Image #3] donde se muestra en el container izquierdo el user pick, y a la dercha el house pick (logica tbd). S3: se muestra en UI lo que eligio la casa [Image #4] y se procesa la logica de winner, para al final agregar un background roundeed glow gon gradient fade out al winner y mostramos en el medio un nuevo div (que empuje alos dos laterales segun el flexbox) a los lados.. donde muestra el outcome.

Para todo el layout utilizaremos un layout flexible, para que sea responsive, en las diferentes medidas de @media especificadas en el @Problem_Description.md (diferentes breakpoints de media CSS), en mobile se mantiene el orden de 1. Heading, 2. Match 3. Rules/nav. Empieza entonces por tomar el @index.html y hacer el base layout, mapping de botones segun las referencias en @design/ , apegate a mis instrucciones. y a las referencias, como en goal tratar de imitar el look and feel de la ref.
```

_Prompt by: Zantiago Vargas Beltran_

_(I sent this prompt twice: the second time I added the sentence about keeping the order heading → match → rules on mobile, which was missing in the first one.)_

### Result

`index.html` rewritten from the 26-line stub into the three-section skeleton: `.heading` (with `.logo-container` and `.score-container`), `<main class="matchport">` and `<nav class="nav">`, plus the Google Fonts preconnect and the two stylesheet links.

Where the code lives: [`index.html`](index.html), the `<body>` section.

### Notes and manual changes

- **No styling yet, on purpose.** The AI wanted to write CSS in the same pass. I stopped it: structure first, design system second, so the classes exist before anything paints them.

---

## Design tokens and fonts from the brief

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
Ahora, toma el design system especificado en el @Problem_Description.md , y prepara las diferentes vars en @css/ y  las fonts con loading de google en los weights especificados, apegate al design system ya dado.
```

_Prompt by: Zantiago Vargas Beltran_

### Result

`css/variables.css` with the palette, gradients, font family and weights straight out of `Problem_Description.md`, and the Barlow Semi Condensed 600/700 link with `preconnect` in the `<head>`.

Where the code lives: [`css/variables.css`](css/variables.css) and [`index.html`](index.html) `<head>`.

### Notes and manual changes

- **Only the weights the brief lists.** It offered to load 400 and 500 as well. Dropped: the design only uses 600 and 700, and every extra weight is another font file.

---

## Heading container, pixel for pixel

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5) + `top-design` skill

### Prompt

```text
[Image #5] Ahora con el DS ya hecho, y las especificaciones, empecemos por crear el hading container, 1:1 pixel based en la referencia. [Image #6] Utiliza tu skill de diseno y awwardds para hacer un pixel perfect matching. Esta seccion no requiere de assets de images, todo es plain code y divs anidados
```

_Prompt by: Zantiago Vargas Beltran_

### Result

`.heading`, `.logo-container` and `.score-container` written with numbers measured off `design/desktop-step-1-bonus.jpg` and `design/mobile-step-1-bonus.jpg`, no images: the five-word logo is five stacked `<span>`s. Mobile first, one desktop media query. Commit `945f0ea` (`header done, measured against the design instead of eyeballed`).

Where the code lives: [`css/styles.css`](css/styles.css) lines 55-153.

### Notes and manual changes

- **Round numbers instead of measurements.** The first pass used `1rem`, `2rem`, "looks about right". I made it measure the JPGs instead, which is where `width: min(704px, 100% - 60px)`, the `11px 11px 11px 22px` padding and the `12.2px` logo size come from. Those comments in the CSS are the record of the measuring.
- Verified with the `visual-check` skill at 1366x768 and 375x750 against the design JPGs.

---

## Step 1: the five badges

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
Excelente, ahora vamos con el STEP 1, en container del MATCH, los recursos estan en @images/ , para cada badge utilizas el image, haces un container, lo redondeamos, hacemos otro outter container para hacer el "marco" y entre el div exterior del marco y el div interior de el svg debe haber una shadow, en la parte superior del badge, para dar "depth" tipo neumorfista, muy sutil.[Image #7]
```

_Prompt by: Zantiago Vargas Beltran_

### Result

First version of the badge: outer ring, inner white disc and the icon, with the inset shadow along the top of the disc.

### Notes and manual changes

- **Interrupted.** I stopped the run midway because I had the rules modal ready in another branch and wanted it merged first. Picked this back up two prompts later, with the reusable-component idea.

---

## Pulling the rules modal from the remote

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
Prompt 1 - haz pull a los cambios, con GHPM del repo remoto
Prompt 2 - Puh a todo
```

_Prompt by: Zantiago Vargas Beltran_

### Result

`git pull` of the branch with the rules-modal component (`c1bd3fb`, merged as `1492250`) and then push of everything.

### Notes and manual changes

- Nothing generated, only git. I checked the merge by hand because the modal touched `index.html`, the same file I was working on.

---

## Inlining the modal into the monolith

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
[Image #1] El botón de rules no está renderizando. Todo debería vivir en el único monolito, que es el index.html que tenemos en root. Ahí vas a adaptarle la lógica del modal. Copias y pegas todo el código relacionado con el modal al index.html.
```

_Prompt by: Zantiago Vargas Beltran_

### Result

`modal/rules-modal.css` and `modal/rules-modal.js` moved into `index.html` as a `<style>` block and a `<script>` block, and the `modal/` folder deleted. Commit `a825444` (`move the rules modal into index.html`).

Where the code lives: [`index.html`](index.html), the `RULES MODAL` style block and the script at the bottom.

### Notes and manual changes

- **The button was not rendering** because the stylesheet link pointed at the deleted folder. Inlining fixed the cause, not just the symptom.
- I kept the accessibility wiring the modal already had: `aria-haspopup`, `aria-controls`, `aria-expanded`, focus back to the trigger on close and Escape to close.

---

## Pentagon behind the badges, one reusable badge component

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
Prompt 1 - Lo que hice fue importar el trabajo que tenía hecho sobre el modal de reglas. No te preocupes, por eso tú continúa con tu tarea.
Prompt 2 - Importante para este layout: creo que lo que podemos hacer es poner, detrás del fondo, en el `z-index` más bajo, el SVG del pentágono y después, encima, cada uno de los badges. ¿Podemos hacer un componente que se recicle? Este componente reciclado se utilizará por batch y solamente cambiamos el icono y el color del `margin` del `border`.
```

_Prompt by: Zantiago Vargas Beltran_

### Result

`.picks` as a positioned box with `images/bg-pentagon.svg` at the bottom of the stack and five `.pick` buttons on top. One component, one modifier class per badge (`.pick--rock`, `.pick--paper`, …) that only sets the ring colour and the `--x` / `--y` position. Every position is a percentage of the box, so the same numbers work on both breakpoints. Commit `9d57c0d` (`step 1: the pentagon with the five picks`).

Where the code lives: [`css/styles.css`](css/styles.css) lines 170-340.

### Notes and manual changes

- **The pentagon was ~10px too high** when its position was derived from the badge centres. I had it fitted to three edges measured in the reference instead, which puts the SVG at its natural 329x313 size with the corners tucked under the badges. The reasoning is written in the comment above `.picks__pentagon`.
- Verified with `visual-check` at 1366x768 against `design/desktop-step-1-bonus.jpg`.

---

## Rules button out of `fixed`, and the nav gap

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
Al botón de reglas hay que quitarle el `sticky`. Además hay que reducir el margen entre el `div` principal de match y el `div` de navegación, que es donde se muestra el botón de reglas.
```

_Prompt by: Zantiago Vargas Beltran_

### Result

`.rules-container { position: fixed }` replaced by a flow `.nav`: centred on mobile, right-aligned from 48rem up. The mobile override that pinned the button to the bottom of the viewport was deleted too.

Where the code lives: [`index.html`](index.html), `.nav` rule in the style block.

### Notes and manual changes

- **`fixed` was doing two jobs.** It positioned the button *and* gave it the air below it. Once it flowed, the spacing had to be written explicitly, which is what the next entries are about.
- Verified with `visual-check` at 1440x900.

---

## Mobile rules modal: centred title, close button at the bottom

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
[Image #1] [Image #2] En móvil El modal de las reglas difiere de la referencia. El header debe estar center-aligned y en la parte inferior debe ir la X para cerrar el modal. Para móvil, adapta el flow layout para que sea responsive de esta manera.
```

_Prompt by: Zantiago Vargas Beltran_

### Result

Under 37.5rem the `<header>` becomes `display: contents`, so title, diagram and close button are siblings of the modal column; the title is centred with `order: 1` and the X goes to the bottom with `order: 3` and `margin-top: auto`. Desktop untouched.

Where the code lives: [`index.html`](index.html), the `@media (max-width: 37.5rem)` block.

### Notes and manual changes

- **Reordering without touching the HTML.** The close button lives inside the header in the markup, so the alternative was duplicating the button or moving it in JS. `display: contents` keeps one button, one DOM, and the tab order still matches the visual order.
- Verified with `visual-check --mobile --click "#open-rules"` against `design/mobile-rules-modal-bonus.jpg`.

---

## Splitting frontend and backend with a coworker

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
Ahora pensando como arquitecto, ¿cómo es que podría dividir este trabajo para que yo avance todo el frontend y divida el backend a mi coworker?
```

_Prompt by: Zantiago Vargas Beltran_

### Result

No code. The split we agreed on: `js/game.js` holds pure game logic (`PICKS`, `BEATS`, `housePick()`, `resolve()`, score and `localStorage`) with no DOM access, and `index.html` + `css/` + `js/ui.js` hold everything visual. The contract is the function signatures plus the class and `id` names the UI reads.

### Notes and manual changes

- **There is no real backend here.** The AI's first instinct was to talk about servers and APIs. I made it say the honest version: this is a static page, so the only meaningful split is presentation versus game logic.
- Practical rule that came out of it: `index.html` is a monolith, so only one of us edits it, otherwise every merge conflicts.

---

## Nav spacing measured off the reference

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
[Image #3] Tenemos que agregar más margen de separación entre el `div` de match y el `div` de navegación. Anteriormente creo que lo teníamos bien, pero lo corrigí. ¿Puedes buscar en los commits anteriores para restaurarlo? y que se vea igual el spacing a la referencia[Image #4] [Image #5]
```

_Prompt by: Zantiago Vargas Beltran_

### Result

There was nothing to restore: in every earlier commit the button was `position: fixed`, so the air came from the viewport, not from the layout. The spacing was measured instead, in `design/mobile-step-1-bonus.jpg` (375x750): bottom badges end at y=523, the button starts at y=653, so 130px of gap and 57px from its base to the bottom. Now `.nav { margin-top: 130px; padding: 0 2rem 57px }`, and on desktop `margin-top: 0` with 32px at the base.

Where the code lives: [`index.html`](index.html), `.nav` rule and its desktop media query.

### Notes and manual changes

- **"Search the commits" gave nothing, and the honest answer was to say so** instead of inventing an old value. `git log -S"rules-container"` shows only the `fixed` version.
- Verified with `visual-check --viewport 375x750`: badges end around 525 and the button starts around 660, 2-7px off the reference.

---

## Steps 2 and 3: your pick and the house pick

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
Si, cambialo, y tambien haz commit y push a todo, ademas Continuemos con la siguiente fase, en la que se muestra a la izquierda el batch de lo que haya elegido el usuario y, a la derecha, el house picked. Primero se ve vacío y después de unos segundos mostraremos ya lo que haya elegido el house. [Image #8]. Hagamos esta nueva screen y layout como lo platicamos antes (1 container horizonta, 2 sub containers, flexbox para adaptarse al content inside)
```

_Prompt by: Zantiago Vargas Beltran_

### Result

`.match` with two `.match__side`s, the label above each badge on desktop and below on mobile, and an empty slot that keeps the full badge size so the two columns do not shift when the house pick lands. Commit `dfc87ce` (`steps 2 and 3: your pick and the house pick`).

Where the code lives: [`css/styles.css`](css/styles.css) lines 334-440, [`index.html`](index.html) `.match` block.

### Notes and manual changes

- **The empty slot must not collapse.** The first version had the placeholder smaller than the badge, so the layout jumped when the house pick appeared. Measured across steps 2 and 3 in the design: the centres stay at x=493 and x=856 on desktop, so the slot keeps the badge size.
- The badge here is the same component as in the pentagon, only the size variables change.

---

## The disc's inner shadow was a gradient

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
Prompt 1 - [Image #6] En el batch, el componente reciclable que estamos usando tiene una sombra interior. El problema es que nuestra sombra interior está degradada, pero la de la referencia no está degradada. Corrígelo para que coincida con esta referencia. [Image #7]
Prompt 2 - Bien, ahora la sombra hay que hacerla un poquito más pequeña, un 5% menos de drop
```

_Prompt by: Zantiago Vargas Beltran_

### Result

`--disc-shadow` went from a blurred `inset 0 Npx Mpx rgba(0,0,0,…)` to a solid band with no blur: `inset 0 3.8px 0 rgb(186,190,210)` on mobile and `5.7px` on desktop for the pentagon, `4.75px` / `11.4px` for the bigger match badges (already with the 5% cut).

Where the code lives: [`css/styles.css`](css/styles.css) lines 190, 338, 371, 432.

### Notes and manual changes

- **The colour was wrong too, not just the blur.** Reading the pixel column through the yellow badge in `design/desktop-step-1-bonus.jpg`: the band runs y=264 to y=270 in `rgb(186,190,210)`, a blue-grey, and then jumps straight to the disc grey. It was never a translucent black.
- Verified against a crop of the reference at 1366x768: solid band, same tone, clean edge.

---

## Step 4: the winner's glow

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
[Image #9] Vamos a hacer ahora el step 4. Para el efecto del ganador detrás del badge, haremos tres círculos que van de menor a mayor tamaño. Conforme van incrementando de tamaño, bajan en z-index y también bajan en transparencia para este efecto de fade.
```

_Prompt by: Zantiago Vargas Beltran_

### Result

`.glow`, a div of its own inside each slot holding three `.glow__ring` circles at 248.5%, 193.2% and 144.7% of the badge, largest first and faintest. It only shows on the side that carries `.is-winner`. Alongside it, `js/game.js` gained the ten rules, the verdict, the score and the Play Again reset, and `.match__outcome` became the middle column that pushes the two sides apart. Commit `d28a35f` (`step 4: result, score and the winner glow`).

Where the code lives: [`css/styles.css`](css/styles.css), the glow and outcome blocks; [`js/game.js`](js/game.js) lines 1-165; [`index.html`](index.html) `.match` block.

### Notes and manual changes

- **The rings came out with zero width.** They were laid out as grid children sized in percentages, so their box was sized by the very rings inside it. Circular, and everything collapsed to 0. Giving the glow the slot's own size fixed it.
- **Then they aligned to the top and stretched the row.** Being far bigger than the badge, they grew the flex row: on mobile the Play Again button ended up 190px below where it belonged. Pinning them with `position: absolute` took them out of the flow.
- **The outermost ring is wider than the viewport**, on purpose, as in the design. That added a horizontal scrollbar, so `html, body` got `overflow-x: clip`. Not `hidden`: `hidden` only removes the scrollbar, the page can still be panned sideways. Verified that `window.scrollX` stays at 0.
- **The three circles are not one alpha each.** Measured by subtracting `design/desktop-step-3-bonus.jpg` from `design/desktop-step-4-bonus.jpg`, which cancels the page's own radial background, the three bands lift it by +15.5, +10 and +6 out of 255. Solving the stack backwards gives 2.7%, 1.9% and 2.8%. The render lands at +16.0, +10.3 and +5.7.
- **A draw was my call, not the brief's.** The rules only say what a win and a loss are worth, so a tie shows "Draw", leaves the score alone and gives nobody the glow.

---

## Hover was firing on the match badges

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
Hay que corregir el hover effect cuando estamos en etapa 2. En la etapa 2 el hover effect ya no debe de aplicar a los badges.
```

_Prompt by: Zantiago Vargas Beltran_

### Result

The hover and focus rules moved from `.pick` to `.picks .pick`, so they only apply to the five buttons in the pentagon.

Where the code lives: [`css/styles.css`](css/styles.css), the `.picks .pick` and `@media (hover: hover)` blocks.

### Notes and manual changes

- **Worse than it looked.** The rule was written against `.pick` in general, and the badges shown during a match reuse that exact component, so pointing at them moved them 6px. Scoping to `.picks` was the fix; the component itself stays inert everywhere else.
- Verified in Chrome: in step 1 hover lifts the badge 5.8px, in steps 2 and 3 the badge does not move at all and the cursor stays `auto` instead of `pointer`.

---

## The glow was pushing the layout around

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
los circulos del glow estan empujando todo el layout, separalos en otro div aparte para que no empuje el resto de componentes
```

_Prompt by: Zantiago Vargas Beltran_

### Result

The three circles live in their own `.glow` div, pinned with `position: absolute` so they sit outside the flow entirely.

Where the code lives: [`css/styles.css`](css/styles.css), the `.glow` block; [`index.html`](index.html), inside each `.match__slot`.

### Notes and manual changes

- Verified by measuring every box in the match with the glow present and again with it removed from the DOM: the two sets of coordinates are identical at both breakpoints.

---

## Keeping the score after a refresh

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
Agrégalo y para el de local storage quiero que le pongamos de nombre "Rock Paper Scissors first midterm". y al iniciar el HTML hacemos pull del LS para cargar el contador
```

_Prompt by: Zantiago Vargas Beltran_

### Result

`loadScore()` reads the key on start-up and `setScore()` writes on every change, which covers the optional requirement in the brief. Commit `20a0116` (`keep the score in localStorage`).

Where the code lives: [`js/game.js`](js/game.js), `STORE_KEY`, `loadScore()` and `setScore()`.

### Notes and manual changes

- **`localStorage` throws, it does not just return null.** In a private window or with site data blocked, touching it raises, and without a `try/catch` the whole game would die on load. Both the read and the write are wrapped.
- **The stored text is validated.** Anything can end up under that key, so the value goes through `Number.isInteger` and falls back to 0 rather than painting `NaN` in the score box.
- I shortened the key afterwards to `RPSF_Term`.
- Verified with real reloads: 0, then a loss gives -1, reload keeps -1, a win gives 0, reload keeps 0, and junk under the key comes back as 0.

---

## Last pass against the brief

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
Hagamos un último check. Según la descripción del problema, asegúrate de que cumplimos con todo.
```

_Prompt by: Zantiago Vargas Beltran_

### Result

Every requirement in `Problem_Description.md` was checked by driving the real page in Chrome, and one real bug came out of it. Commit `a53a448` (`hold the stacked layout until 62rem`).

Where the code lives: [`css/styles.css`](css/styles.css), the `@media (min-width: 62rem)` and `@media (max-width: 374px)` blocks.

### Notes and manual changes

- **Between 768px and 940px the badges were being cut off.** The wide step 4 row measures 939px, but the desktop layout was switching on at 768px, so on a tablet the left side started at x = -85. The `overflow-x: clip` added for the glow was hiding it silently. The stacked layout now holds until 62rem.
- **A breakpoint that included the design width.** The first fix for a small overflow at 320px used `max-width: 23.4375rem`, which is exactly 375px, so it changed the reference layout itself: the slots moved from x=94/281 to x=110/265. Changed to `374px` and re-verified against the design.
- Checked by script, not by eye: the 10 rules in both directions plus the 5 draws, 25 of 25 correct; the score moves +1, -1 and stays put on a draw; no overflow at any of 11 widths from 320 to 1920; only weights 600 and 700 and only Barlow Semi Condensed; all 15 colours from the brief present in `variables.css`; the modal opens and closes with both Escape and the X; a full round is playable with Tab and Enter alone; 10 images, none broken, none without `alt`, none loaded from outside the repo; no console errors.

---

## Filling in this log

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
Analiza todos los prompts que tenemos en el folder de conversación de Claude sobre este proyecto y quiero que los tomes para llenar el prompt log MD. Usa las transcripciones literales de mis prompts y rellena tú lo demás.
```

_Prompt by: Zantiago Vargas Beltran_

### Result

The session transcripts in `~/.claude/projects/…/*.jsonl` were parsed and every prompt of mine was pulled out verbatim into the entries above, in chronological order, with the results and the audit notes written from what actually happened in each session.

### Notes and manual changes

- **Only my prompts are literal.** Everything else is written after the fact, so it is a summary, not a transcript.
- Left out: the git housekeeping prompts (pull, push, commit tidying), since they produced no code.
- The automatic security reviews that run on each diff are not prompts of mine, so they are not logged either.

---

## Closing the log

**Date:** 2026-09-10 · **Tool:** Claude Code (Opus 5)

### Prompt

```text
Perfecto, ahora lo único que hace falta es que completes el prompt log. Ya terminamos todo el proyecto... quita el "still open, y llena apropiadamente"
```

_Prompt by: Zantiago Vargas Beltran_

### Result

The 23 "Still open" sections are gone, including the one in the entry template, since the project is finished and every one of them said "Nothing" or pointed at work that is now done. The step 4 entry, which had been left as "in progress", was written out properly, and the four sessions that were missing were added: the hover fix, the glow being pulled out of the flow, the score in `localStorage` and the final pass against the brief.

### Notes and manual changes

- **Five commit hashes in the log pointed at nothing.** We rewrote the commit messages and force-pushed earlier in the day, which gives every commit a new hash, so the references from `4d18e43` onward were dead. They were remapped by position against the current history and the quoted commit messages updated with them.
- Still deliberately left out, per the policy set when this log was first filled: the git housekeeping prompts, since they produced no code of their own.

---

