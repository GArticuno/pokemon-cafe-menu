module.exports = {
  name: "pokemon-cafe-menu",
  slug: "pokemon-cafe-menu",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#FFEEDE"
  },
  updates: {
    "fallbackToCacheTimeout": 0
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.moonbeam.pokemoncafemenu"
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFEEDE"
    },
    package: "com.moonbeam.pokemoncafemenu"
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  extra: {
    applicationId: process.env.APPLICATION_ID,
    restApiKey: process.env.REST_API_KEY,
    eas: {
      projectId: "86236b36-6d42-4bf9-a9e7-2150ddd5acfd"
    }
  }
}
