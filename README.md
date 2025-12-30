# Eva ATTAL - CV Website

Personal website showcasing my professional experience, technical skills, and background as a Senior Project Manager & Quantitative Software Developer.

## Features

- Modern, responsive design with dark mode support
- Animated typewriter effect on homepage
- Professional experience timeline
- Comprehensive technical skills showcase
- Contact information page
- Built with Next.js 13, React, TypeScript, and Tailwind CSS

## Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

## Installation

1. Clone the repository or navigate to the project directory:
```bash
cd /Users/evaattal/PycharmProjects/evaattal-cv
```

2. Install dependencies:
```bash
npm install
```

## Running the Development Server

Start the development server:
```bash
npm run dev
```

The website will be available at [http://localhost:3000](http://localhost:3000)

## Building for Production

To create a production build:
```bash
npm run build
```

To run the production build:
```bash
npm start
```

## Project Structure

```
evaattal-cv/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── page.tsx        # Homepage
│   │   ├── experience/     # Professional experience page
│   │   ├── skills/         # Technical skills page
│   │   ├── contact/        # Contact information page
│   │   ├── layout.tsx      # Root layout
│   │   └── globals.css     # Global styles
│   ├── components/         # React components
│   │   ├── navbar.tsx      # Navigation bar
│   │   ├── type-writer.tsx # Typewriter animation
│   │   ├── theme-provider.tsx
│   │   ├── theme-toggler.tsx
│   │   └── ui/             # UI components (buttons, etc.)
│   └── lib/
│       └── utils.ts        # Utility functions
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Technologies Used

- **Next.js 13** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **next-themes** - Dark mode support
- **react-simple-typewriter** - Typewriter effect
- **Radix UI** - UI components
- **Lucide React** - Icons

## Customization

To customize the content:

1. **Personal Information**: Edit `/src/components/navbar.tsx` and `/src/app/contact/page.tsx`
2. **Experience**: Edit `/src/app/experience/page.tsx`
3. **Skills**: Edit `/src/app/skills/page.tsx`
4. **Homepage Titles**: Edit `/src/lib/utils.ts` - modify the `titles` array
5. **Colors**: Edit `/src/app/globals.css` and `/tailwind.config.js`

## License

Private project - All rights reserved

---

Built with Next.js and Tailwind CSS
