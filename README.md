# 🌟 RTV33 React - Raise The Vibration

A modern, full-featured React application for conscious community building, knowledge sharing, and raising collective vibration.

## ✨ Features

### 🏠 **Home Page**
- Hero section with animated frequency display
- About vibration and consciousness
- 8 Methods to raise vibration
- Interactive frequency player (432Hz, 528Hz, etc.)
- High-vibration foods guide
- Daily Vibe Calculator

### 🔮 **Knowledge Portal**
- Gaia.com-inspired smooth layout
- Featured content carousel
- Live search functionality
- Category filtering (Tesla, Earth, Science, Ancient, Health)
- Learning paths with progress tracking
- Video library
- 12+ knowledge articles

### 🌍 **Community Platform**
- Full social media experience
- 3-column layout (sidebars + feed)
- Create and share posts
- Like, comment, share functionality
- Location-based community finder
- Upcoming events calendar
- Suggested connections
- Community guidelines

### 🎵 **Music Section**
- Streaming-style interface
- Artist discovery
- Genre filtering
- Curated playlists
- High-vibe music collections

### 🛍️ **Shop**
- 20+ conscious products
- Category filtering
- Product cards with animations
- Shopping cart functionality
- Vendor marketplace
- Vendor application system

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **React Router 6** - Client-side routing
- **Framer Motion** - Smooth animations
- **Vite** - Lightning-fast build tool
- **Context API** - State management
- **CSS3** - Modern styling with custom properties

## 📦 Installation

```bash
# Clone or navigate to the project
cd rtv33-react

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start dev server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   - Development: `http://localhost:3000`
   - App will auto-reload on changes

## 📁 Project Structure

```
rtv33-react/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── CosmicBackground.jsx
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Methods.jsx
│   │   │   ├── FrequencyPlayer.jsx
│   │   │   ├── HighVibeFood.jsx
│   │   │   └── VibeCalculator.jsx
│   │   ├── knowledge/
│   │   │   ├── KnowledgeHero.jsx
│   │   │   ├── FeaturedContent.jsx
│   │   │   ├── SearchFilter.jsx
│   │   │   ├── LearningPaths.jsx
│   │   │   ├── VideoLibrary.jsx
│   │   │   └── KnowledgeGrid.jsx
│   │   ├── community/
│   │   │   ├── CommunityHero.jsx
│   │   │   ├── CommunitySidebar.jsx
│   │   │   ├── CommunityFeed.jsx
│   │   │   ├── CommunityRightSidebar.jsx
│   │   │   └── PostModal.jsx
│   │   ├── music/
│   │   │   ├── MusicHero.jsx
│   │   │   ├── MusicPlayer.jsx
│   │   │   ├── ArtistGrid.jsx
│   │   │   └── Playlists.jsx
│   │   └── shop/
│   │       ├── ShopHero.jsx
│   │       ├── ProductGrid.jsx
│   │       └── VendorMarketplace.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Knowledge.jsx
│   │   ├── Community.jsx
│   │   ├── Music.jsx
│   │   └── Shop.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── data/
│   │   ├── knowledgeData.js
│   │   ├── productsData.js
│   │   └── communityData.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design Philosophy

- **Modern 2020 Hippie Aesthetic** - Clean, professional, conscious
- **Purple/Teal/Amber Color Palette** - Calming yet energetic
- **Smooth Animations** - Floating elements, gentle transitions
- **Gaia.com-Inspired** - Card-based layouts, excellent UX
- **Mobile-First Responsive** - Works perfectly on all devices

## 🔧 Component Architecture

### Layout Components
- `Navbar` - Sticky navigation with active states
- `Footer` - Site footer with branding
- `CosmicBackground` - Animated starfield background

### Page Components
Each page is composed of smaller, reusable components for maintainability.

### Context API
- `AppContext` - Global state management
  - User authentication
  - Frequency tracking
  - Shopping cart
  - Community posts

## 🎭 Key Features

### Animations
- Framer Motion for smooth page transitions
- CSS keyframe animations for floating elements
- Hover effects on all interactive elements
- Scroll-triggered animations

### State Management
- React Context for global state
- Local state for component-specific data
- Custom hooks for reusable logic

### Routing
- React Router for navigation
- Smooth page transitions
- Active nav link highlighting
- Deep linking support

## 🌈 Color Variables

```css
--primary: #8B5CF6 (Purple)
--secondary: #06B6D4 (Cyan)
--accent: #F59E0B (Amber)
--dark: #0F172A (Dark Blue)
--light: #F8FAFC (Off White)
--gray: #94A3B8 (Gray)
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages
```bash
npm run build
# Deploy 'dist' folder to gh-pages branch
```

## 🔮 Future Enhancements

- [ ] User authentication
- [ ] Real backend API integration
- [ ] E-commerce payment processing
- [ ] Real-time chat
- [ ] Video streaming
- [ ] Mobile app (React Native)
- [ ] Push notifications
- [ ] Social login
- [ ] Advanced search
- [ ] Analytics dashboard

## 💜 Philosophy

- **Knowledge stays FREE** - Core content always accessible
- **Community First** - No exploitative practices
- **Conscious Commerce** - Shop supports the mission
- **Uplift Humanity** - Every feature serves this goal

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

## 📄 License

This project is built with love and high frequencies for the elevation of humanity. Use it to raise the collective vibration! 🌟

---

**Built with React, powered by consciousness.** ✨🌈💜

E-Motion = Energy in Motion
