import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import Tables from "./components/Tables";
import ChartDonut from "./components/chart/ChartDonut";

function App() {
  return (
    <>
      <div className="h-[100dvh] bg-white font-roboto ">
        <Header />
        <Section>
          <h1 className="my-14 mt-20 text-center text-5xl font-bold">
            TRENUNTA CENA ELEKTRIČNE OMREŽNINE
          </h1>
        </Section>
        <Section>
          <ChartDonut />
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
