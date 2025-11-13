# Auto Expert Group - Site Web Complet

Site web profesional pentru Auto Expert Group București, construit cu Next.js 14, TypeScript și Tailwind CSS.

## 🚀 Caracteristici

- **Design Modern**: Paletă de culori roșu și albastru elegant, design profesional
- **Responsive**: Mobile-first, optimizat pentru toate dispozitivele
- **SEO Optimizat**: Meta tags, JSON-LD, sitemap, robots.txt
- **Performanță**: Lazy loading, optimizare imagini, animații fluide
- **Accesibilitate**: Navigare keyboard-friendly, contrast optim
- **Animații**: Micro-interacțiuni și efecte vizuale moderne

## 📁 Structura Proiectului

```
auto-expert-group/
├── app/                          # App Router Next.js
│   ├── globals.css              # Stiluri globale
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Pagina principală
│   ├── servicii/                # Pagina servicii
│   ├── preturi/                 # Pagina prețuri
│   ├── galerie/                 # Pagina galerie
│   ├── despre/                  # Pagina despre
│   ├── contact/                 # Pagina contact
│   ├── programari/              # Pagina programări
│   ├── faq/                     # Pagina FAQ
│   ├── politica-confidentialitate/ # Politica de confidențialitate
│   ├── termeni-conditii/        # Termeni și condiții
│   ├── sitemap.xml/             # Sitemap XML
│   └── robots.txt/              # Robots.txt
├── components/                   # Componente reutilizabile
│   ├── Header.tsx               # Header cu navigare
│   ├── Footer.tsx               # Footer
│   ├── Hero.tsx                 # Secțiunea hero
│   ├── ServiceCard.tsx          # Card servicii
│   ├── ContactForm.tsx          # Formular contact
│   └── Lightbox.tsx             # Lightbox pentru galerie
├── lib/                         # Utilitare și constante
│   └── constants.ts             # Date de contact, servicii, etc.
├── public/                      # Fișiere statice
│   ├── favicon.ico              # Favicon
│   ├── og-image.jpg             # Imagine Open Graph
│   └── site.webmanifest         # Web App Manifest
├── package.json                 # Dependențe
├── tailwind.config.js           # Configurare Tailwind
├── tsconfig.json                # Configurare TypeScript
└── next.config.js               # Configurare Next.js
```

## 🛠️ Instalare și Rulare

### Cerințe
- Node.js 18+ 
- npm sau yarn

### Pași de instalare

1. **Clonează proiectul**
   ```bash
   git clone <repository-url>
   cd auto-expert-group
   ```

2. **Instalează dependențele**
   ```bash
   npm install
   # sau
   yarn install
   ```

3. **Rulează în modul dezvoltare**
   ```bash
   npm run dev
   # sau
   yarn dev
   ```

4. **Deschide în browser**
   ```
   http://localhost:3000
   ```

### Comenzi disponibile

```bash
# Dezvoltare
npm run dev

# Build pentru producție
npm run build

# Start server producție
npm run start

# Linting
npm run lint

# Export static (pentru hosting static)
npm run export
```

## 📱 Pagini și Funcționalități

### Pagini principale
- **Home** (`/`) - Pagina principală cu hero, servicii și CTA
- **Servicii** (`/servicii`) - Detalii complete despre servicii
- **Prețuri** (`/preturi`) - Pachete și prețuri transparente
- **Galerie** (`/galerie`) - Imagini cu lazy loading și lightbox
- **Despre** (`/despre`) - Informații despre afacere și echipă
- **Programări** (`/programari`) - Formular programare, informații contact, hartă și direcții
- **FAQ** (`/faq`) - Întrebări frecvente

### Pagini legale
- **Politica de Confidențialitate** (`/politica-confidentialitate`)
- **Termeni și Condiții** (`/termeni-conditii`)

### Funcționalități SEO
- **Sitemap** (`/sitemap.xml`) - Generat automat
- **Robots.txt** (`/robots.txt`) - Configurat pentru SEO
- **JSON-LD** - Schema markup pentru LocalBusiness
- **Meta tags** - Optimizate pentru fiecare pagină
- **Open Graph** - Pentru sharing pe social media

## 🎨 Design și Animații

### Paleta de culori
- **Roșu principal**: `#C8102E` (accent, CTA, butoane)
- **Albastru elegant**: `#1E3A8A` (accente, gradient, hover)
- **Negru principal**: `#0B0B0B` (background, header, text)
- **Gri închis**: `#1F1F1F` (cards, borders)
- **Gri deschis**: `#F5F5F5` (background secundar)
- **Alb**: `#FFFFFF` (text pe fundal întunecat)

### Animații implementate
- **Hero parallax**: Efecte de mișcare la mouse și scroll
- **Header sticky**: Hide/reveal la scroll
- **Card hover**: Tilt și shine effects
- **CTA buttons**: Micro-interacțiuni și pulse
- **SVG icons**: Stroke-draw animations
- **Lightbox**: Animații de intrare/ieșire
- **Map reveal**: Clip-path circular expand

### Fonturi
- **Headings**: Montserrat (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Display**: swap pentru performanță

## 📞 Date de Contact

Toate datele de contact sunt hardcodate în aplicație:

- **Adresa**: SPrelungirea Ghencea, București 077025
- **Telefon**: 0735538668
- **Email**: contact@auto-expert-group.ro
- **Program**: L-V 8:00-18:00, S 8:00-14:00, D Închis

## 🔧 Configurare pentru Producție

### 1. Variabile de mediu
Creează fișierul `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://auto-expert-group.ro
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### 2. Configurare formular contact
Pentru a conecta formularul la un endpoint server, înlocuiește logica din `ContactForm.tsx`:

```typescript
// În loc de mailto fallback, folosește:
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

### 3. Endpoint server pentru contact
Creează `app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Aici adaugi logica de procesare
    // Ex: trimitere email, salvare în baza de date, etc.
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
```

### 4. Optimizare imagini
Înlocuiește placeholder-urile din `public/` cu imagini reale:
- `favicon.ico` (16x16, 32x32, 48x48)
- `og-image.jpg` (1200x630)
- `apple-touch-icon.png` (180x180)
- Imagini pentru galerie în `public/gallery/`

## 🚀 Deploy

### Vercel (Recomandat)
1. Conectează repository-ul la Vercel
2. Configurează variabilele de mediu
3. Deploy automat la push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out`
3. Configurează redirects pentru SPA

### Hosting tradițional
1. `npm run build`
2. `npm run export`
3. Uploadează conținutul din `out/`

## 📊 SEO și Analytics

### Google Search Console
1. Adaugă proprietatea site-ului
2. Verifică ownership
3. Submit sitemap: `https://auto-expert-group.ro/sitemap.xml`

### Google Analytics
1. Creează proprietate GA4
2. Adaugă ID-ul în variabilele de mediu
3. Implementează tracking în `layout.tsx`

### Google Business Profile
1. Creează profil pentru "Auto Expert Group"
2. Adaugă adresa exactă: SPrelungirea Ghencea, București 077025
3. Configurează programul de lucru
4. Adaugă poze cu atelierul

## ✅ Checklist pentru Producție

### Înainte de lansare
- [ ] Înlocuiește toate placeholder-urile cu conținut real
- [ ] Testează toate formularele
- [ ] Verifică toate linkurile
- [ ] Optimizează imaginile
- [ ] Configurează SSL
- [ ] Testează pe dispozitive mobile
- [ ] Verifică accesibilitatea
- [ ] Testează viteza de încărcare

### După lansare
- [ ] Submit sitemap în Google Search Console
- [ ] Configurează Google Analytics
- [ ] Creează Google Business Profile
- [ ] Testează formularul de contact
- [ ] Monitorizează erorile
- [ ] Configurează backup-uri
- [ ] Setează monitoring uptime

## 🐛 Depanare

### Probleme comune

**Eroare de build**
```bash
# Șterge cache-ul
rm -rf .next
npm run build
```

**Imaginile nu se încarcă**
- Verifică că imaginile sunt în `public/`
- Verifică că path-urile sunt corecte
- Asigură-te că imaginile există

**Formularul nu funcționează**
- Verifică că endpoint-ul server este configurat
- Verifică console-ul pentru erori
- Testează fallback-ul mailto

## 📞 Suport

Pentru întrebări sau probleme:
- **Email**: contact@auto-expert-group.ro
- **Telefon**: 0735538668

## 📄 Licență

Acest proiect este proprietatea Auto Expert Group. Toate drepturile rezervate.

---

**Ultima actualizare**: {new Date().toLocaleDateString('ro-RO')}
