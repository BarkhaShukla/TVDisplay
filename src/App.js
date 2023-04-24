import React, { useState, useEffect } from "react";
import CurrentTime from "./components/CurrentTime";
import Location from "./components/Location";
import ImageDisplay from "./components/ImageDisplay";
import SRAMission from "./components/SRAMission";
const pages = [
  { title: "Current Time and Date", component: <CurrentTime /> },
  { title: "Current Location", component: <Location /> },
  { title: "Image Display", component: <ImageDisplay /> },
  { title: "SRA Mission", component: <SRAMission /> }
];

function App() {
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPageIndex((pageIndex + 1) % pages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [pageIndex]);

  return (
    <div className="App">
      <h1>{pages[pageIndex].title}</h1>
      {pages[pageIndex].component}
    </div>
  );
}
export default App;
