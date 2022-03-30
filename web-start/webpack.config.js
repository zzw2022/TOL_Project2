const path = require('path');

const firebaseConfig = {
  apiKey: "AIzaSyAag0XZs5eHDHoAduOjie2NtLRTmK10mA8",
  authDomain: "friendlychat-c46f6.firebaseapp.com",
  databaseURL: "https://friendlychat-c46f6-default-rtdb.firebaseio.com",
  projectId: "friendlychat-c46f6",
  storageBucket: "friendlychat-c46f6.appspot.com",
  messagingSenderId: "911089474345",
  appId: "1:911089474345:web:8ab7500f4d78c21387f538"
};

const rootConfig = {
  mode: 'development',
  optimization: {
    usedExports: true, // tells webpack to tree-shake
  },
  devtool: 'eval-source-map'
};

const appConfig = {
  ...rootConfig,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/scripts'),
  },
};



const serviceWorkerConfig = {
  ...rootConfig,
  entry: './src/firebase-messaging-sw.js',
  // TODO(jhuleatt): Remove this once https://github.com/firebase/firebase-js-sdk/issues/5314 is resolved
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  output: {
    filename: 'firebase-messaging-sw.js',
    path: path.resolve(__dirname, 'public'),
  },
};

module.exports = [appConfig, serviceWorkerConfig];
