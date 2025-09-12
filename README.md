# QRZap - Website Oficial

Site oficial do aplicativo QRZap - Scanner e Gerador de QR Codes.

## 📁 Estrutura do Site

```
website/
├── index.html          # Página inicial
├── privacy.html        # Política de privacidade
├── terms.html          # Termos de uso
├── css/
│   └── style.css       # Estilos principais
├── js/
│   └── main.js         # JavaScript principal
├── images/             # Imagens do site
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Hospedagem Simples
1. Faça upload de todos os arquivos para seu servidor web
2. Acesse o site através do domínio configurado

### Opção 2: GitHub Pages (Gratuito)
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Ative GitHub Pages nas configurações
4. Acesse: `https://seuusuario.github.io/nome-do-repositorio`

### Opção 3: Netlify (Gratuito)
1. Acesse [netlify.com](https://netlify.com)
2. Faça upload da pasta `website/`
3. Seu site estará online instantaneamente

## 🎨 Personalização

### Cores
As cores já estão configuradas com as cores oficiais do QRZap no arquivo `css/style.css`:
```css
:root {
  --primary-color: #1800AD;    /* Azul principal do QRZap */
  --secondary-color: #1800AD;  /* Mesmo azul para consistência */
  --accent-color: #1800AD;     /* Azul para destaques */
  --title-color: #000000;      /* Preto puro */
  --text-color: #666666;       /* Cinza médio */
  --body-color: #ffffff;       /* Branco puro */
}
```

### Conteúdo
- **Página inicial**: Edite `index.html`
- **Política de privacidade**: Edite `privacy.html`
- **Termos de uso**: Edite `terms.html`

### Imagens
Adicione suas imagens na pasta `images/`:
- `icon_qrzap.png` - Ícone do app (64x64px)
- `favicon.png` - Favicon (32x32px)
- `google-play-badge.png` - Badge da Google Play
- `phone-mockup.png` - Mockup do celular
- `qr-sample-*.png` - Exemplos de QR codes

## 📱 Recursos do Site

- ✅ **Responsivo**: Funciona em desktop, tablet e mobile
- ✅ **Performance**: Carregamento rápido e otimizado
- ✅ **SEO**: Meta tags otimizadas para busca
- ✅ **Acessibilidade**: Navegação por teclado e leitores de tela
- ✅ **Analytics**: Pronto para Google Analytics
- ✅ **PWA**: Suporte para Progressive Web App

## 🔧 Funcionalidades JavaScript

- Menu mobile responsivo
- Scroll suave entre seções
- Animações de entrada
- Tema escuro/claro
- Lazy loading de imagens
- Tracking de eventos
- Performance monitoring

## 📊 Analytics

Para adicionar Google Analytics, edite o arquivo `js/main.js` e descomente as linhas:
```javascript
// gtag('event', 'click', {
//     'event_category': 'Button',
//     'event_label': buttonText
// })
```

## 🌐 SEO

O site já inclui:
- Meta tags otimizadas
- Open Graph para redes sociais
- Twitter Cards
- Estrutura semântica HTML5
- URLs amigáveis

## 📞 Suporte

Para dúvidas sobre o site:
- Email: evandrotielcop@gmail.com
- Desenvolvedor: Evandro Marques Pimenta Filho

## 📄 Licença

© 2025 QRZap. Todos os direitos reservados.

---

**QRZap** - Seu scanner e gerador de QR codes pessoal e seguro.
