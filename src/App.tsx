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
          <h1 className="my-14 text-center text-5xl font-bold">
            CENA ELEKTRIČNE ENERGIJE
          </h1>
        </Section>
        <Section>
          <ChartDonut />
        </Section>
        <Section>
          <Tables />
        </Section>
      </div>
    </>
  );
}

export default App;
