import { useState } from "react";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import ChartDonut from "./components/chart/ChartDonut";
import { ColorContext } from "./utils/ColorContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [dotColor, setDotColor] = useState<string>("");

  return (
    <Router>
      <ColorContext.Provider value={{ dotColor, setDotColor }}>
        <div className="h-[100dvh] bg-white font-roboto ">
          <Header />
          <Section>
            <div className="grid h-[100dvh] max-h-[1200px] items-center">
              <ChartDonut />
            </div>
          </Section>
          <Section>
            <Routes>
              <Route path="/faq" Component={Faq} />
            </Routes>
          </Section>
          <Footer />
        </div>
      </ColorContext.Provider>
    </Router>
  );
}

export default App;
