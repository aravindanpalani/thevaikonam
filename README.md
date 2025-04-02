# Namma Thevai - Emergency Services App

Namma Thevai is a modern web application that connects users with emergency service providers like plumbers, electricians, cleaners, and more. The app features real-time availability status, ratings, and quick booking functionality.

## Features

- **Service Provider Listings**: Browse through verified service providers with detailed profiles
- **Filtering System**: Filter providers by service type, availability status, and more
- **Search Functionality**: Quickly find specific services or providers
- **Animated UI**: Smooth animations enhance the user experience
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Status**: See which providers are currently available
- **Rating System**: Make informed decisions based on reviews and ratings

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/namma-thevai.git
cd namma-thevai
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

```
/namma-thevai/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       └── images/
│           └── logo.svg
├── src/
│   ├── index.js
│   ├── App.js
│   ├── components/
│   │   ├── Header.js
│   │   ├── ServiceFilter.js
│   │   ├── ProviderCard.js 
│   │   ├── SearchBar.js
│   │   ├── Footer.js
│   │   └── animations/
│   │       ├── FadeIn.js
│   │       ├── SlideIn.js
│   │       └── PulseAnimation.js
│   ├── styles/
│   │   ├── global.css
│   │   └── animations.css
│   ├── data/
│   │   └── providers.js
│   └── utils/
│       └── filterHelpers.js
├── package.json
└── README.md
```

## Building for Production

To build the app for production:

```bash
npm run build
```

This creates an optimized production build in the `build` folder that's ready for deployment.

## Technologies Used

- React.js
- CSS3 with custom animations
- Intersection Observer API for scroll animations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Project Link: [https://github.com/yourusername/namma-thevai](https://github.com/yourusername/namma-thevai)
