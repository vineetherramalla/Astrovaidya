# Cosmic Insights - Professional Astrology Website

A complete, production-oriented astrology website built with React, Vite, and Tailwind CSS. This project features a beautiful, responsive design with client-side data management using localStorage.

## 🌟 Features

### Core Features
- **Fixed Top Bar**: Contact information (phone & email) always visible
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Continuous Services Marquee**: Infinite scrolling ticker that pauses on hover/focus (keyboard accessible)
- **Hero Section**: Eye-catching landing with call-to-action buttons
- **Services Grid**: Interactive cards with modal details
- **Latest Updates Feed**: Display announcements and news
- **Contact Form**: Client-side form with mailto fallback
- **Admin Panel**: Full CRUD operations for services and updates

### Design Features
- **Color Scheme**: Custom astrology-themed palette
  - Deep Brown: `#562C2C`
  - Accent Orange: `#F2542D`
  - Warm Sand: `#F5DFBB`
  - Teal: `#0E9594`
  - Deep Teal: `#127475`
- **Typography**: Elegant serif headings (Playfair Display) with clean sans-serif body text (Inter)
- **Animations**: Subtle fade-ins, slide-ups, and smooth marquee scrolling
- **Responsive**: Mobile-first design, tested at 320px, 768px, and 1024px+

### Data Management
- **localStorage Persistence**: All data stored locally in the browser
- **Export/Import**: Backup and restore data as JSON
- **Sample Data**: Pre-loaded with example services and updates
- **Reset Function**: Restore to original sample data

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Clone or download the repository**

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/              # Images and static assets
│   └── hero-cosmic.jpg  # Hero section background
├── components/          # React components
│   ├── ui/             # Shadcn UI components
│   ├── TopBar.tsx      # Fixed top bar with contact info
│   ├── Navbar.tsx      # Navigation with mobile menu
│   ├── MarqueeServices.tsx  # Scrolling services ticker
│   ├── Hero.tsx        # Hero section
│   ├── ServicesGrid.tsx     # Services cards grid
│   ├── ServiceModal.tsx     # Service detail modal
│   ├── UpdatesFeed.tsx      # Latest updates display
│   ├── ContactForm.tsx      # Contact form
│   ├── Footer.tsx      # Footer component
│   └── AdminPanel.tsx  # Admin CRUD interface
├── data/
│   └── sampleData.json # Initial seed data
├── pages/              # Page components
│   ├── Home.tsx        # Main landing page
│   ├── ServicePage.tsx # Individual service detail page
│   ├── Admin.tsx       # Admin panel with authentication
│   └── NotFound.tsx    # 404 page
├── utils/
│   ├── localStorage.ts # localStorage CRUD helpers
│   └── iconMap.ts      # Icon mapping utility
├── App.tsx             # Main app component with routing
├── index.css           # Global styles and design system
└── main.tsx            # Application entry point
```

## 🔧 Admin Panel

### Accessing the Admin Panel

1. Navigate to `/admin`
2. Enter the PIN: `1234` (default demo PIN)
3. Access granted for the session

### Admin Features

- **Services Management**: Add, edit, delete services
- **Updates Management**: Create, modify, remove updates
- **Data Export**: Download all data as JSON backup
- **Data Import**: Restore data from JSON file
- **Reset Data**: Restore to sample data

### Important Security Note

⚠️ **The admin panel uses client-side authentication and is NOT secure for production use.**

For production deployment:
- Implement server-side authentication
- Use encrypted credentials
- Store data in a proper database
- Implement role-based access control
- Use HTTPS for all communications

## 💾 Data Persistence

All data is stored in browser localStorage with the following keys:
- `astro_services` - Services data
- `astro_updates` - Updates data
- `astro_site_info` - Site information (brand, phone, email)
- `astro_initialized` - Initialization flag

### How Persistence Works

1. **First Visit**: Sample data from `sampleData.json` is loaded into localStorage
2. **Subsequent Visits**: Data is loaded from localStorage
3. **Admin Changes**: Updates are immediately saved to localStorage
4. **Data Backup**: Export creates a JSON file with all data
5. **Data Restore**: Import overwrites localStorage with uploaded JSON

### Reset to Sample Data

To reset all data to the original sample data:
1. Go to Admin Panel
2. Click "Reset to Sample Data"
3. Confirm the action

Or manually clear localStorage:
```javascript
localStorage.clear();
// Then reload the page
```

## 🎨 Customization

### Updating Colors

Edit `tailwind.config.ts` and `src/index.css`:

```typescript
// tailwind.config.ts
astrology: {
  brown: "#562C2C",      // Replace with your color
  orange: "#F2542D",     // Replace with your color
  sand: "#F5DFBB",       // Replace with your color
  teal: "#0E9594",       // Replace with your color
  "deep-teal": "#127475" // Replace with your color
}
```

### Updating Site Information

1. Go to Admin Panel
2. Edit site information (or edit `sampleData.json` before first run)
3. Changes persist in localStorage

### Adding New Services

1. Access Admin Panel (`/admin`)
2. Go to Services tab
3. Click "Add Service"
4. Fill in details:
   - Title (required)
   - Tagline (required)
   - Icon name from Lucide icons (required)
   - Description
   - Price
   - Duration

### Available Icons

Common Lucide icon names you can use:
- `Star`, `Heart`, `Briefcase`, `Home`, `Gem`, `Calendar`
- `Phone`, `Mail`, `Clock`, `MapPin`
- `Sparkles`, `Moon`, `Sun`
- And many more from [Lucide Icons](https://lucide.dev/)

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## ♿ Accessibility Features

- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`)
- ARIA labels for interactive elements
- Keyboard navigation support
- Marquee pauses on hover and keyboard focus
- Proper contrast ratios
- Skip links and focus management

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📧 Contact Form

The contact form uses `mailto:` links with prefilled content. When users submit:
1. Form data is collected
2. Default email client opens with prefilled message
3. User can review and send

**Note**: This requires users to have an email client configured. For production, consider:
- Implementing a backend email service
- Using a third-party service like SendGrid or EmailJS
- Adding a direct contact email as fallback

## 🛠️ Tech Stack

- **Frontend**: React 18+ (JSX)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Animations**: CSS animations and Framer Motion
- **Forms**: React Hook Form
- **State Management**: React Query

## 📝 License

This project is provided as-is for demonstration purposes.

## 🤝 Support

For issues or questions:
- Check this README
- Review the code comments
- Check browser console for errors

## 🔄 Future Enhancements

Consider adding:
- Backend integration (Supabase, Firebase, or custom API)
- User authentication and profiles
- Online payment integration (Stripe, Razorpay)
- Booking system with calendar
- Email notifications
- Blog/Articles section
- Testimonials management
- Multi-language support
- SEO optimization
- Analytics integration

---

**Built with ❤️ for the astrology community**
