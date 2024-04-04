import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import ChartDonut from "./components/chart/ChartDonut";

function App() {
  return (
    <>
      <div className="h-[100dvh] bg-white font-roboto ">
        <Header />
        <Section>
          <div className="grid h-[100dvh] items-center">
            <ChartDonut />
          </div>
        </Section>
        <Section>
          <Faq />
        </Section>
        <Footer />
      </div>
    </>
  );
}

export default App;
