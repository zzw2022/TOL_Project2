/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */


// const config = {
//   apiKey: "AIzaSyAag0XZs5eHDHoAduOjie2NtLRTmK10mA8",
//   authDomain: "friendlychat-c46f6.firebaseapp.com",
//   projectId: "friendlychat-c46f6",
//   storageBucket: "friendlychat-c46f6.appspot.com",
//   messagingSenderId: "911089474345",
//   appId: "1:911089474345:web:8ab7500f4d78c21387f538"
// };

const config = {
  apiKey: "AIzaSyAag0XZs5eHDHoAduOjie2NtLRTmK10mA8",
  authDomain: "friendlychat-c46f6.firebaseapp.com",
  databaseURL: "https://friendlychat-c46f6-default-rtdb.firebaseio.com",
  projectId: "friendlychat-c46f6",
  storageBucket: "friendlychat-c46f6.appspot.com",
  messagingSenderId: "911089474345",
  appId: "1:911089474345:web:8ab7500f4d78c21387f538"
};// Miss measurementId????


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}