import React, {useState, useRef} from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme, blueTheme, materialDarkTheme } from "./theme";
import { GlobalStyles } from "./global";
import ToggleButton from "./components/header/toggleButton/ToggleButton";



function App() {
  const cursorDot = useRef();
  const cursorOutline = useRef();
  const [t, setT] = useState(materialDarkTheme)

  window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.current.style.left = `${posX}px`;
    cursorDot.current.style.top= `${posY}px`;
    cursorOutline.current.animate({
      left: `${posX}px`,
      top: `${posY}px`
      }, { duration: 500, fill: "forwards"});
    });

  const handleClick = () => {
    if(t === blueTheme){
      setT(materialDarkTheme);
    }
    else{
      setT(blueTheme);
    }
  }
  return (
    <ThemeProvider theme={t}>
      <>
      <div className="cursor-dot" ref={cursorDot}></div>
      <div className="cursor-outline" ref={cursorOutline}></div>
        <GlobalStyles />
        <div>
          <ToggleButton handleClick={handleClick} />
          <Main theme={t} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
