# BESS Strategies Website

A modern, professional website for BESS Strategies - Battery Energy Storage Systems consulting firm.

## Features

- **Next.js 14** with App Router for optimal performance and SEO
- **Tailwind CSS** for responsive, modern styling
- **TypeScript** for type safety and better development experience
- **Framer Motion** for smooth animations
- **Lucide React** for consistent iconography
- **API Routes** for form handling and backend integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── api/          # API routes for form handling
│   ├── globals.css   # Global styles
│   ├── layout.tsx    # Root layout with SEO metadata
│   └── page.tsx      # Main homepage component
├── components/       # Reusable React components
└── lib/             # Utility functions and configurations
```

## Key Sections

1. **Hero Section** - Bold pain point messaging with CTAs
2. **Services** - Comprehensive service offerings
3. **Case Studies** - Success stories and social proof
4. **Team** - Expert team member profiles
5. **Company** - Mission, vision, and company information
6. **AI Battery Agent** - Coming soon BAMS feature
7. **Contact** - Contact form and information

## Backend Integration

### Google Sheets Integration
- Contact form submissions ready for Google Sheets API
- Newsletter signups prepared for Mailchimp integration
- API routes in `/src/app/api/` for handling form submissions

### Environment Variables

Create a `.env.local` file with:

```env
GOOGLE_SHEETS_API_KEY=your_api_key
MAILCHIMP_API_KEY=your_mailchimp_key
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_key
```

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Custom Server (Linode/Google Cloud)
1. Build the application: `npm run build`
2. Start the production server: `npm start`
3. Configure reverse proxy (nginx) for domain routing

## Performance Optimizations

- Image optimization with Next.js Image component
- CSS optimization and purging
- Lazy loading for images and components
- Optimized fonts with Google Fonts
- Minified production builds

## SEO Features

- Comprehensive meta tags and Open Graph data
- Structured data for better search visibility
- Optimized page titles and descriptions
- Sitemap generation
- Fast loading speeds for better rankings

## Color Palette

- Primary Orange: `#FF6A39`
- Primary Purple: `#9678D3`
- White backgrounds with purple headlines and orange accents

## Typography

- Headlines: System fonts (fallback for Conthrax)
- Body text: Roboto from Google Fonts

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© 2025 BESS Strategies. All rights reserved.