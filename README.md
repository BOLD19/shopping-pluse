# Next.js Landing Page Template

A modern, responsive landing page template built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Perfect for startups, agencies, and businesses looking to create stunning landing pages quickly.

## 🚀 Features

- **Modern Design**: Clean and professional design with beautiful animations
- **Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Performance**: Built with Next.js 14 for optimal performance and SEO
- **TypeScript**: Type-safe development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Smooth animations and transitions
- **Components**: Modular, reusable components
- **Customizable**: Easy to customize colors, fonts, and layouts

## 🏗️ Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [React 18](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons
- [Heroicons](https://heroicons.com/) - Additional icons

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── about-us/          # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page (optional)
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── home/             # Homepage components
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Features.tsx  # Features grid
│   │   ├── About.tsx     # About section
│   │   ├── CTA.tsx       # Call to action
│   │   └── FAQ.tsx       # FAQ section
│   ├── ui/               # UI components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   └── ContactForm.tsx   # Contact form
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── types/               # TypeScript types
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nextjs-landing-template.git
   cd nextjs-landing-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors & Theme

The template uses Tailwind CSS for styling. You can customize the color scheme by modifying `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        // Add your custom colors
      },
    },
  },
}
```

### Content

1. **Homepage Hero Section** (`src/components/home/Hero.tsx`)
   - Update heading, description, and call-to-action buttons
   - Replace placeholder image with your hero image

2. **Features Section** (`src/components/home/Features.tsx`)
   - Modify the `features` array to showcase your product/service features
   - Update icons using Lucide React icons

3. **About Section** (`src/components/home/About.tsx`)
   - Update company information and statistics
   - Modify benefits list and call-to-action

4. **FAQ Section** (`src/components/home/FAQ.tsx`)
   - Update the `faqs` array with your frequently asked questions

### Navigation

Update the navigation menu in `src/components/Header.tsx`:

```tsx
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about-us' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  // Add your menu items
];
```

### Contact Information

Update contact details in `src/app/contact/page.tsx`:

```tsx
const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "your-email@company.com", // Update with your email
    description: "Send us an email anytime"
  },
  // Update other contact information
];
```

## 📱 Pages Included

- **Homepage** (`/`) - Hero, Features, About, CTA, FAQ sections
- **About** (`/about-us`) - Company info, values, team, FAQ
- **Contact** (`/contact`) - Contact form, company info, map placeholder
- **Services** (`/services`) - Optional services page (create as needed)

## 🎯 Components

### Home Components

- `Hero` - Main hero section with CTA buttons
- `Features` - Grid of product/service features
- `About` - Company overview with statistics
- `CTA` - Call-to-action section
- `FAQ` - Frequently asked questions

### UI Components

- `Header` - Navigation header with menu
- `Footer` - Site footer with links
- `ContactForm` - Reusable contact form
- `Input` - Custom input component

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The template can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the template, feel free to:
- Open an issue on GitHub
- Contact us at support@yourcompany.com

## 🎉 What's Next?

Ideas for extending this template:
- Add a blog section
- Integrate with a CMS (Contentful, Strapi)
- Add e-commerce functionality
- Implement user authentication
- Add multi-language support
- Integrate with analytics

---

Made with ❤️ by [Your Name/Company] 