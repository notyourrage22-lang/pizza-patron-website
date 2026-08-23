# Pizza Patrón - Tezel/Culebra Road Website

## Overview
Professional, SEO-optimized website for Pizza Patrón's Tezel/Culebra Road location in San Antonio, TX. Designed to attract walk-in customers and drive online orders.

## Features

### 🎨 Design
- **Modern & Aesthetic**: Professional color scheme (pizza red, gold accents)
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Fast Loading**: Optimized images and minimal dependencies
- **Smooth Animations**: Engaging fade-in and scroll animations

### 📱 Sections
1. **Navigation Bar**: Sticky nav with mobile hamburger menu
2. **Hero Section**: Eye-catching banner with call-to-action buttons
3. **Quick Info**: Location, hours, phone, and price range
4. **Featured Menu**: Showcase of popular pizza items
5. **About**: Restaurant story and highlights
6. **Reviews**: Customer testimonials and ratings
7. **Contact**: Location, hours, ordering info, and contact form
8. **Footer**: Quick links and social media

### 🔍 SEO Optimization
- **Meta Tags**: Optimized title, description, and keywords
- **Open Graph**: Social media preview optimization
- **Schema Markup Ready**: Structured data for search engines
- **Mobile-First**: Responsive design for better rankings
- **Fast Performance**: Minimal CSS/JS for faster load times
- **Sitemap & Robots.txt**: Included for search engine crawling
- **Semantic HTML**: Proper heading hierarchy and alt text

### 🎯 Call-to-Action Features
- **Order Now Button**: Direct link to order.pizzapatron.com
- **Get Directions**: One-click Google Maps directions
- **Direct Phone**: Clickable phone number
- **Contact Form**: Customer inquiry submission

### 📊 Analytics-Ready
- Event tracking for button clicks
- Conversion tracking hooks
- Compatible with Google Analytics

## File Structure
```
pizza-patron-website/
├── index.html          # Main website
├── css/
│   └── style.css       # All styling
├── js/
│   └── script.js       # Interactive features
├── robots.txt          # SEO - robots.txt
├── sitemap.xml         # SEO - sitemap
└── README.md           # This file
```

## How to Use

### Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. Make changes to CSS or JavaScript as needed

### Deploy to GitHub Pages
1. Go to repository Settings
2. Navigate to Pages
3. Set Source to `main` branch
4. Your site will be live at `https://username.github.io/pizza-patron-website`

### Deploy to Custom Domain
1. Update `robots.txt` and `sitemap.xml` with your domain
2. Add CNAME record pointing to your domain
3. Configure DNS settings with your hosting provider

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #D32F2F;        /* Pizza red */
    --secondary-color: #1976D2;      /* Blue */
    --accent-color: #FFC107;         /* Gold */
}
```

### Content
Edit `index.html` to update:
- Restaurant name and description
- Address and phone number
- Menu items
- Customer reviews
- Social media links

### Images
Replace image URLs with your own pizza photos:
- Update `<img>` src attributes
- Optimize images for web (compress for faster loading)
- Keep aspect ratios consistent

## Performance Tips

1. **Compress Images**: Use tools like TinyPNG for smaller file sizes
2. **Cache Headers**: Configure server to cache static assets
3. **Minify Files**: Minify CSS/JS in production
4. **CDN**: Use a CDN for faster global delivery
5. **Lazy Loading**: Images lazy load as they come into view

## SEO Checklist

- ✅ Meta title and description
- ✅ Mobile responsive design
- ✅ Fast page load time
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Open Graph tags
- ✅ Local business schema ready
- ✅ Semantic HTML
- ✅ Alt text on images
- ✅ Internal linking

## Analytics Setup

### Google Analytics
Add your tracking ID to the HTML:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Google Business Profile
Make sure to:
1. Claim your business on Google
2. Add accurate hours and contact info
3. Post photos and updates regularly
4. Respond to reviews

## Support

For issues or improvements:
1. Create an issue in GitHub
2. Submit a pull request with changes
3. Check the code comments for implementation details

## License

This website is designed for Pizza Patrón Tezel/Culebra Road.

## Contact Information

**Pizza Patrón**
- Address: 9355 Culebra Rd #103, San Antonio, TX 78251
- Phone: (210) 903-2113
- Hours: Open Daily, Closes 11 PM
- Online Orders: order.pizzapatron.com

---

**Created with ❤️ to bring more customers through the door!**