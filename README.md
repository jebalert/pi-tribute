# π Tribute - A Beautiful Journey Through the History of Pi

A stunning, interactive website dedicated to celebrating the mathematical constant π (pi). This site features beautiful visualizations, historical timelines, and interesting facts about pi, making mathematics more accessible and engaging for everyone.

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
git clone https://github.com/yourusername/pi-tribute.git
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

Joseph Benfante - [@jbenfante](https://github.com/jebalert)

Project Link: [https://github.com/jbenfante/pi-tribute](https://github.com/jbenfante/pi-tribute)
