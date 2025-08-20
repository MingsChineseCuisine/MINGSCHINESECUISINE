# Overview

Ming's Chinese Cuisine is a dynamic restaurant website built with React, Express, and PostgreSQL. The application showcases authentic Chinese cuisine through an immersive user experience featuring video backgrounds, scroll animations, and a modern design system. The website includes sections for menu browsing, table reservations, restaurant information, photo gallery, and contact forms, all styled with a distinctive orange, black, and white color scheme that reflects traditional Chinese aesthetics.

**DEPLOYMENT STATUS**: The project has been configured for dual deployment - it works both as a full-stack application on Replit and as a static site on Netlify with mock data for demonstration purposes.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for the Ming's brand colors (orange, black, white)
- **Build Tool**: Vite for fast development and optimized production builds
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints for menu items, reservations, and contact messages
- **Middleware**: Custom logging middleware for API request tracking
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Development**: Hot module replacement and development server integration

## Database Layer
- **ORM**: Drizzle ORM for type-safe database operations with PostgreSQL
- **Schema Management**: Drizzle Kit for database migrations and schema generation
- **Database**: PostgreSQL (configured for Neon Database in production)
- **Storage Strategy**: In-memory storage for development with interfaces designed for database migration
- **Data Models**: Users, reservations, menu items, and contact messages with proper relationships

## Design System
- **Component Library**: Custom component system extending Radix UI primitives
- **Theme System**: CSS custom properties for consistent color management
- **Animation**: Custom scroll animations and hover effects using Intersection Observer API
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Typography**: Custom font system with display fonts for headings and readable fonts for body text

## Development Workflow
- **TypeScript Configuration**: Strict type checking with path mapping for clean imports
- **Build Process**: Separate client and server builds with esbuild for server bundling
- **Development Server**: Integrated Vite development server with Express backend
- **Asset Management**: Static asset serving with proper path resolution

# Deployment Configuration

## Dual Deployment Support
The project supports deployment on two platforms:

### Replit (Full-Stack)
- Complete Express.js backend with PostgreSQL integration
- Real-time API endpoints for menu, reservations, and contact forms
- Development and production environments
- Session management and authentication ready

### Netlify (Static SPA)
- Static site deployment with mock data system
- Client-side routing with SPA configuration
- Optimized build process for static hosting
- Performance optimizations (caching, compression)

## Netlify-Specific Features
- **netlify.toml**: Configuration for build settings and redirects
- **Mock Data System**: Client-side data simulation in `client/src/lib/mockData.ts`
- **Conditional API Client**: Environment-aware API layer in `client/src/lib/apiClient.ts`
- **Static Build Script**: Custom build process in `build-netlify.js`
- **SPA Routing**: All routes redirect to index.html for client-side routing

## Files Added for Netlify
- `netlify.toml` - Netlify configuration
- `build-netlify.js` - Custom build script
- `client/src/lib/mockData.ts` - Mock data service
- `client/src/lib/netlifyQueryClient.ts` - Netlify-specific query client
- `client/src/lib/apiClient.ts` - Universal API client
- `NETLIFY_DEPLOYMENT.md` - Comprehensive deployment guide

# External Dependencies

## UI and Styling
- **Radix UI**: Comprehensive collection of unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Class Variance Authority**: Type-safe variant management for component styling
- **Embla Carousel**: Touch-friendly carousel component for image galleries

## Data Management
- **TanStack Query**: Powerful data synchronization and caching library
- **React Hook Form**: Performant forms with easy validation integration
- **Zod**: TypeScript-first schema validation for runtime type checking
- **Drizzle ORM**: Lightweight, type-safe ORM for PostgreSQL

## Database and Hosting
- **Neon Database**: Serverless PostgreSQL database with branching capabilities
- **Connect PG Simple**: PostgreSQL session store for Express sessions

## Development Tools
- **Vite**: Next-generation frontend tooling for fast development
- **ESBuild**: Extremely fast JavaScript bundler for production builds
- **TSX**: TypeScript execution environment for development server
- **Replit Integration**: Development environment plugins and error handling