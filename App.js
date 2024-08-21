import React from "react";
import Navigation from "./navigation";
import { ThemeProvider } from "react-native-magnus";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </>
  );
};

export default App;
