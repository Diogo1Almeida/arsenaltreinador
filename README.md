# Arsenal do Treinador de Futsal — Landing Page

## Arquivos

| Arquivo | Função |
|---|---|
| `index.html` | Estrutura completa da página (16 seções + 2 popups) |
| `styles.css` | Design system flat — cores, tipografia, layout, responsividade |
| `script.js` | FAQ accordion, smooth scroll, Exit Popup 1 e 2 |
| `mockup.png` | **Você coloca aqui** — imagem do produto no hero |

---

## 1. Ajustar os links de checkout

Abra `script.js` e edite o objeto no topo do arquivo:

```js
const CHECKOUT_URLS = {
  basico:                'https://wiapy.com/SEU-LINK-BASICO',        // Plano Básico R$ 9,90
  premium:               'https://wiapy.com/SEU-LINK-PREMIUM',       // Plano Premium R$ 27,90
  premiumDescontoExit:   'https://wiapy.com/SEU-LINK-PREMIUM-1490',  // Exit Popup 1 — R$ 14,90
  premiumDescontoBasico: 'https://wiapy.com/SEU-LINK-PREMIUM-1790'   // Exit Popup 2 — R$ 17,90
};
```

Substitua cada URL pelo link real da Wiapy (ou outra plataforma). Nenhuma outra alteração é necessária.

---

## 2. Inserir o mockup do produto

Coloque o arquivo de imagem do produto na mesma pasta com o nome `mockup.png`.

Se quiser usar outro nome ou formato, edite esta linha no `index.html`:

```html
<img src="mockup.png" alt="Arsenal do Treinador de Futsal — mockup do produto" ...>
```

A imagem aparece na seção Hero (lado direito no desktop). Em mobile, o mockup é ocultado automaticamente para manter o foco no texto.

---

## 3. Comportamentos dos popups

**Exit Popup 1** (saída do site):
- Desktop: dispara quando o cursor sai pela parte de cima da janela
- Mobile: dispara após 30 segundos sem scroll
- Só dispara uma vez por sessão de página (variável JS em memória, sem localStorage)

**Exit Popup 2** (clique no Plano Básico):
- Dispara ao clicar em "ACESSAR PLANO BÁSICO"
- "Sim! Quero o Premium" → redireciona para `premiumDescontoBasico`
- "Continuar com o Básico" → fecha o popup e redireciona para `basico`

---

## 4. Personalização de design

As variáveis de cor e tipografia ficam no topo de `styles.css`:

```css
:root {
  --primary:   #3B82F6;  /* Azul — cor principal, hero, botões */
  --secondary: #10B981;  /* Verde — seção "O que você recebe" e checklist */
  --accent:    #F59E0B;  /* Âmbar — CTA final, badge "Mais Popular" */
  --fg:        #111827;  /* Quase preto — textos e seções escuras */
  --muted:     #F3F4F6;  /* Cinza claro — fundos alternados */
}
```
