import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { initializeApp, getApps } from "firebase/app";
import { EntryStackScreen } from "./screens/EntryStackScreen";

// Make sure to create a file called "keys.json" in your project
// directory & add your Firebase configuration keys to that file.
// We add this file to our gitignore, since we don't want this to be
// published on Version Control.
const firebaseConfig = require("./keys.json");

if (getApps().length == 0) {
  initializeApp(firebaseConfig);
}

// Theme Object for React Native Paper


export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <EntryStackScreen />
      </PaperProvider>
    </SafeAreaProvider>
  );
}