# Blog API Documentation

A modern, interactive API documentation system for blog platforms built with Astro and Starlight. This project provides a comprehensive documentation solution similar to Swagger/OpenAPI but leverages the power of Astro's static site generation and Starlight's documentation framework.

## 🌟 Features

- **Interactive API Documentation**: Clean, accessible documentation with interactive examples
- **Built with Astro & Starlight**: Fast, static-first approach with excellent developer experience
- **Blog-Focused Endpoints**: Specifically designed for blog system APIs
- **Modern UI/UX**: Beautiful, responsive design with dark mode support
- **Type-Safe**: Built with TypeScript for better development experience
- **SEO Optimized**: Automatic sitemap generation and meta tags
- **Mobile Responsive**: Fully responsive design for all devices

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BrayanVR31/blog-api-docs.git
   cd blog-api-docs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to see your documentation site.

## 📁 Project Structure

```
/
├── public/                 # Static assets
├── src/
│   ├── content/
│   │   └── docs/          # Documentation pages
│   ├── components/        # Custom components
│   ├── pages/            # Astro pages
│   └── styles/           # Global styles
├── astro.config.mjs      # Astro configuration
├── package.json
└── README.md
```

## 🛠️ Available Scripts

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/` |
| `npm run preview` | Preview your build locally, before deploying |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## 📖 Documentation Structure

The API documentation covers the following areas:

### Authentication
- JWT token authentication
- API key management
- User permissions and roles

### Blog Posts
- CRUD operations for blog posts
- Post categories and tags
- Content management
- Publishing workflows

### User Management
- User registration and login
- Profile management
- Author profiles

### Comments System
- Comment CRUD operations
- Moderation features
- Nested comments support

### Media Management
- File upload endpoints
- Image optimization
- Media library management

## ⚙️ Configuration

### Astro Configuration

The project uses a custom Astro configuration with Starlight integration. Key configurations include:

- **Site URL**: Configure your production URL
- **Starlight Theme**: Customized for API documentation
- **Internationalization**: Support for multiple languages
- **Social Links**: GitHub, Twitter, and other social platforms

### Customizing Content

1. **Adding New Endpoints**: Create new `.md` files in `src/content/docs/`
2. **Updating Navigation**: Modify the sidebar configuration in `astro.config.mjs`
3. **Custom Components**: Add reusable components in `src/components/`
4. **Styling**: Update global styles in `src/styles/`

## 🎨 Customization

### Theme Customization

You can customize the appearance by:

1. **Colors**: Modify CSS custom properties in your global styles
2. **Logo**: Replace the logo in the `public/` directory
3. **Favicon**: Update favicon files in `public/`
4. **Fonts**: Configure custom fonts in the Astro config

### Adding Interactive Examples

The documentation includes interactive API examples using:

- Code snippets with syntax highlighting
- Copy-to-clipboard functionality
- Response examples
- Parameter descriptions

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on every push

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Other Platforms

This project can be deployed to any static hosting platform:
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- DigitalOcean App Platform

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Code Standards

- Use TypeScript for type safety
- Follow the existing code style
- Add documentation for new features
- Test your changes locally before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [Starlight](https://starlight.astro.build/) - Documentation framework built on Astro
- [OpenAPI Specification](https://swagger.io/specification/) - API documentation inspiration

## 📞 Support

If you have any questions or need help:

- 📧 Create an issue on GitHub
- 💬 Join the Astro Discord community
- 📖 Check the [Astro documentation](https://docs.astro.build)
- 🌟 Check the [Starlight documentation](https://starlight.astro.build)

---

Made with ❤️ using Astro and Starlight