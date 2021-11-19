import React from "react";
import CenterScreen from "./screens/center-screen";
import LeftScreen from "./screens/left-screen";
import RightScreen from "./screens/right-screen";
import '../src/sass/style.css'







function App() {
  return (
    <div className = "app-container" >
      <LeftScreen />
      <CenterScreen />
      <RightScreen />
    </div>
  );
}

export default App;
