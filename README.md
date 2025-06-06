# Better in Binary

A minimalist business website for Better in Binary, showcasing software development services with clean design and modern typography.

## Features

- Minimalist design with Space Grotesk font
- Responsive layout optimized for all devices
- Clean service showcases and case studies
- Contact form with validation
- Built with React, TypeScript, and Tailwind CSS

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Wouter (routing)
- **Backend**: Express.js, Node.js
- **Styling**: Tailwind CSS with custom design system
- **Deployment**: Optimized for Vercel

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

This project is configured for deployment on multiple platforms:

### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect the configuration from `vercel.json`
3. Deploy with a single click

### Netlify
1. Connect your repository to Netlify
2. Netlify will use the configuration from `netlify.toml`
3. Deploy automatically

### Manual Deployment
1. Run `npm run build` to create production build
2. Upload the contents of `dist/public` to any static hosting service

The project includes:
- `vercel.json` for Vercel deployment
- `netlify.toml` for Netlify deployment
- Static build output in `dist/public`

## Project Structure

```
├── client/          # Frontend React application
├── server/          # Backend Express server
├── shared/          # Shared types and schemas
├── api/             # Vercel serverless functions
└── vercel.json      # Vercel deployment configuration
```

## Services

- Web Development
- Mobile Applications  
- Business Automation

## License

MIT