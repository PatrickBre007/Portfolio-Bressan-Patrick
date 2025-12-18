# 📋 Guida alla Personalizzazione del Portfolio

## 🎯 Come Personalizzare i Tuoi Dati

### 1. Informazioni Personali (Hero Section)

**File**: `src/sections/Hero.jsx`

Modifica:
- Il nome nella riga 21: `<span style={{ color: theme.primary }}>Patrick Bressan</span>`
- Il sottotitolo nella riga 30

### 2. Sezione "Chi Sono"

**File**: `src/sections/About.jsx`

Modifica:
- **Testi di presentazione**: Righe 24-41 (i paragrafi)
- **Skills**: Righe 11-19 (array `skills` - nome e livello di competenza)

### 3. Progetti

**File**: `src/sections/Projects.jsx`

Modifica l'array `projects` (righe 9-45):
```javascript
{
  title: 'Nome Progetto',
  description: 'Descrizione del progetto',
  technologies: ['Tech1', 'Tech2'],
  github: 'https://github.com/tuousername/repo',
  demo: 'https://link-demo.com',
  image: '🎨' // Emoji rappresentativa
}
```

### 4. Contatti

**File**: `src/sections/Contact.jsx`

Modifica l'array `contactInfo` (righe 8-29):
- Email
- Telefono
- LinkedIn
- GitHub

### 5. CV

**File**: `public/cv/Patrick_Bressan_CV.pdf`

- Sostituisci questo file con il tuo CV in formato PDF
- Mantieni il nome o aggiorna il riferimento in `src/sections/Contact.jsx` (riga 35)

### 6. Statistiche

**File**: `src/sections/Contact.jsx`

Righe 86-111 - Modifica:
- Anni di esperienza
- Numero di progetti
- Numero di tecnologie

## 🎨 Come Personalizzare i Temi

**File**: `src/themes/themes.js`

Ogni tema ha queste proprietà modificabili:
- `primary`: Colore primario
- `secondary`: Colore secondario
- `background`: Colore di sfondo
- `backgroundGradient`: Gradiente di sfondo
- Altri colori per testo e accenti

## 🖼️ Come Aggiungere Immagini

### Opzione 1: Immagini Locali
1. Metti le immagini nella cartella `public/images/`
2. Riferiscile con `/images/nome-immagine.jpg`

### Opzione 2: URL Esterni
Usa direttamente URL di immagini online

### Per il Carousel
**File**: `src/components/ImageCarousel.jsx`

Modifica l'array `slides` (righe 11-43) sostituendo gli emoji con:
```javascript
{
  title: 'Tecnologia',
  image: '/images/tech.jpg', // o URL
  description: 'Descrizione',
  color: '#colore'
}
```

## 📝 Aggiungere Nuove Sezioni

1. Crea un nuovo file in `src/sections/TuaSezione.jsx`
2. Importalo in `src/App.jsx`
3. Aggiungilo nel componente App

## 🔗 Link Social

Modifica i link nelle seguenti posizioni:
- **Navbar**: `src/components/Navbar.jsx`
- **Contact**: `src/sections/Contact.jsx`
- **Projects**: `src/sections/Projects.jsx` (riga 69 - link GitHub principale)

## 🚀 Deploy

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Carica la cartella dist su Netlify
```

### GitHub Pages
1. Installa gh-pages: `npm install --save-dev gh-pages`
2. Aggiungi in package.json:
```json
"homepage": "https://tuousername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Esegui: `npm run deploy`

## 💡 Tips

- **Foto Profilo**: Sostituisci l'avatar in `src/sections/Hero.jsx` con una vera immagine
- **Favicon**: Sostituisci `public/vite.svg` con il tuo favicon
- **Meta Tags**: Aggiungi meta tags SEO in `index.html`
- **Google Analytics**: Aggiungi il codice di tracking in `index.html`

## 🐛 Risoluzione Problemi

- **Errori di compilazione**: Controlla la console
- **Temi non cambiano**: Verifica che il ThemeProvider avvolga l'app
- **CV non scarica**: Verifica che il file esista in `public/cv/`

---

Per qualsiasi domanda, consulta la documentazione di React e Vite!
