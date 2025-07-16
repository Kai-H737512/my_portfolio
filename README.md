# Kai Huang - Personal Portfolio

A modern, responsive personal portfolio website built with React and Tailwind CSS. Features a beautiful cosmic theme with smooth animations and dark/light mode toggle.

## 🚀 Live Demo

[Add your live demo link here]

## ✨ Features

- **Modern Design**: Clean and professional portfolio layout with cosmic theme
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes with persistent storage
- **Smooth Animations**: Custom CSS animations and transitions throughout
- **Interactive Elements**: Hover effects, scroll-triggered animations, and smooth scrolling
- **Contact Form**: Functional contact section with toast notifications
- **Scroll to Top**: Smart scroll-to-top button that appears when near the bottom
- **Star Background**: Animated cosmic background with floating stars and meteors

## 🛠️ Tech Stack

### Core Technologies
- **React 19.1.0** - Modern React with latest features
- **Vite 7.0.4** - Fast build tool and development server
- **React Router DOM 7.6.3** - Client-side routing

### Styling & UI
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Tailwind CSS Vite Plugin** - Optimized Tailwind integration
- **Lucide React 0.525.0** - Beautiful icon library
- **Class Variance Authority 0.7.1** - Type-safe component variants
- **CLSX 2.1.1** - Conditional className utility
- **Tailwind Merge 3.3.1** - Merge Tailwind classes efficiently

### UI Components
- **Radix UI Toast 1.2.14** - Accessible toast notifications

### Development Tools
- **ESLint 9.30.1** - Code linting and formatting
- **TypeScript Support** - Type definitions for React
- **React Refresh Plugin** - Hot module replacement

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── UI/            # Base UI components (toast, etc.)
│   ├── AboutMe.jsx    # About section component
│   ├── Contact.jsx    # Contact form component
│   ├── Footer.jsx     # Footer with scroll-to-top
│   ├── HeroSection.jsx # Hero/landing section
│   ├── Navbar.jsx     # Navigation component
│   ├── Projects.jsx   # Projects showcase
│   ├── Skills.jsx     # Skills section
│   ├── StarBackground.jsx # Animated background
│   └── ThemeToggle.jsx # Dark/light mode toggle
├── pages/             # Page components
│   ├── Home.jsx       # Main home page
│   └── NotFound.jsx   # 404 page
├── lib/               # Utility functions
├── assets/            # Static assets
├── App.jsx            # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles and animations
```

## 🎨 Design Features

### Custom Animations
- **Fade-in animations** with staggered delays
- **Floating animations** for interactive elements
- **Meteor effects** in the background
- **Smooth hover transitions** on cards and buttons

### Theme System
- **CSS Custom Properties** for theme colors
- **Dark/Light mode** with localStorage persistence
- **Smooth theme transitions** (300ms duration)

### Responsive Design
- **Mobile-first** approach
- **Breakpoint system** using Tailwind's responsive classes
- **Flexible layouts** that adapt to screen size

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [your-repo-url]
cd my_portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Components

### Hero Section
- Animated text with staggered fade-in effects
- Call-to-action button with cosmic styling
- Scroll indicator with bounce animation

### Projects Section
- Card-based layout with hover effects
- Responsive grid system
- Project links and descriptions

### Contact Form
- Form validation and submission
- Toast notifications for user feedback
- Responsive design with proper spacing

### Theme Toggle
- Persistent theme storage
- Smooth icon transitions
- Accessible button design

## 🎨 Custom Styling

The project uses a custom Tailwind configuration with:
- **Custom color palette** with CSS variables
- **Custom animations** for enhanced UX
- **Utility classes** for common patterns
- **Responsive design** utilities

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kai Huang**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

Made with ❤️ using React and Tailwind CSS
