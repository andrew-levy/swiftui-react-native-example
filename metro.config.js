/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * Importing the swiftui-react-native project
 * https://dushyant37.medium.com/how-to-import-files-from-outside-of-root-directory-with-react-native-metro-bundler-18207a348427
 *
 * @format
 */

const path = require('path');
const extraNodeModules = {
  common: path.resolve(path.join(__dirname, '/../swiftui-react-native/dist')),
};
const watchFolders = [
  path.resolve(path.join(__dirname, '/../swiftui-react-native/dist')),
];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) =>
        //redirects dependencies referenced from ../swiftui-react-native to local node_modules
        name in target
          ? target[name]
          : path.join(process.cwd(), `node_modules/${name}`),
    }),
  },
  watchFolders,
};
