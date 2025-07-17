# TV Remote Control App

A React Native app built with Expo that provides a universal remote control for TVs, supporting both IR and Smart TV functionality.

## Features

- **Universal Remote Control**: Control your TV with your smartphone
- **IR Remote Support**: Traditional infrared remote control functionality
- **Smart TV Support**: Connect to Smart TVs via WiFi
- **Device Discovery**: Automatically search and connect to compatible devices
- **Modern UI**: Beautiful gradient design with intuitive controls
- **Vibration Feedback**: Haptic feedback for better user experience

## Screens

1. **Home Screen**: Loading screen with start button
2. **Remote Selection**: Choose between IR and Smart TV remote
3. **Device Search**: Search and connect to TV devices
4. **IR Remote**: Full-featured IR remote control
5. **Smart Remote**: Smart TV remote with streaming app shortcuts

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd TVRemoteControl
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your device:
   - **Android**: `npm run android`
   - **iOS**: `npm run ios`
   - **Web**: `npm run web`

## Building for Production

### Android APK

1. Install EAS CLI:
```bash
npm install -g @expo/eas-cli
```

2. Configure EAS:
```bash
eas build:configure
```

3. Build APK:
```bash
eas build --platform android --profile preview
```

### Google Play Store

1. Build AAB for Play Store:
```bash
eas build --platform android --profile production
```

2. Submit to Play Store:
```bash
eas submit --platform android
```

## Project Structure

```
TVRemoteControl/
├── src/
│   ├── navigation/
│   │   └── AppNavigator.jsx
│   ├── screens/
│   │   ├── HomeScreen.jsx
│   │   ├── RemoteSelectionScreen.jsx
│   │   ├── DeviceSearchScreen.jsx
│   │   ├── IRRemoteScreen.jsx
│   │   └── SmartRemoteScreen.jsx
│   ├── components/
│   │   └── RemoteButton.jsx
│   ├── types/
│   │   └── index.js
│   └── utils/
├── assets/
├── App.jsx
├── index.js
├── app.json
└── package.json
```

## Key Components

### Navigation
- React Navigation v6 with Stack Navigator
- Clean navigation structure with JavaScript

### Screens
- **HomeScreen**: Welcome screen with loading animation
- **RemoteSelectionScreen**: Choose remote type (IR/Smart)
- **DeviceSearchScreen**: Search and connect to devices
- **IRRemoteScreen**: Traditional TV remote interface
- **SmartRemoteScreen**: Smart TV remote with streaming controls

### Features
- Gradient backgrounds using expo-linear-gradient
- Vector icons with @expo/vector-icons
- Haptic feedback with Vibration API
- Responsive design for different screen sizes

## Customization

### Colors
The app uses a consistent color scheme defined in the styles:
- Primary: `#4A90E2` (Blue)
- Secondary: `#667eea` to `#764ba2` (Gradient)
- Accent: `#e74c3c` (Red for power button)
- Success: `#27ae60` (Green)
- Dark: `#34495e` (Button backgrounds)

### Adding New Remote Types
1. Create a new screen in `src/screens/`
2. Add the route definition in `src/types/index.js`
3. Add the screen to the navigator in `src/navigation/AppNavigator.jsx`

## Permissions

The app requires the following permissions:
- `INTERNET`: For network communication
- `ACCESS_NETWORK_STATE`: To check network status
- `ACCESS_WIFI_STATE`: To access WiFi information
- `VIBRATE`: For haptic feedback

## Technologies Used

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and build service
- **JavaScript**: Modern JavaScript with JSDoc for type hints
- **React Navigation**: Navigation library
- **Expo Linear Gradient**: Gradient backgrounds
- **Expo Vector Icons**: Icon library

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the development team.

## Roadmap

- [ ] Add more TV brand support
- [ ] Implement actual IR functionality
- [ ] Add voice control
- [ ] Support for streaming devices (Roku, Chromecast)
- [ ] Custom remote layouts
- [ ] Multi-device support
- [ ] Dark mode theme