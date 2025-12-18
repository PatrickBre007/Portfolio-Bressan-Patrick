# Portfolio Patrick Bressan

Portfolio personale moderno e interattivo costruito con React, Vite e Three.js.

## 🚀 Tecnologie Utilizzate

- **React** - Libreria UI
- **Vite** - Build tool veloce
- **Three.js** - Grafica 3D
- **@react-three/fiber** - React renderer per Three.js
- **@react-three/drei** - Helper per Three.js
- **Framer Motion** - Animazioni fluide
- **React Icons** - Icone moderne

## ✨ Caratteristiche

- 🎨 **3 Temi Dinamici**: Coding, Videogame, Pallavolo
- 📱 **Responsive Design**: Ottimizzato per tutti i dispositivi
- 🎭 **Animazioni Fluide**: Transizioni smooth con Framer Motion
- 🖼️ **Carousel Interattivo**: Navigazione tecnologie con frecce
- 📊 **Sezioni Complete**: About, Progetti, Passioni, Contatti
- 📄 **Download CV**: Pulsante per scaricare il curriculum
- 🔗 **Link GitHub**: Collegamenti diretti ai progetti

## 🛠️ Installazione

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

## 📦 Build per Produzione

```bash
npm run build
npm run preview
```

## 📁 Struttura Progetto

```
src/
├── components/        # Componenti riutilizzabili
│   ├── Navbar.jsx
│   └── ImageCarousel.jsx
├── sections/          # Sezioni della pagina
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Passions.jsx
│   └── Contact.jsx
├── contexts/          # Context API
│   └── ThemeContext.jsx
├── themes/            # Configurazione temi
│   └── themes.js
└── App.jsx           # Componente principale
```

## 🎨 Personalizzazione

### Modifica i tuoi dati

1. **Progetti**: Apri `src/sections/Projects.jsx` e modifica l'array `projects`
2. **Contatti**: Apri `src/sections/Contact.jsx` e aggiorna `contactInfo`
3. **Skills**: Apri `src/sections/About.jsx` e modifica l'array `skills`
4. **CV**: Sostituisci `public/cv/Patrick_Bressan_CV.pdf` con il tuo CV

### Modifica i temi

Apri `src/themes/themes.js` per personalizzare colori e stili dei temi.

## 📝 License

MIT

## 👤 Autore

**Patrick Bressan**
- GitHub: [@patrickbressan](https://github.com/patrickbressan)
- LinkedIn: [Patrick Bressan](https://linkedin.com/in/patrickbressan)

---

Made with ❤️ using React + Vite + Three.js
