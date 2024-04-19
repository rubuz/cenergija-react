import { useState } from "react";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import ChartDonut from "./components/chart/ChartDonut";
import { ColorContext } from "./utils/ColorContext";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [dotColor, setDotColor] = useState<string>("");

  return (
    <ColorContext.Provider value={{ dotColor, setDotColor }}>
      <div className="relative bg-white font-roboto">
        <Header />
        <Section>
          <div className="my-40 grid h-full max-h-[1200px] items-center">
            <ChartDonut />
          </div>
        </Section>
        <Section>
          <Faq />
        </Section>
        <Footer />
      </div>
      <Analytics />
    </ColorContext.Provider>
  );
}

export default App;
