# Ming's Chinese Cuisine - Restaurant Website

A modern, responsive restaurant website built with React, TypeScript, and Express.js, showcasing Ming's Chinese Cuisine with immersive visuals and seamless user experience.

![Ming's Chinese Cuisine](https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400)

## ✨ Features

- **Responsive Design**: Mobile-first approach with beautiful UI
- **Interactive Menu**: Browse authentic Chinese dishes by category
- **Photo Gallery**: Immersive lightbox gallery showcasing food and ambiance
- **Online Reservations**: Easy table booking with form validation
- **Contact Integration**: Multiple contact methods and location information
- **Scroll Animations**: Smooth animations and hover effects
- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS, Express.js

## 🚀 Quick Start

### Development (Replit)
```bash
# Install dependencies (already installed)
npm install

# Start the development server
npm run dev
```
The application will run on `http://localhost:5000` with both frontend and backend.

### Netlify Deployment
```bash
# Build for Netlify
node build-netlify.js

# Output will be in dist/public/
```
See [NETLIFY_DEPLOYMENT.md](./NETLIFY_DEPLOYMENT.md) for complete deployment instructions.

## 🏗️ Architecture

### Frontend
- **React 18** with TypeScript
- **Wouter** for lightweight routing
- **TanStack Query** for state management
- **Tailwind CSS** for styling
- **Shadcn/ui** for component library
- **Framer Motion** for animations

### Backend (Replit)
- **Express.js** with TypeScript
- **Drizzle ORM** with PostgreSQL
- **Passport.js** for authentication
- **Express Session** management

### Deployment
- **Dual deployment** support (Replit + Netlify)
- **Mock data system** for static deployment
- **SPA routing** configuration
- **Performance optimizations**

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Route components
│   │   ├── lib/           # Utilities and API clients
│   │   └── hooks/         # Custom React hooks
├── server/                 # Backend Express application
├── shared/                 # Shared types and schemas
├── attached_assets/        # Static assets (images)
├── netlify.toml           # Netlify deployment config
├── build-netlify.js       # Netlify build script
└── NETLIFY_DEPLOYMENT.md  # Deployment guide
```

## 🎨 Design System

- **Colors**: Orange (#ff6b35), Black (#000000), White (#ffffff)
- **Typography**: Modern fonts with Chinese-inspired touches
- **Spacing**: Consistent spacing scale with Tailwind
- **Components**: Accessible components with Radix UI primitives

## 📱 Responsive Features

- Mobile-first design approach
- Touch-friendly interactions
- Optimized images for all screen sizes
- Smooth animations across devices
- Accessible navigation and forms

## 🚀 Deployment Options

### Option 1: Netlify (Static Site)
Perfect for showcasing the design and functionality without backend costs.
- Fast global CDN
- Automatic deployments
- Free HTTPS
- Built-in form handling options

### Option 2: Replit (Full-Stack)
Complete application with backend functionality.
- Real database integration
- User authentication
- Dynamic content management
- Development environment included

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run check` - TypeScript type checking
- `node build-netlify.js` - Build for Netlify deployment

### Environment Variables
For full functionality, configure:
- `DATABASE_URL` - PostgreSQL connection string
- `SESSION_SECRET` - Session encryption key

## 📄 License

MIT License - See LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For questions about deployment or customization, refer to the documentation or open an issue.

---

Built with ❤️ for Ming's Chinese Cuisine