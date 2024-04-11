import { useState } from "react";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import ChartDonut from "./components/chart/ChartDonut";
import { ColorContext } from "./utils/ColorContext";

function App() {
  const [dotColor, setDotColor] = useState<string>("");

  return (
    <ColorContext.Provider value={{ dotColor, setDotColor }}>
      <div className="h-[100dvh] bg-white font-roboto ">
        <Header />
        <Section>
          <div className="grid h-[100dvh] max-h-[1200px] items-center">
            <ChartDonut />
          </div>
        </Section>
        <Section>
          <Faq />
        </Section>
        <Footer />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
