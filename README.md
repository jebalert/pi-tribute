# π Tribute - A Beautiful Journey Through the History of Pi

A stunning, interactive website dedicated to celebrating the mathematical constant π (pi). This site features beautiful visualizations, historical timelines, and interesting facts about pi, making mathematics more accessible and engaging for everyone.

## Live Demo

Visit the live site at: [https://mmmpi.com](https://mmmpi.com)

## Features

- 🎨 Beautiful, responsive design with smooth animations
- 📜 Interactive timeline of pi's history
- 🔢 Fascinating facts about pi
- 🎯 Interactive visualizations
- 📱 Mobile-friendly layout
- 💰 Optional AdSense integration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jebalert/pi-tribute.git
cd pi-tribute
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - If you want to use AdSense, update the following variables in `.env`:
     ```
     VITE_ADSENSE_CLIENT_ID=your-ad-client-id
     VITE_ADSENSE_SLOT=your-ad-slot
     ```
   - If you don't want to use AdSense, you can leave these variables empty

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Deployment

This site is automatically deployed using GitHub Pages and is accessible at [https://mmmpi.com](https://mmmpi.com).

To deploy manually:
1. Go to the "Actions" tab in the GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### Custom Domain Setup

The site is configured to use a custom domain (mmmpi.com) with HTTPS enabled. The configuration includes:

- Custom domain configuration in GitHub Pages settings
- CNAME file in the public directory
- DNS records pointing to GitHub Pages servers
- Automatic HTTPS certificate provisioning through GitHub Pages

## Technology Stack

- React 18
- TypeScript
- Vite
- Emotion (Styled Components)
- Framer Motion
- GSAP
- React Intersection Observer

## Customization

### Styling

The site uses Emotion for styling. You can customize the colors, layouts, and animations by modifying the styled components in each component file.

### Content

Update the content in the following files:
- `src/components/Timeline.tsx` - Historical timeline
- `src/components/Facts.tsx` - Interesting facts about pi
- `src/components/Visualizations.tsx` - Interactive visualizations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the mathematical community for preserving and advancing our understanding of π
- Special thanks to all the mathematicians throughout history who contributed to our knowledge of pi

## Contact

Joseph Benfante - [@jebalert](https://github.com/jebalert)

Project Link: [https://github.com/jebalert/pi-tribute](https://github.com/jebalert/pi-tribute)
