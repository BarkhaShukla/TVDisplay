import React, { useState, useEffect } from "react";
import DayDate from "./components/DayDate";
import Location from "./components/Location";
import SRALabImg from "./components/SRALabImg";
import SRAMission from "./components/SRAMission";
const pages = [
  { component: <DayDate /> },
  { component: <Location /> },
  { component: <SRALabImg /> },
  { component: <SRAMission /> }
];

function App() {
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPageIndex((pageIndex + 1) % pages.length);
    }, 7000);

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
